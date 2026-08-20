import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeGoogleAds } from './components/HomeGoogleAds';
import { HomeCommercialProjects } from './components/HomeCommercialProjects';
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
import { ArrowLeft, Home } from 'lucide-react';

function getRouteFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0].split('/')[0].trim().toLowerCase();
  const validRoutes = ['projects', 'google-ads', 'skills', 'cisco-tool', 'timeline', 'certifications', 'contact'];
  if (validRoutes.includes(hash)) {
    return hash;
  }
  return 'home';
}

export function App() {
  const [currentTheme, setCurrentTheme] = useState('neo-volt');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [currentPage, setCurrentPage] = useState(getRouteFromHash());

  const themeObj = THEMES[currentTheme] || THEMES['neo-volt'];

  // Listen to hash change for zero-latency multi-page routing
  useEffect(() => {
    const handleHashChange = () => {
      const newRoute = getRouteFromHash();
      setCurrentPage(newRoute);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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

  const handleCopyPhone = () => {
    sounds.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO.phone || '+212672779391');
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#22C55E', '#FFE600', '#06B6D4']
      });
    } catch (e) {}
    showToast({
      title: 'WhatsApp Number Copied!',
      message: `${PORTFOLIO.phoneFormatted || '+212 672-779391'} copied to clipboard.`,
      type: 'success'
    });
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
        currentPage={currentPage}
      />

      {/* Breadcrumb Navigation on Dedicated Subpages */}
      {currentPage !== 'home' && (
        <div className="bg-gray-100 dark:bg-gray-800 border-b-3 border-black py-2.5 px-4 sm:px-6 lg:px-8 font-mono text-xs">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <a 
                href="#/" 
                className="font-black text-black dark:text-white hover:bg-brutal-yellow hover:text-black px-2 py-0.5 border border-black inline-flex items-center gap-1 shadow-brutal-sm transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </a>
              <span className="text-gray-500 dark:text-gray-400 font-black">/</span>
              <span className="bg-brutal-yellow text-black font-black px-2 py-0.5 border border-black uppercase shadow-brutal-sm">
                {currentPage === 'cisco-tool' ? 'Cisco Subnet Tool' : currentPage.replace('-', ' ')}
              </span>
            </div>
            <a 
              href="#/"
              className="text-black dark:text-gray-200 hover:bg-brutal-yellow hover:text-black px-2 py-0.5 font-black flex items-center gap-1 text-xs border border-transparent hover:border-black transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Homepage</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Routed Content */}
      <main className="min-h-[60vh]">
        {currentPage === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onOpenTerminal={() => setIsTerminalOpen(true)}
            />

            {/* 2. Highlight Marquee */}
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
                "GOOGLE ADS MANAGER",
                "DJANGO REST APIs",
                "GITHUB: @StackOdyssey"
              ]}
            />

            {/* 3. Google Ads Management Section */}
            <HomeGoogleAds />

            {/* 4. Real Commercial Production Projects */}
            <HomeCommercialProjects />
          </>
        )}

        {currentPage === 'projects' && (
          <Projects />
        )}

        {currentPage === 'google-ads' && (
          <HomeGoogleAds />
        )}

        {currentPage === 'skills' && (
          <SkillsMatrix />
        )}

        {currentPage === 'cisco-tool' && (
          <NetworkTool onShowToast={showToast} />
        )}

        {currentPage === 'timeline' && (
          <Timeline />
        )}

        {currentPage === 'certifications' && (
          <Certifications />
        )}

        {currentPage === 'contact' && (
          <Contact onShowToast={showToast} />
        )}
      </main>

      {/* Footer */}
      <Footer
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Global Interactive CLI Terminal Sandbox */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onSetTheme={setCurrentTheme}
        onShowToast={showToast}
      />

      {/* Global Command Palette Menu (Ctrl+K) */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onSetTheme={setCurrentTheme}
        onCopyEmail={handleCopyEmail}
        onCopyPhone={handleCopyPhone}
      />

      {/* Toast Notification Container */}
      <Toast
        toast={toast}
        onClose={() => setToast(null)}
      />
    </div>
  );
}

export default App;
