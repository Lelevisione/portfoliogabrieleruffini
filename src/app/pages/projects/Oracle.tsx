import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Moon, Star, Eye, ExternalLink, Zap, Award, Accessibility, TrendingUp, Palette, Wand2, Gamepad2 } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

// Import images
import heroImage from 'figma:asset/c7f705aff141ac7f1a72912a4d60120b5ab3dcfc.png';
import modalImage from 'figma:asset/000973bd3a31cf3e6237661daa5239b50e9d768f.png';
import responseImage from 'figma:asset/0797e56b87cdf8eed3753f25a951a2124f20fa5c.png';
import historyImage from 'figma:asset/76b35fa1473c1e8bd32cd02993c8b62e23b67ab6.png';

const projectDetails = [
  { label: 'Role', value: 'UI/UX, Motion & Dev' },
  { label: 'Duration', value: '2 Weeks' },
  { label: 'Type', value: 'Solo Side Project' },
  { label: 'Platform', value: 'iOS Web App' }
];

const experienceSteps = [
  {
    title: 'Attraction',
    description: 'A soft gradient and floating particles draw the eye toward the luminous crystal sphere at the center',
    icon: '✨',
    color: 'from-purple-500 to-violet-500'
  },
  {
    title: 'Question',
    description: 'Tap the orb → a glass-effect button lifts → modal slides up with heavy haptic feedback (thump)',
    icon: '💬',
    color: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Revelation',
    description: 'Question dissolves into shimmering mist; sphere pulses 3× and explodes into 360° particle trails',
    icon: '🔮',
    color: 'from-purple-600 to-violet-600'
  },
  {
    title: 'Answer',
    description: 'A parchment-style card fades in, revealing your mystical fortune with cinematic flair',
    icon: '📜',
    color: 'from-violet-600 to-purple-600'
  }
];

const visualElements = [
  {
    icon: Palette,
    title: 'Color Alchemy',
    description: 'Deep radial purple (#1A0B2E → #4C1D95) backdrop, aurora accents (#C084FC), and prophetic gold (#FBBF24)',
    gradient: 'from-purple-600 to-violet-600'
  },
  {
    icon: Sparkles,
    title: 'Typography',
    description: 'Cinzel Decorative for mystical titles, Inter for maximum body readability',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Eye,
    title: 'Lighting System',
    description: '3-layer glow (25% white inner, 45% purple outer, 70% violet edge) simulating glass refraction',
    gradient: 'from-purple-600 to-violet-600'
  },
  {
    icon: Zap,
    title: 'Motion Physics',
    description: '60fps custom curves; particle physics with 0.35 drag for "magnetic" feel; 12% screen flash on rare hits',
    gradient: 'from-violet-500 to-purple-500'
  }
];

const microInteractions = [
  {
    icon: '👆',
    title: 'Touch Ripple',
    description: 'Ripple originates from exact finger coordinates → reinforces direct manipulation'
  },
  {
    icon: '📳',
    title: 'Haptic Feedback',
    description: 'Light tap on touch, medium impact on revelation for tactile satisfaction'
  },
  {
    icon: '🎵',
    title: 'Audio Layer',
    description: 'Gentle wind loop + crystalline F♯6 ping synced to peak luminosity (optional)'
  },
  {
    icon: '❌',
    title: 'Playful Error',
    description: 'Empty question → sphere shakes ±4px, tints magenta. No boring alert boxes'
  }
];

const rarityFeatures = [
  {
    title: 'Standard Answers',
    value: '20',
    description: 'Equal weighted responses for balanced divination',
    color: 'from-purple-600/20 to-violet-700/20'
  },
  {
    title: 'Golden Prophecy',
    value: '2%',
    description: 'Ultra-rare fortune with amber palette shift, gold particles, crown emoji',
    color: 'from-amber-600/20 to-yellow-700/20'
  },
  {
    title: 'Jackpot Effect',
    value: '1.5×',
    description: 'Glow radius multiplied, confetti burst, unique haptic pattern',
    color: 'from-purple-600/20 to-violet-700/20'
  },
  {
    title: 'Auto Share',
    value: 'Viral',
    description: 'Share panel auto-opens on Golden hit to leverage social virality',
    color: 'from-amber-600/20 to-yellow-700/20'
  }
];

const accessibilityFeatures = [
  {
    icon: '🎯',
    title: 'WCAG 2.2 AA',
    description: 'Purple background + white text achieves 7.2:1 contrast ratio'
  },
  {
    icon: '♿',
    title: 'Reduce Motion',
    description: 'System setting replaces particle explosion with gentle cross-fade'
  },
  {
    icon: '🔊',
    title: 'VoiceOver',
    description: 'Every interactive node labeled; modal announces "Write your question" on focus'
  },
  {
    icon: '🌐',
    title: 'RTL Support',
    description: 'Mirrored layout for Arabic, Hebrew—tested and functional'
  }
];

const technicalAchievements = [
  { metric: '6.3 MB', label: 'Total App Size' },
  { metric: '<150 KB', label: 'Image Assets' },
  { metric: '60 FPS', label: 'Motion Smoothness' },
  { metric: '0ms', label: 'Network Latency' }
];

const futureIterations = [
  {
    icon: '⌚',
    title: 'Apple Watch Companion',
    description: 'Rotate digital crown to "charge" the sphere\'s energy before revelation'
  },
  {
    icon: '📱',
    title: 'AR Mode',
    description: 'Place crystal on real table; particle fountain cascades onto room floor'
  },
  {
    icon: '🌍',
    title: 'Localization Pipeline',
    description: 'EN, ES, JP, HI + dynamic lunar calendar-based responses'
  }
];

// Floating mystical particle
const MysticalParticle = ({ delay = 0 }: { delay?: number }) => {
  const symbols = ['✦', '✧', '★', '☆', '✵', '◆', '◇'];
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  
  return (
    <motion.div
      className="absolute text-purple-400/20 text-2xl"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        opacity: [0, 0.5, 0],
        scale: [0.2, 1.2, 0.2],
        rotate: [0, 180, 360],
        y: [-50, 50]
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      {randomSymbol}
    </motion.div>
  );
};

interface OracleProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function Oracle({ isMenuOpen, onToggleMenu }: OracleProps) {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />

      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0">
        {/* Deep radial gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A0B2E] via-[#2D1B69] to-black" />
        
        {/* Floating particles */}
        {[...Array(40)].map((_, i) => (
          <MysticalParticle key={i} delay={i * 0.4} />
        ))}

        {/* Cinematic glows */}
        <motion.div 
          className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-violet-500/15 rounded-full blur-[140px]"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.3, 0.2, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C084FC]/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />

        {/* Mystic rays */}
        <motion.div
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
          {/* Rotating mystical rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="absolute w-[900px] h-[900px] border border-purple-500/5 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="absolute w-[700px] h-[700px] border border-violet-400/5 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 110, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] border border-[#C084FC]/5 rounded-full"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-purple-400 hover:text-violet-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              {/* Crystal orb icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8 flex justify-center"
              >
                <motion.div
                  className="relative"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-violet-600 flex items-center justify-center relative overflow-hidden shadow-2xl shadow-purple-500/50">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
                      animate={{ y: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <span className="text-5xl relative z-10">🔮</span>
                  </div>
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <span className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600/20 to-violet-500/20 backdrop-blur-sm text-purple-300 text-sm tracking-[0.3em] uppercase rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/10">
                  UI/UX · Motion Design · Development
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-purple-200 via-violet-300 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                  THE ORACLE
                </span>
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl font-semibold mb-6 text-transparent bg-gradient-to-r from-[#C084FC] to-violet-400 bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                A Pocket Divination Experience
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-purple-300/80 max-w-4xl mx-auto leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Transforming the simple <span className="text-white font-semibold">Magic 8-Ball</span> mechanic into a <span className="text-violet-200 font-semibold">cinematic ritual</span> wrapped in purple hues
              </motion.p>

              <motion.p
                className="text-base text-purple-400/60 italic mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Where UX meets wonder—a 10-second utility transformed into a 2-minute ritual
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="mb-16"
              >
                <a
                  href="https://from-layer-67298225.figma.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-lg font-semibold rounded-full shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  />
                  <Sparkles className="w-6 h-6 relative z-10" />
                  <span className="relative z-10">Consult The Oracle</span>
                  <ExternalLink className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Project Details Grid */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                {projectDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-5 rounded-2xl border border-purple-500/30 bg-black/40 backdrop-blur-sm">
                      <div className="text-xs text-purple-400/60 mb-1 uppercase tracking-wider">{detail.label}</div>
                      <div className="text-lg font-semibold text-purple-200">{detail.value}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Hero Image */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/30 via-violet-500/20 to-purple-600/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/50">
                <img 
                  src={heroImage}
                  alt="The Oracle - Luminous crystal sphere"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Experience - Interaction Flow */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Wand2 className="w-10 h-10 text-purple-300" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-violet-400 bg-clip-text text-transparent">
                  The Experience
                </h2>
              </div>
              <p className="text-lg text-purple-300/70 max-w-3xl mx-auto">
                A choreographed journey from attraction to revelation, designed to feel both mystical and satisfying
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {experienceSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/50 to-violet-700/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`relative rounded-2xl p-6 border border-purple-500/20 bg-gradient-to-br ${step.color} bg-opacity-10 backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full`}>
                    <div className="text-5xl mb-4 filter drop-shadow-lg">{step.icon}</div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-purple-400/70 bg-purple-950/50 px-2 py-1 rounded-full">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-purple-100">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-purple-200/80 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Corner accent */}
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-purple-400/30 rounded-tr-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal & Response Images Side by Side */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Modal Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/20 to-violet-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl">
                  <img 
                    src={modalImage}
                    alt="Ask the Oracle modal"
                    className="w-full h-auto"
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center text-purple-400/80 mt-4 text-sm"
                >
                  Glass-morphic modal with heavy haptic feedback
                </motion.p>
              </motion.div>

              {/* Response Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/20 to-purple-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl">
                  <img 
                    src={responseImage}
                    alt="Oracle answer revealed"
                    className="w-full h-auto"
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-center text-purple-400/80 mt-4 text-sm"
                >
                  Parchment-style answer card with particle explosion
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visual Language */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-200 to-violet-400 bg-clip-text text-transparent">
                  Visual Language
                </span>
              </h2>
              <p className="text-lg text-purple-300/70 max-w-3xl mx-auto">
                Every pixel crafted to evoke mysticism through color, typography, lighting, and motion
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {visualElements.map((element, index) => {
                const Icon = element.icon;
                return (
                  <motion.div
                    key={element.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/50 to-violet-700/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`relative rounded-2xl p-8 border border-purple-500/20 bg-gradient-to-br ${element.gradient} bg-opacity-10 backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
                      <div className="w-16 h-16 rounded-xl bg-black/40 border border-purple-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-purple-300" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-purple-100">
                        {element.title}
                      </h3>
                      
                      <p className="text-purple-200/80 leading-relaxed">
                        {element.description}
                      </p>

                      {/* Corner accents */}
                      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-purple-400/30 rounded-tr-xl" />
                      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-purple-400/30 rounded-bl-xl" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Micro-interactions & Feedback */}
        <section className="px-6 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Zap className="w-10 h-10 text-purple-300" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-violet-400 bg-clip-text text-transparent">
                  Micro-interactions & Feedback
                </h2>
              </div>
              <p className="text-lg text-purple-300/70 max-w-3xl mx-auto">
                Tactile details that make the digital feel physical and delightfully responsive
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {microInteractions.map((interaction, index) => (
                <motion.div
                  key={interaction.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 to-violet-700/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-6 rounded-2xl border border-purple-500/20 bg-purple-950/20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4">{interaction.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-purple-100">
                      {interaction.title}
                    </h3>
                    <p className="text-sm text-purple-300/70 leading-relaxed">
                      {interaction.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gamified Rarity System */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Gamepad2 className="w-10 h-10 text-amber-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Gamified Rarity System
                </h2>
              </div>
              <p className="text-lg text-purple-300/70 max-w-3xl mx-auto">
                A 2% "Golden Prophecy" creates a jackpot moment that users can't help but share
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {rarityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative p-6 rounded-2xl border border-purple-500/30 bg-black/40 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text mb-2">{feature.value}</div>
                    <h4 className="text-lg font-semibold text-purple-100 mb-2">{feature.title}</h4>
                    <p className="text-sm text-purple-400/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Golden Prophecy Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 rounded-3xl blur-3xl" />
              
              <div className="relative bg-gradient-to-br from-amber-900/30 to-yellow-800/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-amber-500/40">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Award className="w-12 h-12 text-amber-400" />
                    <h3 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text">
                      Golden Prophecy
                    </h3>
                    <Award className="w-12 h-12 text-amber-400" />
                  </div>

                  <p className="text-xl text-amber-200/90 leading-relaxed mb-6 max-w-3xl mx-auto">
                    When the ultra-rare <strong>2% Golden Prophecy</strong> hits, the entire palette shifts to amber, particles turn gold, a crown emoji appears, and confetti bursts across the screen. The share panel auto-opens to leverage social virality.
                  </p>

                  <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600/30 to-yellow-600/30 backdrop-blur-sm border border-amber-500/40 rounded-full">
                    <span className="text-amber-300 font-semibold">Jackpot Effect: 1.5× Glow + Unique Haptics + Auto-Share</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accessibility & Inclusivity */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Accessibility className="w-10 h-10 text-purple-300" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-violet-400 bg-clip-text text-transparent">
                  Accessibility & Inclusivity
                </h2>
              </div>
              <p className="text-lg text-purple-300/70 max-w-3xl mx-auto">
                Mysticism for everyone—built with WCAG 2.2 AA compliance and thoughtful inclusive design
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {accessibilityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 to-violet-700/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-6 rounded-2xl border border-purple-500/20 bg-purple-950/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold mb-2 text-purple-100">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-purple-300/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Image Showcase */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-purple-600/30 via-violet-500/20 to-purple-600/30 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/50">
                <img 
                  src={historyImage}
                  alt="Fortune history panel"
                  className="w-full h-auto"
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center text-purple-400/80 mt-6 leading-relaxed max-w-2xl mx-auto"
              >
                Users can revisit their fortune history, creating a personal archive of mystical guidance
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Technical Performance */}
        <section className="px-6 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <TrendingUp className="w-10 h-10 text-purple-300" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-200 to-violet-400 bg-clip-text text-transparent">
                  Technical Performance
                </h2>
              </div>
              <p className="text-lg text-purple-300/70 max-w-3xl mx-auto">
                Cinematic visuals without compromising speed—gradients and glows generated via code
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {technicalAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-violet-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-6 rounded-2xl border border-purple-500/30 bg-black/40 backdrop-blur-sm text-center">
                    <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text mb-2">{achievement.metric}</div>
                    <div className="text-sm text-purple-400/70">{achievement.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex flex-col gap-4 p-8 rounded-2xl bg-purple-950/30 border border-purple-500/30 backdrop-blur-sm">
                <p className="text-purple-300/90 leading-relaxed max-w-2xl">
                  <strong className="text-purple-200">Stateless generation engine</strong> based on timestamp microseconds delivers <strong className="text-purple-200">instant responses</strong> with zero network calls. All visual effects rendered in real-time at 60fps.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Iterations */}
        <section className="px-6 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-200 to-violet-400 bg-clip-text text-transparent">
                  Future Iterations
                </span>
              </h2>
              <p className="text-lg text-purple-300/70 max-w-3xl mx-auto">
                Next-level experiences to expand The Oracle's mystical universe
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {futureIterations.map((iteration, index) => (
                <motion.div
                  key={iteration.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/30 to-violet-700/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 rounded-2xl border border-purple-500/20 bg-purple-950/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full">
                    <div className="text-5xl mb-4">{iteration.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-purple-100">
                      {iteration.title}
                    </h3>
                    <p className="text-purple-300/70 leading-relaxed">
                      {iteration.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Takeaway */}
        <section className="px-6 py-32 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-12 bg-gradient-to-br from-purple-500/20 via-transparent to-violet-600/20 rounded-3xl blur-3xl" />
              
              <div className="relative bg-gradient-to-br from-purple-900/40 to-violet-800/30 backdrop-blur-sm rounded-3xl p-12 md:p-16 border-2 border-purple-600/40">
                <div className="text-center mb-8">
                  <Star className="w-16 h-16 text-purple-300 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-200">
                    The Takeaway
                  </h2>
                </div>

                <blockquote className="text-2xl md:text-3xl text-center text-purple-200 leading-relaxed font-light italic mb-8">
                  "By wrapping a simple random text generator in <span className="text-purple-100 font-normal">cinematic visuals</span>, <span className="text-purple-100 font-normal">tactile feedback</span>, and a <span className="text-purple-100 font-normal">2% jackpot moment</span>, The Oracle transforms a 10-second utility into a 2-minute ritual users genuinely <span className="text-purple-100 font-normal">feel</span>."
                </blockquote>

                <p className="text-center text-purple-400 text-sm tracking-wider uppercase mb-8">
                  — Design Philosophy
                </p>

                <div className="mt-12 p-6 rounded-2xl bg-purple-800/30 border border-purple-600/30">
                  <p className="text-purple-300 leading-relaxed text-center text-lg">
                    Good UX isn't just usability—<strong className="text-purple-200">it's wonder</strong>.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <a
                    href="https://from-layer-67298225.figma.site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white text-lg font-semibold rounded-full shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105"
                  >
                    <Sparkles className="w-6 h-6" />
                    <span>Experience The Oracle</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Details Footer */}
        <section className="px-6 py-24 border-t border-purple-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-purple-500 text-sm uppercase tracking-wider mb-3 font-light">Role</h3>
                <p className="text-purple-200 text-lg">UI/UX, Motion & Dev</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-purple-500 text-sm uppercase tracking-wider mb-3 font-light">Duration</h3>
                <p className="text-purple-200 text-lg">2 Weeks</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-purple-500 text-sm uppercase tracking-wider mb-3 font-light">Type</h3>
                <p className="text-purple-200 text-lg">Solo Side Project</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-purple-500 text-sm uppercase tracking-wider mb-3 font-light">Platform</h3>
                <p className="text-purple-200 text-lg">iOS Web App</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}