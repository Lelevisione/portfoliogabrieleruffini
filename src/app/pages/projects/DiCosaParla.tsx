import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Search, MessageSquare, Users, Heart, Target, Frown, Layout } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { useState } from 'react';
import heroImage from 'figma:asset/7cf6d98561847a1c48b859fa5138a81642f2f979.png';
import taskModelImage from 'figma:asset/7f9bb5812a9f528fe30a3dae53461c8de4f9f8b4.png';
import relationsImage from 'figma:asset/9199536c056e9dfcd1c56fc74f2ac7cbe6793869.png';
import flowsImage from 'figma:asset/b43b09fda5adaacdb63a369912ed7b0c0855becc.png';

const personas = [
  {
    name: 'Luca Buonamici',
    archetype: 'The Social Insecure',
    age: 22,
    location: 'Firenze',
    occupation: 'Engineering Student',
    status: 'Single',
    quote: 'The world is governed more by appearances than by reality',
    description: 'Luca represents the fear of being left out (FOMO). When his friends discuss the latest trending series, he feels excluded. His need isn\'t critical depth, but "social currency": he needs to know the plot and hot topics in 30 seconds to join conversations confidently. For him, the app is a social lifeline.',
    goals: [
      'Pretend to be more expert in entertainment than he really is',
      'Appear more informed',
      'Feel like an integral part of interesting conversations',
      'Get quick summaries to avoid feeling excluded'
    ],
    frustrations: [
      'Often feels excluded from discussions with friends',
      'Struggles to socialize',
      'Has no time to cultivate interests that are truly his',
      'Fear of missing out (FOMO) on trending topics'
    ],
    color: '#8B6F47',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    name: 'Cristina Inghirami',
    archetype: 'The Passionate',
    age: 24,
    location: 'Milano',
    occupation: 'DAMS Student · Barista',
    status: 'Single',
    quote: 'A film is the life from which the boring parts have been cut out',
    description: 'She lives for cinema but hits a wall of indifference in her social circle. For Cristina, the app isn\'t a consultation tool, but a stage. She seeks a vertical space where her opinion matters, where she can write reviews, read critiques, and feel part of a "tribe" speaking her language.',
    goals: [
      'Stay updated on all the latest cinema releases',
      'Expand her culture by easily reading critics\' opinions',
      'Feel part of a community of passionate people',
      'Have a stage to express her opinions and be heard'
    ],
    frustrations: [
      'Her friends don\'t share her passion for cinema',
      'Has no space to pour out her desire to talk about the films she watches',
      'Difficulty staying updated on latest releases',
      'Lack of a community that speaks her language'
    ],
    color: '#A8D5A2',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    name: 'Gianni Bianchi',
    archetype: 'The Protective Parent',
    age: 35,
    location: 'Roma',
    occupation: 'Lawyer · Law Degree',
    status: 'Married',
    quote: 'Time with loved ones is a precious gift',
    description: 'Gianni has little time and many worries. He wants to protect his children from inappropriate content but can\'t prescreen everything. For him, the app is a safety filter: he seeks ethical ratings (PEGI), sensitive themes, and clear synopses to decide instantly if that cartoon or film is suitable for his family.',
    goals: [
      'Raise his children well',
      'Feel he has a more active role in his family',
      'Continue his career',
      'Ensure his children grow up with values he shares',
      'Quickly assess content appropriateness'
    ],
    frustrations: [
      'Little time to dedicate to himself and his children',
      'His children spend too much time on tablets and phones',
      'His children learned rude behaviors from unsupervised content',
      'Can\'t prescreen all content his children consume'
    ],
    color: '#C5E5C3',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
  }
];

const keyFeatures = [
  {
    icon: Search,
    title: 'Content Discovery',
    description: 'Find the most discussed content across music, movies, books, and video games',
    color: '#A8D5A2'
  },
  {
    icon: MessageSquare,
    title: 'Community Reviews',
    description: 'Read and share opinions with a passionate community of pop culture enthusiasts',
    color: '#C5E5C3'
  },
  {
    icon: Heart,
    title: 'Hot Topics',
    description: 'Stay updated on trending discussions and discover what everyone is talking about',
    color: '#8B6F47'
  },
  {
    icon: Users,
    title: 'User Profiles',
    description: 'Build your cultural identity and connect with like-minded people',
    color: '#D4B896'
  }
];

interface DiCosaParlaProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export function DiCosaParla({ isMenuOpen, onToggleMenu }: DiCosaParlaProps) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header isMenuOpen={isMenuOpen} onToggleMenu={onToggleMenu} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        {/* Mint green gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A8D5A2]/20 via-[#C5E5C3]/10 to-black" />
        
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
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Layout className="w-10 h-10 text-[#A8D5A2]" />
              <span className="inline-block px-4 py-2 bg-[#A8D5A2]/20 text-[#C5E5C3] text-sm tracking-widest uppercase rounded-full border border-[#A8D5A2]/40">
                UX/UI Design · User Research · Information Architecture
              </span>
            </div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-[#A8D5A2]">Di cosa parla?</span>
            </motion.h1>

            <motion.p 
              className="text-2xl md:text-3xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-light mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              A webapp for discovering trending <span className="text-white font-medium">pop culture content</span> across music, movies, books, and video games — built for passionate communities.
            </motion.p>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative max-w-6xl mx-auto"
            >
              <img 
                src={heroImage}
                alt="Di cosa parla? Hero"
                className="w-full h-auto rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform"
                onClick={() => setLightboxImage(heroImage)}
              />
              <div className="absolute inset-0 bg-[#A8D5A2] blur-3xl opacity-10 -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                The <span className="text-[#A8D5A2]">Manifesto</span>
              </h2>
              <p className="text-2xl text-zinc-400 max-w-3xl mx-auto font-light italic">
                A Compass in the Sea of Content
              </p>
            </div>

            <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-800">
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                We live in an era of <span className="text-white font-semibold">information overload</span>. Between streaming platforms, cinema releases, and literary trends, the question we ask most often isn't "what should I watch?", but rather <span className="text-[#A8D5A2] font-semibold">"what is it about?"</span>
              </p>
              
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                From this need, <span className="text-white font-semibold">Di Cosa Parla?</span> was born — a User Experience Design project conceived as the definitive answer to entertainment fragmentation. It's not just a simple webapp, but an <span className="text-[#C5E5C3] font-semibold">ecosystem with a dual soul</span>:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-zinc-800/50 rounded-2xl p-6 border-l-4 border-[#A8D5A2]">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Search className="w-6 h-6 text-[#A8D5A2]" />
                    Quick Encyclopedia
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    For those seeking immediate answers — a rapid consultation tool that delivers the essential in seconds.
                  </p>
                </div>

                <div className="bg-zinc-800/50 rounded-2xl p-6 border-l-4 border-[#C5E5C3]">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <Users className="w-6 h-6 text-[#C5E5C3]" />
                    Digital Piazza
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    For those seeking dialogue — a vibrant community space where opinions matter and conversations flourish.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="px-6 py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              The <span className="text-[#A8D5A2]">Challenge</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              How might we create a platform that helps people discover trending cultural content 
              while fostering meaningful discussions and connections within passionate communities?
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-[#A8D5A2]/50 transition-all hover:scale-105"
              >
                <div 
                  className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Understanding Our <span className="text-[#A8D5A2]">Users</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Three distinct personas representing different motivations and pain points
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <motion.div
                key={persona.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#A8D5A2]/40 transition-all"
              >
                {/* Header with color accent */}
                <div 
                  className="h-2"
                  style={{ backgroundColor: persona.color }}
                />
                
                {/* Image */}
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-zinc-800">
                    <img 
                      src={persona.image}
                      alt={persona.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{persona.name}</h3>
                  <div className="text-center text-zinc-400 text-sm mb-4">
                    <p>{persona.age} years · {persona.location}</p>
                    <p>{persona.occupation}</p>
                    <p className="text-xs mt-1 text-zinc-500">{persona.status}</p>
                  </div>

                  {/* Quote */}
                  <div className="bg-zinc-800/50 rounded-xl p-4 mb-6 italic text-zinc-300 text-sm text-center border-l-4" style={{ borderColor: persona.color }}>
                    "{persona.quote}"
                  </div>

                  {/* Description */}
                  <div className="bg-zinc-800/50 rounded-xl p-4 mb-6 text-zinc-300 text-sm text-center border-l-4" style={{ borderColor: persona.color }}>
                    {persona.description}
                  </div>

                  {/* Goals */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-5 h-5 text-[#A8D5A2]" />
                      <h4 className="text-lg font-semibold text-white">Goals</h4>
                    </div>
                    <ul className="space-y-2">
                      {persona.goals.map((goal, i) => (
                        <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                          <span className="text-[#A8D5A2] mt-1">•</span>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Frustrations */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Frown className="w-5 h-5 text-[#D4B896]" />
                      <h4 className="text-lg font-semibold text-white">Frustrations</h4>
                    </div>
                    <ul className="space-y-2">
                      {persona.frustrations.map((frustration, i) => (
                        <li key={i} className="text-sm text-zinc-400 flex items-start gap-2">
                          <span className="text-[#D4B896] mt-1">•</span>
                          <span>{frustration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Scenarios */}
      <section className="px-6 py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              User <span className="text-[#A8D5A2]">Scenarios</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Mapping real-world use cases to design decisions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl p-8 border border-zinc-800"
            >
              <div className="text-5xl font-bold text-[#A8D5A2] mb-4">I</div>
              <h3 className="text-xl font-bold text-white mb-3">Luca's Journey</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Looking to quickly research essential content points to avoid feeling excluded 
                from conversations and find critical opinions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl p-8 border border-zinc-800"
            >
              <div className="text-5xl font-bold text-[#C5E5C3] mb-4">II</div>
              <h3 className="text-xl font-bold text-white mb-3">Cristina's Quest</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A DAMS student who loves cinema, searching for a platform to share opinions 
                and discover what critics say about films she watches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl p-8 border border-zinc-800"
            >
              <div className="text-5xl font-bold text-[#D4B896] mb-4">III</div>
              <h3 className="text-xl font-bold text-white mb-3">Gianni's Mission</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                A busy parent wanting to ensure the content his children consume aligns 
                with his values, using ratings and community reviews.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Flows & Wireframes */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              User <span className="text-[#A8D5A2]">Flows</span> & Wireframes
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Detailed task models, relationships, and interaction flows
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Task Model & Wireframes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#A8D5A2] rounded"></span>
                Task Model & Figma Wireframes
              </h3>
              <p className="text-zinc-400 mb-6 max-w-3xl">
                The task model maps all possible user interactions, while the wireframes visualize the Editorial and Community views with their distinct layouts and functionalities.
              </p>
              <img 
                src={taskModelImage}
                alt="Task Model and Wireframes"
                className="w-full h-auto rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.01] transition-transform border border-zinc-800"
                onClick={() => setLightboxImage(taskModelImage)}
              />
            </motion.div>

            {/* Relations Between Tasks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#C5E5C3] rounded"></span>
                Task Relationships & Mockup Integration
              </h3>
              <p className="text-zinc-400 mb-6 max-w-3xl">
                Visualizing how different tasks interconnect through the homepage, user profiles, and content pages — showing the strategic navigation paths that guide users from discovery to engagement.
              </p>
              <img 
                src={relationsImage}
                alt="Relations Between Tasks and Mockup"
                className="w-full h-auto rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.01] transition-transform border border-zinc-800"
                onClick={() => setLightboxImage(relationsImage)}
              />
            </motion.div>

            {/* Detailed Flows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#D4B896] rounded"></span>
                Detailed User Interaction Flows
              </h3>
              <p className="text-zinc-400 mb-6 max-w-3xl">
                From registration to profile management, content discovery to review submission — these detailed flows capture every step of the user journey, ensuring seamless transitions and intuitive navigation.
              </p>
              <img 
                src={flowsImage}
                alt="Detailed User Flows"
                className="w-full h-auto rounded-2xl shadow-2xl cursor-pointer hover:scale-[1.01] transition-transform border border-zinc-800"
                onClick={() => setLightboxImage(flowsImage)}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Strategy */}
      <section className="px-6 py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Design <span className="text-[#A8D5A2]">Strategy</span> & Architecture
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              A dual-soul ecosystem balancing utility and community engagement
            </p>
          </motion.div>

          {/* Dual Design Strategy */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-3xl p-8 md:p-12 border border-zinc-800 mb-8"
            >
              <h3 className="text-3xl font-bold text-white mb-6">The Dual Design Approach</h3>
              <p className="text-lg text-zinc-300 leading-relaxed mb-6">
                Based on our user personas, we developed a <span className="text-[#A8D5A2] font-semibold">Dual Design Strategy</span>. The webapp's structure is built on a powerful <span className="text-white font-semibold">SEO hook</span>: the name itself, "Di Cosa Parla?" (What's It About?), intercepts one of the most common search queries, attracting organic traffic from curious users.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Once we've "hooked" the user with immediate utility, the design works on <span className="text-[#C5E5C3] font-semibold">retention</span>: navigation flows are crafted to encourage interaction — writing reviews, voting, commenting — converting the casual visitor into an active community member.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl p-8 border border-zinc-800"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#A8D5A2]/20 flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-[#A8D5A2]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Phase 1: Attract</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  <span className="text-white font-semibold">SEO-optimized queries</span> bring users searching for quick answers. The platform immediately delivers value through instant content summaries, ratings, and genre information.
                </p>
                <div className="text-sm text-zinc-500 italic">
                  Target: Luca & Gianni → Quick Information Seekers
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 rounded-2xl p-8 border border-zinc-800"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#C5E5C3]/20 flex items-center justify-center mb-6">
                  <MessageSquare className="w-8 h-8 text-[#C5E5C3]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Phase 2: Engage</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  <span className="text-white font-semibold">Community features</span> encourage users to participate. Strategic UI flows guide toward writing reviews, joining discussions, and becoming active members.
                </p>
                <div className="text-sm text-zinc-500 italic">
                  Target: Cristina → Passionate Community Builder
                </div>
              </motion.div>
            </div>
          </div>

          {/* UI Design System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Task Modeling & UI Design</h3>
            <p className="text-lg text-zinc-400 text-center mb-12 max-w-3xl mx-auto">
              We translated user complexity into a rigorous <span className="text-white">Task Model</span>, mapping every possible interaction from quick registration to profile management. The wireframes reflect this structural clarity through a dual-view system:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-[#A8D5A2]/5 to-transparent rounded-3xl p-8 border border-[#A8D5A2]/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#A8D5A2]/20 flex items-center justify-center">
                    <Layout className="w-7 h-7 text-[#A8D5A2]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Editorial View</h4>
                    <p className="text-sm text-[#A8D5A2]">Clean & Hierarchical</p>
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  A clean, clinical, and hierarchical interface where data (title, genre, synopsis, ratings) are presented without distractions. Perfect for quick research and rapid decision-making.
                </p>
                <div className="bg-zinc-800/50 rounded-xl p-4 border-l-4 border-[#A8D5A2]">
                  <p className="text-sm text-zinc-300">
                    <span className="font-semibold text-white">Design Focus:</span> Clarity, Speed, Findability
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-[#C5E5C3]/5 to-transparent rounded-3xl p-8 border border-[#C5E5C3]/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#C5E5C3]/20 flex items-center justify-center">
                    <Users className="w-7 h-7 text-[#C5E5C3]" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Community View</h4>
                    <p className="text-sm text-[#C5E5C3]">Warm & Dynamic</p>
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  A warm and dynamic layout that changes rhythm, giving space to user reviews, star ratings, and debates. Encourages infinite scrolling and content discovery.
                </p>
                <div className="bg-zinc-800/50 rounded-xl p-4 border-l-4 border-[#C5E5C3]">
                  <p className="text-sm text-zinc-300">
                    <span className="font-semibold text-white">Design Focus:</span> Engagement, Sharing, Discovery
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="px-6 py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Design <span className="text-[#A8D5A2]">Insights</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#A8D5A2]/10 to-transparent rounded-2xl p-8 border border-[#A8D5A2]/30"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Community First</h3>
              <p className="text-zinc-400 leading-relaxed">
                The platform prioritizes community engagement and discussions over isolated content consumption. 
                Users want to feel part of passionate conversations about pop culture they love.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#C5E5C3]/10 to-transparent rounded-2xl p-8 border border-[#C5E5C3]/30"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Quick Discovery</h3>
              <p className="text-zinc-400 leading-relaxed">
                Users need fast access to trending topics and hot discussions. The "Hot Topics" feature 
                addresses the pain point of feeling left out of conversations by surfacing what's popular now.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#8B6F47]/10 to-transparent rounded-2xl p-8 border border-[#8B6F47]/30"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Guided Curation</h3>
              <p className="text-zinc-400 leading-relaxed">
                For parents like Gianni, content ratings and community reviews provide peace of mind. 
                The platform helps users make informed decisions about content quality and appropriateness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-[#D4B896]/10 to-transparent rounded-2xl p-8 border border-[#D4B896]/30"
            >
              <h3 className="text-2xl font-bold text-white mb-4">SEO & Accessibility</h3>
              <p className="text-zinc-400 leading-relaxed">
                Initially designed to attract curious visitors through SEO-optimized titles, 
                the platform evolved into a vibrant space for passionate opinion exchanges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="px-6 py-20 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-br from-[#A8D5A2]/10 via-[#C5E5C3]/5 to-transparent rounded-3xl p-12 md:p-16 border border-[#A8D5A2]/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                The <span className="text-[#A8D5A2]">Outcome</span>
              </h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                <span className="text-white font-semibold">"Di Cosa Parla?"</span> demonstrates that a good interface speaks <span className="text-[#A8D5A2] font-semibold">different languages</span> to different users. It's a project that unites the <span className="text-[#C5E5C3] font-semibold">coldness of data</span> with the <span className="text-[#D4B896] font-semibold">vitality of the social</span>, solving with a single tool the anxiety of not knowing and the desire to share.
              </p>
              <div className="inline-block px-6 py-3 bg-[#A8D5A2]/20 text-[#A8D5A2] rounded-full border border-[#A8D5A2]/40">
                <p className="text-sm font-medium tracking-wide">
                  One Platform · Multiple Voices · Infinite Conversations
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