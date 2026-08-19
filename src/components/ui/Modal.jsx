import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './Button';
import { sounds } from '../../utils/soundEffects';

export function Modal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  headerBg = 'bg-brutal-yellow',
  maxWidth = 'max-w-2xl',
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        sounds.playClick();
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={() => {
          sounds.playClick();
          onClose();
        }}
      />

      {/* Modal Box */}
      <div
        className={`relative z-10 w-full ${maxWidth} bg-white text-black border-4 border-black shadow-brutal-xl animate-in zoom-in-95 duration-150 overflow-hidden flex flex-col max-h-[90vh]`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`px-6 py-4 border-b-4 border-black flex items-center justify-between ${headerBg}`}>
          <div>
            <h3 className="text-xl font-black font-sans uppercase tracking-tight text-black flex items-center gap-2">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs font-mono font-bold text-black/80 mt-0.5">{subtitle}</p>
            )}
          </div>
          <Button
            variant="black"
            size="icon"
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9"
          >
            <X className="w-5 h-5 text-white" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 font-sans">
          {children}
        </div>
      </div>
    </div>
  );
}
