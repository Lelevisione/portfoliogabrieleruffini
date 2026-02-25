import { useParams, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState } from 'react';

interface ProjectDetailProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function ProjectDetail({ isMenuOpen, onToggleMenu }: ProjectDetailProps) {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : null;
  const project = projectId ? projectsData[projectId] : null;
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-zinc-400 hover:text-white transition-colors">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs tracking-wide rounded-full mb-4 border border-white/20">
              {project.category}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-zinc-400 max-w-3xl">{project.shortDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section 
        className="px-6 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-6xl mx-auto">
          <div 
            className="rounded-2xl overflow-hidden cursor-pointer group relative"
            onClick={() => setLightboxImage(project.heroImage)}
          >
            <img 
              src={project.heroImage} 
              alt={project.title}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        </div>
      </motion.section>

      {/* Overview Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-zinc-300 leading-relaxed mb-8">{project.overview.concept}</p>
            
            <h3 className="text-xl font-semibold mb-4">Project Goals</h3>
            <ul className="space-y-3">
              {project.overview.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" />
                  <span className="text-zinc-300">{goal}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4">Context</h3>
            <p className="text-zinc-300 leading-relaxed">{project.overview.context}</p>
          </motion.div>
        </div>
      </section>

      {/* Media Gallery - Compact Layout */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Visual Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(() => {
              // Collect all images from process and results to avoid duplicates
              const usedImages = [
                ...project.process.images,
                ...project.results.images
              ];
              
              // Get all images from mediaBlocks and filter out duplicates
              const allMediaImages = project.mediaBlocks.flatMap((block) => block.images);
              const uniqueImages = allMediaImages.filter(img => !usedImages.includes(img));
              
              // Take only first 3 unique images
              const galleryImages = uniqueImages.slice(0, 3);
              
              return galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightboxImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                      Click to expand
                    </span>
                  </div>
                </motion.div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-16 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">{project.process.title}</h2>
            <p className="text-zinc-300 leading-relaxed whitespace-pre-line max-w-4xl">
              {project.process.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.process.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setLightboxImage(image)}
              >
                <img 
                  src={image} 
                  alt={`${project.title} - Process ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Quote */}
      <section className="px-6 py-24">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <blockquote className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
            "{project.highlight.quote}"
          </blockquote>
          {project.highlight.author && (
            <cite className="text-zinc-500 not-italic">— {project.highlight.author}</cite>
          )}
        </motion.div>
      </section>

      {/* Results Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8">Results & Impact</h2>
            <p className="text-zinc-300 leading-relaxed text-lg mb-12 whitespace-pre-line max-w-4xl">
              {project.results.description}
            </p>

            {project.results.impact && (
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {project.results.impact.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 bg-zinc-900 rounded-xl border border-white/10"
                  >
                    <p className="text-zinc-300">{item}</p>
                  </motion.div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {project.results.images.map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-video rounded-xl overflow-hidden cursor-pointer group relative"
                  onClick={() => setLightboxImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`${project.title} - Result ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project Navigation */}
      {project.nextProject && projectsData[project.nextProject] && (
        <section className="px-6 py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <Link
              to={`/project/${project.nextProject}`}
              className="group flex items-center justify-between p-8 bg-zinc-900/50 rounded-2xl hover:bg-zinc-900 transition-colors"
            >
              <div>
                <span className="text-zinc-500 text-sm mb-2 block">Next Project</span>
                <h3 className="text-2xl font-bold group-hover:text-zinc-300 transition-colors">
                  {projectsData[project.nextProject].title}
                </h3>
              </div>
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightboxImage}
              alt="Full size preview"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}