export interface Mudra {
  id: string;
  name: string;
  bengali: string;
  meaning: string;
  description: string;
  image?: string;
  audio?: string;
  category: 'single' | 'double';
}

export const singleHandMudras: Mudra[] = [
  {
    id: 'pataka',
    name: 'Pataka',
    bengali: 'à¦ªà¦¤à¦¾à¦•',
    meaning: 'Flag',
    description: "All fingers are held straight and close together. The thumb is slightly bent. This is the most basic mudra used for blessings, depicting water, clouds, and the beginning of any dance.",
    image: `${import.meta.env.BASE_URL}images/pataka.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/pataka.mp3`,
    category: 'single'
  },
  {
    id: 'tripataka',
    name: 'Tripataka',
    bengali: 'à¦¤à§à¦°à¦¿à¦ªà¦¤à¦¾à¦•',
    meaning: 'Three parts of the flag',
    description: "The ring finger and little finger are bent, touching the palm. The thumb, index, and middle fingers remain straight. Used to depict a crown, a tree, or the act of sprinkling water.",
    image: `${import.meta.env.BASE_URL}images/tripataka.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/tripataka.mp3`,
    category: 'single'
  },
  {
    id: 'ardhapataka',
    name: 'Ardhapataka',
    bengali: 'à¦…à¦°à§à¦§à¦ªà¦¤à¦¾à¦•',
    meaning: 'Half flag',
    description: "The ring finger and little finger bend to touch the palm. The thumb crosses over the middle finger. Used for depicting river banks, a knife, or the corners of a garment.",
    image: `${import.meta.env.BASE_URL}images/ardhapataka.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/ardhapataka.mp3`,
    category: 'single'
  },
  {
    id: 'kartarimukha',
    name: 'Kartarimukha',
    bengali: 'à¦•à¦°à§à¦¤à¦°à§€à¦®à§à¦–',
    meaning: 'Scissors face',
    description: "The ring finger and little finger are fully bent into the palm. The thumb crosses over them. The index and middle fingers are separated like scissors. Used to depict separation, opposition, or lightning.",
    image: `${import.meta.env.BASE_URL}images/kartarimukha.jpg`,
    category: 'single'
  },
  {
    id: 'mayura',
    name: 'Mayura',
    bengali: 'à¦®à¦¯à¦¼à§‚à¦°',
    meaning: 'Peacock',
    description: "The ring finger touches the thumb, other fingers extended straight. The hand resembles a peacock neck and head. Used to depict a peacock, a creeper, or the eye-brow.",
    image: `${import.meta.env.BASE_URL}images/mayura.jpg`,
    category: 'single'
  },
  {
    id: 'ardhachandra',
    name: 'Ardhachandra',
    bengali: 'à¦…à¦°à§à¦§à¦šà¦¨à§à¦¦à§à¦°',
    meaning: 'Half moon',
    description: "The thumb is extended outward, the other fingers are held together and straight. The hand forms a crescent shape. Used to depict the moon, a platter, or the act of meditation.",
    image: `${import.meta.env.BASE_URL}images/ardhachandra.jpg`,
    category: 'single'
  },
  {
    id: 'arala',
    name: 'Arala',
    bengali: 'à¦…à¦°à¦²',
    meaning: 'Bent',
    description: "The index finger is bent like a hook. The thumb supports it from below. Other fingers are straight. Used to depict a bow, the act of drawing a bow, or a powerful movement.",
    image: `${import.meta.env.BASE_URL}images/arala.jpg`,
    category: 'single'
  },
  {
    id: 'shukatunda',
    name: 'Shukatunda',
    bengali: 'à¦¶à§à¦•à¦¤à§à¦£à§à¦¡',
    meaning: 'Parrot beak',
    description: "The ring finger and little finger touch the thumb. The index finger is bent to touch the thumb base. The middle finger remains straight. Used to depict a parrot, a fruit, or the breast.",
    image: `${import.meta.env.BASE_URL}images/shukatunda.jpg`,
    category: 'single'
  },
  {
    id: 'mushthi',
    name: 'Mushthi',
    bengali: 'à¦®à§à¦·à§à¦ à¦¿',
    meaning: 'Fist',
    description: "All fingers are tightly folded into the palm with the thumb placed over them. This represents strength and determination. Used to depict firmness, holding something, or the beginning of an action.",
    image: `${import.meta.env.BASE_URL}images/mushthi.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/mushthi.mp3`,
    category: 'single'
  },
  {
    id: 'shikhara',
    name: 'Shikhara',
    bengali: 'à¦¶à¦¿à¦–à¦°',
    meaning: 'Peak',
    description: "All fingers are bent into the palm, with the thumb extended upward like a mountain peak. Used to depict a god, lord, the pinnacle of a mountain, or the act of worship.",
    image: `${import.meta.env.BASE_URL}images/shikhara.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/shikhara.mp3`,
    category: 'single'
  },
  {
    id: 'kapitha',
    name: 'Kapitha',
    bengali: 'à¦•à¦ªà¦¿à¦ ',
    meaning: 'Wood apple',
    description: "The index finger curls into the palm, touching the base. The thumb supports it. Other fingers are extended straight. Used to depict holding a wood apple, a lily, or the waist.",
    image: `${import.meta.env.BASE_URL}images/kapitha.jpg`,
    category: 'single'
  },
  {
    id: 'katakamukha',
    name: 'Katakamukha',
    bengali: 'à¦•à¦Ÿà¦•à¦®à§à¦–',
    meaning: 'Bracelet face',
    description: "The thumb, index, and middle fingers are joined at the tips, forming a circle. The ring and little fingers are extended. Used to depict pulling, holding a flower, or the waist.",
    image: `${import.meta.env.BASE_URL}images/katakamukha.jpg`,
    category: 'single'
  },
  {
    id: 'suchimukha',
    name: 'Suchimukha',
    bengali: 'à¦¸à§‚à¦šà§€à¦®à§à¦–',
    meaning: 'Needle face',
    description: "The index finger points forward, other fingers folded into the palm. The thumb supports from below. Used to depict a needle, a minute point, or the act of sewing.",
    image: `${import.meta.env.BASE_URL}images/suchimukha.jpg`,
    category: 'single'
  },
  {
    id: 'chandrakala',
    name: 'Chandrakala',
    bengali: 'à¦šà¦¨à§à¦¦à§à¦°à¦•à¦²à¦¾',
    meaning: 'Moon digit',
    description: "The index finger is extended, other fingers folded. The thumb touches the base of the index finger. Used to depict the crescent moon, a drop, or writing.",
    image: `${import.meta.env.BASE_URL}images/chandrakala.jpg`,
    category: 'single'
  },
  {
    id: 'padmakosha',
    name: 'Padmakosha',
    bengali: 'à¦ªà¦¦à§à¦®à¦•à§‹à¦·',
    meaning: 'Lotus bud',
    description: "The fingers are spread outward like a blooming lotus flower bud, palm hollow and cupped. Used to depict a lotus flower, fruit, the breast, or offering water.",
    image: `${import.meta.env.BASE_URL}images/padmakosha.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/padmakosha.mp3`,
    category: 'single'
  },
  {
    id: 'sarpashirsha',
    name: 'Sarpashirsha',
    bengali: 'à¦¸à¦°à§à¦ªà¦¶à¦¿à¦°à¦¸à§',
    meaning: 'Snake head',
    description: "All fingers are extended and slightly curved inward like a snake hood. The palm faces outward. Used to depict a snake, an elephant trunk, or the hood of a cobra.",
    image: `${import.meta.env.BASE_URL}images/sarpashirsha.jpg`,
    category: 'single'
  },
  {
    id: 'mrigashirsha',
    name: 'Mrigashirsha',
    bengali: 'à¦®à§ƒà¦—à¦¶à¦¿à¦°à¦¸à§',
    meaning: 'Deer head',
    description: "The ring finger and little finger touch the thumb. The index and middle fingers are extended upward like deer horns. Used to depict a deer, the head, or the act of thinking.",
    image: `${import.meta.env.BASE_URL}images/mrigashirsha.jpg`,
    category: 'single'
  },
  {
    id: 'simhamukha',
    name: 'Simhamukha',
    bengali: 'à¦¸à¦¿à¦‚à¦¹à¦®à§à¦–',
    meaning: 'Lion face',
    description: "The middle finger and ring finger touch the thumb. The index and little fingers are extended outward like a lion mane. Used to depict a lion, the earth, or a fierce action.",
    image: `${import.meta.env.BASE_URL}images/simhamukha.jpg`,
    category: 'single'
  },
  {
    id: 'kangula',
    name: 'Kangula',
    bengali: 'à¦•à¦‚à¦—à§à¦²',
    meaning: 'Tail',
    description: "The little finger is extended straight up. The other fingers are folded into the palm with the thumb holding them. Used to depict a tail, a fly whisk, or the act of sprinkling.",
    image: `${import.meta.env.BASE_URL}images/kangula.jpg`,
    category: 'single'
  },
  {
    id: 'alapadma',
    name: 'Alapadma',
    bengali: 'à¦…à¦²à¦ªà¦¦à§à¦®',
    meaning: 'Blooming lotus',
    description: "All five fingers are spread wide apart like a fully bloomed lotus flower. The palm is open and relaxed. Used to depict a fully bloomed flower, the moon, a beautiful face, or joy.",
    image: `${import.meta.env.BASE_URL}images/alapadma.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/alapadma.mp3`,
    category: 'single'
  },
  {
    id: 'chatura',
    name: 'Chatura',
    bengali: 'à¦šà¦¤à§à¦°',
    meaning: 'Clever',
    description: "The thumb and index finger meet to form a circle. The other fingers are extended straight. Used to depict cleverness, a thread, or the act of tying.",
    image: `${import.meta.env.BASE_URL}images/chatura.jpg`,
    category: 'single'
  },
  {
    id: 'bhramara',
    name: 'Bhramara',
    bengali: 'à¦­à§à¦°à¦®à¦°',
    meaning: 'Bee',
    description: "The index finger bends to touch the thumb base. The middle finger touches the tip of the thumb. Other fingers extended. Used to depict a bee, a wing, or the act of flying.",
    image: `${import.meta.env.BASE_URL}images/bhramara.jpg`,
    category: 'single'
  },
  {
    id: 'hamsasya',
    name: 'Hamsasya',
    bengali: 'à¦¹à¦‚à¦¸à¦¾à¦¸à§à¦¯',
    meaning: 'Swan face',
    description: "The thumb and index finger touch at the tips forming a beak shape. Other fingers are extended straight. Used to depict a swan, a pearl, or the act of tying.",
    image: `${import.meta.env.BASE_URL}images/hamsasya.jpg`,
    category: 'single'
  },
  {
    id: 'hamsapaksha',
    name: 'Hamsapaksha',
    bengali: 'à¦¹à¦‚à¦¸à¦ªà¦•à§à¦·',
    meaning: 'Swan wing',
    description: "All fingers are bent at the middle joint, palm flat. The fingers form a wing-like shape. Used to depict a swan wing, arranging, or the number six.",
    image: `${import.meta.env.BASE_URL}images/hamsapaksha.jpg`,
    category: 'single'
  },
  {
    id: 'sandamsha',
    name: 'Sandamsha',
    bengali: 'à¦¸à¦¨à§à¦¦à¦‚à¦¶',
    meaning: 'Tongs',
    description: "The thumb and index finger are held slightly apart like tongs. Other fingers are folded into the palm. Used to depict picking up objects, a needle, or light things.",
    image: `${import.meta.env.BASE_URL}images/sandamsha.jpg`,
    category: 'single'
  },
  {
    id: 'mukula',
    name: 'Mukula',
    bengali: 'à¦®à§à¦•à§à¦²',
    meaning: 'Bud',
    description: "All fingers are brought together at the tips to form a bud shape. The hand resembles a closed flower bud. Used to depict a flower bud, a pomegranate, or the nipple.",
    image: `${import.meta.env.BASE_URL}images/mukula.jpg`,
    category: 'single'
  },
  {
    id: 'tamrachuda',
    name: 'Tamrachuda',
    bengali: 'à¦¤à¦¾à¦®à§à¦°à¦šà§‚à¦¡à¦¼',
    meaning: 'Rooster',
    description: "The little finger, ring finger, and middle finger are bent into the palm. The index finger points up and the thumb supports from the side. Used to depict a rooster, a crane, or a camel.",
    image: `${import.meta.env.BASE_URL}images/tamrachuda.jpg`,
    category: 'single'
  },
  {
    id: 'trishula',
    name: 'Trishula',
    bengali: 'à¦¤à§à¦°à¦¿à¦¶à§‚à¦²',
    meaning: 'Trident',
    description: "The little finger and ring finger are folded into the palm. The index, middle, and thumb are extended like a three-pronged trident. Used to depict Lord Shiva trident, the number three, or a tripod.",
    image: `${import.meta.env.BASE_URL}images/trishula.jpg`,
    category: 'single'
  }
];

export const doubleHandMudras: Mudra[] = [
  {
    id: 'anjali',
    name: 'Anjali',
    bengali: 'à¦…à¦žà§à¦œà¦²à¦¿',
    meaning: 'Salutation',
    description: "Two hands held together with palms touching. Fingers pointing upwards. Used to greet gods, respected people, and to offer prayers with reverence.",
    image: `${import.meta.env.BASE_URL}images/anjali.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/anjali.mp3`,
    category: 'double'
  },
  {
    id: 'kapota',
    name: 'Kapota',
    bengali: 'à¦•à¦ªà§‹à¦¤',
    meaning: 'Dove',
    description: "Two hands joined together with fingers interlaced like a dove beak and wings. The gesture is gentle and peaceful. Used to depict a dove, a bird, or a gentle soul.",
    image: `${import.meta.env.BASE_URL}images/kapota.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/kapota.mp3`,
    category: 'double'
  },
  {
    id: 'karkata',
    name: 'Karkata',
    bengali: 'à¦•à¦°à§à¦•à¦Ÿ',
    meaning: 'Crab',
    description: "The index fingers are crossed over each other, other fingers curled inward to form a crab-like shape. Used to depict a crab, a conch shell, or a large body.",
    image: `${import.meta.env.BASE_URL}images/karkata.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/karkata.mp3`,
    category: 'double'
  },
  {
    id: 'swastika',
    name: 'Swastika',
    bengali: 'à¦¸à§à¦¬à¦¸à§à¦¤à¦¿à¦•',
    meaning: 'Auspicious cross',
    description: "Two hands crossed at the wrists forming an auspicious cross pattern. Fingers are extended gracefully. Used to depict an auspicious symbol or a crossed position of the arms.",
    image: `${import.meta.env.BASE_URL}images/swastika.jpg`,
    audio: `${import.meta.env.BASE_URL}audio/swastika.mp3`,
    category: 'double'
  },
  {
    id: 'khatva',
    name: 'Khatva',
    bengali: 'à¦–à¦Ÿà§à¦¬à¦¾',
    meaning: 'Cot',
    description: "The hands are held apart with palms facing down, fingers curled as if holding the legs of a cot. Used to depict a cot, a seat, or a bed.",
    image: `${import.meta.env.BASE_URL}images/khatva.jpg`,
    category: 'double'
  },
  {
    id: 'bherunda',
    name: 'Bherunda',
    bengali: 'à¦­à§‡à¦°à§à¦£à§à¦¡',
    meaning: 'A pair of birds',
    description: "The hands are held with fingers fluttering like the wings of a pair of birds. The wrists are close together. Used to depict a pair of birds or a fluttering movement.",
    image: `${import.meta.env.BASE_URL}images/bherunda.jpg`,
    category: 'double'
  },
  {
    id: 'dola',
    name: 'Dola',
    bengali: 'à¦¦à§‹à¦²',
    meaning: 'Swinging',
    description: "The arms hang relaxed at the sides, hands gently swinging. The hands are in a soft, natural position. Used to depict swinging, walking, or a relaxed state.",
    image: `${import.meta.env.BASE_URL}images/dola.jpg`,
    category: 'double'
  },
  {
    id: 'pushpaputa',
    name: 'Pushpaputa',
    bengali: 'à¦ªà§à¦·à§à¦ªà¦ªà§à¦Ÿ',
    meaning: 'Flower casket',
    description: "The hands form a cup shape by joining the pinky sides together, palms open upward like a flower casket. Used to depict holding flowers, offering, or receiving blessings.",
    image: `${import.meta.env.BASE_URL}images/pushpaputa.jpg`,
    category: 'double'
  },
  {
    id: 'utsanga',
    name: 'Utsanga',
    bengali: 'à¦‰à§Žà¦¸à¦™à§à¦—',
    meaning: 'Embrace',
    description: "The hands are crossed at the wrists with each hand touching the opposite shoulder, depicting an embrace. Used to depict embracing, self-embrace, or modesty.",
    image: `${import.meta.env.BASE_URL}images/utsanga.jpg`,
    category: 'double'
  },
  {
    id: 'shivalinga',
    name: 'Shivalinga',
    bengali: 'à¦¶à¦¿à¦¬à¦²à¦¿à¦™à§à¦—',
    meaning: 'Lord Shiva',
    description: "One hand forms the Shikhara mudra (thumb up) placed over the open palm of the other hand. Used to depict Lord Shiva, the Shivalinga, or divine power.",
    image: `${import.meta.env.BASE_URL}images/shivalinga.jpg`,
    category: 'double'
  },
  {
    id: 'kartareeswastika',
    name: 'Kartareeswastika',
    bengali: 'à¦•à¦°à§à¦¤à¦°à§€à¦¸à§à¦¬à¦¸à§à¦¤à¦¿à¦•',
    meaning: 'Scissors cross',
    description: "Both hands form the Kartarimukha mudra with the index and middle fingers spread, crossed at the wrists. Used to depict crossed arrows, scissors, or opposition.",
    image: `${import.meta.env.BASE_URL}images/kartareeswastika.jpg`,
    category: 'double'
  },
  {
    id: 'sakatam',
    name: 'Sakatam',
    bengali: 'à¦¸à¦•à¦Ÿ',
    meaning: 'Cart / Demon',
    description: "Both hands are held facing each other with fingers spread and pointing outward like a demon's claws. Used to depict a demon, a cart, or a fierce creature.",
    image: `${import.meta.env.BASE_URL}images/sakatam.jpg`,
    category: 'double'
  },
  {
    id: 'katakavardhana',
    name: 'Katakavardhana',
    bengali: 'à¦•à¦Ÿà¦•à¦¬à¦°à§à¦§à¦¨',
    meaning: 'Pair of bracelets',
    description: "Both hands form the Katakamukha mudra, overlapping one over the other with palms facing down. Used to depict a coronation ceremony, bracelets, or a blessing.",
    image: `${import.meta.env.BASE_URL}images/katakavardhana.jpg`,
    category: 'double'
  },
  {
    id: 'chakra',
    name: 'Chakra',
    bengali: 'à¦šà¦•à§à¦°',
    meaning: 'Wheel',
    description: "The hands are interlocked with fingers of one hand crossing through the spaces of the other, creating a wheel shape. Used to depict a wheel, a discus, or circular motion.",
    image: `${import.meta.env.BASE_URL}images/chakra.jpg`,
    category: 'double'
  },
  {
    id: 'samputa',
    name: 'Samputa',
    bengali: 'à¦¸à¦®à§à¦ªà§à¦Ÿ',
    meaning: 'Container',
    description: "Both hands are cupped together palm to palm forming a hollow container shape. Used to depict hiding something, a treasure box, or a secure container.",
    image: `${import.meta.env.BASE_URL}images/samputa.jpg`,
    category: 'double'
  },
  {
    id: 'shankha',
    name: 'Shankha',
    bengali: 'à¦¶à¦™à§à¦–',
    meaning: 'Conch shell',
    description: "The thumb of one hand is grasped by the four fingers of the other hand, with the thumb of the second hand extended upward. Used to depict a conch shell, blowing a conch, or divine sound.",
    image: `${import.meta.env.BASE_URL}images/shankha.jpg`,
    category: 'double'
  },
  {
    id: 'keelaka',
    name: 'Keelaka',
    bengali: 'à¦•à§€à¦²à¦•',
    meaning: 'Emotional bond',
    description: "The little fingers of both hands are interlocked while the other fingers remain closed in fists. Used to depict an emotional bond, friendship, or a link between two people.",
    image: `${import.meta.env.BASE_URL}images/keelaka.jpg`,
    category: 'double'
  },
  {
    id: 'matsya',
    name: 'Matsya',
    bengali: 'à¦®à§Žà¦¸à§à¦¯',
    meaning: 'Fish',
    description: "One hand is placed flat over the other with thumbs extended sideways like fins. The hands together form a fish shape. Used to depict a fish, water creatures, or aquatic movement.",
    image: `${import.meta.env.BASE_URL}images/matsya.jpg`,
    category: 'double'
  },
  {
    id: 'paasha',
    name: 'Paasha',
    bengali: 'à¦ªà¦¾à¦¶',
    meaning: 'Rope / Noose',
    description: "The fingers of both hands are interlocked and twisted to represent a rope or noose. Used to depict a rope, bondage, or the act of binding.",
    image: `${import.meta.env.BASE_URL}images/paasha.jpg`,
    category: 'double'
  },
  {
    id: 'varha',
    name: 'Varha',
    bengali: 'à¦¬à¦°à¦¾à¦¹',
    meaning: 'Wild boar',
    description: "One hand is placed over the other with fingers pointing downward and curled, depicting the snout of a wild boar. Used to depict a boar, Lord Vishnu's Varaha avatar, or digging.",
    image: `${import.meta.env.BASE_URL}images/varha.jpg`,
    category: 'double'
  },
  {
    id: 'koorma',
    name: 'Koorma',
    bengali: 'à¦•à§‚à¦°à§à¦®',
    meaning: 'Tortoise',
    description: "The hands are crossed at the wrists with fingers curled inward like a tortoise withdrawing into its shell. Used to depict a tortoise, Lord Vishnu's Kurma avatar, or protection.",
    image: `${import.meta.env.BASE_URL}images/koorma.jpg`,
    category: 'double'
  },
  {
    id: 'nagabanda',
    name: 'Nagabanda',
    bengali: 'à¦¨à¦¾à¦—à¦¬à¦¨à§à¦§',
    meaning: 'Coiled serpent',
    description: "Both hands are intertwined with wrists crossed and fingers spread upward like the hood of a coiled serpent. Used to depict a snake coiled around, Lord Shiva, or serpent power.",
    image: `${import.meta.env.BASE_URL}images/nagabanda.jpg`,
    category: 'double'
  },
  {
    id: 'garuda',
    name: 'Garuda',
    bengali: 'à¦—à¦°à§à¦¡à¦¼',
    meaning: 'Mythological eagle',
    description: "The wrists are crossed and hands spread open wide like wings, with thumbs interlocked. Used to depict the divine eagle Garuda, Lord Vishnu's vehicle, or majestic flight.",
    image: `${import.meta.env.BASE_URL}images/garuda.jpg`,
    category: 'double'
  }
];

export const allMudras = [...singleHandMudras, ...doubleHandMudras];

export const getMudrasByCategory = (category: 'single' | 'double') => {
  return category === 'single' ? singleHandMudras : doubleHandMudras;
};



