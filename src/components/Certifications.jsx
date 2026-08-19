import React, { useState } from 'react';
import { Award, ShieldCheck, ExternalLink, Network, Code2, Cpu, GraduationCap, Flame, CheckCircle, Sparkles } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { Modal } from './ui/Modal';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

const ICON_MAP = {
  Network: Network,
  Code2: Code2,
  Cpu: Cpu,
  GraduationCap: GraduationCap,
  Flame: Flame,
};

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleInspect = (cert) => {
    sounds.playSuccess();
    setSelectedCert(cert);
    try {
      confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 }
      });
    } catch (e) {}
  };

  return (
    <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-4 border-black gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-brutal-yellow text-black px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase mb-2 shadow-brutal-sm">
            <ShieldCheck className="w-4 h-4" />
            <span>Official Credentials & Honors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            CERTIFICATIONS <span className="text-brutal-pink">&</span> ACADEMICS
          </h2>
        </div>
        <p className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300 max-w-md">
          Verified credentials spanning Cisco networking systems, ALX Africa front-end engineering, C++ programming, and ISTA full-stack development.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO.certifications.map((cert, idx) => {
          const IconComp = ICON_MAP[cert.icon] || Award;
          
          return (
            <Card
              key={cert.id}
              hoverEffect={true}
              header={
                <div className="flex items-center justify-between w-full">
                  <span className="flex items-center gap-1.5">
                    <IconComp className="w-4 h-4 text-black dark:text-white" />
                    <span>{cert.issuer}</span>
                  </span>
                  <span className="bg-white text-black px-1.5 py-0.5 text-[10px] font-black border border-black">
                    {cert.date}
                  </span>
                </div>
              }
              headerBg={cert.color}
              className="group"
            >
              {/* Top Stamp / Badge */}
              <div className="flex items-center justify-between mb-3">
                <Badge variant={idx % 2 === 0 ? 'yellow' : 'lime'} size="sm" rotate={idx % 2 === 0 ? 'left-1' : 'right-1'}>
                  {cert.badgeText}
                </Badge>
                <div className="text-[10px] font-mono font-black text-gray-500 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                  VERIFIED
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-black font-sans tracking-tight text-black mb-2 leading-snug">
                {cert.title}
              </h3>

              {/* Description */}
              <p className="text-xs font-mono text-gray-700 mb-4 flex-1">
                {cert.description}
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cert.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 bg-gray-100 border border-black text-[10px] font-mono font-bold text-black"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Card Footer Button */}
              <Button
                variant="white"
                size="sm"
                className="w-full justify-between mt-auto group-hover:bg-brutal-yellow transition-colors"
                onClick={() => handleInspect(cert)}
              >
                <span>Inspect Credential</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Card>
          );
        })}
      </div>

      {/* Modal Detail Preview */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title={selectedCert?.title || 'Certificate Verification'}
        subtitle={`ISSUED BY: ${selectedCert?.issuer} • ${selectedCert?.date}`}
        headerBg={selectedCert?.color || 'bg-brutal-yellow'}
      >
        {selectedCert && (
          <div className="space-y-5">
            {/* Visual Credential Card Header */}
            <div className="p-4 bg-gray-50 border-3 border-black shadow-brutal-sm space-y-2">
              <div className="flex items-center justify-between text-xs font-mono font-bold text-gray-600 border-b border-gray-300 pb-2">
                <span>CREDENTIAL ID: <strong className="text-black font-black">{selectedCert.codeStamp}</strong></span>
                <span className="bg-emerald-100 text-emerald-800 border border-emerald-500 px-2 py-0.5 font-black text-[10px]">
                  AUTHENTICATED RECORD
                </span>
              </div>
              <p className="text-sm font-sans font-medium text-gray-900 pt-1">
                {selectedCert.description}
              </p>
            </div>

            {/* Competency breakdown */}
            <div>
              <h4 className="text-xs font-mono font-black uppercase text-black mb-2 tracking-wider">
                CORE COMPETENCIES & CURRICULUM:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedCert.skills.map((skill, idx) => (
                  <div 
                    key={idx}
                    className="p-2 bg-yellow-50 border-2 border-black font-mono text-xs font-bold text-black flex items-center gap-2"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verification Footer */}
            <div className="pt-2 flex items-center justify-between gap-3 border-t-2 border-black">
              <span className="text-[11px] font-mono text-gray-600">
                Holder: <strong>Mohammed (StackOdyssey)</strong>
              </span>
              <Button
                as="a"
                href={selectedCert.credentialUrl}
                target="_blank"
                variant="yellow"
                size="sm"
              >
                <span>Visit Issuer</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
