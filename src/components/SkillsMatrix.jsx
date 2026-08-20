import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Wrench, 
  Layout, 
  Server, 
  Network, 
  Check, 
  Sparkles, 
  Filter, 
  Target, 
  TrendingUp, 
  BarChart3, 
  CheckCircle2, 
  ArrowUpRight, 
  Zap 
} from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { WhatsApp } from './ui/WhatsAppIcon';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const ICON_MAP = {
  Layout: Layout,
  Server: Server,
  Network: Network,
  Wrench: Wrench,
  Target: Target,
};

export function SkillsMatrix() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...PORTFOLIO.skillsByCategory.map(c => c.category)];

  const filteredCategories = useMemo(() => {
    return PORTFOLIO.skillsByCategory.map((catGroup) => {
      if (activeCategory !== 'All' && catGroup.category !== activeCategory) {
        return null;
      }

      const matchingSkills = catGroup.skills.filter(s => {
        const q = searchQuery.toLowerCase();
        return (
          s.name.toLowerCase().includes(q) ||
          s.desc.toLowerCase().includes(q) ||
          s.tag.toLowerCase().includes(q) ||
          s.level.toLowerCase().includes(q)
        );
      });

      if (matchingSkills.length === 0) return null;

      return {
        ...catGroup,
        skills: matchingSkills
      };
    }).filter(Boolean);
  }, [searchQuery, activeCategory]);

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b-4 border-black gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-brutal-yellow text-black px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase mb-2 shadow-brutal-sm">
            <Sparkles className="w-4 h-4" />
            <span>Core Competencies & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            SKILLS <span className="text-brutal-yellow">&</span> TECH MATRIX
          </h2>
        </div>
        <p className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300 max-w-md">
          A granular breakdown of languages, frameworks, Google Ads growth management, networking fundamentals, and full-stack engineering tools.
        </p>
      </div>

      {/* Prominent Google Ads Spotlight Banner */}
      <div 
        id="google-ads" 
        className="relative bg-brutal-yellow text-black border-4 border-black shadow-brutal-xl p-6 sm:p-8 font-mono scroll-mt-20 overflow-hidden"
      >
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
                    FEATURED EXPERTISE
                  </span>
                  <span className="text-xs font-black text-black/80 uppercase hidden sm:inline">
                    GROWTH & PAID SEARCH ENGINE
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans uppercase tracking-tight text-black mt-1">
                  GOOGLE ADS ACCOUNT MANAGEMENT
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="black" size="md">
                HIGH ROI STRATEGY
              </Badge>
              <Badge variant="white" size="md" className="hidden sm:inline-flex">
                VERIFIED CONVERSIONS
              </Badge>
            </div>
          </div>

          {/* Core Strategy Pillars Grid */}
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
                Structured Single-Theme Ad Groups (STAGs), intent-driven keyword segmentation (Exact, Phrase, Broad match modifiers), and responsive search ad copywriting that maximizes Quality Score.
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
                Target CPA and Target ROAS algorithmic bidding calibration, audience exclusion lists, budget allocation tuning, and continuous search query term audits to eliminate ad spend waste.
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
                Full-funnel Google Tag Manager (GTM) event triggers, enhanced conversions, GA4 attribution modeling, and high-speed landing page conversion rate optimization (CRO).
              </p>
            </div>
          </div>

          {/* Deliverables & Quick CTA */}
          <div className="bg-black text-white p-4 border-3 border-black shadow-brutal flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-black uppercase text-brutal-yellow flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brutal-yellow" />
                <span>Ready to scale your leads or audit existing campaigns?</span>
              </div>
              <p className="text-xs text-gray-300 font-bold">
                Available for Google Ads account audits, new campaign builds, and monthly performance optimization.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <Button
                as="a"
                href="#contact"
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

      {/* Filter & Search Bar */}
      <div className="bg-white dark:bg-brutal-darkCard border-4 border-black shadow-brutal-lg p-4 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. Google Ads, React, Cisco)..."
              className="w-full pl-9 pr-3 py-2 bg-gray-50 border-2 border-black font-mono text-xs font-bold text-black focus:outline-none focus:bg-yellow-50 focus:border-brutal-pink shadow-brutal-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-black text-gray-500 hover:text-black cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sounds.playClick();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1 text-xs font-mono font-black uppercase border-2 border-black transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-brutal-yellow text-black shadow-brutal-sm -translate-y-0.5'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="space-y-8">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((group, gIdx) => {
            const IconComp = ICON_MAP[group.icon] || Wrench;

            return (
              <div key={gIdx} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-2 border-b-3 border-black pb-2">
                  <div className={`p-1.5 border-2 border-black ${group.color} shadow-brutal-sm`}>
                    <IconComp className="w-4 h-4 text-black" />
                  </div>
                  <h3 className="text-xl font-black font-sans uppercase tracking-tight text-black dark:text-white">
                    {group.category}
                  </h3>
                  <span className="text-xs font-mono font-black bg-black text-white px-2 py-0.5 ml-auto">
                    {group.skills.length} SKILLS
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.skills.map((skill, sIdx) => {
                    const isSpotlight = skill.tag === 'Spotlight' || skill.name.includes('Google Ads');

                    return (
                      <Card
                        key={sIdx}
                        hoverEffect={true}
                        className={`group ${isSpotlight ? 'border-4 border-black ring-2 ring-yellow-400 shadow-brutal-lg' : ''}`}
                        header={
                          <div className="flex items-center justify-between w-full">
                            <span className="text-black dark:text-white font-black">{skill.name}</span>
                            <span className={`px-1.5 py-0.5 text-[9px] font-mono font-black uppercase ${
                              isSpotlight ? 'bg-brutal-yellow text-black border border-black' : 'bg-black text-white dark:bg-white dark:text-black'
                            }`}>
                              {skill.tag}
                            </span>
                          </div>
                        }
                        headerBg={isSpotlight ? 'bg-brutal-yellow/40 text-black' : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white'}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Badge 
                            variant={isSpotlight || skill.level === 'Expert' ? 'yellow' : 'white'}
                            size="sm"
                          >
                            {skill.level}
                          </Badge>
                          <span className="text-[10px] font-mono text-gray-500 dark:text-gray-400 font-bold">
                            {isSpotlight ? '★ FEATURED' : 'PROVEN'}
                          </span>
                        </div>

                        <p className="text-xs font-mono font-medium text-gray-700 dark:text-gray-300 leading-relaxed">
                          {skill.desc}
                        </p>
                      </Card>
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-12 bg-white dark:bg-brutal-darkCard border-4 border-black shadow-brutal-lg text-center font-mono font-black text-gray-600">
            No skills found matching "{searchQuery}". Try searching for Google Ads, React, C++, Cisco, or Django!
          </div>
        )}
      </div>
    </section>
  );
}

