import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Certifications } from './components/Certifications';
import { NetworkTool } from './components/NetworkTool';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/Terminal';
import { CommandMenu } from './components/CommandMenu';
import { Toast } from './components/ui/Toast';
import { Marquee } from './components/ui/Marquee';
import { THEMES } from './data/themeConfig';
import { PORTFOLIO } from './data/portfolioData';
import { sounds } from './utils/soundEffects';
import confetti from 'canvas-confetti';

export function App() {
  const [currentTheme, setCurrentTheme] = useState('neo-volt');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  const themeObj = THEMES[currentTheme] || THEMES['neo-volt'];

  useEffect(() => {
    // Apply dark mode class to html document element if theme is dark
    const root = document.documentElement;
    if (themeObj.dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [currentTheme, themeObj]);

  const showToast = (toastData) => {
    setToast(toastData);
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleCopyEmail = () => {
    sounds.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO.email);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {}
    showToast({
      title: 'Email Copied!',
      message: `${PORTFOLIO.email} copied to clipboard.`,
      type: 'success'
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${themeObj.bgClass}`}>
      {/* Neo-Brutalist Grid Background Overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-10 opacity-60" />

      {/* Global Navbar */}
      <Navbar
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenCommandPalette={() => setIsCommandMenuOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Hero Section */}
      <main>
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* Highlight Marquee */}
        <Marquee
          bg="bg-black"
          text="text-brutal-yellow"
          items={[
            "OPEN FOR FULL-STACK INTERNSHIPS",
            "REACT.JS",
            "NEXT.JS BASICS",
            "CISCO SWITCHING & IP",
            "ISTA DÉVELOPPEMENT DIGITAL",
            "ALX AFRICA HONORS",
            "C++ BASICS",
            "DJANGO REST APIs",
            "GITHUB: @StackOdyssey"
          ]}
        />

        {/* Featured Projects Showcase */}
        <Projects />

        {/* Verified Certifications Hub */}
        <Certifications />

        {/* Cisco IPv4 Subnet & CIDR Inspector (Interactive Tool) */}
        <NetworkTool onShowToast={showToast} />

        {/* Skills & Tech Matrix */}
        <SkillsMatrix />

        {/* Learning Journey & Academic Progression Timeline */}
        <Timeline />

        {/* Contact & Dispatch Message Zone */}
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Interactive CLI Terminal Emulator Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onShowToast={showToast}
      />

      {/* Ctrl+K Quick Command Menu */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
        onOpenTerminal={() => {
          setIsCommandMenuOpen(false);
          setIsTerminalOpen(true);
        }}
        onSetTheme={(t) => setCurrentTheme(t)}
        onCopyEmail={handleCopyEmail}
      />

      {/* Floating Toast Notification */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}

export default App;
