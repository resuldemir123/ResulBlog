import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, User, Clock, ThumbsUp, Bell, BellOff } from 'lucide-react'
import { sendCommentNotification } from '../services/emailService'

export default function CommentSection({ postSlug, postTitle }) {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState({ name: '', email: '', content: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [emailNotify, setEmailNotify] = useState(true)
  const [replyTo, setReplyTo] = useState(null)

  // Load comments from localStorage
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments-${postSlug}`)
    if (savedComments) {
      setComments(JSON.parse(savedComments))
    }
  }, [postSlug])

  // Save comments to localStorage
  const saveComments = (newComments) => {
    localStorage.setItem(`comments-${postSlug}`, JSON.stringify(newComments))
    setComments(newComments)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!newComment.name.trim() || !newComment.email.trim() || !newComment.content.trim()) {
      setSubmitStatus({ type: 'error', message: 'Lütfen tüm alanları doldurun.' })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    const comment = {
      id: Date.now(),
      ...newComment,
      createdAt: new Date().toISOString(),
      likes: 0,
      replyTo: replyTo?.id || null
    }

    try {
      // E-posta bildirimi gönder
      if (emailNotify) {
        await sendCommentNotification({
          postTitle,
          postSlug,
          commenterName: newComment.name,
          commenterEmail: newComment.email,
          commentContent: newComment.content
        })
      }

      const updatedComments = [...comments, comment]
      saveComments(updatedComments)
      
      setNewComment({ name: '', email: '', content: '' })
      setReplyTo(null)
      setSubmitStatus({ type: 'success', message: 'Yorumunuz başarıyla eklendi!' })
    } catch (error) {
      console.error('Yorum gönderme hatası:', error)
      // Hata olsa bile yorumu kaydet
      const updatedComments = [...comments, comment]
      saveComments(updatedComments)
      setNewComment({ name: '', email: '', content: '' })
      setReplyTo(null)
      setSubmitStatus({ type: 'success', message: 'Yorumunuz eklendi!' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLike = (commentId) => {
    const updatedComments = comments.map(c => 
      c.id === commentId ? { ...c, likes: c.likes + 1 } : c
    )
    saveComments(updatedComments)
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = now - date
    
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)
    
    if (minutes < 1) return 'Az önce'
    if (minutes < 60) return `${minutes} dakika önce`
    if (hours < 24) return `${hours} saat önce`
    if (days < 7) return `${days} gün önce`
    
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const parentComments = comments.filter(c => !c.replyTo)
  const getReplies = (commentId) => comments.filter(c => c.replyTo === commentId)

  return (
    <section className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
          <MessageCircle className="text-primary-500" size={20} />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold">Yorumlar</h2>
          <p className="text-text-muted dark:text-text-dark-muted text-sm">
            {comments.length} yorum
          </p>
        </div>
      </div>

      {/* Comment Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="card p-6 mb-8"
      >
        <h3 className="font-semibold mb-4">
          {replyTo ? `@${replyTo.name} kullanıcısına yanıt yaz` : 'Yorum Yaz'}
          {replyTo && (
            <button
              type="button"
              onClick={() => setReplyTo(null)}
              className="ml-2 text-sm text-text-muted hover:text-primary-500"
            >
              (İptal)
            </button>
          )}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              İsim *
            </label>
            <input
              type="text"
              id="name"
              value={newComment.name}
              onChange={(e) => setNewComment(prev => ({ ...prev, name: e.target.value }))}
              className="input"
              placeholder="Adınız"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              E-posta *
            </label>
            <input
              type="email"
              id="email"
              value={newComment.email}
              onChange={(e) => setNewComment(prev => ({ ...prev, email: e.target.value }))}
              className="input"
              placeholder="ornek@email.com"
              required
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium mb-2">
            Yorumunuz *
          </label>
          <textarea
            id="content"
            value={newComment.content}
            onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
            className="textarea h-32"
            placeholder="Düşüncelerinizi paylaşın..."
            required
          />
        </div>

        {/* Email Notification Toggle */}
        <div className="flex items-center justify-between mb-4">
          <button
            type="button"
            onClick={() => setEmailNotify(!emailNotify)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
              emailNotify 
                ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400' 
                : 'bg-gray-100 dark:bg-slate-700 text-text-muted'
            }`}
          >
            {emailNotify ? <Bell size={16} /> : <BellOff size={16} />}
            {emailNotify ? 'E-posta bildirimi açık' : 'E-posta bildirimi kapalı'}
          </button>
        </div>

        {/* Submit Status */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mb-4 p-3 rounded-lg text-sm ${
                submitStatus.type === 'success' 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                  : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full md:w-auto"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Gönderiliyor...
            </span>
          ) : (
            <>
              <Send size={18} />
              Yorum Gönder
            </>
          )}
        </button>
      </motion.form>

      {/* Comments List */}
      <div className="space-y-6">
        <AnimatePresence>
          {parentComments.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-text-muted dark:text-text-dark-muted py-8"
            >
              Henüz yorum yok. İlk yorumu siz yapın!
            </motion.p>
          ) : (
            parentComments.map((comment, index) => (
              <CommentItem
                key={comment.id}
                comment={comment}
                index={index}
                onLike={handleLike}
                onReply={setReplyTo}
                replies={getReplies(comment.id)}
                formatDate={formatDate}
              />
            ))
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function CommentItem({ comment, index, onLike, onReply, replies, formatDate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="card p-6"
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center text-white font-semibold flex-shrink-0">
          {comment.name.charAt(0).toUpperCase()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold">{comment.name}</h4>
            <span className="text-text-muted dark:text-text-dark-muted text-sm flex items-center gap-1">
              <Clock size={12} />
              {formatDate(comment.createdAt)}
            </span>
          </div>
          
          <p className="text-text-secondary dark:text-text-dark-secondary mb-3">
            {comment.content}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onLike(comment.id)}
              className="flex items-center gap-1 text-sm text-text-muted dark:text-text-dark-muted hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              <ThumbsUp size={14} />
              {comment.likes > 0 && comment.likes}
            </button>
            <button
              onClick={() => onReply(comment)}
              className="text-sm text-text-muted dark:text-text-dark-muted hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
            >
              Yanıtla
            </button>
          </div>
        </div>
      </div>

      {/* Replies */}
      {replies.length > 0 && (
        <div className="ml-14 mt-4 space-y-4 border-l-2 border-gray-200 dark:border-slate-700 pl-4">
          {replies.map((reply, replyIndex) => (
            <motion.div
              key={reply.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: replyIndex * 0.1 }}
              className="bg-gray-50 dark:bg-slate-700/50 rounded-lg p-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary-400 to-primary-400 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0">
                  {reply.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-medium text-sm">{reply.name}</h5>
                    <span className="text-text-muted dark:text-text-dark-muted text-xs">
                      {formatDate(reply.createdAt)}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                    {reply.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

