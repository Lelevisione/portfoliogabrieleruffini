import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, Eye, Heart, Mountain, Sparkles, Users, Video } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';

// Import images
import heroImage from 'figma:asset/0d70ab150b115a93ea6c763a570a666de5a616b2.png';
import image1 from 'figma:asset/9053ef4d9e8bf9055a4f73546264c93dedd225ee.png';
import image2 from 'figma:asset/505e67ab6f121a90e7cd56013736b5c71d064cbe.png';
import image3 from 'figma:asset/e45eda4057d663974e12aecae47378d54231479c.png';
import logoImage from 'figma:asset/9b5a9be05823fee9d4db41f7c271fc2d7c78b86e.png';

const campaignElements = [
  { name: 'Marble', icon: '⬜', color: 'from-stone-300 to-stone-400' },
  { name: 'Museum', icon: '🏛️', color: 'from-stone-400 to-stone-500' },
  { name: 'Video', icon: '🎬', color: 'from-stone-200 to-stone-300' }
];

const narrativeValues = [
  {
    icon: Mountain,
    title: 'Carrara\'s Essence',
    description: 'Where the mountain becomes sculpture and history crystallizes in absolute white',
    details: ['Millennial marble tradition', 'State of matter, not just place', 'Suspended atmosphere', 'Sacred geometry of stone'],
    gradient: 'from-stone-600 to-stone-700'
  },
  {
    icon: Eye,
    title: 'Visual Direction',
    description: 'Geometries of emotion through carefully crafted cinematography',
    details: ['Polished coldness meets modern art', 'Each frame as a painting', 'Calm, inspired breath rhythm', 'Texture interplay'],
    gradient: 'from-stone-500 to-stone-600'
  },
  {
    icon: Users,
    title: 'New Generation',
    description: 'Active witnesses who allow themselves to be moved by beauty',
    details: ['Not passive spectators', 'Eyes of youth', 'Dialogue through presence', 'Living testimony'],
    gradient: 'from-stone-600 to-stone-700'
  },
  {
    icon: Heart,
    title: 'Emotional Belonging',
    description: 'A sensory experience that makes you feel part of an extraordinary story',
    details: ['Affirmation of belonging', 'Beyond academic visits', 'Past as inspiration root', 'Nourishes passion'],
    gradient: 'from-stone-500 to-stone-600'
  }
];

// Marble dust particle
const MarbleDust = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 bg-stone-300 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        opacity: [0, 0.4, 0],
        scale: [0, 1, 0],
        y: [-20, 20]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    />
  );
};

interface MudacProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function Mudac({ isMenuOpen, onToggleMenu }: MudacProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />

      {/* Sacred Marble Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient - darker with stone tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-stone-950/30 to-black" />
        
        {/* Subtle marble veining effect */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }} />

        {/* Marble dust particles */}
        {[...Array(40)].map((_, i) => (
          <MarbleDust key={i} delay={i * 0.3} />
        ))}

        {/* Sacred glow - subtle stone colors */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-stone-400/5 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-stone-300/5 rounded-full blur-[100px]"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.2, 0.1, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        />

        {/* Gentle light ray */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-400/20 to-transparent"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
          {/* Subtle rotating rings - marble inspired */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[700px] h-[700px] border border-stone-500/5 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
              className="absolute w-[550px] h-[550px] border border-stone-400/5 rounded-full"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-200 transition-colors mb-8"
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
              {/* Campaign elements */}
              <motion.div
                className="flex items-center justify-center gap-6 mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {campaignElements.map((element, index) => (
                  <motion.div
                    key={element.name}
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${element.color} flex items-center justify-center shadow-lg`}
                    animate={{ 
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: 0,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-3xl">{element.icon}</span>
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white/10"
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 2, repeat: 0, delay: index * 0.3 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8 flex justify-center"
              >
                <img 
                  src={logoImage} 
                  alt="mudaC Logo" 
                  className="h-24 w-auto opacity-80"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block px-8 py-3 bg-gradient-to-r from-stone-600/20 to-stone-500/20 backdrop-blur-sm text-stone-300 text-sm tracking-[0.3em] uppercase rounded-full border border-stone-500/30 shadow-lg shadow-stone-500/10">
                  Social Media · Videomaking · Museum Campaign
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span className="bg-gradient-to-r from-stone-100 via-stone-300 to-stone-100 bg-clip-text text-transparent drop-shadow-2xl">
                  DIALOGUES IN STONE
                </span>
              </motion.h1>

              <motion.p
                className="text-3xl md:text-4xl font-bold mb-8 text-stone-400/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                A Visual Journey through mudaC
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-stone-300/80 max-w-3xl mx-auto leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Where the <span className="text-white font-semibold">mountain becomes sculpture</span> and history crystallizes in absolute white
              </motion.p>

              <motion.p
                className="text-base text-stone-400/60 italic mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                mudaC · Museum of Arts in Carrara · "Lo visito" Campaign
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                {[
                  { label: 'Campaign', value: 'Social' },
                  { label: 'Medium', value: 'Video' },
                  { label: 'Theme', value: 'Marble' }
                ].map((stat) => (
                  <div key={stat.label} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-stone-600/20 to-stone-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 rounded-2xl border border-stone-500/30 bg-black/40 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-stone-300 mb-2">{stat.value}</div>
                      <div className="text-sm text-stone-400/60">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-stone-400/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-stone-400 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Concept Section */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-20"
            >
              <div className="flex items-center gap-4 mb-8">
                <Mountain className="w-10 h-10 text-stone-300" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-stone-200 to-stone-400 bg-clip-text text-transparent">
                  The Concept
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xl text-stone-200/90 leading-relaxed mb-6">
                    Carrara is not just a geographical location; it's <span className="text-stone-100 font-semibold">a state of matter</span>. For mudaC, the Museum of Arts in Carrara, the goal was to capture an atmosphere suspended in time.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-stone-600/10 border border-stone-500/20">
                      <h4 className="text-lg font-semibold text-white mb-2">🎬 The Encounter Between Millennia</h4>
                      <p className="text-stone-300/70">A choral narrative celebrating the dialogue between millennial marble tradition and irreverent contemporary art voices</p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-700/10 border border-stone-600/20">
                      <h4 className="text-lg font-semibold text-white mb-2">👁️ Through New Eyes</h4>
                      <p className="text-stone-300/70">Narrated through a new generation—not passive spectators, but active witnesses moved by beauty</p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-600/10 border border-stone-500/20">
                      <h4 className="text-lg font-semibold text-white mb-2">🏛️ "Lo Visito" - I Visit It</h4>
                      <p className="text-stone-300/70">An affirmation of belonging: the museum as sensory experience, not academic obligation</p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-stone-600/30 to-stone-500/30 rounded-3xl blur-2xl" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-stone-500/30 shadow-2xl">
                    <img 
                      src={heroImage}
                      alt="Museum visitor watching projection"
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Narrative Values Grid */}
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
                <span className="bg-gradient-to-r from-stone-200 to-stone-400 bg-clip-text text-transparent">
                  Narrative Architecture
                </span>
              </h2>
              <p className="text-lg text-stone-300/70 max-w-2xl mx-auto">
                Four pillars of emotional communication
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {narrativeValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-stone-600/50 to-stone-700/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`relative rounded-2xl p-8 border border-stone-500/20 bg-gradient-to-br ${value.gradient} bg-opacity-10 backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full flex flex-col`}>
                      <div className="w-16 h-16 rounded-xl bg-black/40 border border-stone-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-stone-300" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {value.title}
                      </h3>
                      
                      <p className="text-stone-300/70 mb-4 flex-grow">
                        {value.description}
                      </p>

                      <ul className="space-y-2">
                        {value.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-stone-400/60">
                            <Sparkles className="w-4 h-4 text-stone-400 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Corner accents */}
                      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-stone-400/30 rounded-tr-xl" />
                      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-stone-400/30 rounded-bl-xl" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12 text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <Video className="w-10 h-10 text-stone-300" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-stone-200 to-stone-400 bg-clip-text text-transparent">
                  The Campaign Video
                </h2>
              </div>
              <p className="text-lg text-stone-300/70 max-w-2xl mx-auto">
                Geometries of emotion through visual storytelling
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group"
            >
              <div className="absolute -inset-8 bg-gradient-to-br from-stone-500/30 via-stone-600/20 to-transparent rounded-3xl blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-600/50 shadow-2xl">
                <div className="relative" style={{ padding: '56.25% 0 0 0' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1066576328?h=a42856c4da&title=0&byline=0&portrait=0"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="mudaC - Lo visito"
                  />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-6 -right-6 px-6 py-3 bg-gradient-to-r from-stone-600 to-stone-700 rounded-full border-2 border-stone-400/50 shadow-lg hidden md:block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-white font-bold">Watch Now</span>
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center text-stone-500 mt-8 italic font-light"
            >
              "mudaC - Lo visito" · Museo delle Arti Carrara
            </motion.p>
          </div>
        </section>

        {/* Visual Direction Deep Dive */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-8 h-8 text-stone-300" />
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-stone-200 to-stone-400 bg-clip-text text-transparent">
                    Visual Direction
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Texture Interplay</h4>
                    <p className="text-stone-300/80 leading-relaxed">
                      The polished coldness of classical sculptures clashes and merges with modern installations and graphic wall patterns. A visual dialogue between eras.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Frames as Paintings</h4>
                    <p className="text-stone-300/80 leading-relaxed">
                      The camera lingers on details, transforming each shot into a painting in itself—contemplative, sacred, suspended.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Rhythm of Breath</h4>
                    <p className="text-stone-300/80 leading-relaxed">
                      The editing follows a calm, inspired breath—pacing that invites reflection rather than consumption.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Active Witnessing</h4>
                    <p className="text-stone-300/80 leading-relaxed">
                      Young protagonists aren't passive viewers but active witnesses who allow beauty to move through them.
                    </p>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2 relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-stone-600/20 to-stone-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-stone-500/30 shadow-2xl">
                  <img 
                    src={image1}
                    alt="Museum scene"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[image2, image3].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-stone-600/30 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-stone-500/30 shadow-2xl">
                    <img 
                      src={img}
                      alt={`Museum scene ${index + 2}`}
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* The Message - Highlight */}
        <section className="px-6 py-32 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-12 bg-gradient-to-br from-stone-500/20 via-transparent to-stone-600/20 rounded-3xl blur-3xl" />
              
              <div className="relative bg-gradient-to-br from-stone-900/40 to-stone-800/30 backdrop-blur-sm rounded-3xl p-12 md:p-16 border-2 border-stone-600/40">
                <div className="text-center mb-8">
                  <Mountain className="w-16 h-16 text-stone-300 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-200">
                    The Message
                  </h2>
                </div>

                <blockquote className="text-2xl md:text-3xl text-center text-stone-200 leading-relaxed font-light italic mb-8">
                  "Visiting the museum is not an academic act, but a <span className="text-stone-100 font-normal">sensory experience</span> that nourishes passion and makes you feel part of an extraordinary story."
                </blockquote>

                <p className="text-center text-stone-400 text-sm tracking-wider uppercase">
                  — mudaC Campaign Philosophy
                </p>

                <div className="mt-12 p-6 rounded-2xl bg-stone-800/30 border border-stone-600/30">
                  <p className="text-stone-300 leading-relaxed text-center">
                    It is the place where the past is not a burden, but a <strong className="text-stone-200">root from which future inspiration blossoms</strong>. The "Lo visito" campaign affirms belonging to something greater—a heritage, a story, a living tradition crystallized in marble.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Details Footer */}
        <section className="px-6 py-24 border-t border-stone-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-stone-500 text-sm uppercase tracking-wider mb-3 font-light">Role</h3>
                <p className="text-stone-200 text-lg">Videomaking</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-stone-500 text-sm uppercase tracking-wider mb-3 font-light">Client</h3>
                <p className="text-stone-200 text-lg">mudaC Carrara</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-stone-500 text-sm uppercase tracking-wider mb-3 font-light">Category</h3>
                <p className="text-stone-200 text-lg">Social Media</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-stone-500 text-sm uppercase tracking-wider mb-3 font-light">Theme</h3>
                <p className="text-stone-200 text-lg">Museum Heritage</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}