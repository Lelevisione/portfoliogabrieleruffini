import { motion } from 'motion/react';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router';

interface BentoCardProps {
  id: number;
  title: string;
  category: string | string[];
  image: string;
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  imageScale?: number;
  imagePosition?: string;
}

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 row-span-1',
  large: 'col-span-2 row-span-2',
  wide: 'col-span-2 row-span-1',
  tall: 'col-span-1 row-span-2',
};

export const BentoCard = forwardRef<HTMLDivElement, BentoCardProps>(
  ({ id, title, category, image, size, imageScale = 1, imagePosition = 'translateX(0)' }, ref) => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate(`/project/${id}`);
    };

    return (
      <motion.div
        ref={ref}
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.4 }}
        className={`group relative overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer ${sizeClasses[size]}`}
        whileHover={{ y: -8 }}
        onClick={handleClick}
      >
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            style={{
              transform: `scale(${imageScale}) ${imagePosition}`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
        </div>
        
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs tracking-wide rounded-full mb-3 border border-white/20">
              {Array.isArray(category) ? category.join(', ') : category}
            </span>
            <h3 className="text-white tracking-tight transform transition-transform duration-300 group-hover:translate-x-2">
              {title}
            </h3>
          </motion.div>
        </div>
        
        <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
      </motion.div>
    );
  }
);

BentoCard.displayName = 'BentoCard';