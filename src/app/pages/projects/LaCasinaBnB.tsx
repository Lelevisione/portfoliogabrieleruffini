import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Home, Palette, Type, Layers, FileText, Sun, Heart, X, Instagram } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import moodboardImage from 'figma:asset/e53848a5946f3c26fab956043e3144644decfcd6.png';
import brandAppsImage from 'figma:asset/fc0d0717f11a2de276d96cc2ec1e85ed0df49a35.png';
import socialMockupImage from 'figma:asset/e5267b28138b7942e87b689dad4d175114e331ed.png';
import spillatoImage from 'figma:asset/084424638e684f637e4f08bbceefbd1264e17c69.png';
import iconsRowImage from 'figma:asset/979e66bd418a37ee88b82819f95d94994a707ae3.png';
import marchioImage from 'figma:asset/9b5cddf67bf05744fb90ed41ec55a8b29c9dba48.png';
import declinazioniImage from 'figma:asset/1216646253b2528d60e71218fa86a9d62f70ccc9.png';
import tipografiaImage from 'figma:asset/9effb75215100a2af52bd9e3562ed1345eaa494f.png';
import posterImage from 'figma:asset/8b1060a48081dffa5b858a9ce85cd3264007bec6.png';
import pieghevoleImage from 'figma:asset/f3743ba1ae995faccde4f3c94080a03df4fb72c1.png';
import websiteImage from 'figma:asset/8975217e3197b675ef600212b88d97ae04367388.png';

const brandValues = [
  {
    icon: Sun,
    title: 'Calore Autentico',
    description: 'Palette cromatica calda che evoca i paesaggi toscani e la luminosità dell\'architettura locale',
    color: '#E07A5F'
  },
  {
    icon: Heart,
    title: 'Accoglienza',
    description: 'Design organico e hand-crafted che comunica familiarità e attenzione al dettaglio',
    color: '#81B29A'
  },
  {
    icon: Home,
    title: 'Territorio',
    description: 'Il pittogramma integra la silhouette della Toscana, valorizzando l\'autenticità locale',
    color: '#F4A261'
  }
];

const designElements = [
  {
    title: 'Marchio',
    description: 'Pittogramma con casetta stilizzata + ramo d\'ulivo che richiama la Toscana. Design organico, curvilineare e immediatamente riconoscibile.',
    icon: '🏠',
    image: marchioImage,
    highlight: 'Semplicità visiva, tradizione locale, artigianalità'
  },
  {
    title: 'Declinazioni',
    description: 'Massima flessibilità su diversi contesti: versione nera, bianca e a colori. Bordi esterni adattabili cromaticamente.',
    icon: '🎨',
    image: declinazioniImage,
    highlight: 'Versatilità su supporti digitali, stampati e merchandising'
  },
  {
    title: 'Tipografia',
    description: 'Helvetica per neutralità e leggibilità. Moonblossom per personalità creativa e accogliente con tratti irregolari hand-painted.',
    icon: '✍️',
    image: tipografiaImage,
    highlight: 'Contrasto tra essenzialità moderna e carattere dinamico'
  }
];

const colorPalette = [
  { name: 'Beige Delicato', hex: '#F5E6D3', description: 'Spazi interni e luminosità' },
  { name: 'Crema Caldo', hex: '#F2CC8F', description: 'Accoglienza e familiarità' },
  { name: 'Arancio Bruciato', hex: '#E07A5F', description: 'Energia e convivialità' },
  { name: 'Verde Toscano', hex: '#81B29A', description: 'Natura e centralità del territorio' },
  { name: 'Blu Acceso', hex: '#3D5A80', description: 'Freschezza e affidabilità' },
];

const applications = [
  {
    title: 'Poster Welcome',
    description: 'Estetica del taccuino di viaggio con layout frammentato, fotografie e blocchi di colore.',
    image: posterImage,
    keywords: ['Scrapbook', 'Emozionale', 'Dinamico']
  },
  {
    title: 'Pieghevole',
    description: 'Guida per gli ospiti con palette cromatica e sistema iconografico.',
    image: pieghevoleImage,
    keywords: ['Fresh House Rules', 'Informale', 'Leggibile']
  },
  {
    title: 'Website',
    description: 'Interfaccia digitale chiara e accogliente. Layout arioso con griglia visiva calibrata.',
    image: websiteImage,
    keywords: ['Accessibilità', 'Funzionalità', 'Estetica']
  }
];

interface LaCasinaBnBProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function LaCasinaBnB({ isMenuOpen, onToggleMenu }: LaCasinaBnBProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      
      {/* Hero Section - Focus Squircle */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          {/* Hero Squircle - Focus Element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-br from-[#F5E6D3] via-[#FAF3E0] to-[#F2CC8F] p-12 md:p-16"
            style={{ borderRadius: '60px' }}
          >
            <div className="absolute inset-0 opacity-5">
              <div 
                className="w-full h-full" 
                style={{
                  backgroundImage: `radial-gradient(circle, #81B29A 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-[#81B29A]" />
                <span className="inline-block px-3 py-1 bg-[#81B29A]/20 text-zinc-800 text-xs tracking-wide rounded-full border border-[#81B29A]/30">
                  Graphic Design · Brand Identity · Hospitality
                </span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black mb-6 text-zinc-900">
                La Casina B&B
              </h1>
              
              <p className="text-2xl md:text-3xl text-zinc-700 max-w-3xl mb-8 font-light leading-relaxed">
                Un'Identità Visiva che Respira l'Anima Autentica, Accogliente e di Qualità della Toscana
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-[#E07A5F]" />
                  <span className="text-zinc-700">Brand Identity Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Type className="w-5 h-5 text-[#F2CC8F]" />
                  <span className="text-zinc-700">Sistema Tipografico</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#81B29A]" />
                  <span className="text-zinc-700">Design System Completo</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Moodboard Section */}
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
              Moodboard & Ispirazione
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Un <span className="text-white font-semibold">universo visivo</span> che cattura l'essenza della Toscana: 
              paesaggi, architettura, natura e artigianalità locale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer group"
            onClick={() => setLightboxImage(moodboardImage)}
          >
            <div 
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: '48px' }}
            >
              <img 
                src={moodboardImage}
                alt="Moodboard La Casina"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                  Click per ingrandire
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Values - Focus Squircles on Cards */}
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
              L'Essenza del Brand
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Il marchio "La Casina" nasce per rappresentare <span className="text-white font-semibold">visivamente l'anima autentica, accogliente e di qualità</span> che caratterizza l'esperienza offerta dal B&B.
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
                {/* Individual Card Squircle */}
                <div 
                  className="relative p-8 bg-gradient-to-br from-[#FAF3E0] to-[#F5E6D3] hover:shadow-2xl transition-all duration-300 h-full"
                  style={{ borderRadius: '40px' }}
                >
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: value.color, borderRadius: '40px' }}
                  />
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10"
                    style={{ backgroundColor: `${value.color}` }}
                  >
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10 text-zinc-900">{value.title}</h3>
                  <p className="text-zinc-700 leading-relaxed relative z-10">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design System Elements */}
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
              <Palette className="w-10 h-10 text-[#81B29A]" />
              Gli Elementi del Design System
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Un linguaggio visivo <span className="text-white font-semibold">organico, semplice e immediatamente riconoscibile</span> che traduce il concetto di "casina" in forma visiva.
            </p>
          </motion.div>

          <div className="space-y-12">
            {designElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{element.icon}</span>
                      <h3 className="text-3xl font-bold text-white">{element.title}</h3>
                    </div>
                    <p className="text-lg text-zinc-400 leading-relaxed">
                      {element.description}
                    </p>
                    <div 
                      className="p-4 bg-[#81B29A]/10 rounded-xl border-l-4 border-[#81B29A]"
                      style={{ borderRadius: '16px' }}
                    >
                      <p className="text-zinc-300 font-medium">
                        💡 {element.highlight}
                      </p>
                    </div>
                  </div>

                  <div 
                    className={`cursor-pointer ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}
                    onClick={() => setLightboxImage(element.image)}
                  >
                    {/* Image Squircle */}
                    <div 
                      className="relative overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      style={{ borderRadius: '32px' }}
                    >
                      <img 
                        src={element.image}
                        alt={element.title}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                          Click per ingrandire
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Icone in Fila */}
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
              Sistema Iconografico
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              <span className="text-white font-semibold">5 icone accessorie</span> come estensione visiva del marchio, 
              per rappresentare le diverse dimensioni dell'esperienza al B&B.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer group"
            onClick={() => setLightboxImage(iconsRowImage)}
          >
            {/* Image Squircle */}
            <div 
              className="relative overflow-hidden shadow-2xl bg-white p-12"
              style={{ borderRadius: '48px' }}
            >
              <img 
                src={iconsRowImage}
                alt="Sistema Iconografico La Casina"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center" style={{ borderRadius: '48px' }}>
                <span className="text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                  Click per ingrandire
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Color Palette - Focus Squircles on Color Swatches */}
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
              Palette Cromatica
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Colori selezionati per evocare <span className="text-white font-semibold">calore, autenticità e armonia naturale</span>, in piena coerenza con i valori del marchio e il territorio toscano.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
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
                  {/* Color Swatch Squircle */}
                  <div 
                    className="w-full aspect-square shadow-lg group-hover:shadow-2xl transition-shadow duration-300"
                    style={{ backgroundColor: color.hex, borderRadius: '32px' }}
                  />
                  <div className="mt-4 space-y-2">
                    <h4 className="font-bold text-lg text-white">{color.name}</h4>
                    <p className="text-zinc-400 text-sm font-mono">{color.hex}</p>
                    <p className="text-zinc-500 text-xs leading-relaxed">{color.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Applications Mockup */}
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
              Applicazioni del Brand
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Il marchio prende vita attraverso <span className="text-white font-semibold">merchandising e materiali fisici</span>: 
              notebook, sottobicchieri, bandiere e tote bags.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer group"
            onClick={() => setLightboxImage(brandAppsImage)}
          >
            {/* Image Squircle */}
            <div 
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: '48px' }}
            >
              <img 
                src={brandAppsImage}
                alt="Applicazioni del Brand"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                  Click per ingrandire
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Mockup */}
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
              Presenza Social
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              L'identità visiva si traduce anche nella <span className="text-white font-semibold">comunicazione digitale</span>, 
              mantenendo coerenza su Instagram e social media.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer group"
            onClick={() => setLightboxImage(socialMockupImage)}
          >
            {/* Image Squircle */}
            <div 
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: '48px' }}
            >
              <img 
                src={socialMockupImage}
                alt="Social Media Mockup"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                  Click per ingrandire
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Applications Grid - Focus Squircles on Cards */}
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
              <Layers className="w-10 h-10 text-[#E07A5F]" />
              Touchpoint Strategici
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              L'identità visiva accompagna l'ospite attraverso <span className="text-white font-semibold">materiali stampati e digitali</span> prima, durante e dopo il soggiorno.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setLightboxImage(app.image)}
              >
                {/* Card Squircle */}
                <div 
                  className="bg-zinc-900 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-800 hover:border-zinc-700"
                  style={{ borderRadius: '32px' }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={app.image}
                      alt={app.title}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                        Visualizza
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-white">{app.title}</h3>
                    <p className="text-zinc-400 leading-relaxed mb-4">
                      {app.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {app.keywords.map((keyword, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-[#81B29A]/20 text-[#81B29A] text-xs font-medium rounded-full border border-[#81B29A]/30"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spillato / Wander's Guide */}
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
              Wander's Guide
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Una <span className="text-white font-semibold">guida turistica personalizzata</span> pensata come vero 
              compagno di viaggio, da sfogliare durante il soggiorno per scoprire la Toscana autentica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer group"
            onClick={() => setLightboxImage(spillatoImage)}
          >
            {/* Image Squircle */}
            <div 
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: '48px' }}
            >
              <img 
                src={spillatoImage}
                alt="Wander's Guide - Guida Turistica"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-semibold">
                  Click per ingrandire
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Quote - Focus Squircle */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Quote Squircle */}
          <motion.div
            className="bg-gradient-to-br from-[#FAF3E0] to-[#F2CC8F] p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ borderRadius: '60px' }}
          >
            <div className="mb-8">
              <div className="text-7xl mb-6">🌿</div>
            </div>
            <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-8 text-zinc-800">
              "Un marchio che unisce <span className="text-[#E07A5F] font-bold">semplicità</span> e 
              <span className="text-[#81B29A] font-bold"> narrazione visiva</span>, 
              capace di trasmettere la <span className="text-[#3D5A80] font-bold">vera essenza</span> de 
              "La Casina" attraverso ogni dettaglio."
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-[#E07A5F] via-[#81B29A] to-[#3D5A80] mx-auto mb-8 rounded-full" />
            <p className="text-zinc-700 text-lg max-w-2xl mx-auto leading-relaxed">
              Un'identità visiva che sa parlare con autenticità ad un pubblico internazionale, 
              giovane e curioso, ma anche a chi cerca un'esperienza genuina radicata nella cultura locale toscana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details - Focus Squircles on Cards */}
      <section className="px-6 py-16 pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-white">
              <FileText className="w-8 h-8 text-[#81B29A]" />
              Deliverable del Progetto
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Card Squircle */}
                <div 
                  className="p-6 bg-gradient-to-br from-[#FAF3E0] to-[#F5E6D3]"
                  style={{ borderRadius: '32px' }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-zinc-900">
                    <span className="text-2xl">🎨</span>
                    Identità Visiva
                  </h3>
                  <ul className="space-y-2 text-zinc-700">
                    <li>• Marchio principale e pittogramma</li>
                    <li>�� Declinazioni (nero, bianco, colori)</li>
                    <li>• Sistema tipografico (Helvetica + Moonblossom)</li>
                    <li>• Palette cromatica completa</li>
                  </ul>
                </div>

                {/* Card Squircle */}
                <div 
                  className="p-6 bg-gradient-to-br from-[#FAF3E0] to-[#F5E6D3]"
                  style={{ borderRadius: '32px' }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-zinc-900">
                    <span className="text-2xl">🔧</span>
                    Sistema Iconografico
                  </h3>
                  <ul className="space-y-2 text-zinc-700">
                    <li>• 5 icone accessorie custom</li>
                    <li>• Estensione visiva del marchio</li>
                    <li>• Comunicazione immediata</li>
                    <li>• Coerenza con l'identità visiva</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                {/* Card Squircle */}
                <div 
                  className="p-6 bg-gradient-to-br from-[#FAF3E0] to-[#F5E6D3]"
                  style={{ borderRadius: '32px' }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-zinc-900">
                    <span className="text-2xl">📱</span>
                    Materiali Digitali
                  </h3>
                  <ul className="space-y-2 text-zinc-700">
                    <li>• Mockup sito web e social media</li>
                    <li>• Layout arioso con griglia calibrata</li>
                    <li>• Navigazione intuitiva e fluida</li>
                    <li>• Presenza Instagram coerente</li>
                  </ul>
                </div>

                {/* Card Squircle */}
                <div 
                  className="p-6 bg-gradient-to-br from-[#FAF3E0] to-[#F5E6D3]"
                  style={{ borderRadius: '32px' }}
                >
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-zinc-900">
                    <span className="text-2xl">📄</span>
                    Materiali Stampati
                  </h3>
                  <ul className="space-y-2 text-zinc-700">
                    <li>• Poster welcome (estetica scrapbook)</li>
                    <li>• Pieghevole informativo (Fresh House Rules)</li>
                    <li>• Wander's Guide turistica personalizzata</li>
                    <li>• Merchandising (notebook, tote bags, sottobicchieri)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results Card Squircle */}
            <div 
              className="mt-8 p-8 bg-gradient-to-br from-[#81B29A]/20 to-[#E07A5F]/20 border border-[#81B29A]/30"
              style={{ borderRadius: '40px' }}
            >
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                <Sun className="w-8 h-8 text-[#E07A5F]" />
                Risultati Ottenuti
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-zinc-300">
                    <span className="font-semibold text-white">Identità visiva coerente</span> su tutti i touchpoint digitali e fisici
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-zinc-300">
                    <span className="font-semibold text-white">Riconoscibilità immediata</span> grazie al pittogramma organico e distintivo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-zinc-300">
                    <span className="font-semibold text-white">Versatilità applicativa</span> con declinazioni per ogni contesto d'uso
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <p className="text-zinc-300">
                    <span className="font-semibold text-white">Narrazione visiva calda</span> che trasmette autenticità toscana
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