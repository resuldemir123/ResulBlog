import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Calendar, Clock, Eye, ArrowLeft, Share2, 
  Twitter, Linkedin, Link2, Check, Tag, User, Github,
  Type, Contrast, Accessibility, Settings2
} from 'lucide-react'
import { blogPosts } from '../data/posts'
import { useCache } from '../context/CacheContext'
import SEOHead from '../components/SEOHead'
import CommentSection from '../components/CommentSection'
import RelatedPosts from '../components/RelatedPosts'

// Reading Mode types
const READING_MODES = {
  default: {
    id: 'default',
    label: 'Varsayılan',
    icon: Type,
    description: 'Standart okuma deneyimi'
  },
  highContrast: {
    id: 'highContrast',
    label: 'Yüksek Kontrast',
    icon: Contrast,
    description: 'Göz yorgunluğunu azaltır'
  },
  dyslexiaFriendly: {
    id: 'dyslexiaFriendly',
    label: 'Disleksi Dostu',
    icon: Accessibility,
    description: 'OpenDyslexic font ile kolay okuma'
  }
}

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { getFromCache, setToCache } = useCache()
  const [post, setPost] = useState(null)
  const [copied, setCopied] = useState(false)
  const [readingMode, setReadingMode] = useState('default')
  const [showReadingSettings, setShowReadingSettings] = useState(false)

  useEffect(() => {
    // Önce cache'den kontrol et
    const cachedPost = getFromCache(`post-${slug}`)
    if (cachedPost) {
      setPost(cachedPost)
      return
    }

    // Cache'de yoksa posts'tan bul
    const foundPost = blogPosts.find(p => p.slug === slug)
    if (foundPost) {
      setPost(foundPost)
      setToCache(`post-${slug}`, foundPost)
    } else {
      navigate('/404')
    }
  }, [slug, getFromCache, setToCache, navigate])

  // Load saved reading mode preference
  useEffect(() => {
    const savedMode = localStorage.getItem('readingMode')
    if (savedMode && READING_MODES[savedMode]) {
      setReadingMode(savedMode)
    }
  }, [])

  // Save reading mode preference
  const handleReadingModeChange = (mode) => {
    setReadingMode(mode)
    localStorage.setItem('readingMode', mode)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleShare = async (platform) => {
    const url = window.location.href
    const text = post.title

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'copy':
        await navigator.clipboard.writeText(url)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
        break
    }
  }

  // Get reading mode classes
  const getReadingModeClasses = () => {
    switch (readingMode) {
      case 'highContrast':
        return 'high-contrast'
      case 'dyslexiaFriendly':
        return 'dyslexia-friendly'
      default:
        return ''
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full" />
      </div>
    )
  }

  return (
    <>
      <SEOHead
        title={post.title}
        description={post.seo?.metaDescription || post.excerpt}
        keywords={post.seo?.keywords || post.tags}
        canonicalUrl={`/post/${post.slug}`}
        ogImage={post.heroImage}
        author={post.author}
        publishedTime={post.publishedAt}
        category={post.category}
        tags={post.tags}
      />

      <article className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 ${getReadingModeClasses()}`}>
        {/* Back Button & Reading Mode Selector */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 flex flex-wrap items-center justify-between gap-4"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-muted dark:text-text-dark-muted hover:text-primary-500 dark:hover:text-primary-400 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded-lg px-2 py-1 -ml-2"
          >
            <ArrowLeft size={18} />
            Ana Sayfaya Dön
          </Link>

          {/* Reading Mode Selector */}
          <div className="relative">
            <button
              onClick={() => setShowReadingSettings(!showReadingSettings)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 dark:bg-slate-700 text-text-secondary dark:text-text-dark-secondary hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label="Okuma modu ayarları"
              aria-expanded={showReadingSettings}
              aria-haspopup="true"
            >
              <Settings2 size={18} />
              <span className="hidden sm:inline">Okuma Modu</span>
            </button>

            {/* Dropdown */}
            {showReadingSettings && (
              <>
                {/* Backdrop */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setShowReadingSettings(false)}
                  aria-hidden="true"
                />
                
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  className="absolute right-0 top-full mt-2 w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-gray-200 dark:border-slate-700 z-50 overflow-hidden"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="p-4 border-b border-gray-200 dark:border-slate-700">
                    <h3 className="font-semibold text-text-primary dark:text-text-dark-primary">
                      Okuma Modu Seç
                    </h3>
                    <p className="text-sm text-text-muted dark:text-text-dark-muted">
                      Size en uygun deneyimi seçin
                    </p>
                  </div>
                  
                  <div className="p-2">
                    {Object.values(READING_MODES).map((mode) => {
                      const Icon = mode.icon
                      const isActive = readingMode === mode.id
                      
                      return (
                        <button
                          key={mode.id}
                          onClick={() => {
                            handleReadingModeChange(mode.id)
                            setShowReadingSettings(false)
                          }}
                          className={`w-full flex items-start gap-3 p-3 rounded-xl transition-all text-left ${
                            isActive 
                              ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' 
                              : 'hover:bg-gray-100 dark:hover:bg-slate-700'
                          }`}
                          role="menuitem"
                          aria-current={isActive ? 'true' : 'false'}
                        >
                          <div className={`p-2 rounded-lg ${
                            isActive 
                              ? 'bg-primary-100 dark:bg-primary-800/30' 
                              : 'bg-gray-100 dark:bg-slate-700'
                          }`}>
                            <Icon size={20} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{mode.label}</p>
                            <p className="text-sm text-text-muted dark:text-text-dark-muted">
                              {mode.description}
                            </p>
                          </div>
                          {isActive && (
                            <Check size={18} className="text-primary-500 mt-2" />
                          )}
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          {/* Category & New Badge */}
          <div className="flex items-center gap-3 mb-4">
            <Link
              to={`/category/${post.category}`}
              className="tag hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500"
            >
              {post.category}
            </Link>
            {post.isNew && <span className="tag-new">Yeni</span>}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-text-secondary dark:text-text-dark-secondary">
            <div className="flex items-center gap-2">
              <User size={18} aria-hidden="true" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} aria-hidden="true" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} aria-hidden="true" />
              <span>{post.readingTime} dk okuma</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye size={18} aria-hidden="true" />
              <span>{post.views.toLocaleString()} görüntülenme</span>
            </div>
          </div>
        </motion.header>

        {/* Hero Image */}
        <motion.figure
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-10 rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full aspect-video object-cover"
            loading="lazy"
          />
        </motion.figure>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg dark:prose-invert max-w-none mb-10"
        >
          <div 
            className="blog-content text-text-primary dark:text-text-dark-primary"
            dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
          />
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center gap-3 mb-10 pb-10 border-b border-gray-200 dark:border-slate-700"
          role="list"
          aria-label="Etiketler"
        >
          <Tag size={20} className="text-text-muted" aria-hidden="true" />
          {post.tags.map(tag => (
            <span
              key={tag}
              role="listitem"
              className="px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-slate-600 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-500"
              tabIndex={0}
            >
              #{tag}
            </span>
          ))}
        </motion.div>

        {/* Share */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between flex-wrap gap-4 mb-10"
        >
          <div className="flex items-center gap-2">
            <Share2 size={20} className="text-text-muted" aria-hidden="true" />
            <span className="font-medium">Paylaş:</span>
          </div>
          
          <div className="flex items-center gap-2" role="group" aria-label="Paylaşım seçenekleri">
            <button
              onClick={() => handleShare('twitter')}
              className="p-3 rounded-xl bg-gray-100 dark:bg-slate-700 hover:bg-[#1DA1F2] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label="Twitter'da paylaş"
            >
              <Twitter size={20} />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-3 rounded-xl bg-gray-100 dark:bg-slate-700 hover:bg-[#0A66C2] hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label="LinkedIn'de paylaş"
            >
              <Linkedin size={20} />
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="p-3 rounded-xl bg-gray-100 dark:bg-slate-700 hover:bg-primary-500 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
              aria-label="Linki kopyala"
            >
              {copied ? <Check size={20} /> : <Link2 size={20} />}
            </button>
          </div>
        </motion.div>

        {/* Author Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="card p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-10"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-0.5 flex-shrink-0 shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-white dark:ring-slate-700">
              <img 
                src="/resul.png" 
                alt="Resul Demir" 
                className="w-full h-full object-cover object-top scale-110"
                style={{ objectPosition: 'center 15%' }}
                loading="lazy"
              />
            </div>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg">{post.author}</h3>
            <p className="text-text-muted dark:text-text-dark-muted text-sm mb-3">
              Full Stack Developer
            </p>
            <p className="text-text-secondary dark:text-text-dark-secondary text-sm">
              Web teknolojileri ve yazılım geliştirme üzerine tutkulu bir geliştirici. 
              React, ASP.NET Core ve Machine Learning alanlarında deneyimli.
            </p>
            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://github.com/resuldemir123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary-500 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded"
                aria-label="GitHub profilini ziyaret et"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/resul-demir-3841912a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary-500 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded"
                aria-label="LinkedIn profilini ziyaret et"
              >
                <Linkedin size={18} />
              </a>
              <Link
                to="/about"
                className="inline-flex items-center gap-1 text-primary-500 dark:text-primary-400 text-sm ml-2 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded"
              >
                Daha fazla bilgi
                <ArrowLeft size={14} className="rotate-180" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <RelatedPosts
          currentPostSlug={post.slug}
          category={post.category}
          tags={post.tags}
        />

        {/* Comments */}
        <CommentSection postSlug={post.slug} postTitle={post.title} />
      </article>
    </>
  )
}

// Markdown-like content formatting
function formatContent(content) {
  let html = content
    // Headers
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mt-10 mb-4">$1</h2>')
    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-12 mb-6">$1</h1>')
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, (_, lang, code) => {
      return `<pre class="bg-slate-800 dark:bg-slate-900 text-gray-100 rounded-xl p-4 overflow-x-auto my-6"><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`
    })
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-primary-600 dark:text-primary-400 text-sm">$1</code>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Lists
    .replace(/^- (.*$)/gm, '<li class="ml-4">$1</li>')
    // Paragraphs
    .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
    // Line breaks
    .replace(/\n/g, '<br>')

  // Wrap in paragraph tags
  html = '<p class="mb-4 leading-relaxed">' + html + '</p>'
  
  // Wrap consecutive li elements in ul
  html = html.replace(/(<li.*?<\/li>)+/g, '<ul class="list-disc mb-4 space-y-1">$&</ul>')
  
  return html
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
