import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, MapPin, TrendingUp, Video, Instagram, Image, Zap, Target, BarChart3, X } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import heroImage from 'figma:asset/cfb5497bac6786fb81fa0a5b8bf66b81fce7122c.png';
import instaMockupImage from 'figma:asset/e86b406fb79527351fcd1eba808909d59a9e4740.png';
import carouselPrintImage from 'figma:asset/ad6bedb5c0f10bcf03eb6b2b106af575d38726d2.png';

interface SeiVersiliaProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export default function SeiVersilia({ isMenuOpen, onToggleMenu }: SeiVersiliaProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const projectDetails = {
    client: 'SEI Versilia - Associazione Culturale',
    role: 'Social Media Manager & Content Strategist',
    year: '2022 - Ongoing',
    category: ['Graphic Design', 'Social Media', 'Marketing Territoriale'],
    deliverables: [
      'Strategia Social Media',
      'Content Creation (Photo & Video)',
      'TikTok Channel Launch',
      'Reels & Caroselli Informativi',
      'SEO-oriented Web Portal Support'
    ]
  };

  const performanceMetrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: '+700%',
      label: 'Reach Organica',
      color: '#10B981'
    },
    {
      icon: <Video className="w-8 h-8" />,
      value: '1M+',
      label: 'Video Views',
      color: '#3B82F6'
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      value: '50K+',
      label: 'Engagement Rate',
      color: '#EC4899'
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: 'Gen Z',
      label: 'Target Raggiunto',
      color: '#F59E0B'
    }
  ];

  const strategicPillars = [
    {
      icon: <Image className="w-10 h-10" />,
      title: 'Libertà Compositiva',
      description: 'Transizione da layout a griglia rigido a una composizione flessibile basata sulla singola fotografia. Ogni post diventa un micro-racconto visivo autonomo.',
      gradient: 'from-cyan-500/20 to-blue-500/20',
      iconColor: 'text-cyan-400'
    },
    {
      icon: <Video className="w-10 h-10" />,
      title: 'Video-First Strategy',
      description: 'Lancio TikTok e pivot su Reels/caroselli informativi. Contenuti brevi e di qualità premiati dall\'algoritmo con copertura organica eccezionale.',
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-400'
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Reattività & Velocità',
      description: 'Essere sul pezzo, sempre. La flessibilità del nuovo approccio permette copertura rapida degli eventi territoriali senza sacrificare la qualità.',
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconColor: 'text-amber-400'
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
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
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

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-6 border border-cyan-500/30">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-cyan-300">Marketing Territoriale</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  SEI Versilia
                </span>
              </h1>

              <p className="text-2xl md:text-3xl text-zinc-300 mb-8 leading-relaxed">
                Digitalizzare la Bellezza: <br />
                Quando il Territorio Diventa <span className="text-white font-semibold">Virale</span>
              </p>

              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                Un progetto di marketing territoriale a 360 gradi che unisce un <span className="text-white font-semibold">portale web SEO-oriented</span> all'attività 
                sul campo di un'<span className="text-cyan-400 font-semibold">Associazione Culturale</span>. L'obiettivo? Trasformare la promozione locale in 
                un'esperienza digitale coinvolgente per le <span className="text-purple-400 font-semibold">nuove generazioni</span>.
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

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group cursor-pointer"
              onClick={() => setLightboxImage(heroImage)}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src={heroImage}
                alt="SEI Versilia - Marketing Territoriale"
                className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Metrics - BIG IMPACT */}
      <section className="px-6 py-16 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <BarChart3 className="w-12 h-12 inline-block mb-2 text-cyan-400" />
              <br />
              Performance Straordinaria
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Quando la <span className="text-white font-semibold">qualità dei contenuti</span> incontra 
              la <span className="text-cyan-400 font-semibold">strategia video-first</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                <div 
                  className="p-8 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 h-full"
                  style={{ borderRadius: '24px' }}
                >
                  <div 
                    className="mb-4 transform group-hover:scale-110 transition-transform duration-300"
                    style={{ color: metric.color }}
                  >
                    {metric.icon}
                  </div>
                  <div 
                    className="text-4xl font-bold mb-2"
                    style={{ color: metric.color }}
                  >
                    {metric.value}
                  </div>
                  <div className="text-zinc-400 text-sm">
                    {metric.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
              L'algoritmo ha premiato la qualità dei contenuti brevi con una <span className="text-cyan-400 font-bold">copertura organica eccezionale</span>, 
              dimostrando che anche la promozione istituzionale/territoriale, se ben fatta, sa <span className="text-white font-bold">coinvolgere le nuove generazioni</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Scelte di Design e Flessibilità
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              La sfida era mantenere alta la <span className="text-white font-semibold">qualità visiva</span> senza sacrificare 
              la <span className="text-cyan-400 font-semibold">quantità necessaria</span> per coprire gli eventi del territorio.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategicPillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group"
              >
                <div 
                  className={`p-8 bg-gradient-to-br ${pillar.gradient} border border-white/10 hover:border-white/20 transition-all duration-300 h-full`}
                  style={{ borderRadius: '32px' }}
                >
                  <div className={`${pillar.iconColor} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Mockup Showcase */}
      <section className="px-6 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-blue-950/20 to-zinc-950" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4 text-white">
              <Instagram className="w-12 h-12 text-pink-500" />
              Feed Instagram: Micro-Racconti Visivi
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Ogni post trattato come un <span className="text-white font-semibold">racconto autonomo</span>. 
              Dal rigore della griglia alla <span className="text-cyan-400 font-semibold">libertà compositiva</span> basata sulla singola immagine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group cursor-pointer max-w-4xl mx-auto"
            onClick={() => setLightboxImage(instaMockupImage)}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl group-hover:blur-[80px] transition-all duration-700" />
            <img
              src={instaMockupImage}
              alt="SEI Versilia Instagram Feed"
              className="relative w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700 rounded-2xl"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl font-bold">
                Visualizza Feed Completo
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 text-center max-w-2xl mx-auto"
          >
            <p className="text-lg text-zinc-400 leading-relaxed">
              La <span className="text-white font-semibold">fotografia</span> diventa protagonista assoluta: 
              paesaggi mozzafiato, eventi culturali, tradizioni locali. Ogni immagine racconta la Versilia 
              con <span className="text-cyan-400 font-semibold">autenticità e bellezza</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Strategy Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Performance e Innovazione
            </h2>
            <p className="text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed mb-6">
              Il vero <span className="text-cyan-400 font-bold">cambio di passo</span> è avvenuto con la strategia video.
            </p>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Ho introdotto il canale <span className="text-white font-semibold">TikTok</span> nel mix comunicativo e riorientato 
              la produzione verso i <span className="text-purple-400 font-semibold">Reels</span> e 
              i <span className="text-pink-400 font-semibold">caroselli informativi</span>.
            </p>
          </motion.div>

          {/* Physical Material Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div 
              className="relative overflow-hidden shadow-2xl border-4 border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
              style={{ borderRadius: '32px' }}
              onClick={() => setLightboxImage(carouselPrintImage)}
            >
              <img 
                src={carouselPrintImage}
                alt="SEI Versilia - Carosello e Materiale Fisico"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-2xl font-bold">
                  Visualizza Carosello Completo
                </span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-center"
            >
              <p className="text-lg text-zinc-400">
                Integrazione <span className="text-white font-semibold">online-offline</span>: 
                dai caroselli Instagram al materiale fisico distribuito sul territorio
              </p>
            </motion.div>
          </motion.div>

          {/* Results Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden"
          >
            <div 
              className="p-12 md:p-16 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 border-4 border-zinc-800"
              style={{ borderRadius: '48px' }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <TrendingUp className="w-12 h-12 text-cyan-400" />
                  <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full" />
                  <Video className="w-12 h-12 text-purple-400" />
                </div>

                <blockquote className="text-2xl md:text-3xl text-center text-zinc-200 leading-relaxed mb-8">
                  "I dati hanno confermato la visione: l'algoritmo ha premiato la <span className="text-cyan-400 font-bold">qualità dei contenuti brevi</span> con 
                  una <span className="text-white font-bold">copertura organica eccezionale (+700% di reach)</span>, dimostrando che anche 
                  la promozione istituzionale/territoriale, se ben fatta, sa coinvolgere le <span className="text-purple-400 font-bold">nuove generazioni</span>."
                </blockquote>

                <div className="grid md:grid-cols-3 gap-6 text-lg">
                  <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-2xl">
                    <span className="text-3xl">🎬</span>
                    <div>
                      <h4 className="font-bold text-cyan-400 mb-2">TikTok Launch</h4>
                      <p className="text-zinc-400 text-base">Nuovo canale per raggiungere Gen Z con contenuti nativi</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-2xl">
                    <span className="text-3xl">📊</span>
                    <div>
                      <h4 className="font-bold text-purple-400 mb-2">Reels Priority</h4>
                      <p className="text-zinc-400 text-base">Contenuti brevi ottimizzati per algoritmo Instagram</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-2xl">
                    <span className="text-3xl">📈</span>
                    <div>
                      <h4 className="font-bold text-pink-400 mb-2">Organic Growth</h4>
                      <p className="text-zinc-400 text-base">Zero budget ads, 100% crescita organica</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
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
              Dettagli del Progetto
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Project Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/30"
              style={{ borderRadius: '32px' }}
            >
              <MapPin className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-3xl font-bold mb-6 text-white">SEI Versilia</h3>
              <div className="space-y-4 text-zinc-300">
                <div>
                  <span className="text-zinc-500 text-sm uppercase tracking-wide">Cliente</span>
                  <p className="text-lg text-white font-semibold">{projectDetails.client}</p>
                </div>
                <div>
                  <span className="text-zinc-500 text-sm uppercase tracking-wide">Ruolo</span>
                  <p className="text-lg text-white font-semibold">{projectDetails.role}</p>
                </div>
                <div>
                  <span className="text-zinc-500 text-sm uppercase tracking-wide">Anno</span>
                  <p className="text-lg text-cyan-400 font-bold">{projectDetails.year}</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Deliverables */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-zinc-900 border border-zinc-800"
              style={{ borderRadius: '32px' }}
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Deliverables</h3>
              <ul className="space-y-3">
                {projectDetails.deliverables.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-3 text-zinc-300"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Impact Quote */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-12 md:p-16 text-center"
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                "Quando il territorio diventa contenuto, <br />
                e il contenuto diventa esperienza."
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                SEI Versilia ha dimostrato che la <span className="font-bold">promozione territoriale</span> può essere 
                digitale, <span className="font-bold">virale</span> e <span className="font-bold">autenticamente generazionale</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}