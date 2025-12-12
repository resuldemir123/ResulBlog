import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Send, Github, Linkedin, 
  Clock, CheckCircle, AlertCircle 
} from 'lucide-react'
import SEOHead from '../components/SEOHead'
import { sendContactForm } from '../services/emailService'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await sendContactForm(formData)
      setSubmitStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.'
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'E-posta',
      value: 'resuldemir.dev@gmail.com',
      href: 'mailto:resuldemir.dev@gmail.com'
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+90 551 174 6672',
      href: 'tel:+905511746672'
    },
    {
      icon: MapPin,
      label: 'Konum',
      value: 'Türkiye',
      href: null
    },
    {
      icon: Clock,
      label: 'Çalışma Saatleri',
      value: 'Pzt - Cuma: 09:00 - 18:00',
      href: null
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/resuldemir123',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/resul-demir-3841912a8/',
      color: 'hover:bg-[#0A66C2] hover:text-white'
    },
    {
      icon: Mail,
      label: 'E-posta',
      href: 'mailto:resuldemir.dev@gmail.com',
      color: 'hover:bg-primary-500 hover:text-white'
    }
  ]

  return (
    <>
      <SEOHead
        title="İletişim"
        description="Resul Demir ile iletişime geçin. Proje teklifleri, işbirliği fırsatları veya sorularınız için form doldurun."
        keywords={['iletişim', 'Resul Demir', 'proje', 'işbirliği']}
        canonicalUrl="/contact"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            İletişime Geçin
          </h1>
          <p className="text-lg text-text-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
            Proje teklifleri, işbirliği fırsatları veya sadece merhaba demek için bana ulaşabilirsiniz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card p-8">
              <h2 className="text-2xl font-display font-bold mb-6">Mesaj Gönderin</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      İsim *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input"
                      placeholder="Adınız Soyadınız"
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
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input"
                      placeholder="ornek@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Konu *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="input"
                    placeholder="Mesajınızın konusu"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea h-40"
                    placeholder="Mesajınızı buraya yazın..."
                    required
                  />
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-xl ${
                      submitStatus.type === 'success'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                    }`}
                  >
                    {submitStatus.type === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    {submitStatus.message}
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
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
                      Mesaj Gönder
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = (
                  <div className="card p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                      <Icon className="text-primary-500" size={24} />
                    </div>
                    <h3 className="font-semibold mb-1">{info.label}</h3>
                    <p className="text-text-secondary dark:text-text-dark-secondary text-sm">
                      {info.value}
                    </p>
                  </div>
                )

                return info.href ? (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="block hover:scale-105 transition-transform"
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {content}
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Sosyal Medya</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-gray-100 dark:bg-slate-700 transition-colors ${social.color}`}
                    >
                      <Icon size={20} />
                      <span className="hidden sm:inline">{social.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>

            {/* FAQ */}
            <div className="card p-6">
              <h3 className="font-semibold mb-4">Sık Sorulan Sorular</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-1">Ne kadar sürede dönüş yapıyorsunuz?</h4>
                  <p className="text-text-secondary dark:text-text-dark-secondary text-sm">
                    Genellikle 24-48 saat içinde tüm mesajlara dönüş yapmaya çalışıyorum.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Freelance projeler için müsait misiniz?</h4>
                  <p className="text-text-secondary dark:text-text-dark-secondary text-sm">
                    Evet, uygun projelerde freelance çalışmaya açığım. Detayları konuşmak için iletişime geçin.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-1">Hangi teknolojilerle çalışıyorsunuz?</h4>
                  <p className="text-text-secondary dark:text-text-dark-secondary text-sm">
                    React, Next.js, ASP.NET Core, Node.js ve Python ile projeler geliştiriyorum.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

