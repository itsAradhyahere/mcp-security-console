import { CARD, STAGE, cardPos, nodes, risks } from '../data/securityRisks.js'

// Anchor on the card edge that faces the centre of the stage.
function anchor(r) {
  const { x, y } = cardPos(r.col, r.row)
  if (r.row === 0) return [x + CARD.w / 2, y + CARD.h]
  if (r.row === 3) return [x + CARD.w / 2, y]
  return r.col === 0 ? [x + CARD.w, y + CARD.h / 2] : [x, y + CARD.h / 2]
}

export default function ConnectorLines() {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))
  return (
    <svg className="lines" width={STAGE.w} height={STAGE.h} viewBox={`0 0 ${STAGE.w} ${STAGE.h}`}>
      <defs>
        <linearGradient id="ln" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2={STAGE.w} y2="0">
          <stop offset="0" stopColor="#9db8e6" />
          <stop offset=".5" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#9db8e6" />
        </linearGradient>
      </defs>
      {risks.map((r) => {
        const [ax, ay] = anchor(r)
        const n = byId[r.link]
        return (
          <g key={r.id}>
            <line x1={ax} y1={ay} x2={n.x} y2={n.y} stroke="url(#ln)" strokeWidth="1.2" strokeOpacity=".8" />
            <circle cx={ax} cy={ay} r="3.5" fill="#fff" stroke="#3b82f6" strokeWidth="1.5" />
          </g>
        )
      })}
    </svg>
  )
}
