import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, Code, Cpu, Gamepad2, Layers, Lightbulb, Play, Sparkles, Users, Zap } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';
import conceptImage from 'figma:asset/5065ead2400ea8b72025f4237a9238ddbd6d496a.png';
import architectureImage from 'figma:asset/f930d65838893754f335b81a7ef677e1919122eb.png';
import sceneManagementImage from 'figma:asset/73f7968a6bba732dd2a041b1446d0ede9b4f88e9.png';
import characterSetupImage from 'figma:asset/4e7f8bb27aa8e9c5fcedef512b27964904d31283.png';
import gameplayMechanicsImage from 'figma:asset/3556f25dc05ea3b1bcd745886ddd7a3ab1e0bdb8.png';
import problemSolvingImage from 'figma:asset/715152c5f99d85aa87fc0df93e9938a8f780873c.png';

const techStack = [
  { name: 'Unity 3D', icon: '🎮', color: 'from-cyan-500 to-blue-500' },
  { name: 'C# (.NET)', icon: '⚡', color: 'from-purple-500 to-pink-500' },
  { name: 'URP', icon: '✨', color: 'from-blue-500 to-cyan-500' },
  { name: 'Git LFS', icon: '📦', color: 'from-green-500 to-emerald-500' }
];

const coreFeatures = [
  {
    icon: Layers,
    title: 'Level Design & Scene Construction',
    description: 'Modular prefab architecture with optimized rendering pipeline',
    details: ['Nested prefab systems', 'Occlusion culling', 'Custom LOD generation', 'Draw call optimization'],
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    icon: Code,
    title: 'Software Architecture',
    description: 'SOLID principles with scalable C# scripting patterns',
    details: ['Observer pattern events', 'Interface-based interactions', 'Finite State Machine', 'Singleton GameManager'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    icon: Cpu,
    title: 'Real-time Optimization',
    description: 'Advanced rendering techniques for peak performance',
    details: ['Mixed lighting system', 'Baked GI with light probes', 'Reflection probes', 'PBR materials'],
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    icon: Users,
    title: 'NPC & Audio Systems',
    description: 'Intelligent character behavior with spatial audio',
    details: ['NavMesh navigation', '3D spatialized sound', 'Dynamic subtitles', 'Look-at mechanics'],
    gradient: 'from-pink-600 to-purple-600'
  },
  {
    icon: Gamepad2,
    title: 'Gameplay Mechanics',
    description: 'Immersive interaction systems and UI/UX design',
    details: ['Raycast interactions', '360° 3D inspection', 'Dynamic crosshair', 'Cinemachine cameras'],
    gradient: 'from-emerald-600 to-green-600'
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description: 'Advanced technical challenges and solutions',
    details: ['Character Controller fixes', 'Coroutine positioning', 'Transform disabling', 'Unity registry updates'],
    gradient: 'from-orange-600 to-red-600'
  }
];

// Grid particle component for futuristic effect
const GridParticle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-cyan-400 rounded-full"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
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

interface OnDisplayProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function OnDisplay({ isMenuOpen, onToggleMenu }: OnDisplayProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

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

      {/* Futuristic Grid Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/20 to-cyan-950/20" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        {/* Grid particles */}
        {[...Array(30)].map((_, i) => (
          <GridParticle key={i} delay={i * 0.2} />
        ))}

        {/* Glowing orbs */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />

        {/* Scanning lines */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          {/* 3D rotating rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[600px] h-[600px] border-2 border-cyan-500/20 rounded-full"
              style={{ transformStyle: 'preserve-3d' }}
            />
            <motion.div
              animate={{ rotateZ: -360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[500px] h-[500px] border-2 border-blue-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotateZ: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border border-cyan-400/10 rounded-full"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-cyan-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
              style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
            >
              {/* Tech icons */}
              <motion.div
                className="flex items-center justify-center gap-6 mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}
                    animate={{ 
                      y: [0, -10, 0],
                      rotateY: [0, 360]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: 0,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-3xl">{tech.icon}</span>
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white/20"
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 2, repeat: 0, delay: index * 0.3 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <span className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-sm text-cyan-300 text-sm tracking-[0.3em] uppercase rounded-full border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                  XR · Unity 3D · Interactive Museum Experience
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
                  ON DISPLAY
                </span>
              </motion.h1>

              <motion.p
                className="text-3xl md:text-4xl font-bold mb-8 text-blue-300/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                A Curator's Choice
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-cyan-200/80 max-w-3xl mx-auto leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                An <span className="text-white font-semibold">interactive virtual museum</span> where you become the curator of your own collection
              </motion.p>

              <motion.p
                className="text-base text-cyan-300/60 italic mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Built with Unity 3D · Powered by real-time rendering technology
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                {[
                  { label: 'Real-time 3D', value: '100%' },
                  { label: 'Optimization', value: '60 FPS' },
                  { label: 'Interactivity', value: 'Full' }
                ].map((stat, index) => (
                  <div key={stat.label} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 rounded-2xl border border-cyan-500/30 bg-black/40 backdrop-blur-sm">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                      <div className="text-sm text-cyan-200/60">{stat.label}</div>
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
            <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
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
                <Zap className="w-10 h-10 text-cyan-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Concept & Vision
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xl text-cyan-100/90 leading-relaxed mb-6">
                    Creating an interactive virtual museum where <span className="text-cyan-400 font-semibold">the player is not just a spectator</span>, but the curator of their own collection.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-cyan-600/10 border border-cyan-500/20">
                      <h4 className="text-lg font-semibold text-white mb-2">🎯 The Objective</h4>
                      <p className="text-cyan-200/70">Merge 3D exploration with edutainment, making art history learning dynamic and engaging</p>
                    </div>

                    <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20">
                      <h4 className="text-lg font-semibold text-white mb-2">🎮 The Game Loop</h4>
                      <p className="text-cyan-200/70">Explore → Interact → Learn (Mini-games) → Unlock Knowledge</p>
                    </div>

                    <div className="p-4 rounded-xl bg-cyan-600/10 border border-cyan-500/20">
                      <h4 className="text-lg font-semibold text-white mb-2">🏛️ Three Mini-games</h4>
                      <ul className="text-cyan-200/70 space-y-1 ml-4 list-disc">
                        <li>True or False: Critical analysis to distinguish originals from copies</li>
                        <li>Art Geography: Spatial placement of artworks on the map</li>
                        <li>Timeline: Chronological ordering of masterpieces</li>
                      </ul>
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/30 to-blue-600/30 rounded-3xl blur-2xl" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl">
                    <img 
                      src={conceptImage}
                      alt="On Display - Concept"
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Core Features Grid */}
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
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Technical Architecture
                </span>
              </h2>
              <p className="text-lg text-cyan-200/70 max-w-2xl mx-auto">
                Six pillars of advanced Unity development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-br from-cyan-600/50 to-blue-600/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`relative rounded-2xl p-8 border border-cyan-500/20 bg-gradient-to-br ${feature.gradient} bg-opacity-10 backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full flex flex-col`}>
                      <div className="w-16 h-16 rounded-xl bg-black/40 border border-cyan-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {feature.title}
                      </h3>
                      
                      <p className="text-cyan-200/70 mb-4 flex-grow">
                        {feature.description}
                      </p>

                      <ul className="space-y-2">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-cyan-300/60">
                            <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Corner accents */}
                      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-cyan-400/30 rounded-tr-xl" />
                      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-cyan-400/30 rounded-bl-xl" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Architecture Deep Dive */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto space-y-32">
            {/* Architecture & Rendering */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Layers className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Architecture & Rendering
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Unity 6 Development (URP)</h4>
                    <p className="text-cyan-200/80 leading-relaxed">
                      Leveraging the Universal Render Pipeline for modern graphics pipeline management and cross-platform optimization.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Modular Asset Creation</h4>
                    <p className="text-cyan-200/80 leading-relaxed">
                      Base structures (floors, walls) built with scalable primitives. Complex assets imported from Sketchfab, Blender, Unity Store in .FBX, .glTF, and .dae formats.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Environmental Lighting</h4>
                    <p className="text-cyan-200/80 leading-relaxed">
                      Warm lights (R=250, G=238, B=180) calibrated to recreate the soft ambiance of an art gallery atmosphere.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Performance Optimization</h4>
                    <p className="text-cyan-200/80 leading-relaxed">
                      Manual culling system toggles entire rooms (Museum vs Exhibition Hall) to optimize rendering and hardware resources.
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
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl">
                  <img 
                    src={architectureImage}
                    alt="Architecture and Rendering"
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating tech badge */}
                <motion.div
                  className="absolute -top-6 -right-6 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full border-2 border-cyan-400/50 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="text-white font-bold">Unity URP</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Scene Management */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl">
                  <img 
                    src={sceneManagementImage}
                    alt="Scene Management"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Play className="w-8 h-8 text-blue-400" />
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Scene Management
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Three Distinct Scenes</h4>
                    <ul className="space-y-2 text-cyan-200/80">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span><strong>Main Museum Scene:</strong> Core gameplay with manual culling for room optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span><strong>Menu Scene:</strong> Start screen with game introduction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span><strong>History Scene:</strong> 3D environment providing historical context for mini-games</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-blue-600/10 border border-blue-500/20">
                    <h4 className="text-lg font-semibold text-white mb-3">Dynamic Room Culling</h4>
                    <p className="text-cyan-200/70">
                      The Museum scene implements an intelligent culling system that activates/deactivates entire rooms (Museum vs Exhibition Hall), drastically improving performance by rendering only visible geometry.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Character Setup */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Characters & Physics
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">NPC Setup & Locomotion</h4>
                    <ul className="space-y-2 text-cyan-200/80">
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                        <span><strong>Humanoid Model (Mixamo):</strong> Manual material extraction pipeline for correct texture interpretation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                        <span><strong>Dynamic Locomotion:</strong> Idle & Walking states managed through optimized Animator Controller</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Sparkles className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                        <span><strong>Audio Integration:</strong> Footstep audio clips with dynamic pitch variation (0.85-1.15) triggered by Animation Events</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Physics & Collisions</h4>
                    <p className="text-cyan-200/80 leading-relaxed">
                      Character Controller implementation with precise gravity simulation and controlled fall mechanics. Step Offset and Slope Limit calibrated for seamless navigation across museum floors without visual artifacts.
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
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl">
                  <img 
                    src={characterSetupImage}
                    alt="Character Setup"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Gameplay Mechanics */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl">
                  <img 
                    src={gameplayMechanicsImage}
                    alt="Gameplay Mechanics"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Gamepad2 className="w-8 h-8 text-blue-400" />
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Gameplay Systems
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Modular Architecture (VF_GAME_MANAGER)</h4>
                    <p className="text-cyan-200/80 leading-relaxed mb-3">
                      Central script monitoring global progress through state variables (Current Level, Solved).
                    </p>
                    <p className="text-cyan-200/70 text-sm">
                      GameObject arrays manage modular level design: activate/deactivate entire content areas or object groups seamlessly.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Proximity Interaction System</h4>
                    <ul className="space-y-2 text-cyan-200/80">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span><strong>Trigger Colliders:</strong> Vectorial distance calculation activates UI contextually</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span><strong>Dynamic Prompt:</strong> Minimalist UI with "Press E" indicator guides interaction</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-blue-600/10 border border-blue-500/20">
                    <h4 className="text-lg font-semibold text-white mb-3">📊 Game Loop</h4>
                    <p className="text-cyan-200/70">
                      Explore (Interaction) → Learn (Mini-game) → Win (Reward/Unlock) → See the museum transform (Persistence)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Problem Solving */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Problem Solving
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-red-600/20 to-orange-600/20 border border-red-500/30">
                    <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">⚠️</span>
                      Teleport Character Controller Conflict
                    </h4>
                    <p className="text-cyan-200/80 leading-relaxed mb-3">
                      <strong>Problem:</strong> During scene changes or position transitions, the Character Controller maintained character position due to its internal physics management overriding direct Transform manipulation.
                    </p>
                    <p className="text-cyan-200/80 leading-relaxed">
                      <strong>Solution:</strong> Coroutine-based positioning disablement. Script disables Character Controller component, executes Transform adjustment, then re-enables controller after one frame (yield return null). This ensures Unity registry updates the new position before physics reactivation.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">Technical Insights</h4>
                    <ul className="space-y-3 text-cyan-200/80">
                      <li className="flex items-start gap-2">
                        <Code className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span><strong>NavMesh Integration:</strong> NPCs use Unity's NavMesh for intelligent pathfinding through complex museum layouts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span><strong>Cinemachine Cameras:</strong> Virtual Camera system with smooth transitions and cinematic framing for NPC dialogues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Code className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span><strong>Persistent State:</strong> PlayerPrefs-based progress saving ensures museum transformation remains between sessions</span>
                      </li>
                    </ul>
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
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl">
                  <img 
                    src={problemSolvingImage}
                    alt="Problem Solving"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final Statement */}
        <section className="px-6 py-32 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-20 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-cyan-600/20 blur-3xl" />
              
              <div className="relative rounded-3xl p-12 md:p-16 border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-950/50 via-blue-950/50 to-cyan-950/50 backdrop-blur-xl shadow-2xl text-center overflow-hidden">
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
                  backgroundSize: '30px 30px'
                }} />

                <div className="relative z-10">
                  <motion.div
                    className="flex items-center justify-center gap-4 mb-8"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Zap className="w-12 h-12 text-cyan-400" />
                    <Cpu className="w-16 h-16 text-blue-400" />
                    <Gamepad2 className="w-12 h-12 text-cyan-400" />
                  </motion.div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                      Unity-Powered Innovation
                    </span>
                  </h2>

                  <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                    <strong className="text-white">On Display</strong> demonstrates <span className="text-cyan-400 font-semibold">advanced real-time 3D development</span> combining software architecture, interactive design, and performance optimization to create an engaging educational experience.
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                    {['Unity 3D', 'C# Scripting', 'URP Pipeline', 'Real-time AI'].map((tech) => (
                      <div key={tech} className="px-4 py-3 rounded-xl bg-cyan-600/10 border border-cyan-500/20 backdrop-blur-sm">
                        <span className="text-cyan-300 font-semibold">{tech}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-cyan-300/60">
                    Interactive Museum Experience · XR Project · Unity 3D Development
                  </p>
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