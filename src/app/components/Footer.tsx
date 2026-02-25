import { Instagram, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <motion.p 
            className="text-white/40 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            © {new Date().getFullYear()} Gabriele Ruffini. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href="https://www.instagram.com/lelevisione/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/gabrieleruffini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
