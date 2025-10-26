import React from 'react';

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const SendIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
  </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
    </svg>
);

export const BotIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
        <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.342 1.372a.75.75 0 0 1-.216 1.063c-.44.321-.956.49-1.507.562H8.531c-.551-.072-1.067-.24-1.507-.562a.75.75 0 0 1-.216-1.063c.512-.787 1.375-1.32 2.342-1.372ZM12 2.25a51.023 51.023 0 0 1 5.312 0c1.666.088 3.064.984 3.84 2.385a.75.75 0 0 1-.216 1.063c-.44.321-.956.49-1.507.562h-15c-.551-.072-1.067-.24-1.507-.562a.75.75 0 0 1-.216-1.063C3.623 3.234 5.022 2.338 6.688 2.25A51.023 51.023 0 0 1 12 2.25Z" clipRule="evenodd" />
        <path d="M12 20.25a.75.75 0 0 1-.75-.75V18a.75.75 0 0 1 1.5 0v1.5a.75.75 0 0 1-.75.75Z" />
    </svg>
);

export const MapPinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 005.16-4.242 12.082 12.082 0 00.665-2.105c.115-.345.227-.7.338-1.06a48.354 48.354 0 00.342-1.616c.053-.292.098-.586.138-.886.04-.301.072-.6.1-.9.032-.31.053-.622.067-.936.014-.312.021-.626.021-.939a9.75 9.75 0 10-19.5 0c0 .313.007.627.021.939.014.314.035.626.067.936.028.3.06.599.1.9.04.3.085.594.138.886.102.518.214.97.342 1.616.11.36.223.715.338 1.06.223.67.47 1.33.665 2.105A16.975 16.975 0 0011.54 22.351zM12 10.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
    </svg>
);

export const AcademicCapIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" /><path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" /></svg>
);
export const RestaurantIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M5.625 3.75a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75Z" /><path d="M12.75 6a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V6Z" /><path d="M18.375 3.75a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75Z" /><path d="M3 19.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" /><path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.5 12a7.5 7.5 0 0 1 7.5-7.5 7.5 7.5 0 0 1 7.5 7.5 7.5 7.5 0 0 1-7.5 7.5A7.5 7.5 0 0 1 4.5 12Z" clipRule="evenodd" /></svg>
);
export const ShoppingCartIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.46-5.232.75.75 0 0 0-.674-.978H5.986L4.759 4.5H2.25a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5h.375a2.25 2.25 0 0 1 1.125 0Z" /><path fillRule="evenodd" d="M8.25 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clipRule="evenodd" /></svg>
);
export const StoreIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM18.75 6a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5ZM5.25 6a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5h1.5Z" /><path fillRule="evenodd" d="M12 6.75A.75.75 0 0 1 12.75 6h.75a.75.75 0 0 0 0-1.5H12a.75.75 0 0 0-.75.75V6a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /><path fillRule="evenodd" d="M3.75 8.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM4.5 9.75a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75V10.5a.75.75 0 0 0-.75-.75h-15ZM8.25 12a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V12.75a.75.75 0 0 1 .75-.75Zm3 0a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V12.75a.75.75 0 0 1 .75-.75Zm3 0a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V12.75a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>
);
export const RoadIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M3 3a.75.75 0 0 1 .75.75V12a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 3 3Zm.75 16.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" clipRule="evenodd" /><path d="M6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 6.75Z" /><path d="M6.75 12a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5H6.75Z" /><path d="M3.75 16.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" /><path fillRule="evenodd" d="M21 3.75a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0V3.75A.75.75 0 0 0 21 3.75Z" clipRule="evenodd" /></svg>
);
export const MountainIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M5.093 2.709a3 3 0 0 1 2.862 0l4.334 2.5a3 3 0 0 1 1.422 2.587v5.374a3 3 0 0 0 1.058 2.278l2.623 2.331a.75.75 0 0 1-.97 1.138l-2.624-2.331a3 3 0 0 0-1.057-2.278V7.796a3 3 0 0 1-1.422-2.587l-4.334-2.5a3 3 0 0 0-2.862 0L3.08 5.209a3 3 0 0 1-1.422 2.587v7.576a3 3 0 0 0 .973 2.188l3.108 2.762a.75.75 0 0 1-.98 1.128l-3.107-2.762A3 3 0 0 1 1.5 15.372V7.796a3 3 0 0 1 1.422-2.587l2.171-1.254Z" clipRule="evenodd" /></svg>
);
export const PlayIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clipRule="evenodd" /></svg>
);
export const ShieldIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M12 1.5A5.25 5.25 0 0 0 6.75 6.75v3.75c0 1.15-.22 2.254-.644 3.262a.75.75 0 0 0 .588 1.238 49.332 49.332 0 0 0 5.306 0 .75.75 0 0 0 .588-1.238A11.378 11.378 0 0 1 12 10.5v-3.75A5.25 5.25 0 0 0 12 1.5Zm-2.625 7.5c.31-.055.626-.084.945-.084h3.36c.32 0 .635.03.945.084v3.42c0 2.33-1.42 4.415-3.585 5.342a.75.75 0 0 1-.83 0C7.79 17.585 6.375 15.5 6.375 13.17V9Z" clipRule="evenodd" /></svg>
);
export const WarningIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" /></svg>
);
export const CarIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M2.25 12c0-2.25 1.5-4.125 3.515-4.721a.75.75 0 0 1 .885.452A3.25 3.25 0 0 0 9.25 9.75h5.5a3.25 3.25 0 0 0 2.6-2.019.75.75 0 0 1 .885-.452C20.25 7.875 21.75 9.75 21.75 12v3.061a.75.75 0 0 1-.34 1.488l-1.074.429a.75.75 0 0 0-.536.64l-.378 2.268a.75.75 0 0 1-.726.674H5.602a.75.75 0 0 1-.726-.674l-.378-2.268a.75.75 0 0 0-.536-.64l-1.074-.429A.75.75 0 0 1 2.25 15.06V12Zm2.022 4.57a.75.75 0 0 0 .536.64l.378 2.268h13.628l.378-2.268a.75.75 0 0 0 .536-.64l1.074-.429V12a4.5 4.5 0 0 0-3.32-4.243 1.75 1.75 0 0 1-1.43-1.564.75.75 0 0 1 .536-.64c.27-.058.54-.086.81-.086 1.5 0 2.824 1.007 3.32 2.497a.75.75 0 0 1-1.356.621 1.5 1.5 0 0 0-1.964-1.154A1.75 1.75 0 0 1 14.75 8.25h-5.5a1.75 1.75 0 0 1-1.43-2.436 1.5 1.5 0 0 0-1.964 1.154.75.75 0 0 1-1.356-.621C5.024 4.882 6.348 3.875 7.848 3.875c.27 0 .54.028.81.086a.75.75 0 0 1 .536.64 1.75 1.75 0 0 1-1.43 1.564A4.5 4.5 0 0 0 4.272 12v4.14l1.074.429Z" clipRule="evenodd" /><path d="M6 16.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm10.5 1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" /></svg>
);
export const HospitalIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 0 0-.75.75v18a.75.75 0 0 0 .75.75h15a.75.75 0 0 0 .75-.75V3a.75.75 0 0 0-.75-.75h-15Zm4.125 3.375a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm2.625 0a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm3.375 0a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm2.625 0a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm-12 3.375a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm2.625 0a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm3.375 0a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm2.625 0a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm-8.25 3.375a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm2.625 0a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Zm3.375 0a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" clipRule="evenodd" />
    </svg>
);
export const CrimeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V6Zm-1.5 7.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" clipRule="evenodd" />
    </svg>
);

export const HistoryIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
    </svg>
);

export const DownloadIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
    </svg>
);

export const ClipboardIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M10.5 3A2.25 2.25 0 0 0 8.25 5.25v.041c.221-.02.444-.031.675-.031h6.15c.231 0 .454.01.675.031V5.25A2.25 2.25 0 0 0 13.5 3h-3Zm-2.625 2.518c.241-.013.486-.018.731-.018h5.788c.246 0 .49.005.731.018V5.25a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0-.75.75v.268Z" clipRule="evenodd" />
      <path d="M4.5 6.75A2.25 2.25 0 0 0 2.25 9v10.5A2.25 2.25 0 0 0 4.5 21.75h15A2.25 2.25 0 0 0 21.75 19.5V9A2.25 2.25 0 0 0 19.5 6.75h-15Z" />
    </svg>
);

export const TrashIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.006a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
    </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    </svg>
);

export const SmsIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.75.75 0 0 0-.646.646 48.901 48.901 0 0 1-.383 3.476c-.292 1.978-2.024 3.348-3.97 3.348h-6.02c-1.946 0-3.678-1.37-3.97-3.348a48.901 48.901 0 0 1-.383-3.476.75.75 0 0 0-.646-.646 48.901 48.901 0 0 1-3.476-.383C2.84 16.445 1.5 14.712 1.5 12.766v-6.02c0-1.946 1.37-3.678 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clipRule="evenodd" />
    </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.77.46 3.45 1.28 4.95L2 22l5.25-1.38c1.45.77 3.06 1.23 4.79 1.23h.01c5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zM17.2 15.3c-.28-.14-1.65-.81-1.9-.91-.25-.1-.44-.1-.62.1-.18.18-.71.81-.88.98-.16.16-.32.18-.59.06-.27-.12-1.15-.42-2.18-1.34-.81-.72-1.35-1.61-1.5-1.88-.15-.27-.02-.42.12-.56.13-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.32-.02-.46-.07-.14-.62-1.5-1-2.06-.28-.55-.56-.48-.77-.48h-.18c-.21 0-.44.07-.66.31-.22.24-.85.83-.85 2.01 0 1.18.87 2.32 1 2.48.12.16 1.67 2.55 4.05 3.56.57.24 1.02.38 1.37.49.56.17 1.07.15 1.47-.09.45-.27.71-.85.81-1.04.1-.18.1-.35.07-.49z"/>
    </svg>
);