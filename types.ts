
export interface Source {
  uri: string;
  title: string;
  type: 'web' | 'maps';
}

export interface ReportItem {
  name: string;
  details: string;
  googleMapLink?: string;
}

export interface ReportSectionData {
  summary: string;
  items: ReportItem[];
}

export interface ReportData {
  schools: ReportSectionData;
  restaurants: ReportSectionData;
  groceries: ReportSectionData;
  bigStores: ReportSectionData;
  connectivity: ReportSectionData;
  nationalParks: ReportSectionData;
  kidsParks: ReportSectionData;
  emergencyServices: ReportSectionData;
  healthcare: ReportSectionData;
  crime: ReportSectionData;
  hazards: ReportSectionData;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  sources?: Source[];
}

export interface HistoricReport {
  id: string;
  address: string;
  timestamp: number;
  report: ReportData;
  sources: Source[];
  summary?: string;
}
