# MIA homepage demo and live setup

## Ready now

- home.html is a local homepage concept with a Meet MIA hero button and a floating MIA launcher.
- The launcher opens a keyboard-accessible panel using the supplied Mila portrait as MIA’s visual reference.
- The original Mila introduction is available as a separately labeled recording. It has been converted to a smaller browser-friendly MP4.
- No microphone, image upload, API calls, or third-party avatar services are activated by this demo.
- The original website has not been changed or published.

## Still required for a live talking avatar

1. Avatar account and API access. D-ID is a candidate to pilot because its SDK supports photo-based presenters with WebRTC streaming. Test this portrait before committing to a plan. Photo presenters and Expressive avatars have different capabilities; the documented native microphone and fluent features are associated with Expressive avatars. Keeping this exact portrait while demanding full-duplex interruption needs a provider-specific feasibility test.
2. Voice and search API access. OpenAI Realtime can support speech conversations; a backend search tool can obtain current information. Keep provider API credentials on the server. Do not paste private API keys into public webpage code.
3. Approved BOIT knowledge. Confirm product names, planned versus available capabilities, company facts, FAQs, and what MIA should explain. Current Motor360, Medical360, and Life360 scope remains provisional.
4. Hosting for the webpage and session backend. Choose the production destination and spending limits before buying plans or publishing.
5. A real test conversation: user microphone input, generated response, caption, synchronized avatar video, turn timing, and session-end behavior. Test current-information questions separately because web lookup adds latency.

## Account starting points and documentation

- OpenAI: https://platform.openai.com/
- Voice conversation: https://developers.openai.com/api/docs/guides/realtime
- Current-information lookup: https://developers.openai.com/api/docs/guides/tools-web-search
- D-ID account: https://studio.d-id.com/
- D-ID photo versus expressive avatar capabilities: https://docs.d-id.com/reference/agents-sdk-overview

No provider account has been created, subscription purchased, or portrait uploaded to an avatar provider.

## Later: MIA inside CaseX

Await the CaseX URL and project access. The intended orchestrator flow is: spoken case request → identify and confirm the case → retrieve current case and transactions → open a details popup in CaseX → explain the returned information. Real data should come through the authenticated user’s authorized CaseX access, include retrieval timestamps, and require clarification for ambiguous matches. The first integration should retrieve and display information; transactional changes are a separate scope.

The shared widget accepts a CaseX context, but no CaseX integration or live record retrieval exists yet. Homepage work is the current priority.
