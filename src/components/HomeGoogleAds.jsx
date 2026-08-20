import React from 'react';
import { Target, TrendingUp, BarChart3, Zap, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { WhatsApp } from './ui/WhatsAppIcon';
import { PORTFOLIO } from '../data/portfolioData';

export function HomeGoogleAds() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Tag */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-4 border-black gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-brutal-yellow text-black px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase mb-2 shadow-brutal-sm">
            <Target className="w-4 h-4" />
            <span>Growth Marketing & SEM Specialization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            GOOGLE ADS <span className="text-brutal-yellow">MANAGEMENT</span>
          </h2>
        </div>
        <p className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300 max-w-md">
          End-to-end paid search engine management designed to convert high-intent searches into paying customers and measurable ROI.
        </p>
      </div>

      {/* Main Feature Card */}
      <div className="relative bg-brutal-yellow text-black border-4 border-black shadow-brutal-xl p-6 sm:p-8 font-mono overflow-hidden">
        <div className="relative z-10 space-y-6">
          {/* Header Tag */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-3 border-black pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-black text-brutal-yellow border-2 border-black shadow-brutal-sm">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase bg-black text-white px-2 py-0.5">
                    CORE SPECIALIZATION
                  </span>
                  <span className="text-xs font-black text-black/80 uppercase hidden sm:inline">
                    PAID ACQUISITION & SEARCH ARBITRAGE
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-black mt-1">
                  FULL-FUNNEL CAMPAIGN MANAGEMENT
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="black" size="md">
                HIGH ROI FOCUS
              </Badge>
              <Badge variant="white" size="md" className="hidden sm:inline-flex">
                VERIFIED CONVERSIONS
              </Badge>
            </div>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Pillar 1 */}
            <div className="bg-white dark:bg-brutal-darkCard border-3 border-black p-4 shadow-brutal space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase bg-black text-white px-1.5 py-0.5 border border-black">
                  PILLAR 01
                </span>
                <TrendingUp className="w-4 h-4 text-black dark:text-white" />
              </div>
              <h4 className="font-black text-sm uppercase text-black dark:text-white">
                Campaign Architecture & STAGs
              </h4>
              <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                Single-Theme Ad Groups (STAGs), high-intent keyword sculpting, negative keyword scrubbing, and ad copy tailored to maximize Quality Score.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white dark:bg-brutal-darkCard border-3 border-black p-4 shadow-brutal space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase bg-black text-white px-1.5 py-0.5 border border-black">
                  PILLAR 02
                </span>
                <BarChart3 className="w-4 h-4 text-black dark:text-white" />
              </div>
              <h4 className="font-black text-sm uppercase text-black dark:text-white">
                Smart Bidding & Target ROAS
              </h4>
              <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                Target CPA and Target ROAS tuning, Performance Max integration, audience exclusions, and budget calibration to cut wasted spend.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white dark:bg-brutal-darkCard border-3 border-black p-4 shadow-brutal space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase bg-black text-white px-1.5 py-0.5 border border-black">
                  PILLAR 03
                </span>
                <Zap className="w-4 h-4 text-black dark:text-white" />
              </div>
              <h4 className="font-black text-sm uppercase text-black dark:text-white">
                GTM & Conversion Tracking
              </h4>
              <p className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                Google Tag Manager event tracking, enhanced conversions, GA4 attribution modeling, and fast landing page conversion optimization.
              </p>
            </div>
          </div>

          {/* Action Row */}
          <div className="bg-black text-white p-4 border-3 border-black shadow-brutal flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-black uppercase text-brutal-yellow flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brutal-yellow" />
                <span>Need a Google Ads account audit or new campaign setup?</span>
              </div>
              <p className="text-xs text-gray-300 font-bold">
                Available for strategic audits, account restructuring, and monthly ROI management.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <Button
                as="a"
                href="#/contact"
                variant="yellow"
                size="sm"
              >
                <span>Book Campaign Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>

              <Button
                as="a"
                href={PORTFOLIO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="white"
                size="sm"
                className="hover:bg-gray-100"
              >
                <WhatsApp className="w-4 h-4 text-green-600" />
                <span>WhatsApp (+212 672)</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
