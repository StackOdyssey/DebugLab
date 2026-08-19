import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Sparkles, Send, CornerDownLeft, RefreshCw } from 'lucide-react';
import { PORTFOLIO } from '../data/portfolioData';
import { sounds } from '../utils/soundEffects';

const ASCII_BANNER = `
  __  __  ___  _   _    _    __  __ __  __ _____ ____  
 |  \\/  |/ _ \\| | | |  / \\  |  \\/  |  \\/  | ____|  _ \\ 
 | |\\/| | | | | |_| | / _ \\ | |\\/| | |\\/| |  _| | | | |
 | |  | | |_| |  _  |/ ___ \\| |  | | |  | | |___| |_| |
 |_|  |_|\\___/|_| |_/_/   \\_\\_|  |_|_|  |_|_____|____/ 
`;

export function TerminalModal({ isOpen, onClose, onShowToast }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Mohammed (StackOdyssey) Terminal OS v2.6.0 [ISTA / ALX / CISCO Edition]' },
    { type: 'system', text: 'Type "help" or click one of the quick commands below to explore.' },
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const executeCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    sounds.playClick();

    if (!trimmed) return;

    // Add to command history
    setCmdHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'user', text: `$ ${trimmed}` }];

    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (trimmed === 'matrix') {
      setIsMatrixMode((prev) => !prev);
      newHistory.push({
        type: 'output',
        text: '✦ MATRIX PROTOCOL TOGGLED. Welcome to the digital stream.'
      });
      setHistory(newHistory);
      setInput('');
      return;
    }

    if (trimmed === 'sudo') {
      newHistory.push({
        type: 'output',
        text: 'Permission denied: User "guest" is not in sudoers file. This incident will be reported to Mohammed.'
      });
      setHistory(newHistory);
      setInput('');
      return;
    }

    if (PORTFOLIO.terminalCommands[trimmed]) {
      newHistory.push({
        type: 'output',
        text: PORTFOLIO.terminalCommands[trimmed]
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: "${trimmed}". Type "help" to see available commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    sounds.playTerminalKey();

    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = Math.min(historyIndex + 1, cmdHistory.length - 1);
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const prevIdx = historyIndex - 1;
        setHistoryIndex(prevIdx);
        setInput(cmdHistory[prevIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const available = Object.keys(PORTFOLIO.terminalCommands).concat(['clear', 'matrix', 'sudo']);
      const match = available.find(c => c.startsWith(input.toLowerCase()));
      if (match) {
        setInput(match);
      }
    }
  };

  const quickCommands = ['help', 'about', 'certs', 'skills', 'projects', 'contact', 'matrix', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-xs"
        onClick={() => {
          sounds.playClick();
          onClose();
        }}
      />

      {/* Terminal Window Box */}
      <div 
        className={`relative z-10 w-full max-w-4xl h-[85vh] max-h-[700px] border-4 border-black shadow-brutal-xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-150 ${
          isMatrixMode ? 'bg-[#020D04] text-[#00FF66]' : 'bg-[#0F1117] text-[#E6EDF3]'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title Bar */}
        <div className="px-4 py-2.5 bg-black text-white border-b-3 border-black flex items-center justify-between font-mono font-black text-xs select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 border border-black inline-block cursor-pointer hover:opacity-80" onClick={onClose}></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-black inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500 border border-black inline-block"></span>
            <span className="ml-2 font-mono uppercase text-brutal-yellow">stackodyssey@debuglab:~ (Interactive Shell)</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-gray-400 hidden sm:inline">UTF-8 &bull; React v19</span>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-white/20 border border-white/20 text-white"
              aria-label="Close terminal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Screen Body */}
        <div 
          className="flex-1 p-4 overflow-y-auto font-mono text-xs sm:text-sm space-y-2 relative cursor-text select-text"
          onClick={() => inputRef.current?.focus()}
        >
          {/* Scanline CRT overlay */}
          <div className="absolute inset-0 scanline pointer-events-none opacity-40" />

          {/* ASCII Banner */}
          <pre className="text-[9px] sm:text-xs font-black text-brutal-yellow leading-tight select-none overflow-x-auto pb-2">
            {ASCII_BANNER}
          </pre>

          {/* Render History */}
          {history.map((item, idx) => (
            <div key={idx} className="leading-relaxed">
              {item.type === 'user' && (
                <div className="text-brutal-yellow font-black">{item.text}</div>
              )}
              {item.type === 'system' && (
                <div className="text-gray-400 font-bold">{item.text}</div>
              )}
              {item.type === 'output' && (
                <div className="text-gray-200 whitespace-pre-wrap pl-2 border-l-2 border-brutal-yellow/40 my-1 font-mono">
                  {item.text}
                </div>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 font-black pl-2 border-l-2 border-rose-500 my-1">
                  {item.text}
                </div>
              )}
            </div>
          ))}

          <div ref={terminalEndRef} />
        </div>

        {/* Command Line Input Bar */}
        <div className="p-3 bg-black border-t-3 border-gray-800 flex items-center gap-2 font-mono text-xs sm:text-sm">
          <span className="text-brutal-lime font-black shrink-0">guest@stackodyssey:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command ('help', 'projects', 'certs')..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono font-bold"
            autoFocus
          />
          <button
            onClick={() => executeCommand(input)}
            className="px-3 py-1 bg-brutal-yellow hover:bg-yellow-300 text-black font-mono font-black text-xs uppercase border border-black shadow-brutal-sm cursor-pointer"
          >
            Run
          </button>
        </div>

        {/* Quick Command Pills for Mobile / Easy Access */}
        <div className="px-3 py-2 bg-gray-900 border-t border-gray-800 flex flex-wrap items-center gap-1.5 font-mono text-[11px]">
          <span className="text-gray-400 font-black uppercase text-[10px] mr-1">Quick:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 bg-gray-800 hover:bg-brutal-yellow hover:text-black text-gray-200 border border-gray-700 font-bold transition-colors cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
