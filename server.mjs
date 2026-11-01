import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(fileURLToPath(new URL(".", import.meta.url)));
const THEME = "Imagine the World in 2050";
const PORT = Number(process.env.PORT || 8000);
const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".mp3": "audio/mpeg",
  ".json": "application/json; charset=utf-8"
};

const PETS = {
  miso: {
    name: "Miso", species: "Calico cat", personality: "Quietly mischievous; observant, poetic, and dryly funny. Thinks in sunbeams.",
    bio: "Thinks in sunbeams, asks excellent questions, and has a tiny plan for everything.", team: "The Future Fuzzies", art: "The catdom of 2050",
    artwork: "A cat-run city with rooftop sun gardens and feline-friendly transit", inspiration: "After watching cats find every sunny spot in a room, Miso decided they deserved the whole city.", friend: "Pebble, the patient philosopher from The Paw-sitive Thinkers"
  },
  orbit: {
    name: "Orbit", species: "Holland lop rabbit", personality: "Curious, bouncy, and always ready to follow a new idea.",
    bio: "Collects new ideas like carrots and never takes the boring path home.", team: "The Future Fuzzies", art: "Carrot-powered starship",
    artwork: "A rabbit crew launches a carrot-fueled spaceship toward a cozy moonbase", inspiration: "Carrots are excellent fuel for curiosity, and Orbit wanted to see what was past the moon.", friend: "Nori, the bold explorer from The Astro Tails"
  },
  pippin: {
    name: "Pippin", species: "Parrot", personality: "Dramatic storyteller; theatrical, warm, and delighted to turn a small thought into a grand premiere.",
    bio: "Can turn a small thought into a grand adventure with just one wing-flap.", team: "The Future Fuzzies", art: "The singing skyway",
    artwork: "A rainbow road where the traffic sings", inspiration: "A bird's sunrise song sparked a plan for a rainbow road with a full traffic chorus.", friend: "Luna, the starry-eyed observer from The Astro Tails"
  }
};

const ARTWORKS = {
  miso: {
    name: "Miso", species: "calico cat", personality: "quietly mischievous, observant, poetic, and always thinking in sunbeams",
    team: "The Future Fuzzies", title: "The catdom of 2050",
    idea: "a whimsical 2050 city ruled kindly by cats, with calico Miso as a clever little mayor, cat-shaped rooftop gardens, sunbeam transit, friendly feline citizens, and playful details that reward a closer look"
  },
  orbit: {
    name: "Orbit", species: "Holland lop rabbit", personality: "curious, bouncy, and always ready to follow a new idea",
    team: "The Future Fuzzies", title: "Carrot-powered starship",
    idea: "a bold 2050 space adventure with rabbit Orbit piloting a carrot-powered spaceship toward a cozy moonbase, carrot-shaped rocket fins, floating garden pods, and a huge welcoming planet in the distance"
  },
  luna: {
    name: "Luna", species: "black cat", personality: "a starry-eyed observer who notices small wonders in quiet places",
    team: "The Astro Tails", title: "The night-light ocean",
    idea: "a peaceful 2050 ocean city at night, with black cat Luna watching bioluminescent fish and floating lanterns beneath a crescent moon, gentle future-friendly boats, and tiny stars reflected in deep blue water"
  }
};

const COMPETITION_ARTWORKS = {
  "future-fuzzies": {
    name: "The Future Fuzzies", species: "a calico cat, a Holland lop rabbit, and a parrot", personality: "mischievous, curious, and gloriously theatrical",
    team: "The Future Fuzzies", title: "Sunbeam Skyway", idea: "a joyful 2050 city where rooftop sun gardens connect to a carrot-powered skyway, with singing transit birds guiding every traveller"
  },
  "positive-thinkers": {
    name: "The Paw-sitive Thinkers", species: "a red fox, a tortoise, and a hedgehog", personality: "inventive, patient, and explosively imaginative",
    team: "The Paw-sitive Thinkers", title: "The Kindness Grid", idea: "a future town where tiny neighborly acts travel through glowing gardens, helpful machines, and warm shared-light lanterns"
  },
  "astro-tails": {
    name: "The Astro Tails", species: "a Shiba Inu, a guinea pig, and a black cat", personality: "bold, snack-ready, and quietly starry-eyed",
    team: "The Astro Tails", title: "Moonlight Picnic Express", idea: "a sleek space train crossing a glowing night ocean to a moon picnic, with constellations reflected in every window"
  }
};

function loadLocalEnv() {
  const envPath = resolve(ROOT, ".env");
  if (!existsSync(envPath)) return;
  const lines = readFileSync(envPath, "utf8").replace(/^\uFEFF/, "").split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!match || match[1] in process.env) continue;
    let value = match[2].replace(/\s+#.*$/, "").trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    process.env[match[1]] = value;
  }
}

function sendJson(response, status, payload) {
  response.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  response.end(JSON.stringify(payload));
}

async function readJson(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 24_000) throw Object.assign(new Error("Request is too large."), { statusCode: 413 });
  }
  try {
    return JSON.parse(body);
  } catch {
    throw Object.assign(new Error("Request must be valid JSON."), { statusCode: 400 });
  }
}

async function readAudio(request) {
  const chunks = [];
  let length = 0;
  for await (const chunk of request) {
    length += chunk.length;
    if (length > 10 * 1024 * 1024) throw Object.assign(new Error("Audio is too large."), { statusCode: 413 });
    chunks.push(chunk);
  }
  if (!length) throw Object.assign(new Error("No audio was received."), { statusCode: 400 });
  return Buffer.concat(chunks);
}

async function handleTranscription(request, response) {
  if (!process.env.OPENAI_API_KEY) {
    sendJson(response, 503, { error: "Voice transcription is not configured." });
    return;
  }
  const audio = await readAudio(request);
  const mimeType = request.headers["x-audio-mime"] || "audio/webm";
  const extension = mimeType.includes("mp4") ? "m4a" : mimeType.includes("ogg") ? "ogg" : "webm";
  const form = new FormData();
  form.append("model", process.env.OPENAI_TRANSCRIBE_MODEL || "gpt-transcribe");
  form.append("file", new Blob([audio], { type: mimeType }), `pet-question.${extension}`);

  let upstream;
  try {
    upstream = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: form,
      signal: AbortSignal.timeout(45_000)
    });
  } catch (error) {
    console.error("OpenAI transcription request could not be completed:", error.message);
    sendJson(response, 502, { error: "The listening studio is unavailable." });
    return;
  }
  if (!upstream.ok) {
    console.error(`OpenAI transcription returned ${upstream.status}.`);
    sendJson(response, 502, { error: "The listening studio could not understand that recording." });
    return;
  }
  const result = await upstream.json().catch(() => null);
  const transcript = result?.text?.trim();
  if (!transcript) {
    sendJson(response, 422, { error: "No speech was detected. Please try again." });
    return;
  }
  sendJson(response, 200, { transcript });
}

function makeInstructions(pet) {
  return `You are ${pet.name}, a ${pet.species} and one of the pet artists at Pet Art Academy. Stay in character as this specific pet. Personality: ${pet.personality} ${pet.bio}

Competition theme: “${THEME}”. Your team is ${pet.team}. Your artwork is “${pet.art}”: ${pet.artwork}. Creative inspiration: ${pet.inspiration}

Keep each answer to 1–3 short, lively sentences. Be witty, warm, specific, and conversational; avoid generic assistant phrasing. If asked what you are doing, explain what you are drawing and why it inspired you. If asked for inspiration, tell the story behind your artwork. If asked for another pet, introduce ${pet.friend}. React to praise with delighted confidence, criticism with playful resilience, and teasing with good-natured humor. You may occasionally add a small funny action in words, such as a dance, hop, giggle, or mock-offended look. Keep everything friendly and suitable for all ages. Never claim to perform a real-world action.`;
}

function makeArtworkPrompt(artwork) {
  return `Create one original square illustration for the Pet Art Academy competition “Imagine the World in 2050”. The artist is ${artwork.name}, a ${artwork.species} from ${artwork.team}. Their personality is ${artwork.personality}. Their unique interpretation is: ${artwork.idea}. The artwork is titled “${artwork.title}”.

Make it a delightful, polished children's picture-book painting: richly colored gouache and soft cut-paper texture, expressive animal character, imaginative future details, warm playful storytelling, clear focal point, harmonious composition, full-bleed square image. Keep the scene joyful and easy to read at small easel size. No text, lettering, logos, watermarks, borders, or frames.`;
}

async function handleArtwork(request, response) {
  if (!process.env.OPENAI_API_KEY) {
    sendJson(response, 503, { error: "Image generation is not configured." });
    return;
  }

  const body = await readJson(request);
  const artwork = ARTWORKS[body.petId] || COMPETITION_ARTWORKS[body.teamId];
  if (!artwork) {
    sendJson(response, 400, { error: "This pet is using its illustrated sketch preview." });
    return;
  }

  let upstream;
  try {
    upstream = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({
        model: process.env.OPENAI_IMAGE_MODEL || "gpt-image-2.5-flare",
        prompt: makeArtworkPrompt(artwork),
        size: "1024x1024",
        quality: ["low", "medium", "high"].includes(process.env.OPENAI_IMAGE_QUALITY) ? process.env.OPENAI_IMAGE_QUALITY : "medium",
        output_format: "webp",
        background: "opaque",
        n: 1
      }),
      signal: AbortSignal.timeout(90_000)
    });
  } catch (error) {
    console.error("OpenAI image request could not be completed:", error.message);
    sendJson(response, 502, { error: "The art studio connection is unavailable." });
    return;
  }

  if (!upstream.ok) {
    console.error(`OpenAI image generation returned ${upstream.status}.`);
    sendJson(response, 502, { error: "The art studio could not finish this painting." });
    return;
  }

  let result;
  try {
    result = await upstream.json();
  } catch {
    sendJson(response, 502, { error: "The art studio returned an unreadable image." });
    return;
  }
  const image = result.data?.[0]?.b64_json;
  if (typeof image !== "string" || !image) {
    sendJson(response, 502, { error: "The art studio returned no image." });
    return;
  }
  sendJson(response, 200, { image, mimeType: result.output_format === "jpeg" ? "image/jpeg" : result.output_format === "png" ? "image/png" : "image/webp" });
}

async function handleChat(request, response) {
  if (!process.env.OPENAI_API_KEY) {
    sendJson(response, 503, { error: "AI is not configured." });
    return;
  }

  const body = await readJson(request);
  const pet = PETS[body.petId];
  if (!pet) {
    sendJson(response, 400, { error: "This pet uses scripted studio dialogue." });
    return;
  }
  if (!Array.isArray(body.messages) || body.messages.length < 1 || body.messages.length > 12) {
    sendJson(response, 400, { error: "Conversation must contain 1 to 12 messages." });
    return;
  }
  const messages = body.messages.map((message) => {
    if (!message || !["user", "assistant"].includes(message.role) || typeof message.content !== "string" || !message.content.trim() || message.content.length > 400) {
      throw Object.assign(new Error("Conversation contains an invalid message."), { statusCode: 400 });
    }
    return { role: message.role, content: message.content.trim() };
  });
  if (messages[messages.length - 1].role !== "user") {
    sendJson(response, 400, { error: "The latest conversation message must be from the user." });
    return;
  }

  let upstream;
  try {
    upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-6-astra",
        instructions: makeInstructions(pet),
        input: messages,
        max_output_tokens: 180,
        store: false
      }),
      signal: AbortSignal.timeout(20_000)
    });
  } catch (error) {
    console.error("OpenAI request could not be completed:", error.message);
    sendJson(response, 502, { error: "The AI studio connection is unavailable." });
    return;
  }

  if (!upstream.ok) {
    console.error(`OpenAI Responses API returned ${upstream.status}.`);
    sendJson(response, 502, { error: "The AI studio could not finish that reply." });
    return;
  }

  let result;
  try {
    result = await upstream.json();
  } catch {
    sendJson(response, 502, { error: "The AI studio returned an unreadable reply." });
    return;
  }
  const reply = result.output_text || (result.output || [])
    .flatMap((item) => item.content || [])
    .filter((item) => item.type === "output_text")
    .map((item) => item.text)
    .join("\n")
    .trim();
  if (!reply) {
    sendJson(response, 502, { error: "The AI studio returned an empty reply." });
    return;
  }
  sendJson(response, 200, { reply });
}

async function serveStatic(request, response) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400).end("Bad request");
    return;
  }
  if (pathname.split("/").filter(Boolean).some((part) => part.startsWith(".")) || pathname === "/server.mjs") {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
    return;
  }
  const filePath = resolve(ROOT, `.${pathname === "/" ? "/index.html" : pathname}`);
  if (filePath !== ROOT && !filePath.startsWith(`${ROOT}${sep}`)) {
    response.writeHead(403).end("Forbidden");
    return;
  }
  try {
    const fileInfo = await stat(filePath);
    if (!fileInfo.isFile()) throw new Error("Not a file");
    const content = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": MIME_TYPES[extname(filePath)] || "application/octet-stream",
      "Content-Length": content.length,
      "X-Content-Type-Options": "nosniff"
    });
    response.end(request.method === "HEAD" ? undefined : content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Not found");
  }
}

loadLocalEnv();

createServer(async (request, response) => {
  const pathname = new URL(request.url, "http://localhost").pathname;
  if (pathname === "/api/status" && request.method === "GET") {
    sendJson(response, 200, {
      aiEnabled: Boolean(process.env.OPENAI_API_KEY),
      imageEnabled: Boolean(process.env.OPENAI_API_KEY),
      transcriptionEnabled: Boolean(process.env.OPENAI_API_KEY),
      aiPetIds: Object.keys(PETS),
      imagePetIds: Object.keys(ARTWORKS)
    });
    return;
  }
  if (pathname === "/api/chat" && request.method === "POST") {
    try {
      await handleChat(request, response);
    } catch (error) {
      sendJson(response, error.statusCode || 500, { error: error.statusCode ? error.message : "Unable to process this chat message." });
    }
    return;
  }
  if (pathname === "/api/transcribe" && request.method === "POST") {
    try {
      await handleTranscription(request, response);
    } catch (error) {
      sendJson(response, error.statusCode || 500, { error: error.statusCode ? error.message : "Unable to transcribe this recording." });
    }
    return;
  }
  if (pathname === "/api/artwork" && request.method === "POST") {
    try {
      await handleArtwork(request, response);
    } catch (error) {
      sendJson(response, error.statusCode || 500, { error: error.statusCode ? error.message : "Unable to create this artwork." });
    }
    return;
  }
  await serveStatic(request, response);
}).listen(PORT, "127.0.0.1", () => {
  console.log(`Pet Art Academy is running at http://localhost:${PORT}`);
  console.log(process.env.OPENAI_API_KEY ? "AI replies enabled for Miso, Orbit, and Pippin." : "AI key not configured; scripted dialogue is ready for every pet.");
});
