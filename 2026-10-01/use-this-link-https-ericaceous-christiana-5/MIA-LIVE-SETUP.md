MIA voice demo

Set OPENAI_API_KEY securely in your local environment; never put it in browser files or chat. Stop the existing static preview server, then run: python3 mia_server.py

Uses OpenAI Realtime via WebRTC and the marin built-in voice; not a clone of the sample voice. Portrait remains static. No live CaseX access or online search. Local-only server; add authentication, rate limits and access controls before deployment. End button and dialog close stop microphone tracks; sessions limited to 5 minutes. API billing/access required.
