import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router';

interface HeaderProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function Header({ isMenuOpen, onToggleMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <Link to="/">
          <motion.h1 
            className="text-white tracking-tight cursor-pointer hover:text-white/80 transition-colors"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Gabriele Ruffini
          </motion.h1>
        </Link>
        
        <motion.button
          onClick={onToggleMenu}
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>
    </header>
  );
}