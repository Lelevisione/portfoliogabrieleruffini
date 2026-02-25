import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MetaTags } from '../components/MetaTags';
import { 
  Code, 
  Palette, 
  Sparkles, 
  Heart, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Linkedin,
  Github,
  Instagram,
  FileText,
  Globe,
  Lightbulb,
  Users,
  Zap,
  Coffee,
  Camera,
  Book,
  Music,
  Mountain
} from 'lucide-react';

// Import profile image
import profileImage from 'figma:asset/cb25b4c361f4e392cdebd69231f7f01a020db1e7.png';

interface AboutProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

const experiences = [
  {
    year: '2020 - Present',
    title: 'Digital Creative - Freelance',
    description: 'Offering digital creation services, social media management, and graphic projects for professionals across molecular health, tourism, wellness and restoration sectors',
    color: 'from-blue-500 to-cyan-500',
    icon: Sparkles
  },
  {
    year: '2024 - Present',
    title: 'Nausicaa - Museums of Carrara',
    description: 'Dual role combining visitor reception at the museum with social media management and content creation',
    color: 'from-purple-500 to-pink-500',
    icon: Users
  },
  {
    year: '2022 - 2023',
    title: 'Social Media Manager - STOPS.it',
    description: 'Strategic PED planning and content realization. Crafted newsletters, flyers, and posters aligned with brand identity',
    color: 'from-green-500 to-teal-500',
    icon: Zap
  },
  {
    year: '2021 - 2022',
    title: 'Universal Civil Service',
    description: 'Childhood-focused project: realized creative workshops, contributed to various public awareness publications',
    color: 'from-orange-500 to-red-500',
    icon: Heart
  }
];

const education = [
  {
    year: '2025 - In Progress',
    title: "Master's Degree in Digital Humanities",
    subtitle: 'University of Pisa',
    description: 'Specializing in Graphics, Interactivity, and Virtual Environments. Building a bridge between linguistic narrative structures and interface/content design',
    color: 'from-violet-500 to-purple-500'
  },
  {
    year: '2024',
    title: 'Bachelor in Cultural Heritage Sciences',
    subtitle: 'University of Pisa',
    description: 'Solid historical-artistic foundation with strong visual language and graphic-communicative analysis',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    year: '2024',
    title: 'NSW Government - Marketing & Communication',
    subtitle: 'Virtual Internship @ Forage',
    description: 'Strategic communication and digital marketing',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    year: '2024',
    title: 'BCG - Strategic & Experience Design',
    subtitle: 'Virtual Internship @ Forage',
    description: 'Web communication and digital marketing',
    color: 'from-teal-500 to-green-500'
  }
];

const toolbox = [
  { category: 'Design', tools: ['Photoshop', 'Illustrator', 'InDesign', 'Lightroom', 'Figma'], color: 'from-pink-500 to-rose-500' },
  { category: 'Motion', tools: ['CapCut', 'Edits', 'DaVinci Resolve'], color: 'from-purple-500 to-violet-500' },
  { category: 'Code', tools: ['HTML/CSS', 'JavaScript', 'Python'], color: 'from-blue-500 to-cyan-500' },
  { category: 'Office', tools: ['Word', 'Excel', 'PowerPoint', 'Keynote'], color: 'from-green-500 to-emerald-500' }
];

const passions = [
  { icon: '🎨', label: 'Design', description: 'Visual storytelling' },
  { icon: '🎬', label: 'Cinema', description: 'Narrative analysis' },
  { icon: '📚', label: 'Reading', description: 'Cultural exploration' },
  { icon: '🎵', label: 'Music', description: 'Sonic experiences' },
  { icon: '📸', label: 'Photography', description: 'Capturing moments' },
  { icon: '⛰️', label: 'Nature', description: 'Outdoor adventures' },
  { icon: '☕', label: 'Coffee', description: 'Ritual lover' },
  { icon: '🌍', label: 'Travel', description: 'World explorer' }
];

// Floating emoji particle
const FloatingEmoji = ({ emoji, delay = 0 }: { emoji: string; delay?: number }) => {
  return (
    <motion.div
      className="absolute text-4xl opacity-20"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [-30, 30],
        rotate: [-15, 15],
        scale: [0.8, 1.2, 0.8]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      {emoji}
    </motion.div>
  );
};

export function About({ isMenuOpen, onToggleMenu }: AboutProps) {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <MetaTags
        title="About Gabriele Ruffini - Digital Creative & Storyteller"
        description="Weaving the thread between culture and code. Discover my journey as a digital creative passionate about design, interactivity, and virtual environments."
      />
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={onToggleMenu}
      />

      {/* Playful Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        
        {/* Floating emojis */}
        <FloatingEmoji emoji="🎨" delay={0} />
        <FloatingEmoji emoji="💻" delay={1} />
        <FloatingEmoji emoji="✨" delay={2} />
        <FloatingEmoji emoji="🚀" delay={3} />
        <FloatingEmoji emoji="🎭" delay={4} />
        <FloatingEmoji emoji="🌟" delay={5} />
        <FloatingEmoji emoji="📱" delay={6} />
        <FloatingEmoji emoji="🎬" delay={7} />

        {/* Colorful glows */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.1, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 6 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section with Photo */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
                  <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 text-sm tracking-wider uppercase rounded-full border border-blue-500/30">
                    Visual Storyteller & Digital Content Creator
                  </span>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Gabriele Ruffini
                  </span>
                </motion.h1>

                <motion.p
                  className="text-2xl text-zinc-400 mb-8 font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Weaving threads between <span className="text-white font-medium">culture</span> and <span className="text-white font-medium">code</span>
                </motion.p>

                {/* Quick Info */}
                <motion.div
                  className="space-y-3 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <div className="flex items-center gap-3 text-zinc-300">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>Based in Pisa, Italy</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <a href="mailto:gabrieleruffini@icloud.com" className="hover:text-white transition-colors">
                      gabrieleruffini@icloud.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-300">
                    <Globe className="w-5 h-5 text-pink-400" />
                    <span>English B2 • Italian Native</span>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <a
                    href="https://www.linkedin.com/in/gabrieleruffini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-blue-500/20 hover:border-blue-400/40 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" />
                  </a>
                  <a
                    href="https://instagram.com/elevisione"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-pink-500/20 hover:border-pink-400/40 transition-all group"
                  >
                    <Instagram className="w-5 h-5 text-white group-hover:text-pink-400 transition-colors" />
                  </a>
                  <a
                    href="mailto:gabrieleruffini@icloud.com"
                    className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-green-500/20 hover:border-green-400/40 transition-all group"
                  >
                    <Mail className="w-5 h-5 text-white group-hover:text-green-400 transition-colors" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
                  <img 
                    src={profileImage}
                    alt="Gabriele Ruffini in autumn forest"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating stats */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-6 border border-white/20 shadow-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="text-3xl font-bold text-white mb-1">4+</div>
                  <div className="text-sm text-white/80">Years of<br/>Experience</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 px-6 relative">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Lightbulb className="w-8 h-8 text-yellow-400" />
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    My Philosophy
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                  <p>
                    I believe design isn't simply the art of arranging elements in space—it's the ability to <span className="text-white font-semibold">weave invisible relationships</span> between people and the concepts surrounding them. My journey is a constant dialogue between past and future: my roots are planted in <span className="text-blue-300 font-medium">Design History</span> and <span className="text-purple-300 font-medium">Digital Humanities</span>, disciplines that taught me to read the depth of cultural context, but my gaze is set toward new frontiers of <span className="text-pink-300 font-medium">Interactivity</span> and <span className="text-cyan-300 font-medium">Virtual Reality</span>.
                  </p>

                  <p>
                    I navigate that <span className="text-white font-semibold">fertile intersection</span> where visual identity meets digital storytelling. Whether defining a brand's face, curating a cultural communication strategy, designing an immersive virtual environment, or crafting an interface, my approach is always <span className="text-white font-semibold">holistic</span>: I blend strategy, aesthetics, and storytelling to transform simple pixels into <span className="text-white font-semibold">meaningful experiences</span>.
                  </p>

                  <p>
                    I'm a digital creative driven by <span className="text-yellow-300 font-medium">insatiable curiosity</span> and a calling for <span className="text-green-300 font-medium">experimentation</span>. For me, technology is an <span className="text-white font-semibold">empathetic tool</span>: my ultimate goal is to build digital bridges that don't just connect users to interfaces, but manage to <span className="text-white font-semibold">strike an emotional chord</span>, making culture accessible, alive, and surprisingly human.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-blue-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Experience
                </h2>
              </div>
              <p className="text-xl text-zinc-400">My professional journey through digital creativity</p>
            </motion.div>

            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative"
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${exp.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all">
                      <div className="flex items-start gap-6">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="text-sm text-zinc-500 mb-2">{exp.year}</div>
                          <h3 className="text-2xl font-bold text-white mb-3">{exp.title}</h3>
                          <p className="text-zinc-400 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-purple-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Education
                </h2>
              </div>
              <p className="text-xl text-zinc-400">Building bridges between humanities and technology</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-br ${edu.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all h-full">
                    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${edu.color} rounded-full text-xs font-semibold text-white mb-4`}>
                      {edu.year}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{edu.title}</h3>
                    <p className="text-sm text-zinc-400 mb-3 font-medium">{edu.subtitle}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                This <span className="text-white font-semibold">hybrid background</span> allows me to approach design not just as aesthetics, but as a tool for <span className="text-purple-300 font-medium">historical and cultural communication</span>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Toolbox */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Code className="w-8 h-8 text-cyan-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Toolbox
                </h2>
              </div>
              <p className="text-xl text-zinc-400">My workflow spans from Adobe Suite to code</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolbox.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-1 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all h-full">
                    <h3 className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.tools.map((tool) => (
                        <div key={tool} className="text-sm text-zinc-400 flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                This allows me to <span className="text-white font-semibold">dialogue with both creative and development teams</span>, bridging the gap between design and implementation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Passions & Interests */}
        <section className="py-20 px-6 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-pink-400" />
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Beyond Work
                </h2>
              </div>
              <p className="text-xl text-zinc-400">What fuels my creativity and keeps me inspired</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all text-center hover:scale-105 transform duration-300">
                    <motion.div
                      className="text-5xl mb-3"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {passion.icon}
                    </motion.div>
                    <h3 className="text-lg font-bold text-white mb-1">{passion.label}</h3>
                    <p className="text-xs text-zinc-500">{passion.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -inset-12 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
              
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-12 md:p-16 border border-white/20 text-center">
                <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Let's Create Something Amazing
                </h2>

                <p className="text-xl text-zinc-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                  I'm always open to new collaborations, exciting projects, and meaningful conversations. Whether you need a creative partner or just want to chat about design—let's connect!
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get In Touch</span>
                  </a>
                  
                  <a
                    href="https://www.linkedin.com/in/gabrieleruffini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn Profile</span>
                  </a>
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