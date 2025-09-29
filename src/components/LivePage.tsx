import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Activity, Zap, Cpu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';

const LivePage = () => {
  const [selectedMEA, setSelectedMEA] = useState(3);
  const [rangeUV, setRangeUV] = useState('100');
  const [absoluteIndex, setAbsoluteIndex] = useState(false);
  const [waveformData, setWaveformData] = useState([]);

  // Generate static waveform patterns that change every few seconds
  useEffect(() => {
    const generateStaticPattern = () => {
      const data = [];
      for (let module = 0; module < 4; module++) {
        const moduleData = [];
        // Adjust bar count based on MEA selection and UV range
        const baseBarCount = 50;
        const meaMultiplier = selectedMEA === 1 ? 0.7 : selectedMEA === 2 ? 0.8 : selectedMEA === 3 ? 1.0 : 1.2;
        const uvMultiplier = parseInt(rangeUV) <= 100 ? 1.5 : parseInt(rangeUV) <= 500 ? 1.0 : 0.6;
        const barCount = Math.floor(baseBarCount * meaMultiplier * uvMultiplier);
        
        for (let bar = 0; bar < barCount; bar++) {
          moduleData.push({
            height: Math.random() * 16 + 2, // 2-18px height
            opacity: Math.random() * 0.4 + 0.6 // 0.6-1.0 opacity
          });
        }
        data.push(moduleData);
      }
      setWaveformData(data);
    };

    generateStaticPattern(); // Initial pattern
    const interval = setInterval(generateStaticPattern, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [selectedMEA, rangeUV]);

  const rangeOptions = ['50', '100', '200', '500', '1000', '2000'];
  const meaImages = ['/MEA1.jpg', '/MEA2.jpg', '/MEA3.jpg', '/MEA4.jpg'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />

      {/* Main Content */}
      <div className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <motion.h1 
            className="text-6xl md:text-8xl font-display text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            LIVE VIEW
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-xl md:text-2xl font-body text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            See our neuron accelerator working in real time
          </motion.p>

          {/* Description */}
          <motion.div 
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <p className="text-lg font-body text-gray-400 leading-relaxed mb-4">
              This is an opportunity to observe our biochips functioning in real time. Each chart depicts a single biochip containing one neurosphere inside a Multi Electrode Array (MEA). The numbers on the top left represent the electrode numbers on a single biochip, while the electrophysiological signals on the right represent the live neuronal activity of the neurosphere for the associated electrode.
            </p>
            <p className="text-sm font-body text-gray-500">
              The MEAs utilised were from HEPIA, HES-SO, the Tissue Engineering Laboratory, and Prof. James Allen
            </p>
          </motion.div>

          {/* MEA Visualization Section */}
          <motion.div
            className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h3 className="text-2xl font-display text-white mb-6">Multi Electrode Array (MEA) Visualization</h3>
            
            {/* Microfluidic Chip Image */}
            <div className="mb-8">
              <div className="bg-slate-900 rounded-lg p-8 border border-slate-700/50">
                <motion.div 
                  className="w-full h-64 rounded-lg overflow-hidden border border-slate-600"
                  key={selectedMEA}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={meaImages[selectedMEA - 1]} 
                    alt={`MEA ${selectedMEA} Chip`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center"
                    style={{ display: 'none' }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-blue-500/20 rounded-lg flex items-center justify-center">
                        <Brain className="w-8 h-8 text-blue-400" />
                      </div>
                      <p className="text-gray-400 font-body">MEA {selectedMEA} Image</p>
                      <p className="text-sm text-gray-500">Loading chip visualization...</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <label className="text-gray-300 font-body">Range uV:</label>
                <select 
                  value={rangeUV}
                  onChange={(e) => setRangeUV(e.target.value)}
                  className="bg-white text-gray-800 px-3 py-2 rounded border border-gray-400"
                >
                  {rangeOptions.map(option => (
                    <option key={option} value={option}>+/-{option}uV</option>
                  ))}
                </select>
              </div>
              
              <div className="flex space-x-1">
                {[1, 2, 3, 4].map((meaNum) => (
                  <button
                    key={meaNum}
                    onClick={() => setSelectedMEA(meaNum)}
                    className={`px-4 py-2 rounded font-body text-sm transition-colors ${
                      selectedMEA === meaNum
                        ? 'bg-gray-600 text-white' 
                        : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                    }`}
                  >
                    MEA {meaNum}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center space-x-2">
                <label className="text-gray-300 font-body">Absolute Index:</label>
                <input 
                  type="checkbox" 
                  checked={absoluteIndex}
                  onChange={(e) => setAbsoluteIndex(e.target.checked)}
                  className="w-4 h-4 text-blue-600 bg-white border-gray-400 rounded" 
                />
              </div>
            </div>

            {/* Electrode Grids and Waveforms */}
            <div className="space-y-4">
              {[0, 1, 2, 3].map((module) => (
                <motion.div
                  key={module}
                  className="bg-gray-100 rounded-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + module * 0.1 }}
                >
                  <div className="flex gap-6">
                    {/* Electrode Grid */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 relative">
                        {/* Top Row: 00, 07 */}
                        <div className="absolute top-0 left-0 w-6 h-6 bg-white border border-black flex items-center justify-center text-xs font-mono text-black">
                          {absoluteIndex 
                            ? ((module * 8) + 64).toString().padStart(2, '0')
                            : (module * 8).toString().padStart(2, '0')
                          }
                        </div>
                        <div className="absolute top-0 right-0 w-6 h-6 bg-white border border-black flex items-center justify-center text-xs font-mono text-black">
                          {absoluteIndex 
                            ? ((module * 8 + 7) + 64).toString().padStart(2, '0')
                            : (module * 8 + 7).toString().padStart(2, '0')
                          }
                        </div>
                        
                        {/* Middle Row: 01, 02, 05, 06 */}
                        <div className="absolute top-1/2 left-0 w-6 h-6 bg-white border border-black flex items-center justify-center text-xs font-mono text-black transform -translate-y-1/2">
                          {absoluteIndex 
                            ? ((module * 8 + 1) + 64).toString().padStart(2, '0')
                            : (module * 8 + 1).toString().padStart(2, '0')
                          }
                        </div>
                        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white border border-black flex items-center justify-center text-xs font-mono text-black transform -translate-y-1/2 -translate-x-1/2">
                          {absoluteIndex 
                            ? ((module * 8 + 2) + 64).toString().padStart(2, '0')
                            : (module * 8 + 2).toString().padStart(2, '0')
                          }
                        </div>
                        <div className="absolute top-1/2 right-1/2 w-6 h-6 bg-white border border-black flex items-center justify-center text-xs font-mono text-black transform -translate-y-1/2 translate-x-1/2">
                          {absoluteIndex 
                            ? ((module * 8 + 5) + 64).toString().padStart(2, '0')
                            : (module * 8 + 5).toString().padStart(2, '0')
                          }
                        </div>
                        <div className="absolute top-1/2 right-0 w-6 h-6 bg-white border border-black flex items-center justify-center text-xs font-mono text-black transform -translate-y-1/2">
                          {absoluteIndex 
                            ? ((module * 8 + 6) + 64).toString().padStart(2, '0')
                            : (module * 8 + 6).toString().padStart(2, '0')
                          }
                        </div>
                        
                        {/* Bottom Row: 03, 04 */}
                        <div className="absolute bottom-0 left-1/2 w-6 h-6 bg-white border border-black flex items-center justify-center text-xs font-mono text-black transform -translate-x-1/2">
                          {absoluteIndex 
                            ? ((module * 8 + 3) + 64).toString().padStart(2, '0')
                            : (module * 8 + 3).toString().padStart(2, '0')
                          }
                        </div>
                        <div className="absolute bottom-0 right-1/2 w-6 h-6 bg-white border border-black flex items-center justify-center text-xs font-mono text-black transform translate-x-1/2">
                          {absoluteIndex 
                            ? ((module * 8 + 4) + 64).toString().padStart(2, '0')
                            : (module * 8 + 4).toString().padStart(2, '0')
                          }
                        </div>
                      </div>
                    </div>

                    {/* Waveform Plots */}
                    <div className="flex-1">
                      <div className="bg-white border border-black p-4 h-32">
                        <div className="h-full flex flex-col space-y-1">
                          {/* 3 rows of waveforms */}
                          {[0, 1, 2].map((row) => (
                            <div key={row} className="flex-1 relative">
                              {/* Red baseline */}
                              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-500 transform -translate-y-1/2"></div>
                              
                              {/* Waveform segments */}
                              <div className="flex space-x-1 h-full">
                                {Array.from({ length: row === 1 ? 3 : 2 }, (_, segment) => (
                                  <div key={segment} className="flex-1 relative">
                                    <div className="flex h-full items-center justify-between px-1">
                                      {Array.from({ length: waveformData[module]?.length || 50 }, (_, i) => {
                                        const barData = waveformData[module]?.[i] || { height: 2, opacity: 0.6 };
                                        // Adjust bar width based on density
                                        const barWidth = waveformData[module]?.length > 40 ? 'w-px' : waveformData[module]?.length > 30 ? 'w-0.5' : 'w-1';
                                        return (
                                          <motion.div
                                            key={i}
                                            className={`${barWidth} bg-black`}
                                            animate={{
                                              height: `${barData.height}px`,
                                              opacity: barData.opacity
                                            }}
                                            transition={{
                                              duration: 0.8,
                                              ease: "easeOut"
                                            }}
                                          />
                                        );
                                      })}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-2 text-sm text-gray-600 font-mono">
                        1,092.3 ms
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default LivePage;
