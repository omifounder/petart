# Pet Art Academy

A colourful pet-art studio with nine expressive cartoon artists across three teams. Choose a pet to chat about their art, inspiration, and teammates. Each pet has scripted personality-driven dialogue; Miso, Orbit, and Pippin also use OpenAI responses when a server-side API key is configured.

Character image assets stay in the project root beside `server.mjs` (there is no `package.json` in this project). Name each PNG after its character, such as `miso.png` or `luna.png`. The shared character renderer loads matching assets and keeps the current emoji illustration as a fallback when an image is missing. Ziggy currently uses that fallback until `ziggy.png` is added.

Three featured artists—Miso, Orbit, and Luna—can create original theme artwork when the image API is configured. Character portraits are stationary, and each artist's sketch remains visible as a fallback. Successful images are cached in browser memory for the current session.

## Voice interaction

Use the purple microphone in a pet chat to record a question, then click it again to send. The browser records audio and sends it to the local server, which transcribes completed recordings with `gpt-transcribe`; the API key never reaches the browser. The response is spoken using the browser's available system voice with a separate pace and character direction for each pet. Mute, Stop, and Replay are available below the chat input. If the microphone, transcription API, or network is unavailable, typing still works.

Mention another artist in a question, for example “What does Luna think of this painting?”, to hear a sequential three-turn exchange: your chosen pet, Luna, then your chosen pet's reaction. The current roster no longer includes Charlie.

## Multi-agent art competition

The competition board below the teams runs a complete Creative Arena → Judging Arena → Winner Celebration demo. It uses deterministic, personality-specific collaboration beats for all nine pets so the demo completes reliably from one click. Each team begins with a blank digital canvas; judging waits until every team artwork request has succeeded or reached its blank-canvas fallback. When image generation is configured, the board requests one original image per team.

The Winner Celebration includes a local 13-second human crowd cheer/applause
track. Its CC0 source and provenance are documented in [AUDIO_LICENSES.md](AUDIO_LICENSES.md).

## Run locally

Requires Node.js 20 or newer. No package install is needed.

```sh
node server.mjs
```

Open [http://localhost:8000](http://localhost:8000). Stop the server with `Ctrl+C`.

## Optional AI replies

The app works without an API key; all pets use the scripted dialogue. To enable AI replies for Miso, Orbit, and Pippin:

1. Copy `.env.example` to `.env`.
2. Set `OPENAI_API_KEY` in `.env`.
3. Start the server with `node server.mjs`.

`OPENAI_MODEL` defaults to `gpt-6-astra`; `OPENAI_IMAGE_MODEL` defaults to `gpt-image-2.5-flare`; and `OPENAI_TRANSCRIBE_MODEL` defaults to `gpt-transcribe`. Each can be changed in `.env`. The browser calls the local server, which keeps the key private and forwards pet chat, image prompts, and recordings to OpenAI. Image creation runs in the background, one selected pet at a time, and never blocks other academy interactions. If the key is missing, invalid, or an API is unavailable, chat and placeholder artwork remain usable. Never commit `.env` or expose its key in client-side code.

## Project structure

- `index.html` — academy scene and character dialog shell
- `styles.css` — responsive academy, playful character illustrations, chat, and lightweight animations
- `app.js` — mock pet and team data, scripted personalities, chat UI, art loading, and session image cache
- `server.mjs` — dependency-free static server and optional AI chat/image endpoints
- Character PNGs — root-level illustrations loaded by matching character filename
- `.env.example` — optional server-side AI configuration
- `favicon.svg` — academy mark
