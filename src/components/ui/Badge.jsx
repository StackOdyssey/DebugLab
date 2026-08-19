import React from 'react';

export function Badge({
  children,
  variant = 'yellow',
  className = '',
  rotate = 'none',
  size = 'md',
  onClick,
  ...props
}) {
  const variants = {
    yellow: 'bg-brutal-yellow text-black border-black',
    lime: 'bg-brutal-lime text-black border-black',
    cyan: 'bg-brutal-cyan text-black border-black',
    pink: 'bg-brutal-pink text-white border-black',
    purple: 'bg-brutal-purple text-white border-black',
    black: 'bg-black text-white border-black',
    white: 'bg-white text-black border-black',
    outline: 'bg-transparent text-current border-current',
  };

  const rotations = {
    none: 'rotate-0',
    'left-1': '-rotate-1',
    'left-2': '-rotate-2',
    'left-3': '-rotate-3',
    'right-1': 'rotate-1',
    'right-2': 'rotate-2',
    'right-3': 'rotate-3',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-[10px] font-bold',
    md: 'px-2.5 py-1 text-xs font-extrabold',
    lg: 'px-3.5 py-1.5 text-sm font-extrabold',
  };

  const interactive = onClick ? 'cursor-pointer hover:scale-105 active:scale-95 transition-transform' : '';

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center gap-1 font-mono uppercase border-2 shadow-brutal-sm ${variants[variant] || variants.yellow} ${rotations[rotate] || ''} ${sizes[size] || sizes.md} ${interactive} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
