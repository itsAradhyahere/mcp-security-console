import * as L from 'lucide-react'
export default function Icon({ name, size = 22, stroke = 1.6, ...rest }) {
  const C = L[name] || L.CircleHelp
  return <C size={size} strokeWidth={stroke} {...rest} />
}
