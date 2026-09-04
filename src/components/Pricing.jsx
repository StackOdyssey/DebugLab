import React, { useState, useMemo } from 'react';
import {
  CreditCard,
  CheckCircle,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Code2,
  Target,
  Layout,
  Zap,
  Cloud,
  ShieldCheck,
  Star,
  ArrowUpRight,
  Mail,
  ChevronDown,
  HelpCircle,
  Shield,
  Layers,
  Clock,
  ArrowLeft
} from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { WhatsApp } from './ui/WhatsAppIcon';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const ICON_MAP = {
  Code2,
  Target,
  Layout,
  Zap,
  Cloud,
  ShieldCheck,
  Sparkles,
};

function formatPrice(priceMAD, currency, rates, symbols) {
  if (priceMAD === null) return null;
  const converted = Math.round(priceMAD * rates[currency]);
  const symbol = symbols[currency];

  if (currency === 'MAD') {
    return `${converted.toLocaleString()} ${symbol}`;
  }
  return `${symbol}${converted.toLocaleString()}`;
}

export function Pricing({ packageSlug = null }) {
  const { pricing } = PORTFOLIO;
  const [currency, setCurrency] = useState(pricing.defaultCurrency);
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const currencies = Object.keys(pricing.currencyRates);

  // Check if a specific package is selected
  const selectedPackage = useMemo(() => {
    if (!packageSlug) return null;
    return pricing.serviceCategories.find(c => c.slug === packageSlug || c.id === packageSlug) || null;
  }, [packageSlug, pricing.serviceCategories]);

  const filteredCategories = useMemo(() => {
    if (activeCategory === 'all') return pricing.serviceCategories;
    return pricing.serviceCategories.filter(c => c.id === activeCategory);
  }, [activeCategory, pricing.serviceCategories]);

  // If a specific package slug is provided, render the dedicated package page
  if (selectedPackage) {
    const IconComp = ICON_MAP[selectedPackage.icon] || Sparkles;
    const otherPackages = pricing.serviceCategories.filter(c => c.slug !== selectedPackage.slug);

    return (
      <section id="pricing-package" className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
        {/* Navigation & Back Link */}
        <div className="mb-6 flex items-center justify-between gap-4 flex-wrap pb-4 border-b-2 border-black/20">
          <a
            href="#/pricing"
            onClick={() => sounds.playClick()}
            className="inline-flex items-center gap-2 text-xs font-black uppercase text-black dark:text-white hover:bg-brutal-yellow hover:text-black px-3 py-1.5 border-2 border-black shadow-brutal-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Packages Overview</span>
          </a>

          {/* Currency Toggle */}
          <div className="flex items-center gap-1">
            <span className="text-[10px] font-black uppercase text-gray-500 dark:text-gray-400 mr-2">Currency:</span>
            {currencies.map(cur => (
              <button
                key={cur}
                onClick={() => {
                  sounds.playClick();
                  setCurrency(cur);
                }}
                className={`px-3 py-1.5 text-xs font-black uppercase border-2 border-black transition-all cursor-pointer ${
                  currency === cur
                    ? 'bg-brutal-yellow text-black shadow-brutal-sm -translate-y-0.5'
                    : 'bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {pricing.currencySymbols[cur]} {cur}
              </button>
            ))}
          </div>
        </div>

        {/* Package Hero Section */}
        <div className="mb-12 bg-white dark:bg-brutal-darkCard border-4 border-black shadow-brutal-xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="inline-flex items-center gap-1.5 bg-brutal-yellow text-black px-3 py-1 border-2 border-black text-xs font-black uppercase shadow-brutal-sm">
                  <IconComp className="w-4 h-4" />
                  <span>DEDICATED SERVICE PACKAGE</span>
                </div>
                <Badge variant="black" size="md">
                  CALIBRATED 2026 RATES
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
                {selectedPackage.title}
              </h1>

              <p className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200">
                {selectedPackage.tagline}
              </p>

              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {selectedPackage.description}
              </p>

              {/* Ideal For Box */}
              <div className="p-3.5 bg-yellow-50 dark:bg-yellow-950/30 border-2 border-dashed border-black dark:border-yellow-500/50 flex items-start gap-3">
                <Star className="w-5 h-5 text-brutal-yellow shrink-0 mt-0.5 fill-current" />
                <div className="text-xs font-bold text-black dark:text-white">
                  <span className="uppercase font-black text-black dark:text-yellow-400 mr-1.5">Ideal For:</span>
                  {selectedPackage.idealFor}
                </div>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="lg:w-80 shrink-0 bg-black text-white p-5 border-3 border-black shadow-brutal space-y-4">
              <div className="text-xs font-black uppercase text-brutal-yellow flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Custom Requirements?</span>
              </div>
              <p className="text-[11px] text-gray-300 font-bold">
                Need a scope outside these standard tiers? Let's discuss your roadmap directly on WhatsApp.
              </p>
              <Button
                as="a"
                href={PORTFOLIO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="yellow"
                size="sm"
                className="w-full text-xs"
              >
                <WhatsApp className="w-4 h-4" />
                <span>Quick WhatsApp Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between pb-3 border-b-2 border-black">
            <h2 className="text-2xl sm:text-3xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
              PACKAGE TIERS & PRICING
            </h2>
            <div className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">
              Shown in {currency} ({pricing.currencySymbols[currency]})
            </div>
          </div>

          <div className={`grid gap-6 items-stretch ${
            selectedPackage.tiers.length === 2
              ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {selectedPackage.tiers.map((tier, tIdx) => {
              const priceDisplay = formatPrice(tier.priceMAD, currency, pricing.currencyRates, pricing.currencySymbols);
              const isHighlighted = tier.highlighted;

              return (
                <Card
                  key={tIdx}
                  hoverEffect={true}
                  header={
                    <div className="flex items-center justify-between w-full font-mono text-xs">
                      <span className="font-black text-black truncate">{tier.name}</span>
                      {isHighlighted && (
                        <Badge variant="yellow" size="sm" className="text-[9px] shrink-0">
                          <Star className="w-3 h-3" /> RECOMMENDED
                        </Badge>
                      )}
                      {tier.isCustomQuote && (
                        <Badge variant="black" size="sm" className="text-[9px] shrink-0">
                          CUSTOM
                        </Badge>
                      )}
                    </div>
                  }
                  headerBg={isHighlighted
                    ? 'bg-brutal-yellow text-black'
                    : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white'
                  }
                  shadow={isHighlighted ? 'shadow-brutal-xl' : 'shadow-brutal-md'}
                  className={`group flex flex-col h-full ${
                    isHighlighted ? 'border-4 border-black ring-2 ring-yellow-400' : ''
                  }`}
                >
                  {/* Price Display */}
                  <div className="mb-4 pb-3 border-b-2 border-black/20">
                    {priceDisplay ? (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl sm:text-4xl font-black font-sans text-black dark:text-white tracking-tight">
                          {priceDisplay}
                        </span>
                        <span className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400 uppercase">
                          {tier.period}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span className="text-2xl sm:text-3xl font-black font-sans text-black dark:text-white tracking-tight">
                          Custom Quote
                        </span>
                        <MessageSquare className="w-5 h-5 text-brutal-yellow" />
                      </div>
                    )}
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-2.5 mb-6 flex-1">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs font-mono font-medium text-black dark:text-gray-200">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isHighlighted ? 'text-green-600' : 'text-green-500'
                        }`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    {tier.isCustomQuote ? (
                      <Button
                        as="a"
                        href={PORTFOLIO.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant={isHighlighted ? 'yellow' : 'black'}
                        size="md"
                        className="w-full text-xs"
                      >
                        <WhatsApp className="w-4 h-4" />
                        <span>{tier.cta}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Button>
                    ) : (
                      <Button
                        as="a"
                        href="#/contact"
                        variant={isHighlighted ? 'yellow' : 'white'}
                        size="md"
                        className="w-full text-xs"
                      >
                        <span>{tier.cta}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Deliverables & Technical Specs */}
        {selectedPackage.deliverables && (
          <div className="mb-16 bg-black text-white border-4 border-black shadow-brutal-lg p-6 sm:p-8">
            <div className="flex items-center gap-2 text-brutal-yellow text-xs font-black uppercase mb-3">
              <Layers className="w-4 h-4" />
              <span>Concrete Deliverables</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight mb-6">
              WHAT YOU RECEIVE WITH THIS PACKAGE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedPackage.deliverables.map((item, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3 bg-gray-900 border border-gray-700 p-3.5">
                  <CheckCircle2 className="w-5 h-5 text-brutal-yellow shrink-0 mt-0.5" />
                  <span className="text-xs font-bold text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FAQs Accordion */}
        {selectedPackage.faqs && selectedPackage.faqs.length > 0 && (
          <div className="mb-16">
            <div className="mb-6 pb-3 border-b-2 border-black flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-black dark:text-white" />
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
                  FREQUENTLY ASKED QUESTIONS
                </h3>
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase">
                {selectedPackage.faqs.length} FAQs
              </span>
            </div>

            <div className="space-y-3">
              {selectedPackage.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="border-3 border-black bg-white dark:bg-brutal-darkCard shadow-brutal-sm transition-all"
                  >
                    <button
                      onClick={() => {
                        sounds.playClick();
                        setOpenFaqIndex(isOpen ? null : fIdx);
                      }}
                      className="w-full text-left p-4 flex items-center justify-between gap-4 font-black uppercase text-sm sm:text-base text-black dark:text-white cursor-pointer hover:bg-brutal-yellow hover:text-black transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="bg-black text-white px-1.5 py-0.5 text-xs font-mono">Q{fIdx + 1}</span>
                        <span>{faq.question}</span>
                      </span>
                      <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-2 border-t-2 border-black/10 text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 leading-relaxed animate-in fade-in-50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Explore Other 6 Packages */}
        <div className="mb-16">
          <div className="mb-6 pb-3 border-b-2 border-black flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
              EXPLORE OTHER PRICING PACKAGES
            </h3>
            <span className="text-xs font-bold text-gray-500 uppercase">
              {otherPackages.length} OTHER SERVICES
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherPackages.map((other) => {
              const OtherIcon = ICON_MAP[other.icon] || Sparkles;
              return (
                <a
                  key={other.slug}
                  href={`#/pricing/${other.slug}`}
                  onClick={() => sounds.playClick()}
                  className="p-4 border-3 border-black bg-white dark:bg-brutal-darkCard shadow-brutal-sm hover:shadow-brutal-md hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-brutal-yellow hover:text-black transition-all group block"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-1.5 bg-black text-white group-hover:bg-black group-hover:text-brutal-yellow border border-black">
                      <OtherIcon className="w-4 h-4" />
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="text-sm font-black uppercase text-black dark:text-white group-hover:text-black">
                    {other.title}
                  </div>
                  <div className="text-[11px] text-gray-600 dark:text-gray-400 group-hover:text-gray-900 font-bold mt-1 line-clamp-2">
                    {other.tagline}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-6 sm:p-8 bg-black text-white border-4 border-black shadow-brutal">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="text-sm font-black uppercase text-brutal-yellow flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Ready to start with {selectedPackage.title}?</span>
              </div>
              <p className="text-xs text-gray-300 font-bold max-w-lg">
                Reach out with your project details. I'll get back to you with a roadmap and verified timeline.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase pt-1">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span>Fast response via WhatsApp (+212 672-779391)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                as="a"
                href={PORTFOLIO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                variant="lime"
                size="md"
              >
                <WhatsApp className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Button>
              <Button
                as="a"
                href="#/contact"
                variant="yellow"
                size="md"
              >
                <Mail className="w-4 h-4" />
                <span>Send Brief</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Otherwise, render the All Services Overview page
  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-4 border-black gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-brutal-yellow text-black px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase mb-2 shadow-brutal-sm">
            <CreditCard className="w-4 h-4" />
            <span>Services & Pricing Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            SERVICES & <span className="text-brutal-yellow">PRICING</span>
          </h2>
        </div>
        <p className="text-xs font-mono font-bold text-gray-700 dark:text-gray-300 max-w-sm">
          Calibrated 2026 rates for development, SEM, automation, cloud deployments, and security checks. Select any package for dedicated deliverables and FAQs.
        </p>
      </div>

      {/* Currency Toggle + Package Count Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Currency Toggle */}
        <div className="flex items-center gap-1 font-mono">
          <span className="text-[10px] font-black uppercase text-gray-500 dark:text-gray-400 mr-2">Currency:</span>
          {currencies.map(cur => (
            <button
              key={cur}
              onClick={() => {
                sounds.playClick();
                setCurrency(cur);
              }}
              className={`px-3 py-1.5 text-xs font-black uppercase border-2 border-black transition-all cursor-pointer ${
                currency === cur
                  ? 'bg-brutal-yellow text-black shadow-brutal-sm -translate-y-0.5'
                  : 'bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {pricing.currencySymbols[cur]} {cur}
            </button>
          ))}
        </div>

        {/* Service Count */}
        <div className="text-[10px] font-mono font-black uppercase text-gray-500 dark:text-gray-400">
          {pricing.serviceCategories.length} dedicated packages • {pricing.serviceCategories.reduce((a, c) => a + c.tiers.length, 0)} pricing tiers
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-10 font-mono overflow-x-auto">
        <button
          onClick={() => {
            sounds.playClick();
            setActiveCategory('all');
          }}
          className={`px-4 py-2 text-xs font-black uppercase border-3 border-black transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
            activeCategory === 'all'
              ? 'bg-brutal-yellow text-black shadow-brutal -translate-y-0.5'
              : 'bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 shadow-brutal-sm'
          }`}
        >
          <span>All Services</span>
          <span className={`text-[10px] px-1.5 py-0.2 border border-black ${
            activeCategory === 'all' ? 'bg-black text-white' : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'
          }`}>
            {pricing.serviceCategories.length}
          </span>
        </button>

        {pricing.serviceCategories.map(cat => {
          const IconComp = ICON_MAP[cat.icon] || Sparkles;
          return (
            <button
              key={cat.id}
              onClick={() => {
                sounds.playClick();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-2 text-xs font-black uppercase border-3 border-black transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-brutal-yellow text-black shadow-brutal -translate-y-0.5'
                  : 'bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 shadow-brutal-sm'
              }`}
            >
              <IconComp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{cat.title}</span>
              <span className="sm:hidden">{cat.shortTitle || cat.title.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Service Categories & Pricing Cards */}
      <div className="space-y-16">
        {filteredCategories.map(category => {
          const IconComp = ICON_MAP[category.icon] || Sparkles;

          return (
            <div key={category.id}>
              {/* Category Header */}
              <div className="mb-6 pb-3 border-b-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-black text-brutal-yellow border-2 border-black shadow-brutal-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black font-sans uppercase tracking-tight text-black dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-gray-600 dark:text-gray-400 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Dedicated Page Link */}
                <a
                  href={`#/pricing/${category.slug}`}
                  onClick={() => sounds.playClick()}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-brutal-yellow hover:bg-brutal-yellow hover:text-black border-2 border-black text-xs font-mono font-black uppercase shadow-brutal-sm transition-colors self-start sm:self-auto shrink-0"
                >
                  <span>View Full Package Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Tier Cards Grid */}
              <div className={`grid gap-6 items-stretch ${
                category.tiers.length === 2
                  ? 'grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {category.tiers.map((tier, tIdx) => {
                  const priceDisplay = formatPrice(tier.priceMAD, currency, pricing.currencyRates, pricing.currencySymbols);
                  const isHighlighted = tier.highlighted;

                  return (
                    <Card
                      key={tIdx}
                      hoverEffect={true}
                      header={
                        <div className="flex items-center justify-between w-full font-mono text-xs">
                          <span className="font-black text-black truncate">{tier.name}</span>
                          {isHighlighted && (
                            <Badge variant="yellow" size="sm" className="text-[9px] shrink-0">
                              <Star className="w-3 h-3" /> RECOMMENDED
                            </Badge>
                          )}
                          {tier.isCustomQuote && (
                            <Badge variant="black" size="sm" className="text-[9px] shrink-0">
                              CUSTOM
                            </Badge>
                          )}
                        </div>
                      }
                      headerBg={isHighlighted
                        ? 'bg-brutal-yellow text-black'
                        : 'bg-gray-100 dark:bg-gray-800 text-black dark:text-white'
                      }
                      shadow={isHighlighted ? 'shadow-brutal-xl' : 'shadow-brutal-md'}
                      className={`group flex flex-col h-full ${
                        isHighlighted ? 'border-4 border-black ring-2 ring-yellow-400' : ''
                      }`}
                    >
                      {/* Price Display */}
                      <div className="mb-4 pb-3 border-b-2 border-black/20">
                        {priceDisplay ? (
                          <div className="flex items-baseline gap-1.5">
                            <span className="text-3xl sm:text-4xl font-black font-sans text-black dark:text-white tracking-tight">
                              {priceDisplay}
                            </span>
                            <span className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400 uppercase">
                              {tier.period}
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-2xl sm:text-3xl font-black font-sans text-black dark:text-white tracking-tight">
                              Custom Quote
                            </span>
                            <MessageSquare className="w-5 h-5 text-brutal-yellow" />
                          </div>
                        )}
                      </div>

                      {/* Features Checklist */}
                      <div className="space-y-2 mb-5 flex-1">
                        {tier.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs font-mono font-medium text-black dark:text-gray-200">
                            <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isHighlighted ? 'text-green-600' : 'text-green-500'
                            }`} />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto">
                        {tier.isCustomQuote ? (
                          <Button
                            as="a"
                            href={PORTFOLIO.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant={isHighlighted ? 'yellow' : 'black'}
                            size="md"
                            className="w-full text-xs"
                          >
                            <WhatsApp className="w-4 h-4" />
                            <span>{tier.cta}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Button>
                        ) : (
                          <Button
                            as="a"
                            href="#/contact"
                            variant={isHighlighted ? 'yellow' : 'white'}
                            size="md"
                            className="w-full text-xs"
                          >
                            <span>{tier.cta}</span>
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-16 p-6 sm:p-8 bg-black text-white border-4 border-black shadow-brutal font-mono">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-sm font-black uppercase text-brutal-yellow flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Need a custom solution or have questions?</span>
            </div>
            <p className="text-xs text-gray-300 font-bold max-w-lg">
              Every project is unique. Reach out via WhatsApp or email for a personalized quote tailored to your specific requirements, timeline, and budget.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-gray-500 font-bold uppercase pt-1">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span>Usually responds within 2 hours</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              as="a"
              href={PORTFOLIO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              variant="lime"
              size="md"
            >
              <WhatsApp className="w-4 h-4" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
            <Button
              as="a"
              href="#/contact"
              variant="yellow"
              size="md"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 text-center">
        <p className="text-[10px] font-mono font-bold text-gray-500 dark:text-gray-500 uppercase">
          All prices are starting points and calibrated against competitive 2026 freelance rates. Prices shown in {currency} ({pricing.currencySymbols[currency]}).
        </p>
      </div>
    </section>
  );
}
