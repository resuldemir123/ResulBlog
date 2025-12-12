import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Filter, TrendingUp, Sparkles, ArrowRight, Mail, Github, Linkedin } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import SEOHead from '../components/SEOHead'
import { blogPosts, categories, authorInfo } from '../data/posts'
import { sendSubscriberNotification } from '../services/emailService'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [email, setEmail] = useState('')
  const [subscribeStatus, setSubscribeStatus] = useState(null)

  // Filtreleme ve sıralama
  const filteredPosts = useMemo(() => {
    let posts = [...blogPosts]

    // Arama filtresi
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      posts = posts.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }

    // Kategori filtresi
    if (selectedCategory !== 'all') {
      posts = posts.filter(post => post.category === selectedCategory)
    }

    // Sıralama
    switch (sortBy) {
      case 'popular':
        posts.sort((a, b) => b.views - a.views)
        break
      case 'oldest':
        posts.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
        break
      default: // newest
        posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    }

    return posts
  }, [searchQuery, selectedCategory, sortBy])

  // Öne çıkan yazı (en çok görüntülenen)
  const featuredPost = useMemo(() => {
    return [...blogPosts].sort((a, b) => b.views - a.views)[0]
  }, [])

  // Newsletter subscribe
  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!email.trim()) return

    try {
      await sendSubscriberNotification({ email })
      setSubscribeStatus({ type: 'success', message: 'Başarıyla abone oldunuz!' })
      setEmail('')
    } catch {
      setSubscribeStatus({ type: 'error', message: 'Bir hata oluştu. Lütfen tekrar deneyin.' })
    }
  }

  return (
    <>
      <SEOHead
        title="Ana Sayfa"
        description="Resul Demir'in yazılım geliştirme, web teknolojileri ve kişisel projeler hakkındaki blog yazıları."
        keywords={['blog', 'yazılım', 'React', 'JavaScript', 'web geliştirme', 'Resul Demir']}
        canonicalUrl="/"
        schemaType="WebSite"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary-300 dark:text-primary-700" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Image - Mobile */}
              <div className="lg:hidden mb-6 flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 p-1 shadow-2xl">
                    <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-white/50 dark:ring-slate-600/50">
                      <img 
                        src="/resul.png" 
                        alt="Resul Demir" 
                        className="w-full h-full object-cover object-top scale-110"
                        style={{ objectPosition: 'center 15%' }}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-3 border-white dark:border-slate-800 flex items-center justify-center shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="text-primary-500" size={20} />
                <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                  Yazılım & Teknoloji Blogu
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Merhaba, ben{' '}
                <span className="gradient-text">Resul Demir</span>
              </h1>
              
              <p className="text-lg md:text-xl text-text-secondary dark:text-text-dark-secondary mb-6 max-w-xl">
                {authorInfo.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 mb-8">
                <a
                  href="https://github.com/resuldemir123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github size={18} />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/resul-demir-3841912a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white rounded-xl hover:bg-[#084d92] transition-colors"
                >
                  <Linkedin size={18} />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  <span>Hakkımda</span>
                  <ArrowRight size={18} />
                </Link>
                <a href="#posts" className="btn-outline">
                  Yazıları Keşfet
                </a>
              </div>
            </motion.div>

            {/* Profile Image & Featured Post */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Large Profile Image - Desktop */}
              <div className="hidden lg:flex justify-center mb-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="w-52 h-52 rounded-2xl bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 p-1.5 shadow-2xl">
                    <div className="w-full h-full rounded-xl overflow-hidden ring-4 ring-white/30 dark:ring-slate-600/30">
                      <img 
                        src="/resul.png" 
                        alt="Resul Demir" 
                        className="w-full h-full object-cover object-top scale-105"
                        style={{ objectPosition: 'center 20%' }}
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-xl border-4 border-white dark:border-slate-800 flex items-center justify-center shadow-xl">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-500/20 rounded-full blur-2xl" />
              
              <div className="relative card overflow-hidden">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <TrendingUp className="text-primary-500" size={16} />
                  <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-100 dark:bg-primary-900/30 px-2 py-1 rounded-full">
                    Öne Çıkan
                  </span>
                </div>
                
                <img
                  src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  className="w-full aspect-video object-cover"
                />
                
                <div className="p-6">
                  <span className="tag mb-3">{featuredPost.category}</span>
                  <h3 className="text-xl font-semibold mb-2">
                    <Link to={`/post/${featuredPost.slug}`} className="hover:text-primary-500 transition-colors">
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-text-secondary dark:text-text-dark-secondary text-sm line-clamp-2 mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <Link
                    to={`/post/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-primary-500 font-medium text-sm"
                  >
                    Devamını Oku
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="posts" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Son Yazılar
            </h2>
            <p className="text-text-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
              Yazılım geliştirme, web teknolojileri ve kişisel projelerim hakkında yazılar
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
              <input
                type="text"
                placeholder="Yazılarda ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input pl-12"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-text-muted" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="input w-auto"
              >
                <option value="all">Tüm Kategoriler</option>
                {categories.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input w-auto"
            >
              <option value="newest">En Yeni</option>
              <option value="popular">En Popüler</option>
              <option value="oldest">En Eski</option>
            </select>
          </motion.div>

          {/* Category Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-8"
          >
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              Tümü ({blogPosts.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat.name
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-text-muted dark:text-text-dark-muted text-lg">
                Arama kriterlerinize uygun yazı bulunamadı.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Mail className="mx-auto mb-4 text-white/80" size={40} />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Yeni Yazılardan Haberdar Olun
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Haftada bir yayınlanan yazılarımı kaçırmayın. Spam yok, sadece değerli içerik.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-white/20 backdrop-blur-sm text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button type="submit" className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                Abone Ol
              </button>
            </form>

            {subscribeStatus && (
              <p className={`mt-4 text-sm ${subscribeStatus.type === 'success' ? 'text-green-200' : 'text-red-200'}`}>
                {subscribeStatus.message}
              </p>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}

