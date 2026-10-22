# MCP Security Console

A multi-page prototype built from the "AI Agent Security" reference image (docs/reference-image.jpeg).

## Run
Option A: double-click `index.html` (Chrome or Edge). Internet needed for fonts and icons.
Option B: `npm start` (serves the folder locally; needs Node.js).

## Pages (hash routes)
- `#dashboard`  posture score, KPIs, priority risks
- `#risks`      searchable, filterable risk register
- `#risk-mcp01` ... `#risk-mcp10`  risk detail
- `#architecture`  interactive AI Agent diagram with attack animation
- `#defense`    defense-in-depth switches that drive the posture score
Extras: Ctrl/Cmd+K quick jump, simulated live threat feed, light/dark theme.

## Structure
- `index.html`  page shell
- `css/styles.css`  theme variables and components
- `js/data.js`  risks, systems and defenses (edit content here)
- `js/app.js`  state, router, pages, simulation
- `docs/`  reference image
- `infographic-standalone.html`, `infographic-react/`  the original infographic recreation (React: `npm install`, `npm run dev`)

## Notes
Severity ratings, scenarios, mitigations and risk-to-defense pairings are illustrative; replace them with your organisation's real values.
The threat feed is simulated.
