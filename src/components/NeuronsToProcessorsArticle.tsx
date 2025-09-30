import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const NeuronsToProcessorsArticle = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Article Content */}
      <div className="pt-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-display text-white mb-6">
              Neurons to Processors
            </h1>
            <div className="text-gray-400 mb-8">
              by Ewelina Kurtys | August 21, 2025
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            className="mb-12 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/baseimage.jpg" 
              alt="Neurons to Processors" 
              className="w-full h-auto"
            />
          </motion.div>

          {/* Article Body */}
          <motion.article
            className="prose prose-invert prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  The concept of harnessing living neuronal networks as computational units, once confined to the realm of science fiction is rapidly becoming a reality.
                </p>
              </div>

              {/* Importance in OrganaSys */}
              <div className="pt-6 border-t border-slate-700/50">
                <h2 className="text-3xl font-display text-blue-400 mb-6">
                  Importance in OrganaSys
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-display text-white mb-3">
                      Cognitive capabilities in practice
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      These living networks have already demonstrated real and tangible tasks such as pathfinding, obstacle avoidance, controlling robots and playing games. In other words, they're not just theoretical but they're showing actual performance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-display text-white mb-3">
                      Aligning with our mission
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      The review emerges from a forward looking research community. Its goals and direction overlaps closely with OrganaSys' own ambition, which is to build a scalable, biologically inspired AGI systems that can make a real world impact.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-display text-white mb-3">
                      Biocomputing devices
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      The review describes how systems called 'brain on a chip' devices integrate microelectrodes, microfluidics and brain organoids to produce biologically hybrid computational platforms.
                    </p>
                  </div>
                </div>
              </div>

              {/* Read Full Review Link */}
              <div className="pt-6 border-t border-slate-700/50">
                <motion.a
                  href="https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202508120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Read the full review here</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>

              {/* Social Share */}
              <div className="pt-8 border-t border-slate-700/50">
                <h3 className="text-lg font-display text-white mb-4">Share this article</h3>
                <div className="flex items-center space-x-4">
                  <motion.button
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Twitter className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    className="text-gray-400 hover:text-blue-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NeuronsToProcessorsArticle;

