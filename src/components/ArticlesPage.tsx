import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './Header';
import { articles, categories } from '../data/articles';

const ArticlesPage = () => {
  const [email, setEmail] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  // Filter articles based on selected category
  const filteredArticles = useMemo(() => {
    if (!selectedCategory) return articles;
    return articles.filter(article => 
      article.categories.some(cat => 
        cat.toLowerCase() === selectedCategory.toLowerCase()
      )
    );
  }, [selectedCategory]);

  // Update category counts dynamically
  const dynamicCategories = useMemo(() => {
    return categories.map(category => ({
      ...category,
      count: articles.filter(article =>
        article.categories.some(cat =>
          cat.toLowerCase() === category.name.toLowerCase()
        )
      ).length
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Header />
      
      {/* Main Content */}
      <div className="pt-20 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Page Title */}
              <motion.div 
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  NEWS & ARTICLES
                </h1>
                <p className="text-xl text-gray-300">
                  Stay up to date with our progress.
                </p>
              </motion.div>

              {/* Active Filter Display */}
              {selectedCategory && (
                <motion.div 
                  className="mb-8 flex items-center gap-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-gray-300">
                    Filtered by: <span className="text-blue-400 font-semibold">{selectedCategory}</span>
                  </span>
                  <motion.button
                    onClick={() => setSelectedCategory(null)}
                    className="text-sm text-gray-400 hover:text-white transition-colors underline"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Clear filter
                  </motion.button>
                </motion.div>
              )}

              {/* Article Cards */}
              <div className="space-y-8">
                {filteredArticles.map((article, index) => (
                  <motion.article 
                    key={article.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  >
                    {/* Article Image */}
                    <Link to={article.link}>
                      <div className="relative h-64 md:h-80 overflow-hidden">
                        {article.image.startsWith('gradient-') ? (
                          <div className={`w-full h-full bg-gradient-to-br ${
                            article.image === 'gradient-orange' 
                              ? 'from-orange-400 via-yellow-500 to-red-500'
                              : 'from-blue-400 via-purple-500 to-pink-500'
                          }`}>
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-white text-center">
                                <div className="w-32 h-32 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                  <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                                </div>
                                <p className="text-sm opacity-80">Neural Network Visualization</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        )}
                      </div>
                    </Link>

                    {/* Article Content */}
                    <div className="p-8">
                      {/* Title */}
                      <Link to={article.link}>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                          {article.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {article.excerpt}
                      </p>

                      {/* Categories */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.categories.map((category) => (
                          <span
                            key={category}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      {/* Social Icons */}
                      <div className="flex items-center space-x-4">
                        <motion.button
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Facebook className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          className="text-gray-400 hover:text-blue-400 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Twitter className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          className="text-gray-400 hover:text-blue-700 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Linkedin className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Mail className="w-5 h-5" />
                        </motion.button>
                      </div>

                        {/* Continue Reading */}
                        <Link to={article.link}>
                          <motion.span
                            className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer inline-block"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            Continue reading
                          </motion.span>
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}

                {/* No articles found */}
                {filteredArticles.length === 0 && (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-gray-400 text-lg">No articles found in this category.</p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                
                {/* Subscription Form */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Subscribe today
                  </h3>
                  <p className="text-gray-600 mb-6">
                    to be updated about our progress in articles sent directly to your inbox.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <motion.button
                      type="submit"
                      className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-medium transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      Submit
                    </motion.button>
                  </form>
                  
                  <p className="text-xs text-gray-500 mt-4">
                    We do not spam. By signing up, you agree to our{' '}
                    <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
                  </p>
                </motion.div>

                {/* Explore Topics */}
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Explore topics
                  </h3>
                  
                  <div className="space-y-3">
                    {dynamicCategories.map((category, index) => (
                      <motion.button
                        key={category.id}
                        onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
                        className={`w-full flex items-center justify-between transition-colors group ${
                          selectedCategory === category.name
                            ? 'text-blue-600 font-semibold'
                            : 'text-gray-600 hover:text-blue-600'
                        }`}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <div className="flex items-center space-x-3">
                          <ChevronRight className={`w-4 h-4 transition-colors ${
                            selectedCategory === category.name
                              ? 'text-blue-600'
                              : 'text-gray-400 group-hover:text-blue-600'
                          }`} />
                          <span className="text-left">{category.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">({category.count})</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;
