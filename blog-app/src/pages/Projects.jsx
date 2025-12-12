import { motion } from 'framer-motion'
import { 
  Github, ExternalLink, Star, GitFork, Code2, 
  Globe, Database, Server, Smartphone, Brain,
  MapPin, ShoppingBag, Film, Shield, Cpu
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: 'PlaceFind',
      subtitle: 'Alanya İşletme Rehberi',
      description: 'Alanya\'daki işletmeleri (restoran, otel, mağaza, spa, vs.) keşfetmek, filtrelemek, incelemek, yorumlamak ve favorilere eklemek için geliştirilmiş modern bir işletme rehberi uygulaması. Kullanıcılar için zengin bir ön yüz; adminler için kapsamlı bir yönetim paneli sunar.',
      longDescription: `
        PlaceFind, ASP.NET Core 8.0 MVC ile geliştirilmiş kapsamlı bir işletme rehberi platformudur.
        
        **Öne Çıkan Özellikler:**
        - 🏪 İşletme listeleme, detay görüntüleme ve arama
        - ⭐ Yorum ve puanlama sistemi
        - 📅 Rezervasyon yönetimi
        - 🤖 Google Gemini AI ile akıllı öneri sistemi
        - 🗺️ Google Maps entegrasyonu
        - 🌙 Dark/Light tema desteği
        - 👤 Kullanıcı paneli (favoriler, yorumlar, profil)
        - 🔐 Admin paneli (kullanıcı, işletme, kategori yönetimi)
        - 📧 Email bildirimleri (SMTP)
        - 📱 Responsive tasarım
      `,
      technologies: ['ASP.NET Core 8.0', 'Entity Framework Core', 'SQL Server', 'Bootstrap 5', 'Google Gemini AI', 'Google Maps API', 'Identity'],
      github: 'https://github.com/resuldemir123/Plafind',
      demo: null,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
      icon: MapPin,
      color: 'from-blue-500 to-cyan-500',
      featured: true,
      stats: { stars: 5, forks: 2 }
    },
    {
      id: 2,
      name: 'SafeTravel',
      subtitle: 'Güvenli Seyahat Uygulaması',
      description: 'Seyahat güvenliğini artırmak için tasarlanmış, kullanıcıların güvenli rotalar planlamasına, acil durum bildirimlerinde bulunmasına ve seyahat bilgilerini yakınlarıyla paylaşmasına olanak tanıyan kapsamlı bir mobil uygulama.',
      longDescription: `
        SafeTravel, seyahat ederken güvenliğinizi ön planda tutan modern bir uygulamadır.
        
        **Öne Çıkan Özellikler:**
        - 🛡️ Gerçek zamanlı konum takibi ve paylaşımı
        - 🚨 Acil durum butonu ve hızlı bildirim sistemi
        - 📍 Güvenli rota önerileri
        - 👨‍👩‍👧 Aile ve arkadaşlarla konum paylaşımı
        - 🗺️ Tehlikeli bölge uyarıları
        - 📱 Offline harita desteği
        - 🔔 Anlık bildirimler
        - 📊 Seyahat geçmişi ve istatistikler
        - 🆘 Yerel acil durum numaraları
        - 🌍 Çoklu dil desteği
      `,
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Firebase', 'Socket.io', 'Push Notifications'],
      github: 'https://github.com/resuldemir123/SafeTravel',
      demo: null,
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=400&fit=crop',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      featured: true,
      stats: { stars: 8, forks: 3 }
    },
    {
      id: 3,
      name: 'H&M Collection',
      subtitle: 'React E-Ticaret Uygulaması',
      description: 'Tamamen React tabanlı, backend olmayan bir Single Page Application. Tüm veriler localStorage\'da saklanır. Modern CSS animasyonları, yorum sistemi, admin paneli ve fotoğraf/video yükleme özellikleri içerir.',
      longDescription: `
        H&M Collection, modern web teknolojileri ile geliştirilmiş bir e-ticaret showcase uygulamasıdır.
        
        **Öne Çıkan Özellikler:**
        - 🛒 Ürün listeleme ve detay sayfaları
        - 💬 Müşteri yorum sistemi
        - 📸 Fotoğraf ve video yükleme (Base64)
        - 🔐 Admin paneli (yorum onaylama, içerik yönetimi)
        - 💾 localStorage ile veri depolama
        - 🎨 Modern CSS animasyonları
        - 📱 Tam responsive tasarım
        - 🗺️ İletişim sayfasında harita entegrasyonu
        - ⚡ Vite ile hızlı geliştirme
      `,
      technologies: ['React 18', 'React Router', 'Vite', 'CSS3', 'localStorage', 'Font Awesome'],
      github: 'https://github.com/resuldemir123/H_M_Collection',
      demo: null,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
      icon: ShoppingBag,
      color: 'from-pink-500 to-rose-500',
      featured: false,
      stats: { stars: 3, forks: 1 }
    },
    {
      id: 4,
      name: 'Film İnceleme',
      subtitle: 'Film Değerlendirme Platformu',
      description: 'ASP.NET Core MVC ile geliştirilmiş, kullanıcıların filmleri inceleyebildiği, puanlayabildiği ve yorum yapabildiği kapsamlı bir film veritabanı uygulaması.',
      longDescription: `
        Film İnceleme, film tutkunları için tasarlanmış kapsamlı bir platform.
        
        **Öne Çıkan Özellikler:**
        - 🎬 Geniş film veritabanı
        - ⭐ Kullanıcı puanlama sistemi (1-10)
        - 💬 Film yorumları ve tartışmalar
        - 🔍 Gelişmiş arama ve filtreleme
        - 📊 Film istatistikleri ve grafikler
        - 👤 Kullanıcı profilleri ve izleme listeleri
        - 🏷️ Tür bazlı kategorizasyon
        - 📱 Responsive arayüz
      `,
      technologies: ['ASP.NET Core MVC', 'Entity Framework', 'SQL Server', 'Bootstrap', 'jQuery', 'Identity'],
      github: 'https://github.com/resuldemir123/FilmInceleme',
      demo: null,
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=400&fit=crop',
      icon: Film,
      color: 'from-purple-500 to-violet-500',
      featured: false,
      stats: { stars: 4, forks: 2 }
    },
    {
      id: 5,
      name: 'Makine Öğrenmesi',
      subtitle: 'ML & Data Science Projeleri',
      description: 'Python ile geliştirilmiş çeşitli makine öğrenmesi ve veri analizi projeleri. Sınıflandırma, regresyon, kümeleme algoritmaları ve veri görselleştirme çalışmaları içerir.',
      longDescription: `
        Bu repo, makine öğrenmesi ve veri bilimi alanındaki çalışmalarımı içerir.
        
        **İçerik:**
        - 📊 Veri analizi ve görselleştirme (Pandas, Matplotlib, Seaborn)
        - 🤖 Sınıflandırma algoritmaları (Random Forest, SVM, KNN)
        - 📈 Regresyon modelleri (Linear, Polynomial, Ridge)
        - 🎯 Kümeleme (K-Means, DBSCAN, Hierarchical)
        - 🧠 Derin öğrenme temelleri (Neural Networks)
        - 📉 Model değerlendirme ve optimizasyon
        - 🔄 Veri ön işleme teknikleri
        - 📁 Gerçek dünya veri setleri ile uygulamalar
      `,
      technologies: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook', 'TensorFlow'],
      github: 'https://github.com/resuldemir123/makineOgrenme',
      demo: null,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
      icon: Brain,
      color: 'from-orange-500 to-amber-500',
      featured: false,
      stats: { stars: 6, forks: 3 }
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <>
      <SEOHead
        title="Projelerim"
        description="Resul Demir'in geliştirdiği yazılım projeleri. ASP.NET Core, React, Python ve daha fazlası ile oluşturulmuş açık kaynak projeler."
        keywords={['projeler', 'portfolio', 'ASP.NET Core', 'React', 'Python', 'açık kaynak']}
        canonicalUrl="/projects"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full text-primary-600 dark:text-primary-400 text-sm font-medium mb-4">
            <Code2 size={18} />
            Açık Kaynak Projeler
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Projelerim
          </h1>
          <p className="text-lg text-text-secondary dark:text-text-dark-secondary max-w-2xl mx-auto">
            Geliştirdiğim açık kaynak projeler. Her biri farklı teknolojiler ve çözümler içeriyor.
          </p>
          
          {/* GitHub Link */}
          <a
            href="https://github.com/resuldemir123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 transition-all hover:scale-105"
          >
            <Github size={20} />
            GitHub Profilim
            <ExternalLink size={16} />
          </a>
        </motion.div>

        {/* Featured Projects */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold mb-8 flex items-center gap-3"
          >
            <Star className="text-yellow-500" />
            Öne Çıkan Projeler
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} featured />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-bold mb-8 flex items-center gap-3"
          >
            <GitFork className="text-primary-500" />
            Diğer Projeler
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="card p-8 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-2 border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-display font-bold mb-4">
              Birlikte Çalışalım!
            </h3>
            <p className="text-text-secondary dark:text-text-dark-secondary mb-6 max-w-xl mx-auto">
              Yeni projeler için işbirliğine açığım. Bir fikriniz mi var? Hadi konuşalım!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="btn-primary">
                İletişime Geç
              </a>
              <a
                href="https://github.com/resuldemir123"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

function ProjectCard({ project, index, featured = false }) {
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`card overflow-hidden group ${featured ? '' : ''}`}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60`} />
        
        {/* Icon */}
        <div className="absolute top-4 left-4">
          <div className={`w-12 h-12 rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm flex items-center justify-center shadow-lg`}>
            <Icon className="text-gray-800 dark:text-white" size={24} />
          </div>
        </div>

        {/* Stats */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
            <Star size={12} />
            {project.stats.stars}
          </span>
          <span className="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs">
            <GitFork size={12} />
            {project.stats.forks}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <h3 className="text-xl font-semibold group-hover:text-primary-500 transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-primary-500 dark:text-primary-400">{project.subtitle}</p>
        </div>

        <p className="text-text-secondary dark:text-text-dark-secondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, featured ? 6 : 4).map(tech => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > (featured ? 6 : 4) && (
            <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded-md">
              +{project.technologies.length - (featured ? 6 : 4)}
            </span>
          )}
        </div>

        {/* Long Description for Featured */}
        {featured && (
          <div className="mb-4 p-4 bg-gray-50 dark:bg-slate-700/50 rounded-xl">
            <div 
              className="text-sm text-text-secondary dark:text-text-dark-secondary prose-sm"
              dangerouslySetInnerHTML={{ 
                __html: project.longDescription
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-text-primary dark:text-text-dark-primary">$1</strong>')
                  .replace(/- (.*)/g, '<li class="ml-4">$1</li>')
                  .replace(/\n\n/g, '<br/>')
              }}
            />
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
          >
            <Github size={16} />
            Kaynak Kod
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors text-sm font-medium"
            >
              <Globe size={16} />
              Canlı Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

