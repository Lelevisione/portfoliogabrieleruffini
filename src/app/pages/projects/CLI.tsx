import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, MessageCircle, Quote, Languages, Globe2 } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import heroImage from 'figma:asset/a36f710187259d5fc7f05e39bf77588356ceda94.png';
import marchioImage from 'figma:asset/0aa0822cbda6c4ea523c36140e8cb67bd7b665fa.png';
import variantiImage from 'figma:asset/ebf10e73a669239f792f1c42cd813335252e2b9a.png';
import coloriImage from 'figma:asset/4f8331c0c5af91313c3607856b2aff0ac4c09085.png';
import businessCardImage from 'figma:asset/71a44fa1f8e1312d638e890351a99de21c084569.png';
import toteBagImage from 'figma:asset/92e9f21192e97aa7816f5e04d6dd8b69d972755c.png';

const conceptCards = [
  {
    icon: MessageCircle,
    title: 'Dialogue',
    description: 'Two speech bubbles, a universal symbol of communication, intersect to create a meeting space.',
    color: '#00558C'
  },
  {
    icon: Quote,
    title: 'Quotation Marks',
    description: 'A graphic sign that introduces and preserves the word, strengthening the link between written and spoken language.',
    color: '#003D66'
  },
  {
    icon: Languages,
    title: 'Languages',
    description: 'A place where languages and cultures meet and enrich each other.',
    color: '#0066A1'
  }
];

interface CLIProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function CLI({ isMenuOpen, onToggleMenu }: CLIProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-black">
        {/* Speech bubble decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10">
            <MessageCircle className="w-32 h-32 text-[#00558C]" strokeWidth={1} />
          </div>
          <div className="absolute top-40 right-20">
            <Quote className="w-24 h-24 text-[#0066A1]" strokeWidth={1} />
          </div>
          <div className="absolute bottom-20 left-1/3">
            <MessageCircle className="w-28 h-28 text-[#003D66]" strokeWidth={1} />
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
              <MessageCircle className="w-6 h-6 text-[#00558C]" />
              <span className="inline-block px-6 py-2 bg-[#00558C]/10 text-[#00558C] text-sm tracking-widest uppercase rounded-full border border-[#00558C]/30">
                Branding · Logo Design · Visual Identity
              </span>
              <Quote className="w-5 h-5 text-[#0066A1]" />
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-[#00558C] via-[#0066A1] to-[#003D66] bg-clip-text text-transparent">
                CLI
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Language Center — <span className="text-white font-medium">Dialogue as a meeting space</span>
            </motion.p>

            <motion.p 
              className="text-base text-zinc-500 italic max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Where communication becomes a bridge between languages and cultures
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hero Logo Image */}
      <motion.section 
        className="px-6 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-3xl mx-auto">
          <div 
            className="rounded-3xl overflow-hidden cursor-pointer group relative shadow-2xl border border-[#00558C]/20 bg-white p-12 md:p-16"
            onClick={() => setLightboxImage(heroImage)}
          >
            <img 
              src={heroImage} 
              alt="CLI - Centro Linguistico Logo"
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#00558C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.section>

      {/* Concept Cards - Dialogo */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <MessageCircle className="w-12 h-12 text-[#00558C] mx-auto mb-4" strokeWidth={1.5} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              The Symbol of <span className="text-[#00558C]">Communication</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Two speech bubbles intersecting: a direct metaphor for the act of speaking.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conceptCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity blur-xl"
                  style={{ backgroundColor: card.color }}
                />
                
                <div 
                  className="relative rounded-3xl p-8 border hover:scale-[1.02] transition-all duration-300"
                  style={{ 
                    backgroundColor: card.color,
                    borderColor: card.color
                  }}
                >
                  <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center bg-white/20 backdrop-blur-sm mx-auto">
                    <card.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white text-center">{card.title}</h3>
                  <p className="text-white/90 leading-relaxed text-center">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Il Marchio Section */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-[#00558C]">The Brand</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Text Content */}
              <div 
                className="rounded-3xl p-8 md:p-10 shadow-xl border border-[#00558C]/30 relative overflow-hidden order-2 lg:order-1"
                style={{ backgroundColor: '#00558C' }}
              >
                {/* Speech bubbles overlay */}
                <div className="absolute top-0 right-0 opacity-10">
                  <MessageCircle className="w-32 h-32 text-white" strokeWidth={1} />
                </div>
                <div className="absolute bottom-0 left-0 opacity-10">
                  <Quote className="w-24 h-24 text-white" strokeWidth={1} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Quote className="w-6 h-6" />
                    Dialogue as Space
                  </h3>
                  
                  <p className="text-base text-white/90 leading-relaxed mb-5">
                    The brand stems from the idea of representing <span className="font-semibold text-white">dialogue as a meeting space</span>. Two <span className="font-semibold">speech bubbles</span>, a universal symbol of communication, intersect creating a new common shape: a place where languages and cultures meet and enrich each other.
                  </p>
                  
                  <p className="text-base text-white/90 leading-relaxed mb-5">
                    At the same time, the bubbles read as <span className="font-semibold text-white">quotation marks</span>, a <span className="font-semibold">graphic sign that introduces and preserves the word</span>, strengthening the link between written and spoken language.
                  </p>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-l-4 border-white">
                    <p className="text-sm text-white/95 leading-relaxed">
                      The resulting figure from the intersection also evokes <span className="font-semibold">a stuck-out tongue</span>, a direct metaphor for the act of speaking: a detail that transforms the logo into a <span className="font-semibold">narrative of meanings</span>, immediately recognizable and consistent with the Language Center's mission to be an <span className="font-semibold">open and inclusive reference point</span>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div 
                className="rounded-3xl overflow-hidden cursor-pointer group relative shadow-2xl border border-[#00558C]/20 order-1 lg:order-2"
                onClick={() => setLightboxImage(marchioImage)}
              >
                <img 
                  src={marchioImage} 
                  alt="CLI - The Brand"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00558C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Typography Section */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div 
              className="rounded-3xl p-8 md:p-10 shadow-xl border border-[#0066A1]/30 relative overflow-hidden"
              style={{ backgroundColor: '#0066A1' }}
            >
              <div className="absolute inset-0 opacity-5">
                <div className="grid grid-cols-4 gap-6 p-6">
                  {[...Array(8)].map((_, i) => (
                    <Languages key={i} className="w-full h-full text-white" strokeWidth={0.5} />
                  ))}
                </div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Globe2 className="w-6 h-6" />
                  Typography
                </h3>
                
                <p className="text-base text-white/90 leading-relaxed mb-5">
                  The chosen typography combines <span className="font-semibold text-white">authority and academic elegance</span> with excellent readability: it uses the <span className="font-semibold">Swift Regular SC font</span>, the official font of the University of Pisa logo, creating a visual and synergistic reference that strengthens the identity.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Authority', icon: '🎓' },
                    { label: 'Elegance', icon: '✨' },
                    { label: 'Readability', icon: '👁️' },
                    { label: 'Identity', icon: '🏛️' }
                  ].map((item) => (
                    <div 
                      key={item.label}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center border border-white/20"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <p className="text-white font-semibold text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Variants Section */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Color <span className="text-[#003D66]">Variants</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                The logo and its chromatic variants are designed for maximum versatility.
              </p>
            </div>

            <div 
              className="rounded-3xl overflow-hidden cursor-pointer group relative shadow-2xl border border-[#003D66]/20"
              onClick={() => setLightboxImage(variantiImage)}
            >
              <img 
                src={variantiImage} 
                alt="CLI - Varianti Logo"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003D66]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Color Palette Section */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Color <span className="text-[#00558C]">Palette</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                Institutional blue, white, and black for a strong and recognizable identity.
              </p>
            </div>

            <div 
              className="rounded-3xl overflow-hidden cursor-pointer group relative shadow-2xl border border-[#00558C]/20"
              onClick={() => setLightboxImage(coloriImage)}
            >
              <img 
                src={coloriImage} 
                alt="CLI - Color Palette"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00558C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Applications Section */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Brand <span className="text-[#0066A1]">Applications</span>
              </h2>
              <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                The identity comes to life through thoughtful applications across various touchpoints.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="rounded-3xl overflow-hidden cursor-pointer group relative shadow-2xl border border-[#00558C]/20"
                onClick={() => setLightboxImage(businessCardImage)}
              >
                <img 
                  src={businessCardImage} 
                  alt="CLI - Business Card"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00558C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div 
                className="rounded-3xl overflow-hidden cursor-pointer group relative shadow-2xl border border-[#0066A1]/20"
                onClick={() => setLightboxImage(toteBagImage)}
              >
                <img 
                  src={toteBagImage} 
                  alt="CLI - Tote Bag"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0066A1]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Statement */}
      <section className="px-6 py-12 pb-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="rounded-3xl p-10 md:p-14 shadow-2xl border-2 border-[#00558C]/40 bg-gradient-to-br from-[#00558C]/10 via-transparent to-[#0066A1]/10 relative overflow-hidden">
              {/* Central speech bubble */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <MessageCircle className="w-64 h-64 text-[#00558C]" strokeWidth={1} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Quote className="w-12 h-12 text-[#00558C]" strokeWidth={2} />
                  <MessageCircle className="w-14 h-14 text-[#0066A1]" strokeWidth={2} />
                  <Quote className="w-12 h-12 text-[#00558C]" strokeWidth={2} />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  An <span className="text-[#00558C]">Open and Inclusive</span> Reference Point
                </h2>
                
                <p className="text-xl text-zinc-400 leading-relaxed mb-6">
                  Where every <span className="font-semibold text-white">word</span> becomes a <span className="font-semibold text-white">bridge</span>, every <span className="font-semibold text-white">dialogue</span> transforms into <span className="text-[#00558C] font-semibold">meeting</span>, and every language finds its <span className="text-[#00558C] font-semibold">space</span>.
                </p>
                
                <div className="inline-flex items-center gap-3 px-8 py-3 bg-[#00558C]/20 text-[#00558C] rounded-full border border-[#00558C]/40">
                  <MessageCircle className="w-4 h-4" />
                  <p className="text-sm font-medium tracking-wide">
                    Communication · Language · Culture
                  </p>
                  <Languages className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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