import { motion } from 'framer-motion'
import { Check, Bot } from 'lucide-react'
import { CENTER } from '../data/securityRisks.js'

const SHIELD = 'M0 -104 C34 -82 70 -74 96 -72 C96 10 76 70 0 112 C-76 70 -96 10 -96 -72 C-70 -74 -34 -82 0 -104Z'

export default function AgentCore() {
  return (
    <div className="core" style={{ left: CENTER.x, top: CENTER.y }}>
      <svg width="440" height="440" viewBox="-220 -220 440 440">
        <defs>
          <radialGradient id="halo"><stop offset="0" stopColor="#60a5fa" stopOpacity=".38" /><stop offset="1" stopColor="#60a5fa" stopOpacity="0" /></radialGradient>
          <linearGradient id="sh" x1="0" y1="-1" x2="0" y2="1"><stop offset="0" stopColor="#ffffff" /><stop offset="1" stopColor="#cfe0ff" /></linearGradient>
          <linearGradient id="rim" x1="0" y1="-1" x2="0" y2="1"><stop offset="0" stopColor="#6aa2ff" /><stop offset="1" stopColor="#2459d6" /></linearGradient>
          <linearGradient id="top" x1="0" y1="-1" x2="0" y2="1"><stop offset="0" stopColor="#4f8dff" /><stop offset="1" stopColor="#1d4ed8" /></linearGradient>
        </defs>
        <circle r="215" fill="url(#halo)" />
        <motion.g animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 90, ease: 'linear' }}>
          <circle r="150" fill="none" stroke="#7aa2ee" strokeWidth="1" strokeDasharray="2 7" opacity=".7" />
          <circle r="188" fill="none" stroke="#a9c3f2" strokeWidth="1" strokeDasharray="30 12" opacity=".6" />
        </motion.g>
        <g transform="translate(0,-122) scale(.5)">
          <path d={SHIELD} fill="url(#top)" stroke="#bcd3ff" strokeWidth="5" />
        </g>
        <g transform="translate(0,6)">
          <path d={SHIELD} fill="url(#sh)" stroke="url(#rim)" strokeWidth="8" strokeLinejoin="round" />
          <path d={SHIELD} fill="none" stroke="#fff" strokeOpacity=".7" strokeWidth="2" transform="scale(.86)" />
        </g>
      </svg>
      <Check className="core-check" size={30} strokeWidth={3} />
      <motion.div className="core-badge" animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}>
        <Bot size={44} strokeWidth={1.3} />
        <strong>AI Agent</strong>
      </motion.div>
    </div>
  )
}
