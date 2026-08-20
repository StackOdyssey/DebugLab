import React, { useState } from 'react';
import { Building2, Globe, ArrowUpRight, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export function HomeCommercialProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter only real commercial production projects
  const commercialProjects = PORTFOLIO.projects.filter(p => p.projectType === 'real-project');

  const handleInspect = (proj) => {
    sounds.playClick();
    setSelectedProject(proj);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-4 border-black gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-brutal-yellow text-black px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase mb-2 shadow-brutal-sm">
            <Building2 className="w-4 h-4" />
            <span>Commercial Production Client Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            COMMERCIAL <span className="text-brutal-yellow">PROJECTS</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <p className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300 max-w-xs">
            Real enterprise web applications built and deployed for corporate clients.
          </p>
          <Button
            as="a"
            href="#/projects"
            variant="yellow"
            size="sm"
          >
            <span>View All Works (8)</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Grid of Commercial Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {commercialProjects.map((project) => (
          <Card
            key={project.id}
            hoverEffect={true}
            header={
              <div className="flex items-center justify-between w-full font-mono text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-black/40 border border-black inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-black/40 border border-black inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-black/40 border border-black inline-block"></span>
                  <span className="ml-2 font-black text-black">{project.repoName}</span>
                </div>
                <Badge variant="yellow" size="sm" className="text-[9px]">
                  ★ REAL CLIENT BUILD
                </Badge>
              </div>
            }
            headerBg="bg-brutal-yellow text-black"
            shadow="shadow-brutal-xl"
            className="group flex flex-col border-4 border-black ring-2 ring-yellow-400"
          >
            {/* Classification Strip */}
            <div className="-mx-4 -mt-4 mb-3 px-3.5 py-1.5 border-b-2 border-black flex items-center justify-between text-[10px] font-mono font-black uppercase bg-brutal-yellow text-black">
              <span className="flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-black" />
                <span>REAL COMMERCIAL CLIENT PROJECT</span>
              </span>
              <span className="text-[9px] px-1.5 py-0.2 bg-black text-white font-bold">
                DEPLOYED
              </span>
            </div>

            {/* Project Image Preview */}
            {project.image && (
              <div 
                className="relative border-2 border-black mb-4 overflow-hidden bg-gray-900 aspect-video group-hover:scale-[1.01] transition-transform cursor-pointer"
                onClick={() => handleInspect(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-black text-white text-[9px] font-mono font-bold px-2 py-0.5 border border-white/40 shadow-sm flex items-center gap-1">
                  <Globe className="w-3 h-3 text-green-400" />
                  <span>LIVE PORTAL</span>
                </div>
              </div>
            )}

            <div className="mb-2">
              <span className="text-[10px] font-mono font-black uppercase text-gray-500 tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl font-black font-sans uppercase tracking-tight text-black dark:text-white mt-0.5 leading-snug">
                {project.title}
              </h3>
            </div>

            <p className="text-xs font-mono text-gray-700 dark:text-gray-300 mb-4 flex-1">
              {project.description}
            </p>

            {/* Enterprise Highlights */}
            <div className="border-2 border-black p-3 mb-4 space-y-1.5 bg-yellow-50/50 dark:bg-yellow-950/20">
              <div className="text-[9px] font-mono font-black uppercase text-gray-600 dark:text-gray-400">
                ENTERPRISE HIGHLIGHTS:
              </div>
              {project.highlights.slice(0, 3).map((hl, hIdx) => (
                <div key={hIdx} className="text-[11px] font-mono font-medium text-black dark:text-gray-200 flex items-start gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1 mb-5">
              {project.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 border border-black text-[10px] font-mono font-bold text-black dark:text-white hover:bg-brutal-yellow hover:text-black transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              <Button
                variant="white"
                size="sm"
                onClick={() => handleInspect(project)}
                className="w-full text-xs"
              >
                <span>Case Study</span>
              </Button>

              {project.liveUrl && (
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
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Explore More Footer Banner */}
      <div className="mt-8 p-6 bg-black text-white border-4 border-black shadow-brutal flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono">
        <div>
          <div className="text-sm font-black uppercase text-brutal-yellow">
            Want to see GitHub open-source repositories & experiments?
          </div>
          <p className="text-xs text-gray-300 font-bold mt-0.5">
            Explore 6 additional modular labs, Django backends, React applications, and Cisco tools on the dedicated Projects page.
          </p>
        </div>
        <Button
          as="a"
          href="#/projects"
          variant="yellow"
          size="md"
          className="shrink-0"
        >
          <span>Explore All 8 Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>

      {/* Project Case Study Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || 'Project Case Study'}
        subtitle={`CLIENT / CATEGORY: ${selectedProject?.clientName || selectedProject?.category}`}
        headerBg="bg-brutal-yellow text-black"
      >
        {selectedProject && (
          <div className="space-y-6">
            {/* Modal Image */}
            {selectedProject.image && (
              <div className="border-3 border-black overflow-hidden aspect-video bg-gray-900 shadow-brutal-sm">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            )}

            {/* Overview */}
            <div className="p-4 bg-gray-50 dark:bg-gray-800 border-3 border-black shadow-brutal-sm space-y-2">
              <div className="text-xs font-mono font-black uppercase text-gray-500 dark:text-gray-400">
                SYSTEM ARCHITECTURE & CLIENT OVERVIEW
              </div>
              <p className="text-sm font-sans font-medium text-black dark:text-white leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Engineering Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-black uppercase text-black dark:text-white">
                KEY TECHNICAL HIGHLIGHTS & DELIVERABLES:
              </h4>
              <div className="space-y-1.5">
                {selectedProject.highlights.map((hl, idx) => (
                  <div 
                    key={idx}
                    className="p-2.5 bg-gray-50 dark:bg-gray-800 border-2 border-black font-mono text-xs font-bold text-black dark:text-white flex items-start gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono font-black uppercase text-black dark:text-white mb-2">
                TECHNOLOGY STACK:
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 bg-brutal-yellow text-black border-2 border-black font-mono text-xs font-black uppercase shadow-brutal-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Live Website Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t-2 border-black">
              <div className="text-xs font-mono font-bold text-gray-600 dark:text-gray-400">
                Client Status: <strong className="text-black dark:text-white">Verified Commercial Deployment</strong>
              </div>
              {selectedProject.liveUrl && (
                <Button
                  as="a"
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="yellow"
                  size="sm"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Production Site</span>
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
