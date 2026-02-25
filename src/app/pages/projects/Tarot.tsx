import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowLeft,
  Sparkles,
  Moon,
  Star,
  Eye,
  ExternalLink,
} from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useEffect, useState } from "react";
import heroImage from "figma:asset/9017c886a5df96505eaf0dfb2a8a358cf7d2ccb4.png";
import readingImage from "figma:asset/6fb1ce4328d9cc95429d222f8aeaf397d2f08476.png";
import mobileImage from "figma:asset/a50cec5a378f29da1d6a54bffff35593ff03fd7d.png";

const mysticalFeatures = [
  {
    icon: "🔮",
    title: "Past, Present, Future",
    description:
      "Unveil the threads of time woven through your life journey",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    icon: "✨",
    title: "Single Card Extraction",
    description:
      "Receive direct cosmic guidance for your immediate question",
    gradient: "from-indigo-600 to-blue-600",
  },
  {
    icon: "💜",
    title: "Relationship Reading",
    description:
      "Explore the energies between Me, Us, and Them",
    gradient: "from-violet-600 to-purple-600",
  },
];

const tarotCards = [
  {
    name: "The Fool",
    number: "0",
    keywords: "New beginnings, innocence, spontaneity",
  },
  {
    name: "The Magician",
    number: "I",
    keywords: "Manifestation, resourcefulness, power",
  },
  {
    name: "The High Priestess",
    number: "II",
    keywords: "Intuition, sacred knowledge, divine feminine",
  },
  {
    name: "The Empress",
    number: "III",
    keywords: "Femininity, beauty, nature, abundance",
  },
  {
    name: "The Emperor",
    number: "IV",
    keywords:
      "Authority, establishment, structure, father figure",
  },
  {
    name: "The Lovers",
    number: "VI",
    keywords: "Love, harmony, relationships, values alignment",
  },
  {
    name: "The Chariot",
    number: "VII",
    keywords: "Control, willpower, success, determination",
  },
  {
    name: "Strength",
    number: "VIII",
    keywords: "Strength, courage, persuasion, influence",
  },
  {
    name: "The Hermit",
    number: "IX",
    keywords: "Soul searching, introspection, inner guidance",
  },
  {
    name: "Wheel of Fortune",
    number: "X",
    keywords: "Good luck, karma, life cycles, destiny",
  },
  {
    name: "The Devil",
    number: "XV",
    keywords: "Shadow self, attachment, addiction, restriction",
  },
  {
    name: "The Star",
    number: "XVII",
    keywords: "Hope, faith, purpose, renewal, spirituality",
  },
  {
    name: "The Moon",
    number: "XVIII",
    keywords:
      "Illusion, fear, anxiety, subconscious, intuition",
  },
  {
    name: "The Sun",
    number: "XIX",
    keywords: "Positivity, fun, warmth, success, vitality",
  },
  {
    name: "Judgement",
    number: "XX",
    keywords: "Judgement, rebirth, inner calling, absolution",
  },
];

// Floating particle component
const FloatingParticle = ({
  delay = 0,
  duration = 20,
  size = 2,
}: {
  delay?: number;
  duration?: number;
  size?: number;
}) => {
  const randomX = Math.random() * 100;
  const randomY = Math.random() * 100;

  return (
    <motion.div
      className="absolute rounded-full bg-white"
      style={{
        width: size,
        height: size,
        left: `${randomX}%`,
        top: `${randomY}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
};

interface TarotProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function Tarot({
  isMenuOpen,
  onToggleMenu,
}: TarotProps) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1, 0.8],
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={onToggleMenu}
      />

      {/* Cosmic Background with animated stars */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950 to-black" />

        {/* Animated particles */}
        {[...Array(50)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.3}
            duration={15 + Math.random() * 10}
            size={1 + Math.random() * 3}
          />
        ))}

        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ opacity, scale }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[800px] h-[800px] border border-purple-500/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 80,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[600px] h-[600px] border border-indigo-500/10 rounded-full"
            />
          </motion.div>

          <div className="max-w-7xl mx-auto relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              {/* Mystical icons */}
              <motion.div
                className="flex items-center justify-center gap-6 mb-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Moon className="w-8 h-8 text-purple-400" />
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Eye className="w-12 h-12 text-indigo-400" />
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Star className="w-8 h-8 text-violet-400" />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <span className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm text-purple-300 text-sm tracking-[0.3em] uppercase rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/20">
                  UI/UX Design · Web App · Mystical Experience
                </span>
              </motion.div>

              <motion.h1
                className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                  COSMIC
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-400 bg-clip-text text-transparent drop-shadow-2xl">
                  INSIGHTS
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Unveil the mysteries of the universe through{" "}
                <span className="text-white font-semibold">
                  digital tarot divination
                </span>
              </motion.p>

              <motion.p
                className="text-base text-purple-300/70 italic mb-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Where ancient wisdom meets modern technology
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <a
                  href="https://nix-thumb-90231924.figma.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/70 hover:scale-105"
                >
                  <Sparkles className="w-6 h-6" />
                  Experience the Magic
                  <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-purple-400 rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Main App Showcase */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl" />

              <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-purple-950/50 to-indigo-950/50 backdrop-blur-sm p-4 md:p-8">
                <img
                  src={heroImage}
                  alt="Cosmic Insights - Main Interface"
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-indigo-600/20 pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mystical Features */}
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
                <Star className="w-6 h-6 text-purple-400" />
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Three Paths to Enlightenment
                  </span>
                </h2>
                <Star className="w-6 h-6 text-indigo-400" />
              </div>
              <p className="text-lg text-purple-200/70 max-w-2xl mx-auto">
                Choose your divination method and let the cosmos
                guide your path
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mysticalFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.2,
                  }}
                  className="group relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-indigo-600/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div
                    className={`relative rounded-3xl p-8 border border-purple-500/20 bg-gradient-to-br ${feature.gradient} bg-opacity-10 backdrop-blur-sm hover:scale-105 transition-all duration-300 h-full`}
                  >
                    <div className="text-6xl mb-6 filter drop-shadow-lg">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-purple-200/80 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-purple-400/30 rounded-tr-2xl" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-indigo-400/30 rounded-bl-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reading Showcase */}
        <section className="px-6 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 shadow-2xl shadow-purple-500/20 bg-gradient-to-br from-purple-950/50 to-indigo-950/50 backdrop-blur-sm p-4 md:p-6">
                  <img
                    src={readingImage}
                    alt="Relationship Reading"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>

                <motion.div
                  className="absolute -top-8 -right-8 text-6xl filter drop-shadow-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  🌙
                </motion.div>
                <motion.div
                  className="absolute -bottom-8 -left-8 text-6xl filter drop-shadow-2xl"
                  animate={{ rotate: [0, -360] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  ✨
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-1 lg:order-2"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-8 h-8 text-purple-400" />
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    Profound Readings
                  </h2>
                </div>

                <p className="text-xl text-purple-200/90 leading-relaxed mb-6">
                  Explore the intricate web of energies that
                  connect past, present, and future. Each card
                  drawn carries{" "}
                  <span className="text-white font-semibold">
                    cosmic significance
                  </span>{" "}
                  tailored to your unique journey.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-600/10 border border-purple-500/20">
                    <div className="text-3xl">🔮</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Personalized Insights
                      </h4>
                      <p className="text-purple-200/70">
                        Each reading is uniquely interpreted
                        based on your question and current life
                        path
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-600/10 border border-indigo-500/20">
                    <div className="text-3xl">⭐</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Intuitive Interface
                      </h4>
                      <p className="text-purple-200/70">
                        Seamlessly navigate through the mystical
                        experience with our elegant design
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-violet-600/10 border border-violet-500/20">
                    <div className="text-3xl">🌟</div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">
                        Daily Guidance
                      </h4>
                      <p className="text-purple-200/70">
                        Return each day for fresh cosmic wisdom
                        and spiritual direction
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mobile Experience */}
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
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Mysticism in Your Pocket
                </span>
              </h2>
              <p className="text-lg text-purple-200/70 max-w-2xl mx-auto">
                Carry the wisdom of the cosmos wherever you go
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative max-w-sm">
                <div className="absolute inset-0 bg-purple-600/30 blur-3xl" />

                <div className="relative rounded-3xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/30">
                  <img
                    src={mobileImage}
                    alt="Cosmic Insights - Mobile Experience"
                    className="w-full h-auto"
                  />
                </div>

                <motion.div
                  className="absolute -top-12 -left-12 text-5xl filter drop-shadow-2xl"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🌙
                </motion.div>
                <motion.div
                  className="absolute -top-12 -right-12 text-5xl filter drop-shadow-2xl"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ⭐
                </motion.div>
                <motion.div
                  className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-5xl filter drop-shadow-2xl"
                  animate={{ y: [0, 15, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  ✨
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tarot Cards Showcase */}
        <section className="px-6 py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  The Arcana Awaits
                </span>
              </h2>
              <p className="text-lg text-purple-200/70 max-w-2xl mx-auto">
                22 Major Arcana cards, each holding profound
                wisdom and guidance
              </p>
            </motion.div>

            <div className="relative h-64 overflow-hidden">
              <motion.div
                className="flex gap-6 absolute"
                animate={{ x: [0, -2000] }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...tarotCards, ...tarotCards].map(
                  (card, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-40 h-64 rounded-2xl bg-gradient-to-br from-purple-950/80 to-indigo-950/80 border border-purple-500/30 p-6 flex flex-col items-center justify-center text-center backdrop-blur-sm shadow-xl"
                    >
                      <div className="text-4xl font-bold text-purple-300 mb-3">
                        {card.number}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {card.name}
                      </h3>
                      <p className="text-xs text-purple-200/60">
                        {card.keywords}
                      </p>
                    </div>
                  ),
                )}
              </motion.div>

              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-6 py-32 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-20 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-violet-600/20 blur-3xl" />

              <div className="relative rounded-3xl p-12 md:p-16 border-2 border-purple-500/30 bg-gradient-to-br from-purple-950/50 via-indigo-950/50 to-violet-950/50 backdrop-blur-xl shadow-2xl text-center overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                  <div className="absolute top-10 left-10">
                    <Star className="w-16 h-16 text-purple-400" />
                  </div>
                  <div className="absolute bottom-10 right-10">
                    <Moon className="w-20 h-20 text-indigo-400" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Eye className="w-32 h-32 text-violet-400" />
                  </div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="flex items-center justify-center gap-4 mb-8"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <span className="text-6xl">🔮</span>
                    <span className="text-6xl">✨</span>
                    <span className="text-6xl">🌙</span>
                  </motion.div>

                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-300 via-violet-300 to-indigo-300 bg-clip-text text-transparent">
                      Your Destiny Awaits
                    </span>
                  </h2>

                  <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Step into the mystical realm and discover
                    what the universe has in store for you.{" "}
                    <span className="text-white font-semibold">
                      The cards are calling
                    </span>
                    .
                  </p>

                  <a
                    href="https://nix-thumb-90231924.figma.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:via-violet-500 hover:to-indigo-500 text-white text-xl font-bold rounded-full transition-all duration-300 shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/70 hover:scale-110"
                  >
                    <Sparkles className="w-7 h-7" />
                    Begin Your Journey
                    <ExternalLink className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <p className="text-sm text-purple-300/60 mt-8">
                    Experience the magic at
                    nix-thumb-90231924.figma.site
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