import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Folder } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import SEOHead from '../components/SEOHead'
import { blogPosts, categories } from '../data/posts'

export default function Category() {
  const { category } = useParams()

  const categoryInfo = categories.find(c => c.name === category)
  const filteredPosts = blogPosts.filter(post => post.category === category)

  if (!categoryInfo) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Kategori Bulunamadı</h1>
        <Link to="/" className="btn-primary">
          Ana Sayfaya Dön
        </Link>
      </div>
    )
  }

  return (
    <>
      <SEOHead
        title={`${category} Kategorisi`}
        description={`${category} kategorisindeki tüm blog yazıları. Resul Demir'in ${category} hakkındaki yazılarını keşfedin.`}
        keywords={[category, 'blog', 'yazılım', 'Resul Demir']}
        canonicalUrl={`/category/${category}`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-muted dark:text-text-dark-muted hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            <ArrowLeft size={18} />
            Tüm Kategoriler
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-14 h-14 rounded-2xl ${categoryInfo.color} flex items-center justify-center`}>
              <Folder className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                {category}
              </h1>
              <p className="text-text-secondary dark:text-text-dark-secondary">
                {filteredPosts.length} yazı
              </p>
            </div>
          </div>
        </motion.div>

        {/* Other Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map(cat => (
            <Link
              key={cat.name}
              to={`/category/${cat.name}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat.name === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600'
              }`}
            >
              {cat.name}
            </Link>
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
              Bu kategoride henüz yazı bulunmuyor.
            </p>
          </motion.div>
        )}
      </div>
    </>
  )
}

