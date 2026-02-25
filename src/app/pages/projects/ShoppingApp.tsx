import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Smartphone, Eye, ShoppingBag, Layout, Sparkles, Zap, Heart, X } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import heroImage from 'figma:asset/a2c941f831332e58a6a067f30af9a4b3e7b97d5a.png';
import screensImage from 'figma:asset/0eaea41ffefb573f203974a5a6e013903e53b3e8.png';

interface ShoppingAppProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export default function ShoppingApp({ isMenuOpen, onToggleMenu }: ShoppingAppProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const projectDetails = {
    client: 'Personal Project',
    role: 'UI/UX Designer',
    tools: 'Figma',
    category: ['UI/UX Design', 'Mobile Design', 'E-commerce']
  };

  const designPrinciples = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Visual Hierarchy',
      description: 'Immersive visual blocks that guide the user\'s eye naturally, reducing decision friction.',
      color: 'from-pink-500/20 to-rose-500/20',
      iconColor: 'text-pink-400'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Fluid Navigation',
      description: 'Light and engaging scrolling that transforms exploration into a spontaneous experience.',
      color: 'from-purple-500/20 to-fuchsia-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Micro-Narrative',
      description: 'Every element builds a visual story made of discovery, desire, and immediacy.',
      color: 'from-orange-500/20 to-amber-500/20',
      iconColor: 'text-orange-400'
    }
  ];

  const keyFeatures = [
    {
      title: 'Persistent Search',
      description: 'Always accessible search for goal-oriented behavior without interrupting browsing flow',
      icon: '🔍'
    },
    {
      title: 'Visual Touchpoints',
      description: 'Large visual elements for quick scanning and reduced cognitive load',
      icon: '👁️'
    },
    {
      title: 'Bottom Navigation',
      description: 'Immediate access to core areas while maintaining exploration continuity',
      icon: '📱'
    },
    {
      title: 'Promotional Banners',
      description: 'Introducing context and urgency through immersive editorial banners',
      icon: '🎯'
    },
    {
      title: 'Product Clusters',
      description: 'Curated groupings that encourage discovery and impulse purchasing',
      icon: '✨'
    },
    {
      title: 'Consistent Spacing',
      description: 'Visual rhythm that reinforces readability across varying content densities',
      icon: '📐'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 text-white hover:text-zinc-400 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              src={lightboxImage}
              alt="Lightbox"
              className="max-w-full max-h-[90vh] object-contain"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-orange-500/10" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(236, 72, 153, 0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Back Button */}
          <Link to="/">
            <motion.button
              className="flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors group"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </motion.button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full mb-6 border border-pink-500/30">
                <Smartphone className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-medium text-pink-300">Mobile UI/UX Design</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Shopping App
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-zinc-300 mb-8 leading-relaxed">
                When <span className="text-white font-semibold">Shopping</span> becomes <br />
                a <span className="text-pink-400 font-semibold">Visual Experience</span>
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                The design of the shopping app was born from the desire to transform <span className="text-white font-semibold">commercial exploration</span> into 
                a visual experience that is <span className="text-pink-400 font-semibold">fluid</span>, <span className="text-purple-400 font-semibold">intuitive</span>, 
                and delightful, capable of balancing <span className="text-orange-400 font-semibold">impulse</span> and <span className="text-white font-semibold">guidance</span>.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {projectDetails.category.map((cat, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-zinc-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right: Hero Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group cursor-pointer flex justify-center"
              onClick={() => setLightboxImage(heroImage)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-orange-500/30 rounded-full blur-[100px] group-hover:blur-[120px] transition-all duration-700 animate-pulse" />
              <img
                src={heroImage}
                alt="Shopping App - Mobile Mockup"
                className="relative w-full max-w-md h-auto transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Vision */}
      <section className="px-6 py-16 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Design Vision
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Built entirely in <span className="text-white font-semibold">Figma</span>, the interface was designed as 
              a <span className="text-pink-400 font-semibold">dynamic space</span> where editorial content, promotions, and 
              personalized suggestions coexist in a <span className="text-purple-400 font-semibold">clear hierarchy</span> that is 
              immediately readable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {designPrinciples.map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group"
              >
                <div 
                  className={`p-8 bg-gradient-to-br ${principle.color} border border-white/10 hover:border-white/20 transition-all duration-300 h-full`}
                  style={{ borderRadius: '32px' }}
                >
                  <div className={`${principle.iconColor} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {principle.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {principle.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <p className="text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              The homepage unfolds as a <span className="text-pink-400 font-bold">rhythmic sequence</span> of immersive visual blocks, 
              where images, color, and typography guide the user's eye naturally.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interface Showcase - All Screens */}
      <section className="px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-purple-950/10 to-zinc-950" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4 text-white">
              <Layout className="w-12 h-12 text-purple-400" />
              Interface Flow
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              From <span className="text-white font-semibold">exploration</span> to <span className="text-pink-400 font-semibold">discovery</span>, 
              every screen is designed to reduce friction and encourage <span className="text-purple-400 font-semibold">spontaneous navigation</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer"
            onClick={() => setLightboxImage(screensImage)}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-3xl group-hover:blur-[80px] transition-all duration-700" />
            <div className="relative bg-zinc-900 border border-zinc-800 group-hover:border-purple-500/50 transition-all duration-300 overflow-hidden" style={{ borderRadius: '32px' }}>
              <img
                src={screensImage}
                alt="Shopping App - All Screens"
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl font-bold">
                  Explore All Screens
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="px-6 py-16 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Key Features
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              The design balances <span className="text-white font-semibold">promotional content</span>, 
              personalized suggestions, and <span className="text-pink-400 font-semibold">navigation clarity</span> without 
              overwhelming the user.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group"
              >
                <div 
                  className="p-6 bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 h-full"
                  style={{ borderRadius: '24px' }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Challenge */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 bg-gradient-to-br from-pink-500/10 via-purple-500/5 to-orange-500/10 border border-pink-500/20"
            style={{ borderRadius: '32px' }}
          >
            <ShoppingBag className="w-12 h-12 text-pink-400 mb-6" />
            <h3 className="text-3xl font-bold mb-6 text-white">
              The Experience
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              The result is a <span className="text-white font-semibold">digital environment</span> that doesn't just present products, 
              but builds a <span className="text-pink-400 font-semibold">visual micro-narrative</span> made of discovery, 
              desire, and immediacy.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Familiar elements — such as <span className="text-purple-400 font-semibold">persistent search</span> and 
              <span className="text-orange-400 font-semibold"> bottom navigation</span> — intertwine with a more 
              expressive composition, creating a balance between <span className="text-white font-semibold">functional efficiency</span> and 
              visual identity.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              The primary challenge was <span className="text-white font-semibold">balancing promotional content</span>, 
              personalized suggestions, and navigation clarity without <span className="text-pink-400 font-semibold">overwhelming the user</span>. 
              Special attention was given to <span className="text-purple-400 font-semibold">visual hierarchy</span> and 
              interaction pacing: promotional banners introduce context and urgency, curated product clusters encourage discovery, 
              and <span className="text-white font-semibold">consistent spacing</span> reinforces readability across content densities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-6 py-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Project Details
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30"
            style={{ borderRadius: '32px' }}
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <span className="text-zinc-500 text-sm uppercase tracking-wide">Client</span>
                <p className="text-xl text-white font-semibold mt-2">{projectDetails.client}</p>
              </div>
              <div>
                <span className="text-zinc-500 text-sm uppercase tracking-wide">Role</span>
                <p className="text-xl text-white font-semibold mt-2">{projectDetails.role}</p>
              </div>
              <div>
                <span className="text-zinc-500 text-sm uppercase tracking-wide">Tools</span>
                <p className="text-xl text-pink-400 font-bold mt-2">{projectDetails.tools}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative overflow-hidden bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 p-12 md:p-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ borderRadius: '48px' }}
          >
            <div className="absolute inset-0 opacity-20">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '32px 32px'
                }}
              />
            </div>

            <div className="relative z-10">
              <Heart className="w-16 h-16 text-white mx-auto mb-8 animate-pulse" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                "Transforming the act of scrolling <br />
                into a light and engaging experience."
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Prototyped entirely in <span className="font-bold">Figma</span>, exploring how <span className="font-bold">editorial composition</span> and 
                familiar mobile patterns can coexist to support both <span className="font-bold">impulse-driven browsing</span> and intentional product search.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}