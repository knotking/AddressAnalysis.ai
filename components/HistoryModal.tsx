
import React from 'react';
import { HistoricReport } from '../types';
import { CloseIcon, TrashIcon } from './icons';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoricReport[];
  onLoadReport: (report: HistoricReport) => void;
  onDeleteReport: (id: string) => void;
  onClearHistory: () => void;
}

export const HistoryModal: React.FC<HistoryModalProps> = ({
  isOpen,
  onClose,
  history,
  onLoadReport,
  onDeleteReport,
  onClearHistory,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="bg-gray-800 rounded-lg shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-cyan-400">Report History</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close history modal">
            <CloseIcon />
          </button>
        </header>

        <main className="overflow-y-auto p-4 flex-grow">
          {history.length === 0 ? (
            <p className="text-gray-400 text-center">No reports saved yet.</p>
          ) : (
            <ul className="space-y-3">
              {history.map((item) => (
                <li key={item.id} className="bg-gray-900/70 p-3 rounded-md flex justify-between items-center gap-2">
                  <div className="flex-grow overflow-hidden">
                    <p className="font-semibold text-white truncate" title={item.address}>{item.address}</p>
                    <p className="text-xs text-gray-500">{new Date(item.timestamp).toLocaleString()}</p>
                  </div>
                  <div className="flex-shrink-0 flex gap-2">
                    <button
                      onClick={() => onLoadReport(item)}
                      className="px-3 py-1 text-xs bg-cyan-800 hover:bg-cyan-700 text-cyan-100 rounded-full transition-colors"
                    >
                      Load
                    </button>
                    <button
                      onClick={() => onDeleteReport(item.id)}
                      className="p-2 text-xs bg-red-900/50 hover:bg-red-800/70 text-red-200 rounded-full transition-colors"
                      aria-label={`Delete report for ${item.address}`}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </main>

        {history.length > 0 && (
          <footer className="p-4 border-t border-gray-700">
            <button
              onClick={onClearHistory}
              className="w-full px-4 py-2 text-sm bg-red-900 hover:bg-red-800 text-red-100 rounded-lg transition-colors"
            >
              Clear All History
            </button>
          </footer>
        )}
      </div>
    </div>
  );
};
