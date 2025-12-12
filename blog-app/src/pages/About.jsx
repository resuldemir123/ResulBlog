import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Github, Linkedin, Mail, MapPin, Calendar, Phone,
  Briefcase, GraduationCap, Award, Code, 
  Database, Server, Globe, ExternalLink, Heart,
  Zap, Target, Users, Coffee, BookOpen, Languages,
  Trophy, CheckCircle, Rocket, TrendingUp
} from 'lucide-react'
import SEOHead from '../components/SEOHead'

export default function About() {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Sigortam Net Sigorta ve Reasürans Brokerlik Hizm. A.Ş.',
      period: 'Ağustos 2025 - Ekim 2025',
      description: 'Backend geliştirme alanında C# ve ASP.NET kullanarak pratik deneyim kazandım.',
      achievements: [
        'C# ve ASP.NET ile backend geliştirme deneyimi',
        'Veritabanı operasyonları ve API entegrasyonu',
        'Verimli ve sürdürülebilir sistemler geliştirme'
      ],
      technologies: ['C#', 'ASP.NET', 'SQL Server', 'API Integration'],
      type: 'work'
    },
    {
      title: 'Hackathon Katılımcısı - React Projesi',
      company: 'Hackathon',
      period: '2024',
      description: 'React kullanarak web uygulaması geliştirdim ve "En İyi Kullanıcı Deneyimi" ödülünü kazandım.',
      achievements: [
        '🏆 Jüri tarafından "En İyi Kullanıcı Deneyimi" ödülü',
        'React ve Git/GitHub ile versiyon kontrolü',
        'Güçlü takım çalışması ile projeyi erken tamamlama'
      ],
      technologies: ['React', 'Git', 'GitHub', 'JavaScript'],
      type: 'achievement'
    }
  ]

  const education = [
    {
      degree: 'Yazılım Mühendisliği (Lisans)',
      school: 'Manisa Celal Bayar Üniversitesi',
      period: 'Eylül 2022 - Devam Ediyor',
      gpa: '3.17',
      description: '4. sınıf Yazılım Mühendisliği öğrencisi. Backend sistemleri, yazılım mimarisi ve modern geliştirme pratikleri üzerine odaklanmaktayım.',
      courses: ['Veri Yapıları & Algoritmalar', 'Yazılım Mühendisliği', 'Veritabanı Sistemleri', 'Web Programlama', 'Nesne Yönelimli Programlama']
    }
  ]

  const skills = [
    { 
      category: 'Programlama Dilleri & Web', 
      items: ['C#', 'Python', 'Java', 'JavaScript', 'HTML5', 'CSS3', '.NET MVC', 'React'], 
      icon: Code,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      category: 'Backend & Framework', 
      items: ['ASP.NET Core', '.NET MVC', 'REST API', 'Entity Framework', 'Node.js'], 
      icon: Server,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      category: 'Veritabanı', 
      items: ['MSSQL', 'SQL Server', 'SQLite', 'MongoDB', 'PostgreSQL'], 
      icon: Database,
      color: 'from-purple-500 to-violet-500'
    },
    { 
      category: 'Araçlar & Metodoloji', 
      items: ['Git', 'GitHub', 'Docker', 'CI/CD', 'Agile (Scrum)', 'OOP', 'Software Architecture'], 
      icon: Globe,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const detailedProjects = [
    {
      title: 'FilmInceleme - Film Değerlendirme Platformu',
      description: 'C# (ASP.NET Core) ve React ile geliştirilmiş, kullanıcıların filmleri keşfetmesine, puanlamasına ve yorum yapmasına olanak tanıyan dinamik film inceleme platformu.',
      achievements: [
        { icon: Rocket, text: 'Full-Stack Development ile uçtan uca platform geliştirme' },
        { icon: TrendingUp, text: 'CI/CD pipeline ile deployment süresini 2 saatten 30 dakikaya düşürme (%75 verimlilik artışı)' },
        { icon: Users, text: 'UI/UX optimizasyonları ile kullanıcı memnuniyetinde %25 artış' }
      ],
      technologies: ['C#', 'ASP.NET Core', 'React', 'SQL Server', 'Docker', 'Jenkins'],
      link: 'https://github.com/resuldemir123/FilmInceleme',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Kıyafet Fiyat Tahmini - Machine Learning',
      description: 'Scikit-learn ve Pandas kullanarak kıyafet fiyatlarını tahmin eden Machine Learning modeli. Marka, materyal, durum gibi özelliklere göre %85 doğruluk oranı.',
      achievements: [
        { icon: Target, text: '%85 tahmin doğruluğu ile yüksek performanslı ML modeli' },
        { icon: Zap, text: 'Veri ön işleme optimizasyonu ile %30 hız artışı' },
        { icon: CheckCircle, text: '15+ farklı özellik üzerinde derinlemesine feature engineering' }
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Jupyter Notebook'],
      link: 'https://github.com/resuldemir123/makineOgrenme',
      color: 'from-orange-500 to-yellow-500'
    }
  ]

  const simpleProjects = [
    {
      title: 'PlaceFind - İşletme Rehberi',
      description: 'ASP.NET Core 8.0 ile geliştirilmiş, AI destekli Alanya işletme rehberi platformu.',
      link: 'https://github.com/resuldemir123/Plafind',
      technologies: ['ASP.NET Core 8.0', 'Gemini AI', 'SQL Server']
    },
    {
      title: 'SafeTravel - Güvenli Seyahat',
      description: 'Seyahat güvenliğini artıran, konum paylaşımlı mobil uygulama.',
      link: 'https://github.com/resuldemir123/SafeTravel',
      technologies: ['React Native', 'Node.js', 'Firebase']
    },
    {
      title: 'H&M Collection',
      description: 'React ile geliştirilmiş modern e-ticaret showcase uygulaması.',
      link: 'https://github.com/resuldemir123/H_M_Collection',
      technologies: ['React 18', 'Vite', 'localStorage']
    }
  ]

  const certifications = [
    { name: 'Versiyon Kontrolleri: Git ve GitHub', issuer: 'BTK Akademi', date: '20.02.2025', icon: '🔄' },
    { name: 'Uygulamalarla SQL Öğreniyorum', issuer: 'BTK Akademi', date: '23.02.2025', icon: '🗃️' },
    { name: 'JAVA ile Programlamaya Giriş', issuer: 'BTK Akademi', date: '29.01.2025', icon: '☕' },
    { name: 'API ve API Testi', issuer: 'BTK Akademi', date: '18.05.2025', icon: '🔌' },
    { name: 'HTML5 ile Web Geliştirme', issuer: 'BTK Akademi', date: '28.01.2025', icon: '🌐' },
    { name: 'React 101', issuer: 'Turkcell Geleceği Yazanlar', date: '10.03.2025', icon: '⚛️' }
  ]

  const languages = [
    { name: 'Türkçe', level: 'Ana Dil', percentage: 100 },
    { name: 'İngilizce', level: 'B2 - Orta-İleri', percentage: 75 },
    { name: 'Almanca', level: 'A2 - Başlangıç', percentage: 30 }
  ]

  const softSkills = [
    { icon: Users, label: 'Takım Çalışması' },
    { icon: Target, label: 'Problem Çözme' },
    { icon: Coffee, label: 'İletişim' },
    { icon: Zap, label: 'Hızlı Öğrenme' },
    { icon: BookOpen, label: 'Sürekli Gelişim' },
    { icon: Rocket, label: 'Agile/Scrum' }
  ]

  const stats = [
    { value: '3.17', label: 'GPA' },
    { value: '5+', label: 'Proje' },
    { value: '6', label: 'Sertifika' },
    { value: '3', label: 'Dil' }
  ]

  return (
    <>
      <SEOHead
        title="Hakkımda"
        description="Resul Demir - 4. sınıf Yazılım Mühendisliği öğrencisi. C#, ASP.NET Core, React ve Python ile ölçeklenebilir backend sistemleri geliştirme konusunda deneyimli."
        keywords={['Resul Demir', 'Yazılım Mühendisi', 'Full Stack Developer', 'C#', 'ASP.NET Core', 'React', 'Python']}
        canonicalUrl="/about"
        schemaType="Person"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block mb-6"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden ring-4 ring-white dark:ring-slate-700 shadow-inner">
                <img 
                  src="/resul.png" 
                  alt="Resul Demir" 
                  className="w-full h-full object-cover object-top scale-110"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full border-4 border-white dark:border-slate-800 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">
            Resul Demir
          </h1>
          <p className="text-xl text-primary-500 dark:text-primary-400 font-medium mb-4">
            Software Engineering Student & Full Stack Developer
          </p>
          
          {/* Bio - Summary from CV */}
          <div className="max-w-3xl mx-auto mb-6">
            <p className="text-text-secondary dark:text-text-dark-secondary text-lg leading-relaxed">
              C# ile <strong className="text-text-primary dark:text-text-dark-primary">ölçeklenebilir backend sistemleri</strong> geliştirmeye odaklanan, 
              motivasyonu yüksek 4. sınıf Yazılım Mühendisliği öğrencisiyim. Staj ve proje deneyimlerimle, 
              <strong className="text-text-primary dark:text-text-dark-primary"> verimli, sürdürülebilir ve yüksek performanslı</strong> yazılım çözümleri 
              tasarlama ve uygulama konusunda pratik beceriler geliştirdim. 
              <strong className="text-text-primary dark:text-text-dark-primary"> Clean code prensipleri</strong> ve modern yazılım mimarilerine bağlıyım.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <a
              href="mailto:resuldemir.dev@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors text-sm"
            >
              <Mail size={16} className="text-primary-500" />
              resuldemir.dev@gmail.com
            </a>
            <a
              href="tel:+905511746672"
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors text-sm"
            >
              <Phone size={16} className="text-primary-500" />
              +90 551 174 6672
            </a>
            <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-full text-sm">
              <MapPin size={16} className="text-primary-500" />
              Türkiye
            </span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/resuldemir123"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-800 text-white rounded-xl hover:bg-gray-800 dark:hover:bg-gray-700 transition-all hover:scale-105"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/resul-demir-3841912a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-xl hover:bg-[#084d92] transition-all hover:scale-105"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.section>

        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-muted dark:text-text-dark-muted">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3"
          >
            <Briefcase className="text-primary-500" />
            Deneyim
          </motion.h2>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`card p-6 border-l-4 ${exp.type === 'achievement' ? 'border-yellow-500' : 'border-primary-500'}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      {exp.type === 'achievement' && <Trophy className="text-yellow-500" size={20} />}
                      {exp.title}
                    </h3>
                    <p className="text-primary-500 dark:text-primary-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="flex items-center gap-2 text-sm text-text-muted dark:text-text-dark-muted bg-gray-100 dark:bg-slate-700 px-3 py-1 rounded-full">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-text-secondary dark:text-text-dark-secondary text-sm mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary dark:text-text-dark-secondary">
                      <CheckCircle size={16} className="text-primary-500 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3"
          >
            <GraduationCap className="text-secondary-500" />
            Eğitim
          </motion.h2>

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-6 border-l-4 border-secondary-500"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-secondary-500 dark:text-secondary-400 font-medium">{edu.school}</p>
                </div>
                <div className="text-right">
                  <span className="flex items-center gap-2 text-sm text-text-muted dark:text-text-dark-muted">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                  <span className="inline-block mt-1 px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-sm font-semibold rounded-full">
                    GPA: {edu.gpa}
                  </span>
                </div>
              </div>

              <p className="text-text-secondary dark:text-text-dark-secondary text-sm mb-4">
                {edu.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {edu.courses.map(course => (
                  <span key={course} className="text-xs px-2 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded">
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3"
          >
            <Target className="text-primary-500" />
            Teknik Yetenekler
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card p-6 group hover:scale-105 transition-transform"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold mb-3">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map(item => (
                      <span
                        key={item}
                        className="text-sm px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h3 className="font-semibold mb-4 text-center">Kişisel Yetenekler</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill) => {
                const Icon = skill.icon
                return (
                  <span
                    key={skill.label}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-700 rounded-full text-sm hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                  >
                    <Icon size={16} className="text-primary-500" />
                    {skill.label}
                  </span>
                )
              })}
            </div>
          </motion.div>
        </section>

        {/* Detailed Projects */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3"
          >
            <Rocket className="text-primary-500" />
            Öne Çıkan Projeler
          </motion.h2>

          <div className="space-y-8">
            {detailedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600"
                    >
                      <Github size={16} />
                      Kaynak Kod
                    </a>
                  </div>

                  <p className="text-text-secondary dark:text-text-dark-secondary mb-4">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    {project.achievements.map((achievement, i) => {
                      const Icon = achievement.icon
                      return (
                        <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
                          <Icon className="text-primary-500 flex-shrink-0 mt-0.5" size={18} />
                          <span className="text-sm text-text-secondary dark:text-text-dark-secondary">
                            {achievement.text}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="text-xs px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simple Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {simpleProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 group cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink size={18} className="text-text-muted group-hover:text-primary-500 transition-colors" />
                </div>
                <p className="text-text-secondary dark:text-text-dark-secondary text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          {/* All Projects Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <Link to="/projects" className="btn-primary">
              Tüm Projeleri Gör
              <ExternalLink size={18} />
            </Link>
          </motion.div>
        </section>

        {/* Languages */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3"
          >
            <Languages className="text-primary-500" />
            Dil Becerileri
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{lang.name}</h3>
                  <span className="text-sm text-primary-500 font-medium">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2.5 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-display font-bold mb-8 flex items-center gap-3"
          >
            <Award className="text-primary-500" />
            Sertifikalar
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="card p-4 flex items-start gap-4 hover:scale-[1.02] transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 flex items-center justify-center text-2xl flex-shrink-0">
                  {cert.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-sm line-clamp-2">{cert.name}</h3>
                  <p className="text-xs text-text-muted dark:text-text-dark-muted">{cert.issuer}</p>
                  <p className="text-xs text-primary-500 mt-1">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="card p-8 text-center bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border-2 border-primary-200 dark:border-primary-800">
            <h3 className="text-2xl font-display font-bold mb-4">
              Birlikte Çalışalım!
            </h3>
            <p className="text-text-secondary dark:text-text-dark-secondary mb-6 max-w-xl mx-auto">
              Yeni projeler, staj fırsatları ve işbirliği için her zaman açığım. 
              Bir fikriniz varsa veya sadece merhaba demek istiyorsanız, bana ulaşın!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                <Mail size={18} />
                İletişime Geç
              </Link>
              <a
                href="https://www.linkedin.com/in/resul-demir-3841912a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  )
}
