
import { GoogleGenAI, Chat, GroundingChunk } from "@google/genai";
import { ReportData, ChatMessage, Source } from '../types';

let ai: GoogleGenAI;
let chat: Chat | null = null;

const getAI = () => {
    if(!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY environment variable not set");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
}


const parseSources = (groundingChunks: GroundingChunk[] | undefined): Source[] => {
  if (!groundingChunks) return [];
  
  const sources: Source[] = [];
  groundingChunks.forEach(chunk => {
    if (chunk.web) {
      sources.push({ uri: chunk.web.uri, title: chunk.web.title, type: 'web' });
    } else if (chunk.maps) {
      sources.push({ uri: chunk.maps.uri, title: chunk.maps.title, type: 'maps' });
    }
  });
  return sources;
};

const extractJsonFromString = (text: string): ReportData | null => {
    const jsonRegex = /```json\s*([\s\S]*?)\s*```/;
    const match = text.match(jsonRegex);
    if (match && match[1]) {
        try {
            return JSON.parse(match[1]) as ReportData;
        } catch (error) {
            console.error("Failed to parse JSON from model response:", error);
            return null;
        }
    }
    return null;
};

export const generateReport = async (address: string, location?: { latitude: number; longitude: number }): Promise<{ report: ReportData; sources: Source[] } | null> => {
    chat = null; // Reset chat on new report
    const model = getAI();
    
    const prompt = `Analyze the location at the address: "${address}".

Provide a comprehensive report covering the following areas:
1. School ratings
2. Top restaurants with ratings and cuisine type
3. Grocery stores by ratings and distance
4. Big box stores (like Walmart, Costco) by ratings and distance
5. Connectivity and Commute Score (major highways, traffic, driveability)
6. Proximity to national parks
7. Local kids' parks and recreational areas
8. Nearby police and fire stations
9. Nearby Hospitals and Emergency Rooms
10. Crime Rate Assessment
11. Natural hazard assessment (e.g., fire, flood risk) with ratings

Please format your entire response as a single JSON object enclosed in a markdown code block (\`\`\`json ... \`\`\`). Do not add any text outside of this JSON block.

The JSON object should have the following structure, providing a brief summary and a list of 3-5 relevant items for each category:
{
  "schools": { "summary": "...", "items": [{ "name": "...", "details": "e.g., Rating: 8/10, Type: Public", "googleMapLink": "a valid google maps URL" }] },
  "restaurants": { "summary": "...", "items": [{ "name": "...", "details": "e.g., Cuisine: Italian, Rating: 4.8/5", "googleMapLink": "a valid google maps URL" }] },
  "groceries": { "summary": "...", "items": [{ "name": "...", "details": "e.g., Rating: 4.5/5, Distance: 1.2 miles", "googleMapLink": "a valid google maps URL" }] },
  "bigStores": { "summary": "...", "items": [{ "name": "...", "details": "e.g., Costco, Distance: 3 miles", "googleMapLink": "a valid google maps URL" }] },
  "connectivity": { "summary": "...", "items": [{ "name": "e.g., I-280", "details": "e.g., Access: 2 miles east, Drive Score: 8/10" }] },
  "nationalParks": { "summary": "...", "items": [{ "name": "...", "details": "e.g., Yosemite National Park, Distance: 150 miles", "googleMapLink": "a valid google maps URL" }] },
  "kidsParks": { "summary": "...", "items": [{ "name": "...", "details": "e.g., Central Park, Features: Playground, pond", "googleMapLink": "a valid google maps URL" }] },
  "emergencyServices": { "summary": "...", "items": [{ "name": "...", "details": "e.g., Police Station, Distance: 1.5 miles", "googleMapLink": "a valid google maps URL" }] },
  "healthcare": { "summary": "...", "items": [{ "name": "...", "details": "e.g., General Hospital, ER Available, Distance: 2.5 miles", "googleMapLink": "a valid google maps URL" }] },
  "crime": { "summary": "...", "items": [{ "name": "Overall Risk", "details": "e.g., Low" }, { "name": "Property Crime", "details": "Below average" }] },
  "hazards": { "summary": "...", "items": [{ "name": "...", "details": "e.g., Flood Risk: Low" }] }
}
For each item in the arrays, provide a concise 'name' and 'details' string. For all categories that represent physical locations (schools, restaurants, stores, parks, emergency services, healthcare), you MUST also provide a 'googleMapLink' key with a valid Google Maps URL.`;

    try {
        const response = await model.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                tools: [{ googleSearch: {} }, { googleMaps: {} }],
                ...(location && {
                    toolConfig: {
                        retrievalConfig: {
                            latLng: {
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }
                        }
                    }
                })
            }
        });
        
        const reportText = response.text;
        const report = extractJsonFromString(reportText);

        if (!report) {
            console.error("Could not extract valid JSON report from model response.");
            return null;
        }
        
        const sources = parseSources(response.candidates?.[0]?.groundingMetadata?.groundingChunks);

        // Initialize chat for follow-up questions
        chat = getAI().chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: `You are a helpful local guide AI. You have already provided a report for the address "${address}". The report summary is: ${JSON.stringify(report)}. Now, answer follow-up questions from the user about that location. Use your knowledge and the provided tools to give accurate, up-to-date information.`,
                tools: [{ googleSearch: {} }, { googleMaps: {} }],
                ...(location && {
                    toolConfig: {
                        retrievalConfig: {
                            latLng: {
                                latitude: location.latitude,
                                longitude: location.longitude,
                            }
                        }
                    }
                })
            },
        });


        return { report, sources };

    } catch (error) {
        console.error("Error generating report:", error);
        return null;
    }
};

export const sendChatMessage = async (message: string): Promise<{ text: string; sources: Source[] } | null> => {
    if (!chat) {
        throw new Error("Chat not initialized. Please generate a report first.");
    }
    try {
        const response = await chat.sendMessage({ message });
        const text = response.text;
        const sources = parseSources(response.candidates?.[0]?.groundingMetadata?.groundingChunks);
        return { text, sources };
    } catch(error) {
        console.error("Error sending chat message:", error);
        return null;
    }
};