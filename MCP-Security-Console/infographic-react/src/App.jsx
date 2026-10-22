import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import RiskCard from './components/RiskCard.jsx'
import ConnectorLines from './components/ConnectorLines.jsx'
import ConnectedNodes from './components/ConnectedNodes.jsx'
import AgentCore from './components/AgentCore.jsx'
import DefenseWorkflow from './components/DefenseWorkflow.jsx'
import { risks, STAGE } from './data/securityRisks.js'

const PAGE_W = STAGE.w + 80

export default function App() {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const fit = () => setScale(Math.min(1, window.innerWidth / PAGE_W))
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <div className="page" style={{ width: PAGE_W, transform: `scale(${scale})` }}>
      <Header />
      <div className="stage" style={{ width: STAGE.w, height: STAGE.h }}>
        <ConnectorLines />
        <AgentCore />
        <ConnectedNodes />
        {risks.map((r, i) => <RiskCard key={r.id} risk={r} index={i} />)}
      </div>
      <DefenseWorkflow />
    </div>
  )
}
