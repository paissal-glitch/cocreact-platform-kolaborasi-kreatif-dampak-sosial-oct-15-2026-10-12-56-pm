import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  aspectRatioClass?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackTitle,
  className = '',
  aspectRatioClass = 'aspect-[16/9]',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`w-full ${aspectRatioClass} bg-[#111411] border border-[#F5F7F0]/10 rounded-lg flex flex-col items-center justify-center p-6 text-center text-[#A5ADA3] relative overflow-hidden group`}
      >
        {/* Subtle patterned background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#39FF14_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="w-12 h-12 rounded-full bg-[#102B1B] border border-[#F5F7F0]/15 flex items-center justify-center text-[#39FF14] mb-3 z-10">
          <ImageOff className="w-5 h-5" />
        </div>
        <div className="z-10 max-w-xs">
          <p className="text-xs font-mono tracking-wider text-[#39FF14] uppercase mb-1 font-semibold">
            Visual Asset
          </p>
          <p className="text-sm font-medium text-[#F5F7F0] line-clamp-2">
            {fallbackTitle || alt || 'Dokumentasi CoCreAct'}
          </p>
          <p className="text-[11px] text-[#A5ADA3] mt-1 font-mono">
            Aset dapat diganti via data konfigurasi
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden bg-[#111411] ${aspectRatioClass} ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#111411] animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-[#39FF14]/30 border-t-[#39FF14] rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        className={`w-full h-full object-cover ${className} transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
        {...rest}
      />
    </div>
  );
};
