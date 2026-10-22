import { Fragment } from 'react'
import { ChevronRight } from 'lucide-react'
import Icon from './Icon.jsx'
import { workflow, flowCaption } from '../data/securityRisks.js'

export default function DefenseWorkflow() {
  return (
    <section className="defense">
      <h2>Defense-in-Depth</h2>
      <div className="steps">
        {workflow.map((s, i) => (
          <Fragment key={s.label}>
            <div className="step">
              <span className="step-ico"><Icon name={s.icon} size={26} stroke={1.5} /></span>
              <span>{s.label}</span>
            </div>
            {i < workflow.length - 1 && <ChevronRight className="arrow" size={18} />}
          </Fragment>
        ))}
      </div>
      <p className="caption">{flowCaption}</p>
    </section>
  )
}
