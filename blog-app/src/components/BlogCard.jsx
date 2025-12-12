import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, Eye, ArrowRight } from 'lucide-react'

export default function BlogCard({ post, index = 0 }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card overflow-hidden group focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-canvas-dark"
      aria-labelledby={`post-title-${post.id}`}
    >
      {/* Hero Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.heroImage}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          aria-hidden="true"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="tag">{post.category}</span>
          {post.isNew && (
            <span className="tag-new" aria-label="Yeni içerik">
              Yeni
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-text-muted dark:text-text-dark-muted mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={14} aria-hidden="true" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} aria-hidden="true" />
            <span>{post.readingTime} dk okuma</span>
          </span>
          <span className="flex items-center gap-1">
            <Eye size={14} aria-hidden="true" />
            <span>{post.views.toLocaleString()} görüntülenme</span>
          </span>
        </div>

        {/* Title */}
        <h3 
          id={`post-title-${post.id}`}
          className="text-xl font-semibold mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors leading-tight"
        >
          <Link 
            to={`/post/${post.slug}`}
            className="hover:underline underline-offset-4 focus:outline-none focus-visible:ring-0"
          >
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-text-secondary dark:text-text-dark-secondary line-clamp-2 mb-4 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Etiketler">
          {post.tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              role="listitem"
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-md text-text-muted dark:text-text-dark-muted transition-colors hover:bg-gray-200 dark:hover:bg-slate-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <Link
          to={`/post/${post.slug}`}
          className="inline-flex items-center gap-2 text-primary-500 dark:text-primary-400 font-medium group/link hover:underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:rounded transition-colors"
          tabIndex={-1}
          aria-hidden="true"
        >
          Devamını Oku
          <ArrowRight 
            size={16} 
            className="transition-transform group-hover/link:translate-x-1" 
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  )
}
