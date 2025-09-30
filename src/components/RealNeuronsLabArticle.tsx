import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const RealNeuronsLabArticle = () => {
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
              Confirming we're working with real neurons in our lab
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
              src="/articleimage.jpg" 
              alt="Real Neurons in Lab" 
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
                  At OrganaSys' we grow neurospheres that we train to perform computational tasks. From our human eyes, we can't really confirm whether it is or not, even with a standard microscope but we just about get the structure. With an electron microscopy, we can observe every detail of their morphology. Here are examples of our neurospheres, revealing the intricate shape of the cells.
                </p>
              </div>

              {/* Image 1 */}
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/articleimage2.jpg" 
                  alt="Neurosphere Electron Microscopy" 
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-400 text-center mt-2 italic">
                  Figure 1: Electron microscopy revealing the intricate morphology of our neurospheres
                </p>
              </div>

              {/* Section 2 */}
              <div className="pt-6 border-t border-slate-700/50">
                <p className="text-gray-300 leading-relaxed">
                  Beyond structural analysis, we can confirm the identity by detecting molecules that's specific to neurons.
                </p>
              </div>

              {/* Image 2 */}
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/articleimage2.jpg" 
                  alt="Molecular Detection" 
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-400 text-center mt-2 italic">
                  Figure 2: Molecular detection confirming neuronal identity
                </p>
              </div>

              {/* MAP2 Section */}
              <div className="pt-6 border-t border-slate-700/50">
                <h2 className="text-3xl font-display text-blue-400 mb-4">
                  MAP2: A Neuronal Marker
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  At OrganaSys, we tested for the presence of MAP2 (Microtubule Associated Protein 2), known as a neuronal marker. It's essentially used for identifying neurons because it's expressed primarily in dendrites and is associated with neural growth, axonal regeneration and synaptic plasticity.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Targetting MAP2 helps researchers distinguise neurons from other cell types and recognise features like synaptic connections and dendritic branching.
                </p>
              </div>

              {/* Immunofluorescent Staining */}
              <div className="pt-6 border-t border-slate-700/50">
                <h2 className="text-3xl font-display text-white mb-4">
                  Immunofluorescent Staining
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  In our experiments we use something called 'immunofluorescent staining' to help visualise MAP2 in our neural cells. We combined the staining with DAPI, a standard nuclear market that highlights all cell nuclei, which allows us to confirm the presence of neurons.
                </p>
              </div>

              {/* Image 3 */}
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="/articleimage2.jpg" 
                  alt="Immunofluorescent Staining Results" 
                  className="w-full h-auto"
                />
                <p className="text-sm text-gray-400 text-center mt-2 italic">
                  Figure 3: Immunofluorescent staining showing MAP2 and DAPI markers confirming neuronal presence
                </p>
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

export default RealNeuronsLabArticle;

