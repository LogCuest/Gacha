const SAVE_KEY = "forja-cartas-v1";
const SOUND_KEY = "forja-cartas-sound-v1";
const MUSIC_KEY = "forja-cartas-music-v1";
const MUSIC_LOOP_SECONDS = 12.8;
const DEFAULT_MUSIC_FILES = [
  "music/track1.mp3",
  "music/toucanmusic-las-vegas-407027.mp3"
];
const MAX_CARD_LEVEL = 20;
const MAX_ACTIVE_MOVES = 4;
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
  { id: "mythic", name: "Mitico", short: "M", color: "var(--mythic)", baseEnchant: 270000 },
  { id: "special", name: "Especial", short: "S", color: "var(--special)", baseEnchant: 500000 },
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
  { id: "medusa-stone", name: "Medusa Maldita", rarity: "veryRare", income: 48, sigil: "MD" },
  { id: "aboleth-mind", name: "Aboleth Antiguo", rarity: "veryRare", income: 56, sigil: "AB" },
  { id: "yuan-ti", name: "Yuan-ti Supremo", rarity: "veryRare", income: 64, sigil: "YT" },
  { id: "gorgon-breath", name: "Gorgona Petrificante", rarity: "veryRare", income: 72, sigil: "GO" },
  { id: "giant-serpent", name: "Serpiente Gigante", rarity: "veryRare", income: 82, sigil: "SG" },

  // LEGENDARY
  { id: "sun-queen", name: "Quimera Alada", rarity: "legendary", income: 54, sigil: "QI" },
  { id: "golden-pact", name: "Esfinge Antigua", rarity: "legendary", income: 66, sigil: "ES" },
  { id: "ember-saint", name: "Vampiro Noble", rarity: "legendary", income: 78, sigil: "VA" },
  { id: "last-banner", name: "Hidra de Nueve Cabezas", rarity: "legendary", income: 94, sigil: "HI" },
  { id: "sunken-throne", name: "Kraken Abisal", rarity: "legendary", income: 110, sigil: "KR" },
  { id: "celestial-hammer", name: "Ángel Exiliado", rarity: "legendary", income: 128, sigil: "AN" },
  { id: "void-cathedral", name: "Dragón Espectral", rarity: "legendary", income: 146, sigil: "DE" },
  { id: "infernal-gate", name: "Archidemonio Balor", rarity: "legendary", income: 172, sigil: "BL" },
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
  { id: "obsidian-reign", name: "Dios Liche", rarity: "artifact", income: 760, sigil: "RL" },
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

  // Specials
{ id: "tests-card", name: "Aguila Sensual", rarity: "special", income: 0, sigil: "EC" },
{ id: "Cat", name: "Gato Astral", rarity: "special", income: 0, sigil: "GA" },

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
    weights: { common: 15, uncommon: 80, rare: 230, veryRare: 330, legendary: 250, artifact: 85, mythic: 10, special: 0.1 }
  },
  {
    id: "cosmic",
    name: "Puerta Mitica",
    icon: "VII",
    color: "#ce3e72",
    baseCost: 900000,
    growth: 1.125,
    weights: { common: 0, uncommon: 25, rare: 105, veryRare: 260, legendary: 340, artifact: 220, mythic: 50, special: 5 }
  }
];

const pullBatchModes = [
  { count: 1, label: "x1", rareChanceFactor: 1 },
  { count: 10, label: "x10", rareChanceFactor: 0.5 },
  { count: 50, label: "x50", rareChanceFactor: 0.25 },
  { count: 100, label: "x100", rareChanceFactor: 0.1 }
];

const pullBatchPenalizedRarities = new Set(["rare", "veryRare", "legendary", "artifact", "mythic", "special"]);

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

const roleDefinitions = [
  {
    id: "attack",
    name: "Ataque",
    short: "AT",
    color: "#d7472f",
    passive: "Aumenta recompensas de expediciones."
  },
  {
    id: "defense",
    name: "Defensa",
    short: "DF",
    color: "#2c6fd1",
    passive: "Reduce la duracion de expediciones."
  },
  {
    id: "magic",
    name: "Magia",
    short: "MG",
    color: "#7b4fca",
    passive: "Reduce el costo de encantamientos."
  },
  {
    id: "support",
    name: "Soporte",
    short: "SP",
    color: "#159b61",
    passive: "Aumenta la XP ganada por tirada."
  },
  {
    id: "economy",
    name: "Economia",
    short: "EC",
    color: "#ce942f",
    passive: "Aumenta el oro pasivo total."
  }
];

const uniqueAbilitiesByRole = {
  attack: {
    name: "Marca de Cazador",
    description: "+8% recompensa de expediciones."
  },
  defense: {
    name: "Campamento Seguro",
    description: "-4% duracion de expediciones."
  },
  magic: {
    name: "Sello Astral",
    description: "-2% costo de encantamientos."
  },
  support: {
    name: "Mentor Oculto",
    description: "+1 XP por tirada."
  },
  economy: {
    name: "Tesoro Vivo",
    description: "+8% produccion de esta carta."
  }
};

const BASE_UNIQUE_CHANCE = 0.008;

const roleMoves = {
  attack: [
    { id: "heavy_strike", name: "Golpe feroz", description: "Mucho dano directo.", unlockLevel: 1, damage: 1.25 },
    { id: "execute", name: "Remate", description: "Mas fuerte contra enemigos heridos.", unlockLevel: 1, damage: 0.9, execute: true },
    { id: "bleeding_cut", name: "Corte sangrante", description: "Golpe fuerte y preciso.", unlockLevel: 4, damage: 1.05, goldBonus: 0.08 },
    { id: "battle_roar", name: "Rugido de guerra", description: "Dano medio y XP extra.", unlockLevel: 8, damage: 0.88, xpBonus: 3 },
    { id: "meteor_charge", name: "Carga meteoro", description: "Ataque brutal de alto dano.", unlockLevel: 13, damage: 1.55 }
  ],
  defense: [
    { id: "harden", name: "Endurecer", description: "Gana escudo y recibe menos dano.", unlockLevel: 1, damage: 0.25, shield: 1.15 },
    { id: "body_blow", name: "Golpe cuerpo", description: "Dano medio y algo de escudo.", unlockLevel: 1, damage: 0.82, shield: 0.35 },
    { id: "shield_bash", name: "Escudazo", description: "Dano firme y mucho escudo.", unlockLevel: 4, damage: 0.62, shield: 0.78 },
    { id: "iron_wall", name: "Muro de hierro", description: "Casi no dana, bloquea muchisimo.", unlockLevel: 8, damage: 0.18, shield: 1.65 },
    { id: "counter_guard", name: "Guardia contraria", description: "Escudo alto con buen golpe.", unlockLevel: 13, damage: 0.95, shield: 0.7 }
  ],
  magic: [
    { id: "arcane_bolt", name: "Rayo arcano", description: "Dano estable y preciso.", unlockLevel: 1, damage: 1.05 },
    { id: "mystic_barrier", name: "Barrera mistica", description: "Escudo magico con contraataque.", unlockLevel: 1, damage: 0.62, shield: 0.7 },
    { id: "mana_burst", name: "Estallido mana", description: "Dano alto de energia pura.", unlockLevel: 4, damage: 1.28 },
    { id: "rune_prison", name: "Prision runica", description: "Dano y barrera estable.", unlockLevel: 8, damage: 0.78, shield: 0.95 },
    { id: "starfall", name: "Lluvia estelar", description: "Hechizo enorme de mucho dano.", unlockLevel: 13, damage: 1.62 }
  ],
  support: [
    { id: "inspire", name: "Inspirar", description: "Cura y prepara el siguiente golpe.", unlockLevel: 1, damage: 0.52, heal: 0.65 },
    { id: "quick_hit", name: "Golpe rapido", description: "Dano agil y recompensa de XP.", unlockLevel: 1, damage: 0.86, xpBonus: 2 },
    { id: "healing_note", name: "Nota curativa", description: "Cura fuerte con dano bajo.", unlockLevel: 4, damage: 0.34, heal: 1.05 },
    { id: "team_spark", name: "Chispa guia", description: "Dano y buena XP extra.", unlockLevel: 8, damage: 0.72, xpBonus: 5 },
    { id: "heroic_pulse", name: "Pulso heroico", description: "Cura y golpea con fuerza.", unlockLevel: 13, damage: 1.02, heal: 0.72 }
  ],
  economy: [
    { id: "coin_toss", name: "Monedazo", description: "Dano y oro extra si ganas.", unlockLevel: 1, damage: 0.78, goldBonus: 0.16 },
    { id: "good_deal", name: "Trato astuto", description: "Escudo y oro extra si ganas.", unlockLevel: 1, damage: 0.48, shield: 0.55, goldBonus: 0.28 },
    { id: "gold_rush", name: "Fiebre de oro", description: "Dano con oro extra alto.", unlockLevel: 4, damage: 0.82, goldBonus: 0.32 },
    { id: "safe_bet", name: "Apuesta segura", description: "Escudo y oro moderado.", unlockLevel: 8, damage: 0.54, shield: 0.85, goldBonus: 0.22 },
    { id: "jackpot_hit", name: "Golpe jackpot", description: "Mucho dano y gran botin.", unlockLevel: 13, damage: 1.18, goldBonus: 0.42 }
  ]
};

const battleEnemies = [
  "Bandido de cobre",
  "Sombra errante",
  "Mercenario roto",
  "Centinela del polvo",
  "Duelista hueco",
  "Guarda de ruinas",
  "Eco del abismo"
];

const battleModes = [
  {
    id: "training",
    name: "Entrenamiento",
    short: "FACIL",
    color: "#18845b",
    unlockLevel: 0,
    enemyRarities: ["common", "uncommon"],
    enemyHpMultiplier: 0.72,
    enemyAttackMultiplier: 0.68,
    rewardMultiplier: 0.65,
    description: "Riesgo bajo para probar cartas nuevas."
  },
  {
    id: "duel",
    name: "Duelo de cartas",
    short: "NORMAL",
    color: "#2c6fd1",
    unlockLevel: 5,
    enemyRarities: ["common", "uncommon", "rare"],
    enemyHpMultiplier: 1,
    enemyAttackMultiplier: 1,
    rewardMultiplier: 1,
    description: "Pelea pareja contra cartas del mazo."
  },
  {
    id: "elite",
    name: "Liga rara",
    short: "DIFICIL",
    color: "#7b4fca",
    unlockLevel: 20,
    enemyRarities: ["rare", "veryRare"],
    enemyHpMultiplier: 1.45,
    enemyAttackMultiplier: 1.28,
    rewardMultiplier: 1.9,
    description: "Enemigos fuertes y recompensas mejores."
  },
  {
    id: "champions",
    name: "Campeones",
    short: "EXTREMO",
    color: "#ce942f",
    unlockLevel: 55,
    enemyRarities: ["veryRare", "legendary", "artifact"],
    enemyHpMultiplier: 2.15,
    enemyAttackMultiplier: 1.78,
    rewardMultiplier: 3.25,
    description: "Cartas de alto rango con botin grande."
  },
  {
    id: "mythic_gate",
    name: "Puerta mitica",
    short: "MITICO",
    color: "#ce3e72",
    unlockLevel: 110,
    enemyRarities: ["legendary", "artifact", "mythic", "special"],
    enemyHpMultiplier: 3.35,
    enemyAttackMultiplier: 2.45,
    rewardMultiplier: 5.5,
    description: "Una pelea brutal por recompensas enormes."
  }
];

const expeditions = [
  {
    id: "border_patrol",
    name: "Patrulla de la Frontera",
    role: "attack",
    unlockLevel: 5,
    recommendedPower: 5,
    duration: 300,
    gold: 180,
    xp: 3,
    description: "Una salida corta para que cualquier carta gane oro y practica."
  },
  {
    id: "old_ruins",
    name: "Ruinas Antiguas",
    role: "magic",
    unlockLevel: 15,
    recommendedPower: 12,
    duration: 600,
    gold: 520,
    xp: 4,
    description: "Explora restos arcanos con la carta que elijas."
  },
  {
    id: "trade_route",
    name: "Ruta Mercante",
    role: "economy",
    unlockLevel: 30,
    recommendedPower: 22,
    duration: 900,
    gold: 1450,
    xp: 5,
    description: "Protege un envio largo y vuelve con oro estable."
  },
  {
    id: "silent_fort",
    name: "Fuerte Silencioso",
    role: "defense",
    unlockLevel: 55,
    recommendedPower: 38,
    duration: 1500,
    gold: 3900,
    xp: 6,
    description: "Una guardia prolongada para cartas de cualquier rol."
  },
  {
    id: "healing_grove",
    name: "Arboleda del Juramento",
    role: "support",
    unlockLevel: 85,
    recommendedPower: 55,
    duration: 2400,
    gold: 9400,
    xp: 8,
    description: "Un encargo largo que premia constancia con XP extra."
  },
  {
    id: "cosmic_gate",
    name: "Puerta Cosmica",
    role: "magic",
    unlockLevel: 130,
    recommendedPower: 85,
    duration: 3600,
    gold: 26000,
    xp: 10,
    description: "Una expedicion mayor para cartas bien entrenadas."
  }
];

const initialState = {
  gold: 80,
  owned: {},
  pulls: {},
  selectedCardId: null,
  lastCardId: null,
  lastReveal: null,
  log: [],
  expeditions: {},
  battle: null,
  selectedBattleMode: "training",
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
    lastReveal: null,
    log: [],
    expeditions: {},
    battle: null,
    selectedBattleMode: "training",
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
const MUSIC_VOL_KEY = 'forja-music-volume';
let musicVolume = Number(localStorage.getItem(MUSIC_VOL_KEY));
if (!Number.isFinite(musicVolume)) musicVolume = 0.42;

function setMusicVolume(v) {
  musicVolume = Number(v);
  try { localStorage.setItem(MUSIC_VOL_KEY, String(musicVolume)); } catch (e) {}
  if (musicAudioElement) musicAudioElement.volume = musicVolume;
}

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
  renderBattle();
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
  battleModeList: document.querySelector("#battleModeList"),
  battleArena: document.querySelector("#battleArena"),
  pullLog: document.querySelector("#pullLog"),
  expeditionList: document.querySelector("#expeditionList"),
  toastStack: document.querySelector("#toastStack"),
  soundButton: document.querySelector("#soundButton"),
  musicButton: document.querySelector("#musicButton"),
  musicVolume: document.querySelector("#musicVolume"),
  playMusicButton: document.querySelector("#playMusicButton"),
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

function rarityRankById(rarityId) {
  return Math.max(0, rarities.findIndex((rarity) => rarity.id === rarityId));
}

function cardById(id) {
  return cards.find((card) => card.id === id);
}

function ownedEntry(cardId) {
  if (!state.owned[cardId]) {
    state.owned[cardId] = { copies: 0, xp: 0, enchant: 0, uniqueUnlocked: false };
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
      lastReveal: saved.lastReveal || null,
      expeditions: saved.expeditions && typeof saved.expeditions === "object" ? saved.expeditions : {},
      battle: saved.battle && typeof saved.battle === "object" ? saved.battle : null,
      selectedBattleMode: battleModeById(saved.selectedBattleMode)?.id || initialState.selectedBattleMode,
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

function dismissToast(toast) {
  if (!toast) {
    return;
  }

  toast.classList.add("leaving");
  window.setTimeout(() => toast.remove(), 260);
}

function showPullNotification(cardId, pullInfo = {}) {
  if (!elements.toastStack) {
    return;
  }

  const card = cardById(cardId);
  if (!card) {
    return;
  }

  const rarity = rarityById(card.rarity);
  const role = cardRole(card);
  const batchCount = Math.max(1, Number(pullInfo.batchCount || 1));
  const copies = Math.max(1, Number(pullInfo.copies || 1));
  const totalXpGain = Math.max(0, Math.floor(Number(pullInfo.totalXpGain ?? pullInfo.xpGain ?? 0)));
  const uniqueCount = Math.max(0, Math.floor(Number(pullInfo.uniqueCount || 0)));
  const title = batchCount > 1 ? `Mejor carta de ${batchCount} tiradas` : "Carta obtenida";
  const details = [
    `${rarity.name} - ${role.name}`,
    copies > 1 ? `${copies} copias destacadas` : "+1 copia",
    totalXpGain > 0 ? `+${totalXpGain} XP total` : "XP maximo"
  ];

  if (pullInfo.uniqueUnlocked || uniqueCount > 0) {
    details.push(uniqueCount > 1 ? `${uniqueCount} unicas desbloqueadas` : "Unica desbloqueada");
  }

  const toast = document.createElement("article");
  toast.className = "pull-toast";
  toast.style.setProperty("--rarity-color", rarity.color);
  toast.style.setProperty("--role-color", role.color);
  toast.innerHTML = `
    <div class="toast-sigil" aria-hidden="true">${card.sigil}</div>
    <div class="toast-copy">
      <span>${title}</span>
      <strong>${card.name}</strong>
      <p>${details.join(" - ")}</p>
    </div>
    <button class="toast-close" type="button" aria-label="Cerrar notificacion">x</button>
  `;

  toast.querySelector(".toast-close").addEventListener("click", () => dismissToast(toast));
  elements.toastStack.prepend(toast);

  while (elements.toastStack.children.length > 4) {
    elements.toastStack.lastElementChild?.remove();
  }

  window.setTimeout(() => dismissToast(toast), batchCount > 1 ? 5600 : 4300);
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
  const adjVolume = (Number.isFinite(musicVolume) ? musicVolume : 0.42) * volume;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(adjVolume, start + 0.08);
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

// --- Music playback: local files from /music/ with synth fallback.
let fileMusicList = [];
let musicAudioElement = null;
let musicFileIndex = 0;
let musicStartPromise = null;
let musicPlayBlocked = false;
let musicMode = "none";

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function normalizeMusicPath(path) {
  if (typeof path !== "string") {
    return null;
  }

  const value = path.trim();
  if (!value) {
    return null;
  }

  if (/^[a-z][a-z0-9+.-]*:/i.test(value) || value.startsWith("//") || value.startsWith("/")) {
    return value;
  }

  return value.startsWith("music/") ? value : `music/${value}`;
}

function normalizeMusicFiles(list) {
  if (!Array.isArray(list)) {
    return [];
  }

  const audioExtension = /\.(mp3|ogg|wav|m4a|aac)(?:[?#].*)?$/i;
  const files = list
    .map(normalizeMusicPath)
    .filter(Boolean)
    .filter((path) => audioExtension.test(path));

  return Array.from(new Set(files));
}

function sameMusicFiles(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  const files = new Set(a);
  return b.every((file) => files.has(file));
}

function isFileMusicRunning() {
  return Boolean(
    musicAudioElement
      && musicAudioElement.src
      && !musicAudioElement.paused
      && !musicAudioElement.ended
  );
}

function updatePlayMusicButton() {
  if (!elements.playMusicButton) {
    return;
  }

  const shouldShow = musicEnabled && !isFileMusicRunning() && !musicTimer;
  elements.playMusicButton.style.display = shouldShow ? "" : "none";
  elements.playMusicButton.title = shouldShow ? "Tocar musica" : "Musica activa";
  elements.playMusicButton.setAttribute("aria-label", elements.playMusicButton.title);
}

async function loadMusicFiles() {
  // Try playlist.json first
  try {
    const plist = await fetch('music/playlist.json');
    if (plist.ok) {
      const data = await plist.json();
      const list = Array.isArray(data) ? data : Array.isArray(data.tracks) ? data.tracks : [];
      const mapped = normalizeMusicFiles(list);
      if (mapped.length) {
        console.info('Loaded music playlist.json with', mapped.length, 'entries');
        return mapped;
      }
    }
  } catch (e) {
    // ignore
  }

  // Fallback: try to fetch directory index HTML and parse links (works with simple static servers)
  try {
    const res = await fetch('music/');
    if (!res.ok) {
      throw new Error('Music directory unavailable');
    }
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('text/html')) {
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const anchors = Array.from(doc.querySelectorAll('a'));
      const musicBase = new URL('music/', location.href);
      const files = normalizeMusicFiles(anchors
        .map((a) => a.getAttribute('href'))
        .filter(Boolean)
        .map((href) => {
          try {
            return new URL(href, musicBase).href;
          } catch (e) {
            return href;
          }
        }));
      console.info('Discovered music files from directory index:', files);
      if (files.length) {
        return files;
      }
    }
  } catch (e) {
    // ignore
  }

  return normalizeMusicFiles(DEFAULT_MUSIC_FILES);
}

function ensureMusicAudioElement() {
  if (!musicAudioElement) {
    musicAudioElement = new Audio();
    musicAudioElement.preload = 'auto';
    musicAudioElement.volume = musicVolume;
    musicAudioElement.addEventListener('ended', playNextMusicFile);
    musicAudioElement.addEventListener('playing', () => {
      musicMode = "file";
      musicPlayBlocked = false;
      updatePlayMusicButton();
    });
    musicAudioElement.addEventListener('pause', updatePlayMusicButton);
    musicAudioElement.addEventListener('error', () => {
      if (!musicEnabled || !fileMusicList.length) {
        updatePlayMusicButton();
        return;
      }

      if (fileMusicList.length > 1) {
        playNextMusicFile();
        return;
      }

      musicPlayBlocked = true;
      updatePlayMusicButton();
    });
  }

  return musicAudioElement;
}

async function playCurrentMusicFile() {
  if (!fileMusicList.length) {
    return false;
  }

  const audio = ensureMusicAudioElement();
  if (!audio.src) {
    audio.src = fileMusicList[musicFileIndex];
  }

  audio.volume = musicVolume;
  audio.muted = false;

  try {
    await audio.play();
    musicMode = "file";
    musicPlayBlocked = false;
    updatePlayMusicButton();
    return true;
  } catch (e) {
    musicPlayBlocked = true;
    updatePlayMusicButton();
    console.info('Music playback was blocked; press the play button to start it.', e);
    return false;
  }
}

function playNextMusicFile() {
  if (!musicEnabled || !fileMusicList.length || !musicAudioElement) {
    return;
  }

  musicFileIndex = (musicFileIndex + 1) % fileMusicList.length;
  musicAudioElement.src = fileMusicList[musicFileIndex];
  void playCurrentMusicFile();
}

async function startMusicPlayback(files) {
  const nextFiles = normalizeMusicFiles(files);
  if (!nextFiles.length) {
    return false;
  }

  const audio = ensureMusicAudioElement();
  if (!sameMusicFiles(fileMusicList, nextFiles)) {
    fileMusicList = nextFiles.slice();
    shuffleArray(fileMusicList);
    musicFileIndex = 0;
    audio.src = fileMusicList[musicFileIndex];
  } else if (!audio.src) {
    audio.src = fileMusicList[musicFileIndex];
  }

  if (isFileMusicRunning()) {
    musicMode = "file";
    musicPlayBlocked = false;
    updatePlayMusicButton();
    return true;
  }

  return playCurrentMusicFile();
}

function stopMusicPlayback() {
  try {
    if (musicAudioElement) {
      musicAudioElement.pause();
      musicAudioElement.removeAttribute('src');
      musicAudioElement.load();
      musicAudioElement = null;
    }
  } catch (e) {
    // ignore
  }
  fileMusicList = [];
  musicFileIndex = 0;
  if (musicMode === "file") {
    musicMode = "none";
  }
  updatePlayMusicButton();
}

function startSynthMusic() {
  if (musicTimer) {
    return true;
  }

  const context = getAudioContext();
  if (!context) {
    return false;
  }

  musicMode = "synth";
  musicPlayBlocked = false;
  scheduleBackgroundMusic();
  musicTimer = window.setInterval(scheduleBackgroundMusic, MUSIC_LOOP_SECONDS * 1000);
  updatePlayMusicButton();
  return true;
}

function stopSynthMusic() {
  if (musicTimer) {
    window.clearInterval(musicTimer);
    musicTimer = null;
  }

  for (const node of musicNodes) {
    try {
      if (audioContext) {
        node.gain.gain.cancelScheduledValues(audioContext.currentTime);
        node.gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
        node.oscillator.stop(audioContext.currentTime + 0.02);
      }
    } catch {
      // Some scheduled nodes may already be stopped.
    }
  }
  musicNodes = [];

  if (musicMode === "synth") {
    musicMode = "none";
  }
  updatePlayMusicButton();
}

function startBackgroundMusic() {
  if (!musicEnabled) {
    updatePlayMusicButton();
    return Promise.resolve(false);
  }

  if (isFileMusicRunning() || musicTimer) {
    musicPlayBlocked = false;
    updatePlayMusicButton();
    return Promise.resolve(true);
  }

  if (!musicStartPromise) {
    const knownFiles = fileMusicList.length ? fileMusicList : DEFAULT_MUSIC_FILES;
    if (knownFiles.length) {
      void startMusicPlayback(knownFiles);
    }
  }

  if (musicStartPromise) {
    return musicStartPromise;
  }

  musicStartPromise = loadMusicFiles().then((files) => {
    console.info('loadMusicFiles returned', files && files.length ? files.length : 0, 'files');
    if (!musicEnabled) {
      return false;
    }

    if (files && files.length) {
      stopSynthMusic();
      return startMusicPlayback(files);
    }

    return startSynthMusic();
  }).catch(() => {
    if (!musicEnabled) {
      return false;
    }

    return startSynthMusic();
  }).finally(() => {
    musicStartPromise = null;
    updatePlayMusicButton();
  });

  return musicStartPromise;
}

function stopBackgroundMusic() {
  musicStartPromise = null;
  musicPlayBlocked = false;
  stopSynthMusic();
  stopMusicPlayback();
  musicMode = "none";
  updatePlayMusicButton();
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
  updatePlayMusicButton();
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
  entry.uniqueUnlocked = entry.uniqueUnlocked === true;
  entry.moves = Array.isArray(entry.moves)
    ? Array.from(new Set(entry.moves.filter((moveId) => typeof moveId === "string"))).slice(0, MAX_ACTIVE_MOVES)
    : [];
  entry.pendingMoves = Array.isArray(entry.pendingMoves)
    ? Array.from(new Set(entry.pendingMoves.filter((moveId) => typeof moveId === "string")))
    : [];
  entry.skippedMoves = Array.isArray(entry.skippedMoves)
    ? Array.from(new Set(entry.skippedMoves.filter((moveId) => typeof moveId === "string")))
    : [];
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

function roleById(roleId) {
  return roleDefinitions.find((role) => role.id === roleId) || roleDefinitions[0];
}

function cardRole(card) {
  const id = card.id;

  if (/guard|shield|warden|golem|titan|giant|storm|tarrasque|serpent|minotaur|gorgon|crown|bone-dice|eternal-king/.test(id)) {
    return roleById("defense");
  }

  if (/astral|ashen|lich|void|moon|mirror|star|eclipse|final|forgotten|infinite|celestial|aboleth|medusa|banshee|night|obsidian|elder|abyssal|ancient|cauldron/.test(id)) {
    return roleById("magic");
  }

  if (/river|wild|harpy|sun|doc|ivy|rookie|wolf|owlbear|amber|empress|green-hourglass/.test(id)) {
    return roleById("support");
  }

  if (/copper|gold|silver|tin|rat-lantern|mud|goblin|street|spark|scribe|pact|forge|engine|map|root|hourglass|lantern/.test(id)) {
    return roleById("economy");
  }

  return roleById("attack");
}

function cardUniqueUnlocked(cardId, customState = state) {
  return customState.owned[cardId]?.uniqueUnlocked === true;
}

function uniqueAbilityForCard(card) {
  return uniqueAbilitiesByRole[cardRole(card).id] || uniqueAbilitiesByRole.attack;
}

function allMovesForCard(card) {
  return roleMoves[cardRole(card).id] || roleMoves.attack;
}

function moveById(card, moveId) {
  return allMovesForCard(card).find((move) => move.id === moveId) || null;
}

function defaultMoveIdsForCard(card) {
  return allMovesForCard(card)
    .filter((move) => Number(move.unlockLevel || 1) <= 1)
    .slice(0, MAX_ACTIVE_MOVES)
    .map((move) => move.id);
}

function learnedMoveIdsForLevel(card, level) {
  return allMovesForCard(card)
    .filter((move) => Number(move.unlockLevel || 1) <= level)
    .map((move) => move.id);
}

function syncLearnedMoves(cardId, customState = state, options = {}) {
  const card = cardById(cardId);
  const entry = card ? customState.owned[card.id] : null;
  if (!card || !entry) {
    return [];
  }

  normalizeCardEntry(entry);

  const level = cardLevel(entry);
  if (level <= 0) {
    entry.moves = [];
    entry.pendingMoves = [];
    return [];
  }

  const validMoveIds = allMovesForCard(card).map((move) => move.id);
  const validMoveSet = new Set(validMoveIds);
  entry.moves = entry.moves.filter((moveId) => validMoveSet.has(moveId));
  entry.pendingMoves = entry.pendingMoves.filter((moveId) => validMoveSet.has(moveId) && !entry.moves.includes(moveId));
  entry.skippedMoves = entry.skippedMoves.filter((moveId) => validMoveSet.has(moveId));

  if (entry.moves.length === 0) {
    entry.moves = defaultMoveIdsForCard(card);
  }

  const allowPending = options.allowPending !== false;
  const learnedNow = [];

  for (const moveId of learnedMoveIdsForLevel(card, level)) {
    if (entry.moves.includes(moveId) || entry.pendingMoves.includes(moveId) || entry.skippedMoves.includes(moveId)) {
      continue;
    }

    if (entry.moves.length < MAX_ACTIVE_MOVES) {
      entry.moves.push(moveId);
      learnedNow.push(moveId);
    } else if (allowPending) {
      entry.pendingMoves.push(moveId);
      learnedNow.push(moveId);
    }
  }

  entry.moves = entry.moves.slice(0, MAX_ACTIVE_MOVES);
  entry.pendingMoves = Array.from(new Set(entry.pendingMoves));
  return learnedNow;
}

function knownMoveIdsForCard(card, customState = state) {
  const entry = customState.owned[card.id];
  if (!entry || cardLevel(entry) <= 0) {
    return defaultMoveIdsForCard(card);
  }

  syncLearnedMoves(card.id, customState);
  return entry.moves.length ? entry.moves : defaultMoveIdsForCard(card);
}

function pendingMoveForCard(card) {
  const entry = state.owned[card.id];
  if (!entry) {
    return null;
  }

  syncLearnedMoves(card.id);
  const moveId = entry.pendingMoves[0];
  return moveId ? moveById(card, moveId) : null;
}

function replaceMove(cardId, oldMoveId, newMoveId) {
  const card = cardById(cardId);
  const entry = card ? ownedEntry(card.id) : null;
  if (!card || !entry || !moveById(card, oldMoveId) || !moveById(card, newMoveId)) {
    return;
  }

  syncLearnedMoves(card.id);
  const oldIndex = entry.moves.indexOf(oldMoveId);
  if (oldIndex === -1 || !entry.pendingMoves.includes(newMoveId)) {
    return;
  }

  entry.moves[oldIndex] = newMoveId;
  entry.pendingMoves = entry.pendingMoves.filter((moveId) => moveId !== newMoveId);
  entry.skippedMoves = entry.skippedMoves.filter((moveId) => moveId !== newMoveId);
  normalizeCardEntry(entry);
  playSound("ui");
  renderAll();
  saveState();
}

function skipPendingMove(cardId, moveId) {
  const card = cardById(cardId);
  const entry = card ? ownedEntry(card.id) : null;
  if (!card || !entry) {
    return;
  }

  entry.pendingMoves = entry.pendingMoves.filter((pendingMoveId) => pendingMoveId !== moveId);
  if (!entry.skippedMoves.includes(moveId)) {
    entry.skippedMoves.push(moveId);
  }
  normalizeCardEntry(entry);
  playSound("ui");
  renderSelected();
  renderBattle();
  saveState();
}

function roleScores(customState = state) {
  return roleDefinitions.reduce((scores, role) => {
    scores[role.id] = 0;
    return scores;
  }, {});
}

function collectionRoleScores(customState = state) {
  const scores = roleScores(customState);

  for (const card of cards) {
    const entry = customState.owned[card.id];
    const level = cardLevel(entry);
    if (level <= 0) {
      continue;
    }

    const role = cardRole(card);
    const uniqueBonus = cardUniqueUnlocked(card.id, customState) ? 4 : 0;
    scores[role.id] += level + enchantLevel(entry) * 0.4 + uniqueBonus;
  }

  return scores;
}

function uniqueRoleCounts(customState = state) {
  const counts = roleScores(customState);

  for (const card of cards) {
    if (cardUniqueUnlocked(card.id, customState)) {
      counts[cardRole(card).id] += 1;
    }
  }

  return counts;
}

function passiveModifiers(customState = state) {
  const scores = collectionRoleScores(customState);
  const uniqueCounts = uniqueRoleCounts(customState);

  return {
    incomeBonus: Math.min(0.65, scores.economy * 0.004 + uniqueCounts.economy * 0.025),
    pullXpBonus: Math.min(6, Math.floor(scores.support / 18) + uniqueCounts.support),
    enchantDiscount: Math.min(0.35, scores.magic * 0.003 + uniqueCounts.magic * 0.02),
    expeditionRewardBonus: Math.min(0.85, scores.attack * 0.006 + uniqueCounts.attack * 0.08),
    expeditionTimeDiscount: Math.min(0.45, scores.defense * 0.004 + uniqueCounts.defense * 0.04),
    uniqueChanceBonus: Math.min(0.012, scores.support * 0.00015 + uniqueCounts.support * 0.001)
  };
}

function xpGainPerPull(customState = state) {
  return XP_PER_CARD_PULL + passiveModifiers(customState).pullXpBonus;
}

function formatPercent(value, decimals = 0) {
  return `${(value * 100).toFixed(decimals)}%`;
}

function uniqueAbilityChance(card, customState = state) {
  const rarityRank = Math.max(0, rarities.findIndex((rarity) => rarity.id === card.rarity));
  return Math.min(0.035, BASE_UNIQUE_CHANCE + rarityRank * 0.002 + passiveModifiers(customState).uniqueChanceBonus);
}

function rollUniqueAbility(card, entry) {
  if (entry?.uniqueUnlocked) {
    return false;
  }

  return Math.random() < uniqueAbilityChance(card);
}

function passiveSummary() {
  const modifiers = passiveModifiers();
  const parts = [
    `+${formatPercent(modifiers.incomeBonus, 1)} oro`,
    `+${modifiers.pullXpBonus} XP/tirada`,
    `-${formatPercent(modifiers.enchantDiscount, 1)} encanto`
  ];
  return parts.join(", ");
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
  const role = cardRole(card);
  const uniqueMultiplier = role.id === "economy" && cardUniqueUnlocked(card.id, customState) ? 1.08 : 1;
  return cardLevel(entry) * card.income * cardMultiplier(card.id, customState) * uniqueMultiplier;
}

function totalIncome(customState = state) {
  const baseIncome = cards.reduce((sum, card) => sum + cardIncome(card, customState), 0);
  return baseIncome * (1 + passiveModifiers(customState).incomeBonus);
}

function totalLevels() {
  return Object.values(state.owned).reduce((sum, entry) => sum + cardLevel(entry), 0);
}

function discoveredCards() {
  return cards.filter((card) => cardXp(state.owned[card.id]) > 0).length;
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

function expeditionById(expeditionId) {
  return expeditions.find((expedition) => expedition.id === expeditionId);
}

function rolePower(roleId, customState = state) {
  return collectionRoleScores(customState)[roleId] || 0;
}

function cardPower(cardId, customState = state) {
  const card = cardById(cardId);
  const entry = card ? customState.owned[card.id] : null;
  const level = cardLevel(entry);
  if (!card || level <= 0) {
    return 0;
  }

  const rarityRank = Math.max(0, rarities.findIndex((rarity) => rarity.id === card.rarity));
  const uniqueBonus = cardUniqueUnlocked(card.id, customState) ? 5 : 0;
  return level + enchantLevel(entry) * 2 + rarityRank * 3 + uniqueBonus;
}

function selectedExpeditionCard() {
  const card = state.selectedCardId ? cardById(state.selectedCardId) : null;
  const entry = card ? state.owned[card.id] : null;
  return card && cardLevel(entry) > 0 ? card : null;
}

function cardInExpedition(cardId) {
  return Object.values(state.expeditions || {}).some((expeditionState) => expeditionState?.cardId === cardId);
}

function expeditionUnlocked(expedition) {
  return totalLevels() >= expedition.unlockLevel;
}

function expeditionDuration(expedition, cardId = state.selectedCardId) {
  const power = cardPower(cardId);
  const shortfall = Math.max(0, expedition.recommendedPower - power);
  const penalty = expedition.recommendedPower > 0 ? 1 + (shortfall / expedition.recommendedPower) * 0.35 : 1;
  const discount = passiveModifiers().expeditionTimeDiscount;
  return Math.max(60, Math.round(expedition.duration * penalty * (1 - discount)));
}

function expeditionRewardGold(expedition, cardId = state.selectedCardId) {
  const power = cardPower(cardId);
  const modifier = passiveModifiers().expeditionRewardBonus + Math.min(0.8, power * 0.012);
  return Math.floor(expedition.gold * (1 + modifier));
}

function expeditionRewardXp(expedition, cardId = state.selectedCardId) {
  return expedition.xp + Math.floor(cardPower(cardId) / 18) + Math.floor(passiveModifiers().pullXpBonus / 2);
}

function expeditionRemaining(expeditionState) {
  if (!expeditionState) {
    return 0;
  }

  return Math.max(0, Number(expeditionState.startedAt || 0) + Number(expeditionState.duration || 0) - Date.now());
}

function movesForCard(card) {
  return knownMoveIdsForCard(card)
    .map((moveId) => moveById(card, moveId))
    .filter(Boolean);
}

function battleStatsForCard(card) {
  const entry = ownedEntry(card.id);

  const level = cardLevel(entry);
  const rarity = rarityById(card.rarity);
  const material = currentEnchantMaterial(entry);

  // =========================
  // RAREZA
  // =========================

  const rarityStats = {
    common:     { hp: 1,   atk: 1 },
    uncommon:   { hp: 1.1, atk: 1.1 },
    rare:       { hp: 1.2, atk: 1.2 },
    veryRare:   { hp: 1.35, atk: 1.35 },
    legendary:  { hp: 1.55, atk: 1.55 },
    artifact:   { hp: 1.8, atk: 1.8 },
    mythic:     { hp: 2.2, atk: 2.2 },
    special:    { hp: 4, atk: 4 }
  };

  const rarityBonus = rarityStats[rarity.id] || rarityStats.common;

  // =========================
  // BASE
  // =========================

  let hp =
    80 +
    (level * 18);

  let attack =
    12 +
    (level * 5);

  // =========================
  // RAREZA
  // =========================

  hp *= rarityBonus.hp;
  attack *= rarityBonus.atk;

  // =========================
  // MINERAL
  // =========================

  hp *= Math.sqrt(material.multiplier || 1);
  attack *= Math.sqrt(material.multiplier || 1);

  // =========================
  // UNIQUE
  // =========================

  if (cardUniqueUnlocked(card.id)) {
    hp *= 1.12;
    attack *= 1.18;
  }

  // =========================
  // ROLES
  // =========================

  const role = cardRole(card);

  switch (role.id) {
    case "defense":
      hp *= 1.35;
      break;

    case "attack":
      attack *= 1.22;
      hp *= 0.92;
      break;

    case "magic":
      attack *= 1.15;
      break;

    case "support":
      hp *= 1.08;
      break;

    case "economy":
      attack *= 0.9;
      hp *= 0.9;
      break;
  }

  return {
    maxHp: Math.floor(hp),
    attack: Math.floor(attack)
  };
}

function battleModeById(modeId) {
  return battleModes.find((mode) => mode.id === modeId) || battleModes[0];
}

function selectedBattleMode() {
  return battleModeById(state.selectedBattleMode);
}

function battleModeUnlocked(mode) {
  return totalLevels() >= mode.unlockLevel;
}

function enemyCardsForMode(mode, playerCard) {
  const pool = cards.filter((card) => (
    card.id !== playerCard.id
      && mode.enemyRarities.includes(card.rarity)
  ));
  return pool.length ? pool : cards.filter((card) => card.id !== playerCard.id);
}

function randomEnemyCardForMode(mode, playerCard) {
  const pool = enemyCardsForMode(mode, playerCard);
  return pool[Math.floor(Math.random() * pool.length)] || playerCard;
}

function battleEnemyStatsForCard(enemyCard, playerCard, mode) {
  const playerLevel = Math.max(1, cardLevel(ownedEntry(playerCard.id)));
  const playerTotalLevels = Math.max(1, totalLevels());
  const enemyRank = rarityRankById(enemyCard.rarity);
  const enemyRole = cardRole(enemyCard);

  let hp = 58 + playerLevel * 18 + Math.sqrt(playerTotalLevels) * 26 + enemyRank * 34;
  let attack = 7 + playerLevel * 4.3 + Math.sqrt(playerTotalLevels) * 2.8 + enemyRank * 5.5;

  switch (enemyRole.id) {
    case "defense":
      hp *= 1.24;
      attack *= 0.92;
      break;
    case "attack":
      hp *= 0.94;
      attack *= 1.2;
      break;
    case "magic":
      attack *= 1.12;
      break;
    case "support":
      hp *= 1.1;
      break;
    case "economy":
      hp *= 0.94;
      attack *= 0.94;
      break;
  }

  hp *= mode.enemyHpMultiplier * (0.92 + Math.random() * 0.16);
  attack *= mode.enemyAttackMultiplier * (0.92 + Math.random() * 0.16);

  return {
    maxHp: Math.max(12, Math.floor(hp)),
    attack: Math.max(2, Math.floor(attack))
  };
}

function createBattle(card, modeId = state.selectedBattleMode) {
  const mode = battleModeById(modeId);
  const stats = battleStatsForCard(card);
  const level = cardLevel(ownedEntry(card.id));
  const power = cardPower(card.id);
  const enemyCard = randomEnemyCardForMode(mode, card);
  const enemyStats = battleEnemyStatsForCard(enemyCard, card, mode);
  const enemyRank = rarityRankById(enemyCard.rarity);
  const rewardBase = 42 + level * 14 + power * 7 + enemyRank * 24;

  return {
    cardId: card.id,
    modeId: mode.id,
    enemyCardId: enemyCard.id,
    enemyName: enemyCard.name || battleEnemies[Math.floor(Math.random() * battleEnemies.length)],
    enemyHp: enemyStats.maxHp,
    enemyMaxHp: enemyStats.maxHp,
    enemyAttack: enemyStats.attack,
    playerHp: stats.maxHp,
    playerMaxHp: stats.maxHp,
    playerAttack: stats.attack,
    shield: 0,
    rewardGold: Math.floor(rewardBase * mode.rewardMultiplier),
    rewardXp: Math.floor((5 + level * 2 + enemyRank) * mode.rewardMultiplier),
    bonusGold: 0,
    bonusXp: 0,
    outcome: null,
    log: [
      `${mode.name}: ${enemyCard.name} entra a la arena.`
    ]
  };
}

function selectedBattleCard() {
  const card = state.selectedCardId ? cardById(state.selectedCardId) : null;
  const entry = card ? state.owned[card.id] : null;
  return card && cardLevel(entry) > 0 ? card : null;
}

function startBattle() {
  const card = selectedBattleCard();
  if (!card) {
    return;
  }

  const mode = selectedBattleMode();
  if (!battleModeUnlocked(mode)) {
    return;
  }

  unlockAudio();
  playSound("ui");
  state.battle = createBattle(card, mode.id);
  renderAll();
  saveState();
}

function finishBattle(won) {
  if (!state.battle || state.battle.outcome) {
    return;
  }

  const battle = state.battle;
  const card = cardById(battle.cardId);
  battle.outcome = won ? "won" : "lost";

  if (won && card) {
    const rewardGold = Math.floor(Number(battle.rewardGold || 0) * (1 + Number(battle.bonusGold || 0)));
    const rewardXp = Math.floor(Number(battle.rewardXp || 0) + Number(battle.bonusXp || 0));
    const entry = ownedEntry(card.id);
    entry.xp = Math.min(cardXp(entry) + rewardXp, maxCardXp());
    normalizeCardEntry(entry);
    const learnedMoves = syncLearnedMoves(card.id);
    state.gold += rewardGold;
    battle.log.unshift(`Victoria: +${formatNumber(rewardGold)} oro, +${rewardXp} XP.`);
    if (learnedMoves.length) {
      const learnedNames = learnedMoves.map((moveId) => moveById(card, moveId)?.name).filter(Boolean).join(", ");
      battle.log.unshift(`${card.name} aprendio ${learnedNames}.`);
    }
    state.log.unshift({
      type: "battle",
      cardId: card.id,
      modeId: battle.modeId || "training",
      rewardGold,
      rewardXp,
      time: Date.now()
    });
    state.log = state.log.slice(0, 8);
    playSound("levelUp", { delay: 0.08 });
  } else {
    battle.log.unshift("Derrota: la carta se retira sin recompensa.");
    playSound("enchantFail", { delay: 0.05 });
  }

  renderAll();
  saveState();
}

function useBattleMove(moveId) {
  const battle = state.battle;
  if (!battle || battle.outcome) {
    return;
  }

  const card = cardById(battle.cardId);
  if (!card) {
    state.battle = null;
    renderBattle();
    saveState();
    return;
  }

  const move = movesForCard(card).find((item) => item.id === moveId);
  if (!move) {
    return;
  }

  unlockAudio();
  const variance = 0.9 + Math.random() * 0.2;
  let damage = Math.max(1, Math.floor(battle.playerAttack * move.damage * variance));
  if (move.execute && battle.enemyHp <= battle.enemyMaxHp * 0.5) {
    damage = Math.floor(damage * 1.75);
  }

  battle.enemyHp = Math.max(0, battle.enemyHp - damage);
  if (move.shield) {
    battle.shield += Math.floor(battle.playerAttack * move.shield);
  }
  if (move.heal) {
    battle.playerHp = Math.min(battle.playerMaxHp, battle.playerHp + Math.floor(battle.playerAttack * move.heal));
  }
  if (move.goldBonus) {
    battle.bonusGold += move.goldBonus;
  }
  if (move.xpBonus) {
    battle.bonusXp += move.xpBonus;
  }

  battle.log.unshift(`${card.name}: ${move.name} causa ${damage}.`);
  playSound("pull", { rarityId: card.rarity, delay: 0.02 });

  if (battle.enemyHp <= 0) {
    finishBattle(true);
    return;
  }

  const enemyDamageBase = Math.floor(battle.enemyAttack * (0.85 + Math.random() * 0.28));
  const blocked = Math.min(battle.shield, enemyDamageBase);
  const enemyDamage = Math.max(0, enemyDamageBase - blocked);
  battle.shield = Math.max(0, battle.shield - blocked);
  battle.playerHp = Math.max(0, battle.playerHp - enemyDamage);
  battle.log.unshift(`${battle.enemyName} golpea por ${enemyDamage}${blocked ? ` (${blocked} bloqueado)` : ""}.`);

  if (battle.playerHp <= 0) {
    finishBattle(false);
    return;
  }

  battle.log = battle.log.slice(0, 5);
  renderBattle();
  saveState();
}

function startExpedition(expeditionId) {
  const expedition = expeditionById(expeditionId);
  const card = selectedExpeditionCard();
  if (!expedition || !card || !expeditionUnlocked(expedition) || state.expeditions[expeditionId] || cardInExpedition(card.id)) {
    return;
  }

  unlockAudio();
  playSound("ui");
  state.expeditions[expeditionId] = {
    cardId: card.id,
    startedAt: Date.now(),
    duration: expeditionDuration(expedition, card.id) * 1000,
    rewardGold: expeditionRewardGold(expedition, card.id),
    rewardXp: expeditionRewardXp(expedition, card.id)
  };
  renderExpeditions();
  saveState();
}

function claimExpedition(expeditionId) {
  const expedition = expeditionById(expeditionId);
  const active = state.expeditions[expeditionId];
  if (!expedition || !active || expeditionRemaining(active) > 0) {
    return;
  }

  unlockAudio();
  const rewardGold = Math.max(0, Math.floor(Number(active.rewardGold || 0)));
  const rewardXp = Math.max(0, Math.floor(Number(active.rewardXp || expedition.xp)));
  state.gold += rewardGold;

  const assignedCard = active.cardId ? cardById(active.cardId) : null;
  if (assignedCard && state.owned[assignedCard.id]) {
    const entry = ownedEntry(assignedCard.id);
    entry.xp = Math.min(cardXp(entry) + rewardXp, maxCardXp());
    normalizeCardEntry(entry);
    syncLearnedMoves(assignedCard.id);
  } else {
    for (const card of cards) {
      if (cardRole(card).id !== expedition.role) {
        continue;
      }

      const entry = state.owned[card.id];
      if (!entry || cardLevel(entry) <= 0) {
        continue;
      }

      entry.xp = Math.min(cardXp(entry) + rewardXp, maxCardXp());
      normalizeCardEntry(entry);
      syncLearnedMoves(card.id);
    }
  }

  delete state.expeditions[expeditionId];
  state.log.unshift({
    type: "expedition",
    expeditionId,
    cardId: assignedCard?.id || null,
    rewardGold,
    rewardXp,
    role: expedition.role,
    time: Date.now()
  });
  state.log = state.log.slice(0, 8);
  playSound("levelUp", { delay: 0.08 });
  renderAll();
  saveState();
}

function pullBatchModeByCount(count) {
  return pullBatchModes.find((mode) => mode.count === Number(count)) || pullBatchModes[0];
}

function adjustedWeightsForBatch(weights, count = 1) {
  const mode = pullBatchModeByCount(count);
  return rarities.reduce((nextWeights, rarity) => {
    const value = Math.max(0, Number(weights[rarity.id] || 0));
    nextWeights[rarity.id] = pullBatchPenalizedRarities.has(rarity.id)
      ? value * mode.rareChanceFactor
      : value;
    return nextWeights;
  }, {});
}

function gachaCost(gacha, count = 1) {
  return gacha.baseCost * pullBatchModeByCount(count).count;
}

function rarityChance(gacha, rarityId, count = 1) {
  const weights = adjustedWeightsForBatch(gacha.weights, count);
  const total = Object.values(weights).reduce((sum, value) => sum + value, 0);
  return total === 0 ? 0 : (weights[rarityId] || 0) / total;
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
  return pool[Math.floor(Math.random() * pool.length)] || cards[0];
}

function cloneOwnedEntries(owned) {
  return Object.fromEntries(
    Object.entries(owned || {}).map(([cardId, entry]) => [cardId, normalizeCardEntry({ ...entry })])
  );
}

function draftOwnedEntry(draftState, cardId) {
  if (!draftState.owned[cardId]) {
    draftState.owned[cardId] = { copies: 0, xp: 0, enchant: 0, uniqueUnlocked: false };
  }
  normalizeCardEntry(draftState.owned[cardId]);
  return draftState.owned[cardId];
}

function clearCardRoulette() {
  if (cardRoulette?.timer) {
    window.clearTimeout(cardRoulette.timer);
  }
  cardRoulette = null;
}

function applyPendingPull(finalCardId, pending) {
  if (!pending) {
    return;
  }

  let unlockedExpeditions = Array.isArray(pending.unlockedExpeditions) ? pending.unlockedExpeditions : [];

  if (!pending.applied) {
    const previousTotalLevels = totalLevels();

    if (Array.isArray(pending.results) && pending.results.length) {
      for (const result of pending.results) {
        const entry = ownedEntry(result.cardId);
        entry.copies += 1;
        entry.xp = Math.min(cardXp(entry) + Number(result.gainedXp || 0), maxCardXp());
        if (result.uniqueUnlocked) {
          entry.uniqueUnlocked = true;
        }
        normalizeCardEntry(entry);
        syncLearnedMoves(result.cardId);
      }
    } else {
      const entry = ownedEntry(finalCardId);
      entry.copies += pending.copies;
      entry.xp = Math.min(cardXp(entry) + pending.xpGain, maxCardXp());
      if (pending.uniqueUnlocked) {
        entry.uniqueUnlocked = true;
      }
      normalizeCardEntry(entry);
      syncLearnedMoves(finalCardId);
    }

    const nextTotalLevels = totalLevels();
    unlockedExpeditions = expeditions
      .filter((expedition) => previousTotalLevels < expedition.unlockLevel && nextTotalLevels >= expedition.unlockLevel)
      .map((expedition) => expedition.id);

    if (Array.isArray(pending.results) && pending.results.length) {
      for (const result of pending.results) {
        state.log.unshift(result);
      }
      state.log = state.log.slice(0, 8);
    }

    state.selectedCardId = finalCardId;
    pending.applied = true;
  } else if (state.owned[finalCardId]) {
    normalizeCardEntry(state.owned[finalCardId]);
  }

  state.lastReveal = {
    cardId: finalCardId,
    uniqueUnlocked: Boolean(pending.uniqueUnlocked),
    unlockedExpeditions,
    batchCount: Math.max(1, Number(pending.batchCount || 1)),
    time: Date.now()
  };

  if (!pending.notified) {
    showPullNotification(finalCardId, { ...pending, unlockedExpeditions });
    pending.notified = true;
  }
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
    applyPendingPull(finalCardId, cardRoulette.pending);
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
            applyPendingPull(finalCardId, cardRoulette.pending);
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

  return Math.max(1, Math.floor(rarity.baseEnchant * (1 - passiveModifiers().enchantDiscount)));
}

function resolveGachaPull(gacha, weights, time, draftState = state) {
  const rarityId = weightedRarity(weights);
  const card = randomCardFromRarity(rarityId);
  const currentEntry = draftState === state ? ownedEntry(card.id) : draftOwnedEntry(draftState, card.id);
  const previousLevel = cardLevel(currentEntry);
  const previousXp = cardXp(currentEntry);
  const pullXp = xpGainPerPull(draftState);
  const nextXp = previousLevel >= MAX_CARD_LEVEL ? previousXp : Math.min(previousXp + pullXp, maxCardXp());
  const xpGain = nextXp - previousXp;
  const nextLevel = cardLevel({ ...currentEntry, xp: nextXp });
  const uniqueUnlocked = !currentEntry.uniqueUnlocked && Math.random() < uniqueAbilityChance(card, draftState);

  currentEntry.copies += 1;
  currentEntry.xp = nextXp;
  if (uniqueUnlocked) {
    currentEntry.uniqueUnlocked = true;
  }
  normalizeCardEntry(currentEntry);
  syncLearnedMoves(card.id, draftState, { allowPending: false });

  const progress = cardXpProgress(currentEntry);
  return {
    cardId: card.id,
    gachaId: gacha.id,
    rarityId,
    level: nextLevel,
    leveledUp: nextLevel > previousLevel,
    gainedXp: xpGain,
    uniqueUnlocked,
    xpCurrent: progress.current,
    xpRequired: progress.required,
    time
  };
}

function chooseFeaturedPullResult(results) {
  return results.reduce((best, result) => {
    const rank = rarityRankById(result.rarityId);
    const bestRank = rarityRankById(best.rarityId);

    if (rank !== bestRank) {
      return rank > bestRank ? result : best;
    }

    if (result.uniqueUnlocked !== best.uniqueUnlocked) {
      return result.uniqueUnlocked ? result : best;
    }

    if (result.leveledUp !== best.leveledUp) {
      return result.leveledUp ? result : best;
    }

    return result;
  }, results[0]);
}

function buildFeaturedPullInfo(results, featured, mode) {
  const featuredResults = results.filter((result) => result.cardId === featured.cardId);
  return {
    applied: false,
    results,
    copies: featuredResults.length,
    xpGain: featuredResults.reduce((sum, result) => sum + Number(result.gainedXp || 0), 0),
    totalXpGain: results.reduce((sum, result) => sum + Number(result.gainedXp || 0), 0),
    uniqueUnlocked: featuredResults.some((result) => result.uniqueUnlocked),
    uniqueCount: results.filter((result) => result.uniqueUnlocked).length,
    batchCount: mode.count
  };
}

function pullGacha(gachaId, count = 1) {
  if (cardRoulette && !cardRoulette.finished) {
    completeCardRouletteImmediately();
  }

  const gacha = gachas.find((item) => item.id === gachaId);
  if (!gacha) {
    return;
  }

  const mode = pullBatchModeByCount(count);
  const cost = gachaCost(gacha, mode.count);
  if (state.gold < cost) {
    return;
  }

  unlockAudio();
  playSound("buy");

  state.gold -= cost;
  state.pulls[gacha.id] = (state.pulls[gacha.id] || 0) + mode.count;

  const weights = adjustedWeightsForBatch(gacha.weights, mode.count);
  const time = Date.now();
  const draftState = {
    ...state,
    owned: cloneOwnedEntries(state.owned)
  };
  const results = [];

  for (let index = 0; index < mode.count; index += 1) {
    results.push(resolveGachaPull(gacha, weights, time + index, draftState));
  }

  const featured = chooseFeaturedPullResult(results);

  startCardRoulette(featured.cardId, buildFeaturedPullInfo(results, featured, mode));

  const featuredRarityRank = rarityRankById(featured.rarityId);
  if (featuredRarityRank >= 4) {
    playSound("rarePull", { rarityId: featured.rarityId, delay: 0.18 });
  } else if (results.some((result) => result.leveledUp)) {
    playSound("levelUp", { rarityId: featured.rarityId, delay: 0.16 });
  } else {
    playSound("pull", { rarityId: featured.rarityId, delay: 0.12 });
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
  const role = cardRole(card);
  const level = cardLevel(entry);
  const xpProgress = cardXpProgress(entry);
  const isRoulettePreview = Boolean(options.roulette && preview && !options.reveal);
  const unlocked = !lockedPreview && (preview || level > 0 || options.reveal || isRoulettePreview);
  const material = lockedPreview || isRoulettePreview || preview ? baseEnchantMaterial : currentEnchantMaterial(entry);
  const isEnchanted = !preview && !isRoulettePreview && !lockedPreview && unlocked && enchantLevel(entry) > 0;
  const hasUnique = !preview && !isRoulettePreview && !lockedPreview && cardUniqueUnlocked(card.id);
  const isFlashing = unlocked && enchantEffect?.cardId === card.id && Date.now() < enchantEffect.until;
  const effectMaterial = isFlashing ? enchantMaterialById(enchantEffect.materialId) : material;
  const shell = document.createElement("article");
  shell.className = `card-shell ${options.big ? "big" : ""} ${options.mini ? "mini" : ""} ${unlocked ? "" : "locked"} ${isEnchanted ? "enchanted-card" : ""} ${hasUnique ? "unique-card" : ""} ${isFlashing ? "enchant-flash" : ""} ${options.roulette ? "roulette-card" : ""} ${options.rouletteFinal ? "roulette-final" : ""}`;
  shell.style.setProperty("--rarity-color", rarity.color);
  shell.style.setProperty("--mineral-color", unlocked ? effectMaterial.color : baseEnchantMaterial.color);
  shell.style.setProperty("--role-color", role.color);

  const showActualCardName = options.roulette || unlocked || options.reveal;
  if (showActualCardName) {
    shell.classList.add('has-art');
  }
  const displayedName = showActualCardName ? card.name : "Carta oculta";
  const displayedRarity = showActualCardName ? `${rarity.name} - ${role.name}` : "???";
  const displayedIncome = options.roulette ? "Girando" : (preview ? "Girando" : (unlocked ? `${formatNumber(cardIncome(card))}/s` : "???"));
  const copyText = options.roulette ? "??" : (unlocked ? `Nv.${level}` : "Nv.0");
  const enchantText = options.roulette ? "???" : (unlocked ? `${material.short} x${formatMultiplier(material.multiplier)}` : "???");
  const xpText = options.roulette ? "Ruleta" : (unlocked
    ? (xpProgress.isMax ? "XP max" : `${xpProgress.current}/${xpProgress.required} XP`)
    : `0/${xpRequiredForLevel(1)} XP`);
  const xpPercent = options.roulette ? 100 : xpProgress.percent;

  shell.innerHTML = `
    <span class="enchant-glint" aria-hidden="true"></span>
    <span class="unique-star" aria-hidden="true">${hasUnique ? "U" : ""}</span>
    <div class="card-topline">
      <span class="rarity-short">${rarity.short}</span>
      <span class="role-short">${showActualCardName ? role.short : "??"}</span>
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
    const card = document.createElement("article");
    card.className = "gacha-card";
    card.style.setProperty("--gacha-color", gacha.color);

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

    const actions = pullBatchModes
      .map((mode) => {
        const modeCost = gachaCost(gacha, mode.count);
        const disabled = state.gold < modeCost ? "disabled" : "";
        const penalty = mode.count > 1 ? `<em>R+ ${Math.round(mode.rareChanceFactor * 100)}%</em>` : `<em>Normal</em>`;
        return `
          <button class="gacha-pull ${mode.count === 1 ? "primary" : ""}" type="button" data-count="${mode.count}" ${disabled}>
            <strong>${mode.label}</strong>
            <span>${money(modeCost)}</span>
            ${penalty}
          </button>
        `;
      })
      .join("");

    card.innerHTML = `
      <div class="gacha-main">
        <div class="gacha-title">
          <span class="gacha-icon" aria-hidden="true">${gacha.icon}</span>
          <span>${gacha.name}</span>
        </div>
        <span class="gacha-cost">${money(cost)}</span>
      </div>
      <div class="odds">${odds}</div>
      <div class="gacha-actions">${actions}</div>
    `;

    card.querySelectorAll(".gacha-pull").forEach((button) => {
      button.addEventListener("click", () => pullGacha(gacha.id, Number(button.dataset.count || 1)));
    });

    elements.gachaList.appendChild(card);
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
  elements.collectionSummary.textContent = `${discoveredCards()} descubiertas de ${cards.length}. ${totalLevels()} niveles totales. Pasivas: ${passiveSummary()}.`;

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
      renderBattle();
      renderExpeditions();
      saveState();
    });

    button.appendChild(createCardElement(card, { mini: true }));
    elements.collectionGrid.appendChild(button);
  }
}

function revealSummary(card, rarity, entry, xpProgress, material) {
  const role = cardRole(card);
  const xpText = xpProgress.isMax ? "XP maximo" : `${xpProgress.current}/${xpProgress.required} XP`;
  const base = `${rarity.name} - ${role.name}. Nivel ${cardLevel(entry)}/${MAX_CARD_LEVEL}, ${xpText}. ${material.name} x${formatMultiplier(material.multiplier)}. Produce ${formatNumber(cardIncome(card))} oro por segundo.`;
  const lastReveal = state.lastReveal?.cardId === card.id ? state.lastReveal : null;
  const unlocks = lastReveal?.unlockedExpeditions?.length
    ? ` Expedicion desbloqueada: ${lastReveal.unlockedExpeditions.map((id) => expeditionById(id)?.name).filter(Boolean).join(", ")}.`
    : "";
  const batch = lastReveal?.batchCount > 1 ? ` Resultado destacado de x${lastReveal.batchCount}.` : "";
  const unique = lastReveal?.uniqueUnlocked
    ? ` Habilidad unica desbloqueada: ${uniqueAbilityForCard(card).name}.`
    : "";
  return `${base}${batch}${unique}${unlocks}`;
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
    if (isDone) {
      const entry = state.owned[spinningCard.id];
      const xpProgress = cardXpProgress(entry);
      const material = currentEnchantMaterial(entry);
      elements.lastCardText.textContent = revealSummary(spinningCard, spinningRarity, entry, xpProgress, material);
    } else {
      elements.lastCardText.textContent = `${spinningRarity.name}. Esta carta esta pasando por la ruleta.`;
    }
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
  const xpProgress = cardXpProgress(entry);
  const material = currentEnchantMaterial(entry);
  elements.lastCardSlot.appendChild(createCardElement(card, { big: true, reveal: true }));
  elements.lastCardTitle.textContent = card.name;
  elements.lastCardText.textContent = revealSummary(card, rarity, entry, xpProgress, material);
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
  const role = cardRole(selected);
  const uniqueAbility = uniqueAbilityForCard(selected);
  const uniqueUnlocked = cardUniqueUnlocked(selected.id);
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
    ["Rol", role.name],
    ["Pasiva", role.passive],
    ["Unica", uniqueUnlocked ? `${uniqueAbility.name}: ${uniqueAbility.description}` : `Bloqueada (${formatPercent(uniqueAbilityChance(selected), 1)} por tirada)`],
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

  const activeMoves = movesForCard(selected);
  const pendingMove = pendingMoveForCard(selected);
  const movePanel = document.createElement("div");
  movePanel.className = `move-learn-panel ${pendingMove ? "has-pending" : ""}`;
  movePanel.innerHTML = `
    <div class="move-learn-heading">
      <strong>Ataques</strong>
      <span>${activeMoves.length}/${MAX_ACTIVE_MOVES}</span>
    </div>
    <div class="known-move-list">
      ${activeMoves.map((move) => `
        <div class="known-move">
          <strong>${move.name}</strong>
          <span>Nv.${move.unlockLevel || 1} - ${move.description}</span>
        </div>
      `).join("")}
    </div>
    ${pendingMove ? `
      <div class="pending-move">
        <span>Quiere aprender</span>
        <strong>${pendingMove.name}</strong>
        <p>Nv.${pendingMove.unlockLevel || level}. ${pendingMove.description}</p>
        <div class="replace-move-list">
          ${activeMoves.map((move) => `
            <button class="replace-move-button" type="button" data-old-move="${move.id}" data-new-move="${pendingMove.id}">
              Reemplazar ${move.name}
            </button>
          `).join("")}
          <button class="skip-move-button" type="button" data-new-move="${pendingMove.id}">No aprender</button>
        </div>
      </div>
    ` : ""}
  `;
  elements.selectedDetails.appendChild(movePanel);

  movePanel.querySelectorAll(".replace-move-button").forEach((button) => {
    button.addEventListener("click", () => replaceMove(selected.id, button.dataset.oldMove, button.dataset.newMove));
  });
  movePanel.querySelector(".skip-move-button")?.addEventListener("click", (event) => {
    skipPendingMove(selected.id, event.currentTarget.dataset.newMove);
  });

  elements.enchantButton.textContent = atMax ? "Diamante alcanzado" : `Encantar aleatorio (${money(cost)})`;
  elements.enchantButton.disabled = atMax || state.gold < cost;
}

function renderBattleModes() {
  if (!elements.battleModeList) {
    return;
  }

  const selectedMode = selectedBattleMode();
  const lockedByActiveBattle = Boolean(state.battle && !state.battle.outcome);
  const levels = totalLevels();
  elements.battleModeList.innerHTML = "";

  for (const mode of battleModes) {
    const unlocked = battleModeUnlocked(mode);
    const enemyText = mode.enemyRarities
      .map((rarityId) => rarityById(rarityId)?.short)
      .filter(Boolean)
      .join("/");
    const button = document.createElement("button");
    button.className = `battle-mode-button ${selectedMode.id === mode.id ? "active" : ""} ${unlocked ? "" : "locked"}`;
    button.type = "button";
    button.disabled = !unlocked || lockedByActiveBattle;
    button.style.setProperty("--mode-color", mode.color);
    button.innerHTML = `
      <div class="battle-mode-topline">
        <strong>${mode.name}</strong>
        <span>${mode.short}</span>
      </div>
      <p>${unlocked ? mode.description : `Requiere ${mode.unlockLevel} niveles. Tienes ${levels}.`}</p>
      <div class="battle-mode-meta">
        <span>${enemyText}</span>
        <span>x${formatMultiplier(mode.rewardMultiplier)} recompensa</span>
      </div>
    `;
    button.addEventListener("click", () => {
      unlockAudio();
      playSound("ui");
      state.selectedBattleMode = mode.id;
      renderBattleModes();
      renderBattle();
      saveState();
    });
    elements.battleModeList.appendChild(button);
  }
}

function renderBattle() {
  if (!elements.battleArena) {
    return;
  }

  const battle = state.battle;
  const selected = selectedBattleCard();
  const selectedMode = selectedBattleMode();

  if (!battle) {
    const stats = selected ? battleStatsForCard(selected) : null;
    const role = selected ? cardRole(selected) : null;
    const modeUnlocked = battleModeUnlocked(selectedMode);
    const canStart = Boolean(selected && modeUnlocked);
    const buttonText = !selected
      ? "Selecciona una carta"
      : !modeUnlocked
        ? `Requiere ${selectedMode.unlockLevel} niveles`
        : `Iniciar ${selectedMode.short}`;
    elements.battleArena.innerHTML = `
      <div class="battle-empty battle-setup" style="--role-color: ${role?.color || selectedMode.color}; --mode-color: ${selectedMode.color}">
        <div class="battle-setup-grid">
          <div>
            <span>Tu carta</span>
            <strong>${selected ? selected.name : "Sin carta"}</strong>
            <em>${selected ? `${role.name} - ${stats.maxHp} vida - ${stats.attack} ataque` : "Elige una carta descubierta."}</em>
          </div>
          <div>
            <span>Modo</span>
            <strong>${selectedMode.name}</strong>
            <em>${selectedMode.description}</em>
          </div>
          <div>
            <span>Recompensa</span>
            <strong>x${formatMultiplier(selectedMode.rewardMultiplier)}</strong>
            <em>${modeUnlocked ? "Lista para pelear" : `${totalLevels()}/${selectedMode.unlockLevel} niveles`}</em>
          </div>
        </div>
      </div>
      <button class="battle-start" type="button" ${canStart ? "" : "disabled"}>${buttonText}</button>
    `;
    const startButton = elements.battleArena.querySelector(".battle-start");
    startButton.addEventListener("click", startBattle);
    return;
  }

  const card = cardById(battle.cardId);
  if (!card) {
    state.battle = null;
    renderBattle();
    return;
  }

  const mode = battleModeById(battle.modeId);
  const role = cardRole(card);
  let enemyCard = battle.enemyCardId ? cardById(battle.enemyCardId) : null;
  if (!enemyCard) {
    enemyCard = randomEnemyCardForMode(mode, card);
    battle.enemyCardId = enemyCard.id;
    battle.enemyName = enemyCard.name;
  }
  const enemyRole = enemyCard ? cardRole(enemyCard) : roleById("attack");
  const enemyName = enemyCard?.name || battle.enemyName || "Carta rival";
  const playerPercent = battle.playerMaxHp > 0 ? Math.max(0, Math.min(100, (battle.playerHp / battle.playerMaxHp) * 100)) : 0;
  const enemyPercent = battle.enemyMaxHp > 0 ? Math.max(0, Math.min(100, (battle.enemyHp / battle.enemyMaxHp) * 100)) : 0;
  const outcomeText = battle.outcome === "won"
    ? "Victoria conseguida"
    : battle.outcome === "lost"
      ? "Derrota"
      : "Tu turno";
  const moves = movesForCard(card);
  const rewardGold = Math.floor(Number(battle.rewardGold || 0) * (1 + Number(battle.bonusGold || 0)));
  const rewardXp = Math.floor(Number(battle.rewardXp || 0) + Number(battle.bonusXp || 0));

  elements.battleArena.innerHTML = `
    <div class="battle-card battle-card-expanded" style="--role-color: ${role.color}; --enemy-color: ${enemyRole.color}; --mode-color: ${mode.color}">
      <div class="battle-mode-banner">
        <span>${mode.name}</span>
        <strong>${outcomeText}</strong>
        <em>${money(rewardGold)} / +${rewardXp} XP</em>
      </div>
      <div class="battle-duel">
        <div class="battle-combatant">
          <div class="battle-combatant-title">
            <span>Tu carta</span>
            <strong>${card.name}</strong>
            <em>${role.short}</em>
          </div>
          <div class="battle-card-preview player-card-preview" aria-label="Carta de ${card.name}"></div>
          <div class="battle-bar" aria-label="Vida de ${card.name}">
            <span style="width: ${playerPercent}%"></span>
            <em>${Math.ceil(battle.playerHp)}/${battle.playerMaxHp}</em>
          </div>
          <small>${battle.playerAttack} ataque${battle.shield ? ` - ${battle.shield} escudo` : ""}</small>
        </div>
        <div class="battle-vs" aria-hidden="true">VS</div>
        <div class="battle-combatant enemy">
          <div class="battle-combatant-title">
            <span>Carta rival</span>
            <strong>${enemyName}</strong>
            <em>${enemyRole.short}</em>
          </div>
          <div class="battle-card-preview enemy-card-preview" aria-label="Carta rival ${enemyName}"></div>
          <div class="battle-bar enemy" aria-label="Vida del enemigo">
            <span style="width: ${enemyPercent}%"></span>
            <em>${Math.ceil(battle.enemyHp)}/${battle.enemyMaxHp}</em>
          </div>
          <small>${battle.enemyAttack} ataque</small>
        </div>
      </div>
      <div class="battle-moves">
        ${moves.map((move) => `
          <button class="battle-move" type="button" data-move="${move.id}" ${battle.outcome ? "disabled" : ""}>
            <strong>${move.name}</strong>
            <span>${move.description}</span>
          </button>
        `).join("")}
      </div>
      <div class="battle-log">
        ${(battle.log || []).slice(0, 4).map((line) => `<span>${line}</span>`).join("")}
      </div>
      <button class="battle-start" type="button">${battle.outcome ? "Nueva pelea" : "Rendirse"}</button>
    </div>
  `;

  elements.battleArena.querySelector(".player-card-preview")?.appendChild(createCardElement(card, {
    mini: true,
    reveal: true
  }));

  if (enemyCard) {
    elements.battleArena.querySelector(".enemy-card-preview")?.appendChild(createCardElement(enemyCard, {
      mini: true,
      reveal: true
    }));
  }

  elements.battleArena.querySelectorAll(".battle-move").forEach((button) => {
    button.addEventListener("click", () => useBattleMove(button.dataset.move));
  });
  elements.battleArena.querySelector(".battle-start").addEventListener("click", () => {
    if (state.battle?.outcome) {
      startBattle();
    } else {
      state.battle = null;
      renderAll();
      saveState();
    }
  });
}

function renderExpeditions() {
  if (!elements.expeditionList) {
    return;
  }

  elements.expeditionList.innerHTML = "";
  const levels = totalLevels();
  const selectedCard = selectedExpeditionCard();

  for (const expedition of expeditions) {
    const role = roleById(expedition.role);
    const active = state.expeditions[expedition.id];
    const assignedCard = active?.cardId ? cardById(active.cardId) : selectedCard;
    const power = assignedCard ? cardPower(assignedCard.id) : 0;
    const remaining = expeditionRemaining(active);
    const unlocked = levels >= expedition.unlockLevel;
    const completed = Boolean(active && remaining <= 0);
    const selectedBusy = Boolean(selectedCard && cardInExpedition(selectedCard.id));
    const canStart = unlocked && !active && Boolean(selectedCard) && !selectedBusy;
    const card = document.createElement("article");
    card.className = `expedition-card ${unlocked ? "" : "locked"} ${active ? "active" : ""}`;
    card.style.setProperty("--role-color", role.color);

    const statusText = !unlocked
      ? `Requiere ${expedition.unlockLevel} niveles`
      : active
        ? completed ? "Lista para reclamar" : `En marcha ${formatDuration(remaining)}`
        : !selectedCard
          ? "Selecciona una carta"
          : selectedBusy
            ? "Esa carta ya esta de expedicion"
            : "Disponible";
    const rewardGold = active ? active.rewardGold : expeditionRewardGold(expedition);
    const rewardXp = active ? active.rewardXp : expeditionRewardXp(expedition);
    const duration = active ? Math.ceil(active.duration / 1000) : expeditionDuration(expedition, selectedCard?.id);
    const buttonText = !unlocked
      ? "Bloqueada"
      : active
        ? completed ? "Reclamar" : formatDuration(remaining)
        : selectedCard ? "Enviar carta" : "Sin carta";

    card.innerHTML = `
      <div class="expedition-topline">
        <strong>${expedition.name}</strong>
        <span class="role-pill">${role.short}</span>
      </div>
      <p>${unlocked ? expedition.description : `Sube cartas para desbloquearla. Tienes ${levels}/${expedition.unlockLevel} niveles.`}</p>
      <div class="expedition-meta">
        <span>${assignedCard ? assignedCard.name : "Sin carta"}</span>
        <span>${formatDuration(duration * 1000)}</span>
      </div>
      <div class="expedition-meta">
        <span>${money(rewardGold)}</span>
        <span>+${rewardXp} XP carta</span>
      </div>
      <div class="expedition-meta">
        <span>Poder ${formatNumber(power)}/${expedition.recommendedPower}</span>
        <span>${role.name}</span>
      </div>
      <button class="expedition-action" type="button" ${active ? (completed ? "" : "disabled") : (canStart ? "" : "disabled")}>${buttonText}</button>
      <span class="expedition-status">${statusText}</span>
    `;

    const button = card.querySelector(".expedition-action");
    button.addEventListener("click", () => {
      if (completed) {
        claimExpedition(expedition.id);
      } else {
        startExpedition(expedition.id);
      }
    });

    elements.expeditionList.appendChild(card);
  }
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
    if (entry.type === "battle") {
      const card = cardById(entry.cardId);
      if (!card) {
        continue;
      }

      const role = cardRole(card);
      const row = document.createElement("div");
      row.className = "log-entry";
      row.style.setProperty("--rarity-color", role.color);
      row.innerHTML = `
        <span class="log-dot" aria-hidden="true"></span>
        <strong>${card.name}</strong>
        <span>+${entry.rewardXp || 0} XP</span>
      `;
      elements.pullLog.appendChild(row);
      continue;
    }

    if (entry.type === "expedition") {
      const expedition = expeditionById(entry.expeditionId);
      if (!expedition) {
        continue;
      }

      const role = roleById(entry.role || expedition.role);
      const assignedCard = entry.cardId ? cardById(entry.cardId) : null;
      const row = document.createElement("div");
      row.className = "log-entry";
      row.style.setProperty("--rarity-color", role.color);
      row.innerHTML = `
        <span class="log-dot" aria-hidden="true"></span>
        <strong>${assignedCard ? assignedCard.name : expedition.name}</strong>
        <span>+${formatNumber(entry.rewardGold || 0)} oro</span>
      `;
      elements.pullLog.appendChild(row);
      continue;
    }

    const card = cardById(entry.cardId);
    const gacha = gachas.find((item) => item.id === entry.gachaId);
    if (!card || !gacha) {
      continue;
    }

    const rarity = rarityById(card.rarity);
    const uniqueVisible = entry.uniqueUnlocked && cardUniqueUnlocked(card.id);
    const levelText = uniqueVisible
      ? "Unica!"
      : entry.leveledUp === false
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
  renderBattleModes();
  renderBattle();
  renderExpeditions();
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
  renderExpeditions();

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
if (elements.musicVolume) {
  try { elements.musicVolume.value = String(Math.round(musicVolume * 100)); } catch (e) {}
  elements.musicVolume.addEventListener('input', (ev) => {
    const v = Number(ev.target.value) / 100;
    setMusicVolume(v);
  });
}
if (elements.playMusicButton) {
  elements.playMusicButton.addEventListener('click', async () => {
    musicEnabled = true;
    localStorage.setItem(MUSIC_KEY, "on");
    renderMusicButton();
    const knownFiles = fileMusicList.length ? fileMusicList : DEFAULT_MUSIC_FILES;
    let started = knownFiles.length ? await startMusicPlayback(knownFiles) : false;
    if (!started) {
      started = await startBackgroundMusic();
    }
    if (!started) {
      startSynthMusic();
    }
    updatePlayMusicButton();
  });
  updatePlayMusicButton();
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
