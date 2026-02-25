import { motion, AnimatePresence } from 'motion/react';
import { User, Home, Mail } from 'lucide-react';
import { useNavigate } from 'react-router';

interface FilterPanelProps {
  isOpen: boolean;
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
  onClose: () => void;
}

const categories = ['Graphic Design', 'UI/UX Design', 'Social Media', 'XR'];

export function FilterPanel({ isOpen, activeFilter, onFilterChange, onClose }: FilterPanelProps) {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-zinc-950 z-50 border-l border-white/10 shadow-2xl"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="p-8 pt-24">
              <h2 className="text-white mb-8 tracking-tight">Filter by Category</h2>
              
              <div className="space-y-3">
                <motion.button
                  onClick={() => {
                    onFilterChange(null);
                    onClose();
                  }}
                  className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                    activeFilter === null
                      ? 'bg-white text-black'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  All Projects
                </motion.button>
                
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      onFilterChange(category);
                      onClose();
                    }}
                    className={`w-full text-left px-6 py-4 rounded-lg transition-all ${
                      activeFilter === category
                        ? 'bg-white text-black'
                        : 'bg-white/5 text-white hover:bg-white/10'
                    }`}
                    whileHover={{ x: 8 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/20 space-y-3">
                <motion.button
                  onClick={() => {
                    navigate('/');
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-white/10 to-white/5 text-white rounded-lg border border-white/20 hover:border-white/40 transition-all"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Home size={20} />
                  <span>Home</span>
                </motion.button>
                
                <motion.button
                  onClick={() => {
                    navigate('/about');
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-white/10 to-white/5 text-white rounded-lg border border-white/20 hover:border-white/40 transition-all"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <User size={20} />
                  <span>About Me</span>
                </motion.button>
                
                <motion.button
                  onClick={() => {
                    navigate('/contact');
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-white/10 to-white/5 text-white rounded-lg border border-white/20 hover:border-white/40 transition-all"
                  whileHover={{ x: 8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Mail size={20} />
                  <span>Contact</span>
                </motion.button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/40 text-sm">
                  {activeFilter ? `Showing ${activeFilter} projects` : 'Showing all projects'}
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}