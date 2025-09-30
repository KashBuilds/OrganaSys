import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';

const NeuroplasticityArticle = () => {
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
              Neuroplasticity
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
              src="/article 5.png" 
              alt="Neuroplasticity" 
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
                  Neuroplasticity refers to the brain's capacity to reorganize its wiring. This process can involve three things:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-4">
                  <li><span className="font-semibold text-white">Neurogenesis</span> - birth of new neurons</li>
                  <li><span className="font-semibold text-white">Synaptogenesis</span> - formation of additional synapses</li>
                  <li><span className="font-semibold text-white">Increasing / decreasing strength</span> of existing synapses</li>
                </ul>
              </div>

              {/* Section 1 */}
              <div className="pt-6 border-t border-slate-700/50">
                <h2 className="text-3xl font-display text-white mb-4">
                  Modulating Existing Synapses
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Adjustments in existing synapses occur in two main ways:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-display text-blue-400 mb-3">
                      Structural changes:
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-2">
                      Membranes that make up synapses include:
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Channels for controlled movement of molecules (i.e. calcium)</li>
                      <li>Receptors that activate signaling cascades when stimulated</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-display text-blue-400 mb-3">
                      Signal‐pathway changes:
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      These have an effect on how communication take place, including the amount and the breakdown of neurotransmitters.
                    </p>
                  </div>
                </div>

                {/* Image 1 - After Modulating Existing Synapses */}
                <div className="mt-8 rounded-xl overflow-hidden">
                  <img 
                    src="/article 5.png" 
                    alt="Synaptic Structure Visualization" 
                    className="w-full h-auto"
                  />
                  <p className="text-sm text-gray-400 text-center mt-2 italic">
                    Figure 1: Synaptic structure showing neurotransmitter release and receptor interaction
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="pt-6 border-t border-slate-700/50">
                <h2 className="text-3xl font-display text-white mb-4">
                  What Stimulates Neuroplasticity?
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Numerous sensory inputs may trigger neuroplastic changes in a live brain. Neural connections can be reshaped by novel experiences, such as reading, studying, confronting obstacles, enhancing physical abilities, along with emotional stimuli.
                </p>
              </div>

              {/* Section 3 */}
              <div className="pt-6 border-t border-slate-700/50">
                <h2 className="text-3xl font-display text-white mb-4">
                  In Vitro Neuroplasticity Induction
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  In vitro, in well regulated environments like brain slices, organoids, or cultured neurones, neuroplasticity can also be developed. Electrical or chemical stimuli may trigger changes in these separate structures.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Researchers make use of electrodes to stimulate neurones because the vitro systems lacks the intricacy of a whole living organism (such as sensory input loops).
                </p>
              </div>

              {/* Section 4 */}
              <div className="pt-6 border-t border-slate-700/50">
                <h2 className="text-3xl font-display text-white mb-4">
                  Slices from a Brain vs Individual Neurones
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We can see how networks react in controlled settings when we deal with brain slices (pieces of actual tissue with several interconnected neurones). Methods like patch clamping, where near every variable is controlled, researchers can examine individual neurones.
                </p>

                {/* Image 2 - After Slices from a Brain */}
                <div className="mt-8 rounded-xl overflow-hidden">
                  <img 
                    src="/neural-3.webp" 
                    alt="Neural Network Comparison" 
                    className="w-full h-auto"
                  />
                  <p className="text-sm text-gray-400 text-center mt-2 italic">
                    Figure 2: Comparison of brain slices and individual neuron analysis methods
                  </p>
                </div>
              </div>

              {/* Section 5 - OrganaSys */}
              <div className="pt-6 border-t border-slate-700/50">
                <h2 className="text-3xl font-display text-blue-400 mb-4">
                  What OrganaSys Does
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  OrganaSys operates between the extremes of brain slices and single neurons. They use neurospheres, which involves having around 10,000 neurons and connecting it to 8 electrodes. With this setup, they can send electrical signals and record neuron responses.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The results show partial activity and not the complete network due to each electrode only connecting to a few neurons. Our aim is not to find all neuronal connections but rather to produce functional changes in the neurosphere's electrical behaviour.
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

export default NeuroplasticityArticle;

