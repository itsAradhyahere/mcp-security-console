import Icon from './Icon.jsx'
import { nodes } from '../data/securityRisks.js'

export default function ConnectedNodes() {
  return nodes.map((n) => (
    <div key={n.id} className={`node${n.big ? ' big' : ''}`} style={{ left: n.x, top: n.y }}>
      <span className="node-ico"><Icon name={n.icon} size={n.big ? 30 : 22} stroke={1.5} /></span>
      <span className="node-lbl">{n.label}</span>
    </div>
  ))
}
