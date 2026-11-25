# BOIT Product Universe — fourth direction, light palette

Open `boit-product-universe.html` for the self-contained interactive preview. `index.html`, `universe.css`, `light-theme.css` and `universe.js` are the separated integration files.

## Hero content

**Every product. Connected by intelligence.**

A connected product portfolio for Banking and Insurance. Bringing AI to customer acquisition, underwriting, claims, servicing, distribution, risk, and compliance.

## Interaction

All twelve items from the live Product dropdown revolve together around an illustrated, animated neural brain. Every offering has a connection back to the brain. Product nodes stay upright and readable as they orbit. Hovering or focusing the scene pauses the motion. Selecting a product highlights its connection, shows its description and focus areas, and provides a link to its actual page. The brain explains the shared LLM, specialist agents and orchestration. A separate pause button and reduced-motion preferences are supported.

The complete directory remains available below the hero. On small screens, the orbit uses numbered nodes with complete accessible labels; the selected title and full directory names provide readable mapping.

## Source mapping

Reviewed the Product dropdown and all twelve associated pages on 19 October 2026 at https://ericaceous-christiana-proscribable.ngrok-free.dev.

| # | Product-menu entry | Page |
|---|---|---|
| 01 | Life, Annuity & Medical Insurance | /platform/insurance/life-annuity-medical |
| 02 | Property & Casualty Insurance | /platform/insurance/property-casualty |
| 03 | Banking & Financial Services | /platform/banking/financial-services |
| 04 | Intelligent Process Automation | /product/solutions/intelligent-process-automation |
| 05 | Smart Case Management | /product/solutions/smart-case-management |
| 06 | Insurance Core Modernization | /product/solutions/insurance-core-modernization |
| 07 | Medical Underwriting | /product/solutions/medical-underwriting |
| 08 | Motor Claims Management | /product/solutions/motor-claims-management |
| 09 | Fraud Detection & Management | /product/solutions/fraud-detection |
| 10 | e-KYC & Customer Onboarding | /product/solutions/ekyc-onboarding |
| 11 | ePOS & Agency Management | /product/solutions/epos-agency |
| 12 | Digital AML & Compliance | /product/solutions/digital-aml |

The first three entries are classified as Business Verticals by the source menu; the remaining nine are Business Solutions. Their product detail summaries are derived from the respective page content.

## Integration

Use the `#boit-universe` main content with universe.css followed by light-theme.css and the universe.js script, retaining the host website's existing header. Scope general CSS rules to the host component. Change the route base in universe.js to the host origin or use relative routes. Optional Google Fonts have local fallbacks. The artwork, brain, orbit, connections and product controls are code-driven; no raster hero image is used.

The root exposes `boitUniverse.select(id)`, `boitUniverse.offerings`, and `boitUniverse.destroy()` to support host integration. `destroy()` stops the animation and disconnects the resize observer.

This is a local working copy. Earlier versions are preserved. The remote website has not been modified.

## Light palette

The rotating product section uses white, pale lavender and soft teal backgrounds; white glass product cards; darker readable labels; and restrained cobalt, teal and purple connection accents. The AI brain remains the focal point. All twelve offerings and interactions from version 3 are preserved.
