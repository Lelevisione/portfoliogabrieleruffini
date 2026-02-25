import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, BookOpen, Sparkles, Grid3x3, Palette, Zap, X } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';

const epochs = [
  {
    title: 'Arts & Crafts',
    designer: 'William Morris',
    years: '1880-1910',
    description: 'La pagina fiorisce con pattern intricati ispirati alla natura e una tipografia umanista, celebrando l\'artigianato e la bellezza organica.',
    color: '#8B4513',
    style: 'organic'
  },
  {
    title: 'Bauhaus & Swiss Style',
    designer: 'Josef Müller-Brockmann',
    years: '1920-1960',
    description: 'La griglia si irrigidisce: lo spazio bianco diventa protagonista, le forme geometriche dominano con rigore assoluto del sans-serif.',
    color: '#E63946',
    style: 'geometric'
  },
  {
    title: 'Post-Modernism',
    designer: 'Paula Scher',
    years: '1980-2000',
    description: 'La gabbia esplode in un caos controllato, celebrando la rottura delle regole con espressività tipografica e sovrapposizioni audaci.',
    color: '#F77F00',
    style: 'chaotic'
  },
  {
    title: 'Digital Age',
    designer: 'Beeple',
    years: '2000-oggi',
    description: 'Colori acidi, errori digitali (glitch) e render 3D dissolvono la realtà, esplorando l\'estetica dell\'imperfezione tecnologica e del virtuale.',
    color: '#06FFA5',
    style: 'digital'
  }
];

interface StoriaGraphicDesignProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function StoriaGraphicDesign({ isMenuOpen, onToggleMenu }: StoriaGraphicDesignProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [activeEpoch, setActiveEpoch] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      
      {/* Hero Section - Metamorphic */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #8B4513 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #E63946 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, #F77F00 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, #06FFA5 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #8B4513 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

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
              <BookOpen className="w-8 h-8 text-white/80" />
              <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs tracking-wide rounded-full border border-white/20">
                Graphic Design · Editoria Digitale
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Cronache del Segno
            </h1>
            <p className="text-2xl md:text-3xl text-zinc-400 max-w-3xl mb-6 font-light">
              Un Viaggio Interattivo nell'Editoria Digitale
            </p>
            <p className="text-lg text-zinc-500 max-w-2xl">
              Un eBook metamorfico che cambia pelle ad ogni epoca, dove la forma è il contenuto e il design diventa narrazione.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image with Overlay */}
      <motion.section 
        className="px-6 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden relative group cursor-pointer max-h-[500px]"
            onClick={() => setLightboxImage('https://i.imgur.com/UsGpoyv.png')}
          >
            <img 
              src="https://i.imgur.com/UsGpoyv.png"
              alt="Storia del Graphic Design eBook Cover"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-8 left-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm">Click per ingrandire</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Concept Section */}
      <section className="px-6 py-16 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                Il Concept
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
                Progettare un libro sulla storia della grafica significa assumersi una <span className="text-white font-semibold">doppia responsabilità</span>: narrare il passato e, al contempo, <span className="text-white font-semibold">incarnarlo</span>.
              </p>
              <p className="text-zinc-300 leading-relaxed text-lg">
                Per il corso di Editoria Digitale all'Università di Pisa, ho realizzato <span className="italic text-white">"Piccola Storia della progettazione grafica"</span>, un eBook interattivo che esplora l'evoluzione del linguaggio visivo, dalle radici organiche dell'Arts & Crafts fino alle frontiere glitch della Digital Age.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-zinc-900 rounded-xl border border-white/10">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  Standard Tecnico
                </h3>
                <p className="text-zinc-400">EPUB 3 Fixed Layout per controllo totale sulla composizione</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-xl border border-white/10">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  Elementi Interattivi
                </h3>
                <p className="text-zinc-400">Timeline navigabile con approfondimenti contestuali</p>
              </div>
              <div className="p-6 bg-zinc-900 rounded-xl border border-white/10">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-pink-400" />
                  Layout Metamorfico
                </h3>
                <p className="text-zinc-400">Ogni capitolo riflette visivamente lo Zeitgeist dell'epoca</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline of Epochs - Interactive */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Una Metamorfosi Visiva</h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              Il libro è un camaleonte che muta pelle capitolo dopo capitolo, 
              riflettendo lo spirito di ogni epoca attraverso layout, tipografia e composizione.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {epochs.map((epoch, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveEpoch(index)}
                onMouseLeave={() => setActiveEpoch(null)}
              >
                <div 
                  className="p-8 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden"
                  style={{
                    borderColor: activeEpoch === index ? epoch.color : 'rgba(255,255,255,0.1)',
                    backgroundColor: activeEpoch === index ? `${epoch.color}15` : 'rgba(24,24,27,0.5)',
                  }}
                >
                  {/* Decorative element based on style */}
                  <div className="absolute top-4 right-4 opacity-20">
                    {epoch.style === 'organic' && (
                      <svg width="60" height="60" viewBox="0 0 60 60">
                        <path d="M30,10 Q40,20 30,30 Q20,40 30,50 Q40,40 50,30 Q40,20 30,10" fill={epoch.color} />
                      </svg>
                    )}
                    {epoch.style === 'geometric' && (
                      <Grid3x3 size={60} style={{ color: epoch.color }} />
                    )}
                    {epoch.style === 'chaotic' && (
                      <div className="text-6xl font-black" style={{ color: epoch.color, transform: 'rotate(-15deg)' }}>?!</div>
                    )}
                    {epoch.style === 'digital' && (
                      <Zap size={60} style={{ color: epoch.color }} />
                    )}
                  </div>

                  <span 
                    className="text-sm font-mono mb-2 block transition-colors duration-300"
                    style={{ color: activeEpoch === index ? epoch.color : '#71717a' }}
                  >
                    {epoch.years}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{epoch.title}</h3>
                  <p className="text-sm text-zinc-500 mb-4">Designer: {epoch.designer}</p>
                  <p className="text-zinc-300 leading-relaxed">{epoch.description}</p>

                  {/* Hover indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: activeEpoch === index ? 1 : 0, x: activeEpoch === index ? 0 : -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight style={{ color: epoch.color }} size={24} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="px-6 py-16 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Zap className="w-8 h-8 text-purple-400" />
              Tecnica e Interattività
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 bg-zinc-900/50 rounded-xl border border-purple-500/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">EPUB 3</div>
                <h3 className="font-semibold mb-2">Fixed Layout</h3>
                <p className="text-zinc-400 text-sm">
                  Controllo assoluto sulla composizione, trattando lo schermo come una tela dove tipografia e immagini dialogano senza compromessi.
                </p>
              </div>

              <div className="p-6 bg-zinc-900/50 rounded-xl border border-blue-500/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <h3 className="font-semibold mb-2">Interattivo</h3>
                <p className="text-zinc-400 text-sm">
                  Timeline navigabile dove l'utente può interagire premendo su anni specifici per svelare approfondimenti contestuali.
                </p>
              </div>

              <div className="p-6 bg-zinc-900/50 rounded-xl border border-pink-500/20">
                <div className="text-4xl font-bold text-pink-400 mb-2">4+</div>
                <h3 className="font-semibold mb-2">Layout Unici</h3>
                <p className="text-zinc-400 text-sm">
                  Ogni epoca storica ha il suo layout distintivo, dalla natura organica di Morris al glitch digitale contemporaneo.
                </p>
              </div>
            </div>

            <div className="p-8 bg-zinc-900 rounded-2xl border border-white/10">
              <p className="text-lg text-zinc-300 leading-relaxed">
                L'esperienza non è solo visiva, ma <span className="text-white font-semibold">tattile</span>: 
                il libro integra elementi di <span className="text-purple-400">interaction design</span> come 
                una timeline navigabile. L'utente non subisce passivamente la cronologia, ma può interagire 
                con essa, trasformando la lettura in un <span className="text-white font-semibold">atto di scoperta</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Screenshots */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Screenshots del Progetto</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://i.imgur.com/7qY2zs5.png',
              'https://i.imgur.com/qq0HZPQ.png',
              'https://i.imgur.com/tUU6s3L.png',
              'https://i.imgur.com/MtzOEC5.png',
              'https://i.imgur.com/VO3nicR.png',
              'https://i.imgur.com/aP92XwY.png',
              'https://i.imgur.com/ykhCD0w.png'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setLightboxImage(image)}
              >
                <img 
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                    Click to expand
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Quote */}
      <section className="px-6 py-24 bg-zinc-950">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto" />
          </div>
          <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
            "Questo progetto è un <span className="text-white font-semibold">manifesto del mio metodo</span>: 
            unire la ricerca accademica con la sperimentazione visiva."
          </blockquote>
          <p className="text-zinc-400 text-lg">
            Non è solo un manuale, ma un'<span className="text-white">esperienza immersiva</span> dove 
            la forma è il contenuto, dimostrando come il graphic design non sia mai semplice decorazione, 
            ma lo <span className="text-white">specchio culturale del suo tempo</span>.
          </p>
        </motion.div>
      </section>

      {/* Final Impact */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">L'Obiettivo</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-lg">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-zinc-300">
                    <span className="text-white font-semibold">Ricerca accademica</span> nata dalla tesi triennale
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-zinc-300">
                    <span className="text-white font-semibold">Sperimentazione visiva</span> attraverso layout metamorfici
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-zinc-300">
                    <span className="text-white font-semibold">Esperienza immersiva</span> dove forma e contenuto sono uno
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4 bg-zinc-900/50 rounded-lg">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-zinc-300">
                    <span className="text-white font-semibold">Design culturale</span> come specchio del tempo
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl border border-purple-500/20">
              <p className="text-xl text-zinc-200 leading-relaxed text-center">
                Un progetto che dimostra come il <span className="text-white font-bold">design editoriale digitale</span> 
                possa trascendere la semplice trasposizione di contenuti su schermo, diventando invece 
                un <span className="text-purple-300">medium narrativo autonomo</span> che amplifica e arricchisce 
                il messaggio attraverso la forma stessa.
              </p>
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