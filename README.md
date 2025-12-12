# Resul Demir - Blog & Portfolio

Modern, hızlı ve kullanıcı dostu bir kişisel blog ve portfolio web sitesi. Yazılım geliştirme, web teknolojileri ve kişisel projeler hakkında içerikler paylaşmak için geliştirilmiştir.

## 🎯 Proje Hakkında

Bu proje, React ve modern web teknolojileri kullanılarak geliştirilmiş tam özellikli bir blog ve portfolio platformudur. Kullanıcılar blog yazılarını okuyabilir, projeleri inceleyebilir, iletişime geçebilir ve yeni içeriklerden haberdar olmak için abone olabilirler.

## ✨ Özellikler

### 📝 Blog Sistemi
- **Blog Yazıları**: Kategorilere ayrılmış, etiketlenmiş blog yazıları
- **Arama ve Filtreleme**: Yazılarda arama yapma, kategori ve tarihe göre filtreleme
- **Sıralama**: En yeni, en popüler veya en eski yazılara göre sıralama
- **İlgili Yazılar**: Her blog yazısının altında benzer içeriklerin gösterilmesi
- **Yorum Sistemi**: Blog yazılarına yorum yapabilme (gelecek özellik)

### 💼 Portfolio
- **Projeler**: Kişisel projelerin detaylı gösterimi
- **Teknoloji Etiketleri**: Her projede kullanılan teknolojilerin gösterilmesi
- **Canlı Demo ve GitHub Linkleri**: Projelerin canlı versiyonlarına ve kaynak kodlarına erişim

### 👤 Hakkımda Sayfası
- **Deneyimler**: İş deneyimleri ve eğitim geçmişi
- **Yetenekler**: Teknik ve kişisel yetenekler
- **Sertifikalar**: Alınan sertifikalar ve başarılar

### 📧 İletişim
- **İletişim Formu**: EmailJS entegrasyonu ile çalışan iletişim formu
- **Newsletter**: Yeni yazılardan haberdar olmak için abonelik sistemi
- **Sosyal Medya Linkleri**: GitHub ve LinkedIn profillerine direkt erişim

### 🎨 Kullanıcı Deneyimi
- **Dark/Light Mode**: Kullanıcı tercihine göre tema değiştirme
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Smooth Animations**: Framer Motion ile akıcı animasyonlar
- **Okuma İlerleme Çubuğu**: Sayfa scroll edildikçe gösterilen ilerleme çubuğu
- **SEO Optimizasyonu**: Her sayfa için özel SEO meta etiketleri ve Schema.org yapılandırılmış verileri

### ⚡ Performans
- **Hızlı Yükleme**: Vite ile optimize edilmiş build süreci
- **Cache Sistemi**: Popüler sayfaların önceden cache'lenmesi
- **Lazy Loading**: Görsellerin ve bileşenlerin ihtiyaç duyulduğunda yüklenmesi

## 🛠️ Kullanılan Teknolojiler

### Frontend
- **React 18**: Modern React hooks ve component yapısı
- **React Router**: Sayfa yönlendirme ve navigasyon
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animasyon ve geçiş efektleri
- **Lucide React**: Modern ikon kütüphanesi

### Build Tools
- **Vite**: Hızlı build tool ve development server
- **PostCSS**: CSS işleme
- **Autoprefixer**: CSS vendor prefix'leri

### Servisler
- **EmailJS**: İletişim formu ve newsletter için email servisi

## 📁 Proje Yapısı

```
blog-app/
├── public/              # Statik dosyalar (logo, resimler, favicon)
├── src/
│   ├── components/      # Yeniden kullanılabilir React bileşenleri
│   │   ├── BlogCard.jsx
│   │   ├── CommentSection.jsx
│   │   ├── Layout.jsx
│   │   ├── RelatedPosts.jsx
│   │   └── SEOHead.jsx
│   ├── context/         # React Context API (Theme, Cache)
│   ├── data/           # Blog yazıları ve statik veriler
│   ├── pages/          # Sayfa bileşenleri
│   │   ├── Home.jsx
│   │   ├── BlogPost.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Projects.jsx
│   │   └── Category.jsx
│   ├── services/       # Harici servis entegrasyonları
│   ├── App.jsx         # Ana uygulama bileşeni
│   └── main.jsx        # Uygulama giriş noktası
└── package.json
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v18 veya üzeri)
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

3. **Tarayıcıda açın:**
```
http://localhost:5173
```

### Production Build

```bash
npm run build
```

Build edilmiş dosyalar `dist/` klasöründe oluşturulacaktır.

```bash
npm run preview
```

## 🔧 Yapılandırma

### EmailJS Ayarları
İletişim formu ve newsletter için EmailJS servisi kullanılmaktadır. Ayarlar için `src/services/emailService.js` dosyasını düzenleyin.

Detaylı kurulum için `EMAIL_KURULUM.md` dosyasına bakabilirsiniz.

### Tema Renkleri
Tema renkleri `tailwind.config.js` dosyasında tanımlanmıştır. İstediğiniz renkleri buradan değiştirebilirsiniz.

## 📝 Blog Yazısı Ekleme

Yeni blog yazısı eklemek için `src/data/posts.js` dosyasına yeni bir obje ekleyin:

```javascript
{
  id: 4,
  slug: 'yeni-yazi-slug',
  title: 'Yazı Başlığı',
  excerpt: 'Kısa açıklama...',
  content: '# İçerik...',
  category: 'Kategori',
  tags: ['tag1', 'tag2'],
  heroImage: '/images/hero.jpg',
  publishedAt: '2024-01-01',
  views: 0
}
```

## 🎨 Özelleştirme

### Logo Değiştirme
Logo dosyasını `public/logo.png` olarak ekleyin. Logo otomatik olarak header, footer ve favicon'da kullanılacaktır.

### Renkler
`tailwind.config.js` dosyasındaki `primary` ve `secondary` renk değerlerini değiştirerek sitenin renk temasını özelleştirebilirsiniz.

## 📄 Lisans

Bu proje kişisel kullanım için geliştirilmiştir.

## 👨‍💻 Geliştirici

**Resul Demir**
- Email: resuldemir.dev@gmail.com
- GitHub: [@resuldemir123](https://github.com/resuldemir123)
- LinkedIn: [Resul Demir](https://www.linkedin.com/in/resul-demir-3841912a8/)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
