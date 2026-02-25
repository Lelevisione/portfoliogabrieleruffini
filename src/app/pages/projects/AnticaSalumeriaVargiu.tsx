import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Image, Users, MessageCircle } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import heroImage from 'figma:asset/8c51b1beae42cf8452ce7f13f2d2b12d8b812f6a.png';
import formaggiImage from 'figma:asset/343797cd8e054ee1725cfee57692b6cecca18e14.png';
import cestiImage from 'figma:asset/1221cf4fa277019c004b284f1b3864b4b36d0741.png';
import salumiImage from 'figma:asset/427e1bd55f74edc2b2f70c3ce2592f7aff3838c5.png';
import pastaImage from 'figma:asset/2683ebbc60a42afcb27f836d0258e31966cf5869.png';
import freschiImage from 'figma:asset/e0121ae5da63258b75e47ffc48b9ea8749db4fd0.png';

const keyValues = [
  {
    icon: Sparkles,
    title: 'Revamping Rispettoso',
    description: 'Non coprire, ma svelare. Eliminare il rumore visivo per lasciare spazio all\'eleganza.',
    color: '#E67E50'
  },
  {
    icon: MessageCircle,
    title: 'Tone of Voice',
    description: 'Un registro pacato e autorevole che non ha bisogno di gridare per farsi ascoltare.',
    color: '#D4A574'
  },
  {
    icon: Users,
    title: 'Co-progettazione',
    description: 'Affiancamento della Social Media Manager in un percorso condiviso e strategico.',
    color: '#C17A5B'
  },
  {
    icon: Image,
    title: 'Alta Qualità',
    description: 'Fotografie che rendono giustizia al valore delle materie prime trattate.',
    color: '#E8B87E'
  }
];

interface AnticaSalumeriaVargiuProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function AnticaSalumeriaVargiu({ isMenuOpen, onToggleMenu }: AnticaSalumeriaVargiuProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-6 overflow-hidden bg-black">
        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <span className="inline-block px-6 py-2 bg-[#E67E50]/10 text-[#E67E50] text-sm tracking-widest uppercase rounded-full border border-[#E67E50]/30">
                Social Media · Brand Strategy · Visual Identity
              </span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="bg-gradient-to-r from-[#E67E50] via-[#D4A574] to-[#C17A5B] bg-clip-text text-transparent">
                Antica Salumeria Vargiu
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-zinc-400 max-w-4xl mx-auto leading-relaxed mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              A guardian of <span className="text-white font-medium">Sardinian flavors and memories</span>, reimagined for the digital age.
            </motion.p>

            <motion.p 
              className="text-base text-zinc-500 italic max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              How do you tell a story of heritage without appearing old-fashioned?
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <motion.section 
        className="px-6 pb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <div 
            className="rounded-3xl overflow-hidden cursor-pointer group relative shadow-2xl max-h-[500px]"
            onClick={() => setLightboxImage(heroImage)}
          >
            <img 
              src={heroImage} 
              alt="Antica Salumeria Vargiu - Shopping bag"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
      </motion.section>

      {/* The Context */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Il <span className="text-[#E67E50]">Contesto</span>
              </h2>
            </div>

            <div 
              className="rounded-3xl p-8 md:p-10 shadow-xl border border-[#E67E50]/30"
              style={{ backgroundColor: '#E67E50' }}
            >
              <p className="text-lg text-white/90 leading-relaxed mb-5">
                <span className="text-xl font-semibold text-white">L'Antica Salumeria Vargiu</span> non è solo un negozio, è un custode di sapori e memorie della Sardegna. Tuttavia, la sua voce digitale rischiava di rimanere intrappolata in un passato polveroso.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed mb-5">
                La sfida era delicata: <span className="font-semibold text-white">come si racconta la storicità senza risultare "vecchi"?</span> Come si comunica il lusso della genuinità?
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border-l-4 border-white">
                <p className="text-base text-white/95 italic">
                  "L'obiettivo non era coprire, ma svelare l'eleganza senza tempo."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Content with Typography */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Linee Pulite, <span className="text-[#D4A574]">Tipografia Bold</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
              Geometrie essenziali fanno da cornice a una tipografia studiata nel dettaglio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setLightboxImage(formaggiImage)}
            >
              <img 
                src={formaggiImage}
                alt="Formaggi - Typography showcase"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4A574]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              onClick={() => setLightboxImage(cestiImage)}
            >
              <img 
                src={cestiImage}
                alt="Cesti Natalizi - Typography showcase"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C17A5B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer border border-zinc-800"
              onClick={() => setLightboxImage(salumiImage)}
            >
              <img 
                src={salumiImage}
                alt="Salumi - Product photography"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E67E50]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer border border-zinc-800"
              onClick={() => setLightboxImage(pastaImage)}
            >
              <img 
                src={pastaImage}
                alt="Pasta - Product photography"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#D4A574]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer border border-zinc-800"
              onClick={() => setLightboxImage(freschiImage)}
            >
              <img 
                src={freschiImage}
                alt="Freschi - Product photography"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#E8B87E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Intervention */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                L'<span className="text-[#D4A574]">Intervento</span>
              </h2>
            </div>

            <div 
              className="rounded-3xl p-8 md:p-10 shadow-xl border border-[#D4A574]/30 mb-8"
              style={{ backgroundColor: '#D4A574' }}
            >
              <p className="text-lg text-white/90 leading-relaxed mb-5">
                Abbiamo avviato un processo di <span className="font-semibold text-white">revamping radicale ma rispettoso</span>. L'obiettivo non era coprire, ma <span className="font-semibold text-white">svelare</span>.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed mb-5">
                Abbiamo lavorato per <span className="font-semibold">"pulire"</span> l'immagine coordinata, eliminando il rumore visivo per lasciare spazio al <span className="font-semibold text-white">bianco, all'eleganza e alla nobiltà della materia prima</span>.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border-l-4 border-white">
                <p className="text-base text-white/95 leading-relaxed">
                  Il nuovo <span className="font-semibold">Tone of Voice</span> abbandona i cliché folcloristici per abbracciare un <span className="font-semibold text-white">registro di classe, pacato e autorevole</span>: una voce che non ha bisogno di gridare per farsi ascoltare, perché è forte della sua storia.
                </p>
              </div>
            </div>

            {/* Key Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-3xl p-8 border hover:scale-[1.02] transition-all duration-300"
                  style={{ 
                    backgroundColor: value.color,
                    borderColor: value.color
                  }}
                >
                  <div className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-white/20 backdrop-blur-sm">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-white/90 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Synergy */}
      <section className="px-6 py-12 bg-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                La <span className="text-[#C17A5B]">Sinergia</span>
              </h2>
            </div>

            <div 
              className="rounded-3xl p-8 md:p-10 shadow-xl border border-[#C17A5B]/30"
              style={{ backgroundColor: '#C17A5B' }}
            >
              <p className="text-lg text-white/90 leading-relaxed mb-5">
                Questo cambiamento non è stato imposto, ma <span className="font-semibold text-white">costruito</span>. Ho affiancato la Social Media Manager interna in un percorso di <span className="font-semibold">co-progettazione</span>, fortemente voluto dal proprietario.
              </p>
              
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Ed insieme abbiamo elaborato le <span className="font-semibold text-white">linee guida strategiche e gli strumenti visivi</span> per aiutarla a tradurre i valori di sempre in un linguaggio nuovo, fresco e incredibilmente pulito.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
                <h3 className="text-xl font-bold mb-4 text-white">Il Risultato</h3>
                <p className="text-base text-white/95 leading-relaxed mb-4">
                  <span className="font-semibold">Linee pulite e geometrie essenziali</span> fanno da cornice a una tipografia studiata nel dettaglio: un abbraccio tra lo stile retrò, che onora la storia, e la freschezza moderna necessaria per emergere nel feed di oggi.
                </p>
                <p className="text-base text-white/95 leading-relaxed">
                  Il tutto condito da <span className="font-semibold">foto di altissima qualità</span> che rendono giustizia al valore delle materie prime trattate.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Impact Statement */}
      <section className="px-6 py-12 pb-20 bg-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div 
              className="rounded-3xl p-10 md:p-14 shadow-2xl border border-[#E8B87E]/30"
              style={{ backgroundColor: '#E8B87E' }}
            >
              <Sparkles className="w-12 h-12 text-white mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Tradizione incontra <span className="text-white drop-shadow-lg">Modernità</span>
              </h2>
              <p className="text-xl text-white/95 leading-relaxed mb-6">
                Una voce che non grida, ma parla con <span className="font-semibold text-white">autorevolezza</span>. Un'identità visiva che onora il passato abbracciando il <span className="font-semibold text-white">futuro</span>.
              </p>
              <div className="inline-block px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-full border border-white/40">
                <p className="text-sm font-medium tracking-wide">
                  Autenticità · Eleganza · Eccellenza Sarda
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <span className="text-white text-2xl">×</span>
          </button>
          <img 
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      <Footer />
    </div>
  );
}