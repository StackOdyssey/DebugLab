import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export function Toast({
  toast,
  onClose,
}) {
  if (!toast) return null;

  const { title, message, type = 'success' } = toast;

  const typeConfig = {
    success: {
      bg: 'bg-brutal-lime',
      icon: <CheckCircle2 className="w-5 h-5 text-black shrink-0" />,
      border: 'border-black'
    },
    error: {
      bg: 'bg-brutal-pink',
      icon: <AlertCircle className="w-5 h-5 text-white shrink-0" />,
      border: 'border-black'
    },
    info: {
      bg: 'bg-brutal-yellow',
      icon: <Info className="w-5 h-5 text-black shrink-0" />,
      border: 'border-black'
    }
  };

  const current = typeConfig[type] || typeConfig.info;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-200">
      <div className={`${current.bg} text-black border-3 ${current.border} shadow-brutal-lg p-4 flex items-start gap-3 max-w-sm`}>
        {current.icon}
        <div className="flex-1 pr-2">
          {title && <div className="font-mono font-black text-sm uppercase">{title}</div>}
          <div className="text-xs font-mono font-bold mt-0.5">{message}</div>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-black/10 transition-colors border border-black/20"
        >
          <X className="w-4 h-4 text-black" />
        </button>
      </div>
    </div>
  );
}
