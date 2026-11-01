const teams = [
  {
    id: "future-fuzzies",
    name: "The Future Fuzzies",
    motto: "Big dreams, soft paws.",
    status: "Dreaming up ideas",
    color: "peach",
    icon: "✦",
    members: [
      { name: "Miso", species: "Calico cat", personality: "Quietly mischievous", bio: "Thinks in sunbeams, asks excellent questions, and has a tiny plan for everything.", emoji: "🐈", art: "The catdom of 2050", artEmoji: "🏙️", artNote: "A cat-run city with rooftop sun gardens and feline-friendly transit", quote: "I have a feeling the moon needs a garden.", pose: "sneak", prop: "🌞", expression: "psst!", poseCaption: "definitely not plotting" },
      { name: "Orbit", species: "Holland lop rabbit", personality: "Curious and bouncy", bio: "Collects new ideas like carrots and never takes the boring path home.", emoji: "🐇", art: "Carrot-powered starship", artEmoji: "🚀", artNote: "A rabbit crew launches a carrot-fueled spaceship toward a cozy moonbase", quote: "Small hops can take you to enormous places!", pose: "hop", prop: "🥕", expression: "BOING!", poseCaption: "mid-hop to 2050" },
      { name: "Pippin", species: "Parrot", personality: "Dramatic storyteller", bio: "Can turn a small thought into a grand adventure with just one wing-flap.", emoji: "🦜", art: "The singing skyway", artEmoji: "🌈", artNote: "A rainbow road where the traffic sings", quote: "Places, everyone! The future is about to begin!", pose: "encore", prop: "🎤", expression: "ENCORE!", poseCaption: "taking a very deserved bow" }
    ]
  },
  {
    id: "positive-thinkers",
    name: "The Paw-sitive Thinkers",
    motto: "A brighter world, together.",
    status: "Sketches taking shape",
    color: "mint",
    icon: "❋",
    members: [
      { name: "Maple", species: "Red fox", personality: "Gentle inventor", bio: "Builds thoughtful little gadgets to help every neighbor feel at home.", emoji: "🦊", art: "The kindness machine", artEmoji: "⚙️", artNote: "A friendly machine that turns waves into wildflowers", quote: "The cleverest invention is one we share.", pose: "paint", prop: "🖌️", expression: "AHA!", poseCaption: "inventing in paint" },
      { name: "Pebble", species: "Tortoise", personality: "Patient philosopher", bio: "Takes the scenic route and somehow always arrives with the best idea.", emoji: "🐢", art: "A city that grows", artEmoji: "🌳", artNote: "Tree-houses and gardens woven through the city", quote: "Let's build a future with room to breathe.", pose: "nap", prop: "💤", expression: "zzz…", poseCaption: "dreaming up greener cities" },
      { name: "Ziggy", species: "Hedgehog", personality: "Tiny burst of ideas", bio: "Has a pocketful of bright sparks and a big soft spot for teamwork.", emoji: "🦔", art: "The great glow-up", artEmoji: "💡", artNote: "A warm glowing town powered by shared ideas", quote: "I brought twelve ideas! We can start with my favorite.", pose: "surprise", prop: "💡", expression: "OH!", poseCaption: "just had idea number twelve" },
    ]
  },
  {
    id: "astro-tails",
    name: "The Astro Tails",
    motto: "To the stars, with friends.",
    status: "Adding the color",
    color: "lilac",
    icon: "☄",
    members: [
      { name: "Nori", species: "Shiba Inu", personality: "Bold explorer", bio: "Believes every map should have a few blank spaces left for surprises.", emoji: "🐕‍🦺", art: "The star-sea express", artEmoji: "🚄", artNote: "A train winding between planets and starlight", quote: "Next stop: somewhere nobody's been before!", pose: "explore", prop: "🧭", expression: "NEXT STOP!", poseCaption: "off to the stars" },
      { name: "Waffles", species: "Guinea pig", personality: "Snack-loving optimist", bio: "A cheerful problem-solver who packs enough snacks for the whole crew.", emoji: "🐹", art: "A picnic on Mars", artEmoji: "🪐", artNote: "A red-planet picnic with a very long blanket", quote: "Exploring is hungry work. I packed extra.", pose: "laugh", prop: "🧁", expression: "snort!", poseCaption: "laughing between snacks" },
      { name: "Luna", species: "Black cat", personality: "Starry-eyed observer", bio: "Notices the little wonders everyone else walks right past.", emoji: "🐈‍⬛", art: "The night-light ocean", artEmoji: "🌙", artNote: "A moonlit ocean full of friendly glowing fish", quote: "The dark is just a canvas waiting for stars.", pose: "dream", prop: "✨", expression: "ooo…", poseCaption: "painting a moonbeam" }
    ]
  }
];

const voices = {
  miso: { friend: "Pebble", greeting: "Oh, hi. In my 2050 city, the cats are in charge. We have excellent rooftop sunbeams.", doing: "I'm painting a cat-run city with rooftop gardens and feline-friendly transit. I call it", inspiration: "I watched cats find the sunniest spots in every room. It seemed only fair to give them the whole city.", praise: "A compliment? How unusual. I shall pretend to be cool while secretly saving it in my heart-shaped scrapbook.", criticism: "Hmm. Bold feedback. I'll consider it while looking thoughtfully out this window for exactly seven minutes.", teasing: "I am not plotting anything. The paintbrush simply wandered into my paw. Completely different.", intro: "Pebble takes the scenic route to every idea. It is a very wise route, and has excellent moss.", fallback: "Interesting. I'll put that thought somewhere safe—right between my sketchbook and this suspiciously warm sunbeam." },
  orbit: { friend: "Nori", greeting: "Hop aboard! I'm building a moonbase with carrot-powered rockets. I've packed three carrots and one emergency carrot.", doing: "I'm planning a moonbase with carrot-powered rockets and a zero-gravity snack garden. It's called", inspiration: "I bounced so high in my imagination that I saw the moon. It looked like it could use a cozy burrow.", praise: "Wheee! That's the sound of my ears celebrating. Also possibly the sound of my pencil rolling away.", criticism: "Oh! A bumpy bit in the path. I'll hop around it and see if there's a better idea on the other side.", teasing: "I may be bouncy, but my ideas have excellent landing gear. Usually.", intro: "Nori maps star routes with the bravest blank spaces. Want to explore one together?", fallback: "Ooh, a mystery! I love mysteries. I have already packed a snack for the investigation." },
  pippin: { friend: "Luna", greeting: "Places, everyone! The artist has arrived! I'm painting a singing skyway and the chorus is mostly me.", doing: "I'm conducting a rainbow road where the traffic sings in four-part harmony. The working title is", inspiration: "A bird once sang at sunrise and I thought, 'Needs more traffic infrastructure.' So naturally, a singing skyway.", praise: "Encore! ENCORE! Oh, you meant the painting? I accept both standing ovations.", criticism: "A dramatic pause! A single tear! A bold revision! Thank you for the notes, mysterious art critic.", teasing: "I am not dramatic. I am simply experiencing this moment at full theatrical volume.", intro: "Luna sees stars in the quiet bits. She says the night is a canvas. I say: excellent lighting cue!", fallback: "A fascinating prompt! I shall answer in three acts, with an interval for seed snacks." },
  maple: { friend: "Pippin", greeting: "Welcome! I'm tuning a tiny kindness machine. It runs on clever ideas and the occasional friendly wave.", doing: "I'm designing a machine that turns a neighbor's wave into a little wildflower. The blueprint is called", inspiration: "I saw someone help a neighbor carry groceries. I wondered if we could build a machine that made that feeling grow.", praise: "That's very kind of you to say. I'll add a little thank-you gear to the design.", criticism: "Good note. Even my best inventions need a few gentle adjustments. I'll check the gears again.", teasing: "I did once invent a hat for a teapot. The teapot looked splendid, if a bit surprised.", intro: "Pippin turns every idea into a grand premiere. I helped with the confetti machine; it is mostly under control.", fallback: "Let me think that through carefully. I have a small pencil and a very large notebook." },
  pebble: { friend: "Miso", greeting: "Hello, friend. I'm painting a city that grows around its trees instead of asking the trees to move.", doing: "I'm sketching tree-houses and garden paths woven through a future city. I call the picture", inspiration: "A very old tree took its time growing. I thought our future could learn something from that.", praise: "Thank you. I'll tuck that kind thought into my shell for a rainy day.", criticism: "A useful pebble on the path. I'll turn it over, consider it, and keep walking at my own pace.", teasing: "I am not slow. I am giving each thought the time it deserves. Some thoughts are very scenic.", intro: "Miso notices the small wonders. She once spotted a sunbeam having a rather splendid afternoon.", fallback: "That's worth a quiet think. I may have an answer after a small, thoughtful stroll." },
  ziggy: { friend: "Waffles", greeting: "Hi! I brought ideas! And backup ideas! And a tiny emergency idea in my left pocket.", doing: "I'm lighting up a town with shared ideas. Every little glow comes from someone helping someone else. It's called", inspiration: "One kind thought can light up a whole room. I wondered what would happen if a whole town shared them.", praise: "Really? My spikes are doing a tiny sparkle. That's not static. Probably.", criticism: "Ooh, a new angle! I'll pop it onto my idea pile. Careful, the pile is getting enthusiastic.", teasing: "I am compact, not silly. Though my emergency idea is wearing a tiny hat.", intro: "Waffles brings enough snacks for every brainstorm. The ideas are good; the snack logistics are legendary.", fallback: "Let's turn that question around and see if a new idea falls out!" },
  nori: { friend: "Orbit", greeting: "Hey, explorer! I'm mapping a train route between the stars. I left a few spaces blank for surprises.", doing: "I'm plotting a train that winds between planets like a silver ribbon. The map says", inspiration: "I followed a mystery-shaped path and found a sky full of stars. Obviously the future needs a train there.", praise: "Ha! Knew this map was going somewhere good. Want to help me pick the next stop?", criticism: "Fair point. A brave explorer checks the map twice. I'll chart a different route.", teasing: "Me? Lost? I am not lost. I am on an unplanned scenic expedition.", intro: "Orbit's moonbase runs on carrots and curiosity. Pack a snack; the launch window is whenever Orbit hops.", fallback: "Sounds like a trail worth following. Let's see where it leads!" },
  waffles: { friend: "Ziggy", greeting: "Oh, hello! Welcome to my Mars picnic planning office. Would you like a snack? I packed enough for everyone.", doing: "I'm setting up a picnic on Mars with a blanket long enough for the whole planet. I named it", inspiration: "I wondered if astronauts ever miss picnic weather. So I brought the picnic weather with me.", praise: "Aww, thank you! Please accept this imaginary moon muffin as a token of my appreciation.", criticism: "That's fair. I'll move the picnic blanket away from the crater. Nobody likes a lumpy lunch.", teasing: "I am not snack-obsessed. I am snack-aware. It's an important distinction.", intro: "Ziggy carries twelve ideas at once. I carry enough snacks to keep all twelve going.", fallback: "That's a tasty question! Let me chew on it for a moment." },
  luna: { friend: "Pippin", greeting: "Hello. I was just watching the stars appear one by one. They make the loveliest paint dots.", doing: "I'm painting a moonlit ocean where the fish carry their own little lanterns. It is called", inspiration: "The night isn't empty. It is full of tiny lights waiting for someone to notice them.", praise: "I'll accept that compliment quietly. The stars are making enough fuss for both of us.", criticism: "Thank you for being honest. I'll sit with that thought under the moon and see what it tells me.", teasing: "I may be mysterious, but I am not above chasing a laser dot. For research.", intro: "Pippin turns every idea into a grand premiere. The opening number is usually about Pippin.", fallback: "Some questions are like stars: better when you look at them from a different angle." }
};

const teamGrid = document.querySelector("#team-grid");
const competitionRoot = document.querySelector("#competition-root");
const competitionLightbox = document.querySelector("#competition-lightbox");
const competitionLightboxContent = document.querySelector("#competition-lightbox-content");
const dialog = document.querySelector("#pet-dialog");
const dialogContent = document.querySelector("#dialog-content");
const closeButton = document.querySelector(".dialog-close");
const AI_PETS = new Set(["miso", "orbit", "pippin"]);
const IMAGE_PETS = new Set(["miso", "orbit", "luna"]);
const THEME = "Imagine the World in 2050";
const CHARACTER_IMAGE_IDS = new Set([
  "miso", "orbit", "pippin", "maple", "pebble", "nori", "waffles", "luna"
]);
let apiAvailable = false;
let imageGenerationAvailable = false;
let activePet = null;
let conversation = [];
let activeReplyController = null;
let panelSession = 0;
let apiStatusChecked = false;
let apiStatusPromise;
const generatedArtworkCache = new Map();
const artworkRequests = new Map();
const artworkFailures = new Set();
const petVoiceProfiles = {
  miso: { voice: "coral", style: "witty, cheeky, dryly amused", rate: 1.04, pitch: 1.12 },
  orbit: { voice: "sage", style: "gentle, dreamy, curious", rate: .92, pitch: 1.08 },
  pippin: { voice: "fable", style: "theatrical, energetic, bright", rate: 1.12, pitch: 1.2 },
  maple: { voice: "ash", style: "clever, composed, articulate", rate: .96, pitch: .98 },
  pebble: { voice: "onyx", style: "calm, thoughtful, measured", rate: .84, pitch: .88 },
  ziggy: { voice: "verse", style: "quick, excitable, full of ideas", rate: 1.14, pitch: 1.18 },
  nori: { voice: "cedar", style: "confident, adventurous, competitive", rate: 1.05, pitch: .98 },
  waffles: { voice: "shimmer", style: "cheerful, excitable, funny", rate: 1.1, pitch: 1.16 },
  luna: { voice: "marin", style: "mysterious, calm, dryly funny", rate: .9, pitch: .9 }
};
let mediaRecorder = null;
let recordingStream = null;
let recordingChunks = [];
let muted = false;
let latestSpeech = null;
let speechStopper = null;
const competitionThemes = ["Imagine the World in 2050", "A City That Cares", "The Kindest Possible Future"];
const competitionPlans = {
  "future-fuzzies": {
    concept: "Sunbeam Skyway", artEmoji: "🌞🚀🌈", lead: "miso", roles: ["Miso · world-builder", "Orbit · transport inventor", "Pippin · mood and music director"],
    brainstorm: [
      ["miso", "A city run by cats is obvious. Rooftop sun gardens are the real public service."],
      ["orbit", "Can the skyway have carrot fuel? I have already drawn the emergency carrot station."],
      ["pippin", "And every tram sings on arrival! Quietly, at first. Then triumphantly."]
    ], criteria: [24, 23, 22, 25], judge: "A dazzlingly coherent future with excellent transit and a suspiciously good chorus.", strength: "Its world-building and collaboration are beautifully connected.", weakness: "The many musical ideas compete a little for attention.", celebration: ["Miso: Second place! I will allow this silver medal to admire me.", "Orbit: We nearly won! The emergency carrot is still extremely proud.", "Pippin: A magnificent runner-up encore! Someone throw tasteful confetti!"], score: 94
  },
  "positive-thinkers": {
    concept: "The Kindness Grid", artEmoji: "⚙️🌳💡", lead: "maple", roles: ["Maple · systems inventor", "Pebble · nature guardian", "Ziggy · bright-idea spark"],
    brainstorm: [
      ["maple", "What if every small kind act sent a little power into a shared garden?"],
      ["pebble", "The garden should grow slowly enough for everyone to notice it."],
      ["ziggy", "And the lanterns can flash when someone helps! I have twelve flashing patterns."]
    ], criteria: [25, 24, 23, 24], judge: "Its big idea feels useful, tender, and delightfully full of tiny glowing surprises.", strength: "The concept turns teamwork into a vivid, useful future.", weakness: "A few of Ziggy’s light patterns remain gloriously busy.", celebration: ["Maple: We won? The kindness machine is doing a tiny victory beep!", "Pebble: Oh! First place. I packed a calm celebration, but this calls for one small cheer.", "Ziggy: Squeeee! Trophy alert! I have seventeen party ideas and one is already glittering!"], score: 96
  },
  "astro-tails": {
    concept: "Moonlight Picnic Express", artEmoji: "🚄🧁🌙", lead: "nori", roles: ["Nori · route explorer", "Waffles · cosmic host", "Luna · night-light artist"],
    brainstorm: [
      ["nori", "The train crosses the stars. No fixed route: the best stops are the surprise ones."],
      ["waffles", "Every carriage needs a picnic blanket. Even the engine. Especially the engine."],
      ["luna", "Let the ocean below hold the moonlight. The fish can keep the secrets."]
    ], criteria: [23, 24, 22, 23], judge: "A wonderfully cinematic trip: bold navigation, generous snacks, and a truly magical night sky.", strength: "Its atmosphere and sense of journey are unforgettable.", weakness: "The picnic basket is nearly as prominent as the destination.", celebration: ["Nori: Third place? Aha. A scenic shortcut to winning next time.", "Waffles: We got a medal and I brought moon muffins. That is absolutely a party.", "Luna: The stars say we were brilliant. They are very polite stars."], score: 92
  }
};
const competitionState = { running: false, stage: "Theme announcement", theme: competitionThemes[0], activity: [], artworks: {}, artworkStatus: {}, creativeComplete: false, evaluatedTeams: 0, judgingComplete: false, revealedPlaces: 0, complete: false };
const competitionAudio = { selectedTeamId: "future-fuzzies", teamId: null, index: 0, paused: false, token: 0, volume: 1, mode: "team", status: "Ready" };
let competitionSpeechStopper = null;
let celebrationCrowdTrack = null;

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));
}

for (const team of teams) {
  for (const pet of team.members) pet.id = pet.name.toLowerCase();
}

function makeCharacterIllustration(pet, team, dialogMode = false) {
  const imageId = pet.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
  const image = CHARACTER_IMAGE_IDS.has(imageId)
    ? `<img class="character-image" src="/${imageId}.png" alt="" draggable="false">`
    : "";
  return `
    <span class="character-stage team-${team.color}${dialogMode ? " character-stage-dialog" : ""}" ${dialogMode ? "" : 'aria-hidden="true"'}>
      <span class="character-blob blob-back"></span><span class="character-blob blob-front"></span>
      <span class="character-confetti confetti-one">✦</span><span class="character-confetti confetti-two">✳</span>
      <span class="character-prop">${pet.prop}</span>
      <span class="character-figure"><span class="character-emoji">${pet.emoji}</span>${image}</span>
      ${dialogMode ? `<span class="character-expression">${pet.expression}</span><span class="character-caption">${pet.poseCaption}</span>` : ""}
      ${dialogMode ? '<span id="dialog-action" class="dialog-action" aria-live="polite"></span>' : ""}
    </span>`;
}

document.addEventListener("load", (event) => {
  if (event.target.matches?.(".character-image")) event.target.closest(".character-figure")?.classList.add("image-ready");
}, true);
document.addEventListener("error", (event) => {
  if (event.target.matches?.(".character-image")) event.target.remove();
}, true);

function makePetCard(pet, team) {
  return `
    <button class="pet-card" type="button" data-pet="${pet.id}" aria-label="Meet ${pet.name}, ${pet.species}">
      ${makeCharacterIllustration(pet, team)}
      <span class="pet-card-copy">
        <span class="pet-title-row"><strong>${pet.name}</strong><span class="pet-spark">✦</span></span>
        <span class="pet-species">${pet.species}</span>
        <span class="personality-pill">“${pet.personality}”</span>
      </span>
    </button>`;
}

function renderTeams() {
  teamGrid.innerHTML = teams.map((team, index) => `
    <section class="team-card team-${team.color}" aria-labelledby="${team.id}-title">
      <header class="team-header">
        <div class="team-icon" aria-hidden="true">${team.icon}</div>
        <div class="team-heading-copy">
          <div class="team-kicker">TEAM 0${index + 1} <span>·</span> ${team.members.length} ARTISTS</div>
          <h3 id="${team.id}-title">${team.name}</h3>
          <p>${team.motto}</p>
        </div>
        <span class="team-confetti" aria-hidden="true">✳</span>
      </header>
      <div class="team-progress" aria-label="Competition status: ${team.status}">
        <span class="progress-dot"></span><span>${team.status}</span><span class="progress-track"><i style="--progress:${index === 0 ? 34 : index === 1 ? 59 : 78}%"></i></span>
      </div>
      <div class="pet-list">${team.members.map((pet) => makePetCard(pet, team)).join("")}</div>
    </section>`).join("");
}

function competitionPet(id) {
  return findPet(id)?.pet;
}

function competitionPortrait(pet) {
  const imageId = pet.id;
  return CHARACTER_IMAGE_IDS.has(imageId) ? `<img src="/${imageId}.png" alt="">` : pet.emoji;
}

function teamConversation(teamId) {
  return competitionState.activity.filter((event) => event.teamId === teamId);
}

function stopCelebrationEffects() {
  if (celebrationCrowdTrack) {
    celebrationCrowdTrack.pause();
    celebrationCrowdTrack.currentTime = 0;
  }
}

function startHumanCrowdCelebration() {
  celebrationCrowdTrack ??= new Audio("/paa-crowd-celebration.mp3");
  celebrationCrowdTrack.volume = .78;
  celebrationCrowdTrack.currentTime = 0;
  celebrationCrowdTrack.onended = () => {
    if (competitionAudio.mode !== "celebration") return;
    competitionAudio.status = "Pet party complete";
    renderCompetition();
  };
  celebrationCrowdTrack.onerror = () => {
    competitionAudio.status = "Crowd track unavailable";
    renderCompetition();
  };
  const result = celebrationCrowdTrack.play();
  if (result?.catch) result.catch(() => {
    competitionAudio.status = "Crowd track needs a browser playback gesture";
    renderCompetition();
  });
}

function stopCompetitionAudio({ preserveSelection = true } = {}) {
  competitionAudio.token += 1;
  competitionAudio.teamId = null;
  competitionAudio.index = 0;
  competitionAudio.paused = false;
  competitionAudio.mode = "team";
  competitionAudio.status = "Ready";
  if (!preserveSelection) competitionAudio.selectedTeamId = teams[0].id;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (competitionSpeechStopper) competitionSpeechStopper();
  competitionSpeechStopper = null;
  stopCelebrationEffects();
}

function pauseCompetitionAudio() {
  if (!competitionAudio.teamId) return;
  if (competitionAudio.mode === "celebration") {
    if (competitionAudio.paused) {
      const result = celebrationCrowdTrack?.play();
      if (result?.catch) result.catch(() => { competitionAudio.status = "Crowd track needs a browser playback gesture"; renderCompetition(); });
      competitionAudio.paused = false;
      competitionAudio.status = "Crowd cheering";
    } else {
      celebrationCrowdTrack?.pause();
      competitionAudio.paused = true;
      competitionAudio.status = "Paused";
    }
    renderCompetition();
    return;
  }
  if (competitionAudio.paused) {
    window.speechSynthesis.resume();
    competitionAudio.paused = false;
    competitionAudio.status = competitionAudio.mode === "celebration" ? "Celebrating" : "Playing";
  } else {
    window.speechSynthesis.pause();
    if (competitionAudio.mode === "celebration") stopCelebrationEffects();
    competitionAudio.paused = true;
    competitionAudio.status = "Paused";
  }
  renderCompetition();
}

function speakCompetitionText(pet, text, { rateBoost = 0, pitchBoost = 0 } = {}) {
  if (muted || !("speechSynthesis" in window)) return Promise.resolve();
  const profile = petVoiceProfiles[pet.id] ?? petVoiceProfiles.miso;
  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = Math.min(1.5, profile.rate + rateBoost);
    utterance.pitch = Math.min(2, profile.pitch + pitchBoost);
    utterance.volume = Math.max(0, Math.min(1, competitionAudio.volume));
    utterance.voice = preferredBrowserVoice(profile) ?? null;
    const finish = () => {
      if (competitionSpeechStopper === finish) competitionSpeechStopper = null;
      resolve();
    };
    competitionSpeechStopper = finish;
    utterance.onend = finish;
    utterance.onerror = finish;
    window.speechSynthesis.speak(utterance);
  });
}

async function playTeamConversation(teamId) {
  const messages = teamConversation(teamId);
  competitionAudio.selectedTeamId = teamId;
  if (!messages.length) {
    competitionAudio.status = "No conversation available";
    renderCompetition();
    return;
  }
  if (!("speechSynthesis" in window)) {
    competitionAudio.status = "Speech playback is unavailable in this browser";
    renderCompetition();
    return;
  }
  stopCompetitionAudio();
  const token = competitionAudio.token;
  competitionAudio.teamId = teamId;
  competitionAudio.mode = "team";
  competitionAudio.status = "Playing";
  for (let index = 0; index < messages.length; index += 1) {
    if (token !== competitionAudio.token) return;
    competitionAudio.index = index;
    renderCompetition();
    const pet = competitionPet(messages[index].petId);
    if (!pet) continue;
    await speakCompetitionText(pet, messages[index].text);
  }
  if (token === competitionAudio.token) {
    competitionAudio.teamId = null;
    competitionAudio.index = 0;
    competitionAudio.status = "Ready";
    renderCompetition();
  }
}

async function playWinnerCelebration() {
  const winner = [...teams].sort((a, b) => competitionPlans[b.id].score - competitionPlans[a.id].score)[0];
  if (!winner || !competitionState.complete) return;
  stopCompetitionAudio();
  competitionAudio.teamId = winner.id;
  competitionAudio.mode = "celebration";
  competitionAudio.index = 0;
  competitionAudio.status = "Crowd cheering";
  // This is intentionally crowd-only: no narrator, pet dialogue, music, or fanfare.
  startHumanCrowdCelebration();
  renderCompetition();
}

function openCompetitionArtwork(teamId) {
  const team = teams.find((entry) => entry.id === teamId);
  const image = competitionState.artworks[teamId];
  if (!team || !image) return;
  const plan = competitionPlans[teamId];
  competitionLightboxContent.innerHTML = `<h2 id="competition-lightbox-title">${team.name}</h2><p>${plan.concept}</p><img src="${image}" alt="${plan.concept} by ${team.name}">`;
  competitionLightbox.showModal();
}

function renderCompetition() {
  if (!competitionRoot) return;
  const stages = ["Theme announcement", "Brainstorming", "Idea selection", "Artwork creation"];
  const orderedTeams = [...teams].sort((a, b) => competitionPlans[b.id].score - competitionPlans[a.id].score);
  const summary = competitionState.activity.slice(-3).map((event) => `<li>${escapeHtml(event.text)}</li>`).join("") || "<li>Choose a theme and let the teams begin.</li>";
  const columns = teams.map((team) => {
    const plan = competitionPlans[team.id];
    const messages = teamConversation(team.id);
    const speaking = competitionAudio.teamId === team.id ? messages[competitionAudio.index] : null;
    return `<article class="competition-team-column team-${team.color}">
      <header><span class="competition-team-kicker">TEAM STUDIO</span><h3>${team.name}</h3><div class="competition-members">${team.members.map((pet) => `<span class="competition-member"><span class="competition-member-portrait">${competitionPortrait(pet)}</span><b>${pet.name}</b></span>`).join("")}</div></header>
      <section class="competition-concept"><span>Creative concept</span><h4>${plan.concept}</h4><p>${plan.roles.join(" · ")}</p></section>
      <section class="competition-team-chat"><div class="competition-chat-heading"><h4>Team conversation</h4></div>
        <ol>${messages.length ? messages.map((event, index) => { const pet = competitionPet(event.petId); return `<li class="${speaking === event ? "is-speaking" : ""}"><span class="competition-chat-avatar">${competitionPortrait(pet)}</span><div><b>${pet.name}</b><p>${escapeHtml(event.text)}</p></div></li>`; }).join("") : "<li class=\"competition-empty\">This team’s discussion will appear here.</li>"}</ol>
      </section>
    </article>`;
  }).join("");
  const artworks = teams.map((team) => {
    const plan = competitionPlans[team.id];
    const generated = competitionState.artworks[team.id];
    const status = competitionState.artworkStatus[team.id] ?? "Waiting for the artwork creation stage";
    return `<article class="competition-artwork-card team-${team.color}"><h3>${team.name}</h3>${generated ? `<button class="competition-canvas has-art" type="button" data-artwork-team="${team.id}" aria-label="Open ${plan.concept} artwork"><img src="${generated}" alt="${plan.concept} by ${team.name}"></button>` : `<div class="competition-canvas" aria-label="Blank canvas for ${team.name}"></div>`}<p class="competition-canvas-status">${escapeHtml(status)}</p></article>`;
  }).join("");
  const judging = teams.map((team, index) => {
    const plan = competitionPlans[team.id];
    const ready = competitionState.evaluatedTeams > index;
    const criteria = ["Creativity and originality", "Theme relevance", "Artistic concept and execution", "Team collaboration"];
    return `<article class="judging-card ${ready ? "is-evaluated" : ""} ${team.id === orderedTeams[0].id ? "is-winner" : ""}"><header><span>TEAM ${index + 1}</span><h3>${team.name}</h3><h4>${plan.concept}</h4></header><div class="judging-art">${competitionState.artworks[team.id] ? `<button type="button" data-artwork-team="${team.id}"><img src="${competitionState.artworks[team.id]}" alt="${plan.concept} by ${team.name}"></button>` : "<div class=\"judging-blank\">Blank canvas retained</div>"}</div><div>${ready ? `<ul>${criteria.map((label, score) => `<li><span>${label}</span><b>${plan.criteria[score]}/25</b></li>`).join("")}</ul><p class="judging-total">${plan.score}/100</p><p>${plan.judge}</p><p><strong>Strength:</strong> ${plan.strength} <strong>Watch-out:</strong> ${plan.weakness}</p>` : "<p>Waiting for this independent evaluation.</p>"}</div></article>`;
  }).join("");
  const standings = competitionState.judgingComplete ? `<ol class="competition-results">${teams.map((team) => { const place = orderedTeams.indexOf(team) + 1; const revealOrder = 4 - place; const revealed = competitionState.revealedPlaces >= revealOrder; const plan = competitionPlans[team.id]; return `<li class="place-${place} ${revealed ? "is-revealed" : ""} ${place === 1 ? "is-winner" : ""}"><strong>${revealed ? `${place}${place === 1 ? "st" : place === 2 ? "nd" : "rd"}` : "?"}</strong><span>${revealed ? team.name : "Final verdict pending"}</span><b>${revealed ? `${plan.score}/100` : "—"}</b></li>`; }).join("")}</ol>` : "";
  const winner = orderedTeams[0];
  const celebration = competitionState.complete ? `<section id="winner-celebration" class="winner-celebration"><div><span>WINNER CELEBRATION</span><h2>${winner.name}</h2><p>${competitionPlans[winner.id].concept} wins with ${competitionPlans[winner.id].score}/100 because ${competitionPlans[winner.id].strength.toLowerCase()}</p><div class="winner-members">${winner.members.map((pet) => `<span><i class="winner-portrait">${competitionPortrait(pet)}</i><b>${pet.name}</b></span>`).join("")}</div><div class="celebration-controls"><button id="celebration-play" type="button">Start the pet party</button><button id="celebration-pause" type="button" ${competitionAudio.mode === "celebration" ? "" : "disabled"}>${competitionAudio.paused ? "Resume" : "Pause"}</button><button id="celebration-stop" type="button" ${competitionAudio.mode === "celebration" ? "" : "disabled"}>Stop</button><button id="celebration-mute" type="button">${muted ? "Unmute" : "Mute"}</button></div><p class="celebration-status">${competitionAudio.mode === "celebration" ? competitionAudio.status : "Ready for a user-started pet party."}</p></div>${competitionState.artworks[winner.id] ? `<button class="winner-art" type="button" data-artwork-team="${winner.id}"><img src="${competitionState.artworks[winner.id]}" alt="${competitionPlans[winner.id].concept} by ${winner.name}"></button>` : "<div class=\"winner-art winner-blank\">Winning canvas unavailable</div>"}<aside><h3>Other reactions</h3><p><b>The Future Fuzzies:</b> “Second place? I am calling this a victory with better lighting.”</p><p><b>The Astro Tails:</b> “We demand a rematch. And snacks. Lots of snacks.”</p></aside></section>` : "";
  competitionRoot.innerHTML = `
    <div class="competition-console">
      <div class="competition-controls"><label for="competition-theme">Competition theme</label><input id="competition-theme" maxlength="80" value="${escapeHtml(competitionState.theme)}" ${competitionState.running ? "disabled" : ""}><button id="competition-theme-shuffle" type="button" ${competitionState.running ? "disabled" : ""}>Surprise theme</button><button id="competition-start" type="button" ${competitionState.running ? "disabled" : ""}>${competitionState.complete ? "Run again" : "Start the competition"} ✦</button></div>
      <div class="competition-overall"><span class="${competitionState.creativeComplete ? "is-complete" : "is-active"}">1. Creative Arena</span><span class="${competitionState.judgingComplete ? "is-complete" : competitionState.stage === "Judging" ? "is-active" : ""}">2. Judging Arena</span><span class="${competitionState.complete ? "is-complete" : competitionState.stage === "Winner announcement" ? "is-active" : ""}">3. Winner Celebration</span></div>
    </div>
    <section id="creative-arena" class="competition-arena creative-arena">
      <header><span>SECTION 1</span><h2>The Creative Arena</h2><p>Three teams collaborate from a shared theme to a finished digital artwork.</p></header>
      <div class="competition-progress" aria-label="Creative arena stage">${stages.map((stage, index) => `<span class="${competitionState.stage === stage ? "is-active" : stages.indexOf(competitionState.stage) > index || competitionState.creativeComplete ? "is-complete" : ""}">${index + 1}. ${stage}</span>`).join("")}</div>
      <p class="competition-now"><b>${competitionState.stage}</b> · ${competitionState.creativeComplete ? "Creative arena complete — judging is underway." : competitionState.running ? "The artists are working…" : "Ready when you are."}</p>
      <ol class="competition-summary">${summary}</ol>
      <div class="competition-columns">${columns}</div>
      <div class="central-audio"><label for="competition-audio-team">Listen to a team</label><select id="competition-audio-team">${teams.map((team) => `<option value="${team.id}" ${competitionAudio.selectedTeamId === team.id ? "selected" : ""}>${team.name}</option>`).join("")}</select><button id="competition-audio-play" type="button" ${teamConversation(competitionAudio.selectedTeamId).length ? "" : "disabled"}>Play</button><button id="competition-audio-pause" type="button" ${competitionAudio.teamId ? "" : "disabled"}>${competitionAudio.paused ? "Resume" : "Pause"}</button><button id="competition-audio-stop" type="button" ${competitionAudio.teamId ? "" : "disabled"}>Stop</button><button id="competition-audio-mute" type="button">${muted ? "Unmute" : "Mute"}</button><label>Volume <input id="competition-audio-volume" type="range" min="0" max="1" step=".1" value="${competitionAudio.volume}"></label><strong class="competition-audio-status" aria-live="polite">${competitionAudio.status}</strong></div>
      <section class="digital-artworks"><header><span>DIGITAL ARTWORKS</span><h3>Three canvases, three very different futures</h3></header><div class="digital-artwork-grid">${artworks}</div></section>
    </section>
    <section id="judging-arena" class="competition-arena judging-arena ${competitionState.creativeComplete ? "is-open" : "is-locked"}">
      <header><span>SECTION 2</span><h2>The Judging Arena</h2><p>Each team is measured against the same four criteria on a 25-point scale.</p></header>
      ${competitionState.creativeComplete ? `<div class="judging-grid">${judging}</div><div class="verdict"><h3>Final verdict</h3><p>${competitionState.judgingComplete ? "The scores are locked. The podium reveals third, second, then first." : "Independent evaluations are in progress."}</p>${standings}</div>` : "<p class=\"arena-locked\">Complete the Creative Arena to unlock independent evaluation.</p>"}
    </section>
    ${celebration || `<section id="winner-celebration" class="competition-arena winner-locked"><header><span>SECTION 3</span><h2>Winner Celebration</h2><p>The podium opens after the final verdict.</p></header></section>`}`;
  competitionRoot.querySelector("#competition-theme-shuffle").addEventListener("click", () => { competitionState.theme = competitionThemes[(competitionThemes.indexOf(competitionState.theme) + 1) % competitionThemes.length]; renderCompetition(); });
  competitionRoot.querySelector("#competition-start").addEventListener("click", () => { competitionState.theme = competitionRoot.querySelector("#competition-theme").value.trim() || competitionThemes[0]; void runCompetition(); });
  competitionRoot.querySelectorAll("[data-artwork-team]").forEach((button) => button.addEventListener("click", () => openCompetitionArtwork(button.dataset.artworkTeam)));
  competitionRoot.querySelector("#competition-audio-team").addEventListener("change", (event) => { stopCompetitionAudio(); competitionAudio.selectedTeamId = event.target.value; renderCompetition(); });
  competitionRoot.querySelector("#competition-audio-play").addEventListener("click", () => void playTeamConversation(competitionRoot.querySelector("#competition-audio-team").value));
  competitionRoot.querySelector("#competition-audio-pause").addEventListener("click", pauseCompetitionAudio);
  competitionRoot.querySelector("#competition-audio-stop").addEventListener("click", () => { stopCompetitionAudio(); renderCompetition(); });
  competitionRoot.querySelector("#competition-audio-mute").addEventListener("click", () => { muted = !muted; if (muted) stopCompetitionAudio(); renderCompetition(); });
  competitionRoot.querySelector("#competition-audio-volume").addEventListener("input", (event) => { competitionAudio.volume = Number(event.target.value); });
  competitionRoot.querySelector("#celebration-play")?.addEventListener("click", () => void playWinnerCelebration());
  competitionRoot.querySelector("#celebration-pause")?.addEventListener("click", pauseCompetitionAudio);
  competitionRoot.querySelector("#celebration-stop")?.addEventListener("click", () => { stopCompetitionAudio(); renderCompetition(); });
  competitionRoot.querySelector("#celebration-mute")?.addEventListener("click", () => { muted = !muted; if (muted) stopCompetitionAudio(); renderCompetition(); });
}

function addCompetitionActivity(petId, text, teamId = findPet(petId)?.team.id ?? null) {
  competitionState.activity.push({ petId, text, teamId });
  renderCompetition();
}

function waitForCompetition(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function createCompetitionArtwork(team) {
  if (!imageGenerationAvailable || competitionState.artworks[team.id]) {
    competitionState.artworkStatus[team.id] = "Image service unavailable · blank canvas retained";
    renderCompetition();
    return;
  }
  competitionState.artworkStatus[team.id] = "Generating original artwork…";
  renderCompetition();
  try {
    const response = await fetch("/api/artwork", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ teamId: team.id }), signal: AbortSignal.timeout(95_000)
    });
    if (!response.ok) throw new Error(`Artwork request failed (${response.status})`);
    const result = await response.json();
    if (!result.image) throw new Error("Artwork response was empty");
    competitionState.artworks[team.id] = `data:${result.mimeType || "image/webp"};base64,${result.image}`;
    competitionState.artworkStatus[team.id] = "Original artwork generated · click to view";
    renderCompetition();
  } catch (error) {
    console.info(`Keeping ${team.name}'s competition canvas blank.`, error.message);
    competitionState.artworkStatus[team.id] = "Image generation failed · blank canvas retained";
    renderCompetition();
  }
}

async function runCompetition() {
  if (competitionState.running) return;
  stopCompetitionAudio();
  if (!apiStatusChecked && apiStatusPromise) await apiStatusPromise;
  competitionState.running = true;
  competitionState.complete = false;
  competitionState.activity = [];
  competitionState.artworks = {};
  competitionState.artworkStatus = {};
  competitionState.creativeComplete = false;
  competitionState.evaluatedTeams = 0;
  competitionState.judgingComplete = false;
  competitionState.revealedPlaces = 0;
  competitionState.stage = "Theme announcement";
  renderCompetition();
  addCompetitionActivity("pippin", `Hear ye, hear ye! The theme is “${competitionState.theme}.” Please keep your paint inside the future.`);
  await waitForCompetition(600);
  competitionState.stage = "Brainstorming"; renderCompetition();
  for (const team of teams) {
    for (const [petId, text] of competitionPlans[team.id].brainstorm) {
      addCompetitionActivity(petId, text);
      await waitForCompetition(420);
    }
  }
  competitionState.stage = "Idea selection"; renderCompetition();
  for (const team of teams) {
    const plan = competitionPlans[team.id];
    addCompetitionActivity(plan.lead, `${team.name} chooses “${plan.concept}” — every teammate has a brushstroke in it.`, team.id);
    await waitForCompetition(500);
  }
  competitionState.stage = "Artwork creation"; renderCompetition();
  const artworkTasks = [];
  for (const team of teams) {
    const plan = competitionPlans[team.id];
    addCompetitionActivity(plan.lead, `${team.name} is painting “${plan.concept}.” The blank digital canvas is ready while the art studio works in the background.`, team.id);
    artworkTasks.push(createCompetitionArtwork(team));
    await waitForCompetition(520);
  }
  await Promise.all(artworkTasks);
  competitionState.creativeComplete = true;
  renderCompetition();
  document.querySelector("#judging-arena")?.scrollIntoView({ behavior: "smooth", block: "start" });
  competitionState.stage = "Judging"; renderCompetition();
  for (const [index, team] of teams.entries()) {
    const plan = competitionPlans[team.id];
    addCompetitionActivity(plan.lead, `Judges score ${team.name}: ${plan.score}/100. ${plan.judge}`, team.id);
    competitionState.evaluatedTeams = index + 1;
    renderCompetition();
    await waitForCompetition(520);
  }
  competitionState.judgingComplete = true;
  renderCompetition();
  const placements = [...teams].sort((a, b) => competitionPlans[b.id].score - competitionPlans[a.id].score).reverse();
  for (let index = 0; index < placements.length; index += 1) {
    competitionState.revealedPlaces = index + 1;
    addCompetitionActivity("pippin", `${3 - index} place: ${placements[index].name} with ${competitionPlans[placements[index].id].score} points.`);
    await waitForCompetition(650);
  }
  competitionState.stage = "Winner announcement";
  const winner = placements[2];
  addCompetitionActivity("pippin", `A fanfare, please! First place goes to ${winner.name} and “${competitionPlans[winner.id].concept}”!`);
  competitionState.running = false;
  competitionState.complete = true;
  renderCompetition();
  document.querySelector("#winner-celebration")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function findPet(id) {
  for (const team of teams) {
    const pet = team.members.find((member) => member.id === id);
    if (pet) return { pet, team };
  }
  return null;
}

function setArtworkStatus(petId, message) {
  if (activePet?.id !== petId) return;
  const status = dialogContent.querySelector("#dialog-art-status");
  if (status) status.textContent = message;
}

function applyGeneratedArtwork(petId, imageData) {
  document.querySelectorAll(`[data-artwork="${petId}"]`).forEach((image) => {
    image.src = imageData.src;
    image.hidden = false;
    image.closest(".painting")?.classList.add("has-generated");
    image.closest(".painting")?.classList.remove("is-loading");
  });
}

async function prepareArtwork(pet) {
  if (!IMAGE_PETS.has(pet.id)) return;
  if (!apiStatusChecked && apiStatusPromise) await apiStatusPromise;
  if (generatedArtworkCache.has(pet.id)) {
    applyGeneratedArtwork(pet.id, generatedArtworkCache.get(pet.id));
    setArtworkStatus(pet.id, "Original painting · reused this session");
    return;
  }
  if (!imageGenerationAvailable) {
    setArtworkStatus(pet.id, "Sketch preview · add an image API key for an original");
    return;
  }
  if (artworkFailures.has(pet.id)) {
    setArtworkStatus(pet.id, "Sketch preview · image service unavailable");
    return;
  }
  if (artworkRequests.has(pet.id)) {
    setArtworkStatus(pet.id, "Painting your original…");
    await artworkRequests.get(pet.id);
    return;
  }

  setArtworkStatus(pet.id, "Painting your original… your sketch is still here");
  document.querySelectorAll(`[data-painting="${pet.id}"]`).forEach((painting) => painting.classList.add("is-loading"));
  const request = (async () => {
    try {
      const response = await fetch("/api/artwork", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ petId: pet.id }),
        signal: AbortSignal.timeout(95000)
      });
      if (!response.ok) throw new Error(`Artwork request failed (${response.status})`);
      const result = await response.json();
      if (typeof result.image !== "string" || !result.image) throw new Error("Artwork response was empty");
      const imageData = { src: `data:${result.mimeType || "image/webp"};base64,${result.image}` };
      generatedArtworkCache.set(pet.id, imageData);
      applyGeneratedArtwork(pet.id, imageData);
      setArtworkStatus(pet.id, "Original painting · reused this session");
    } catch (error) {
      console.info("Using the hand-painted artwork preview.", error.message);
      artworkFailures.add(pet.id);
      document.querySelectorAll(`[data-painting="${pet.id}"]`).forEach((painting) => painting.classList.remove("is-loading"));
      setArtworkStatus(pet.id, "Sketch preview · image service unavailable");
    }
  })();
  artworkRequests.set(pet.id, request);
  await request;
  artworkRequests.delete(pet.id);
}

function addMessage(role, text, speaker = null) {
  const log = dialogContent.querySelector("#chat-log");
  const item = document.createElement("div");
  item.className = `chat-message chat-${role}`;
  const label = document.createElement("span");
  label.className = "message-label";
  label.textContent = role === "user" ? "YOU" : (speaker ?? activePet.name).toUpperCase();
  const bubble = document.createElement("p");
  bubble.className = "message-bubble";
  bubble.textContent = text;
  item.append(label, bubble);
  log.append(item);
  log.scrollTop = log.scrollHeight;
}

function setVoiceStatus(text, speaker = activePet) {
  const status = dialogContent.querySelector("#voice-status");
  if (status) status.textContent = text;
  const speakerName = dialogContent.querySelector("#voice-speaker-name");
  const speakerAvatar = dialogContent.querySelector("#voice-speaker-avatar");
  if (speakerName) speakerName.textContent = speaker ? speaker.name : "Studio";
  if (speakerAvatar && speaker) {
    const imageId = speaker.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "");
    speakerAvatar.innerHTML = CHARACTER_IMAGE_IDS.has(imageId)
      ? `<img src="/${imageId}.png" alt="">`
      : speaker.emoji;
  }
}

function stopSpeech() {
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  if (speechStopper) speechStopper();
  speechStopper = null;
  setVoiceStatus("Ready to listen");
}

function preferredBrowserVoice(profile) {
  const voices = window.speechSynthesis?.getVoices?.() ?? [];
  const hints = { coral: ["female", "samantha", "ava"], sage: ["susan", "victoria"], fable: ["daniel", "fred", "alex"], ash: ["kate", "serena"], onyx: ["david", "alex"], verse: ["zoe", "ava"], cedar: ["daniel", "alex"], shimmer: ["samantha", "zoe"], marin: ["victoria", "kate"] };
  return voices.find((voice) => hints[profile.voice]?.some((hint) => voice.name.toLowerCase().includes(hint)));
}

function speakText(pet, text, { volume = 1 } = {}) {
  latestSpeech = { pet, text };
  if (muted || !("speechSynthesis" in window)) return Promise.resolve();
  stopSpeech();
  const profile = petVoiceProfiles[pet.id] ?? petVoiceProfiles.miso;
  setVoiceStatus(`${pet.name} is speaking…`, pet);
  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = profile.rate;
    utterance.pitch = profile.pitch;
    utterance.volume = Math.max(0, Math.min(1, volume));
    utterance.voice = preferredBrowserVoice(profile) ?? null;
    const finish = () => {
      if (speechStopper === finish) speechStopper = null;
      setVoiceStatus("Ready to listen");
      resolve();
    };
    speechStopper = finish;
    utterance.onend = finish;
    utterance.onerror = finish;
    window.speechSynthesis.speak(utterance);
  });
}

function stopRecording() {
  if (mediaRecorder?.state === "recording") mediaRecorder.stop();
}

async function startRecording() {
  if (!activePet || mediaRecorder?.state === "recording") return;
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    setVoiceStatus("Microphone recording is not supported here. Type a message instead.");
    return;
  }
  try {
    recordingStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    recordingChunks = [];
    mediaRecorder = new MediaRecorder(recordingStream);
    mediaRecorder.addEventListener("dataavailable", (event) => { if (event.data.size) recordingChunks.push(event.data); });
    mediaRecorder.addEventListener("stop", () => void submitRecording());
    mediaRecorder.start();
    setVoiceStatus("Recording… click the microphone again to send");
    const mic = dialogContent.querySelector("#voice-record");
    if (mic) { mic.classList.add("is-recording"); mic.setAttribute("aria-label", "Stop recording and send"); }
  } catch (error) {
    setVoiceStatus(error.name === "NotAllowedError" ? "Microphone permission was denied. You can still type a message." : "Microphone unavailable. You can still type a message.");
  }
}

async function submitRecording() {
  const mic = dialogContent.querySelector("#voice-record");
  if (mic) { mic.classList.remove("is-recording"); mic.setAttribute("aria-label", "Start voice recording"); }
  recordingStream?.getTracks().forEach((track) => track.stop());
  recordingStream = null;
  if (!recordingChunks.length || !activePet) { setVoiceStatus("Ready to listen"); return; }
  const blob = new Blob(recordingChunks, { type: mediaRecorder?.mimeType || "audio/webm" });
  setVoiceStatus("Processing your recording…");
  try {
    const response = await fetch("/api/transcribe", { method: "POST", headers: { "Content-Type": blob.type, "X-Audio-Mime": blob.type }, body: blob });
    const result = await response.json();
    if (!response.ok || !result.transcript) throw new Error(result.error || "No transcript returned.");
    setVoiceStatus(`Heard: “${result.transcript}”`);
    await sendMessage(result.transcript, { speak: true });
  } catch (error) {
    setVoiceStatus(`${error.message} Type a message instead.`);
  } finally {
    mediaRecorder = null;
    recordingChunks = [];
  }
}

function showAction(action) {
  if (!action) return;
  const actionNames = {
    dance: "does a tiny victory dance",
    jump: "does a surprise hop",
    laugh: "giggles until the paintbrush wobbles",
    offended: "looks dramatically offended (for about two seconds)",
    spin: "does a quick artist's twirl"
  };
  const caption = dialogContent.querySelector("#dialog-action");
  const indicators = { dance: "💃", jump: "✨", laugh: "😄", offended: "🙀", spin: "🎨" };
  if (!caption || !actionNames[action]) return;
  caption.textContent = `${indicators[action]} ${activePet.name} ${actionNames[action]}!`;
  caption.classList.add("is-visible");
}

function classifyMessage(text) {
  const message = text.toLowerCase();
  if (/\b(bad|boring|ugly|hate|terrible|awful|not sure|don't like|dont like|meh|wrong)\b/.test(message)) return "criticism";
  if (/\b(silly|weird|ridiculous|goofy|dork|tease|funny|silly)\b/.test(message)) return "teasing";
  if (/\b(great|amazing|love|beautiful|brilliant|nice|wow|perfect|awesome|cool|wonderful)\b/.test(message)) return "praise";
  if (/\b(introduce|who else|another pet|meet a|meet someone|friend|teammate)\b/.test(message)) return "intro";
  if (/\b(inspir|idea|why|think of|thought of|creative)\b/.test(message)) return "inspiration";
  if (/\b(what are you|what're you|what is that|what are we|draw|paint|sketch|doing|working on|creating)\b/.test(message)) return "doing";
  return "fallback";
}

function scriptedReply(pet, text) {
  const voice = voices[pet.id];
  const type = classifyMessage(text);
  let reply;
  if (type === "doing") reply = `${voice.doing} “${pet.art}.” ${pet.artNote}.`;
  else if (type === "inspiration") reply = `${voice.inspiration} It became “${pet.art}.”`;
  else if (type === "intro") {
    const friendEntry = findPet(voice.friend.toLowerCase());
    const friendTeam = friendEntry?.team.name ?? "the academy";
    reply = `${voice.intro} Meet ${voice.friend}, our ${friendTeam} ${friendEntry?.pet.personality.toLowerCase() ?? "artist"}.`;
  } else reply = voice[type] ?? voice.fallback;
  const actions = { praise: "dance", criticism: "offended", teasing: "laugh", intro: "jump", inspiration: "spin" };
  const action = actions[type] ?? (Math.random() < 0.16 ? "jump" : null);
  return { reply, action };
}

async function requestAiReply(petId, messages, signal) {
  const response = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ petId, messages }),
    signal
  });
  if (!response.ok) throw new Error(`AI request failed (${response.status})`);
  const result = await response.json();
  if (typeof result.reply !== "string" || !result.reply.trim()) throw new Error("AI response was empty");
  return { reply: result.reply.trim(), action: result.action ?? null };
}

function findMentionedPet(message) {
  const normalized = message.toLowerCase();
  return teams.flatMap((team) => team.members.map((pet) => ({ pet, team })))
    .find(({ pet }) => pet.id !== activePet?.id && new RegExp(`\\b${pet.id}\\b`, "i").test(normalized));
}

async function runPetConversation(guestEntry, originalMessage, session) {
  if (!guestEntry || session !== panelSession || !activePet) return;
  const guestResult = scriptedReply(guestEntry.pet, `${activePet.name} was asked: ${originalMessage}`);
  addMessage("assistant", guestResult.reply, guestEntry.pet.name);
  showAction(guestResult.action);
  await speakText(guestEntry.pet, guestResult.reply);
  if (session !== panelSession || !activePet) return;
  const response = scriptedReply(activePet, `${guestEntry.pet.name} said: ${guestResult.reply}`);
  addMessage("assistant", response.reply, activePet.name);
  showAction(response.action);
  await speakText(activePet, response.reply);
}

async function sendMessage(text, { speak = true } = {}) {
  const message = text.trim();
  if (!message || !activePet) return;
  const session = panelSession;
  const input = dialogContent.querySelector("#chat-input");
  const sendButton = dialogContent.querySelector("#chat-send");
  const status = dialogContent.querySelector("#chat-mode");
  const log = dialogContent.querySelector("#chat-log");
  addMessage("user", message);
  conversation.push({ role: "user", content: message });
  input.value = "";
  input.disabled = true;
  sendButton.disabled = true;
  dialogContent.querySelectorAll("[data-prompt]").forEach((button) => { button.disabled = true; });
  status.textContent = "Thinking up something lovely…";

  const typing = document.createElement("div");
  typing.className = "typing-indicator";
  typing.setAttribute("aria-label", `${activePet.name} is thinking`);
  typing.innerHTML = "<span></span><span></span><span></span>";
  log.append(typing);
  log.scrollTop = log.scrollHeight;

  if (!apiStatusChecked && apiStatusPromise) await apiStatusPromise;
  if (session !== panelSession) {
    typing.remove();
    return;
  }

  let result;
  const useAi = apiAvailable && AI_PETS.has(activePet.id);
  const replyController = useAi ? new AbortController() : null;
  let timeout;
  try {
    if (useAi) {
      activeReplyController = replyController;
      timeout = setTimeout(() => replyController.abort(), 22000);
    }
    result = useAi
      ? await requestAiReply(activePet.id, conversation.slice(-12), replyController.signal)
      : scriptedReply(activePet, message);
  } catch (error) {
    if (session !== panelSession || replyController?.signal.aborted) {
      typing.remove();
      return;
    }
    console.info("Using the academy's scripted dialogue fallback.", error.message);
    result = scriptedReply(activePet, message);
    status.textContent = "Scripted studio pal · AI unavailable";
  } finally {
    clearTimeout(timeout);
    if (activeReplyController === replyController) activeReplyController = null;
  }
  typing.remove();
  if (session !== panelSession) return;
  if (useAi && !result.action) {
    const reactions = { praise: "dance", criticism: "offended", teasing: "laugh", intro: "jump", inspiration: "spin" };
    result.action = reactions[classifyMessage(message)] ?? (Math.random() < 0.16 ? "jump" : null);
  }
  conversation.push({ role: "assistant", content: result.reply });
  addMessage("assistant", result.reply);
  showAction(result.action);
  input.disabled = false;
  sendButton.disabled = false;
  dialogContent.querySelectorAll("[data-prompt]").forEach((button) => { button.disabled = false; });
  input.focus();
  if (status.textContent === "Thinking up something lovely…") {
    status.textContent = useAi ? "AI studio pal" : "Scripted studio pal";
  }
  if (speak) {
    await speakText(activePet, result.reply);
    await runPetConversation(findMentionedPet(message), message, session);
  }
}

function bindChat() {
  const form = dialogContent.querySelector("#chat-form");
  const input = dialogContent.querySelector("#chat-input");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    void sendMessage(input.value);
  });
  dialogContent.querySelectorAll("[data-prompt]").forEach((button) => {
    button.addEventListener("click", () => void sendMessage(button.dataset.prompt));
  });
  dialogContent.querySelector("#voice-record").addEventListener("click", () => {
    if (mediaRecorder?.state === "recording") stopRecording();
    else void startRecording();
  });
  dialogContent.querySelector("#voice-mute").addEventListener("click", (event) => {
    muted = !muted;
    event.currentTarget.textContent = muted ? "Unmute" : "Mute";
    event.currentTarget.setAttribute("aria-pressed", String(muted));
    if (muted) stopSpeech();
  });
  dialogContent.querySelector("#voice-stop").addEventListener("click", () => stopSpeech());
  dialogContent.querySelector("#voice-replay").addEventListener("click", () => {
    if (latestSpeech) void speakText(latestSpeech.pet, latestSpeech.text);
  });
}

function openPet(id) {
  const entry = findPet(id);
  if (!entry) return;
  if (activeReplyController) activeReplyController.abort();
  activeReplyController = null;
  panelSession += 1;
  const { pet, team } = entry;
  activePet = { ...pet, team };
  conversation = [];
  const voice = voices[pet.id];
  const aiMode = apiAvailable && AI_PETS.has(pet.id);
  dialogContent.innerHTML = `
    <div class="dialog-layout">
      <div class="dialog-character-panel team-${team.color}">
        <div class="dialog-art-top"><span>MEET YOUR ARTIST</span><span>✦</span></div>
        ${makeCharacterIllustration(pet, team, true)}
        <div class="artwork-preview">
          <div class="artwork-preview-picture painting" data-painting="${pet.id}" aria-hidden="true"><span class="painting-sun"></span><span class="painting-art">${pet.artEmoji}</span><img class="painting-image" data-artwork="${pet.id}" alt="" hidden><span class="painting-loader"><i></i><small>Painting…</small></span><span class="painting-spark">✦</span></div>
        </div>
        <strong class="dialog-art-title">${pet.art}</strong>
        <p class="dialog-art-note">${pet.artNote}</p>
        <small class="dialog-art-status" id="dialog-art-status" role="status" aria-live="polite"></small>
      </div>
      <section class="dialog-profile">
        <div class="profile-heading">
          <div class="dialog-kicker">${team.name} <span>·</span> ${THEME}</div>
          <h2 id="dialog-name">Hi, I'm <span>${pet.name}!</span></h2>
          <div class="dialog-species">${pet.emoji} ${pet.species} <span>·</span> ${pet.personality}</div>
          <p class="dialog-bio">${pet.bio}</p>
        </div>
        <div class="chat-section">
          <div class="chat-heading"><span class="chat-orb">✎</span><span id="chat-mode" class="chat-mode">${aiMode ? "AI studio pal" : "Scripted studio pal"}</span><span class="chat-sparkle">✦</span></div>
          <div id="chat-log" class="chat-log" role="log" aria-live="polite" aria-relevant="additions text"></div>
          <div class="quick-actions" aria-label="Quick conversation starters">
            <button type="button" data-prompt="What are you doing?">What are you drawing?</button>
            <button type="button" data-prompt="Tell me about your inspiration.">Your inspiration?</button>
            <button type="button" data-prompt="That looks amazing!">That's amazing!</button>
            <button type="button" data-prompt="Hmm, I'm not sure about that.">Needs more sparkle</button>
            <button type="button" data-prompt="Are you always this silly?">You're so silly</button>
            <button type="button" data-prompt="Introduce me to another pet.">Meet a teammate</button>
          </div>
          <form id="chat-form" class="chat-form">
            <label class="visually-hidden" for="chat-input">Message ${pet.name}</label>
            <input id="chat-input" name="message" type="text" maxlength="400" autocomplete="off" placeholder="Ask ${pet.name} anything…" required>
            <button id="voice-record" class="voice-button" type="button" aria-label="Start voice recording" title="Talk to ${pet.name}">●</button>
            <button id="chat-send" type="submit" aria-label="Send message">➤</button>
          </form>
          <div class="voice-controls" aria-label="Voice controls">
            <span class="voice-speaker" aria-live="polite"><span id="voice-speaker-avatar" class="voice-speaker-avatar">${pet.emoji}</span><span id="voice-speaker-name">${pet.name}</span></span>
            <span id="voice-status" class="voice-status" role="status">Ready to listen</span>
            <button id="voice-mute" type="button" aria-pressed="false">Mute</button>
            <button id="voice-stop" type="button">Stop</button>
            <button id="voice-replay" type="button">Replay</button>
          </div>
          <p class="chat-footnote">Voice playback uses your browser’s built-in speech. A tiny imagination goes a long way.</p>
        </div>
      </section>
    </div>`;
  bindChat();
  addMessage("assistant", voice.greeting);
  dialog.showModal();
  closeButton.focus();
  void prepareArtwork(pet);
}

async function checkApiStatus() {
  try {
    const response = await fetch("/api/status", { signal: AbortSignal.timeout(1800) });
    if (response.ok) {
      const status = await response.json();
      apiAvailable = status.aiEnabled === true;
      imageGenerationAvailable = status.imageEnabled === true;
    }
  } catch {
    apiAvailable = false;
  } finally {
    apiStatusChecked = true;
    const mode = dialogContent.querySelector("#chat-mode");
    if (mode && activePet) mode.textContent = apiAvailable && AI_PETS.has(activePet.id) ? "AI studio pal" : "Scripted studio pal";
  }
}

renderTeams();
renderCompetition();
apiStatusPromise = checkApiStatus();

teamGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-pet]");
  if (card) openPet(card.dataset.pet);
});

closeButton.addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog.addEventListener("close", () => {
  stopRecording();
  recordingStream?.getTracks().forEach((track) => track.stop());
  recordingStream = null;
  stopSpeech();
  panelSession += 1;
  if (activeReplyController) activeReplyController.abort();
  activeReplyController = null;
  activePet = null;
  conversation = [];
});
document.querySelector("#competition-lightbox-close").addEventListener("click", () => competitionLightbox.close());
competitionLightbox.addEventListener("click", (event) => { if (event.target === competitionLightbox) competitionLightbox.close(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && competitionLightbox.open) competitionLightbox.close(); });
window.addEventListener("pagehide", stopCompetitionAudio);
