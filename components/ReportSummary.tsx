
import React from 'react';
import { BotIcon } from './icons';

interface ReportSummaryProps {
  summary: string;
}

export const ReportSummary: React.FC<ReportSummaryProps> = ({ summary }) => {
  return (
    <div className="p-4 bg-gray-800 border border-cyan-500/20 rounded-lg mb-6 shadow-lg shadow-cyan-500/10">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mt-1">
            <BotIcon className="w-5 h-5 text-white" />
        </div>
        <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-2">Overall Summary</h3>
            <div className="text-gray-300 whitespace-pre-wrap prose prose-invert prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: summary.replace(/\n/g, '<br />') }}>
            </div>
        </div>
      </div>
    </div>
  );
};
