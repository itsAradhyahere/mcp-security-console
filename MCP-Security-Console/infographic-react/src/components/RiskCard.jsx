import { motion } from 'framer-motion'
import Icon from './Icon.jsx'
import { CARD, cardPos } from '../data/securityRisks.js'

export default function RiskCard({ risk, index }) {
  const { x, y } = cardPos(risk.col, risk.row)
  return (
    <motion.article
      className="card"
      style={{ left: x, top: y, width: CARD.w, height: CARD.h }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.05 * index, duration: 0.5 }}
    >
      <span className="badge">{risk.n}</span>
      <h3>{risk.title}</h3>
      <div className="card-body">
        <div className="card-icon"><Icon name={risk.icon} size={34} stroke={1.3} /></div>
        <p>{risk.text}</p>
      </div>
      {risk.verify && <span className="verify" title="Duplicate or garbled in the reference image">verify</span>}
    </motion.article>
  )
}
