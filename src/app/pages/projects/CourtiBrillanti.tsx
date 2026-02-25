import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, Sparkle, Sparkles, Droplets, Wind, Smile, Star, Zap } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';

// Bubble component for playful floating effect
const Bubble = ({ delay = 0, duration = 8 }: { delay?: number; duration?: number }) => {
  const randomX = Math.random() * 100;
  const randomSize = 20 + Math.random() * 60;
  
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-300/20 backdrop-blur-sm border border-white/30"
      style={{
        left: `${randomX}%`,
        width: `${randomSize}px`,
        height: `${randomSize}px`,
        bottom: '-50px',
      }}
      animate={{
        y: [-50, -window.innerHeight - 100],
        x: [0, (Math.random() - 0.5) * 200],
        opacity: [0, 0.8, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );
};

// Sparkle particle component
const SparkleParticle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute text-yellow-300"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <Sparkle className="w-4 h-4" />
    </motion.div>
  );
};

interface CourtiBrillantiProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function CourtiBrillanti({ isMenuOpen, onToggleMenu }: CourtiBrillantiProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />

      {/* Floating bubbles background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Bubble key={i} delay={i * 0.5} duration={8 + Math.random() * 4} />
        ))}
      </div>

      {/* Sparkle particles */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <SparkleParticle key={i} delay={i * 0.2} />
        ))}
      </div>

      {/* Vapor clouds overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6">
          <div className="max-w-7xl mx-auto relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
              style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
            >
              {/* Playful icons */}
              <motion.div
                className="flex items-center justify-center gap-6 mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  { icon: Sparkles, color: 'from-yellow-400 to-orange-400', rotate: true },
                  { icon: Droplets, color: 'from-cyan-400 to-blue-400', rotate: false },
                  { icon: Wind, color: 'from-white to-cyan-200', rotate: true },
                  { icon: Smile, color: 'from-pink-400 to-red-400', rotate: false }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}
                      animate={{ 
                        y: [0, -15, 0],
                        rotate: item.rotate ? [0, 15, -15, 0] : 0
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.2,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl bg-white/30"
                        animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.2, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <span className="inline-block px-8 py-3 bg-white/20 backdrop-blur-md text-white text-sm tracking-[0.3em] uppercase rounded-full border-2 border-white/40 shadow-lg">
                  Graphic Design · Visual Identity · Theater
                </span>
              </motion.div>

              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="inline-block bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                  CORTI
                </span>
                <br />
                <span className="inline-block bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent drop-shadow-2xl">
                  BRILLANTI
                </span>
              </motion.h1>

              <motion.div
                className="flex items-center justify-center gap-3 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
                <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  Actors Always More Shining
                </p>
                <Sparkles className="w-8 h-8 text-yellow-300 animate-pulse" />
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                A theatrical poster that transforms <span className="font-bold text-yellow-300">stage brilliance</span> into a <span className="font-bold text-cyan-200">household cleaning metaphor</span>
              </motion.p>

              <motion.p
                className="text-base text-white/70 italic mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                I Postumi Teatro · Visual Identity Project
              </motion.p>

              {/* Stats cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {[
                  { icon: Zap, label: 'Effect', value: 'Sanitizing', gradient: 'from-yellow-400/30 to-orange-400/30' },
                  { icon: Star, label: 'Style', value: 'Cut-Out', gradient: 'from-cyan-400/30 to-blue-400/30' },
                  { icon: Sparkle, label: 'Energy', value: 'Pop-Up', gradient: 'from-pink-400/30 to-purple-400/30' }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                      <div className="relative p-6 rounded-2xl border-2 border-white/40 bg-white/20 backdrop-blur-md">
                        <Icon className="w-8 h-8 text-white mb-3 mx-auto" />
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-sm text-white/70">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Concept Section */}
        <section className="px-6 py-20 relative bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8 justify-center">
                <Droplets className="w-10 h-10 text-white" />
                <h2 className="text-4xl md:text-6xl font-black text-center">
                  <span className="bg-gradient-to-r from-yellow-200 via-white to-cyan-200 bg-clip-text text-transparent">
                    The Ironic Concept
                  </span>
                </h2>
                <Wind className="w-10 h-10 text-white" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/30 to-cyan-400/30 rounded-3xl blur-2xl" />
                  <div className="relative rounded-3xl overflow-hidden border-4 border-white/40 shadow-2xl">
                    <img 
                      src="https://i.imgur.com/dqFxI5l.png"
                      alt="Corti Brillanti - Main Poster"
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>

                <div>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20 backdrop-blur-md border-2 border-yellow-300/40">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <Sparkles className="w-6 h-6 text-yellow-300" />
                        Ironic Literality
                      </h3>
                      <p className="text-white/90 leading-relaxed text-lg">
                        The project stems from a <strong className="text-yellow-200">deliberate, ironic literal interpretation</strong> of the show's title: "New Brilliant Shorts for Ever More Shining Actors."
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-md border-2 border-cyan-300/40">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <Droplets className="w-6 h-6 text-cyan-300" />
                        Visual Metaphor
                      </h3>
                      <p className="text-white/90 leading-relaxed text-lg">
                        I transformed the adjectives <strong className="text-cyan-200">"brilliant"</strong> and <strong className="text-cyan-200">"shining"</strong> – typically linked to acting quality – into a metaphor related to the world of <strong className="text-white">household cleaning and detergents</strong>.
                      </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-400/20 to-purple-400/20 backdrop-blur-md border-2 border-pink-300/40">
                      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                        <Wind className="w-6 h-6 text-pink-300" />
                        Explosion of Freshness
                      </h3>
                      <p className="text-white/90 leading-relaxed text-lg">
                        Theater becomes a <strong className="text-pink-200">sanitizing action</strong>, an <strong className="text-pink-200">explosion of scenic freshness</strong> that involves actors in a vortex of clean, brilliant energy.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Spray Bottle Section - The Star! */}
        <section className="px-6 py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                className="inline-block mb-6"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-8xl">💦</div>
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  The Spray Bottle: Heart of the Design
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                The focal element that <strong className="text-white">transforms theatrical brilliance</strong> into a visual experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/30">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center border-4 border-white/50 shadow-xl">
                    <span className="text-3xl">🧴</span>
                  </div>
                  
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-4">The Custom Bottle</h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      An illustrated spray bottle with a <strong className="text-cyan-200">custom label detail</strong> that recalls the ironic identity of the company "I Postumi". It serves as the <strong className="text-yellow-200">composition trigger</strong>.
                    </p>
                  </div>
                </div>

                <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/30">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center border-4 border-white/50 shadow-xl">
                    <span className="text-3xl">💨</span>
                  </div>
                  
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-4">The Dynamic Spray</h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      From the nozzle emerges not just a <strong className="text-white">"graphic spray"</strong> creating negative white space for typography, but <strong className="text-yellow-200">the actors themselves are projected</strong>, dynamic protagonists of this scenic effervescence.
                    </p>
                  </div>
                </div>

                <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/30">
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center border-4 border-white/50 shadow-xl">
                    <span className="text-3xl">⚡</span>
                  </div>
                  
                  <div className="ml-8">
                    <h3 className="text-2xl font-bold text-white mb-4">Visual Energy</h3>
                    <p className="text-white/90 leading-relaxed text-lg">
                      The actors are <strong className="text-pink-200">sprayed into the design</strong> as if they were part of the freshness explosion, creating a <strong className="text-cyan-200">3D pop-up effect</strong> that captures the eye.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-pink-400/30 rounded-full blur-3xl animate-pulse" />
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/50 shadow-2xl">
                  <img 
                    src="https://i.imgur.com/VKcwpdt.png"
                    alt="Spray Bottle Detail"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visual Language Section */}
        <section className="px-6 py-20 relative bg-gradient-to-b from-blue-600/10 to-cyan-600/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
                  Visual Language
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Five stylistic pillars that define the project's identity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '✂️',
                  title: 'Cut-Out Aesthetic',
                  description: 'Digital collage technique with sharp white borders. Recalls fanzine aesthetics and provides "pop-up" three-dimensionality.',
                  gradient: 'from-yellow-500/30 to-orange-500/30',
                  borderColor: 'border-yellow-300/50'
                },
                {
                  icon: '🔲',
                  title: 'Halftone Texture',
                  description: 'Retina pattern applied to photographs that unifies different shots and gives a raw, independent print flavor.',
                  gradient: 'from-cyan-500/30 to-blue-500/30',
                  borderColor: 'border-cyan-300/50'
                },
                {
                  icon: '🎨',
                  title: 'Playful Typography',
                  description: 'Lettering with vibrant primary colors (cyan, magenta, yellow, green) and hand-drawn fonts. Chaotic and joyful energy.',
                  gradient: 'from-pink-500/30 to-purple-500/30',
                  borderColor: 'border-pink-300/50'
                },
                {
                  icon: '🌈',
                  title: 'Chromatic Contrast',
                  description: 'Deep blue background highlights the white central explosion and saturated text colors.',
                  gradient: 'from-blue-500/30 to-indigo-500/30',
                  borderColor: 'border-blue-300/50'
                },
                {
                  icon: '⭐',
                  title: 'Pop Dynamism',
                  description: 'Composition guides the eye from brand (the bottle) to content (the title) in an explosive flow.',
                  gradient: 'from-teal-500/30 to-green-500/30',
                  borderColor: 'border-teal-300/50'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className={`relative rounded-3xl p-8 border-2 ${feature.borderColor} bg-white/10 backdrop-blur-md hover:scale-105 transition-all duration-300 h-full`}>
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {feature.title}
                    </h3>
                    
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                  Variations & Applications
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/40 shadow-2xl">
                  <img 
                    src="https://i.imgur.com/xnR4dAi.png"
                    alt="Variation 1"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative rounded-2xl overflow-hidden border-4 border-white/40 shadow-2xl">
                  <img 
                    src="https://i.imgur.com/MGLzM70.png"
                    alt="Variation 2"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'https://i.imgur.com/4J00uFI.png',
                'https://i.imgur.com/8BA0IyD.png',
                'https://i.imgur.com/jS6L7v4.png'
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-2 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative rounded-xl overflow-hidden border-2 border-white/30 shadow-xl">
                    <img 
                      src={image}
                      alt={`Detail ${index + 1}`}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="px-6 py-20 relative bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-center">
                <span className="bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  Creative Process
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                'https://i.imgur.com/QvfzaKk.png',
                'https://i.imgur.com/ooDFhW4.png',
                'https://i.imgur.com/VKcwpdt.png'
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-3 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/40 shadow-2xl">
                    <img 
                      src={image}
                      alt={`Process ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="px-6 py-32 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-12 bg-gradient-to-r from-yellow-400/20 via-cyan-400/20 to-pink-400/20 blur-3xl" />
              
              <div className="relative rounded-3xl p-12 md:p-16 border-4 border-white/40 bg-white/10 backdrop-blur-xl shadow-2xl text-center">
                <motion.div
                  className="flex items-center justify-center gap-6 mb-8"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-12 h-12 text-yellow-300" />
                  <Droplets className="w-16 h-16 text-cyan-300" />
                  <Wind className="w-12 h-12 text-white" />
                </motion.div>

                <blockquote className="text-3xl md:text-5xl font-bold mb-6 leading-relaxed">
                  <span className="bg-gradient-to-r from-yellow-200 via-white to-cyan-200 bg-clip-text text-transparent">
                    "Theater becomes a sanitizing action, an explosion of scenic freshness."
                  </span>
                </blockquote>
                
                <cite className="text-white/70 not-italic text-lg">
                  — Visual Concept
                </cite>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="px-6 py-20 relative bg-gradient-to-b from-cyan-600/10 to-blue-600/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-yellow-200 to-cyan-200 bg-clip-text text-transparent">
                  Results & Impact
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/30">
                <p className="text-xl text-white/90 leading-relaxed mb-6">
                  The final poster successfully transforms a <strong className="text-yellow-200">literal play on words</strong> into a <strong className="text-cyan-200">memorable and distinctive</strong> visual composition.
                </p>
                <p className="text-xl text-white/90 leading-relaxed">
                  The concept's irony translates into a <strong className="text-white">fresh graphic language</strong> that immediately communicates the <strong className="text-pink-200">energy and spirit</strong> of the theater company "I Postumi".
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '✨',
                  title: 'Memorable Identity',
                  description: 'A visual identity that stands out in the contemporary theater landscape',
                  gradient: 'from-yellow-500/30 to-orange-500/30'
                },
                {
                  icon: '🎭',
                  title: 'Effective Metaphor',
                  description: 'Stage brilliance translated into a powerful and ironic visual metaphor',
                  gradient: 'from-cyan-500/30 to-blue-500/30'
                },
                {
                  icon: '💫',
                  title: 'Artistic Statement',
                  description: 'Functions both as a promotional poster and as an autonomous graphic work',
                  gradient: 'from-pink-500/30 to-purple-500/30'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-md border-2 border-white/30 h-full">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-white/80">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-16 bg-gradient-to-r from-yellow-400/30 via-cyan-400/30 to-pink-400/30 blur-3xl animate-pulse" />
              
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    y: [0, -20, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="text-9xl mb-8"
                >
                  ✨
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-black mb-6">
                  <span className="bg-gradient-to-r from-yellow-200 via-white to-cyan-200 bg-clip-text text-transparent">
                    A Design That Shines
                  </span>
                </h3>

                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Transforming <strong className="text-white">abstract concepts</strong> into <strong className="text-cyan-200">concrete visual metaphors</strong>: this is the power of graphic design.
                </p>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <span className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-semibold">
                    🎨 Digital Collage
                  </span>
                  <span className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-semibold">
                    ✨ Visual Irony
                  </span>
                  <span className="px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 text-white font-semibold">
                    💫 Pop Energy
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
