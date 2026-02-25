import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from '../components/Header';
import { BentoCard } from '../components/BentoCard';
import { Footer } from '../components/Footer';
import { ManifestoBento } from '../components/ManifestoBento';
import { MetaTags } from '../components/MetaTags';

interface PortfolioItem {
  id: number;
  title: string;
  category: string | string[];
  image: string;
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  imageScale?: number;
  imagePosition?: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: 'On Display - A curator\'s choice',
    category: 'XR',
    image: 'https://i.imgur.com/qI5cYJc.png',
    size: 'large',
  },
  {
    id: 2,
    title: 'Oracle - webapp',
    category: 'UI/UX Design',
    image: 'https://i.imgur.com/9aYGhXD.png',
    size: 'wide',
  },
  {
    id: 3,
    title: 'Corti Brillanti',
    category: 'Graphic Design',
    image: 'https://i.imgur.com/dqFxI5l.png',
    size: 'small',
  },
  {
    id: 4,
    title: 'Storia del Graphic design - EBook',
    category: 'Graphic Design',
    image: 'https://i.imgur.com/T1F5Z5J.png',
    size: 'tall',
  },
  {
    id: 5,
    title: 'Cooking Python',
    category: 'UI/UX Design',
    image: 'https://i.imgur.com/EG6oxwd.png',
    size: 'medium',
    imageScale: 1.4,
    imagePosition: 'translateX(15%)',
  },
  {
    id: 6,
    title: 'Psicologa',
    category: ['Graphic Design', 'Social Media'],
    image: 'https://i.imgur.com/XXgNwtn.png',
    size: 'small',
  },
  {
    id: 7,
    title: 'La Casina B&B',
    category: 'Graphic Design',
    image: 'https://i.imgur.com/bKZ1oyI.png',
    size: 'wide',
  },
  {
    id: 8,
    title: 'Per il tuo Bene',
    category: ['Graphic Design', 'Social Media'],
    image: 'https://i.imgur.com/ozT5ryd.png',
    size: 'medium',
  },
  {
    id: 9,
    title: 'SEI Versilia',
    category: ['Graphic Design', 'Social Media'],
    image: 'https://i.imgur.com/1B6eb7m.png',
    size: 'large',
  },
  {
    id: 10,
    title: 'Shopping App',
    category: 'UI/UX Design',
    image: 'https://i.imgur.com/CyrynRJ.png',
    size: 'small',
  },
  {
    id: 11,
    title: 'Di cosa parla?',
    category: 'UI/UX Design',
    image: 'https://i.imgur.com/kUZiWDK.png',
    size: 'tall',
  },
  {
    id: 12,
    title: 'Antica Salumeria Vargiu',
    category: 'Social Media',
    image: 'https://i.imgur.com/CPZpDGi.png',
    size: 'medium',
  },
  {
    id: 13,
    title: 'L\'Alveare',
    category: ['Graphic Design', 'Social Media'],
    image: 'https://i.imgur.com/wxveJGX.png',
    size: 'wide',
  },
  {
    id: 14,
    title: 'CLI - Centro Linguistico',
    category: 'Graphic Design',
    image: 'https://i.imgur.com/lgVFYYV.png',
    size: 'small',
  },
  {
    id: 15,
    title: 'Meta AR Filters',
    category: 'XR',
    image: 'https://i.imgur.com/jU9Tghk.png',
    size: 'small',
  },
  {
    id: 16,
    title: 'Mudac',
    category: 'Graphic Design',
    image: 'https://i.imgur.com/jiT64Gz.png',
    size: 'small',
  },
  {
    id: 17,
    title: 'Tarot - webapp',
    category: 'UI/UX Design',
    image: 'https://i.imgur.com/HMkfrAv.png',
    size: 'small',
  },
  {
    id: 18,
    title: 'Valentine App',
    category: 'UI/UX Design',
    image: 'https://i.imgur.com/AFZHglD.png',
    size: 'wide',
  },
];

interface HomeProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

export function Home({ isMenuOpen, onToggleMenu, activeFilter, onFilterChange }: HomeProps) {
  const [itemsToShow, setItemsToShow] = useState(20);

  const filteredProjects = useMemo(() => {
    return activeFilter
      ? portfolioData.filter((project) => {
          const categories = Array.isArray(project.category) 
            ? project.category 
            : [project.category];
          return categories.includes(activeFilter);
        })
      : portfolioData;
  }, [activeFilter]);

  const displayedItems = useMemo(() => {
    return filteredProjects.slice(0, itemsToShow);
  }, [filteredProjects, itemsToShow]);

  useEffect(() => {
    setItemsToShow(20);
  }, [activeFilter]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000 &&
        displayedItems.length < filteredProjects.length
      ) {
        setItemsToShow((prev) => Math.min(prev + 6, filteredProjects.length));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [displayedItems.length, filteredProjects.length]);

  return (
    <div className="min-h-screen bg-black">
      <MetaTags />
      <Header
        isMenuOpen={isMenuOpen}
        onToggleMenu={onToggleMenu}
      />

      <main className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Manifesto Bento - First element of the layout */}
          <div className="mb-8 md:mb-12">
            <ManifestoBento />
          </div>

          {/* Optional filter indicator */}
          {activeFilter && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center"
            >
              <span className="text-white/60 text-sm">
                Filtering: <span className="text-white font-medium">{activeFilter}</span>
              </span>
            </motion.div>
          )}

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]" style={{ gridAutoFlow: 'dense' }}>
            <AnimatePresence mode="popLayout">
              {displayedItems.map((project) => (
                <BentoCard
                  key={project.id}
                  {...project}
                />
              ))}
            </AnimatePresence>
          </div>

          {displayedItems.length < filteredProjects.length && (
            <motion.div
              className="flex justify-center mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="text-white/40 text-sm">Scroll to load more...</div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}