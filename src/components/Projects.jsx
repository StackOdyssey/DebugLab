import React, { useState } from 'react';
import { ExternalLink, Code2, Layers, CheckCircle, Sparkles, FolderGit2 } from 'lucide-react';
import { Github } from './ui/GithubIcon';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Enterprise / Next.js', 'React / Frontend', 'Full Stack / Python', 'Networking / Tools', 'JavaScript / Productivity'];

  const filteredProjects = PORTFOLIO.projects.filter(p => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory || (selectedCategory === 'JavaScript / Productivity' && p.category.includes('JavaScript'));
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
            <span>Open Source & Enterprise Client Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            FEATURED <span className="text-brutal-cyan">PROJECTS</span>
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Button
            as="a"
            href="https://github.com/StackOdyssey"
            target="_blank"
            variant="black"
            size="sm"
          >
            <Github className="w-4 h-4" />
            <span>View All 22+ Repos on GitHub</span>
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              sounds.playClick();
              setSelectedCategory(cat);
            }}
            className={`px-4 py-2 font-mono text-xs font-black uppercase border-3 border-black transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-brutal-yellow text-black shadow-brutal -translate-y-0.5'
                : 'bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 shadow-brutal-sm'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <Card
            key={project.id}
            hoverEffect={true}
            header={
              <div className="flex items-center justify-between w-full font-mono text-xs">
                {/* Mock Mac Window Controls */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 border border-black inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 border border-black inline-block"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 border border-black inline-block"></span>
                  <span className="ml-2 font-black text-black">{project.repoName}</span>
                </div>
                {project.badgeText ? (
                  <Badge variant="cyan" size="sm" className="text-[9px]">
                    {project.badgeText}
                  </Badge>
                ) : project.featured ? (
                  <Badge variant="pink" size="sm" className="text-[9px]">
                    FEATURED
                  </Badge>
                ) : null}
              </div>
            }
            headerBg={project.color}
            shadow="shadow-brutal-md"
            className="group"
          >
            <div className="mb-2">
              <span className="text-[10px] font-mono font-black uppercase text-gray-500 tracking-wider">
                {project.category}
              </span>
              <h3 className="text-xl font-black font-sans uppercase tracking-tight text-black mt-0.5 leading-snug">
                {project.title}
              </h3>
            </div>

            <p className="text-xs font-mono text-gray-700 mb-4 flex-1">
              {project.description}
            </p>

            {/* Key Takeaways */}
            <div className="bg-gray-50 border-2 border-black p-2.5 mb-4 space-y-1">
              <div className="text-[9px] font-mono font-black uppercase text-gray-600">HIGHLIGHTS:</div>
              {project.highlights.slice(0, 2).map((hl, hIdx) => (
                <div key={hIdx} className="text-[11px] font-mono font-medium text-black flex items-start gap-1.5">
                  <CheckCircle className="w-3 h-3 text-green-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{hl}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-1 mb-5">
              {project.tech.map((t, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 bg-yellow-100 border border-black text-[10px] font-mono font-bold text-black"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2 mt-auto">
              <Button
                variant="white"
                size="sm"
                onClick={() => handleInspect(project)}
                className="w-full text-xs"
              >
                <span>{project.isPrivateClient ? 'Case Study' : 'Details'}</span>
              </Button>

              {project.isPrivateClient ? (
                <Button
                  variant="cyan"
                  size="sm"
                  onClick={() => handleInspect(project)}
                  className="w-full text-xs"
                >
                  <span>Architecture</span>
                </Button>
              ) : (
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  variant="yellow"
                  size="sm"
                  className="w-full text-xs"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>

      {/* Project Detail Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || 'Project Specs'}
        subtitle={`PROJECT: ${selectedProject?.repoName} • ${selectedProject?.category}`}
        headerBg="bg-brutal-yellow"
      >
        {selectedProject && (
          <div className="space-y-5 font-mono">
            {selectedProject.isPrivateClient && (
              <div className="p-3 bg-cyan-100 border-2 border-black flex items-center justify-between text-xs font-black text-black">
                <span>🛡️ ENTERPRISE CLIENT SYSTEM</span>
                <span className="bg-black text-white px-2 py-0.5 text-[10px]">
                  CONFIDENTIAL CODEBASE & ARCHITECTURE
                </span>
              </div>
            )}

            <div className="p-4 bg-gray-50 border-3 border-black shadow-brutal-sm">
              <div className="text-xs font-black uppercase text-gray-600 mb-1">PROJECT SUMMARY:</div>
              <p className="text-sm font-sans font-medium text-black leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            <div>
              <div className="text-xs font-black uppercase text-black mb-2">KEY ENGINEERING HIGHLIGHTS:</div>
              <div className="space-y-2">
                {selectedProject.highlights.map((item, idx) => (
                  <div key={idx} className="p-2.5 bg-yellow-50 border-2 border-black flex items-start gap-2 text-xs font-bold text-black">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-black uppercase text-black mb-2">TECHNOLOGY ECOSYSTEM:</div>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t, idx) => (
                  <Badge key={idx} variant="cyan" size="md">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t-2 border-black flex items-center justify-between gap-3">
              {selectedProject.isPrivateClient ? (
                <Button
                  as="a"
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  variant="yellow"
                  size="md"
                  className="w-full"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Discuss Full-Stack Architecture / Hire Mohammed</span>
                </Button>
              ) : (
                <Button
                  as="a"
                  href={selectedProject.github}
                  target="_blank"
                  variant="black"
                  size="md"
                  className="w-full"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Repository Source on GitHub</span>
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
