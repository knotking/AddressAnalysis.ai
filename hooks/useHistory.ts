
import { useState, useCallback } from 'react';
import { HistoricReport, ReportData, Source } from '../types';

const HISTORY_KEY = 'neighborhoodAnalystHistory';

export const useHistory = () => {
    const [history, setHistory] = useState<HistoricReport[]>(() => {
        try {
            const item = window.localStorage.getItem(HISTORY_KEY);
            return item ? JSON.parse(item) : [];
        } catch (error) {
            console.error("Error reading history from localStorage", error);
            return [];
        }
    });

    const saveReport = useCallback((address: string, report: ReportData, sources: Source[]) => {
        const newReport: HistoricReport = {
            id: Date.now().toString(),
            address,
            timestamp: Date.now(),
            report,
            sources,
        };

        setHistory(prevHistory => {
            const updatedHistory = [newReport, ...prevHistory].slice(0, 20); // Keep max 20 reports
            try {
                window.localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
            } catch (error) {
                console.error("Error saving history to localStorage", error);
            }
            return updatedHistory;
        });
    }, []);

    const deleteReport = useCallback((id: string) => {
        setHistory(prevHistory => {
            const updatedHistory = prevHistory.filter(report => report.id !== id);
             try {
                window.localStorage.setItem(HISTORY_KEY, JSON.stringify(updatedHistory));
            } catch (error) {
                console.error("Error updating history in localStorage", error);
            }
            return updatedHistory;
        });
    }, []);

    const clearHistory = useCallback(() => {
        setHistory([]);
        try {
            window.localStorage.removeItem(HISTORY_KEY);
        } catch (error) {
            console.error("Error clearing history from localStorage", error);
        }
    }, []);

    return { history, saveReport, deleteReport, clearHistory };
};
