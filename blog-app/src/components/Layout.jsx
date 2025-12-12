import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Sun, Moon, Home, User, Mail, 
  Github, Linkedin, ArrowUp, FolderKanban
} from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
      setShowScrollTop(scrollTop > 400)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Handle keyboard navigation for mobile menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navLinks = [
    { to: '/', label: 'Ana Sayfa', icon: Home },
    { to: '/projects', label: 'Projelerim', icon: FolderKanban },
    { to: '/about', label: 'Hakkımda', icon: User },
    { to: '/contact', label: 'İletişim', icon: Mail },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-canvas dark:bg-canvas-dark transition-colors duration-300">
      {/* Skip to Content Link - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Ana içeriğe atla
      </a>

      {/* Reading Progress Bar */}
      <div 
        className="reading-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-label="Okuma ilerlemesi"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-gray-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded-xl focus-visible:ring-offset-2 dark:focus-visible:ring-offset-canvas-dark"
            >
              <img 
                src="/logo.png" 
                alt="Resul Demir Logo" 
                className="w-10 h-10 rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <div className="hidden sm:block">
                <h1 className="font-display text-xl font-bold text-text-primary dark:text-text-dark-primary">
                  Resul Demir
                </h1>
                <p className="text-xs text-text-muted dark:text-text-dark-muted">
                  Blog & Portfolio
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Ana navigasyon">
              {navLinks.map((link) => {
                const Icon = link.icon
                const isActive = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`nav-link flex items-center gap-2 ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon size={18} aria-hidden="true" />
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-text-secondary dark:text-text-dark-secondary hover:text-primary-500 dark:hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-canvas-dark"
                aria-label={theme === 'light' ? 'Koyu moda geç' : 'Açık moda geç'}
                aria-pressed={theme === 'dark'}
              >
                <AnimatePresence mode="wait">
                  {theme === 'light' ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Moon size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sun size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* Social Links (Desktop) */}
              <div className="hidden md:flex items-center gap-1">
                <a
                  href="https://github.com/resuldemir123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 text-text-secondary dark:text-text-dark-secondary hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-canvas-dark"
                  aria-label="GitHub profilini ziyaret et (yeni sekmede açılır)"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/resul-demir-3841912a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-700 text-text-secondary dark:text-text-dark-secondary hover:text-secondary-500 dark:hover:text-secondary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-canvas-dark"
                  aria-label="LinkedIn profilini ziyaret et (yeni sekmede açılır)"
                >
                  <Linkedin size={20} />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-text-secondary dark:text-text-dark-secondary focus-visible:ring-2 focus-visible:ring-primary-500"
                aria-label={isMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200/50 dark:border-slate-700/50"
              role="navigation"
              aria-label="Mobil navigasyon"
            >
              <nav className="px-4 py-4 space-y-1">
                {navLinks.map((link) => {
                  const Icon = link.icon
                  const isActive = location.pathname === link.to
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 ${
                        isActive 
                          ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                          : 'hover:bg-gray-100 dark:hover:bg-slate-700'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <Icon size={20} aria-hidden="true" />
                      {link.label}
                    </Link>
                  )
                })}
                
                {/* Social Links (Mobile) */}
                <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-slate-700 mt-4">
                  <a
                    href="https://github.com/resuldemir123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-700 text-text-secondary dark:text-text-dark-secondary focus-visible:ring-2 focus-visible:ring-primary-500"
                    aria-label="GitHub profilini ziyaret et (yeni sekmede açılır)"
                  >
                    <Github size={20} aria-hidden="true" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/resul-demir-3841912a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gray-100 dark:bg-slate-700 text-text-secondary dark:text-text-dark-secondary focus-visible:ring-2 focus-visible:ring-primary-500"
                    aria-label="LinkedIn profilini ziyaret et (yeni sekmede açılır)"
                  >
                    <Linkedin size={20} aria-hidden="true" />
                    LinkedIn
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main id="main-content" className="flex-1" tabIndex={-1}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700 mt-auto" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Resul Demir Logo" 
                  className="w-10 h-10 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-display font-bold">Resul Demir</h3>
                  <p className="text-sm text-text-muted dark:text-text-dark-muted">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <p className="text-text-secondary dark:text-text-dark-secondary text-sm">
                Web teknolojileri ve yazılım geliştirme üzerine yazılar ve projeler.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-sm" role="list">
                {navLinks.map(link => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="text-text-secondary dark:text-text-dark-secondary hover:text-primary-500 dark:hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">İletişim</h4>
              <ul className="space-y-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                <li>
                  <a 
                    href="mailto:resuldemir.dev@gmail.com" 
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded"
                  >
                    resuldemir.dev@gmail.com
                  </a>
                </li>
                <li className="flex gap-4 pt-2">
                  <a
                    href="https://github.com/resuldemir123"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded"
                    aria-label="GitHub profilini ziyaret et (yeni sekmede açılır)"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/resul-demir-3841912a8/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded"
                    aria-label="LinkedIn profilini ziyaret et (yeni sekmede açılır)"
                  >
                    <Linkedin size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 dark:border-slate-700 mt-8 pt-8 text-center text-sm text-text-muted dark:text-text-dark-muted">
            <p>© {new Date().getFullYear()} Resul Demir. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-primary-500 text-white shadow-lg hover:bg-primary-600 transition-colors z-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500"
            aria-label="Sayfanın başına dön"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
