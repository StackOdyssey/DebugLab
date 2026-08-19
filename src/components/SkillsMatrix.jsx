import React, { useState, useMemo } from 'react';
import { Search, Wrench, Layout, Server, Network, Check, Sparkles, Filter } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const ICON_MAP = {
  Layout: Layout,
  Server: Server,
  Network: Network,
  Wrench: Wrench,
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
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-4 border-black gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-brutal-lime text-black px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase mb-2 shadow-brutal-sm">
            <Sparkles className="w-4 h-4" />
            <span>Core Competencies & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            SKILLS <span className="text-brutal-yellow">&</span> TECH MATRIX
          </h2>
        </div>
        <p className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300 max-w-md">
          A granular breakdown of languages, frameworks, networking fundamentals, and development workflows mastered across ISTA, ALX, and open-source labs.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white dark:bg-brutal-darkCard border-4 border-black shadow-brutal-lg p-4 mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill (e.g. React, Cisco, Django)..."
              className="w-full pl-9 pr-3 py-2 bg-gray-50 border-2 border-black font-mono text-xs font-bold text-black focus:outline-none focus:bg-yellow-50 focus:border-brutal-pink shadow-brutal-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-black text-gray-500 hover:text-black"
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
                  {group.skills.map((skill, sIdx) => (
                    <Card
                      key={sIdx}
                      hoverEffect={true}
                      className="group"
                      header={
                        <div className="flex items-center justify-between w-full">
                          <span className="text-black">{skill.name}</span>
                          <span className="bg-black text-white px-1.5 py-0.5 text-[9px] font-mono font-bold">
                            {skill.tag}
                          </span>
                        </div>
                      }
                      headerBg={`${group.color} text-black`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Badge 
                          variant={
                            skill.level === 'Expert' ? 'lime' :
                            skill.level === 'Certified' ? 'cyan' :
                            skill.level === 'Advanced' ? 'yellow' : 'pink'
                          }
                          size="sm"
                        >
                          {skill.level}
                        </Badge>
                        <span className="text-[10px] font-mono text-gray-500 font-bold">PROVEN</span>
                      </div>

                      <p className="text-xs font-mono font-medium text-gray-700 leading-relaxed">
                        {skill.desc}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-12 bg-white dark:bg-brutal-darkCard border-4 border-black shadow-brutal-lg text-center font-mono font-black text-gray-600">
            No skills found matching "{searchQuery}". Try searching for React, C++, Cisco, or Django!
          </div>
        )}
      </div>
    </section>
  );
}
