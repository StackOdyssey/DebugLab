import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Terminal, ShieldCheck, Mail, Phone, Code2, ArrowUpRight } from 'lucide-react';
import { Github } from './ui/GithubIcon';
import { WhatsApp } from './ui/WhatsAppIcon';
import { Marquee } from './ui/Marquee';
import { Button } from './ui/Button';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export function Footer({ onOpenTerminal }) {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 border-t-4 border-black bg-white dark:bg-brutal-darkCard font-mono">
      {/* Top Retro Marquee */}
      <Marquee
        bg="bg-brutal-yellow"
        text="text-black"
        items={[
          "MOHAMMED (STACKODYSSEY)",
          "WHATSAPP: +212 672-779391",
          "ISTA FULL STACK DEVELOPER",
          "ALX AFRICA GRADUATE",
          "CISCO CERTIFIED NETWORKING",
          "C++ BASICS",
          "GITHUB: @StackOdyssey",
          "REACT.JS & NEXT.JS",
          "DJANGO APIs",
          "NEO-BRUTALISM CRAFT"
        ]}
      />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-8 border-b-3 border-black">
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="bg-brutal-yellow text-black font-black text-lg px-2.5 py-0.5 border-2 border-black shadow-brutal-sm">
                M//S
              </div>
              <span className="font-sans font-black text-xl text-black dark:text-white uppercase">
                MOHAMMED (STACKODYSSEY)
              </span>
            </div>
            <p className="text-xs font-bold text-gray-700 dark:text-gray-300 max-w-md leading-relaxed">
              Full-Stack Developer in training at ISTA & FreeCodeCamp. Building fast, resilient web systems from React components down to Cisco networking layers.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 border-2 border-black px-2.5 py-1 text-xs font-black text-black dark:text-white shadow-brutal-sm">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                <span>LOCAL SYS TIME: {timeStr || 'LIVE'}</span>
              </div>
              <a
                href={PORTFOLIO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-100 hover:bg-green-200 text-green-900 border-2 border-black px-2.5 py-1 text-xs font-black shadow-brutal-sm transition-colors"
              >
                <WhatsApp className="w-3.5 h-3.5 text-green-700" />
                <span>+212 672-779391</span>
              </a>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="space-y-2">
            <div className="text-xs font-black uppercase text-black dark:text-white border-b-2 border-black pb-1">
              NAVIGATION
            </div>
            <ul className="space-y-1 text-xs font-bold">
              <li>
                <a href="#skills" className="hover:bg-brutal-yellow hover:text-black px-1 py-0.5 inline-block text-black dark:text-gray-300">
                  &rarr; Skills Matrix
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:bg-brutal-yellow hover:text-black px-1 py-0.5 inline-block text-black dark:text-gray-300">
                  &rarr; Featured Projects
                </a>
              </li>
              <li>
                <a href="#cisco-tool" className="hover:bg-brutal-yellow hover:text-black px-1 py-0.5 inline-block text-black dark:text-gray-300">
                  &rarr; Cisco IP Subnet Tool
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:bg-brutal-yellow hover:text-black px-1 py-0.5 inline-block text-black dark:text-gray-300">
                  &rarr; Journey & Milestones
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:bg-brutal-yellow hover:text-black px-1 py-0.5 inline-block text-black dark:text-gray-300">
                  &rarr; Verified Certifications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:bg-brutal-yellow hover:text-black px-1 py-0.5 inline-block text-black dark:text-gray-300">
                  &rarr; Contact / Direct Line
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Repos & Interactive */}
          <div className="space-y-2">
            <div className="text-xs font-black uppercase text-black dark:text-white border-b-2 border-black pb-1">
              CONNECT & TERMINAL
            </div>
            <div className="space-y-2 pt-1">
              <Button
                as="a"
                href={PORTFOLIO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="lime"
                size="sm"
                className="w-full justify-between text-xs"
              >
                <span className="flex items-center gap-1.5">
                  <WhatsApp className="w-4 h-4" /> WhatsApp (+212 672)
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>

              <Button
                as="a"
                href={PORTFOLIO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="black"
                size="sm"
                className="w-full justify-between text-xs"
              >
                <span className="flex items-center gap-1.5">
                  <Github className="w-4 h-4" /> GitHub @StackOdyssey
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>

              <Button
                variant="cyan"
                size="sm"
                onClick={onOpenTerminal}
                className="w-full justify-start text-xs"
              >
                <Terminal className="w-4 h-4" />
                <span>Open CLI Sandbox</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-gray-700 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Mohammed (StackOdyssey)</span>
            <span>&bull;</span>
            <span className="bg-brutal-yellow text-black px-1.5 py-0.5 border border-black font-black text-[10px]">
              NEO-BRUTALISM
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white hover:bg-brutal-yellow hover:text-black border-2 border-black font-black uppercase shadow-brutal-sm transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
