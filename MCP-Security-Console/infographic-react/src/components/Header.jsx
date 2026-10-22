import { ShieldCheck } from 'lucide-react'
export default function Header() {
  return (
    <header className="hdr">
      <ShieldCheck size={30} strokeWidth={1.5} />
      <div>
        <h1>AI AGENT SECURITY</h1>
        <p>Ten risks across the Model Context Protocol, and the layered defenses that contain them</p>
      </div>
    </header>
  )
}
