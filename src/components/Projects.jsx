import React, { useState } from 'react';
import { ExternalLink, Code2, Layers, CheckCircle, Sparkles, FolderGit2, Building2, Terminal, ArrowUpRight, Globe } from 'lucide-react';
import { Github } from './ui/GithubIcon';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export function Projects() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { id: 'All', label: 'All Works', count: PORTFOLIO.projects.length },
    { id: 'real-project', label: '🏢 Real Commercial Projects', count: PORTFOLIO.projects.filter(p => p.projectType === 'real-project').length },
    { id: 'github-personal', label: '💻 GitHub Personal Works', count: PORTFOLIO.projects.filter(p => p.projectType === 'github-personal').length },
  ];

  const filteredProjects = PORTFOLIO.projects.filter(p => {
    if (selectedType === 'All') return true;
    return p.projectType === selectedType;
  });

  const handleInspect = (proj) => {
    sounds.playClick();
    setSelectedProject(proj);
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-4 border-black gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-brutal-yellow text-black px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase mb-2 shadow-brutal-sm">
            <FolderGit2 className="w-4 h-4" />
            <span>Commercial Builds & Open-Source Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            FEATURED PROJECTS & <span className="text-brutal-yellow">REPOS</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300 max-w-xs">
            Distinguishing <strong>Commercial Production Projects</strong> (Safe Hands, Excellence Warehouse, Atlas Lux Travel) from <strong>GitHub personal works</strong>.
          </p>
          <Button
            as="a"
            href="https://github.com/StackOdyssey"
            target="_blank"
            rel="noopener noreferrer"
            variant="black"
            size="sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
          </Button>
        </div>
      </div>

      {/* Main Filter Tabs: Distinguish Real Projects vs GitHub Personal Works */}
      <div className="flex flex-wrap gap-2 mb-8 font-mono">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              sounds.playClick();
              setSelectedType(tab.id);
            }}
            className={`px-4 py-2 text-xs font-black uppercase border-3 border-black transition-all cursor-pointer flex items-center gap-2 ${
              selectedType === tab.id
                ? 'bg-brutal-yellow text-black shadow-brutal -translate-y-0.5'
                : 'bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 shadow-brutal-sm'
            }`}
          >
            <span>{tab.label}</span>
            <span className={`text-[10px] px-1.5 py-0.2 border border-black ${
              selectedType === tab.id ? 'bg-black text-white' : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredProjects.map((project) => {
          const isRealProject = project.projectType === 'real-project';

          return (
            <Card
              key={project.id}
              hoverEffect={true}
              header={
                <div className="flex items-center justify-between w-full font-mono text-xs">
                  {/* Window Controls */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-black/40 border border-black inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-black/40 border border-black inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-black/40 border border-black inline-block"></span>
                    <span className="ml-2 font-black text-black dark:text-white truncate max-w-[140px]">{project.repoName}</span>
                  </div>
                  {isRealProject ? (
                    <Badge variant="yellow" size="sm" className="text-[9px]">
                      ★ REAL CLIENT BUILD
                    </Badge>
                  ) : (
                    <Badge variant="white" size="sm" className="text-[9px]">
                      GITHUB WORK
                    </Badge>
                  )}
                </div>
              }
              headerBg={isRealProject ? 'bg-brutal-yellow/40 text-black' : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white'}
              shadow={isRealProject ? 'shadow-brutal-xl' : 'shadow-brutal-md'}
              className={`group flex flex-col h-full ${isRealProject ? 'border-4 border-black ring-2 ring-yellow-400' : ''}`}
            >
              {/* Distinct Classification Strip */}
              <div className={`-mx-5 -mt-5 mb-3 px-3.5 py-1.5 border-b-2 border-black flex items-center justify-between text-[10px] font-mono font-black uppercase ${
                isRealProject ? 'bg-brutal-yellow text-black' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}>
                <span className="flex items-center gap-1.5 truncate mr-2">
                  {isRealProject ? (
                    <>
                      <Building2 className="w-3.5 h-3.5 text-black shrink-0" />
                      <span className="truncate">AGENCY: {project.agency || project.clientName}</span>
                    </>
                  ) : (
                    <>
                      <Github className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                      <span className="truncate">GITHUB PERSONAL WORK</span>
                    </>
                  )}
                </span>
                <span className={`text-[9px] px-1.5 py-0.2 shrink-0 ${isRealProject ? 'bg-black text-white font-bold' : 'bg-black text-white'}`}>
                  {isRealProject ? 'DEPLOYED' : 'OPEN SOURCE'}
                </span>
              </div>

              {/* Project Visual Image / Preview (if available) */}
              {project.image && (
                <div 
                  className="relative border-2 border-black mb-3 overflow-hidden bg-neutral-950 aspect-[16/9] group-hover:scale-[1.01] transition-transform cursor-pointer flex items-center justify-center p-3 shadow-inner"
                  onClick={() => handleInspect(project)}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="max-h-full max-w-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]"
                    loading="lazy"
                  />
                  <div className="absolute top-2 right-2 bg-black/90 text-white text-[9px] font-mono font-bold px-2 py-0.5 border border-white/40 shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    <span>LIVE PORTAL</span>
                  </div>
                </div>
              )}

              <div className="mb-2">
                <span className="text-[10px] font-mono font-black uppercase text-gray-500 tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-black font-sans uppercase tracking-tight text-black dark:text-white mt-0.5 leading-snug">
                  {project.title}
                </h3>
              </div>

              <p className="text-xs font-mono text-gray-700 dark:text-gray-300 mb-3 flex-1 line-clamp-3">
                {project.description}
              </p>

              {/* Stack Overview Box for Commercial Projects */}
              {isRealProject && (
                <div className="border-2 border-black p-2 mb-3 bg-cyan-50/80 dark:bg-cyan-950/40 text-left">
                  <div className="text-[9px] font-mono font-black uppercase text-cyan-900 dark:text-cyan-300 flex items-center gap-1 mb-1">
                    <Layers className="w-3 h-3 text-cyan-700 dark:text-cyan-400" />
                    <span>STACK OVERVIEW:</span>
                  </div>
                  <div className="text-[10px] font-mono font-bold text-gray-800 dark:text-gray-200 leading-tight">
                    {project.id === 'atlas-lux-travel' && 'Next.js 16 • React 19 • Drizzle ORM • Neon Postgres • Upstash Redis • OpenAI • Stripe'}
                    {project.id === 'safe-hands-logistics' && 'Next.js • TypeScript • Prisma ORM • PostgreSQL • Tailwind CSS • i18n Localization'}
                    {project.id === 'excellence-warehouse' && 'Next.js • TypeScript • Tailwind CSS • i18n • Vercel Edge • Responsive UI'}
                  </div>
                </div>
              )}

              {/* Key Highlights */}
              <div className={`border-2 border-black p-2.5 mb-3 space-y-1 ${
                isRealProject ? 'bg-yellow-50/50 dark:bg-yellow-950/20' : 'bg-gray-50 dark:bg-gray-800/50'
              }`}>
                <div className="text-[9px] font-mono font-black uppercase text-gray-600 dark:text-gray-400">
                  {isRealProject ? 'ENTERPRISE HIGHLIGHTS:' : 'HIGHLIGHTS:'}
                </div>
                {project.highlights.slice(0, 2).map((hl, hIdx) => (
                  <div key={hIdx} className="text-[10.5px] font-mono font-medium text-black dark:text-gray-200 flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{hl}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.slice(0, 5).map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 border border-black text-[9.5px] font-mono font-bold text-black dark:text-white hover:bg-brutal-yellow hover:text-black transition-colors"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 5 && (
                  <span className="px-1.5 py-0.5 bg-brutal-yellow/40 border border-black text-[9.5px] font-mono font-bold text-black dark:text-white">
                    +{project.tech.length - 5}
                  </span>
                )}
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-2 mt-auto">
                <Button
                  variant="white"
                  size="sm"
                  onClick={() => handleInspect(project)}
                  className="w-full text-xs"
                >
                  <span>{isRealProject ? 'Case Study' : 'Details'}</span>
                </Button>

                {isRealProject && project.liveUrl ? (
                  <Button
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="yellow"
                    size="sm"
                    className="w-full text-xs"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Site</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Button>
                ) : (
                  <Button
                    as="a"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="black"
                    size="sm"
                    className="w-full text-xs"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || 'Project Specs'}
        subtitle={`CLASSIFICATION: ${selectedProject?.projectType === 'real-project' ? 'REAL COMMERCIAL CLIENT PROJECT' : 'GITHUB PERSONAL REPO'} • ${selectedProject?.category}`}
        headerBg={selectedProject?.projectType === 'real-project' ? 'bg-amber-300 text-black' : 'bg-brutal-yellow text-black'}
      >
        {selectedProject && (
          <div className="space-y-5 font-mono">
            {selectedProject.projectType === 'real-project' ? (
              <div className="p-3.5 bg-amber-100 border-3 border-black shadow-brutal-sm flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-black text-black">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-900 shrink-0" />
                  <span>AGENCY / CLIENT: {selectedProject.agency || selectedProject.clientName}</span>
                </div>
                <span className="bg-black text-amber-300 px-2 py-0.5 text-[10px] uppercase font-mono self-start sm:self-auto">
                  LIVE COMMERCIAL PRODUCTION BUILD
                </span>
              </div>
            ) : (
              <div className="p-3 bg-gray-100 border-2 border-black flex items-center justify-between text-xs font-black text-black">
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>GITHUB REPO: github.com/StackOdyssey/{selectedProject.repoName}</span>
                </div>
                <span className="bg-black text-white px-2 py-0.5 text-[10px] uppercase font-mono">
                  OPEN SOURCE LAB
                </span>
              </div>
            )}

            {/* Modal Image / Logo Banner */}
            {selectedProject.image && (
              <div className="border-3 border-black shadow-brutal-sm overflow-hidden bg-neutral-950 p-6 flex items-center justify-center max-h-56">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="max-h-44 max-w-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)]"
                />
              </div>
            )}

            <div className="p-4 bg-gray-50 dark:bg-gray-800 border-3 border-black shadow-brutal-sm">
              <div className="text-xs font-black uppercase text-gray-600 dark:text-gray-400 mb-1">PROJECT SUMMARY:</div>
              <p className="text-sm font-sans font-medium text-black dark:text-white leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Deep Stack Architecture Breakdown */}
            {selectedProject.stackOverview && (
              <div className="border-3 border-black p-4 bg-cyan-50/70 dark:bg-cyan-950/30 shadow-brutal-sm space-y-2.5">
                <div className="text-xs font-mono font-black uppercase text-cyan-900 dark:text-cyan-300 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-700 dark:text-cyan-400" />
                  <span>ARCHITECTURE & STACK BREAKDOWN</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  {Object.entries(selectedProject.stackOverview).map(([key, val]) => (
                    <div key={key} className="p-2 bg-white dark:bg-gray-900 border border-black shadow-brutal-xs">
                      <div className="text-[10px] font-black uppercase text-gray-500 dark:text-gray-400 mb-0.5">
                        {key}:
                      </div>
                      <div className="font-bold text-black dark:text-gray-200">
                        {val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="text-xs font-black uppercase text-black dark:text-white mb-2">KEY ENGINEERING HIGHLIGHTS:</div>
              <div className="space-y-2">
                {selectedProject.highlights.map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-yellow-50 dark:bg-yellow-950/30 border-2 border-black flex items-start gap-2 text-xs font-bold text-black dark:text-white">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-black uppercase text-black dark:text-white mb-2">TECHNOLOGY ECOSYSTEM:</div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <Badge key={idx} variant="cyan" size="md">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-3">
              {selectedProject.projectType === 'real-project' ? (
                <>
                  {selectedProject.liveUrl && (
                    <Button
                      as="a"
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="yellow"
                      size="md"
                      className="w-full sm:w-auto flex-1"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Visit Live Website ({selectedProject.liveUrl.replace('https://', '')})</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                  <Button
                    as="a"
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    variant="black"
                    size="md"
                    className="w-full sm:w-auto flex-1"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Discuss Commercial Build</span>
                  </Button>
                </>
              ) : (
                <Button
                  as="a"
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="black"
                  size="md"
                  className="w-full"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Source Code on GitHub (@StackOdyssey)</span>
                  <ExternalLink className="w-4 h-4" />
                </Button>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
