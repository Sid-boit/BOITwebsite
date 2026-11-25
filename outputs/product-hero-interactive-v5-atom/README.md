# BOIT Product Atom — version 5

Open `boit-product-atom.html` for the self-contained interactive preview. All twelve thumbnails are embedded, so the file can be shared on its own. `index.html`, `universe.css`, `light-theme.css`, `atom.css`, `universe.js` and `assets/` are the separated developer files.

## Requested visual direction

A shaded cobalt/purple sphere replaces the brain and acts as the central AI nucleus. Thin teal and lavender orbital lines evoke the original Product hero. All twelve cards from the Product dropdown revolve around it. Every card has the same white background, border, shadow, text colour and selected state.

Each card includes a small cropped thumbnail from its matching, previously generated Product submenu hero. No new artwork was generated. Selecting a card updates the description, focus areas and product-page link in the left-hand detail area. Selecting the nucleus restores the shared AI foundation description. Hover/focus pause, manual pause and reduced-motion support remain available.

On small screens the orbit shows thumbnail cards with numbered badges; full names remain accessible and readable in the selected details and directory.

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

Retain the host site's header. Include universe.css, then light-theme.css, then atom.css, and load universe.js after #boit-universe. Copy assets/ with the files. Replace the external route base with the host origin or relative routes as needed. The self-contained HTML can also be opened or shared directly.

The nucleus and all motion are code-driven. Thumbnails reuse the twelve existing illustrations in outputs/submenu-hero-images/ with the matching numeric prefixes 01–12. WebP thumbnails are 192 × 192 pixels, centre-cropped.

Earlier versions are preserved. The remote website has not been changed.

## Centre and orbital motion correction

The nucleus now uses an explicit -50%/-50% transform and shares the exact (450, 300) centre with every orbit. Its independent floating motion is removed. Four cards travel on each of three projected elliptical planes: 0 degrees and +/-52 degrees. Their speeds and directions vary. Position is calculated from the same ellipse parameters as the visible tracks. Depth controls card scale, opacity and occlusion behind the nucleus; selected and keyboard-focused cards remain in front. Geometry and all twelve product selections/links were checked.
