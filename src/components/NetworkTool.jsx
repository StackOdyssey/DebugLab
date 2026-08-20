import React, { useState, useMemo } from 'react';
import { Network, Calculator, Terminal, CheckCircle, RefreshCw, Cpu, Layers, Sparkles, Copy } from 'lucide-react';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
import { calculateSubnet } from '../utils/ipCalculator';
import { sounds } from '../utils/soundEffects';

const PRESETS = [
  { label: 'LAN Subnet (/24)', ip: '192.168.1.50', cidr: '24' },
  { label: 'Branch Office (/28)', ip: '172.16.10.35', cidr: '28' },
  { label: 'Cisco WAN Link (/30)', ip: '10.254.0.1', cidr: '30' },
  { label: 'Enterprise Campus (/16)', ip: '10.100.20.1', cidr: '16' },
  { label: 'Web Server Block (/26)', ip: '198.51.100.75', cidr: '26' },
];

export function NetworkTool({ onShowToast }) {
  const [ipInput, setIpInput] = useState('192.168.1.100');
  const [cidrInput, setCidrInput] = useState('24');

  const subnetResult = useMemo(() => {
    return calculateSubnet(ipInput, cidrInput);
  }, [ipInput, cidrInput]);

  const applyPreset = (preset) => {
    sounds.playClick();
    setIpInput(preset.ip);
    setCidrInput(preset.cidr);
  };

  const copyToClipboard = (text, label) => {
    sounds.playSuccess();
    navigator.clipboard.writeText(text);
    if (onShowToast) {
      onShowToast({
        title: 'Copied!',
        message: `${label} (${text}) copied to clipboard.`,
        type: 'success'
      });
    }
  };

  return (
    <section id="cisco-tool" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b-4 border-black gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-brutal-yellow text-black px-2.5 py-1 border-2 border-black font-mono text-xs font-black uppercase mb-2 shadow-brutal-sm">
            <Network className="w-4 h-4" />
            <span>Cisco Systems Switching & IP Certification Feature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-sans tracking-tight text-black dark:text-white">
            CISCO IP <span className="text-brutal-yellow">&</span> SUBNET INSPECTOR
          </h2>
        </div>
        <p className="text-sm font-mono font-bold text-gray-700 dark:text-gray-300 max-w-md">
          A live interactive network calculator honoring Mohammed's Cisco certification. Test IPv4 addresses, calculate CIDR blocks, and analyze bitwise network boundaries in real-time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          <Card
            header={
              <div className="flex items-center justify-between w-full">
                <span className="flex items-center gap-2">
                  <Calculator className="w-4 h-4" /> Network Parameters
                </span>
                <span className="bg-black text-white text-[10px] px-1.5 py-0.5 border border-white">
                  IPV4 / CIDR
                </span>
              </div>
            }
            headerBg="bg-brutal-yellow text-black"
            shadow="shadow-brutal-lg"
          >
            {/* Presets */}
            <div className="mb-4">
              <label className="block text-[11px] font-mono font-black uppercase text-gray-600 dark:text-gray-400 mb-1.5">
                Quick Cisco Network Presets:
              </label>
              <div className="flex flex-wrap gap-1.5">
                {PRESETS.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => applyPreset(p)}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-800 hover:bg-brutal-yellow hover:text-black border-2 border-black text-[11px] font-mono font-extrabold text-black dark:text-white transition-colors cursor-pointer shadow-brutal-sm active:translate-x-0.5 active:translate-y-0.5"
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-black uppercase text-black dark:text-white mb-1">
                  IPv4 Host Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={ipInput}
                    onChange={(e) => setIpInput(e.target.value)}
                    placeholder="e.g. 192.168.1.100"
                    className="w-full px-3 py-2.5 bg-gray-50 dark:bg-gray-900 border-3 border-black font-mono font-black text-base text-black dark:text-white focus:outline-none focus:bg-yellow-50 dark:focus:bg-gray-800 shadow-brutal-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-mono font-black uppercase text-black dark:text-white">
                    Subnet Mask / CIDR Prefix
                  </label>
                  <span className="text-xs font-mono font-black bg-black text-white dark:bg-white dark:text-black px-2 py-0.5">
                    /{cidrInput}
                  </span>
                </div>
                
                <input
                  type="range"
                  min="0"
                  max="32"
                  value={cidrInput}
                  onChange={(e) => {
                    sounds.playClick();
                    setCidrInput(e.target.value);
                  }}
                  className="w-full h-3 bg-gray-200 dark:bg-gray-700 border-2 border-black accent-brutal-yellow cursor-pointer"
                />

                <div className="flex justify-between text-[10px] font-mono font-bold text-gray-500 mt-1">
                  <span>/0 (Internet)</span>
                  <span>/16 (Class B)</span>
                  <span>/24 (Class C)</span>
                  <span>/30 (WAN)</span>
                  <span>/32 (Host)</span>
                </div>
              </div>
            </div>

            {/* Error handling */}
            {subnetResult.error && (
              <div className="mt-4 p-3 bg-black text-white font-mono text-xs font-black border-2 border-black shadow-brutal-sm">
                ⚠ {subnetResult.error}
              </div>
            )}

            <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-between text-xs font-mono">
              <span className="text-gray-600 dark:text-gray-400 font-bold">Bitwise Engine:</span>
              <span className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white px-2 py-0.5 border border-black font-black">
                CISCO-STANDARDS-RFC1878
              </span>
            </div>
          </Card>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-7">
          {!subnetResult.error ? (
            <div className="space-y-4">
              {/* Primary Output Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
                {/* Network Address */}
                <div className="p-3.5 bg-brutal-yellow/30 dark:bg-amber-950/40 border-3 border-black shadow-brutal-sm relative group">
                  <div className="text-[10px] font-black uppercase text-gray-700 dark:text-gray-300">Network ID</div>
                  <div className="text-lg font-black text-black dark:text-white">{subnetResult.netAddress} {subnetResult.cidr}</div>
                  <button
                    onClick={() => copyToClipboard(subnetResult.netAddress, 'Network Address')}
                    className="absolute top-2 right-2 p-1 bg-white dark:bg-gray-800 border border-black hover:bg-black hover:text-white transition-colors"
                    title="Copy"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subnet Mask */}
                <div className="p-3.5 bg-gray-100 dark:bg-gray-800 border-3 border-black shadow-brutal-sm relative group">
                  <div className="text-[10px] font-black uppercase text-gray-700 dark:text-gray-300">Subnet Mask</div>
                  <div className="text-lg font-black text-black dark:text-white">{subnetResult.subnetMask}</div>
                  <button
                    onClick={() => copyToClipboard(subnetResult.subnetMask, 'Subnet Mask')}
                    className="absolute top-2 right-2 p-1 bg-white dark:bg-gray-800 border border-black hover:bg-black hover:text-white transition-colors"
                    title="Copy"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Usable Range */}
                <div className="p-3.5 bg-white dark:bg-gray-800 border-3 border-black shadow-brutal-sm sm:col-span-2">
                  <div className="text-[10px] font-black uppercase text-gray-700 dark:text-gray-300">Usable Host Range (First — Last)</div>
                  <div className="text-base sm:text-lg font-black text-black dark:text-white tracking-tight">
                    {subnetResult.firstHost} &rarr; {subnetResult.lastHost}
                  </div>
                </div>

                {/* Broadcast Address */}
                <div className="p-3.5 bg-gray-100 dark:bg-gray-800 border-3 border-black shadow-brutal-sm">
                  <div className="text-[10px] font-black uppercase text-gray-700 dark:text-gray-300">Broadcast Address</div>
                  <div className="text-base font-black text-black dark:text-white">{subnetResult.broadcast}</div>
                </div>

                {/* Usable Hosts Count */}
                <div className="p-3.5 bg-gray-100 dark:bg-gray-800 border-3 border-black shadow-brutal-sm">
                  <div className="text-[10px] font-black uppercase text-gray-700 dark:text-gray-300">Usable Hosts Count</div>
                  <div className="text-base font-black text-black dark:text-white">{subnetResult.usableHosts} / {subnetResult.totalHosts}</div>
                </div>
              </div>

              {/* Classification Info Bar */}
              <div className="p-4 bg-white dark:bg-brutal-darkCard border-3 border-black shadow-brutal flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-500 dark:text-gray-400">Class:</span>
                  <Badge variant="yellow" size="sm">{subnetResult.ipClass}</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-500 dark:text-gray-400">Scope:</span>
                  <Badge variant="white" size="sm">
                    {subnetResult.scope}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-500 dark:text-gray-400">Wildcard Mask:</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 border border-black font-black text-black dark:text-white">
                    {subnetResult.wildcardMask}
                  </span>
                </div>
              </div>

              {/* Binary Octets Breakdown Card */}
              <div className="p-4 bg-black text-white border-3 border-black shadow-brutal-md font-mono text-xs space-y-2">
                <div className="flex items-center justify-between text-brutal-yellow font-black border-b border-gray-800 pb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-4 h-4" /> 32-BIT BINARY OCTET BREAKDOWN
                  </span>
                  <span className="text-[10px] text-gray-400">IEEE 802.3 / TCP-IP</span>
                </div>

                <div className="space-y-1.5 pt-1 text-[11px]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-gray-400 font-bold">IP Binary:</span>
                    <span className="text-white font-black tracking-wider">{subnetResult.binaryIp}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-gray-400 font-bold">Mask Binary:</span>
                    <span className="text-gray-300 font-black tracking-wider">{subnetResult.binaryMask}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="text-gray-400 font-bold">Net Binary:</span>
                    <span className="text-brutal-yellow font-black tracking-wider">{subnetResult.binaryNet}</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-12 bg-gray-100 border-3 border-black text-center font-mono font-bold text-gray-600">
              Please provide a valid IPv4 address in the left panel to calculate subnet boundaries.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
