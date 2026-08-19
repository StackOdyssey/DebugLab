import React, { useState } from 'react';
import { Mail, MessageSquare, Copy, Check, Send, Sparkles, Phone, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';
import { Github } from './ui/GithubIcon';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';
import confetti from 'canvas-confetti';

export function Contact({ onShowToast }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Project Inquiry / Internship Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    sounds.playSuccess();
    navigator.clipboard.writeText(PORTFOLIO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#FFE600', '#06B6D4', '#F43F5E']
      });
    } catch (e) {}

    if (onShowToast) {
      onShowToast({
        title: 'Email Copied!',
        message: `${PORTFOLIO.email} has been copied to your clipboard.`,
        type: 'success'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sounds.playSuccess();
    setSubmitted(true);

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}

    if (onShowToast) {
      onShowToast({
        title: 'Message Sent!',
        message: 'Thank you for reaching out! Mohammed will reply promptly.',
        type: 'success'
      });
    }
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b-4 border-black gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-brutal-yellow text-black px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase mb-2 shadow-brutal-sm">
            <Mail className="w-4 h-4" />
            <span>Direct Line & Opportunities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            LET'S WORK <span className="text-brutal-pink">TOGETHER</span>
          </h2>
        </div>
        <p className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300 max-w-md">
          Interested in hiring Mohammed (Simon) for an internship, junior full-stack developer role, or freelance web build? Get in touch below!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Info & Status Card */}
        <div className="lg:col-span-5 space-y-6">
          <Card
            header="DIRECT CHANNELS & AVAILABILITY"
            headerBg="bg-brutal-cyan text-black"
            shadow="shadow-brutal-lg"
          >
            <div className="space-y-4">
              {/* Copy Email Box */}
              <div className="p-3.5 bg-yellow-100 border-3 border-black shadow-brutal-sm">
                <div className="text-[10px] font-mono font-black uppercase text-gray-700 mb-1">
                  OFFICIAL EMAIL:
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono font-black text-xs sm:text-sm text-black truncate">
                    {PORTFOLIO.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2.5 py-1 bg-black text-white font-mono font-black text-xs uppercase border border-black hover:bg-gray-800 transition-colors flex items-center gap-1 shrink-0 cursor-pointer shadow-brutal-sm"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Status Box */}
              <div className="p-3.5 bg-green-100 border-3 border-black shadow-brutal-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse"></span>
                  <span className="font-mono font-black text-xs text-black uppercase">CURRENT STATUS:</span>
                </div>
                <p className="font-mono text-xs font-bold text-gray-800 leading-relaxed">
                  🟢 Actively seeking: <strong className="text-black underline">Full-Stack Internships</strong>, <strong className="text-black underline">Front-End Junior Roles</strong>, and <strong className="text-black underline">Freelance Web Builds</strong>.
                </p>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono font-black uppercase text-gray-600">
                  CONNECT ON PLATFORMS:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <Button
                    as="a"
                    href={PORTFOLIO.githubUrl}
                    target="_blank"
                    variant="black"
                    size="sm"
                    className="w-full justify-between"
                  >
                    <span className="flex items-center gap-1.5">
                      <Github className="w-4 h-4" /> GitHub
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>

                  <Button
                    as="a"
                    href={PORTFOLIO.whatsapp}
                    target="_blank"
                    variant="lime"
                    size="sm"
                    className="w-full justify-between"
                  >
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-4 h-4" /> WhatsApp
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-7">
          <Card
            header="DISPATCH ENCRYPTED MESSAGE"
            headerBg="bg-brutal-yellow text-black"
            shadow="shadow-brutal-lg"
          >
            {submitted ? (
              <div className="p-8 text-center space-y-4 font-mono">
                <div className="w-16 h-16 bg-brutal-lime border-4 border-black shadow-brutal flex items-center justify-center mx-auto text-2xl font-black">
                  ✓
                </div>
                <h3 className="text-2xl font-black font-sans uppercase text-black">
                  Message Transmitted!
                </h3>
                <p className="text-xs font-bold text-gray-700 max-w-sm mx-auto">
                  Thank you for reaching out! Your message has been logged. Mohammed (Simon) will get back to you as soon as possible.
                </p>
                <Button
                  variant="yellow"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-black mb-1">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex / Tech Agency"
                      className="w-full px-3 py-2 bg-gray-50 border-2 border-black font-bold text-xs text-black focus:outline-none focus:bg-yellow-50 focus:border-brutal-pink shadow-brutal-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-black mb-1">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className="w-full px-3 py-2 bg-gray-50 border-2 border-black font-bold text-xs text-black focus:outline-none focus:bg-yellow-50 focus:border-brutal-pink shadow-brutal-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-black mb-1">
                    Subject / Project Nature
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Internship Opportunity / React Project"
                    className="w-full px-3 py-2 bg-gray-50 border-2 border-black font-bold text-xs text-black focus:outline-none focus:bg-yellow-50 focus:border-brutal-pink shadow-brutal-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-black mb-1">
                    Message Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell Mohammed about your project, timeline, or interview details..."
                    className="w-full px-3 py-2 bg-gray-50 border-2 border-black font-bold text-xs text-black focus:outline-none focus:bg-yellow-50 focus:border-brutal-pink shadow-brutal-sm"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="yellow"
                    size="lg"
                    className="w-full"
                  >
                    <Send className="w-4 h-4" />
                    <span>Transmit Message to Mohammed</span>
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
