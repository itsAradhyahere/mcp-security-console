// Stage geometry (px). 4 columns x 4 rows; the centre 2x2 block holds the agent diagram.
export const CARD = { w: 320, h: 170, gap: 40 }
export const STAGE = { w: 4 * CARD.w + 3 * CARD.gap, h: 4 * CARD.h + 3 * CARD.gap }
export const cardPos = (col, row) => ({
  x: col * (CARD.w + CARD.gap),
  y: row * (CARD.h + CARD.gap),
})
export const CENTER = { x: STAGE.w / 2, y: 410 }

// `verify: true` marks items that look duplicated / garbled in the reference image.
export const risks = [
  { id: 'r1', n: 1, col: 0, row: 0, icon: 'KeyRound', link: 'llm',
    title: 'MCP01 – Token Mismanagement & Secret Exposure',
    text: 'Secrets accidentally accessible through prompts or logs' },
  { id: 'r2', n: 2, col: 1, row: 0, icon: 'ShieldAlert', link: 'llms',
    title: 'MCP02 – Privilege Escalation via Scope Creep',
    text: 'Agent gradually gaining excessive permissions' },
  { id: 'r3', n: 3, col: 2, row: 0, icon: 'Wrench', link: 'tools',
    title: 'MCP03 – Tool Poisoning',
    text: 'Compromised tools feeding incorrect information to the AI' },
  { id: 'r4', n: 4, col: 3, row: 0, icon: 'Package', link: 'apis',
    title: 'MCP04 – Software Supply Chain Attacks & Dependency Tampering',
    text: 'Malicious libraries propagating risk through the ecosystem' },
  { id: 'r10a', n: 10, col: 0, row: 1, icon: 'Layers', link: 'llms',
    title: 'MCP10 – Context Injection & Over-Sharing',
    text: 'Prompts, confidential information between users or agents' },
  { id: 'r9', n: 9, col: 0, row: 2, icon: 'ServerCrash', link: 'toolsL',
    title: 'MCP09 – Shadow MCP Servers',
    text: 'Rogue deployments bypass organizational boundaries' },
  { id: 'r5', n: 5, col: 3, row: 1, icon: 'TerminalSquare', link: 'ext',
    title: 'MCP05 – Command Injection & Execution',
    text: 'Dangerous input leading to unintended execution' },
  { id: 'r6', n: 6, col: 3, row: 2, icon: 'Split', link: 'cloud',
    title: 'MCP06 – Intent Flow Subversion',
    text: 'Competing instruction paths hijacking the agent behavior' },
  { id: 'r8', n: 8, col: 0, row: 3, icon: 'FileX', link: 'db',
    title: 'MCP08 – Lack of Audit and Telemetry',
    text: 'Inability to log, leading to inability to investigate incidents' },
  { id: 'r7', n: 7, col: 1, row: 3, icon: 'UserX', link: 'browser',
    title: 'MCP07 – Insufficient Authentication & Authorization',
    text: 'Unauthorized users reach protected resources' },
  { id: 'r4b', n: 4, col: 2, row: 3, icon: 'PackageX', link: 'mcp', verify: true,
    title: 'MCP04 – Software Authentication',
    text: 'Malicious libraries propagate risk through the ecosystem' },
  { id: 'r10b', n: 10, col: 3, row: 3, icon: 'Layers', link: 'ide', verify: true,
    title: 'MCP10 – Context Injection & Over-Sharing',
    text: 'Prompts, confidential information between users or agents' },
]

export const nodes = [
  { id: 'llm', label: 'LLM', icon: 'BrainCircuit', x: 610, y: 285 },
  { id: 'tools', label: 'Tools', icon: 'Wrench', x: 790, y: 285 },
  { id: 'llms', label: 'LLMs', icon: 'Boxes', x: 505, y: 345 },
  { id: 'apis', label: 'APIs', icon: 'Cog', x: 895, y: 345 },
  { id: 'toolsL', label: 'Tools', icon: 'SquareTerminal', x: 485, y: 435 },
  { id: 'ext', label: 'External Services', icon: 'Globe', x: 915, y: 435 },
  { id: 'db', label: 'Databases', icon: 'Database', x: 520, y: 520 },
  { id: 'cloud', label: 'Cloud Services', icon: 'Cloud', x: 880, y: 520 },
  { id: 'browser', label: 'Browser', icon: 'Compass', x: 595, y: 565 },
  { id: 'mcp', label: 'MCP Server', icon: 'Server', x: 700, y: 572, big: true },
  { id: 'ide', label: 'IDEs', icon: 'AppWindow', x: 805, y: 565 },
]

export const workflow = [
  { label: 'Least Privilege', icon: 'KeyRound' },
  { label: 'Secret Management', icon: 'Lock' },
  { label: 'Strong Authentication', icon: 'Fingerprint' },
  { label: 'Tool Validation', icon: 'ShieldCheck' },
  { label: 'Dependency Scanning', icon: 'ScanSearch' },
  { label: 'Input Validation', icon: 'FileCheck' },
  { label: 'Context Isolation', icon: 'Layers' },
  { label: 'Immutable Audit Logs', icon: 'ScrollText' },
  { label: 'Continuous Monitoring', icon: 'Activity' },
  { label: 'Governance & Approval', icon: 'Users' },
]

export const flowCaption =
  'Every MCP interaction flows through User → Agent → MCP Server → Tools → External Systems → Response – applied at every stage'
