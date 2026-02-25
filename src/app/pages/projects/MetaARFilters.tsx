import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, Eye, Layers, Share2, Sparkles, TrendingUp, Users, Video, Zap } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';
import filtersImage from 'figma:asset/c3691781ff40b4371515a2727d3dd2f716ba42b7.png';
import metricsImage from 'figma:asset/82dcc12af8be4dd140a7fa609ca58e69696c61a8.png';

// Holographic scanning line effect
const ScanLine = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
      style={{ filter: 'blur(1px)' }}
      animate={{
        y: ['0%', '100%', '0%'],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "linear"
      }}
    />
  );
};

// Floating AR particles
const ARParticle = ({ delay = 0 }: { delay?: number }) => {
  const randomColor = ['#FF00FF', '#00FFFF', '#FF0080', '#8000FF'][Math.floor(Math.random() * 4)];
  
  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        backgroundColor: randomColor,
        boxShadow: `0 0 10px ${randomColor}`
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        rotate: [0, 360]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );
};

// Glitch text effect component
const GlitchText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{
        textShadow: [
          '0 0 0px transparent',
          '2px 2px 0px #ff00ff, -2px -2px 0px #00ffff',
          '0 0 0px transparent'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 3
      }}
    >
      {children}
    </motion.div>
  );
};

interface MetaARFiltersProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function MetaARFilters({ isMenuOpen, onToggleMenu }: MetaARFiltersProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />

      {/* AR Particles background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <ARParticle key={i} delay={i * 0.15} />
        ))}
      </div>

      {/* Scanning lines */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <ScanLine delay={0} />
        <ScanLine delay={2} />
        <ScanLine delay={4} />
      </div>

      {/* Holographic glow effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-magenta-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-32">
          <div className="max-w-7xl mx-auto relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-cyan-400 transition-colors mb-8"
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
              {/* AR Icons */}
              <motion.div
                className="flex items-center justify-center gap-6 mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {[
                  { icon: Video, color: 'from-magenta-500 to-pink-500' },
                  { icon: Eye, color: 'from-cyan-500 to-blue-500' },
                  { icon: Layers, color: 'from-purple-500 to-pink-500' },
                  { icon: Sparkles, color: 'from-pink-500 to-orange-500' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl`}
                      animate={{ 
                        y: [0, -15, 0],
                        rotateY: [0, 360]
                      }}
                      transition={{ 
                        y: {
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        },
                        rotateY: {
                          duration: 2,
                          delay: index * 0.3,
                          ease: "easeInOut"
                        }
                      }}
                    >
                      <Icon className="w-8 h-8 text-white drop-shadow-lg" />
                      <motion.div
                        className="absolute inset-0 rounded-xl bg-white/20"
                        animate={{ opacity: [0, 0.5, 0], scale: [0.8, 1.3, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
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
                <span className="inline-block px-8 py-3 bg-gradient-to-r from-magenta-600/20 to-cyan-600/20 backdrop-blur-md text-transparent bg-clip-text bg-gradient-to-r from-magenta-400 to-cyan-400 text-sm tracking-[0.3em] uppercase rounded-full border-2 border-magenta-500/40 shadow-lg shadow-magenta-500/20">
                  <span className="text-white">XR · Augmented Reality · Meta Spark Hub</span>
                </span>
              </motion.div>

              <GlitchText className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-magenta-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                  META AR
                </span>
              </GlitchText>

              <motion.h2
                className="text-4xl md:text-5xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                  FILTERS
                </span>
              </motion.h2>

              <motion.div
                className="flex items-center justify-center gap-3 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Sparkles className="w-8 h-8 text-magenta-400 animate-pulse" />
                <p className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                  Design Becomes Experience
                </p>
                <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Creating <span className="font-bold text-magenta-400">AR filters</span> for Meta platforms that turn <span className="font-bold text-cyan-400">digital magic</span> into viral experiences
              </motion.p>

              <motion.p
                className="text-base text-white/70 italic mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Meta Spark Hub · Extended Reality Creative Lab
              </motion.p>

              {/* Stats cards */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {[
                  { icon: Eye, label: 'Opens', value: '143K+', gradient: 'from-magenta-500/30 to-pink-500/30', color: 'magenta' },
                  { icon: Users, label: 'Captures', value: '34K+', gradient: 'from-cyan-500/30 to-blue-500/30', color: 'cyan' },
                  { icon: Share2, label: 'Shares', value: '4.8K+', gradient: 'from-purple-500/30 to-pink-500/30', color: 'purple' }
                ].map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                      <div className={`relative p-6 rounded-2xl border-2 border-${stat.color}-500/40 bg-${stat.color}-600/10 backdrop-blur-md`}>
                        <Icon className={`w-8 h-8 text-${stat.color}-400 mb-3 mx-auto`} />
                        <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.value}</div>
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
            <div className="w-6 h-10 border-2 border-cyan-400/60 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* XR Concept Section */}
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
                <Layers className="w-10 h-10 text-magenta-400" />
                <h2 className="text-4xl md:text-6xl font-black text-center">
                  <span className="bg-gradient-to-r from-magenta-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    The Creative Lab
                  </span>
                </h2>
                <Video className="w-10 h-10 text-cyan-400" />
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                    <strong className="text-magenta-400">Meta Spark Hub</strong> became my proving ground for <strong className="text-cyan-400">interactive design</strong>. What started as a self-learning journey to master visual effects quickly transformed into a case study on the power of <strong className="text-white">organic distribution</strong>.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-magenta-600/20 to-pink-600/20 backdrop-blur-md border-2 border-magenta-500/40"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Eye className="w-6 h-6 text-magenta-400" />
                      People-First Design
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      I created filters designed <strong className="text-magenta-300">not for brands, but for people</strong>: aesthetic tools capable of enhancing or altering reality with a touch of digital magic.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-md border-2 border-cyan-500/40"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                      XR Innovation
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      Exploring the boundaries of <strong className="text-cyan-300">Extended Reality</strong>, blending the physical and digital worlds to create immersive experiences that resonate with users globally.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Showcase */}
        <section className="px-6 py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-magenta-600/5 to-transparent" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6">
                <span className="bg-gradient-to-r from-magenta-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  The Filters
                </span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                From <strong className="text-magenta-400">playful quizzes</strong> to <strong className="text-cyan-400">aesthetic enhancements</strong>, each filter tells a story
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Filter Cards */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 gap-6"
              >
                {[
                  { 
                    name: 'Dog Test?', 
                    emoji: '🐕', 
                    description: 'Interactive personality quiz that playfully determines what kind of dog you would be',
                    gradient: 'from-magenta-600/20 to-pink-600/20',
                    borderColor: 'border-magenta-500/40'
                  },
                  { 
                    name: 'Alette Piumose', 
                    emoji: '🦋', 
                    description: 'Ethereal wings effect that adds a magical, dreamy aesthetic to your photos',
                    gradient: 'from-cyan-600/20 to-blue-600/20',
                    borderColor: 'border-cyan-500/40'
                  },
                  { 
                    name: 'Emoji Crown', 
                    emoji: '👑', 
                    description: 'Animated emoji headpiece that creates a fun, royal look with floating emojis',
                    gradient: 'from-purple-600/20 to-pink-600/20',
                    borderColor: 'border-purple-500/40'
                  },
                  { 
                    name: 'Cat Paintings Quiz', 
                    emoji: '🎨', 
                    description: 'Art history challenge matching you with famous feline masterpieces',
                    gradient: 'from-pink-600/20 to-orange-600/20',
                    borderColor: 'border-pink-500/40'
                  }
                ].map((filter, index) => (
                  <motion.div
                    key={filter.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-br ${filter.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={`relative p-6 rounded-2xl bg-gradient-to-br ${filter.gradient} backdrop-blur-md border-2 ${filter.borderColor} hover:scale-105 transition-all duration-300`}>
                      <div className="flex items-start gap-4">
                        <span className="text-5xl flex-shrink-0">{filter.emoji}</span>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{filter.name}</h4>
                          <p className="text-sm text-white/80 leading-relaxed">{filter.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Right side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-magenta-600/30 via-purple-600/30 to-cyan-600/30 rounded-2xl blur-2xl animate-pulse" />
                <div className="relative rounded-2xl overflow-hidden border-4 border-magenta-500/40 shadow-2xl">
                  <img 
                    src={filtersImage}
                    alt="Meta AR Filters Collection"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Organic Growth Section */}
        <section className="px-6 py-20 relative bg-gradient-to-b from-cyan-600/10 to-purple-600/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-magenta-300 bg-clip-text text-transparent">
                  Organic Growth
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Success from the ground up: no ads, just authentic engagement
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto mb-12"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-cyan-600/20 via-purple-600/20 to-magenta-600/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl bg-black/40 backdrop-blur-md p-8">
                  <img 
                    src={metricsImage}
                    alt="Meta AR Filters Metrics"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Eye,
                  title: '143,250 Opens',
                  subtitle: 'Curiosity Ignited',
                  description: 'The first spark of interest. Users discovering and activating the filters.',
                  gradient: 'from-magenta-600/20 to-pink-600/20',
                  borderColor: 'border-magenta-500/40',
                  iconColor: 'text-magenta-400'
                },
                {
                  icon: Users,
                  title: '34,522 Captures',
                  subtitle: 'Content Ownership',
                  description: 'Users making the content their own, creating personal moments.',
                  gradient: 'from-cyan-600/20 to-blue-600/20',
                  borderColor: 'border-cyan-500/40',
                  iconColor: 'text-cyan-400'
                },
                {
                  icon: Share2,
                  title: '4,876 Shares',
                  subtitle: 'Digital Word-of-Mouth',
                  description: 'Pure viral propagation. One screen to another, creating infinite resonance.',
                  gradient: 'from-purple-600/20 to-pink-600/20',
                  borderColor: 'border-purple-500/40',
                  iconColor: 'text-purple-400'
                }
              ].map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-br ${metric.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className={`relative rounded-3xl p-8 border-2 ${metric.borderColor} bg-gradient-to-br ${metric.gradient} backdrop-blur-md hover:scale-105 transition-all duration-300 h-full`}>
                      <Icon className={`w-12 h-12 ${metric.iconColor} mb-4`} />
                      
                      <h3 className="text-3xl font-bold mb-2 text-white">
                        {metric.title}
                      </h3>
                      
                      <p className={`text-sm ${metric.iconColor} font-semibold mb-3 uppercase tracking-wide`}>
                        {metric.subtitle}
                      </p>
                      
                      <p className="text-white/80 leading-relaxed">
                        {metric.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* XR Impact Section */}
        <section className="px-6 py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                <span className="bg-gradient-to-r from-magenta-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  The XR Revolution
                </span>
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Extended Reality is reshaping how we interact with digital content
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🌐',
                  title: 'Spatial Computing',
                  description: 'Blending physical and digital worlds seamlessly through AR technology',
                  gradient: 'from-magenta-500/30 to-pink-500/30',
                  borderColor: 'border-magenta-500/50'
                },
                {
                  icon: '👁️',
                  title: 'Real-time Tracking',
                  description: 'Face and object tracking that responds instantly to user movements',
                  gradient: 'from-cyan-500/30 to-blue-500/30',
                  borderColor: 'border-cyan-500/50'
                },
                {
                  icon: '🎭',
                  title: 'Visual Effects',
                  description: 'Advanced shaders and particle systems for stunning visual experiences',
                  gradient: 'from-purple-500/30 to-pink-500/30',
                  borderColor: 'border-purple-500/50'
                },
                {
                  icon: '🔄',
                  title: 'Social Integration',
                  description: 'Seamless sharing across Meta platforms driving viral growth',
                  gradient: 'from-pink-500/30 to-orange-500/30',
                  borderColor: 'border-pink-500/50'
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
              <div className="absolute -inset-12 bg-gradient-to-r from-magenta-600/20 via-purple-600/20 to-cyan-600/20 blur-3xl" />
              
              <div className="relative rounded-3xl p-12 md:p-16 border-4 border-magenta-500/40 bg-gradient-to-br from-magenta-600/10 via-purple-600/10 to-cyan-600/10 backdrop-blur-xl shadow-2xl text-center">
                <motion.div
                  className="flex items-center justify-center gap-6 mb-8"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <TrendingUp className="w-12 h-12 text-magenta-400" />
                  <Zap className="w-16 h-16 text-cyan-400" />
                  <Share2 className="w-12 h-12 text-purple-400" />
                </motion.div>

                <blockquote className="text-3xl md:text-5xl font-bold mb-6 leading-relaxed">
                  <span className="bg-gradient-to-r from-magenta-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    "These metrics aren't the result of ad campaigns, but the natural consequence of empathetic, refined design."
                  </span>
                </blockquote>
                
                <p className="text-xl text-white/80 mb-4">
                  In a world saturated with content, <strong className="text-magenta-400">visual quality</strong> still has the power to emerge and travel from screen to screen, creating <strong className="text-cyan-400">infinite waves of resonance</strong>.
                </p>
                
                <cite className="text-white/70 not-italic text-lg">
                  — Organic Growth Philosophy
                </cite>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Statement */}
        <section className="px-6 py-32 relative bg-gradient-to-b from-magenta-600/10 to-cyan-600/10 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-16 bg-gradient-to-r from-magenta-600/30 via-purple-600/30 to-cyan-600/30 blur-3xl animate-pulse" />
              
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotateY: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="text-9xl mb-8"
                >
                  👁️
                </motion.div>

                <h3 className="text-4xl md:text-5xl font-black mb-6">
                  <GlitchText>
                    <span className="bg-gradient-to-r from-magenta-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                      AR: The Future is Now
                    </span>
                  </GlitchText>
                </h3>

                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  <strong className="text-magenta-400">Meta Spark Hub</strong> proved that with the right blend of <strong className="text-cyan-400">technical skill</strong> and <strong className="text-purple-400">creative vision</strong>, AR filters can become powerful tools for <strong className="text-white">self-expression</strong> and <strong className="text-white">viral engagement</strong>.
                </p>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <span className="px-6 py-3 rounded-full bg-gradient-to-r from-magenta-600/20 to-pink-600/20 backdrop-blur-md border-2 border-magenta-500/40 text-white font-semibold">
                    🎨 Creative AR
                  </span>
                  <span className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-md border-2 border-cyan-500/40 text-white font-semibold">
                    📱 Social XR
                  </span>
                  <span className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border-2 border-purple-500/40 text-white font-semibold">
                    ⚡ Viral Design
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