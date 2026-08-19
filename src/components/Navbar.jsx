import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Terminal as TerminalIcon, Menu, X, Command } from 'lucide-react';
import { Github } from './ui/GithubIcon';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { sounds } from '../utils/soundEffects';
import { THEMES } from '../data/themeConfig';

export function Navbar({
  currentTheme,
  setTheme,
  soundEnabled,
  setSoundEnabled,
  onOpenCommandPalette,
  onOpenTerminal
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.toggleSound(next);
    if (next) sounds.playBeep();
  };

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Cisco Subnet Tool', href: '#cisco-tool' },
    { label: 'Skills', href: '#skills' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-brutal-darkCard border-b-4 border-black transition-colors">
      {/* Top micro bar */}
      <div className="bg-black text-white px-4 py-1 flex items-center justify-between text-[11px] font-mono font-bold tracking-wider">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span>DEV ENVIRONMENT: ISTA FULL-STACK &bull; ALX ALUM &bull; CISCO CERTIFIED</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-300">
          <button 
            onClick={onOpenCommandPalette}
            className="hover:text-brutal-yellow transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Command className="w-3 h-3" /> Quick Nav <kbd className="bg-gray-800 px-1 text-[9px] rounded-xs border border-gray-600">Ctrl+K</kbd>
          </button>
          <span>MOHAMMED // SIMON</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#"
          className="flex items-center gap-2 group"
          onClick={() => sounds.playClick()}
        >
          <div className="bg-brutal-yellow text-black font-black font-mono text-xl px-2.5 py-1 border-3 border-black shadow-brutal-sm group-hover:rotate-2 transition-transform">
            M//S
          </div>
          <div className="flex flex-col">
            <span className="font-black text-base tracking-tight font-sans uppercase dark:text-white leading-none">
              MOHAMMED
            </span>
            <span className="text-[10px] font-mono font-bold text-gray-600 dark:text-gray-400 leading-none mt-0.5">
              @StackOdyssey (Simon)
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs font-bold uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => sounds.playClick()}
              className="px-3 py-2 text-black dark:text-white hover:bg-brutal-yellow hover:text-black border-2 border-transparent hover:border-black transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Terminal Launcher */}
          <Button
            variant="cyan"
            size="sm"
            onClick={onOpenTerminal}
            className="hidden sm:inline-flex"
            title="Open Interactive CLI Terminal"
          >
            <TerminalIcon className="w-4 h-4" />
            <span className="hidden md:inline">CLI Sandbox</span>
          </Button>

          {/* Sound Toggle */}
          <Button
            variant={soundEnabled ? 'lime' : 'white'}
            size="icon"
            onClick={toggleSound}
            aria-label="Toggle Sound Effects"
            className="w-9 h-9"
            title={soundEnabled ? 'Mute Retro Sounds' : 'Enable Retro Sounds'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-black" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
          </Button>

          {/* Theme Dropdown Toggle */}
          <div className="relative">
            <Button
              variant="yellow"
              size="icon"
              onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
              className="w-9 h-9"
              aria-label="Change Theme"
              title="Change Brutalist Theme"
            >
              <Sparkles className="w-4 h-4 text-black" />
            </Button>

            {themeDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border-3 border-black shadow-brutal-lg z-50 p-2 space-y-1 animate-in fade-in zoom-in-95"
                onMouseLeave={() => setThemeDropdownOpen(false)}
              >
                <div className="text-[10px] font-mono font-black uppercase text-gray-500 dark:text-gray-400 px-2 py-1 border-b border-black/20">
                  Select Theme
                </div>
                {Object.values(THEMES).map((th) => (
                  <button
                    key={th.id}
                    onClick={() => {
                      sounds.playSuccess();
                      setTheme(th.id);
                      setThemeDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-1.5 text-xs font-mono font-bold flex items-center justify-between border border-transparent hover:border-black hover:bg-brutal-yellow hover:text-black transition-colors ${
                      currentTheme === th.id ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-black dark:text-white'
                    }`}
                  >
                    <span>{th.name}</span>
                    <span 
                      className="w-3 h-3 rounded-full border border-black" 
                      style={{ backgroundColor: th.primaryColor }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* GitHub Profile Link */}
          <Button
            as="a"
            href="https://github.com/StackOdyssey"
            target="_blank"
            variant="black"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Github className="w-4 h-4" />
            <span className="hidden xl:inline">GitHub</span>
          </Button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => {
              sounds.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 border-2 border-black bg-brutal-yellow text-black lg:hidden shadow-brutal-sm"
            aria-label="Open navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t-3 border-black bg-brutal-yellow p-4 space-y-2 font-mono text-sm font-black">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(false);
              }}
              className="block p-2 bg-white text-black border-2 border-black shadow-brutal-sm hover:bg-black hover:text-white transition-all uppercase"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex gap-2">
            <Button
              variant="cyan"
              size="sm"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex-1"
            >
              <TerminalIcon className="w-4 h-4" /> CLI Terminal
            </Button>
            <Button
              as="a"
              href="https://github.com/StackOdyssey"
              target="_blank"
              variant="black"
              size="sm"
              className="flex-1"
            >
              <Github className="w-4 h-4" /> GitHub
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
