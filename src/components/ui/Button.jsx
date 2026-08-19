import React from 'react';
import { sounds } from '../../utils/soundEffects';

export function Button({
  children,
  variant = 'yellow',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  as = 'button',
  href,
  target,
  rel,
  playAudio = true,
  ...props
}) {
  const handleClick = (e) => {
    if (playAudio) {
      sounds.playClick();
    }
    if (onClick && !disabled) {
      onClick(e);
    }
  };

  const variants = {
    yellow: 'bg-brutal-yellow text-black hover:bg-yellow-300 active:bg-yellow-400',
    lime: 'bg-brutal-lime text-black hover:bg-lime-300 active:bg-lime-400',
    cyan: 'bg-brutal-cyan text-black hover:bg-cyan-300 active:bg-cyan-400',
    pink: 'bg-brutal-pink text-white hover:bg-rose-600 active:bg-rose-700',
    purple: 'bg-brutal-purple text-white hover:bg-purple-600 active:bg-purple-700',
    black: 'bg-black text-white hover:bg-gray-900 active:bg-gray-800',
    white: 'bg-white text-black hover:bg-gray-100 active:bg-gray-200',
    outline: 'bg-transparent text-current hover:bg-black/5 active:bg-black/10',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs font-bold',
    md: 'px-5 py-2.5 text-sm font-extrabold',
    lg: 'px-6 py-3.5 text-base font-extrabold tracking-wide',
    icon: 'p-2.5 flex items-center justify-center',
  };

  const baseStyle = `
    inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider
    border-3 border-black shadow-brutal transition-all duration-100 select-none
    hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal-md
    active:translate-x-1 active:translate-y-1 active:shadow-none
    disabled:opacity-50 disabled:pointer-events-none cursor-pointer
  `;

  const classes = `${baseStyle} ${variants[variant] || variants.yellow} ${sizes[size] || sizes.md} ${className}`;

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={classes}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={props.type || 'button'}
      className={classes}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
