import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Camera, DollarSign, Send, Brain } from 'lucide-react';

const ContactSection = () => {
  const [activeTab, setActiveTab] = useState('researchers');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    investmentRange: '',
    amount: ''
  });

  const contactTypes = [
    {
      id: 'researchers',
      title: 'Researchers',
      description: 'Apply for free early access to test our technology yourself',
      icon: Users,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'media',
      title: 'Media',
      description: 'Find out more details to create your article or to plan your interview',
      icon: Camera,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'investors',
      title: 'Investors',
      description: 'This is your opportunity to get in early on a clean, next level technology',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const investmentRanges = [
    '$100', '$1000', '$10k', '$25k', '$50k', '$100k', '$1M', '$10M'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact-section" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Brain className="h-12 w-12 text-blue-400" />
            </motion.div>
          </motion.div>
          <h2 className="contact-title text-4xl md:text-5xl font-bold text-white mb-8 tracking-wider">
            CONTACT
          </h2>
          <p className="contact-desc text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Join us on this incredible journey!
          </p>
        </motion.div>

        {/* Contact Type Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contactTypes.map((type) => (
            <motion.button
              key={type.id}
              onClick={() => setActiveTab(type.id)}
              className={`contact-circle flex items-center space-x-3 px-6 py-4 rounded-lg transition-all duration-300 ${
                activeTab === type.id 
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white' 
                  : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <type.icon className="w-5 h-5" />
              <span className="font-medium">{type.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div 
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {contactTypes.find(t => t.id === activeTab)?.title}
              </h3>
              <p className="text-gray-300">
                {contactTypes.find(t => t.id === activeTab)?.description}
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {activeTab === 'investors' && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Investment Range
                    </label>
                    <select
                      name="investmentRange"
                      value={formData.investmentRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    >
                      <option value="">Select range</option>
                      <option value="institutional">Institutional Investment</option>
                      <option value="private">Private Investment</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Amount
                    </label>
                    <select
                      name="amount"
                      value={formData.amount}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
                    >
                      <option value="">Select amount</option>
                      {investmentRanges.map((amount) => (
                        <option key={amount} value={amount}>{amount}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 resize-none"
                  placeholder="Tell us more about your interest..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Send className="w-5 h-5" />
                <span>Send</span>
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
