import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Heart, Film, Instagram, Palette, FileText, Sparkles, X } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import businessCardImage from 'figma:asset/6f379c5d719e492939ff90ab982a63073535142d.png';
import logoBlackImage from 'figma:asset/3b8e6a68299896dfc5fae8a3c32742ec2b8a6495.png';
import logoWhiteImage from 'figma:asset/0aea766e84b576e568a02f997bab4db81ade1bcd.png';
import stationeryImage from 'figma:asset/b30401ea87b6d45035c28554b725cbdacdaaab91.png';
import socialCarouselImage from 'figma:asset/437a35669bbe9bb687dfe62e1be0d2a193ce4d6a.png';

const brandValues = [
  {
    icon: '🧵',
    title: 'Il Filo della Matassa',
    description: 'Il groviglio interiore che il paziente porta in seduta, pronto ad essere dipanato con pazienza e cura.',
    color: '#D4A5C4'
  },
  {
    icon: '🦋',
    title: 'Il Bozzolo',
    description: 'Il luogo protetto dove avviene la metamorfosi, la crisalide che precede la rinascita e trasformazione.',
    color: '#A8C7E0'
  },
  {
    icon: 'Ψ',
    title: 'La Lettera PSI',
    description: 'Il simbolo ancestrale della psicologia, fuso attorno al quale si avvolge la narrazione intima del percorso.',
    color: '#9B8BA6'
  }
];

const colorPalette = [
  { 
    name: 'Rosa Quarzo', 
    hex: '#D4A5C4', 
    description: 'Morbido e accogliente',
    gradient: 'from-[#D4A5C4] to-[#E8C5D8]'
  },
  { 
    name: 'Azzurro Sereno', 
    hex: '#A8C7E0', 
    description: 'Profondità rassicurante',
    gradient: 'from-[#A8C7E0] to-[#C5DBF0]'
  },
  { 
    name: 'Lavanda Soft', 
    hex: '#9B8BA6', 
    description: 'Equilibrio e introspezione',
    gradient: 'from-[#9B8BA6] to-[#B5A6BE]'
  },
];

const socialStrategy = [
  {
    title: 'Cinema come Specchio',
    description: 'Il cinema diventa ponte universale per rendere tangibili concetti psicologici astratti attraverso personaggi che amiamo.',
    icon: Film,
    examples: ['Inside Out - Emozioni', 'Personaggi Archetipi', 'Stills Fotografici']
  },
  {
    title: 'Content Curation',
    description: 'Caroselli educativi e Reels evocativi trasformano il feed in una sala di proiezione emotiva dove riconoscersi.',
    icon: Instagram,
    examples: ['Caroselli Educativi', 'Reels Cinematografici', 'Divulgazione Profonda']
  },
  {
    title: 'Abbattere Barriere',
    description: 'I film come archetipi specchio abbattono la diffidenza, aprendo la porta a una psicologia vicina al vissuto di ognuno.',
    icon: Heart,
    examples: ['Archetipi Universali', 'Empatia Immediata', 'Accessibilità']
  }
];

interface PsicologaProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function Psicologa({ isMenuOpen, onToggleMenu }: PsicologaProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      
      {/* Hero Section - Gradient Squircle */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          {/* Hero Squircle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#D4A5C4] via-[#E8D5E8] to-[#A8C7E0] p-12 md:p-16"
            style={{ borderRadius: '60px' }}
          >
            <div className="absolute inset-0 opacity-10">
              <div 
                className="w-full h-full" 
                style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}
              />
            </div>

            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/20" style={{ borderRadius: '60px' }} />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-white drop-shadow-lg" />
                <span className="inline-block px-3 py-1 bg-white/30 text-white text-xs tracking-wide rounded-full border border-white/40 backdrop-blur-sm">
                  Graphic Design · Branding · Social Media Strategy
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl">
                Psicologa
              </h1>
              
              <p className="text-2xl md:text-3xl text-white max-w-3xl mb-8 font-medium leading-relaxed drop-shadow-lg">
                L'Arte di Sbrogliare l'Anima: Un'Identità Visiva che Traduce l'Invisibile
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-white drop-shadow-md" />
                  <span className="text-white font-medium drop-shadow-md">Brand Identity</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-white drop-shadow-md" />
                  <span className="text-white font-medium drop-shadow-md">Comunicazione Social</span>
                </div>
                <div className="flex items-center gap-2">
                  <Film className="w-5 h-5 text-white drop-shadow-md" />
                  <span className="text-white font-medium drop-shadow-md">Cinema come Ponte</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed mb-6">
              Dare forma visiva al delicato lavoro della psicoterapia significa <span className="text-white font-semibold">tradurre l'invisibile</span>. 
              Per la <span className="text-[#D4A5C4] font-semibold">Dottoressa Camilla Ruffini</span>, Psicologa del ciclo di vita, 
              l'obiettivo era creare un'identità che fosse una <span className="text-white font-semibold">promessa di accoglienza e trasformazione</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Il Segno - Logo Meaning */}
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
              Il Segno: Tra Radici Antiche e Metamorfosi
            </h2>
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              Il cuore pulsante del branding risiede nel logo, un <span className="text-white font-semibold">sigillo che racchiude una duplice narrazione</span>. 
              La lettera greca <span className="text-[#D4A5C4] font-bold text-2xl">PSI (Ψ)</span> diventa il fuso attorno al quale si avvolge una storia più intima.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {brandValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 hover:shadow-2xl transition-all duration-300 h-full backdrop-blur-sm border border-white/10"
                  style={{ borderRadius: '40px' }}
                >
                  <div 
                    className="text-6xl mb-6 flex items-center justify-center w-20 h-20 rounded-full mx-auto"
                    style={{ backgroundColor: `${value.color}30` }}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center text-white">{value.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-center">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Variations */}
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
              Declinazioni del Marchio
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Equilibrio sottile tra la <span className="text-white font-semibold">struttura del metodo clinico</span> e la 
              <span className="text-white font-semibold"> fluidità del divenire umano</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Logo Black */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="cursor-pointer group"
              onClick={() => setLightboxImage(logoBlackImage)}
            >
              <div 
                className="relative overflow-hidden shadow-2xl bg-white p-12 flex items-center justify-center min-h-[400px]"
                style={{ borderRadius: '48px' }}
              >
                <img 
                  src={logoBlackImage}
                  alt="Logo Nero su Bianco"
                  className="max-w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center" style={{ borderRadius: '48px' }}>
                  <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                    Versione Nero
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Logo White */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="cursor-pointer group"
              onClick={() => setLightboxImage(logoWhiteImage)}
            >
              <div 
                className="relative overflow-hidden shadow-2xl bg-zinc-900 p-12 flex items-center justify-center min-h-[400px]"
                style={{ borderRadius: '48px' }}
              >
                <img 
                  src={logoWhiteImage}
                  alt="Logo Bianco su Nero"
                  className="max-w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 flex items-center justify-center" style={{ borderRadius: '48px' }}>
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                    Versione Bianco
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
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
              La Palette: Cromie dell'Empatia
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              L'universo cromatico rifugge la <span className="text-white font-semibold">freddezza clinica</span> per abbracciare 
              tinte che sussurrano <span className="text-white font-semibold">accoglienza e trasformazione</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {colorPalette.map((color, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div 
                    className={`w-full aspect-square shadow-lg group-hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${color.gradient}`}
                    style={{ borderRadius: '48px' }}
                  />
                  <div className="mt-6 space-y-2">
                    <h4 className="font-bold text-2xl text-white">{color.name}</h4>
                    <p className="text-zinc-400 text-sm font-mono">{color.hex}</p>
                    <p className="text-zinc-500 text-base leading-relaxed">{color.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Un <span className="text-[#D4A5C4] font-semibold">rosa quarzo morbido</span> e un 
              <span className="text-[#A8C7E0] font-semibold"> azzurro sereno</span> si fondono in gradienti delicati, 
              richiamando <span className="text-white font-semibold">l'alba di una nuova consapevolezza</span> e la profondità rassicurante del cielo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Business Materials */}
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
              Materiali di Identità
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Un'identità che non è solo un "biglietto da visita", ma una <span className="text-white font-semibold">promessa visiva</span> di 
              accoglienza, cura e trasformazione.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Business Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="cursor-pointer group"
              onClick={() => setLightboxImage(businessCardImage)}
            >
              <div 
                className="relative overflow-hidden shadow-2xl"
                style={{ borderRadius: '48px' }}
              >
                <img 
                  src={businessCardImage}
                  alt="Biglietto da Visita"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                    Biglietto da Visita
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stationery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="cursor-pointer group"
              onClick={() => setLightboxImage(stationeryImage)}
            >
              <div 
                className="relative overflow-hidden shadow-2xl"
                style={{ borderRadius: '48px' }}
              >
                <img 
                  src={stationeryImage}
                  alt="Coordinato Visivo"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                    Coordinato Visivo
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Strategy */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4 text-white">
              <Film className="w-10 h-10 text-[#D4A5C4]" />
              La Strategia Social: Il Cinema come Specchio dell'Io
            </h2>
            <p className="text-xl text-zinc-400 max-w-4xl mx-auto leading-relaxed">
              La comunicazione digitale necessitava di un <span className="text-white font-semibold">ponte immediato</span> per argomenti complessi. 
              Il <span className="text-[#D4A5C4] font-semibold">cinema</span>, da sempre grande indagatore dell'animo umano, 
              diventa lo strumento per <span className="text-white font-semibold">rendere tangibili concetti astratti</span>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialStrategy.map((strategy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div 
                  className="relative p-8 bg-zinc-900 hover:shadow-2xl transition-all duration-300 h-full border border-zinc-800 hover:border-zinc-700"
                  style={{ borderRadius: '32px' }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-[#D4A5C4] to-[#A8C7E0]">
                    <strategy.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{strategy.title}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">{strategy.description}</p>
                  <div className="space-y-2">
                    {strategy.examples.map((example, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4A5C4]" />
                        <span className="text-sm text-zinc-500">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Carousel Example */}
      <section className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4 text-white">
              <Instagram className="w-10 h-10 text-pink-500" />
              Content in Azione: Inside Out
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Attraverso <span className="text-white font-semibold">caroselli educativi</span> come quello sull'accettazione della Tristezza di Inside Out, 
              trasformiamo il feed in una <span className="text-[#A8C7E0] font-semibold">sala di proiezione emotiva</span>. 
              I personaggi diventano <span className="text-white font-semibold">archetipi</span> in cui riconoscersi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer group"
            onClick={() => setLightboxImage(socialCarouselImage)}
          >
            <div 
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: '48px' }}
            >
              <img 
                src={socialCarouselImage}
                alt="Carosello Instagram - Inside Out"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                  Visualizza Carosello
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Quote */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#D4A5C4]/20 to-[#A8C7E0]/20 p-12 md:p-16 text-center border border-[#D4A5C4]/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ borderRadius: '60px' }}
          >
            <div className="mb-8">
              <Sparkles className="w-16 h-16 mx-auto text-[#D4A5C4]" />
            </div>
            <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8 text-white">
              "I personaggi che amiamo diventano <span className="text-[#D4A5C4] font-bold">archetipi</span>, 
              specchi in cui <span className="text-[#A8C7E0] font-bold">riconoscersi</span>, 
              abbattendo le barriere della diffidenza e aprendo la porta a una 
              <span className="text-white font-bold"> divulgazione psicologica profonda</span>."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-[#D4A5C4] via-[#9B8BA6] to-[#A8C7E0] mx-auto mb-8 rounded-full" />
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Un'identità visiva che traduce l'invisibile in un linguaggio universale, 
              incredibilmente vicino al vissuto emotivo di ognuno.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-6 py-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
              <FileText className="w-8 h-8 text-[#D4A5C4]" />
              Deliverable del Progetto
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div 
                  className="p-6 bg-gradient-to-br from-[#D4A5C4]/10 to-[#D4A5C4]/5 border border-[#D4A5C4]/20"
                  style={{ borderRadius: '32px' }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                    <span className="text-2xl">🎨</span>
                    Brand Identity
                  </h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Logo con simbolo PSI e matassa</li>
                    <li>• Declinazioni nero e bianco</li>
                    <li>• Palette cromatica empatica</li>
                    <li>• Sistema visivo fluido e organico</li>
                  </ul>
                </div>

                <div 
                  className="p-6 bg-gradient-to-br from-[#A8C7E0]/10 to-[#A8C7E0]/5 border border-[#A8C7E0]/20"
                  style={{ borderRadius: '32px' }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                    <span className="text-2xl">📱</span>
                    Strategia Social
                  </h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Content curation cinematografica</li>
                    <li>• Caroselli educativi (Inside Out, etc.)</li>
                    <li>• Reels con estratti filmici</li>
                    <li>• Narrazione archetipica universale</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div 
                  className="p-6 bg-gradient-to-br from-[#9B8BA6]/10 to-[#9B8BA6]/5 border border-[#9B8BA6]/20"
                  style={{ borderRadius: '32px' }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                    <span className="text-2xl">📄</span>
                    Materiali Stampati
                  </h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Biglietti da visita con gradient</li>
                    <li>• Coordinato visivo completo</li>
                    <li>• Forme organiche rosa e azzurro</li>
                    <li>• Design accogliente e professionale</li>
                  </ul>
                </div>

                <div 
                  className="p-6 bg-gradient-to-br from-[#D4A5C4]/10 to-[#A8C7E0]/10 border border-white/10"
                  style={{ borderRadius: '32px' }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-white">
                    <span className="text-2xl">✨</span>
                    Risultati
                  </h3>
                  <ul className="space-y-2 text-zinc-400">
                    <li>• Identità che traduce l'invisibile</li>
                    <li>• Abbattimento barriere emotive</li>
                    <li>• Divulgazione profonda e accessibile</li>
                    <li>• Connessione autentica con il pubblico</li>
                  </ul>
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