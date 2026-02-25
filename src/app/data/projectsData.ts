import oracleImage from 'figma:asset/76b35fa1473c1e8bd32cd02993c8b62e23b67ab6.png';
import mysticImage from 'figma:asset/0797e56b87cdf8eed3753f25a951a2124f20fa5c.png';
import mudacHero from 'figma:asset/0d70ab150b115a93ea6c763a570a666de5a616b2.png';
import mudacImage1 from 'figma:asset/9053ef4d9e8bf9055a4f73546264c93dedd225ee.png';
import mudacImage2 from 'figma:asset/505e67ab6f121a90e7cd56013736b5c71d064cbe.png';
import mudacImage3 from 'figma:asset/e45eda4057d663974e12aecae47378d54231479c.png';
import mudacLogo from 'figma:asset/9b5a9be05823fee9d4db41f7c271fc2d7c78b86e.png';

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  shortDescription: string;
  heroImage: string;
  overview: {
    concept: string;
    goals: string[];
    context: string;
  };
  mediaBlocks: Array<{
    type: 'full-width' | 'split' | 'cluster';
    images: string[];
  }>;
  process: {
    title: 'Unity Development & 3D Pipeline' | 'Design & Development' | 'Composizione e Scelte Stilistiche' | 'Creative Exploration' | 'Refinement Process';
    description: string;
    images: string[];
  };
  highlight: {
    quote: string;
    author?: string;
  };
  results: {
    description: string;
    images: string[];
    impact?: string[];
  };
  nextProject?: number;
}

export const projectsData: Record<number, ProjectData> = {
  1: {
    id: 1,
    title: 'On Display - A curator\'s choice',
    category: 'XR',
    shortDescription: 'An immersive XR experience exploring virtual curation and spatial storytelling in Unity.',
    heroImage: 'https://i.imgur.com/qI5cYJc.png',
    overview: {
      concept: 'On Display is an extended reality experience that reimagines how we interact with curated collections in virtual space, blending physical exhibition design principles with the possibilities of XR technology.',
      goals: [
        'Create an intuitive spatial navigation system for virtual exhibitions',
        'Explore the relationship between physical and virtual curation practices',
        'Develop scalable interaction patterns for 3D object examination'
      ],
      context: 'Developed in Unity as an exploration of immersive storytelling and virtual museum experiences, combining 3D modeling, interaction design, and spatial audio to create a contemplative curatorial journey.'
    },
    mediaBlocks: [
      {
        type: 'full-width',
        images: ['https://i.imgur.com/qI5cYJc.png']
      },
      {
        type: 'split',
        images: [
          'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
        ]
      }
    ],
    process: {
      title: 'Unity Development & 3D Pipeline',
      description: 'Development focused on creating an accessible XR experience using Unity\'s XR Interaction Toolkit, implementing intuitive object manipulation, teleportation systems, and adaptive UI that works across VR headsets.\n\nThe 3D pipeline involved modeling exhibition spaces, optimizing assets for real-time rendering, and designing lighting systems that enhance the sense of presence while maintaining performance across different XR platforms.',
      images: [
        'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1535223289827-42f1e9919769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ]
    },
    highlight: {
      quote: 'Virtual space is not a limitation—it\'s an invitation to reimagine how we experience and interact with curated narratives.',
      author: 'Project Philosophy'
    },
    results: {
      description: 'On Display demonstrates how XR technology can extend curatorial practices beyond physical constraints, creating immersive experiences that invite deeper engagement with exhibited works.\n\nThe project establishes a foundation for future virtual exhibitions, showcasing technical proficiency in Unity development while maintaining focus on thoughtful interaction design and spatial storytelling.',
      images: [
        'https://i.imgur.com/qI5cYJc.png'
      ],
      impact: [
        'Intuitive 6DOF interaction system',
        'Optimized for multiple VR platforms',
        'Seamless blend of spatial audio and visual design'
      ]
    },
    nextProject: 2
  },
  2: {
    id: 2,
    title: 'Oracle - webapp',
    category: 'UI/UX Design',
    shortDescription: 'A personal web application exploring introspection through interaction.',
    heroImage: 'https://i.imgur.com/9aYGhXD.png',
    overview: {
      concept: 'Oracle is a digital tarot experience that bridges ancient wisdom with modern interface design, creating moments of reflection through carefully crafted interactions.',
      goals: [
        'Encourage reflective engagement rather than deterministic answers',
        'Translate symbolic interpretation into an accessible digital interaction',
        'Create a modular interface adaptable to future narrative and visual expansions'
      ],
      context: 'Designed as a personal web application exploring introspection through interaction, combining cultural symbolism and lightweight computational logic to create a contemplative user journey.'
    },
    mediaBlocks: [
      {
        type: 'full-width',
        images: ['https://i.imgur.com/9aYGhXD.png']
      },
      {
        type: 'split',
        images: [
          'https://i.imgur.com/q8bV7PR.png',
          'https://i.imgur.com/jUZw05o.png'
        ]
      }
    ],
    process: {
      title: 'Design & Development',
      description: 'Minimal and contemplative interface design focused on typography, pacing, and symbolic visual language to support a reflective user experience.\n\nFrontend implementation of interactive logic and generative behaviors, translating symbolic systems into a responsive and lightweight web experience.',
      images: [
        'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1633356122544-f134324a6cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ]
    },
    highlight: {
      quote: 'Meaning does not appear instantly; it emerges through interaction.',
      author: 'Project Philosophy'
    },
    results: {
      description: 'The project demonstrates how symbolic interpretation can be translated into a digital interaction that feels intentional, calm, and reflective rather than purely functional.\n\nL\'Oracolo establishes a foundation for future expansions, showing the potential of combining generative logic, narrative interaction, and minimal interface design to create meaningful personal experiences.',
      images: [
        'https://i.imgur.com/9aYGhXD.png'
      ],
      impact: [
        'Seamless card drawing interactions',
        'Thoughtful micro-animations',
        'Personal moments of digital contemplation'
      ]
    },
    nextProject: 3
  },
  3: {
    id: 3,
    title: 'Corti Brillanti',
    category: 'Graphic Design',
    shortDescription: 'Visual identity per "Corti Brillanti" – una locandina teatrale che trasforma la brillantezza scenica in una metafora di pulizia domestica.',
    heroImage: 'https://i.imgur.com/dqFxI5l.png',
    overview: {
      concept: 'Il progetto grafico nasce da una voluta, ironica letteralità del titolo dello spettacolo: "Nuovi Corti Brillanti per Attori sempre più Splendenti". Ho trasformato gli aggettivi "brillanti" e "splendenti" – solitamente legati alla qualità della recitazione – in una metafora visiva legata al mondo della detergenza e della pulizia domestica. Il teatro diventa un\'azione igienizzante, un\'esplosione di freschezza.',
      goals: [
        'Creare un\'identità visiva memorabile e ironica per lo spettacolo teatrale',
        'Trasformare il concept letterale in una composizione grafica efficace',
        'Utilizzare il collage digitale per dare dinamismo e personalità alla locandina'
      ],
      context: 'Progetto di visual identity per "I Postumi Teatro", una compagnia teatrale che presenta corti brillanti con un approccio fresco e ironico alla scena contemporanea.'
    },
    mediaBlocks: [
      {
        type: 'full-width',
        images: ['https://i.imgur.com/VKcwpdt.png']
      },
      {
        type: 'split',
        images: [
          'https://i.imgur.com/xnR4dAi.png',
          'https://i.imgur.com/MGLzM70.png'
        ]
      },
      {
        type: 'cluster',
        images: [
          'https://i.imgur.com/4J00uFI.png',
          'https://i.imgur.com/8BA0IyD.png',
          'https://i.imgur.com/jS6L7v4.png'
        ]
      }
    ],
    process: {
      title: 'Composizione e Scelte Stilistiche',
      description: 'L\'elemento focale è un flacone spray illustrato (con un dettaglio customizzato sull\'etichetta che richiama l\'identità ironica della compagnia "I Postumi") che funge da trigger della composizione. Dal beccuccio non esce solo uno "spruzzo" grafico che crea lo spazio negativo bianco per la tipografia, ma vengono proiettati gli attori stessi, protagonisti dinamici di questa effervescenza scenica.\n\nEstetica Cut-Out: Ho utilizzato la tecnica del collage digitale, ritagliando le foto degli attori con bordi bianchi netti per richiamare l\'estetica delle fanzine e dare un senso di tridimensionalità "pop-up".\n\nTexture Halftone: Alle fotografie è stato applicato un pattern retinato (halftone) che uniforma visivamente scatti differenti e conferisce alla locandina un sapore raw, da stampa indipendente.\n\nTipografia Giocosa: Il lettering gioca con colori primari e vibranti (ciano, magenta, giallo, verde) e font hand-drawn, evocando l\'energia caotica e gioiosa dei "corti" teatrali.\n\nContrasto Cromatico: Il blu profondo dello sfondo fa risaltare l\'esplosione centrale bianca e i colori saturi del testo, guidando l\'occhio dal brand (il flacone) al contenuto (il titolo).',
      images: [
        'https://i.imgur.com/QvfzaKk.png',
        'https://i.imgur.com/ooDFhW4.png',
        'https://i.imgur.com/VKcwpdt.png'
      ]
    },
    highlight: {
      quote: 'Il teatro diventa un\'azione igienizzante, un\'esplosione di freschezza scenica.',
      author: 'Concept Visivo'
    },
    results: {
      description: 'La locandina finale trasforma con successo un gioco di parole letterale in una composizione visiva memorabile e distintiva. L\'ironia del concept si traduce in un linguaggio grafico fresco che comunica immediatamente l\'energia e lo spirito della compagnia teatrale.\n\nIl progetto dimostra come la grafica possa tradurre concetti astratti in metafore visive concrete, creando un\'identità che funziona sia come poster promozionale che come statement artistico autonomo.',
      images: [
        'https://i.imgur.com/dqFxI5l.png',
        'https://i.imgur.com/VKcwpdt.png'
      ],
      impact: [
        'Identità visiva distintiva e memorabile',
        'Linguaggio grafico ironico e accessibile',
        'Collage digitale con estetica fanzine contemporanea'
      ]
    },
    nextProject: 4
  },
  4: {
    id: 4,
    title: 'Abstract Art Collection',
    category: 'Graphic Design',
    shortDescription: 'An experimental series exploring the boundaries between digital art and design through bold compositions and vibrant color theory.',
    heroImage: 'https://images.unsplash.com/photo-1716885315455-0ccd835aa616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    overview: {
      concept: 'This collection challenges conventional design thinking by prioritizing emotional response over function, creating pieces that exist purely as visual expressions.',
      goals: [
        'Push creative boundaries',
        'Explore new digital techniques',
        'Create gallery-worthy pieces'
      ],
      context: 'A personal project born from the desire to experiment freely without client constraints, resulting in a distinctive artistic voice.'
    },
    mediaBlocks: [
      {
        type: 'full-width',
        images: ['https://images.unsplash.com/photo-1541961017774-22349e4a1262?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920']
      },
      {
        type: 'split',
        images: [
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          'https://images.unsplash.com/photo-1549887534-1541e9326642?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
        ]
      }
    ],
    process: {
      title: 'Creative Exploration',
      description: 'Each piece began as digital sketches that evolved through layers of experimentation, iteration, and happy accidents.',
      images: [
        'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1557672172-298e090bd0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ]
    },
    highlight: {
      quote: 'Art doesn\'t have to solve problems. Sometimes, it just needs to make you feel something.',
      author: 'Artist Statement'
    },
    results: {
      description: 'The collection received recognition from the design community and opened new avenues for creative collaboration.',
      images: [
        'https://images.unsplash.com/photo-1557672172-298e090bd0f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'
      ],
      impact: [
        'Featured in 3 digital art galleries',
        '10,000+ saves on creative platforms',
        'Commissioned for commercial projects'
      ]
    },
    nextProject: 5
  },
  5: {
    id: 5,
    title: 'Minimal Brand Design',
    category: 'Graphic Design',
    shortDescription: 'A refined branding project that proves less is more, using restraint and precision to create lasting impact.',
    heroImage: 'https://images.unsplash.com/photo-1678875947521-91356abd883d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    overview: {
      concept: 'This project embraces minimalism not as a trend but as a philosophy, stripping away excess to reveal the essential.',
      goals: [
        'Create timeless visual identity',
        'Maximize impact with minimal elements',
        'Ensure versatility across applications'
      ],
      context: 'Designed for a boutique consultancy firm that values sophistication, clarity, and understated elegance.'
    },
    mediaBlocks: [
      {
        type: 'split',
        images: [
          'https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
          'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
        ]
      },
      {
        type: 'full-width',
        images: ['https://images.unsplash.com/photo-1626785774573-4b799315345d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920']
      }
    ],
    process: {
      title: 'Refinement Process',
      description: 'The journey to simplicity required countless iterations, each one removing the non-essential until only the perfect remained.',
      images: [
        'https://images.unsplash.com/photo-1586281380614-nested-89b55661d6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        'https://images.unsplash.com/photo-1542744095-291d1f67b221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
      ]
    },
    highlight: {
      quote: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.',
      author: 'Antoine de Saint-Exupéry'
    },
    results: {
      description: 'The minimalist approach resulted in a brand identity that stands out through restraint rather than excess.',
      images: [
        'https://images.unsplash.com/photo-1634942537034-2531766767d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920'
      ],
      impact: [
        'Recognized in design awards',
        'Client revenue increased 40% year-over-year',
        'Identity system used unchanged for 3+ years'
      ]
    },
    nextProject: 1
  },
  16: {
    id: 16,
    title: 'Mudac - Museum Campaign',
    category: 'Social Media',
    shortDescription: 'A videomaking campaign celebrating the dialogue between millennial marble tradition and contemporary art at mudaC, the Museum of Arts in Carrara.',
    heroImage: mudacHero,
    overview: {
      concept: 'Carrara is not just a geographical location; it\'s a state of matter. It\'s where the mountain becomes sculpture and history crystallizes in absolute white. For mudaC, the Museum of Arts in Carrara, the goal was not simply to show the rooms, but to capture an atmosphere suspended in time.',
      goals: [
        'Capture the sacred atmosphere of marble and contemporary art',
        'Narrate the encounter between millennia through a new generation\'s eyes',
        'Create a sensory campaign that makes viewers feel part of an extraordinary story'
      ],
      context: 'Video campaign for mudaC museum in Carrara, celebrating the dialogue between the millennial tradition of marble and the irreverent voices of contemporary art through the eyes of active witnesses moved by beauty.'
    },
    mediaBlocks: [
      {
        type: 'full-width',
        images: [mudacHero]
      },
      {
        type: 'cluster',
        images: [mudacImage1, mudacImage2, mudacImage3]
      }
    ],
    process: {
      title: 'Creative Exploration',
      description: 'The project plays with textures: the polished coldness of classical sculptures clashes and merges with modern installations and the graphic patterns of the walls. The camera lingers on details, transforming each frame into a painting in itself, while the editing follows the rhythm of a calm, inspired breath.\n\nVisually, the direction focuses on geometries of emotion—creating a visual narrative that celebrates not passive spectatorship but active witnessing. The protagonists allow themselves to be moved by beauty, becoming part of the dialogue between past and present.',
      images: [mudacImage1, mudacImage2, mudacImage3]
    },
    highlight: {
      quote: 'Visiting the museum is not an academic act, but a sensory experience that nourishes passion and makes you feel part of an extraordinary story.',
      author: '"mudaC - Lo visito" Campaign'
    },
    results: {
      description: 'The "mudaC - Lo visito" campaign is an affirmation of belonging. It positions the museum as a place where the past is not a burden, but a root from which future inspiration blossoms.\n\nThe video successfully captures the suspended atmosphere of Carrara\'s marble heritage while celebrating contemporary art, creating a choral narrative that speaks to a new generation of museum visitors.',
      images: [mudacLogo, mudacHero],
      impact: [
        'Successful social media campaign launch',
        'Captured the sacred atmosphere of marble and contemporary art',
        'Positioned museum as a sensory experience rather than academic visit'
      ]
    },
    nextProject: 1
  }
};