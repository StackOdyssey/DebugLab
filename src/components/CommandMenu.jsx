import React, { useState, useEffect } from 'react';
import { Search, Terminal, Award, FolderGit2, Mail, Sparkles, Network, X, Command, Phone } from 'lucide-react';
import { Github } from './ui/GithubIcon';
import { WhatsApp } from './ui/WhatsAppIcon';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import { THEMES } from '../data/themeConfig';

export function CommandMenu({
  isOpen,
  onClose,
  onOpenTerminal,
  onSetTheme,
  onCopyEmail,
  onCopyPhone
}) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        sounds.playClick();
        if (isOpen) onClose();
        else {
          // Open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Jump to Featured Projects', section: '#projects', icon: FolderGit2, tag: 'Navigation' },
    { label: 'Chat with Mohammed on WhatsApp (+212 672-779391)', action: 'whatsapp', icon: WhatsApp, tag: 'Direct Chat' },
    { label: 'Copy WhatsApp Number (+212 672-779391)', action: 'copy-phone', icon: Phone, tag: 'WhatsApp' },
    { label: 'View Verified Certifications (Cisco, ALX, C++, ISTA)', section: '#certifications', icon: Award, tag: 'Credentials' },
    { label: 'Open Cisco IPv4 Subnet Tool', section: '#cisco-tool', icon: Network, tag: 'Interactive' },
    { label: 'Explore Skills Matrix & Tech Stack', section: '#skills', icon: Sparkles, tag: 'Skills' },
    { label: 'View Learning Journey & Timeline', section: '#timeline', icon: Award, tag: 'History' },
    { label: 'Open Interactive CLI Sandbox', action: 'terminal', icon: Terminal, tag: 'CLI App' },
    { label: 'Copy Mohammed\'s Email Address', action: 'copy-email', icon: Mail, tag: 'Contact' },
    { label: 'Visit GitHub Profile (@StackOdyssey)', action: 'github', icon: Github, tag: 'External' },
  ];

  const filteredActions = actions.filter(a => 
    a.label.toLowerCase().includes(search.toLowerCase()) || 
    a.tag.toLowerCase().includes(search.toLowerCase())
  );

  const handleAction = (item) => {
    sounds.playClick();
    onClose();

    if (item.section) {
      const el = document.querySelector(item.section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.action === 'terminal') {
      onOpenTerminal();
    } else if (item.action === 'whatsapp') {
      window.open(PORTFOLIO.whatsapp, '_blank');
    } else if (item.action === 'copy-phone') {
      if (onCopyPhone) onCopyPhone();
    } else if (item.action === 'copy-email') {
      onCopyEmail();
    } else if (item.action === 'github') {
      window.open('https://github.com/StackOdyssey', '_blank');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-xs"
        onClick={() => {
          sounds.playClick();
          onClose();
        }}
      />

      {/* Palette Box */}
      <div 
        className="relative z-10 w-full max-w-xl bg-white text-black border-4 border-black shadow-brutal-xl overflow-hidden animate-in zoom-in-95 duration-100 font-mono"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Search Input */}
        <div className="p-3 border-b-3 border-black bg-yellow-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-black" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command or search action (e.g. projects, cisco, theme)..."
            className="flex-1 bg-transparent font-bold text-sm text-black focus:outline-none placeholder:text-gray-600"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="p-1 hover:bg-black/10 text-black border border-black/20"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          <div className="text-[10px] font-black uppercase text-gray-500 px-2 py-1">
            Actions & Destinations ({filteredActions.length})
          </div>

          {filteredActions.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <button
                key={idx}
                onClick={() => handleAction(item)}
                className="w-full px-3 py-2 text-left text-xs font-bold flex items-center justify-between border-2 border-transparent hover:border-black hover:bg-brutal-yellow hover:text-black transition-all cursor-pointer group"
              >
                <span className="flex items-center gap-2.5">
                  <IconComp className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </span>
                <span className="text-[10px] bg-black text-white px-1.5 py-0.5 uppercase">
                  {item.tag}
                </span>
              </button>
            );
          })}

          {/* Theme Quick Switch in Palette */}
          <div className="pt-2 border-t border-gray-200 mt-2">
            <div className="text-[10px] font-black uppercase text-gray-500 px-2 py-1">
              Switch Brutalist Theme
            </div>
            <div className="grid grid-cols-2 gap-1 px-1">
              {Object.values(THEMES).map((th) => (
                <button
                  key={th.id}
                  onClick={() => {
                    sounds.playSuccess();
                    onSetTheme(th.id);
                    onClose();
                  }}
                  className="px-2 py-1.5 text-[11px] font-bold border border-black hover:bg-brutal-yellow text-left flex items-center justify-between"
                >
                  <span>{th.name}</span>
                  <span className="w-2.5 h-2.5 rounded-full border border-black" style={{ backgroundColor: th.primaryColor }} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Hint */}
        <div className="px-3 py-2 bg-gray-100 border-t-2 border-black flex items-center justify-between text-[10px] text-gray-600">
          <span>Use <strong>Tab</strong> or <strong>Click</strong> to execute</span>
          <span>Press <strong>ESC</strong> to dismiss</span>
        </div>
      </div>
    </div>
  );
}
