import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, Heart, Share2, Sparkles, Users, ExternalLink, Zap, TrendingUp } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useEffect, useState } from 'react';

// Import images
import image1 from 'figma:asset/f713b142de0110892d98d478cccbac9e6c18681b.png';
import image2 from 'figma:asset/77702c69afe3fb0bcf919b69a616f0120aaeb0d1.png';
import image3 from 'figma:asset/d93f5284fa81c40971a587229fa9d20026204ae3.png';

const loveElements = [
  { name: 'Love', icon: '💕', color: 'from-pink-400 to-rose-400' },
  { name: 'Share', icon: '🔗', color: 'from-rose-300 to-pink-300' },
  { name: 'Simple', icon: '✨', color: 'from-pink-300 to-rose-300' }
];

const features = [
  {
    icon: Heart,
    title: 'Personalized Messages',
    description: 'Create custom Valentine\'s requests with personalized names and sweet messages',
    details: ['Custom name input', 'Personalized message box', 'Cute animal selection', 'Unique shareable links'],
    gradient: 'from-pink-600 to-rose-600'
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your Valentine\'s request with a single link across all platforms',
    details: ['One-click link generation', 'Cross-platform compatibility', 'Social media ready', 'No sign-up required'],
    gradient: 'from-rose-500 to-pink-500'
  },
  {
    icon: Zap,
    title: 'Simple & Fun',
    description: 'Playful, intuitive interface that makes asking someone out delightful',
    details: ['Minimal design approach', 'Playful interactions', 'Cute animal avatars', 'Instant results'],
    gradient: 'from-pink-600 to-rose-600'
  },
  {
    icon: TrendingUp,
    title: 'Viral Success',
    description: 'From personal project to viral sensation with 160K+ TikTok views',
    details: ['160K+ TikTok views', 'Organic viral growth', 'Community-driven spread', 'Social media buzz'],
    gradient: 'from-rose-500 to-pink-500'
  }
];

// Floating heart particle
const FloatingHeart = ({ delay = 0 }: { delay?: number }) => {
  const heartEmojis = ['💕', '💖', '💗', '💓', '💝'];
  const randomHeart = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
  
  return (
    <motion.div
      className="absolute text-2xl"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.5],
        y: [-30, 30]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      {randomHeart}
    </motion.div>
  );
};

interface ValentineAppProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function ValentineApp({ isMenuOpen, onToggleMenu }: ValentineAppProps) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />

      {/* Romantic Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient with pink tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-rose-950/20 to-black" />
        
        {/* Floating hearts */}
        {[...Array(25)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.4} />
        ))}

        {/* Romantic glow effects */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-rose-400/10 rounded-full blur-[120px]"
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.25, 0.15, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />

        {/* Gentle light ray */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-pink-400/20 to-transparent"
          animate={{ y: ['0vh', '100vh'] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
          {/* Subtle rotating rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="absolute w-[700px] h-[700px] border border-pink-500/5 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
              className="absolute w-[550px] h-[550px] border border-rose-400/5 rounded-full"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-rose-400 hover:text-pink-300 transition-colors mb-8"
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
              {/* Love elements */}
              <motion.div
                className="flex items-center justify-center gap-6 mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {loveElements.map((element, index) => (
                  <motion.div
                    key={element.name}
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${element.color} flex items-center justify-center shadow-lg`}
                    animate={{ 
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-3xl">{element.icon}</span>
                    <motion.div
                      className="absolute inset-0 rounded-xl bg-white/10"
                      animate={{ opacity: [0, 0.3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Decorative hearts */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8 flex justify-center"
              >
                <div className="text-6xl">💖</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mb-6"
              >
                <span className="inline-block px-8 py-3 bg-gradient-to-r from-pink-600/20 to-rose-500/20 backdrop-blur-sm text-rose-300 text-sm tracking-[0.3em] uppercase rounded-full border border-pink-500/30 shadow-lg shadow-pink-500/10">
                  UI/UX Design · Web App · Viral Project
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span className="bg-gradient-to-r from-pink-200 via-rose-300 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl">
                  VALENTINE APP
                </span>
              </motion.h1>

              <motion.p
                className="text-3xl md:text-4xl font-bold mb-8 text-rose-400/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                A Playful Way to Ask Your Valentine
              </motion.p>

              <motion.p
                className="text-xl md:text-2xl text-rose-300/80 max-w-3xl mx-auto leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                From <span className="text-white font-semibold">personal project</span> to viral sensation with <span className="text-pink-300 font-semibold">160K+ views</span>
              </motion.p>

              <motion.p
                className="text-base text-rose-400/60 italic mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
              >
                Simple, shareable, and surprisingly viral
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                className="mb-12"
              >
                <a
                  href="https://line-cub-72209324.figma.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
                >
                  <span>Try Valentine App</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                {[
                  { label: 'TikTok Views', value: '160K+' },
                  { label: 'Sharing Method', value: 'Link' },
                  { label: 'Design', value: 'Simple' }
                ].map((stat) => (
                  <div key={stat.label} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-rose-700/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 rounded-2xl border border-pink-500/30 bg-black/40 backdrop-blur-sm">
                      <div className="text-2xl font-bold text-rose-300 mb-2">{stat.value}</div>
                      <div className="text-sm text-rose-400/60">{stat.label}</div>
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
            <div className="w-6 h-10 border-2 border-pink-400/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-pink-400 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* The Concept Section */}
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
                <Heart className="w-10 h-10 text-rose-300" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-200 to-rose-400 bg-clip-text text-transparent">
                  The Concept
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xl text-rose-200/90 leading-relaxed mb-6">
                    Valentine App started as a <span className="text-rose-100 font-semibold">personal project</span>—a playful way to ask someone to be your Valentine. The concept is brilliantly simple: create a personalized request, choose a cute animal, and share it with your crush.
                  </p>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-pink-600/10 border border-pink-500/20">
                      <h4 className="text-lg font-semibold text-white mb-2">💕 Personal & Playful</h4>
                      <p className="text-rose-300/70">Add your crush's name, write a sweet message, and pick a charming animal avatar—all in seconds</p>
                    </div>

                    <div className="p-4 rounded-xl bg-rose-700/10 border border-rose-600/20">
                      <h4 className="text-lg font-semibold text-white mb-2">🔗 Instant Sharing</h4>
                      <p className="text-rose-300/70">Generate a unique link that can be shared anywhere—WhatsApp, Instagram, TikTok, you name it</p>
                    </div>

                    <div className="p-4 rounded-xl bg-pink-600/10 border border-pink-500/20">
                      <h4 className="text-lg font-semibold text-white mb-2">✨ Unexpectedly Viral</h4>
                      <p className="text-rose-300/70">What began as a fun experiment exploded on TikTok with over 160,000 views</p>
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/30 to-rose-500/30 rounded-3xl blur-2xl" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
                    <img 
                      src={image1}
                      alt="Valentine App interface"
                      className="w-full h-auto"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
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
                <span className="bg-gradient-to-r from-pink-200 to-rose-400 bg-clip-text text-transparent">
                  Features & Success
                </span>
              </h2>
              <p className="text-lg text-rose-300/70 max-w-2xl mx-auto">
                Simple design meets viral potential
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
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
                    <div className="absolute -inset-1 bg-gradient-to-br from-pink-600/50 to-rose-700/50 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className={`relative rounded-2xl p-8 border border-pink-500/20 bg-gradient-to-br ${feature.gradient} bg-opacity-10 backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full flex flex-col`}>
                      <div className="w-16 h-16 rounded-xl bg-black/40 border border-rose-400/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-rose-300" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-pink-100">
                        {feature.title}
                      </h3>
                      
                      <p className="text-rose-100/90 mb-4 flex-grow">
                        {feature.description}
                      </p>

                      <ul className="space-y-2">
                        {feature.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-rose-200/80">
                            <Heart className="w-4 h-4 text-pink-300 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Corner accents */}
                      <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-rose-400/30 rounded-tr-xl" />
                      <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-rose-400/30 rounded-bl-xl" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works Deep Dive */}
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
                  <Sparkles className="w-8 h-8 text-rose-300" />
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-200 to-rose-400 bg-clip-text text-transparent">
                    How It Works
                  </h3>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">1. Personalize Your Request</h4>
                    <p className="text-rose-300/80 leading-relaxed">
                      Enter your crush's name and craft your perfect Valentine's message. The interface is clean, minimal, and designed to get out of your way.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">2. Choose Your Avatar</h4>
                    <p className="text-rose-300/80 leading-relaxed">
                      Select from adorable animal avatars—dog, panda, fox, rabbit, or cat. Each one adds personality to your request.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">3. Generate & Share</h4>
                    <p className="text-rose-300/80 leading-relaxed">
                      Click to create a unique shareable link. The recipient sees your personalized Valentine's request with a playful "Yes" or "No" choice.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">4. The Playful Twist</h4>
                    <p className="text-rose-300/80 leading-relaxed">
                      If they click "No," the app playfully encourages them to reconsider—adding a fun, lighthearted element that users loved sharing.
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
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/20 to-rose-500/20 rounded-3xl blur-2xl" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
                  <img 
                    src={image2}
                    alt="Valentine request screen"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>

            {/* Sharing Image */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-8">
                <Share2 className="w-8 h-8 text-rose-300" />
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-200 to-rose-400 bg-clip-text text-transparent">
                  Easy Sharing Everywhere
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-600/30 to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden border-2 border-pink-500/30 shadow-2xl">
                  <img 
                    src={image3}
                    alt="Sharing options"
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center text-rose-400/80 mt-6 leading-relaxed max-w-3xl mx-auto"
              >
                One click generates a shareable link compatible with WhatsApp, Instagram, TikTok, Discord, Teams, Email, and more. No app downloads, no complicated steps—just pure, simple sharing.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* The Viral Story - Highlight */}
        <section className="px-6 py-32 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-12 bg-gradient-to-br from-pink-500/20 via-transparent to-rose-600/20 rounded-3xl blur-3xl" />
              
              <div className="relative bg-gradient-to-br from-rose-900/40 to-pink-800/30 backdrop-blur-sm rounded-3xl p-12 md:p-16 border-2 border-pink-600/40">
                <div className="text-center mb-8">
                  <TrendingUp className="w-16 h-16 text-rose-300 mx-auto mb-6" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-rose-200">
                    From Personal to Viral
                  </h2>
                </div>

                <blockquote className="text-2xl md:text-3xl text-center text-rose-200 leading-relaxed font-light italic mb-8">
                  "What started as a simple tool to ask someone out became a <span className="text-rose-100 font-normal">viral sensation</span> with over 160,000 views on TikTok."
                </blockquote>

                <p className="text-center text-rose-400 text-sm tracking-wider uppercase mb-8">
                  — Valentine App's Journey
                </p>

                <div className="mt-12 p-6 rounded-2xl bg-pink-800/30 border border-pink-600/30">
                  <p className="text-rose-300 leading-relaxed text-center">
                    The app's playful design and <strong className="text-rose-200">effortless sharing mechanism</strong> resonated with users worldwide. People loved the simplicity—no sign-ups, no downloads, just pure fun. The result? Organic viral growth driven entirely by users sharing their personalized Valentine requests.
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <a
                    href="https://line-cub-72209324.figma.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <span>Try It Yourself</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Responsive Design Section */}
        <section className="px-6 py-20 relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Users className="w-10 h-10 text-rose-300" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-200 to-rose-400 bg-clip-text text-transparent">
                  Responsive & Adaptive
                </h2>
              </div>

              <p className="text-xl text-rose-200/90 leading-relaxed mb-8 max-w-3xl mx-auto">
                Valentine App is fully responsive and adapts seamlessly to any device. Whether on mobile, tablet, or desktop, the experience remains <span className="text-white font-semibold">smooth, intuitive, and delightful</span>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 rounded-2xl border border-pink-500/30 bg-black/40 backdrop-blur-sm">
                  <div className="text-4xl mb-3">📱</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Mobile First</h4>
                  <p className="text-rose-400/70">Optimized for mobile sharing and on-the-go romance</p>
                </div>

                <div className="p-6 rounded-2xl border border-pink-500/30 bg-black/40 backdrop-blur-sm">
                  <div className="text-4xl mb-3">💻</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Desktop Ready</h4>
                  <p className="text-rose-400/70">Full experience on larger screens with beautiful layout</p>
                </div>

                <div className="p-6 rounded-2xl border border-pink-500/30 bg-black/40 backdrop-blur-sm">
                  <div className="text-4xl mb-3">✨</div>
                  <h4 className="text-lg font-semibold text-white mb-2">Universal Design</h4>
                  <p className="text-rose-400/70">Consistent, playful experience across all devices</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Details Footer */}
        <section className="px-6 py-24 border-t border-rose-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-rose-500 text-sm uppercase tracking-wider mb-3 font-light">Role</h3>
                <p className="text-rose-200 text-lg">UI/UX Design</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-rose-500 text-sm uppercase tracking-wider mb-3 font-light">Type</h3>
                <p className="text-rose-200 text-lg">Personal Project</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-rose-500 text-sm uppercase tracking-wider mb-3 font-light">Reach</h3>
                <p className="text-rose-200 text-lg">160K+ Views</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-rose-500 text-sm uppercase tracking-wider mb-3 font-light">Platform</h3>
                <p className="text-rose-200 text-lg">Web App</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}