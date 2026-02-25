import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const backgroundWords = [
  'CREATE',
  'DESIGN',
  'CRAFT',
  'BUILD',
  'IMAGINE',
  'INNOVATE',
];

export function ManifestoBento() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full h-[25vh] md:h-[30vh] max-h-[400px] bg-white/5 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm"
    >
      {/* Animated Typography Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {mounted && backgroundWords.map((word, index) => (
          <motion.div
            key={word}
            className="absolute text-[15vw] md:text-[12vw] font-bold text-white whitespace-nowrap select-none pointer-events-none"
            initial={{
              x: index % 2 === 0 ? '-20%' : '100%',
              y: `${index * 18}%`,
              opacity: 0.4,
            }}
            animate={{
              x: index % 2 === 0 ? '100%' : '-20%',
              y: `${index * 18 + (index % 2 === 0 ? 5 : -5)}%`,
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 40 + index * 8,
              repeat: Infinity,
              ease: 'linear',
              opacity: {
                duration: 20 + index * 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            style={{
              filter: 'blur(2px)',
              transform: 'translateZ(0)', // Hardware acceleration
            }}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-5xl text-center space-y-4 md:space-y-5"
        >
          {/* Main Statement */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white leading-tight tracking-tight">Crafting visual experiences<br />that <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">tell stories</span></h2>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-sm md:text-base lg:text-lg text-white/60 max-w-3xl mx-auto leading-relaxed"
          >
            Where graphic design meets digital innovation. Every project is an opportunity 
            to merge aesthetics with purpose, creating meaningful connections through design.
          </motion.p>
        </motion.div>

        {/* Subtle Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />
    </motion.div>
  );
}