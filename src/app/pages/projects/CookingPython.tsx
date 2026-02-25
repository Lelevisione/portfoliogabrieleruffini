import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Code, Sparkles, Palette, Eye, ChefHat, Package, Layout, AlertCircle, X } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import heroImage from 'figma:asset/b7081dcd2cb357715b659b99799700977282cd4c.png';
import recipesImage from 'figma:asset/81508bb5a37127bb5bea20c2489285fe86c469e9.png';
import ingredientsImage from 'figma:asset/52ee05b46bb71e1f45ff6042dc344fc750526c87.png';
import docImage1 from 'figma:asset/d6e26a27814ca9d5cdd75ce0141de9cedd24a36b.png';
import docImage2 from 'figma:asset/cebb812f7b7243e9cb94d36b22e3d3f25243916b.png';
import docImage3 from 'figma:asset/b6a0a06c4067e82eb8ce5a041e0993a8fca20e2f.png';

const features = [
  {
    icon: Package,
    title: 'Gestione Dispensa',
    description: 'Monitora le scorte alimentari domestiche con un\'interfaccia visiva intuitiva',
    color: '#FF69B4'
  },
  {
    icon: ChefHat,
    title: 'Ricettario Intelligente',
    description: 'Verifica la fattibilità delle ricette in base agli ingredienti disponibili',
    color: '#FFA500'
  },
  {
    icon: Sparkles,
    title: 'Calcolo Automatico',
    description: 'Costi e apporti calorici calcolati automaticamente in tempo reale',
    color: '#FFD700'
  }
];

const designPrinciples = [
  {
    number: '01',
    title: 'Design System Centralizzato',
    subtitle: 'Classe Stile',
    description: 'Palette cromatica coerente (BG, CARD_BG, BOTTONE_BG), tipografia definita (FONT_TITOLO, FONT_LABEL) e stili widget unificati per garantire consistenza visiva.',
    highlight: 'Hardcoded è il male. DRY is the way.',
    color: '#FF1493'
  },
  {
    number: '02',
    title: 'Gestione Robusta delle Risorse',
    subtitle: 'Fallback & Resilienza',
    description: 'Sistema intelligente con normalizzazione nomi file, verifica esistenza percorsi, fallback automatico per immagini mancanti e adattamento dimensionale dinamico.',
    highlight: 'Niente crash. Solo eleganza.',
    color: '#FF8C00'
  },
  {
    number: '03',
    title: 'Identità Visiva Playful',
    subtitle: 'Branding',
    description: 'Ispirato ai limiti grafici di tkinter e all\'estetica di Cooking Mama e Nintendo DS. Logo chef cartoon che comunica immediatamente il carattere ludico dell\'app.',
    highlight: 'Nostalgia incontra funzionalità.',
    color: '#FFD700'
  }
];

const uxFeatures = [
  {
    title: 'Feedback Immediato',
    description: 'L\'interfaccia reagisce istantaneamente: selezioni ricette, messaggi dettagliati, risposte chiare.',
    icon: '⚡'
  },
  {
    title: 'Selezione Intelligente',
    description: 'Evidenziazione visiva nel ricettario con cambio colore della card selezionata.',
    icon: '🎯'
  },
  {
    title: 'Progressive Disclosure',
    description: 'Griglia ordinata con dettagli nascosti. Le card mostrano solo informazioni essenziali.',
    icon: '📦'
  },
  {
    title: 'Accessibilità Focus',
    description: 'Gestione focus per navigazione da tastiera con apertura posizionata dei popup.',
    icon: '♿'
  }
];

interface CookingPythonProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function CookingPython({ isMenuOpen, onToggleMenu }: CookingPythonProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      
      {/* Hero Section - Playful & Colorful */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Animated checkered pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  #FF69B4 0px,
                  #FF69B4 20px,
                  transparent 20px,
                  transparent 40px
                ),
                repeating-linear-gradient(
                  -45deg,
                  #FFA500 0px,
                  #FFA500 20px,
                  transparent 20px,
                  transparent 40px
                )
              `
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <ChefHat className="w-8 h-8 text-pink-400" />
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500/20 to-orange-500/20 backdrop-blur-sm text-white text-xs tracking-wide rounded-full border border-pink-500/30">
                UI/UX Design · Python · tkinter
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                Cooking Python
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-zinc-400 max-w-3xl mb-6 font-light">
              Quando la Programmazione Incontra la Cucina: Un'Avventura Desktop GUI
            </p>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-pink-400" />
                <span className="text-zinc-400">Python + tkinter</span>
              </div>
              <div className="flex items-center gap-2">
                <Layout className="w-5 h-5 text-orange-400" />
                <span className="text-zinc-400">Desktop GUI</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-yellow-400" />
                <span className="text-zinc-400">Playful Design System</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image - Logo Banner */}
      <motion.section 
        className="px-6 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-2xl overflow-hidden relative shadow-2xl shadow-pink-500/20 bg-gradient-to-r from-pink-500 to-orange-500 p-4"
          >
            <img 
              src={heroImage}
              alt="Cooking Python Logo"
              className="w-full h-auto"
            />
          </div>
        </div>
      </motion.section>

      {/* The Story Section */}
      <section className="px-6 py-16 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 flex items-center gap-4">
              <span className="text-6xl">👨‍🍳</span>
              Il Progetto
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-xl text-zinc-300 leading-relaxed">
                  Il progetto <span className="text-pink-400 font-bold">"Cooking Python"</span> consiste nello sviluppo di un'<span className="text-white font-semibold">applicazione desktop in Python</span> per la gestione domestica di una dispensa alimentare.
                </p>
                
                <p className="text-lg text-zinc-400 leading-relaxed">
                  L'obiettivo dell'elaborato era <span className="text-orange-400 font-semibold">dimostrare l'acquisizione dei concetti fondamentali della programmazione orientata agli oggetti e la capacità di realizzare un'interfaccia grafica (GUI) funzionale</span> tramite la libreria <code className="px-2 py-1 bg-zinc-800 rounded text-pink-400">tkinter</code>.
                </p>

                <div className="p-6 bg-gradient-to-br from-pink-900/20 to-orange-900/20 rounded-xl border border-pink-500/20">
                  <p className="text-zinc-300 leading-relaxed">
                    Il software permette all'utente di <span className="text-white font-semibold">monitorare le scorte, calcolare automaticamente costi e apporti calorici, e verificare la fattibilità delle ricette</span> in base agli ingredienti disponibili.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-6 bg-zinc-900/50 rounded-xl border border-white/10 hover:border-white/20 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-3 rounded-lg transition-transform group-hover:scale-110"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <feature.icon size={24} style={{ color: feature.color }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                        <p className="text-zinc-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Custom Icons Section - Ricette e Ingredienti */}
      <section className="px-6 py-24 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
              <Sparkles className="w-10 h-10 text-yellow-400" />
              Icone Personalizzate & Asset Grafici
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Ogni ricetta e ingrediente ha la sua <span className="text-white font-semibold">illustrazione custom</span>, 
              creata appositamente per dare carattere e personalità all'applicazione.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ricette */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
                <div 
                  className="relative bg-zinc-900/90 p-8 rounded-2xl border-2 border-pink-500/30 cursor-pointer overflow-hidden"
                  onClick={() => setLightboxImage(recipesImage)}
                >
                  <div className="absolute top-4 right-4 text-4xl opacity-20">🍰</div>
                  <h3 className="text-3xl font-bold mb-4 text-pink-300">Ricette</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Pizza margherita, torta sacher, tiramisù, sushi, apple pie, tortellini in brodo... 
                    <span className="text-white font-semibold"> Ogni ricetta ha la sua icona dettagliata</span>, 
                    disegnata con uno stile illustrativo che richiama l'estetica nostalgica dei giochi di cucina.
                  </p>
                  <div className="relative rounded-xl overflow-hidden border-2 border-pink-500/20 hover:border-pink-500/50 transition-all">
                    <img 
                      src={recipesImage}
                      alt="Icone Ricette Personalizzate"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-semibold">Click per ingrandire</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ingredienti */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 rounded-2xl opacity-30 blur-xl group-hover:opacity-50 transition-opacity" />
                <div 
                  className="relative bg-zinc-900/90 p-8 rounded-2xl border-2 border-orange-500/30 cursor-pointer overflow-hidden"
                  onClick={() => setLightboxImage(ingredientsImage)}
                >
                  <div className="absolute top-4 right-4 text-4xl opacity-20">🥗</div>
                  <h3 className="text-3xl font-bold mb-4 text-orange-300">Ingredienti</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Latte, biscotti, aglio, burro, cacao, bistecca, formaggio, lamponi, farina... 
                    <span className="text-white font-semibold"> Ogni ingrediente è rappresentato con cura</span>, 
                    creando un sistema visivo coerente che facilita il riconoscimento immediato.
                  </p>
                  <div className="relative rounded-xl overflow-hidden border-2 border-orange-500/20 hover:border-orange-500/50 transition-all">
                    <img 
                      src={ingredientsImage}
                      alt="Icone Ingredienti Personalizzate"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-white text-sm font-semibold">Click per ingrandire</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Design Approach */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-12 p-8 bg-gradient-to-br from-yellow-900/20 to-pink-900/20 rounded-2xl border border-yellow-500/20"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-3">🎨</div>
                <h4 className="font-bold text-lg mb-2 text-yellow-300">Stile Coerente</h4>
                <p className="text-zinc-400 text-sm">
                  Tutte le icone seguono lo stesso linguaggio visivo: linee morbide, colori vivaci, stile cartoon
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">🔍</div>
                <h4 className="font-bold text-lg mb-2 text-orange-300">Riconoscibilità</h4>
                <p className="text-zinc-400 text-sm">
                  Ogni elemento è immediatamente identificabile, anche a dimensioni ridotte nell'interfaccia
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-3">💖</div>
                <h4 className="font-bold text-lg mb-2 text-pink-300">Personalità</h4>
                <p className="text-zinc-400 text-sm">
                  Le illustrazioni danno carattere all'app, trasformando una dispensa in un'esperienza playful
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design System - Visual Breakdown */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
              <Palette className="w-10 h-10 text-pink-400" />
              Design System e Identità Visiva
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              L'interfaccia è stata progettata non solo per essere funzionale, ma anche <span className="text-white font-semibold">visivamente coerente e robusta</span>. 
              Un approccio strutturato basato su costanti centralizzate e gestione dinamica delle risorse.
            </p>
          </motion.div>

          <div className="space-y-8">
            {designPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
                onMouseEnter={() => setActiveSection(index)}
                onMouseLeave={() => setActiveSection(null)}
              >
                <div 
                  className="relative p-8 md:p-10 rounded-2xl border-2 transition-all duration-300 overflow-hidden"
                  style={{
                    borderColor: activeSection === index ? principle.color : 'rgba(255,255,255,0.1)',
                    backgroundColor: activeSection === index ? `${principle.color}08` : 'rgba(24,24,27,0.5)'
                  }}
                >
                  {/* Large number background */}
                  <div 
                    className="absolute top-4 right-4 text-[120px] font-black opacity-5 leading-none"
                    style={{ color: principle.color }}
                  >
                    {principle.number}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <span 
                          className="text-sm font-mono mb-2 block"
                          style={{ color: activeSection === index ? principle.color : '#71717a' }}
                        >
                          {principle.subtitle}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{principle.title}</h3>
                      </div>
                      <span 
                        className="text-5xl font-black opacity-30"
                        style={{ color: principle.color }}
                      >
                        {principle.number}
                      </span>
                    </div>

                    <p className="text-zinc-300 text-lg leading-relaxed mb-4">
                      {principle.description}
                    </p>

                    <div 
                      className="inline-block px-4 py-2 rounded-lg font-semibold text-sm"
                      style={{ 
                        backgroundColor: `${principle.color}20`,
                        color: principle.color
                      }}
                    >
                      💡 {principle.highlight}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Documentation Images Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden cursor-pointer group relative border-2 border-pink-500/30"
              onClick={() => setLightboxImage(docImage1)}
            >
              <img 
                src={docImage1}
                alt="Project Overview Documentation"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                  📖 Visualizza Overview
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl overflow-hidden cursor-pointer group relative border-2 border-orange-500/30"
              onClick={() => setLightboxImage(docImage2)}
            >
              <img 
                src={docImage2}
                alt="Design System Documentation"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                  📖 Visualizza Documentazione
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden cursor-pointer group relative border-2 border-yellow-500/30"
              onClick={() => setLightboxImage(docImage3)}
            >
              <img 
                src={docImage3}
                alt="UX and Accessibility Documentation"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                  📖 Visualizza Documentazione
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UX & Accessibility */}
      <section className="px-6 py-24 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
              <Eye className="w-10 h-10 text-green-400" />
              User Experience & Accessibilità
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              L'interfaccia è stata studiata per <span className="text-white font-semibold">non sovraccaricare la vista</span>, 
              mantenendo contatti visivi con la lista della spesa e utilizzando riferimenti chiari.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {uxFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-xl border border-white/10 hover:border-green-400/30 transition-all group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key UX Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-10 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-2xl border border-green-500/20"
          >
            <div className="flex items-start gap-6">
              <AlertCircle className="w-12 h-12 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-300">Principi Chiave</h3>
                <div className="space-y-3">
                  <p className="text-zinc-300 leading-relaxed">
                    <span className="text-white font-semibold">• Intuitività:</span> L'utente guida il flusso senza bisogno di istruzioni, fornendo risposte chiare alle azioni svolte.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    <span className="text-white font-semibold">• Selezione Specifica:</span> Feedback visivo immediato con evidenziazione per operazioni successive.
                  </p>
                  <p className="text-zinc-300 leading-relaxed">
                    <span className="text-white font-semibold">• Pulizia Visiva:</span> Griglia ordinata con progressive disclosure per evitare sovraccarico cognitivo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="px-6 py-24">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <div className="text-7xl mb-6">🎯</div>
          </div>
          <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8">
            "Non solo <span className="text-pink-400 font-bold">codice funzionale</span>, 
            ma un'esperienza <span className="text-orange-400 font-bold">visivamente coerente</span> e 
            <span className="text-yellow-400 font-bold"> accessibile</span>."
          </blockquote>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Cooking Python dimostra come anche con i limiti di tkinter si possa creare un'interfaccia 
            desktop moderna, playful e robusta, seguendo principi di design solidi e attenzione ai dettagli.
          </p>
        </motion.div>
      </section>

      {/* Technical Stack */}
      <section className="px-6 py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Code className="w-8 h-8 text-blue-400" />
              Stack Tecnico
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-zinc-900 rounded-xl border border-blue-500/20">
                <div className="text-5xl mb-4">🐍</div>
                <h3 className="text-xl font-bold mb-2">Python</h3>
                <p className="text-zinc-400 text-sm">Linguaggio di programmazione OOP con focus su leggibilità e struttura</p>
              </div>

              <div className="p-6 bg-zinc-900 rounded-xl border border-pink-500/20">
                <div className="text-5xl mb-4">🖼️</div>
                <h3 className="text-xl font-bold mb-2">tkinter</h3>
                <p className="text-zinc-400 text-sm">Libreria GUI standard di Python per interfacce desktop cross-platform</p>
              </div>

              <div className="p-6 bg-zinc-900 rounded-xl border border-purple-500/20">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-2">PIL/Pillow</h3>
                <p className="text-zinc-400 text-sm">Gestione avanzata delle immagini con caricamento e adattamento dinamico</p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-2xl border border-pink-500/20">
              <h3 className="text-2xl font-bold mb-4">Risultati del Progetto</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <p className="text-zinc-300">
                    <span className="text-white font-semibold">Struttura OOP solida</span> con separazione delle responsabilità
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <p className="text-zinc-300">
                    <span className="text-white font-semibold">Design system scalabile</span> e manutenibile
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <p className="text-zinc-300">
                    <span className="text-white font-semibold">UX intuitiva</span> con feedback immediato
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✅</span>
                  <p className="text-zinc-300">
                    <span className="text-white font-semibold">Gestione errori robusta</span> con fallback intelligenti
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightboxImage}
              alt="Full size preview"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}