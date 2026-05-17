const SAVE_KEY = "forja-cartas-v1";
const SOUND_KEY = "forja-cartas-sound-v1";
const MUSIC_KEY = "forja-cartas-music-v1";
const MUSIC_LOOP_SECONDS = 12.8;
const MAX_CARD_LEVEL = 20;
const XP_PER_CARD_PULL = 5;
const BASE_CARD_XP_REQUIRED = 50;
const CARD_XP_GROWTH = 1.3;

const rarities = [
  { id: "common", name: "Comun", short: "C", color: "var(--common)", baseEnchant: 80 },
  { id: "uncommon", name: "Poco comun", short: "PC", color: "var(--uncommon)", baseEnchant: 240 },
  { id: "rare", name: "Raro", short: "R", color: "var(--rare)", baseEnchant: 850 },
  { id: "veryRare", name: "Muy raro", short: "MR", color: "var(--very-rare)", baseEnchant: 3200 },
  { id: "legendary", name: "Legendario", short: "L", color: "var(--legendary)", baseEnchant: 14000 },
  { id: "artifact", name: "Artefacto", short: "A", color: "var(--artifact)", baseEnchant: 62000 },
  { id: "mythic", name: "Mitico", short: "M", color: "var(--mythic)", baseEnchant: 270000 }
];


const cards = [
  // COMMON
  { id: "gey", name: "Cloud Kobold gey", rarity: "common", income: 0.1, sigil: "Cl" },
  { id: "copper-spark", name: "Humano Explorador", rarity: "common", income: 0.4, sigil: "HU" },
  { id: "street-apprentice", name: "Elfo del Bosque", rarity: "common", income: 0.45, sigil: "EL" },
  { id: "dust-shield", name: "Enano Herrero", rarity: "common", income: 0.55, sigil: "EN" },
  { id: "tin-familiar", name: "Mediano Pillo", rarity: "common", income: 0.65, sigil: "ME" },
  { id: "mud-crawler", name: "Goblin Chatarrero", rarity: "common", income: 0.72, sigil: "GB" },
  { id: "rat-lantern", name: "Kobold Minero", rarity: "common", income: 0.81, sigil: "KB" },
  { id: "old-cauldron", name: "Bruja del Pantano", rarity: "common", income: 0.92, sigil: "BR" },
  { id: "rookie-claw", name: "Tabaxi Errante", rarity: "common", income: 1.05, sigil: "TB" },

  // MAS COMMON
  { id: "zombie-rotten", name: "Zombie Putrefacto", rarity: "common", income: 1.1, sigil: "ZO" },
  { id: "skeleton-guard", name: "Esqueleto Guardian", rarity: "common", income: 1.15, sigil: "ES" },
  { id: "wolf-hunter", name: "Lobo Salvaje", rarity: "common", income: 1.2, sigil: "LO" },
  { id: "giant-rat", name: "Rata Gigante", rarity: "common", income: 1.28, sigil: "RG" },
  { id: "cultist-mad", name: "Cultista Loco", rarity: "common", income: 1.35, sigil: "CL" },
  { id: "goblin-scout", name: "Goblin Explorador", rarity: "common", income: 1.42, sigil: "GE" },
  { id: "slime-jelly", name: "Limo Baboso", rarity: "common", income: 1.5, sigil: "LI" },
  { id: "giant-centipede", name: "Ciempiés Gigante", rarity: "common", income: 1.6, sigil: "CG" },




  // UNCOMMON
  { id: "ivy-knife", name: "Gnomo Ilusionista", rarity: "uncommon", income: 1.25, sigil: "GN" },
  { id: "amber-scribe", name: "Draconido Rojo", rarity: "uncommon", income: 1.45, sigil: "DR" },
  { id: "river-archer", name: "Tiefling Errante", rarity: "uncommon", income: 1.75, sigil: "TI" },
  { id: "green-hourglass", name: "Orco del Clan", rarity: "uncommon", income: 2.05, sigil: "OR" },
  { id: "ashen-bolt", name: "Necromante Joven", rarity: "uncommon", income: 2.25, sigil: "NE" },
  { id: "bone-dice", name: "Cultista Abisal", rarity: "uncommon", income: 2.6, sigil: "CU" },
  { id: "wild-roots", name: "Druida Salvaje", rarity: "uncommon", income: 2.9, sigil: "DU" },
  { id: "scarred-fang", name: "Bárbaro Tribal", rarity: "uncommon", income: 3.2, sigil: "BB" },
  { id: "iron-shield", name: "Paladín de Hierro", rarity: "uncommon", income: 3.3, sigil: "PH" },
  { id: "copper-crown", name: "Rey Enano", rarity: "uncommon", income: 3.4, sigil: "RE" },
  { id: "silver-tome", name: "Mago Errante", rarity: "uncommon", income: 3.5, sigil: "MA" },


  
  // DRACONIDOS
  { id: "dragon-black", name: "Draconido Negro", rarity: "uncommon", income: 3.4, sigil: "DN" },
  { id: "dragon-blue", name: "Draconido Azul", rarity: "uncommon", income: 3.6, sigil: "DA" },
  { id: "dragon-green", name: "Draconido Verde", rarity: "uncommon", income: 3.8, sigil: "DV" },
  { id: "dragon-white", name: "Draconido Blanco", rarity: "uncommon", income: 4.0, sigil: "DB" },

  // RARE
  { id: "blue-warden", name: "Kobold Trampero", rarity: "rare", income: 4.2, sigil: "KO" },
  { id: "mirror-orb", name: "Aasimar Radiante", rarity: "rare", income: 4.9, sigil: "AA" },
  { id: "moon-spear", name: "Limo Gelatinoso", rarity: "rare", income: 5.8, sigil: "LI" },
  { id: "crystal-scout", name: "Licantropo Lunar", rarity: "rare", income: 6.6, sigil: "LC" },
  { id: "grave-howl", name: "Caballero Maldito", rarity: "rare", income: 7.4, sigil: "CM" },
  { id: "deep-observer", name: "Espectador Arcano", rarity: "rare", income: 8.2, sigil: "EO" },
  { id: "thorn-whisper", name: "Asesino Drow", rarity: "rare", income: 9.1, sigil: "DW" },
  { id: "burning-chain", name: "Diablo de Brasas", rarity: "rare", income: 10.5, sigil: "DB" },



  // MAS RARE
  { id: "owlbear-rage", name: "Oso Buho Furioso", rarity: "rare", income: 11.2, sigil: "OB" },
  { id: "minotaur-maze", name: "Minotauro del Laberinto", rarity: "rare", income: 12.4, sigil: "MN" },
  { id: "harpy-singer", name: "Arpia Cantora", rarity: "rare", income: 13.1, sigil: "AR" },
  { id: "ghoul-feast", name: "Ghoul Hambriento", rarity: "rare", income: 14.3, sigil: "GH" },
  { id: "vampire-thirst", name: "Vampiro Sediento", rarity: "rare", income: 15.8, sigil: "VS" },
  { id: "lich-curse", name: "Lich Maldito", rarity: "rare", income: 17.6, sigil: "LI" },
  { id: "giant-spider", name: "Araña Gigante", rarity: "rare", income: 19.4, sigil: "AG" },
  { id: "banshee-wail", name: "Banshee Aulladora", rarity: "rare", income: 21.5, sigil: "BA" },

  // VERY RARE
  { id: "violet-duelist", name: "Mimico Hambriento", rarity: "veryRare", income: 13.5, sigil: "MI" },
  { id: "storm-crown", name: "Basilisco de Piedra", rarity: "veryRare", income: 16, sigil: "BA" },
  { id: "astral-lock", name: "Grifo de Guerra", rarity: "veryRare", income: 19, sigil: "GR" },
  { id: "silent-drake", name: "Manticora Salvaje", rarity: "veryRare", income: 23, sigil: "MA" },
  { id: "obsidian-howl", name: "Hombre Lobo Alfa", rarity: "veryRare", income: 27, sigil: "HL" },
  { id: "ashen-eye", name: "Beholder Dormido", rarity: "veryRare", income: 31, sigil: "BE" },
  { id: "blood-harvest", name: "Segador Carmesí", rarity: "veryRare", income: 36, sigil: "SC" },
  { id: "night-requiem", name: "Jinete Sin Rostro", rarity: "veryRare", income: 42, sigil: "JR" },

  // MAS VERY RARE
  { id: "medusa-stone", name: "Medusa Maldita", rarity: "veryRare", income: 48, sigil: "MD" },
  { id: "aboleth-mind", name: "Aboleth Antiguo", rarity: "veryRare", income: 56, sigil: "AB" },
  { id: "yuan-ti", name: "Yuan-ti Supremo", rarity: "veryRare", income: 64, sigil: "YT" },
  { id: "gorgon-breath", name: "Gorgona Petrificante", rarity: "veryRare", income: 72, sigil: "GO" },
  { id: "giant-serpent", name: "Serpiente Gigante", rarity: "veryRare", income: 82, sigil: "SG" },

  // LEGENDARY
  { id: "sun-queen", name: "Quimera Alada", rarity: "legendary", income: 54, sigil: "QI" },
  { id: "golden-pact", name: "Esfinge Antigua", rarity: "legendary", income: 66, sigil: "ES" },
  { id: "ember-saint", name: "Vampiro Noble", rarity: "legendary", income: 78, sigil: "VA" },
  { id: "last-banner", name: "Hidra de Nueve", rarity: "legendary", income: 94, sigil: "HI" },
  { id: "sunken-throne", name: "Kraken Abisal", rarity: "legendary", income: 110, sigil: "KR" },
  { id: "celestial-hammer", name: "Ángel Exiliado", rarity: "legendary", income: 128, sigil: "AN" },
  { id: "void-cathedral", name: "Dragón Espectral", rarity: "legendary", income: 146, sigil: "DE" },
  { id: "infernal-gate", name: "Archidemonio Balor", rarity: "legendary", income: 172, sigil: "BL" },

  // MAS LEGENDARY
  { id: "pit-fiend", name: "Diablo de Foso", rarity: "legendary", income: 190, sigil: "PF" },
  { id: "ancient-beholder", name: "Beholder Tirano", rarity: "legendary", income: 215, sigil: "BT" },
  { id: "storm-giant", name: "Gigante de Tormenta", rarity: "legendary", income: 240, sigil: "GT" },
  { id: "lich-king", name: "Rey Lich", rarity: "legendary", income: 270, sigil: "RL" },
  { id: "demon-lord", name: "Señor Demonio", rarity: "legendary", income: 310, sigil: "SD" },
    { id: "titan-giant", name: "Titán de Guerra", rarity: "legendary", income: 360, sigil: "TG" }, 



  // ARTIFACT
  { id: "clockwork-heart", name: "Golem de Hierro", rarity: "artifact", income: 215, sigil: "GO" },
  { id: "void-map", name: "Fenix Carmesi", rarity: "artifact", income: 260, sigil: "FE" },
  { id: "glass-forge", name: "Gigante de Escarcha", rarity: "artifact", income: 315, sigil: "GI" },
  { id: "ancient-engine", name: "Lich del Sepulcro", rarity: "artifact", income: 380, sigil: "LH" },
  { id: "eternal-flesh", name: "Devorador Mental Ancestral", rarity: "artifact", income: 460, sigil: "DM" },
  { id: "world-root", name: "Treant Milenario", rarity: "artifact", income: 540, sigil: "TR" },
  { id: "storm-maw", name: "Leviatán Celeste", rarity: "artifact", income: 640, sigil: "LV" },
  { id: "obsidian-reign", name: "Rey Liche", rarity: "artifact", income: 760, sigil: "RL" },

  // MAS ARTIFACT
  { id: "death-knight", name: "Caballero de la Muerte", rarity: "artifact", income: 900, sigil: "CD" },
  { id: "astral-dragon", name: "Dragon Astral", rarity: "artifact", income: 1100, sigil: "AS" },
  { id: "demon-prince", name: "Príncipe Demonio", rarity: "artifact", income: 1300, sigil: "PD" },
  { id: "tarrasque", name: "Tarrasque Ancestral", rarity: "artifact", income: 1500, sigil: "TA" },
  { id: "elder-god", name: "Dios Antiguo", rarity: "artifact", income: 1750, sigil: "DA" },
  { id: "celestial-titan", name: "Titán Celestial", rarity: "artifact", income: 2000, sigil: "TC" },


  // MYTHIC
  { id: "star-origin", name: "Dragon Rojo Anciano", rarity: "mythic", income: 1050, sigil: "DA" },
  { id: "red-eclipse", name: "Tarrasca Primordial", rarity: "mythic", income: 1280, sigil: "TA" },
  { id: "infinite-ace", name: "Avatar Celestial", rarity: "mythic", income: 1560, sigil: "AC" },
  { id: "final-constellation", name: "Titan Astral", rarity: "mythic", income: 1900, sigil: "TT" },
  { id: "world-serpent", name: "Jormungandr Eterno", rarity: "mythic", income: 2300, sigil: "JS" },
  { id: "forgotten-god", name: "Dios Devorador", rarity: "mythic", income: 2800, sigil: "DD" },
  { id: "eternal-king", name: "Rey Eterno", rarity: "mythic", income: 3500, sigil: "RE" },
  { id: "abyssal-lord", name: "Señor del Abismo", rarity: "mythic", income: 4300, sigil: "SA" },
  { id: "celestial-empress", name: "Emperatriz Celestial", rarity: "mythic", income: 5200, sigil: "EC" },


  // DOC 🧠
  {
    id: "doc-the-gnome",
    name: "Doc el Gnomo",
    rarity: "mythic",
    income: 6666,
    sigil: "DC"
  },

  // THE BEST CARD
  {
    id: "lecklerk-silva",
    name: "Lecklerk Silva",
    rarity: "mythic",
    income: 9999,
    sigil: "LS"
  }
];



const gachas = [
  {
    id: "paper",
    name: "Sobre de Papel",
    icon: "I",
    color: "#818a8d",
    baseCost: 50,
    growth: 1.08,
    weights: { common: 760, uncommon: 200, rare: 35, veryRare: 5, legendary: 0, artifact: 0, mythic: 0 }
  },
  {
    id: "bronze",
    name: "Cofre de Bronce",
    icon: "II",
    color: "#2c9b66",
    baseCost: 240,
    growth: 1.09,
    weights: { common: 560, uncommon: 310, rare: 105, veryRare: 23, legendary: 2, artifact: 0, mythic: 0 }
  },
  {
    id: "silver",
    name: "Cofre de Plata",
    icon: "III",
    color: "#2c6fd1",
    baseCost: 1200,
    growth: 1.1,
    weights: { common: 320, uncommon: 360, rare: 230, veryRare: 75, legendary: 14, artifact: 1, mythic: 0 }
  },
  {
    id: "violet",
    name: "Ritual Violeta",
    icon: "IV",
    color: "#7b4fca",
    baseCost: 6200,
    growth: 1.11,
    weights: { common: 150, uncommon: 285, rare: 330, veryRare: 185, legendary: 44, artifact: 6, mythic: 0 }
  },
  {
    id: "gold",
    name: "Camara Dorada",
    icon: "V",
    color: "#ce942f",
    baseCost: 32000,
    growth: 1.115,
    weights: { common: 55, uncommon: 170, rare: 315, veryRare: 285, legendary: 145, artifact: 28, mythic: 2 }
  },
  {
    id: "relic",
    name: "Reliquia Viva",
    icon: "VI",
    color: "#138a91",
    baseCost: 165000,
    growth: 1.12,
    weights: { common: 15, uncommon: 80, rare: 230, veryRare: 330, legendary: 250, artifact: 85, mythic: 10 }
  },
  {
    id: "cosmic",
    name: "Puerta Mitica",
    icon: "VII",
    color: "#ce3e72",
    baseCost: 900000,
    growth: 1.125,
    weights: { common: 0, uncommon: 25, rare: 105, veryRare: 260, legendary: 340, artifact: 220, mythic: 50 }
  }
];

const enchantMaterials = [
  { id: "bronze", name: "Bronce", short: "BR", multiplier: 1, weight: 410, color: "#b06a3c" },
  { id: "iron", name: "Hierro", short: "HI", multiplier: 1.5, weight: 260, color: "#6d7880" },
  { id: "silver", name: "Plata", short: "PL", multiplier: 2, weight: 160, color: "#aebdca" },
  { id: "gold", name: "Oro", short: "OR", multiplier: 3, weight: 90, color: "#d79a2b" },
  { id: "platinum", name: "Platino", short: "PT", multiplier: 5, weight: 50, color: "#86b7bc" },
  { id: "emerald", name: "Esmeralda", short: "ES", multiplier: 7, weight: 20, color: "#159b61" },
  { id: "diamond", name: "Diamante", short: "DI", multiplier: 10, weight: 10, color: "#5cc7e6" }
];

const baseEnchantMaterial = {
  id: "base",
  name: "Sin mineral",
  short: "Base",
  multiplier: 1,
  color: "#8b9290"
};

const initialState = {
  gold: 80,
  owned: {},
  pulls: {},
  selectedCardId: null,
  lastCardId: null,
  log: [],
  filter: "all",
  lastSavedAt: Date.now()
};

function createInitialState() {
  return {
    gold: initialState.gold,
    owned: {},
    pulls: {},
    selectedCardId: null,
    lastCardId: null,
    log: [],
    filter: "all",
    lastSavedAt: Date.now()
  };
}

let state = loadState();
let lastTick = Date.now();
let saveTimer = 0;
let enchantEffect = null;
let soundEnabled = localStorage.getItem(SOUND_KEY) !== "off";
let musicEnabled = localStorage.getItem(MUSIC_KEY) !== "off";
let audioContext = null;
let musicTimer = null;
let musicNodes = [];
let cardRoulette = null;
let previousGoldValue = Math.floor(state.gold);
let goldPulseTimer = null;
// Map card.id -> { type: 'png'|'jpg' } or null if no local file
let localImageMap = null;
const IMAGE_FIT_KEY = 'forja-image-fit';
// 'cover' fills the card (may crop). 'contain' shows whole image (may leave empty space).
let imageFitMode = localStorage.getItem(IMAGE_FIT_KEY) || 'cover';

function setImageFitMode(mode) {
  imageFitMode = mode === 'contain' ? 'contain' : 'cover';
  try { localStorage.setItem(IMAGE_FIT_KEY, imageFitMode); } catch (e) {}
  document.querySelectorAll('.card-art img').forEach((img) => adjustImageFit(img));
}

function toggleImageFit() {
  setImageFitMode(imageFitMode === 'contain' ? 'cover' : 'contain');
}

async function scanLocalImages() {
  localImageMap = {};
  const check = async (url) => {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      return res.ok;
    } catch (e) {
      return false;
    }
  };

  for (const card of cards) {
    const png = `images/${card.id}.png`;
    const jpg = `images/${card.id}.jpg`;
    try {
      if (await check(png)) {
        localImageMap[card.id] = 'png';
      } else if (await check(jpg)) {
        localImageMap[card.id] = 'jpg';
      } else {
        localImageMap[card.id] = null;
      }
    } catch (e) {
      localImageMap[card.id] = null;
    }
  }

  console.info('Local image scan complete. Found', Object.values(localImageMap).filter(Boolean).length, 'images.');
  // After scan, re-render parts that show images
  renderCollection();
  renderLastCard();
  renderSelected();
}

const elements = {
  gold: document.querySelector("#goldValue"),
  income: document.querySelector("#incomeValue"),
  cards: document.querySelector("#cardsValue"),
  gachaList: document.querySelector("#gachaList"),
  lastCardSlot: document.querySelector("#lastCardSlot"),
  lastCardTitle: document.querySelector("#lastCardTitle"),
  lastCardText: document.querySelector("#lastCardText"),
  collectionGrid: document.querySelector("#collectionGrid"),
  collectionSummary: document.querySelector("#collectionSummary"),
  rarityFilters: document.querySelector("#rarityFilters"),
  selectedCardSlot: document.querySelector("#selectedCardSlot"),
  selectedDetails: document.querySelector("#selectedDetails"),
  enchantButton: document.querySelector("#enchantButton"),
  pullLog: document.querySelector("#pullLog"),
  soundButton: document.querySelector("#soundButton"),
  musicButton: document.querySelector("#musicButton"),
  resetButton: document.querySelector("#resetButton")
  
};

// removed manual rescale function; images auto-adjust on load

function adjustImageFit(img) {
  try {
    const art = img.parentElement;
    const cw = art.clientWidth || art.offsetWidth;
    const ch = art.clientHeight || art.offsetHeight;
    const nw = img.naturalWidth || img.width;
    const nh = img.naturalHeight || img.height;

    // Ensure the image fits inside the card according to the user's preference.
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = imageFitMode;
    img.style.objectPosition = '50% 50%';
  } catch (e) {
    // fallback
    img.style.objectFit = 'cover';
    img.style.width = '100%';
    img.style.height = '100%';
  }
}

function rarityById(id) {
  return rarities.find((rarity) => rarity.id === id);
}

function cardById(id) {
  return cards.find((card) => card.id === id);
}

function ownedEntry(cardId) {
  if (!state.owned[cardId]) {
    state.owned[cardId] = { copies: 0, xp: 0, enchant: 0 };
  }
  normalizeCardEntry(state.owned[cardId]);
  return state.owned[cardId];
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!saved || typeof saved !== "object") {
      return createInitialState();
    }

    const next = {
      ...createInitialState(),
      ...saved,
      owned: saved.owned || {},
      pulls: saved.pulls || {},
      log: Array.isArray(saved.log) ? saved.log.slice(0, 8) : []
    };
    normalizeOwnedCards(next.owned);

    const now = Date.now();
    const elapsed = Math.max(0, Math.min(now - Number(next.lastSavedAt || now), 1000 * 60 * 60 * 8));
    next.gold += totalIncome(next) * (elapsed / 1000);
    next.lastSavedAt = now;
    return next;
  } catch {
    return createInitialState();
  }
}

function saveState() {
  state.lastSavedAt = Date.now();
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function formatNumber(value) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  const abs = Math.abs(value);
  const suffixes = [
    { value: 1e12, text: "B" },
    { value: 1e9, text: "MM" },
    { value: 1e6, text: "M" },
    { value: 1e3, text: "K" }
  ];

  const suffix = suffixes.find((item) => abs >= item.value);
  if (suffix) {
    return `${(value / suffix.value).toFixed(abs >= suffix.value * 100 ? 0 : 1)}${suffix.text}`;
  }

  return value.toLocaleString("es-UY", { maximumFractionDigits: value < 100 ? 1 : 0 });
}

function money(value) {
  return `${formatNumber(Math.floor(value))} oro`;
}

function getAudioContext() {
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (!AudioEngine) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioEngine();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function playTone(frequency, delay = 0, duration = 0.14, type = "sine", volume = 0.05) {
  const context = getAudioContext();
  if (!context) {
    return;
  }

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const start = context.currentTime + delay;
  const end = start + duration;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(end + 0.04);
}

function playNoise(delay = 0, duration = 0.08, volume = 0.035, filterFrequency = 1600) {
  const context = getAudioContext();
  if (!context) {
    return;
  }

  const length = Math.max(1, Math.floor(context.sampleRate * duration));
  const buffer = context.createBuffer(1, length, context.sampleRate);
  const data = buffer.getChannelData(0);

  for (let index = 0; index < length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * (1 - index / length);
  }

  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  const start = context.currentTime + delay;
  const end = start + duration;

  source.buffer = buffer;
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(filterFrequency, start);
  filter.Q.setValueAtTime(4.5, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  source.start(start);
  source.stop(end + 0.03);
}

function playSound(sound, details = {}) {
  if (!soundEnabled) {
    return;
  }

  const rarityRank = Math.max(0, rarities.findIndex((rarity) => rarity.id === details.rarityId));
  const base = 220 + rarityRank * 42;
  const delay = details.delay || 0;

  if (sound === "buy") {
    playNoise(delay, 0.055, 0.04, 2400);
    [880, 1174, 1567].forEach((frequency, index) => {
      playTone(frequency, delay + index * 0.035, 0.075, "square", 0.022);
    });
    return;
  }

  if (sound === "pull") {
    playNoise(delay, 0.11, 0.03, 900 + rarityRank * 120);
    playTone(base * 1.25, delay + 0.02, 0.08, "triangle", 0.034);
    playTone(base * 1.75, delay + 0.08, 0.1, "sine", 0.034);
    playTone(base * 2.25, delay + 0.15, 0.13, "triangle", 0.028);
    return;
  }

  if (sound === "rarePull") {
    playNoise(delay, 0.18, 0.052, 2800);
    [392, 523, 659, 784, 1046, 1318].forEach((frequency, index) => {
      playTone(frequency + rarityRank * 26, delay + index * 0.055, 0.16, index % 2 ? "sine" : "triangle", 0.043);
    });
    playTone(196 + rarityRank * 18, delay, 0.5, "triangle", 0.026);
    return;
  }

  if (sound === "levelUp") {
    playNoise(delay, 0.12, 0.04, 3600);
    [523, 659, 784, 1046, 1318].forEach((frequency, index) => {
      playTone(frequency, delay + index * 0.055, 0.14, "triangle", 0.044);
    });
    return;
  }

  if (sound === "enchantSuccess") {
    playNoise(delay, 0.22, 0.045, 4200);
    [740, 1110, 1480, 2220, 2960].forEach((frequency, index) => {
      playTone(frequency, delay + index * 0.042, 0.2, "sine", 0.04);
    });
    playTone(370, delay, 0.42, "triangle", 0.025);
    return;
  }

  if (sound === "enchantFail") {
    playNoise(delay, 0.09, 0.028, 650);
    playTone(220, delay, 0.11, "sawtooth", 0.026);
    playTone(165, delay + 0.09, 0.15, "triangle", 0.025);
    return;
  }

  if (sound === "reset") {
    playTone(392, delay, 0.08, "triangle", 0.03);
    playTone(294, delay + 0.07, 0.1, "triangle", 0.028);
    playTone(196, delay + 0.15, 0.14, "triangle", 0.026);
    return;
  }

  if (sound === "ui") {
    playTone(660, delay, 0.045, "triangle", 0.018);
    playTone(990, delay + 0.035, 0.055, "sine", 0.014);
    return;
  }

  if (sound === "toggle") {
    playTone(440, delay, 0.08, "sine", 0.035);
    playTone(660, delay + 0.07, 0.12, "sine", 0.04);
  }
}

function playMusicTone(frequency, delay = 0, duration = 0.5, type = "triangle", volume = 0.012) {
  if (!musicEnabled) {
    return;
  }

  const context = getAudioContext();
  if (!context) {
    return;
  }

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();
  const start = context.currentTime + delay;
  const end = start + duration;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1600, start);
  filter.Q.setValueAtTime(0.7, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(end + 0.05);

  const node = { oscillator, gain };
  musicNodes.push(node);
  oscillator.onended = () => {
    musicNodes = musicNodes.filter((item) => item !== node);
  };
}

function scheduleBackgroundMusic() {
  if (!musicEnabled) {
    return;
  }

  const melody = [293.66, 369.99, 440, 554.37, 493.88, 369.99, 329.63, 246.94];
  const echo = [440, 493.88, 554.37, 659.25, 587.33, 493.88, 440, 369.99];
  const bass = [146.83, 196, 174.61, 220];

  bass.forEach((frequency, index) => {
    playMusicTone(frequency, index * 3.2, 2.9, "sine", 0.017);
    playMusicTone(frequency * 2, index * 3.2 + 0.04, 2.5, "triangle", 0.008);
  });

  melody.forEach((frequency, index) => {
    playMusicTone(frequency, index * 0.4, 0.34, index % 2 ? "sine" : "triangle", 0.012);
    playMusicTone(echo[index], index * 0.4 + 6.4, 0.34, "triangle", 0.01);
  });

  [293.66, 369.99, 440, 587.33].forEach((frequency, index) => {
    playMusicTone(frequency, 9.6 + index * 0.02, 2.4, "sine", 0.006);
  });
}

function startBackgroundMusic() {
  if (!musicEnabled || musicTimer) {
    return;
  }

  const context = getAudioContext();
  if (!context) {
    return;
  }

  scheduleBackgroundMusic();
  musicTimer = window.setInterval(scheduleBackgroundMusic, MUSIC_LOOP_SECONDS * 1000);
}

function stopBackgroundMusic() {
  if (musicTimer) {
    window.clearInterval(musicTimer);
    musicTimer = null;
  }

  for (const node of musicNodes) {
    try {
      node.gain.gain.cancelScheduledValues(audioContext.currentTime);
      node.gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
      node.oscillator.stop(audioContext.currentTime + 0.02);
    } catch {
      // Some scheduled nodes may already be stopped.
    }
  }
  musicNodes = [];
}

function unlockAudio() {
  getAudioContext();
  if (musicEnabled) {
    startBackgroundMusic();
  }
}

function renderSoundButton() {
  if (!elements.soundButton) {
    return;
  }

  elements.soundButton.classList.toggle("muted", !soundEnabled);
  elements.soundButton.title = soundEnabled ? "Silenciar sonido" : "Activar sonido";
  elements.soundButton.setAttribute("aria-label", elements.soundButton.title);
  elements.soundButton.querySelector("span").textContent = soundEnabled ? "S" : "M";
}

function renderMusicButton() {
  if (!elements.musicButton) {
    return;
  }

  elements.musicButton.classList.toggle("muted", !musicEnabled);
  elements.musicButton.title = musicEnabled ? "Silenciar musica" : "Activar musica";
  elements.musicButton.setAttribute("aria-label", elements.musicButton.title);
  elements.musicButton.querySelector("span").textContent = musicEnabled ? "B" : "B-";
}

function toggleSound() {
  unlockAudio();
  soundEnabled = !soundEnabled;
  localStorage.setItem(SOUND_KEY, soundEnabled ? "on" : "off");
  renderSoundButton();
  if (soundEnabled) {
    playSound("toggle");
  }
}

function toggleMusic() {
  musicEnabled = !musicEnabled;
  localStorage.setItem(MUSIC_KEY, musicEnabled ? "on" : "off");
  renderMusicButton();

  if (musicEnabled) {
    startBackgroundMusic();
    playSound("toggle");
  } else {
    stopBackgroundMusic();
  }
}

function xpRequiredForLevel(level) {
  return Math.floor(BASE_CARD_XP_REQUIRED * Math.pow(CARD_XP_GROWTH, Math.max(0, level - 1)));
}

function maxCardXp() {
  let total = 0;
  for (let level = 1; level < MAX_CARD_LEVEL; level += 1) {
    total += xpRequiredForLevel(level);
  }
  return total;
}

function cardXp(entry) {
  if (!entry) {
    return 0;
  }

  const migratedXp = Number(entry.copies || 0) * XP_PER_CARD_PULL;
  const rawXp = entry.xp === undefined ? migratedXp : Number(entry.xp || 0);
  return Math.max(0, Math.min(maxCardXp(), Math.floor(rawXp)));
}

function normalizeCardEntry(entry) {
  entry.xp = cardXp(entry);
  entry.copies = Math.max(0, Math.floor(Number(entry.copies || 0)));
  entry.enchant = Math.max(0, Math.floor(Number(entry.enchant || 0)));
  return entry;
}

function normalizeOwnedCards(owned) {
  Object.values(owned).forEach(normalizeCardEntry);
}

function cardLevel(entry) {
  const xp = cardXp(entry);
  if (xp <= 0) {
    return 0;
  }

  let spentXp = 0;
  let level = 1;

  while (level < MAX_CARD_LEVEL && xp - spentXp >= xpRequiredForLevel(level)) {
    spentXp += xpRequiredForLevel(level);
    level += 1;
  }

  return level;
}

function cardXpProgress(entry) {
  const xp = cardXp(entry);
  const level = cardLevel(entry);
  let spentXp = 0;

  for (let currentLevel = 1; currentLevel < level; currentLevel += 1) {
    spentXp += xpRequiredForLevel(currentLevel);
  }

  if (level >= MAX_CARD_LEVEL) {
    return {
      level,
      current: xpRequiredForLevel(MAX_CARD_LEVEL - 1),
      required: xpRequiredForLevel(MAX_CARD_LEVEL - 1),
      percent: 100,
      isMax: true
    };
  }

  const required = xpRequiredForLevel(Math.max(1, level));
  const current = Math.max(0, xp - spentXp);
  return {
    level,
    current,
    required,
    percent: required > 0 ? Math.min(100, (current / required) * 100) : 0,
    isMax: false
  };
}

function formatMultiplier(value) {
  return Number.isInteger(value) ? value : value.toFixed(1);
}

function enchantLevel(entry) {
  return Math.max(0, Math.min(Number(entry?.enchant || 0), enchantMaterials.length));
}

function enchantMaterialById(materialId) {
  return enchantMaterials.find((material) => material.id === materialId) || baseEnchantMaterial;
}

function enchantMaterialLevel(material) {
  return Math.max(0, enchantMaterials.findIndex((item) => item.id === material.id) + 1);
}

function currentEnchantMaterial(entry) {
  const level = enchantLevel(entry);
  return level > 0 ? enchantMaterials[level - 1] : baseEnchantMaterial;
}

function rollEnchantMaterial() {
  const total = enchantMaterials.reduce((sum, material) => sum + material.weight, 0);
  let roll = Math.random() * total;

  for (const material of enchantMaterials) {
    roll -= material.weight;
    if (roll <= 0) {
      return material;
    }
  }

  return enchantMaterials[0];
}

function diamondChance() {
  const total = enchantMaterials.reduce((sum, material) => sum + material.weight, 0);
  const diamond = enchantMaterials[enchantMaterials.length - 1];
  return Math.round((diamond.weight / total) * 100);
}

function cardMultiplier(cardId, customState = state) {
  const entry = customState.owned[cardId];
  if (!entry) {
    return 1;
  }
  return currentEnchantMaterial(entry).multiplier;
}

function cardIncome(card, customState = state) {
  const entry = customState.owned[card.id];
  if (!entry) {
    return 0;
  }
  return cardLevel(entry) * card.income * cardMultiplier(card.id, customState);
}

function totalIncome(customState = state) {
  return cards.reduce((sum, card) => sum + cardIncome(card, customState), 0);
}

function totalLevels() {
  return Object.values(state.owned).reduce((sum, entry) => sum + cardLevel(entry), 0);
}

function discoveredCards() {
  return cards.filter((card) => cardXp(state.owned[card.id]) > 0).length;
}

function gachaCost(gacha) {
  return gacha.baseCost;
}

function rarityChance(gacha, rarityId) {
  const total = Object.values(gacha.weights).reduce((sum, value) => sum + value, 0);
  return total === 0 ? 0 : (gacha.weights[rarityId] || 0) / total;
}

function weightedRarity(weights) {
  const total = Object.values(weights).reduce((sum, value) => sum + value, 0);
  let roll = Math.random() * total;

  for (const rarity of rarities) {
    roll -= weights[rarity.id] || 0;
    if (roll <= 0) {
      return rarity.id;
    }
  }

  return "common";
}

function randomCardFromRarity(rarityId) {
  const pool = cards.filter((card) => card.rarity === rarityId);
  return pool[Math.floor(Math.random() * pool.length)];
}

function clearCardRoulette() {
  if (cardRoulette?.timer) {
    window.clearTimeout(cardRoulette.timer);
  }
  cardRoulette = null;
}

function completeCardRouletteImmediately() {
  if (!cardRoulette || cardRoulette.finished) {
    return;
  }

  const finalCardId = cardRoulette.finalCardId;
  if (cardRoulette.timer) {
    window.clearTimeout(cardRoulette.timer);
  }

  if (cardRoulette.pending) {
    const pending = cardRoulette.pending;
    const entry = ownedEntry(finalCardId);
    entry.copies += pending.copies;
    entry.xp = Math.min(cardXp(entry) + pending.xpGain, maxCardXp());
    normalizeCardEntry(entry);
  }

  cardRoulette.finished = true;
  state.lastCardId = finalCardId;
  renderAll();
  saveState();
  clearCardRoulette();
}

function startCardRoulette(finalCardId, pending = null) {
  clearCardRoulette();

  const finalCard = cardById(finalCardId);
  if (!finalCard) {
    return;
  }

  const fakeCards = cards.filter((card) => card.id !== finalCardId);
  const sequence = Array.from({ length: 18 }, () => fakeCards[Math.floor(Math.random() * fakeCards.length)].id);
  sequence.push(finalCardId);

  cardRoulette = {
    finalCardId,
    currentCardId: sequence[0],
    sequence,
    index: 0,
    finished: false,
    pending,
    timer: null
  };

  const delays = [42, 44, 48, 52, 58, 64, 72, 82, 96, 112, 132, 156, 184, 218, 256, 300, 350, 410, 500];

  const advance = () => {
    if (!cardRoulette || cardRoulette.finalCardId !== finalCardId) {
      return;
    }

    cardRoulette.currentCardId = cardRoulette.sequence[cardRoulette.index];
    cardRoulette.index += 1;

    if (cardRoulette.index >= cardRoulette.sequence.length) {
      cardRoulette.currentCardId = finalCardId;
      cardRoulette.timer = window.setTimeout(() => {
        if (cardRoulette?.finalCardId === finalCardId) {
          if (cardRoulette.pending) {
            const pending = cardRoulette.pending;
            const entry = ownedEntry(finalCardId);
            entry.copies += pending.copies;
            entry.xp = Math.min(cardXp(entry) + pending.xpGain, maxCardXp());
            normalizeCardEntry(entry);
          }
          cardRoulette.finished = true;
          state.lastCardId = finalCardId;
          renderAll();
          saveState();
          clearCardRoulette();
        }
      }, 950);
      renderLastCard();
      return;
    }

    renderLastCard();
    cardRoulette.timer = window.setTimeout(advance, delays[Math.min(cardRoulette.index, delays.length - 1)]);
  };

  advance();
}

function enchantCost(cardId) {
  const card = cardById(cardId);
  if (!card) {
    return Infinity;
  }

  const rarity = rarityById(card.rarity);
  const entry = ownedEntry(cardId);
  if (enchantLevel(entry) >= enchantMaterials.length) {
    return Infinity;
  }

  return rarity.baseEnchant;
}

function pullGacha(gachaId) {
  if (cardRoulette && !cardRoulette.finished) {
    completeCardRouletteImmediately();
  }

  const gacha = gachas.find((item) => item.id === gachaId);
  if (!gacha) {
    return;
  }

  const cost = gachaCost(gacha);
  if (state.gold < cost) {
    return;
  }

  unlockAudio();
  playSound("buy");

  state.gold -= cost;
  state.pulls[gacha.id] = (state.pulls[gacha.id] || 0) + 1;

  const rarityId = weightedRarity(gacha.weights);
  const card = randomCardFromRarity(rarityId);
  const rarityRank = rarities.findIndex((rarity) => rarity.id === rarityId);
  const currentEntry = state.owned[card.id];
  const previousLevel = cardLevel(currentEntry);
  const previousXp = cardXp(currentEntry);
  const nextXp = previousLevel >= MAX_CARD_LEVEL ? previousXp : Math.min(previousXp + XP_PER_CARD_PULL, maxCardXp());
  const xpGain = nextXp - previousXp;
  const nextLevel = cardLevel({ ...currentEntry, xp: nextXp });
  const progress = cardXpProgress({ ...currentEntry, xp: nextXp });

  state.selectedCardId = card.id;
  state.log.unshift({
    cardId: card.id,
    gachaId: gacha.id,
    level: nextLevel,
    leveledUp: nextLevel > previousLevel,
    gainedXp: nextXp > previousXp ? XP_PER_CARD_PULL : 0,
    xpCurrent: progress.current,
    xpRequired: progress.required,
    time: Date.now()
  });
  state.log = state.log.slice(0, 8);
  startCardRoulette(card.id, { copies: 1, xpGain });

  if (rarityRank >= 4) {
    playSound("rarePull", { rarityId, delay: 0.18 });
  } else if (nextLevel > previousLevel) {
    playSound("levelUp", { rarityId, delay: 0.16 });
  } else {
    playSound("pull", { rarityId, delay: 0.12 });
  }

  renderAll();
  saveState();
}

function enchantSelected() {
  if (!state.selectedCardId) {
    return;
  }

  const entry = ownedEntry(state.selectedCardId);
  if (cardLevel(entry) <= 0) {
    return;
  }

  const currentLevel = enchantLevel(entry);
  if (currentLevel >= enchantMaterials.length) {
    return;
  }

  const cost = enchantCost(state.selectedCardId);
  if (state.gold < cost) {
    return;
  }

  unlockAudio();

  const rolledMaterial = rollEnchantMaterial();
  const rolledLevel = enchantMaterialLevel(rolledMaterial);
  const upgraded = rolledLevel > currentLevel;

  state.gold -= cost;
  entry.enchant = rolledLevel;

  playSound(upgraded ? "enchantSuccess" : "enchantFail");

  enchantEffect = {
    cardId: state.selectedCardId,
    materialId: rolledMaterial.id,
    upgraded,
    until: Date.now() + 900
  };
  const activeEffect = enchantEffect;
  renderAll();
  window.setTimeout(() => {
    if (enchantEffect === activeEffect) {
      enchantEffect = null;
      renderCollection();
      renderLastCard();
      renderSelected();
    }
  }, 920);
  saveState();
}

function resetGame() {
  const confirmed = window.confirm("Reiniciar la partida y borrar el progreso?");
  if (!confirmed) {
    return;
  }

  clearCardRoulette();
  state = createInitialState();
  saveState();
  unlockAudio();
  playSound("reset");
  renderAll();
}

function createCardElement(card, options = {}) {
  const entry = state.owned[card.id] || { copies: 0, xp: 0, enchant: 0 };
  const preview = Boolean(options.preview);
  const lockedPreview = Boolean(options.locked && !options.roulette);
  const rarity = rarityById(card.rarity);
  const level = cardLevel(entry);
  const xpProgress = cardXpProgress(entry);
  const isRoulettePreview = Boolean(options.roulette && preview && !options.reveal);
  const unlocked = !lockedPreview && (preview || level > 0 || options.reveal || isRoulettePreview);
  const material = lockedPreview || isRoulettePreview || preview ? baseEnchantMaterial : currentEnchantMaterial(entry);
  const isEnchanted = !preview && !isRoulettePreview && !lockedPreview && unlocked && enchantLevel(entry) > 0;
  const isFlashing = unlocked && enchantEffect?.cardId === card.id && Date.now() < enchantEffect.until;
  const effectMaterial = isFlashing ? enchantMaterialById(enchantEffect.materialId) : material;
  const shell = document.createElement("article");
  shell.className = `card-shell ${options.big ? "big" : ""} ${options.mini ? "mini" : ""} ${unlocked ? "" : "locked"} ${isEnchanted ? "enchanted-card" : ""} ${isFlashing ? "enchant-flash" : ""} ${options.roulette ? "roulette-card" : ""} ${options.rouletteFinal ? "roulette-final" : ""}`;
  shell.style.setProperty("--rarity-color", rarity.color);
  shell.style.setProperty("--mineral-color", unlocked ? effectMaterial.color : baseEnchantMaterial.color);

  const showActualCardName = options.roulette || unlocked || options.reveal;
  if (showActualCardName) {
    shell.classList.add('has-art');
  }
  const displayedName = showActualCardName ? card.name : "Carta oculta";
  const displayedRarity = showActualCardName ? rarity.name : "???";
  const displayedIncome = options.roulette ? "Girando" : (preview ? "Girando" : (unlocked ? `${formatNumber(cardIncome(card))}/s` : "???"));
  const copyText = options.roulette ? "??" : (unlocked ? `Nv.${level}` : "Nv.0");
  const enchantText = options.roulette ? "???" : (unlocked ? `${material.short} x${formatMultiplier(material.multiplier)}` : "???");
  const xpText = options.roulette ? "Ruleta" : (unlocked
    ? (xpProgress.isMax ? "XP max" : `${xpProgress.current}/${xpProgress.required} XP`)
    : `0/${xpRequiredForLevel(1)} XP`);
  const xpPercent = options.roulette ? 100 : xpProgress.percent;

  shell.innerHTML = `
    <span class="enchant-glint" aria-hidden="true"></span>
    <div class="card-topline">
      <span class="rarity-short">${rarity.short}</span>
      <span class="copy-count">${copyText}</span>
    </div>
    <div class="card-art" aria-hidden="true"></div>
    <div class="sigil" aria-hidden="true"><span>${unlocked || options.reveal ? card.sigil : "?"}</span></div>
    <div class="card-content">
      <div>
        <h3 class="card-name">${displayedName}</h3>
        <div class="card-rarity">${displayedRarity}</div>
      </div>
      <div class="xp-track" aria-label="${xpText}">
        <span class="xp-fill" style="width: ${xpPercent}%"></span>
        <span class="xp-text">${xpText}</span>
      </div>
      <div class="card-bottomline">
        <span class="card-income">${displayedIncome}</span>
        <span class="enchant-count">${enchantText}</span>
      </div>
    </div>
  `;

  // Insert image with robust fallback: try PNG, then JPG, then remote placeholder.
  if (showActualCardName) {
    const art = shell.querySelector('.card-art');
    const img = document.createElement('img');
    img.alt = card.name;

    const pngSrc = `images/${card.id}.png`;
    const jpgSrc = `images/${card.id}.jpg`;
    const placeholder = `https://picsum.photos/seed/${encodeURIComponent(card.id)}/600/840`;

    // Only show local artwork if a local file exists. If not, keep the default sigil.
    if (showActualCardName && localImageMap && localImageMap[card.id]) {
      const art = shell.querySelector('.card-art');
      const img = document.createElement('img');
      img.alt = card.name;
      img.className = 'card-art';
      const ext = localImageMap[card.id];
      img.src = `images/${card.id}.${ext}`;
      img.addEventListener('error', function handleFinalError() {
        console.error(`Local image failed to load for ${card.id}`);
        art.innerHTML = '';
        const msg = document.createElement('div');
        msg.className = 'no-art';
        msg.textContent = 'Imagen no encontrada';
        art.appendChild(msg);
        img.removeEventListener('error', handleFinalError);
      });
      img.addEventListener('load', () => adjustImageFit(img));
      shell.classList.add('has-art');
      art.appendChild(img);
    }
  }

  return shell;
}

function renderStats() {
  const displayedGold = Math.floor(state.gold);
  elements.gold.textContent = money(displayedGold);
  elements.income.textContent = `${formatNumber(totalIncome())}/s`;
  elements.cards.textContent = `${totalLevels()} nv (${discoveredCards()}/${cards.length})`;

  if (displayedGold > previousGoldValue) {
    elements.gold.classList.remove("gold-increase");
    void elements.gold.offsetWidth;
    elements.gold.classList.add("gold-increase");
    if (goldPulseTimer) {
      window.clearTimeout(goldPulseTimer);
    }
    goldPulseTimer = window.setTimeout(() => {
      elements.gold.classList.remove("gold-increase");
      goldPulseTimer = null;
    }, 620);
  }

  previousGoldValue = displayedGold;
}

function renderGachas() {
  elements.gachaList.innerHTML = "";

  for (const gacha of gachas) {
    const cost = gachaCost(gacha);
    const button = document.createElement("button");
    button.className = "gacha-button";
    button.type = "button";
    button.disabled = state.gold < cost;
    button.style.setProperty("--gacha-color", gacha.color);
    button.addEventListener("click", () => pullGacha(gacha.id));

    const odds = rarities
      .map((rarity) => {
        const chance = rarityChance(gacha, rarity.id);
        if (chance <= 0) {
          return "";
        }
        const label = chance < 0.01 ? "&lt;1%" : `${Math.round(chance * 100)}%`;
        return `<span class="odd-chip">${rarity.short} ${label}</span>`;
      })
      .join("");

    button.innerHTML = `
      <div class="gacha-main">
        <div class="gacha-title">
          <span class="gacha-icon" aria-hidden="true">${gacha.icon}</span>
          <span>${gacha.name}</span>
        </div>
        <span class="gacha-cost">${money(cost)}</span>
      </div>
      <div class="odds">${odds}</div>
    `;

    elements.gachaList.appendChild(button);
  }
}

function renderFilters() {
  elements.rarityFilters.innerHTML = "";
  const filters = [{ id: "all", name: "Todas" }, ...rarities.map((rarity) => ({ id: rarity.id, name: rarity.short }))];

  for (const filter of filters) {
    const button = document.createElement("button");
    button.className = `tab-button ${state.filter === filter.id ? "active" : ""}`;
    button.type = "button";
    button.textContent = filter.name;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", state.filter === filter.id ? "true" : "false");
    button.addEventListener("click", () => {
      unlockAudio();
      playSound("ui");
      state.filter = filter.id;
      renderCollection();
      renderFilters();
      saveState();
    });
    elements.rarityFilters.appendChild(button);
  }
}

function renderCollection() {
  const filteredCards = state.filter === "all" ? cards : cards.filter((card) => card.rarity === state.filter);
  elements.collectionGrid.innerHTML = "";
  elements.collectionSummary.textContent = `${discoveredCards()} descubiertas de ${cards.length}. ${totalLevels()} niveles totales con XP por tirada.`;

  for (const card of filteredCards) {
    const button = document.createElement("button");
    button.className = `card-button ${state.selectedCardId === card.id ? "selected" : ""}`;
    button.type = "button";
    button.addEventListener("click", () => {
      unlockAudio();
      playSound("ui");
      state.selectedCardId = card.id;
      renderCollection();
      renderSelected();
      saveState();
    });

    button.appendChild(createCardElement(card, { mini: true }));
    elements.collectionGrid.appendChild(button);
  }
}

function renderLastCard() {
  elements.lastCardSlot.innerHTML = "";
  elements.lastCardSlot.classList.remove("roulette-active", "roulette-done");

  if (cardRoulette) {
    const spinningCard = cardById(cardRoulette.currentCardId) || cardById(cardRoulette.finalCardId);
    const spinningRarity = rarityById(spinningCard.rarity);
    const isDone = cardRoulette.finished;
    elements.lastCardSlot.classList.add("roulette-active");
    elements.lastCardSlot.classList.toggle("roulette-done", isDone);
    elements.lastCardSlot.appendChild(createCardElement(spinningCard, {
      big: true,
      reveal: isDone,
      preview: !isDone,
      locked: !isDone,
      roulette: true,
      rouletteFinal: isDone
    }));
    elements.lastCardTitle.textContent = isDone ? spinningCard.name : `Girando: ${spinningCard.name}`;
    elements.lastCardText.textContent = isDone
      ? `${spinningRarity.name}. La ruleta se detuvo.`
      : `${spinningRarity.name}. Esta carta está pasando por la ruleta.`;
    return;
  }

  if (!state.lastCardId) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Tu proxima carta aparece aqui.";
    elements.lastCardSlot.appendChild(empty);
    elements.lastCardTitle.textContent = "Abre un sobre";
    elements.lastCardText.textContent = "Empiezas con oro suficiente para tu primer gacha.";
    return;
  }

  const card = cardById(state.lastCardId);
  const rarity = rarityById(card.rarity);
  const entry = state.owned[card.id];
  const level = cardLevel(entry);
  const xpProgress = cardXpProgress(entry);
  const material = currentEnchantMaterial(entry);
  elements.lastCardSlot.appendChild(createCardElement(card, { big: true, reveal: true }));
  elements.lastCardTitle.textContent = card.name;
  const xpText = xpProgress.isMax ? "XP maximo" : `${xpProgress.current}/${xpProgress.required} XP`;
  elements.lastCardText.textContent = `${rarity.name}. Nivel ${level}/${MAX_CARD_LEVEL}, ${xpText}. ${material.name} x${formatMultiplier(material.multiplier)}. Produce ${formatNumber(cardIncome(card))} oro por segundo.`;
}

function renderSelected() {
  elements.selectedCardSlot.innerHTML = "";
  elements.selectedDetails.innerHTML = "";

  const selected = state.selectedCardId ? cardById(state.selectedCardId) : null;
  const owned = selected ? state.owned[selected.id] : null;

  if (!selected || !owned || cardLevel(owned) <= 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Selecciona una carta descubierta.";
    elements.selectedCardSlot.appendChild(empty);
    elements.enchantButton.textContent = "Encantar";
    elements.enchantButton.disabled = true;
    return;
  }

  const rarity = rarityById(selected.rarity);
  const currentMaterial = currentEnchantMaterial(owned);
  const currentLevel = enchantLevel(owned);
  const atMax = currentLevel >= enchantMaterials.length;
  const level = cardLevel(owned);
  const xpProgress = cardXpProgress(owned);
  const cost = enchantCost(selected.id);
  const bestIncome = MAX_CARD_LEVEL * selected.income * enchantMaterials[enchantMaterials.length - 1].multiplier;
  const activeRoll = enchantEffect?.cardId === selected.id && Date.now() < enchantEffect.until
    ? enchantMaterialById(enchantEffect.materialId)
    : null;
  elements.selectedCardSlot.appendChild(createCardElement(selected, { big: true }));

  const details = [
    ["Rareza", rarity.name],
    ["Nivel", `${level}/${MAX_CARD_LEVEL}`],
    ["XP", xpProgress.isMax ? "Maximo" : `${xpProgress.current}/${xpProgress.required}`],
    ["Mineral", `${currentMaterial.name} x${formatMultiplier(currentMaterial.multiplier)}`],
    ["Produccion", `${formatNumber(cardIncome(selected))}/s`],
    ["Tirada", activeRoll ? `${activeRoll.name} ${enchantEffect.upgraded ? "aplicado" : "sin mejora"}` : `Aleatoria, diamante ${diamondChance()}%`],
    ["Mejor posible", `${formatNumber(bestIncome)}/s`],
    ["Costo por rareza", atMax ? "Maximo" : money(cost)]
  ];

  for (const [label, value] of details) {
    const row = document.createElement("div");
    row.className = "detail-row";
    row.innerHTML = `<span>${label}</span><strong>${value}</strong>`;
    elements.selectedDetails.appendChild(row);
  }

  elements.enchantButton.textContent = atMax ? "Diamante alcanzado" : `Encantar aleatorio (${money(cost)})`;
  elements.enchantButton.disabled = atMax || state.gold < cost;
}

function renderLog() {
  elements.pullLog.innerHTML = "";

  if (state.log.length === 0) {
    const empty = document.createElement("div");
    empty.className = "log-entry";
    empty.innerHTML = `<span class="log-dot"></span><strong>Sin tiradas</strong><span>--</span>`;
    elements.pullLog.appendChild(empty);
    return;
  }

  for (const entry of state.log) {
    const card = cardById(entry.cardId);
    const gacha = gachas.find((item) => item.id === entry.gachaId);
    if (!card || !gacha) {
      continue;
    }

    const rarity = rarityById(card.rarity);
    const levelText = entry.leveledUp === false
      ? "+0 XP"
      : entry.leveledUp
        ? `Nv.${entry.level}`
        : `+${entry.gainedXp || XP_PER_CARD_PULL} XP`;
    const row = document.createElement("div");
    row.className = "log-entry";
    row.style.setProperty("--rarity-color", rarity.color);
    row.innerHTML = `
      <span class="log-dot" aria-hidden="true"></span>
      <strong>${card.name}</strong>
      <span>${levelText}</span>
    `;
    elements.pullLog.appendChild(row);
  }
}

function renderAll() {
  renderStats();
  renderSoundButton();
  renderMusicButton();
  renderGachas();
  renderFilters();
  renderCollection();
  renderLastCard();
  renderSelected();
  renderLog();
}

function tick() {
  const now = Date.now();
  const delta = (now - lastTick) / 1000;
  lastTick = now;

  const income = totalIncome();
  if (income > 0) {
    state.gold += income * delta;
  }

  saveTimer += delta;
  renderStats();
  renderGachas();
  renderSelected();

  if (saveTimer >= 2) {
    saveTimer = 0;
    saveState();
  }
}

elements.enchantButton.addEventListener("click", enchantSelected);
if (elements.soundButton) {
  elements.soundButton.addEventListener("click", toggleSound);
}
if (elements.musicButton) {
  elements.musicButton.addEventListener("click", toggleMusic);
}
elements.resetButton.addEventListener("click", resetGame);

renderAll();
setInterval(tick, 500);
// Double-clicking on card art toggles image fit mode (contain <-> cover)
document.addEventListener('dblclick', (e) => {
  try {
    if (e.target && e.target.closest && e.target.closest('.card-art')) {
      toggleImageFit();
      console.info('Image fit mode:', imageFitMode);
      if (typeof playSound === 'function') playSound('ui');
    }
  } catch (err) {
    // ignore
  }
});
// Start scanning local images in background; when done, UI will update.
scanLocalImages().catch((e) => console.warn('Local image scan failed', e));
