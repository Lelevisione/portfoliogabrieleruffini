import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Theater, Luggage, Users, BookOpen, Video, X, Play, Instagram } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import posterFullImage from 'figma:asset/e874cd32aab83ede614cd41578c6488285c281c3.png';
import posterVariant1Image from 'figma:asset/a08990b9ac243a015b7ee1b37d9877798ad25e27.png';
import posterVariant2Image from 'figma:asset/12bfed62058b74f3defe0d44cc5222b481fc6f94.png';
import posterVariant3Image from 'figma:asset/7e3a8a81883eac317ed699fa49a1d754c6dc0bbc.png';
import logoBlackImage from 'figma:asset/cef09d021830edd1ba3333b282ebdfd88984c29b.png';
import carouselImage from 'figma:asset/2a7e7af03958bd88d4f1dee5c0495cbea0f93cbe.png';

const conceptHighlights = [
  {
    icon: Theater,
    title: 'Visual Dramaturgy',
    description: 'Translating the theatrical performance into a graphic identity that communicates tension and ambiguity.',
    color: '#C41E3A'
  },
  {
    icon: BookOpen,
    title: 'Logo, not Title',
    description: 'A distinctive brand that encapsulates in a single mark the narrative promise of the performance.',
    color: '#8B0000'
  },
  {
    icon: Luggage,
    title: 'The Suitcase Symbol',
    description: 'Central element that speaks to young people away from home: returning home is baggage that always weighs heavy.',
    color: '#A52A2A'
  }
];

const productionDetails = {
  play: 'Per il tuo Bene',
  author: 'Pier Lorenzo Pisano',
  dates: '23-24 Gennaio',
  time: 'Ore 21.15',
  venue: 'Teatro Sant\'Andrea',
  location: 'Via del Cuore, Pisa',
  cast: [
    'Matteo Gonfiantini',
    'Antonia Grimolizzi',
    'Vincenzo Hideki Kenichi Sacco',
    'Chiara Santini',
    'Annamaria Congedo',
    'Federico Librino'
  ],
  crew: {
    regia: 'Tiziano Rovai',
    assistenzaRegia: 'Natalia Menconi',
    assistenzaTecnica: 'Luca Simonetti',
    attrezzeria: 'Francesco dal Dotto e Leonardo Micheli',
    progettoGrafico: 'Gabriele Ruffini'
  }
};

interface PerIlTuoBeneProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function PerIlTuoBene({ isMenuOpen, onToggleMenu }: PerIlTuoBeneProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      
      {/* Hero Section - Theatrical Curtain */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        {/* Red curtain background texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B0000] via-[#C41E3A] to-black opacity-30" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`,
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          {/* Dramatic Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Theater className="w-10 h-10 text-[#C41E3A]" />
              <span className="inline-block px-4 py-2 bg-[#C41E3A]/20 text-[#FF6B6B] text-sm tracking-widest uppercase rounded-full border border-[#C41E3A]/40">
                Graphic Design · Theater Branding · Communication
              </span>
            </div>

            {/* Logo Display */}
            <div className="mb-12 flex justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative max-w-2xl"
              >
                <img 
                  src={logoBlackImage}
                  alt="Per il tuo Bene - Logo"
                  className="w-full h-auto filter drop-shadow-2xl"
                />
                {/* Red glow effect */}
                <div className="absolute inset-0 bg-[#C41E3A] blur-3xl opacity-20 -z-10" />
              </motion.div>
            </div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Translating Dramaturgy <br />
              <span className="text-[#C41E3A]">into Visual Identity</span>
            </motion.h1>

            <motion.p 
              className="text-2xl md:text-3xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Designing for theater means giving visual form to the invisible: 
              <span className="text-white font-medium"> tension, ambiguity, and the narrative promise</span> encapsulated in a single mark.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Concept */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Il Concept: Logo, Non Titolo
            </h2>
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              Per lo spettacolo <span className="text-[#C41E3A] font-semibold">"Per il tuo bene"</span>, 
              la scelta è stata <span className="text-white font-semibold">radicale</span>: 
              non limitarsi a "scrivere" il titolo, ma <span className="text-white font-semibold">costruire per esso un vero e proprio logo</span>. 
              Un marchio distintivo capace di racchiudere la tensione e l'ambiguità dello spettacolo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {conceptHighlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className="relative p-8 bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 h-full border border-zinc-800 hover:border-[#C41E3A]/50"
                  style={{ borderRadius: '32px' }}
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <item.icon size={36} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-white">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-center">{item.description}</p>
                  
                  {/* Red accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                      borderRadius: '0 0 32px 32px'
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Solution */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-[#C41E3A]/10 to-[#8B0000]/10 p-12 md:p-16 border border-[#C41E3A]/30"
            style={{ borderRadius: '48px' }}
          >
            <Theater className="w-16 h-16 mx-auto mb-8 text-[#C41E3A]" />
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">La Soluzione Visiva</h3>
            <p className="text-xl text-zinc-300 leading-relaxed mb-6">
              Ho trattato lo spettacolo come <span className="text-white font-semibold">un'entità viva</span>, 
              dotandolo di un marchio distintivo capace di comunicare con la stessa forza 
              <span className="text-[#C41E3A] font-semibold"> sia sulla carta stampata che negli spazi digitali</span>.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed italic">
              "Non è solo il nome di uno show; è il <span className="text-white font-semibold">sigillo visivo di una promessa narrativa</span>."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Poster - Full Bleed Drama */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              La Locandina: Teatro e Identità
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              La locandina fonde elementi chiave dello spettacolo senza rivelare troppo. 
              Al cuore: la <span className="text-[#C41E3A] font-semibold">valigia</span>, simbolo del 
              <span className="text-white font-semibold"> dialogo con studenti e giovani fuori sede</span> di Pisa.
            </p>
          </motion.div>

          {/* Hero Poster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer group mb-12"
            onClick={() => setLightboxImage(posterFullImage)}
          >
            <div 
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: '24px' }}
            >
              <img 
                src={posterFullImage}
                alt="Per il tuo Bene - Locandina Principale"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl font-bold">
                  Visualizza Locandina
                </span>
              </div>
              {/* Red theater glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(196,30,58,0.3)] pointer-events-none" style={{ borderRadius: '24px' }} />
            </div>
          </motion.div>

          {/* Tagline emphasis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block px-8 py-4 bg-zinc-900 border-2 border-[#C41E3A] rounded-full">
              <p className="text-2xl md:text-3xl font-serif italic text-zinc-300">
                "Tornare <span className="text-[#C41E3A] font-bold">a casa</span> è un bagaglio che pesa sempre"
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Poster Variations */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Variazioni sul Tema
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Un sistema visivo <span className="text-white font-semibold">versatile e riconoscibile</span>, 
              adattabile a diversi formati mantenendo l'identità teatrale drammatica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[posterVariant1Image, posterVariant2Image, posterVariant3Image].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer group"
                onClick={() => setLightboxImage(image)}
              >
                <div 
                  className="relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                  style={{ borderRadius: '20px' }}
                >
                  <img 
                    src={image}
                    alt={`Variazione Locandina ${index + 1}`}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white text-lg font-semibold">
                      Variante {index + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Suitcase Symbol */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Icon */}
            <div className="relative">
              <div className="w-full aspect-square rounded-full bg-gradient-radial from-[#C41E3A]/20 to-transparent flex items-center justify-center">
                <Luggage className="w-40 h-40 md:w-56 md:h-56 text-[#C41E3A]" />
              </div>
              <div className="absolute inset-0 bg-[#C41E3A] blur-3xl opacity-20 -z-10" />
            </div>

            {/* Right: Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                La Valigia: <br />
                <span className="text-[#C41E3A]">Elemento Centrale</span>
              </h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                La valigia diventa <span className="text-white font-semibold">protagonista visiva</span>, 
                sottolineando il dialogo che la compagnia vuole instaurare con il pubblico target: 
                il gran numero di <span className="text-[#C41E3A] font-semibold">studenti e giovani lavoratori fuori sede</span> che 
                vivono nella città di Pisa.
              </p>
              <div className="flex items-start gap-3 p-6 bg-zinc-900 border border-zinc-800" style={{ borderRadius: '24px' }}>
                <Users className="w-6 h-6 text-[#C41E3A] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-2">Target Audience</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    Studenti universitari e giovani professionisti che conoscono il peso emotivo del tornare a casa, 
                    della valigia come simbolo di transizione e identità.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section - Placeholder for Future Video */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4 text-white">
              <Video className="w-10 h-10 text-[#C41E3A]" />
              Lo Spettacolo in Movimento
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Scopri l'energia teatrale dietro l'identità visiva attraverso il video dello spettacolo.
            </p>
          </motion.div>

          {/* Video Vimeo Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video overflow-hidden shadow-2xl"
            style={{ borderRadius: '24px' }}
          >
            <iframe 
              src="https://player.vimeo.com/video/1167864764?h=a7c4d5e3f1&title=0&byline=0&portrait=0"
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Per il tuo Bene - Video"
            />
          </motion.div>
        </div>
      </section>

      {/* Production Details */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Dettagli della Produzione
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Show Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-[#C41E3A]/10 to-[#8B0000]/5 border border-[#C41E3A]/30"
              style={{ borderRadius: '32px' }}
            >
              <Theater className="w-12 h-12 text-[#C41E3A] mb-6" />
              <h3 className="text-3xl font-bold mb-6 text-white">{productionDetails.play}</h3>
              <div className="space-y-4 text-zinc-300">
                <div>
                  <span className="text-zinc-500 text-sm uppercase tracking-wide">Autore</span>
                  <p className="text-xl text-white font-semibold">{productionDetails.author}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-zinc-500 text-sm uppercase tracking-wide">Date</span>
                    <p className="text-lg text-[#C41E3A] font-bold">{productionDetails.dates}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500 text-sm uppercase tracking-wide">Orario</span>
                    <p className="text-lg text-[#C41E3A] font-bold">{productionDetails.time}</p>
                  </div>
                </div>
                <div>
                  <span className="text-zinc-500 text-sm uppercase tracking-wide">Sede</span>
                  <p className="text-lg text-white font-semibold">{productionDetails.venue}</p>
                  <p className="text-zinc-400">{productionDetails.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Cast & Crew */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Cast */}
              <div className="p-6 bg-zinc-900 border border-zinc-800" style={{ borderRadius: '24px' }}>
                <h4 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                  <Users className="w-6 h-6 text-[#C41E3A]" />
                  Cast
                </h4>
                <ul className="space-y-2">
                  {productionDetails.cast.map((actor, index) => (
                    <li key={index} className="text-zinc-400 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]" />
                      {actor}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Crew */}
              <div className="p-6 bg-zinc-900 border border-zinc-800" style={{ borderRadius: '24px' }}>
                <h4 className="text-xl font-bold mb-4 text-white">Team Creativo</h4>
                <div className="space-y-3 text-sm">
                  {Object.entries(productionDetails.crew).map(([role, name], index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-zinc-500 capitalize">{role.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className={`text-zinc-300 font-medium ${role === 'progettoGrafico' ? 'text-[#C41E3A]' : ''}`}>
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Strategy Section - EMOTIONAL SHORT-CIRCUIT */}
      <section className="px-6 py-16 relative overflow-hidden">
        {/* Childlike background elements */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `radial-gradient(circle, #FFD700 2px, transparent 2px)`,
              backgroundSize: '50px 50px'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-8">
              <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#FFD700]/20 via-[#FF6B6B]/20 to-[#4ECDC4]/20 rounded-full border-2 border-dashed border-zinc-700">
                <span className="text-3xl">🎨</span>
                <span className="text-sm uppercase tracking-widest text-zinc-400 font-bold">Strategia Social</span>
                <span className="text-3xl">👶</span>
              </div>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Il Rovescio della Medaglia: <br />
              <span className="bg-gradient-to-r from-[#FFD700] via-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
                Lo Sguardo Ingenuo del Bambino
              </span>
            </h2>

            <p className="text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-12">
              La strategia comunicativa <span className="text-white font-semibold">ribalta la prospettiva drammaturgica</span> esplorando 
              la famiglia filtrata dallo sguardo <span className="text-[#FFD700] font-semibold">ingenuo e disarmante</span> di un bambino.
            </p>
          </motion.div>

          {/* The Concept Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div 
                className="p-8 bg-zinc-900 border-4 border-[#FFD700]/30 hover:border-[#FFD700] transition-all duration-300 h-full"
                style={{ borderRadius: '32px' }}
              >
                <div className="text-6xl mb-6 text-center">✏️</div>
                <h3 className="text-2xl font-bold mb-4 text-[#FFD700] text-center">Estetica Infantile</h3>
                <p className="text-zinc-400 leading-relaxed text-center">
                  Visual design basato sul <span className="text-white font-semibold">disegno infantile</span> con 
                  animazioni dal <span className="text-white font-semibold">tratto imperfetto</span>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group"
            >
              <div 
                className="p-8 bg-zinc-900 border-4 border-[#FF6B6B]/30 hover:border-[#FF6B6B] transition-all duration-300 h-full"
                style={{ borderRadius: '32px' }}
              >
                <div className="text-6xl mb-6 text-center">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-[#FF6B6B] text-center">Cortocircuito Emotivo</h3>
                <p className="text-zinc-400 leading-relaxed text-center">
                  L'innocenza apparente <span className="text-white font-semibold">amplifica per contrasto</span> le 
                  tensioni del testo drammatico.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group"
            >
              <div 
                className="p-8 bg-zinc-900 border-4 border-[#4ECDC4]/30 hover:border-[#4ECDC4] transition-all duration-300 h-full"
                style={{ borderRadius: '32px' }}
              >
                <div className="text-6xl mb-6 text-center">🎭</div>
                <h3 className="text-2xl font-bold mb-4 text-[#4ECDC4] text-center">Tenero & Inquietante</h3>
                <p className="text-zinc-400 leading-relaxed text-center">
                  Svela l'<span className="text-white font-semibold">ipocrisia nascosta</span> dietro la formula 
                  "per il tuo bene" con una dolcezza disturbante.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Instagram Carousel Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3 text-white">
                <Instagram className="w-10 h-10 text-[#FF6B6B]" />
                Carosello Instagram: La Famiglia Disegnata
              </h3>
              <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                Otto slide che raccontano la <span className="text-white font-semibold">verità nascosta</span> dietro 
                i sorrisi a pastello e le <span className="text-[#FFD700] font-semibold">casette disegnate</span> da un bambino.
              </p>
            </div>

            <div 
              className="relative overflow-hidden shadow-2xl border-4 border-dashed border-zinc-800 hover:border-[#FFD700]/50 transition-all duration-300 cursor-pointer group"
              style={{ borderRadius: '32px' }}
              onClick={() => setLightboxImage(carouselImage)}
            >
              <img 
                src={carouselImage}
                alt="Carosello Instagram - Per il tuo Bene"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl font-bold">
                  Visualizza Carosello Completo
                </span>
              </div>
            </div>
          </motion.div>

          {/* Strategy Explanation Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <div 
              className="p-12 md:p-16 bg-gradient-to-br from-[#FFD700]/10 via-[#FF6B6B]/10 to-[#4ECDC4]/10 border-4 border-zinc-800"
              style={{ borderRadius: '48px' }}
            >
              {/* Crayon scribble effect */}
              <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 10 50 Q 60 20, 100 50 T 190 50" 
                    stroke="#FFD700" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path 
                    d="M 10 100 Q 60 70, 100 100 T 190 100" 
                    stroke="#FF6B6B" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path 
                    d="M 10 150 Q 60 120, 100 150 T 190 150" 
                    stroke="#4ECDC4" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <span className="text-5xl">👨‍👩‍👧‍👦</span>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#FFD700] via-[#FF6B6B] to-[#4ECDC4] rounded-full" />
                  <span className="text-5xl">🖍️</span>
                </div>

                <blockquote className="text-2xl md:text-3xl text-center text-zinc-200 leading-relaxed mb-8">
                  "Questa scelta stilistica <span className="text-[#FFD700] font-bold">apparentemente innocente</span> amplifica 
                  per contrasto le tensioni del testo, svelando l'<span className="text-[#FF6B6B] font-bold">ipocrisia nascosta</span> dietro 
                  la formula '<span className="text-white font-bold italic">per il tuo bene</span>' e restituendo una narrazione visiva che è 
                  al contempo <span className="text-[#4ECDC4] font-bold">tenera e inquietante</span>."
                </blockquote>

                <div className="grid md:grid-cols-2 gap-6 text-lg">
                  <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-2xl">
                    <span className="text-3xl">🌈</span>
                    <div>
                      <h4 className="font-bold text-[#FFD700] mb-2">Visual Childlike</h4>
                      <p className="text-zinc-400 text-base">Colori primari, tratto infantile, imperfezioni volute</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-2xl">
                    <span className="text-3xl">💔</span>
                    <div>
                      <h4 className="font-bold text-[#FF6B6B] mb-2">Contenuto Dark</h4>
                      <p className="text-zinc-400 text-base">Tensioni familiari, manipolazione emotiva, ipocrisia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative overflow-hidden bg-gradient-to-br from-[#8B0000] via-[#C41E3A] to-[#8B0000] p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ borderRadius: '60px' }}
          >
            {/* Curtain texture overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)`,
              }}
            />
            
            <div className="relative z-10">
              <Theater className="w-20 h-20 mx-auto mb-8 text-white" />
              <blockquote className="text-3xl md:text-4xl font-bold leading-relaxed mb-8 text-white">
                "Trasformare un titolo in un <span className="italic">logo</span> significa dare allo spettacolo 
                <span className="block mt-4">un'identità <span className="underline">solida, riconoscibile, versatile</span>.</span>"
              </blockquote>
              <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full" />
              <p className="text-zinc-200 text-lg leading-relaxed">
                Non è solo il nome di uno show. <br />
                È il <span className="font-bold">sigillo visivo</span> di una promessa narrativa.
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

      {/* Video Modal - Placeholder for future implementation */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
              onClick={() => setShowVideoModal(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl aspect-video bg-zinc-900 rounded-lg flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center p-12">
                <Video className="w-16 h-16 text-[#C41E3A] mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Video Placeholder</h3>
                <p className="text-zinc-400 mb-6">
                  Per inserire il video, sostituisci questo div con un iframe YouTube o Vimeo:
                </p>
                <code className="text-sm text-zinc-500 bg-zinc-800 px-4 py-2 rounded block max-w-xl mx-auto">
                  {`<iframe src="https://www.youtube.com/embed/VIDEO_ID" ... ></iframe>`}
                </code>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}