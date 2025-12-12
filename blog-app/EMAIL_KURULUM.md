# 📧 Email Bildirimi Kurulum Rehberi

Bu rehberi takip ederek, blog sitenize mesaj veya yorum geldiğinde **anında email bildirimi** alabilirsiniz.

## 🚀 Hızlı Kurulum (5 dakika)

### Adım 1: EmailJS Hesabı Oluştur

1. **https://www.emailjs.com** adresine git
2. "Sign Up Free" butonuna tıkla
3. **Google ile giriş yap** (hızlı ve kolay)

### Adım 2: Email Service Ekle

1. Dashboard'da **"Email Services"** sekmesine git
2. **"Add New Service"** butonuna tıkla
3. **Gmail** seç (veya başka bir email sağlayıcı)
4. Gmail hesabınla bağlan: `resuldemir.dev@gmail.com`
5. **Service ID**'yi not al (örn: `service_abc123`)

### Adım 3: Email Template Oluştur

1. **"Email Templates"** sekmesine git
2. **"Create New Template"** butonuna tıkla
3. Aşağıdaki içeriği kopyala yapıştır:

**Subject (Konu):**
```
{{subject}}
```

**Content (İçerik):**
```html
<h2>🔔 Yeni Mesaj Aldınız!</h2>

<table style="margin: 20px 0;">
  <tr>
    <td><strong>👤 Gönderen:</strong></td>
    <td>{{from_name}}</td>
  </tr>
  <tr>
    <td><strong>📧 E-posta:</strong></td>
    <td>{{from_email}}</td>
  </tr>
  <tr>
    <td><strong>📅 Tarih:</strong></td>
    <td>{{date}}</td>
  </tr>
</table>

<hr>

<h3>💬 Mesaj:</h3>
<p style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
{{message}}
</p>

<hr>
<p style="color: #888; font-size: 12px;">
Bu mesaj {{site_name}} üzerinden gönderildi.
</p>
```

4. **Settings** sekmesinde:
   - **To Email:** `resuldemir.dev@gmail.com`
   - **From Name:** `{{from_name}}`
   - **Reply To:** `{{from_email}}`

5. **Save** butonuna tıkla
6. **Template ID**'yi not al (örn: `template_xyz789`)

### Adım 4: Public Key Al

1. Sağ üst köşede profil ikonuna tıkla
2. **"Account"** seçeneğine git
3. **"Public Key"** kısmındaki değeri kopyala (örn: `user_AbCdEfGhIjKlMnOp`)

### Adım 5: Kodu Güncelle

`src/services/emailService.js` dosyasını aç ve şu satırları güncelle:

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'BURAYA_SERVICE_ID_YAZ',      // örn: 'service_abc123'
  templateId: 'BURAYA_TEMPLATE_ID_YAZ',    // örn: 'template_xyz789'
  publicKey: 'BURAYA_PUBLIC_KEY_YAZ',      // örn: 'user_AbCdEfGhIjKlMnOp'
  toEmail: 'resuldemir.dev@gmail.com'
}
```

### Adım 6: Test Et

1. `npm run dev` ile siteyi başlat
2. **İletişim** sayfasına git
3. Test mesajı gönder
4. Email'ini kontrol et! 🎉

---

## ✅ Ne Zaman Email Alırsınız?

| Olay | Email Alırsınız |
|------|-----------------|
| 📬 İletişim formu gönderildiğinde | ✅ Evet |
| 💬 Blog yazısına yorum yapıldığında | ✅ Evet |
| 📰 Yeni abone olunduğunda | ✅ Evet |

---

## 🆓 Ücretsiz Plan Limitleri

EmailJS ücretsiz plan ile:
- **200 email/ay** gönderebilirsiniz
- Kişisel blog için fazlasıyla yeterli!

---

## 🔧 Sorun Giderme

### Email gelmiyor?

1. **Spam klasörünü** kontrol edin
2. EmailJS dashboard'da **"Email History"** kontrol edin
3. Browser console'da hata var mı bakın (F12 > Console)

### "Email service not configured" hatası?

- `emailService.js` dosyasında credential'ları doğru girdiğinizden emin olun
- Değerlerde boşluk veya tırnak hatası olmadığından emin olun

---

## 📱 Mobil Bildirim İstiyorsanız

Gmail uygulamasında **bildirimler açık** olduğundan emin olun. Böylece telefona da anlık bildirim gelir!

