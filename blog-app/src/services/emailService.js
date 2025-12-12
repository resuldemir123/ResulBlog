import emailjs from '@emailjs/browser'

// ==========================================
// EmailJS Yapılandırması
// ==========================================
// 
// KURULUM ADIMLARI:
// 
// 1. https://www.emailjs.com adresine git
// 2. Ücretsiz hesap oluştur (Google ile giriş yapabilirsin)
// 3. "Email Services" > "Add New Service" > Gmail seç
//    - Gmail hesabını bağla (resuldemir.dev@gmail.com)
//    - Service ID'yi kopyala (örn: service_abc123)
// 
// 4. "Email Templates" > "Create New Template"
//    - Aşağıdaki template'i kullan:
// 
//    Subject: {{subject}}
//    
//    Content:
//    Yeni Mesaj Aldınız!
//    
//    Gönderen: {{from_name}}
//    E-posta: {{from_email}}
//    Tarih: {{date}}
//    
//    Konu: {{subject}}
//    
//    Mesaj:
//    {{message}}
//    
//    ---
//    Bu mesaj {{site_name}} iletişim formundan gönderildi.
//
//    - Template ID'yi kopyala (örn: template_xyz789)
//    - "To Email" kısmına: resuldemir.dev@gmail.com yaz
//
// 5. "Account" > "Public Key"i kopyala (örn: user_AbCdEfGhIjKlMnOp)
//
// 6. Aşağıdaki değerleri güncelle:
// ==========================================

// ╔════════════════════════════════════════════════════════════╗
// ║  🔧 EMAILJS YAPILANDIRMASI - BU DEĞERLERİ GÜNCELLE!       ║
// ╠════════════════════════════════════════════════════════════╣
// ║  EmailJS hesabından aldığın değerleri buraya yaz:         ║
// ╚════════════════════════════════════════════════════════════╝

const EMAILJS_CONFIG = {
  // 👇 EmailJS Dashboard > Email Services > Service ID
  serviceId: 'service_8ijg75d',
  
  // 👇 EmailJS Dashboard > Email Templates > Template ID  
  templateId: 'template_4k8jque',
  
  // 👇 EmailJS Dashboard > Account > Public Key
  publicKey: 'Bt0JOvnhKb2vIdTmF',
  
  // 👇 Email'lerin gönderileceği adres (senin email'in)
  toEmail: 'resuldemir.dev@gmail.com'
}

// EmailJS'i başlat
const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_CONFIG.publicKey)
    return true
  }
  return false
}

// Yapılandırma kontrolü
const isConfigured = () => {
  return EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' && 
         EMAILJS_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' &&
         EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY'
}

// Tarih formatla
const formatDate = () => {
  return new Date().toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

// ==========================================
// İLETİŞİM FORMU - Ana fonksiyon
// ==========================================
export async function sendContactForm({ name, email, subject, message }) {
  // Yapılandırma kontrolü
  if (!isConfigured()) {
    console.warn('⚠️ EmailJS yapılandırılmamış!')
    console.log('📧 Demo mod: Mesaj konsola yazdırıldı')
    console.log({
      from: `${name} <${email}>`,
      subject,
      message,
      date: formatDate()
    })
    
    // Demo modda başarılı döndür (test için)
    return { success: true, demo: true }
  }

  // EmailJS'i başlat
  initEmailJS()

  try {
    const templateParams = {
      to_email: EMAILJS_CONFIG.toEmail,
      from_name: name,
      from_email: email,
      reply_to: email,
      subject: subject,
      message: message,
      site_name: 'Resul Demir Blog',
      date: formatDate()
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    console.log('✅ Email başarıyla gönderildi:', response.status)
    return { success: true, response }
  } catch (error) {
    console.error('❌ Email gönderme hatası:', error)
    throw new Error('Email gönderilemedi. Lütfen daha sonra tekrar deneyin.')
  }
}

// ==========================================
// YORUM BİLDİRİMİ
// ==========================================
export async function sendCommentNotification({ postTitle, postSlug, commenterName, commenterEmail, commentContent }) {
  if (!isConfigured()) {
    console.warn('⚠️ EmailJS yapılandırılmamış - Yorum bildirimi gönderilmedi')
    return { success: false, demo: true }
  }

  initEmailJS()

  try {
    const templateParams = {
      to_email: EMAILJS_CONFIG.toEmail,
      from_name: commenterName,
      from_email: commenterEmail,
      reply_to: commenterEmail,
      subject: `💬 Yeni Yorum: ${postTitle}`,
      message: `
Yeni bir yorum aldınız!

📝 Yazı: ${postTitle}
🔗 Link: https://resuldemir.dev/post/${postSlug}

👤 Yazan: ${commenterName}
📧 E-posta: ${commenterEmail}

💬 Yorum:
${commentContent}
      `.trim(),
      site_name: 'Resul Demir Blog',
      date: formatDate()
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    console.log('✅ Yorum bildirimi gönderildi:', response.status)
    return { success: true, response }
  } catch (error) {
    console.error('❌ Yorum bildirimi hatası:', error)
    return { success: false, error }
  }
}

// ==========================================
// ABONE BİLDİRİMİ
// ==========================================
export async function sendSubscriberNotification({ email, name = 'Anonim' }) {
  if (!isConfigured()) {
    console.warn('⚠️ EmailJS yapılandırılmamış - Abone bildirimi gönderilmedi')
    // LocalStorage'a kaydet
    const subscribers = JSON.parse(localStorage.getItem('blog_subscribers') || '[]')
    subscribers.push({ email, name, date: new Date().toISOString() })
    localStorage.setItem('blog_subscribers', JSON.stringify(subscribers))
    return { success: true, demo: true }
  }

  initEmailJS()

  try {
    const templateParams = {
      to_email: EMAILJS_CONFIG.toEmail,
      from_name: 'Abone Sistemi',
      from_email: email,
      reply_to: email,
      subject: `🎉 Yeni Abone: ${email}`,
      message: `
Yeni bir aboneniz var!

📧 E-posta: ${email}
👤 İsim: ${name}
📅 Tarih: ${formatDate()}

Toplam abone sayınızı kontrol etmek için EmailJS dashboard'a bakın.
      `.trim(),
      site_name: 'Resul Demir Blog',
      date: formatDate()
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    console.log('✅ Abone bildirimi gönderildi:', response.status)
    return { success: true, response }
  } catch (error) {
    console.error('❌ Abone bildirimi hatası:', error)
    return { success: false, error }
  }
}

// ==========================================
// BLOG POST BİLDİRİMİ (Yeni yazı bildirimi)
// ==========================================
export async function sendNewPostNotification({ title, excerpt, slug, subscribers }) {
  if (!isConfigured()) {
    console.warn('⚠️ EmailJS yapılandırılmamış')
    return { success: false, demo: true }
  }

  initEmailJS()

  // Her aboneye gönder
  const results = await Promise.allSettled(
    subscribers.map(async (subscriber) => {
      const templateParams = {
        to_email: subscriber.email,
        from_name: 'Resul Demir Blog',
        from_email: EMAILJS_CONFIG.toEmail,
        subject: `📚 Yeni Yazı: ${title}`,
        message: `
Merhaba ${subscriber.name || 'Okuyucu'}!

Yeni bir blog yazısı yayınlandı:

📝 ${title}

${excerpt}

🔗 Okumak için: https://resuldemir.dev/post/${slug}

---
Bu e-postayı Resul Demir Blog'a abone olduğunuz için alıyorsunuz.
        `.trim(),
        site_name: 'Resul Demir Blog',
        date: formatDate()
      }

      return emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )
    })
  )

  const successful = results.filter(r => r.status === 'fulfilled').length
  console.log(`✅ ${successful}/${subscribers.length} aboneye bildirim gönderildi`)
  
  return { success: true, sent: successful, total: subscribers.length }
}

// Export config check for UI
export const isEmailConfigured = isConfigured
