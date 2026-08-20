import React, { useState } from 'react';
import { ArrowRight, Terminal, Award, Network, Sparkles, Download, CheckCircle, Flame, ExternalLink, Code2, Mail, Target } from 'lucide-react';
import { WhatsApp } from './ui/WhatsAppIcon';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export function Hero({ onOpenTerminal, onOpenCertModal }) {
  const [taglineIdx, setTaglineIdx] = useState(0);

  const cycleTagline = () => {
    sounds.playClick();
    setTaglineIdx((prev) => (prev + 1) % PORTFOLIO.taglines.length);
  };

  const triggerConfetti = () => {
    sounds.playSuccess();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFE600', '#06B6D4', '#F43F5E', '#A3E635', '#000000']
      });
    } catch (e) { }
  };

  return (
    <section className="relative pt-10 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-brutal-yellow/20 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-brutal-cyan/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Top Banner Status */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="inline-flex items-center gap-2 bg-white dark:bg-brutal-darkCard border-3 border-black px-3.5 py-1.5 shadow-brutal-sm text-xs font-mono font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 -ml-4"></span>
          <span className="uppercase text-black dark:text-white">STATUS: {PORTFOLIO.status}</span>
        </div>

        <a href="#google-ads" className="cursor-pointer">
          <Badge variant="yellow" rotate="right-1" className="inline-flex">
            🎯 GOOGLE ADS MANAGER
          </Badge>
        </a>
        <Badge variant="lime" rotate="left-1" className="hidden sm:inline-flex">
          ISTA MOROCCO &bull; 2025/2026
        </Badge>
        <Badge variant="cyan" rotate="right-1" className="hidden md:inline-flex">
          ALX AFRICA HONORS
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Big Headline & Bio */}
        <div className="lg:col-span-8 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-black uppercase tracking-widest text-black/70 dark:text-gray-400 bg-brutal-yellow/30 px-2 py-0.5 border border-black/30 inline-block">
                HELLO WORLD, I'M
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-sans uppercase tracking-tighter text-black dark:text-white leading-[0.98]">
              MOHAMMED <br />
              <span className="relative inline-block text-black bg-brutal-yellow px-2.5 py-0.5 border-3 sm:border-4 border-black shadow-brutal mt-1 -rotate-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                (StackOdyssey)
              </span>
            </h1>
          </div>

          <div className="text-base sm:text-lg font-mono font-bold text-gray-900 dark:text-gray-200 leading-relaxed">
            <p className="bg-white dark:bg-brutal-darkCard border-3 border-black p-3.5 sm:p-4 shadow-brutal">
              🚀 <span className="bg-brutal-lime/60 px-1">Full-Stack Digital Developer</span> in training at <span className="font-black underline">ISTA</span> & <span className="font-black underline">FreeCodeCamp</span>. Experienced in <span className="bg-amber-300 font-black text-black px-1 border border-black inline-block">🎯 Google Ads Management</span>, and certified in <span className="bg-brutal-cyan/60 px-1 font-black">Cisco Switching & IP</span>, <span className="bg-brutal-pink/40 px-1 font-black">C++ Basics</span>, and <span className="bg-brutal-yellow/80 px-1 font-black">ALX Africa Front-End</span>.
            </p>
          </div>

          {/* Featured Google Ads & Paid Growth Highlight Callout */}
          <div className="bg-amber-300 dark:bg-amber-400 text-black border-3 border-black p-3.5 shadow-brutal font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-black text-amber-300 border-2 border-black shrink-0 shadow-brutal-sm">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-black uppercase bg-black text-amber-300 px-1.5 py-0.2 inline-block mb-0.5">
                  CORE SPECIALIZATION
                </div>
                <div className="text-xs sm:text-sm font-black uppercase tracking-tight text-black">
                  Google Ads Account Management & ROI Scaling
                </div>
                <div className="text-[11px] font-bold text-gray-800">
                  Search & PMax Strategy &bull; GTM Tracking &bull; Target ROAS/CPA Optimization
                </div>
              </div>
            </div>
            <a
              href="#google-ads"
              className="inline-flex items-center gap-1 bg-black text-amber-300 hover:bg-gray-800 text-xs font-black px-3 py-2 border-2 border-black shadow-brutal-sm uppercase shrink-0 transition-transform active:translate-x-0.5"
            >
              <span>Explore Strategy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive Tagline cycler */}
          <div
            onClick={cycleTagline}
            className="cursor-pointer group inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-black bg-black text-brutal-yellow px-4 py-2 border-2 border-black shadow-brutal-sm hover:bg-gray-900 transition-all"
            title="Click to cycle dynamic quote"
          >
            <Sparkles className="w-4 h-4 animate-spin-slow text-brutal-cyan" />
            <span>"{PORTFOLIO.taglines[taglineIdx]}"</span>
            <span className="text-[11px] text-[#F5F5F5] font-bold ml-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
              (Click to shuffle)
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
            <Button
              as="a"
              href="#projects"
              variant="yellow"
              size="lg"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              as="a"
              href={PORTFOLIO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="lime"
              size="lg"
              className="border-3 border-black shadow-brutal"
            >
              <WhatsApp className="w-5 h-5" />
              <span>WhatsApp (+212 672-779391)</span>
            </Button>

            <Button
              as="a"
              href="#certifications"
              variant="cyan"
              size="lg"
            >
              <Award className="w-5 h-5" />
              <span>Certifications</span>
            </Button>

            <Button
              as="a"
              href="#contact"
              variant="white"
              size="lg"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </Button>
          </div>
        </div>

        {/* Right Column: Hero Visual Brutalist Avatar & Stats Card */}
        <div className="lg:col-span-4 space-y-4">
          <div className="relative bg-white dark:bg-brutal-darkCard border-4 border-black shadow-brutal-xl p-5 overflow-hidden">
            {/* Header of Avatar Card */}
            <div className="flex items-center justify-between border-b-3 border-black pb-3 mb-4 font-mono font-black text-xs uppercase bg-brutal-yellow -mx-5 -mt-5 px-5 pt-3">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-black" /> ID: STACKODYSSEY
              </span>
              <span className="bg-black text-white px-2 py-0.5 text-[10px]">VERIFIED</span>
            </div>

            {/* Visual Icon Avatar with retro stickers */}
            <div className="relative aspect-square bg-gradient-to-br from-yellow-100 via-cyan-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 border-3 border-black p-4 flex flex-col items-center justify-center text-center overflow-hidden group">
              {/* Retro background grid inside avatar */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

              <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 bg-black border-4 border-black shadow-brutal flex items-center justify-center overflow-hidden mb-3 group-hover:scale-105 transition-transform">
                <img 
                  src={PORTFOLIO.avatar || "/mohammed-profile.png"} 
                  alt="Mohammed (StackOdyssey)" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="relative z-10 font-sans font-black text-lg uppercase tracking-tight text-black dark:text-white">
                Mohammed (StackOdyssey)
              </div>
              <div className="relative z-10 font-mono text-xs font-bold text-gray-700 dark:text-gray-300">
                github.com/StackOdyssey
              </div>

              {/* Floating stickers on avatar */}
              <div className="absolute top-2 right-2 -rotate-12">
                <span className="bg-brutal-pink text-white text-[10px] font-mono font-black px-1.5 py-0.5 border border-black shadow-brutal-sm">
                  Cisco
                </span>
              </div>
              <div className="absolute top-2 left-2 rotate-12">
                <span className="bg-amber-400 text-black text-[10px] font-mono font-black px-1.5 py-0.5 border border-black shadow-brutal-sm">
                  Google Ads
                </span>
              </div>
              <div className="absolute bottom-2 left-2 rotate-6">
                <span className="bg-brutal-lime text-black text-[10px] font-mono font-black px-1.5 py-0.5 border border-black shadow-brutal-sm">
                  ALX Africa
                </span>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {PORTFOLIO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 bg-gray-50 dark:bg-gray-800/80 border-2 border-black font-mono text-center hover:bg-brutal-yellow/20 transition-colors"
                >
                  <div className="text-xl font-black text-black dark:text-white">{stat.value}</div>
                  <div className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Easter Egg Confetti Trigger */}
            <button
              onClick={triggerConfetti}
              className="w-full mt-4 py-2 bg-brutal-yellow hover:bg-yellow-300 border-2 border-black text-xs font-mono font-black uppercase shadow-brutal-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors active:translate-x-0.5 active:translate-y-0.5"
            >
              <Flame className="w-4 h-4 text-orange-600" />
              <span>Tap to Celebrate Code</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
