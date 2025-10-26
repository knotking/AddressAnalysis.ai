
import React, { useState, useEffect, useRef } from 'react';
import { AddressForm } from './components/AddressForm';
import { ReportSection } from './components/ReportSection';
import { ChatInput } from './components/ChatInput';
import { ChatMessage } from './components/ChatMessage';
import { HistoryModal } from './components/HistoryModal';
import { ReportActions } from './components/ReportActions';
import { ReportSummary } from './components/ReportSummary';
import { generateReport, sendChatMessage, initializeChatForReport, generateReportSummary } from './services/geminiService';
import { ReportData, ChatMessage as ChatMessageType, Source, HistoricReport } from './types';
import { useGeolocation } from './hooks/useGeolocation';
import { useHistory } from './hooks/useHistory';
import { HistoryIcon } from './components/icons';

const App: React.FC = () => {
  const [report, setReport] = useState<ReportData | null>(null);
  const [reportSummary, setReportSummary] = useState<string | null>(null);
  const [currentAddress, setCurrentAddress] = useState<string>('');
  const [reportSources, setReportSources] = useState<Source[]>([]);
  const [chatHistory, setChatHistory] = useState<ChatMessageType[]>([]);
  const [isReportLoading, setIsReportLoading] = useState(false);
  const [isSummaryLoading, setIsSummaryLoading] = useState(false);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const location = useGeolocation();
  const { history, saveReport, deleteReport, clearHistory } = useHistory();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleLoadReport = (historicReport: HistoricReport) => {
    setCurrentAddress(historicReport.address);
    setReport(historicReport.report);
    setReportSources(historicReport.sources);
    setReportSummary(historicReport.summary || null);
    setChatHistory([]);
    setError(null);
    setIsHistoryOpen(false);

    // Re-initialize chat context
    const userLocation = location.latitude && location.longitude ? { latitude: location.latitude, longitude: location.longitude } : undefined;
    initializeChatForReport(historicReport.address, historicReport.report, userLocation);
  };
  
  const handleGenerateReport = async (address: string) => {
    const existingReport = history.find(
      (item) => item.address.trim().toLowerCase() === address.trim().toLowerCase()
    );

    if (existingReport) {
      handleLoadReport(existingReport);
      return;
    }
    
    setIsReportLoading(true);
    setError(null);
    setReport(null);
    setReportSummary(null);
    setCurrentAddress(address);
    setChatHistory([]);
    setReportSources([]);

    const userLocation = location.latitude && location.longitude ? { latitude: location.latitude, longitude: location.longitude } : undefined;

    const result = await generateReport(address, userLocation);
    
    setIsReportLoading(false);

    if (result) {
      setReport(result.report);
      setReportSources(result.sources);

      setIsSummaryLoading(true);
      const summary = await generateReportSummary(result.report);
      if (summary) {
        setReportSummary(summary);
      }
      setIsSummaryLoading(false);
      
      saveReport(address, result.report, result.sources, summary || '');

    } else {
      setError('Failed to generate the report. The address may be invalid or the service is unavailable. Please try again.');
    }
  };

  const handleSendMessage = async (message: string) => {
    const userMessage: ChatMessageType = { role: 'user', text: message };
    setChatHistory((prev) => [...prev, userMessage]);
    setIsChatLoading(true);

    const response = await sendChatMessage(message);

    if (response) {
      const modelMessage: ChatMessageType = { role: 'model', text: response.text, sources: response.sources };
      setChatHistory((prev) => [...prev, modelMessage]);
    } else {
      const errorMessage: ChatMessageType = { role: 'model', text: "Sorry, I couldn't process that. Please try asking in a different way." };
      setChatHistory((prev) => [...prev, errorMessage]);
    }
    setIsChatLoading(false);
  };

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
  const formatTitle = (s: string) => s.replace(/([A-Z])/g, ' $1').trim();


  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="p-4 bg-gray-800/50 border-b border-gray-700 backdrop-blur-sm sticky top-0 z-10 flex justify-between items-center">
        <div className="flex-1"></div>
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text flex-1">
          Neighborhood Analyst AI
        </h1>
        <div className="flex-1 flex justify-end">
            <button 
                onClick={() => setIsHistoryOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 text-gray-200 rounded-full transition-colors"
                aria-label="View report history"
            >
                <HistoryIcon />
                <span>History</span>
            </button>
        </div>
      </header>

      <main className="flex-grow overflow-y-auto p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <AddressForm onGenerateReport={handleGenerateReport} isLoading={isReportLoading} />
          </div>

          {error && <div className="bg-red-900/50 border border-red-700 text-red-200 p-4 rounded-lg text-center">{error}</div>}
          
          {!report && !isReportLoading && !error && (
            <div className="text-center text-gray-400 p-8 border-2 border-dashed border-gray-700 rounded-lg">
                <h2 className="text-xl font-semibold">Welcome!</h2>
                <p>Enter an address above to get a detailed neighborhood report and start a conversation with our AI assistant.</p>
            </div>
          )}

          {report && (
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <h2 className="text-3xl font-bold text-white">Location Report</h2>
                <ReportActions address={currentAddress} report={report} />
              </div>
              
              {isSummaryLoading && (
                <div className="p-4 bg-gray-800 border border-gray-700 rounded-lg mb-6 animate-pulse">
                   <div className="h-6 bg-gray-700 rounded w-1/4 mb-4"></div>
                   <div className="space-y-3">
                     <div className="h-4 bg-gray-700 rounded w-full"></div>
                     <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                     <div className="h-4 bg-gray-700 rounded w-full"></div>
                     <div className="h-4 bg-gray-700 rounded w-4/6"></div>
                   </div>
                </div>
              )}
              {reportSummary && !isSummaryLoading && <ReportSummary summary={reportSummary} />}

              {(Object.keys(report) as Array<keyof ReportData>).map((key) => {
                const value = report[key];
                return (
                  <ReportSection
                    key={key}
                    title={capitalize(formatTitle(key))}
                    summary={value.summary}
                    items={value.items}
                    sources={key === 'schools' ? reportSources : undefined}
                  />
                );
              })}
            </div>
          )}
        </div>
      </main>

      {report && (
        <footer className="bg-gray-800/80 backdrop-blur-sm sticky bottom-0">
          <div className="max-w-4xl mx-auto">
            <div ref={chatContainerRef} className="max-h-64 overflow-y-auto p-4">
               {chatHistory.map((msg, index) => (
                  <ChatMessage key={index} message={msg} />
                ))}
                {isChatLoading && (
                    <div className="flex items-start gap-4 my-4">
                         <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center animate-pulse"></div>
                         <div className="max-w-lg px-5 py-3 rounded-2xl bg-gray-700 rounded-bl-none">
                            <div className="flex items-center space-x-1">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            </div>
                         </div>
                    </div>
                )}
            </div>
            <div className="border-t border-gray-700 p-2">
                <ChatInput onSendMessage={handleSendMessage} isLoading={isChatLoading} />
            </div>
          </div>
        </footer>
      )}
      <HistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onLoadReport={handleLoadReport}
        onDeleteReport={deleteReport}
        onClearHistory={clearHistory}
      />
    </div>
  );
};

export default App;
