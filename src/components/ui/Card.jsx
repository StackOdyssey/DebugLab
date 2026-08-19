import React from 'react';

export function Card({
  children,
  className = '',
  header,
  headerBg = 'bg-black text-white',
  footer,
  shadow = 'shadow-brutal',
  hoverEffect = false,
  border = 'border-3 border-black',
  ...props
}) {
  const hoverClasses = hoverEffect 
    ? 'transition-all duration-150 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-brutal-lg' 
    : '';

  return (
    <div
      className={`bg-white text-black ${border} ${shadow} flex flex-col overflow-hidden ${hoverClasses} ${className}`}
      {...props}
    >
      {header && (
        <div className={`px-4 py-2 border-b-3 border-black flex items-center justify-between font-mono font-bold text-xs uppercase tracking-wider ${headerBg}`}>
          {header}
        </div>
      )}
      <div className="p-5 flex-1 flex flex-col">
        {children}
      </div>
      {footer && (
        <div className="px-5 py-3 border-t-3 border-black bg-gray-50 text-xs font-mono">
          {footer}
        </div>
      )}
    </div>
  );
}
