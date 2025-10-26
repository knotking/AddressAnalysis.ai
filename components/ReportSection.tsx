
import React, { useState } from 'react';
import { ReportItem, Source } from '../types';
import { 
  ChevronDownIcon, 
  MapPinIcon,
  AcademicCapIcon,
  RestaurantIcon,
  ShoppingCartIcon,
  StoreIcon,
  CarIcon,
  MountainIcon,
  PlayIcon,
  ShieldIcon,
  WarningIcon,
  HospitalIcon,
  CrimeIcon,
} from './icons';

interface ReportSectionProps {
  title: string;
  summary: string;
  items: ReportItem[];
  sources?: Source[];
}

const tooltipMap: { [key: string]: string } = {
    'Rating': 'Based on a 1-10 or 1-5 scale, where a higher number is better.',
    'Drive Score': 'Overall score based on traffic, road quality, and highway access.',
    'Risk': 'Assessment of potential danger. "Low" indicates minimal probability.',
    'Distance': 'Estimated distance from the analyzed address.'
};

const renderDetails = (details: string) => {
    return details.split(',').map((part, index) => {
        const [key, ...valueParts] = part.trim().split(':');
        const value = valueParts.join(':').trim();

        if (!value) {
            return <span key={index} className="text-sm text-gray-400 block">{key}</span>;
        }
        
        const tooltipTextKey = Object.keys(tooltipMap).find(tipKey => key.includes(tipKey));
        const tooltipTitle = tooltipTextKey ? tooltipMap[tooltipTextKey] : undefined;

        return (
            <div key={index} className="text-sm flex">
                <span 
                    className="text-gray-400 w-28 flex-shrink-0 cursor-help"
                    title={tooltipTitle}
                >
                    {key}:
                </span>
                <span className="text-gray-200 font-medium">{value}</span>
            </div>
        );
    });
};


export const ReportSection: React.FC<ReportSectionProps> = ({ title, summary, items, sources }) => {
  const [isOpen, setIsOpen] = useState(true);

  const panelId = `section-panel-${title.replace(/\s+/g, '-')}`;
  const headingId = `section-heading-${title.replace(/\s+/g, '-')}`;

  const getIconForTitle = (title: string): React.ReactNode => {
    const iconClass = "w-6 h-6 mr-3 text-cyan-400";
    switch (title) {
      case 'Schools': return <AcademicCapIcon className={iconClass} />;
      case 'Restaurants': return <RestaurantIcon className={iconClass} />;
      case 'Groceries': return <ShoppingCartIcon className={iconClass} />;
      case 'Big Stores': return <StoreIcon className={iconClass} />;
      case 'Connectivity': return <CarIcon className={iconClass} />;
      case 'National Parks': return <MountainIcon className={iconClass} />;
      case 'Kids Parks': return <PlayIcon className={iconClass} />;
      case 'Emergency Services': return <ShieldIcon className={iconClass} />;
      case 'Healthcare': return <HospitalIcon className={iconClass} />;
      case 'Crime': return <CrimeIcon className={iconClass} />;
      case 'Hazards': return <WarningIcon className={iconClass} />;
      default: return null;
    }
  };

  return (
    <div className="border border-gray-700 rounded-lg bg-gray-800/50 mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex justify-between items-center p-4 text-left bg-gray-700/50 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        <div className="flex items-center">
            {getIconForTitle(title)}
            <h3 id={headingId} className="text-xl font-semibold text-cyan-400">{title}</h3>
        </div>
        <ChevronDownIcon className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div 
          id={panelId}
          role="region"
          aria-labelledby={headingId}
          className="p-4"
        >
          <p className="text-gray-300 mb-4 italic border-l-4 border-gray-600 pl-4">{summary}</p>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="p-3 bg-gray-900/50 rounded-md">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-grow">
                    <p className="font-semibold text-white mb-1.5">{item.name}</p>
                    <div className="space-y-1">{renderDetails(item.details)}</div>
                  </div>
                  {item.googleMapLink && (
                    <a
                      href={item.googleMapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 mt-1 text-xs bg-cyan-800 hover:bg-cyan-700 text-cyan-100 px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5"
                      aria-label={`View ${item.name} on Google Maps`}
                    >
                      <MapPinIcon className="w-4 h-4" />
                      <span>Map</span>
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
           {sources && sources.length > 0 && (
             <div className="mt-4 pt-3 border-t border-gray-700">
               <h4 className="text-sm font-semibold text-gray-400 mb-2">Sources:</h4>
               <ul className="flex flex-wrap gap-2">
                 {sources.map((source, index) => (
                   <li key={index}>
                     <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-xs bg-cyan-800 hover:bg-cyan-700 text-cyan-100 px-2 py-1 rounded-full transition-colors">
                       {source.title || new URL(source.uri).hostname}
                     </a>
                   </li>
                 ))}
               </ul>
             </div>
           )}
        </div>
      )}
    </div>
  );
};
