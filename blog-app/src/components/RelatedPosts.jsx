import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, ArrowRight } from 'lucide-react'
import { blogPosts } from '../data/posts'

export default function RelatedPosts({ currentPostSlug, category, tags }) {
  // İlgili yazıları bul - kategori veya etiket eşleşmesine göre
  const relatedPosts = blogPosts
    .filter(post => {
      if (post.slug === currentPostSlug) return false
      
      // Kategori eşleşmesi
      if (post.category === category) return true
      
      // Etiket eşleşmesi
      const commonTags = post.tags.filter(tag => tags.includes(tag))
      return commonTags.length > 0
    })
    .sort((a, b) => {
      // Kategori eşleşmesine öncelik ver
      const aMatch = a.category === category ? 2 : 0
      const bMatch = b.category === category ? 2 : 0
      
      // Etiket eşleşme sayısı
      const aTagMatch = a.tags.filter(tag => tags.includes(tag)).length
      const bTagMatch = b.tags.filter(tag => tags.includes(tag)).length
      
      return (bMatch + bTagMatch) - (aMatch + aTagMatch)
    })
    .slice(0, 4)

  if (relatedPosts.length === 0) return null

  return (
    <section className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700">
      <h2 className="text-2xl font-display font-bold mb-8">İlgili Yazılar</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedPosts.map((post, index) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card overflow-hidden group"
          >
            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={post.heroImage}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute top-2 left-2">
                <span className="tag text-xs">{post.category}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                <Link to={`/post/${post.slug}`}>
                  {post.title}
                </Link>
              </h3>
              
              <div className="flex items-center justify-between text-xs text-text-muted dark:text-text-dark-muted">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readingTime} dk
                </span>
                <Link
                  to={`/post/${post.slug}`}
                  className="flex items-center gap-1 text-primary-500 dark:text-primary-400 hover:gap-2 transition-all"
                >
                  Oku
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

