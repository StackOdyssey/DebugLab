import React from 'react';

export function Marquee({
  items = [],
  speed = 'normal',
  reverse = false,
  className = '',
  bg = 'bg-brutal-yellow',
  text = 'text-black',
  separator = '✦'
}) {
  const content = items.length > 0 ? items : [
    "REACT.JS", "NEXT.JS BASICS", "CISCO SWITCHING", "FULL STACK ISTA", 
    "ALX AFRICA ALUM", "C++ FOUNDATIONS", "DJANGO BACKENDS", "NEO-BRUTALISM UI", "GITHUB: @StackOdyssey"
  ];

  return (
    <div className={`overflow-hidden border-y-3 border-black py-2.5 ${bg} ${text} select-none ${className}`}>
      <div className={`flex w-max ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'} whitespace-nowrap font-mono font-black text-sm tracking-wider uppercase`}>
        <div className="flex items-center gap-6 pr-6">
          {content.map((item, idx) => (
            <React.Fragment key={`m1-${idx}`}>
              <span>{item}</span>
              <span className="text-black/50">{separator}</span>
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center gap-6 pr-6">
          {content.map((item, idx) => (
            <React.Fragment key={`m2-${idx}`}>
              <span>{item}</span>
              <span className="text-black/50">{separator}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
