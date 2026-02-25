import { useState } from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MetaTags } from '../components/MetaTags';
import { 
  Mail, 
  User, 
  MessageSquare, 
  Send, 
  Sparkles,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Calendar,
  Heart,
  Zap,
  Coffee
} from 'lucide-react';

interface ContactProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    value: 'gabrieleruffini@icloud.com',
    link: 'mailto:gabrieleruffini@icloud.com',
    color: 'from-blue-500 to-cyan-500',
    description: 'Best for project inquiries'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: '@gabrieleruffini',
    link: 'https://www.linkedin.com/in/gabrieleruffini',
    color: 'from-purple-500 to-blue-500',
    description: 'Let\'s connect professionally'
  },
  {
    icon: Instagram,
    title: 'Instagram',
    value: '@elevisione',
    link: 'https://instagram.com/elevisione',
    color: 'from-pink-500 to-rose-500',
    description: 'See my creative work'
  }
];

const quickInfo = [
  { icon: MapPin, label: 'Location', value: 'Pisa, Italy 🇮🇹' },
  { icon: Calendar, label: 'Availability', value: 'Open for projects' },
  { icon: Coffee, label: 'Response Time', value: 'Usually within 24h' }
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

export function Contact({ isMenuOpen, onToggleMenu }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:gabrieleruffini@icloud.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <MetaTags
        title="Contact Gabriele Ruffini - Let's Create Together"
        description="Get in touch for project inquiries, collaborations, or just to say hello. I'm always open to meaningful conversations and exciting opportunities."
      />
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />

      {/* Playful Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />
        
        {/* Floating emojis */}
        <FloatingEmoji emoji="✉️" delay={0} />
        <FloatingEmoji emoji="💬" delay={1} />
        <FloatingEmoji emoji="🚀" delay={2} />
        <FloatingEmoji emoji="✨" delay={3} />
        <FloatingEmoji emoji="💡" delay={4} />
        <FloatingEmoji emoji="🎯" delay={5} />
        <FloatingEmoji emoji="📱" delay={6} />
        <FloatingEmoji emoji="🤝" delay={7} />

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
        {/* Hero Section */}
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block text-7xl mb-6"
              >
                👋
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm text-blue-300 text-sm tracking-wider uppercase rounded-full border border-blue-500/30">
                Let's Connect
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Create Together
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Have a project in mind? Want to collaborate? Or just fancy a chat about design? 
              <span className="text-white font-medium"> I'd love to hear from you!</span>
            </motion.p>
          </div>
        </section>

        {/* Quick Info Cards */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {quickInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm text-center">
                      <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                      <div className="text-sm text-zinc-500 mb-1">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Form - Takes 2 columns */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
                  
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
                    <div className="flex items-center gap-3 mb-8">
                      <MessageSquare className="w-8 h-8 text-purple-400" />
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Send a Message
                      </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-white mb-2 text-sm font-medium">
                          Your Name *
                        </label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-400 transition-colors" size={20} />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-white mb-2 text-sm font-medium">
                          Your Email *
                        </label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-purple-400 transition-colors" size={20} />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-purple-400/50 focus:bg-white/10 transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-white mb-2 text-sm font-medium">
                          Your Message *
                        </label>
                        <div className="relative group">
                          <MessageSquare className="absolute left-4 top-4 text-zinc-500 group-focus-within:text-pink-400 transition-colors" size={20} />
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-pink-400/50 focus:bg-white/10 transition-all resize-none"
                            placeholder="Tell me about your project, ideas, or just say hello..."
                          />
                        </div>
                      </div>

                      {/* Info Note */}
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                        <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-blue-200/80">
                          This will open your default email app with your message pre-filled. 
                          You can review and send it from there!
                        </p>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-4 px-8 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Sparkles size={20} />
                            </motion.div>
                            <span>Opening Email...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Send Message</span>
                          </>
                        )}
                      </motion.button>
                    </form>
                  </div>
                </div>
              </motion.div>

              {/* Contact Methods - Takes 1 column */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-pink-400" />
                    Other Ways to Connect
                  </h3>
                  
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => {
                      const Icon = method.icon;
                      return (
                        <motion.a
                          key={method.title}
                          href={method.link}
                          target={method.link.startsWith('http') ? '_blank' : undefined}
                          rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          className="group relative block"
                        >
                          <div className={`absolute -inset-1 bg-gradient-to-r ${method.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
                          
                          <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-all">
                            <div className="flex items-start gap-4">
                              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <h4 className="text-white font-semibold mb-1">{method.title}</h4>
                                <p className="text-sm text-zinc-400 mb-2 truncate">{method.value}</p>
                                <p className="text-xs text-zinc-500">{method.description}</p>
                              </div>
                            </div>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* Fun Fact Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl" />
                  <div className="relative p-6 rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/5 to-orange-500/5 backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <Coffee className="w-5 h-5 text-yellow-400" />
                      <h4 className="text-white font-semibold">Coffee Chat?</h4>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      I'm always up for a virtual coffee chat about design, tech, or creative projects. 
                      No project is too small to discuss! ☕️
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ / What to Expect */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
                <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  What Happens Next?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold mx-auto mb-4">
                      1
                    </div>
                    <h3 className="text-white font-semibold mb-2">You Reach Out</h3>
                    <p className="text-sm text-zinc-400">Send me a message through any method you prefer</p>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mx-auto mb-4">
                      2
                    </div>
                    <h3 className="text-white font-semibold mb-2">I Respond</h3>
                    <p className="text-sm text-zinc-400">Usually within 24 hours, often sooner!</p>
                  </div>

                  <div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white font-bold mx-auto mb-4">
                      3
                    </div>
                    <h3 className="text-white font-semibold mb-2">We Connect</h3>
                    <p className="text-sm text-zinc-400">Let's discuss your vision and make it happen</p>
                  </div>
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
