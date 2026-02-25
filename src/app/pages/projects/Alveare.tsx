import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Hexagon, Users, Heart, Sparkles } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import brochureImage from 'figma:asset/586370cf816fb17b2ba644e5cc8ecca5714c5251.png';
import detailImage from 'figma:asset/deca482eb47b9c225186ff8ad45852dcd0f4ea28.png';

const hexagonalSections = [
  {
    icon: Users,
    title: 'Cooperazione',
    description: 'Tante celle diverse che lavorano per un unico obiettivo comune.',
    color: '#F4A950'
  },
  {
    icon: Heart,
    title: 'Cura',
    description: 'Una comunità operosa che protegge e nutre il futuro.',
    color: '#E8B152'
  },
  {
    icon: Sparkles,
    title: 'Solidarietà',
    description: 'Tre progetti uniti in un unico fronte per i bambini.',
    color: '#D4A145'
  }
];

interface AlveareProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function Alveare({ isMenuOpen, onToggleMenu }: AlveareProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      
      {/* Hero Section with Hexagonal Pattern */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-black">
        {/* Hexagonal background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32">
            <Hexagon className="w-full h-full text-[#F4A950]" strokeWidth={1} />
          </div>
          <div className="absolute top-40 right-20 w-24 h-24">
            <Hexagon className="w-full h-full text-[#E8B152]" strokeWidth={1} />
          </div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28">
            <Hexagon className="w-full h-full text-[#D4A145]" strokeWidth={1} />
          </div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20">
            <Hexagon className="w-full h-full text-[#F4A950]" strokeWidth={1} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <Hexagon className="w-6 h-6 text-[#F4A950]" />
              <span className="inline-block px-6 py-2 bg-[#F4A950]/10 text-[#F4A950] text-sm tracking-widest uppercase rounded-full border border-[#F4A950]/30">
                Graphic Design · Social Media · Branding
              </span>
              <Hexagon className="w-6 h-6 text-[#E8B152]" />
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-[#F4A950] via-[#E8B152] to-[#D4A145] bg-clip-text text-transparent">
                L'Alveare
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Come <span className="text-white font-medium">Architettura di Pensiero</span> — una comunità che nutre il futuro.
            </motion.p>

            <motion.p 
              className="text-base text-zinc-500 italic max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Servizio Civile Universale · Solidarietà e Design
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hero Images Grid */}
      <motion.section 
        className="px-6 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <div 
            className="rounded-3xl overflow-hidden cursor-pointer group relative shadow-2xl border border-[#F4A950]/20"
            onClick={() => setLightboxImage(brochureImage)}
          >
            <img 
              src={brochureImage} 
              alt="L'Alveare - Brochure design"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#F4A950]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.section>

      {/* Hexagonal Concept Cards */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Hexagon className="w-12 h-12 text-[#F4A950] mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              La Metafora <span className="text-[#F4A950]">dell'Alveare</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Cooperazione perfetta: tante celle diverse, un unico obiettivo comune.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hexagonalSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Hexagonal shape effect */}
                <div className="absolute -inset-1 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl"
                  style={{ backgroundColor: section.color }}
                />
                
                <div 
                  className="relative rounded-3xl p-8 border hover:scale-[1.02] transition-all duration-300"
                  style={{ 
                    backgroundColor: section.color,
                    borderColor: section.color
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-white/20 backdrop-blur-sm mx-auto">
                    <section.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white text-center">{section.title}</h3>
                  <p className="text-white/90 leading-relaxed text-center">{section.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Il Contesto Sociale */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Il Contesto <span className="text-[#F4A950]">Sociale</span>
              </h2>
            </div>

            <div 
              className="rounded-3xl p-8 md:p-10 shadow-xl border border-[#F4A950]/30 relative overflow-hidden"
              style={{ backgroundColor: '#F4A950' }}
            >
              {/* Hexagonal pattern overlay */}
              <div className="absolute top-0 right-0 opacity-10">
                <Hexagon className="w-32 h-32 text-white" strokeWidth={1} />
              </div>
              <div className="absolute bottom-0 left-0 opacity-10">
                <Hexagon className="w-24 h-24 text-white" strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <p className="text-lg text-white/90 leading-relaxed mb-5">
                  Nell'ambito del <span className="font-semibold text-white">Servizio Civile Universale</span>, la sfida era comunicare una missione delicata e complessa: riunire sotto un'unica identità visiva tre distinti progetti di volontariato, tutti rivolti al supporto di bambini in situazioni di svantaggio economico e sociale.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-white">
                  <p className="text-base text-white/95 leading-relaxed">
                    Il "contenitore" cartaceo doveva fungere da <span className="font-semibold text-white">ponte</span>, trasformando tre iniziative separate in un <span className="font-semibold">unico fronte di solidarietà</span>.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Il Concept */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Il Concept: <span className="text-[#E8B152]">La Comunità che Nutre</span>
              </h2>
            </div>

            <div 
              className="rounded-3xl p-8 md:p-10 shadow-xl border border-[#E8B152]/30 relative overflow-hidden"
              style={{ backgroundColor: '#E8B152' }}
            >
              {/* Honey drip effect */}
              <div className="absolute top-0 left-1/4 opacity-20">
                <div className="w-2 h-16 bg-white rounded-full" />
              </div>
              <div className="absolute top-0 right-1/3 opacity-15">
                <div className="w-2 h-24 bg-white rounded-full" />
              </div>

              <div className="relative z-10">
                <p className="text-lg text-white/90 leading-relaxed mb-5">
                  Abbiamo scelto <span className="font-semibold text-white">la metafora dell'alveare</span> non solo per richiamare la sensibilità ambientale del gruppo, ma per il suo profondo significato simbolico.
                </p>
                
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  L'alveare rappresenta la <span className="font-semibold text-white">cooperazione perfetta</span>: tante celle diverse che lavorano per un unico obiettivo comune. È l'immagine di una comunità operosa che protegge e <span className="font-semibold">"nutre"</span> il futuro, proprio come i volontari si prendono cura dei più piccoli.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { icon: '🐝', label: 'Cooperazione' },
                    { icon: '🍯', label: 'Nutrimento' },
                    { icon: '👶', label: 'Futuro' }
                  ].map((item) => (
                    <div 
                      key={item.label}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20"
                    >
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <p className="text-white font-semibold">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design e Mediazione */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Design e <span className="text-[#D4A145]">Mediazione</span>
              </h2>
            </div>

            <div 
              className="rounded-3xl p-8 md:p-10 shadow-xl border border-[#D4A145]/30 relative overflow-hidden"
              style={{ backgroundColor: '#D4A145' }}
            >
              {/* Hexagonal grid pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-6 gap-4 p-4">
                  {[...Array(12)].map((_, i) => (
                    <Hexagon key={i} className="w-full h-full text-white" strokeWidth={0.5} />
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-lg text-white/90 leading-relaxed mb-5">
                  Sul piano esecutivo, il compito era <span className="font-semibold text-white">armonizzare la densità informativa istituzionale</span> (una richiesta imprescindibile di inserire molto testo) con l'esigenza di un design snello, empatico e non opprimente.
                </p>
                
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  Sebbene i vincoli di budget abbiano impedito la realizzazione di una fustellatura esagonale esterna, ho trasferito quella <span className="font-semibold text-white">geometria all'interno della gabbia grafica</span> per mantenere ordine e pulizia.
                </p>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                  <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                    <Hexagon className="w-5 h-5" />
                    La Soluzione
                  </h3>
                  <p className="text-base text-white/95 leading-relaxed">
                    Ho integrato le <span className="font-semibold">texture fluide e dorate del miele</span> — su specifica richiesta del team — utilizzandole come elemento visivo per <span className="font-semibold">"addolcire"</span> la lettura e trasmettere calore, bilanciando così il rigore dei contenuti con l'umanità della causa.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="rounded-3xl p-10 md:p-14 shadow-2xl border-2 border-[#F4A950]/40 bg-gradient-to-br from-[#F4A950]/10 via-transparent to-[#E8B152]/10 relative overflow-hidden">
              {/* Central hexagon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <Hexagon className="w-64 h-64 text-[#F4A950]" strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <Hexagon className="w-14 h-14 text-[#F4A950] mx-auto mb-6" strokeWidth={2} />
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Un'Architettura che <span className="text-[#F4A950]">Protegge</span>
                </h2>
                <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                  Dove il design diventa <span className="font-semibold text-white">ponte</span>, il simbolo diventa <span className="font-semibold text-white">azione</span>, e ogni cella dell'alveare lavora per <span className="text-[#F4A950] font-semibold">nutrire il futuro</span>.
                </p>
                <div className="inline-flex items-center gap-3 px-8 py-3 bg-[#F4A950]/20 text-[#F4A950] rounded-full border border-[#F4A950]/40">
                  <Hexagon className="w-4 h-4" />
                  <p className="text-sm font-medium tracking-wide">
                    Cooperazione · Comunità · Cura
                  </p>
                  <Hexagon className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Closing Image */}
      <motion.section 
        className="px-6 pb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-5xl mx-auto">
          <div 
            className="rounded-3xl overflow-hidden cursor-pointer group relative shadow-2xl border border-[#E8B152]/20"
            onClick={() => setLightboxImage(detailImage)}
          >
            <img 
              src={detailImage} 
              alt="L'Alveare - Detail pages"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#E8B152]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.section>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <span className="text-white text-2xl">×</span>
          </button>
          <img 
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      <Footer />
    </div>
  );
}