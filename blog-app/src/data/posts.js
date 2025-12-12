export const blogPosts = [
  {
    id: 1,
    slug: 'react-19-yenilikleri',
    title: 'React 19 ile Gelen Yenilikler',
    excerpt: 'React 19, performans iyileştirmeleri ve yeni özelliklerle geliyor. Bu yazıda en önemli değişiklikleri inceliyoruz.',
    content: `
# React 19 ile Gelen Yenilikler

React 19, Facebook ekibi tarafından geliştirilen ve web dünyasında devrim yaratan kütüphanenin en son sürümüdür.

## Öne Çıkan Özellikler

### 1. React Compiler
React Compiler, kodunuzu otomatik olarak optimize eder. Artık useMemo ve useCallback kullanmanıza gerek kalmıyor!

\`\`\`jsx
// Eskiden
const memoizedValue = useMemo(() => computeExpensive(a, b), [a, b]);

// React 19 ile
const value = computeExpensive(a, b); // Otomatik optimize!
\`\`\`

### 2. Server Components
Server Components ile sunucu tarafında render yapabilir, client bundle boyutunu küçültebilirsiniz.

### 3. Actions
Form işlemleri artık çok daha kolay:

\`\`\`jsx
async function submitForm(formData) {
  'use server';
  await saveToDatabase(formData);
}

<form action={submitForm}>
  <input name="email" />
  <button type="submit">Kaydet</button>
</form>
\`\`\`

## Performans İyileştirmeleri

- **Hydration iyileştirmeleri**: Sayfa yükleme süreleri %30 azaldı
- **Concurrent rendering**: Daha akıcı kullanıcı deneyimi
- **Automatic batching**: State güncellemeleri otomatik gruplandırılıyor

## Sonuç

React 19, modern web geliştirmenin geleceğini şekillendiriyor. Yeni projelerde kesinlikle denemelisiniz!
    `,
    category: 'React',
    tags: ['React', 'JavaScript', 'Frontend', 'Web Development'],
    author: 'Resul Demir',
    publishedAt: '2024-12-01',
    readingTime: 8,
    heroImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
    views: 1250,
    isNew: true,
    seo: {
      metaDescription: 'React 19 ile gelen yeni özellikler, performans iyileştirmeleri ve Server Components hakkında detaylı inceleme.',
      keywords: ['React 19', 'React yenilikler', 'Server Components', 'React Compiler'],
      canonicalUrl: '/post/react-19-yenilikleri'
    }
  },
  {
    id: 2,
    slug: 'tailwind-css-ipuclari',
    title: 'Tailwind CSS ile Hızlı ve Modern UI Geliştirme',
    excerpt: 'Tailwind CSS kullanarak profesyonel arayüzler oluşturmanın en iyi yollarını keşfedin.',
    content: `
# Tailwind CSS ile Hızlı ve Modern UI Geliştirme

Tailwind CSS, utility-first yaklaşımıyla CSS yazma şeklimizi tamamen değiştirdi.

## Neden Tailwind?

1. **Hızlı geliştirme**: CSS dosyaları arasında geçiş yapmaya gerek yok
2. **Tutarlı tasarım**: Önceden tanımlı spacing ve renk sistemi
3. **Küçük bundle boyutu**: Kullanılmayan CSS'ler otomatik temizlenir

## En İyi Pratikler

### Component Sınıfları
\`\`\`jsx
// Tekrar eden stilleri @apply ile birleştirin
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
  }
}
\`\`\`

### Dark Mode Desteği
\`\`\`html
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  Tema değişimine uyumlu içerik
</div>
\`\`\`

### Responsive Tasarım
\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Ekran boyutuna göre grid değişir -->
</div>
\`\`\`

## Sonuç

Tailwind CSS, modern web projelerinde vazgeçilmez bir araç haline geldi. Öğrenme eğrisi kısa ve verimlilik artışı büyük!
    `,
    category: 'CSS',
    tags: ['Tailwind CSS', 'CSS', 'Frontend', 'UI Design'],
    author: 'Resul Demir',
    publishedAt: '2024-11-25',
    readingTime: 6,
    heroImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=600&fit=crop',
    views: 980,
    isNew: true,
    seo: {
      metaDescription: 'Tailwind CSS ile hızlı ve modern UI geliştirme teknikleri, best practices ve ipuçları.',
      keywords: ['Tailwind CSS', 'CSS framework', 'UI geliştirme', 'responsive design'],
      canonicalUrl: '/post/tailwind-css-ipuclari'
    }
  },
  {
    id: 3,
    slug: 'javascript-async-await',
    title: 'JavaScript Async/Await Derinlemesine İnceleme',
    excerpt: 'Asenkron JavaScript programlamayı async/await ile nasıl daha okunabilir hale getireceğinizi öğrenin.',
    content: `
# JavaScript Async/Await Derinlemesine İnceleme

Async/await, Promise'leri daha okunabilir bir şekilde kullanmamızı sağlar.

## Promise vs Async/Await

### Promise ile:
\`\`\`javascript
function fetchUser(id) {
  return fetch(\`/api/users/\${id}\`)
    .then(response => response.json())
    .then(user => {
      return fetch(\`/api/posts?userId=\${user.id}\`);
    })
    .then(response => response.json())
    .catch(error => console.error(error));
}
\`\`\`

### Async/Await ile:
\`\`\`javascript
async function fetchUser(id) {
  try {
    const userResponse = await fetch(\`/api/users/\${id}\`);
    const user = await userResponse.json();
    
    const postsResponse = await fetch(\`/api/posts?userId=\${user.id}\`);
    const posts = await postsResponse.json();
    
    return { user, posts };
  } catch (error) {
    console.error(error);
  }
}
\`\`\`

## Paralel İstekler

\`\`\`javascript
async function fetchAllData() {
  const [users, posts, comments] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/posts').then(r => r.json()),
    fetch('/api/comments').then(r => r.json())
  ]);
  
  return { users, posts, comments };
}
\`\`\`

## Error Handling

\`\`\`javascript
async function safeApiCall() {
  try {
    const data = await riskyOperation();
    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}
\`\`\`

## Sonuç

Async/await, asenkron kodunuzu senkron kod gibi yazmayı sağlar. Bu da kodun okunabilirliğini ve bakımını kolaylaştırır.
    `,
    category: 'JavaScript',
    tags: ['JavaScript', 'Async', 'Promise', 'ES6+'],
    author: 'Resul Demir',
    publishedAt: '2024-11-20',
    readingTime: 10,
    heroImage: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=1200&h=600&fit=crop',
    views: 1520,
    isNew: false,
    seo: {
      metaDescription: 'JavaScript async/await kullanımı, Promise ile karşılaştırma ve best practices.',
      keywords: ['async await', 'JavaScript', 'Promise', 'asenkron programlama'],
      canonicalUrl: '/post/javascript-async-await'
    }
  },
  {
    id: 4,
    slug: 'aspnet-core-web-api',
    title: 'ASP.NET Core ile RESTful API Geliştirme',
    excerpt: 'ASP.NET Core kullanarak modern ve ölçeklenebilir REST API\'ler nasıl geliştirilir?',
    content: `
# ASP.NET Core ile RESTful API Geliştirme

ASP.NET Core, Microsoft'un modern, cross-platform web framework'üdür.

## Proje Oluşturma

\`\`\`bash
dotnet new webapi -n MyApi
cd MyApi
dotnet run
\`\`\`

## Controller Örneği

\`\`\`csharp
[ApiController]
[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserService _userService;

    public UsersController(IUserService userService)
    {
        _userService = userService;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        var users = await _userService.GetAllAsync();
        return Ok(users);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<User>> GetUser(int id)
    {
        var user = await _userService.GetByIdAsync(id);
        if (user == null)
            return NotFound();
        return Ok(user);
    }

    [HttpPost]
    public async Task<ActionResult<User>> CreateUser(CreateUserDto dto)
    {
        var user = await _userService.CreateAsync(dto);
        return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
    }
}
\`\`\`

## Entity Framework Core

\`\`\`csharp
public class AppDbContext : DbContext
{
    public DbSet<User> Users { get; set; }
    public DbSet<Post> Posts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>()
            .HasMany(u => u.Posts)
            .WithOne(p => p.Author)
            .HasForeignKey(p => p.AuthorId);
    }
}
\`\`\`

## JWT Authentication

\`\`\`csharp
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidIssuer = Configuration["Jwt:Issuer"],
            ValidAudience = Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
        };
    });
\`\`\`

## Sonuç

ASP.NET Core, enterprise seviyesinde API'ler geliştirmek için mükemmel bir seçimdir.
    `,
    category: 'Backend',
    tags: ['ASP.NET Core', 'C#', 'REST API', 'Backend'],
    author: 'Resul Demir',
    publishedAt: '2024-11-15',
    readingTime: 12,
    heroImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop',
    views: 890,
    isNew: false,
    seo: {
      metaDescription: 'ASP.NET Core ile RESTful API geliştirme rehberi, Entity Framework ve JWT authentication.',
      keywords: ['ASP.NET Core', 'REST API', 'C#', 'Entity Framework'],
      canonicalUrl: '/post/aspnet-core-web-api'
    }
  },
  {
    id: 5,
    slug: 'makine-ogrenmesi-python',
    title: 'Python ile Makine Öğrenmesine Giriş',
    excerpt: 'Makine öğrenmesi temellerini Python ve scikit-learn ile öğrenin.',
    content: `
# Python ile Makine Öğrenmesine Giriş

Makine öğrenmesi, bilgisayarların açıkça programlanmadan verilerden öğrenmesini sağlar.

## Gerekli Kütüphaneler

\`\`\`python
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
\`\`\`

## Veri Hazırlama

\`\`\`python
# Veri yükleme
df = pd.read_csv('data.csv')

# Özellik ve hedef ayırma
X = df.drop('target', axis=1)
y = df['target']

# Eğitim-test ayırma
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Ölçeklendirme
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
\`\`\`

## Model Eğitimi

\`\`\`python
# Model oluşturma
model = RandomForestClassifier(n_estimators=100, random_state=42)

# Eğitim
model.fit(X_train_scaled, y_train)

# Tahmin
y_pred = model.predict(X_test_scaled)

# Değerlendirme
print(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")
print(classification_report(y_test, y_pred))
\`\`\`

## Model Kaydetme

\`\`\`python
import joblib

# Kaydet
joblib.dump(model, 'model.pkl')
joblib.dump(scaler, 'scaler.pkl')

# Yükle
loaded_model = joblib.load('model.pkl')
\`\`\`

## Sonuç

Bu temel adımlarla makine öğrenmesi projelerinize başlayabilirsiniz. Daha ileri konular için deep learning'e bakabilirsiniz.
    `,
    category: 'Machine Learning',
    tags: ['Python', 'Machine Learning', 'scikit-learn', 'AI'],
    author: 'Resul Demir',
    publishedAt: '2024-11-10',
    readingTime: 15,
    heroImage: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&h=600&fit=crop',
    views: 2100,
    isNew: false,
    seo: {
      metaDescription: 'Python ile makine öğrenmesi temelleri, scikit-learn kullanımı ve model eğitimi.',
      keywords: ['Machine Learning', 'Python', 'scikit-learn', 'yapay zeka'],
      canonicalUrl: '/post/makine-ogrenmesi-python'
    }
  },
  {
    id: 6,
    slug: 'git-workflow-stratejileri',
    title: 'Git Workflow Stratejileri ve En İyi Pratikler',
    excerpt: 'Ekip çalışmasında Git kullanımını optimize eden workflow stratejileri.',
    content: `
# Git Workflow Stratejileri ve En İyi Pratikler

Doğru Git workflow'u seçmek, ekip verimliliğini artırır.

## Git Flow

\`\`\`
main
  └── develop
        ├── feature/user-auth
        ├── feature/payment
        └── release/v1.0
              └── hotfix/critical-bug
\`\`\`

### Branch Türleri
- **main**: Production kodu
- **develop**: Geliştirme branch'i
- **feature/***: Yeni özellikler
- **release/***: Sürüm hazırlığı
- **hotfix/***: Acil düzeltmeler

## Commit Mesajları

\`\`\`bash
# Conventional Commits formatı
feat: add user authentication
fix: resolve login redirect issue
docs: update API documentation
refactor: simplify payment logic
test: add unit tests for user service
\`\`\`

## Pull Request Template

\`\`\`markdown
## Değişiklik Açıklaması
[Yaptığınız değişiklikleri kısaca açıklayın]

## İlişkili Issue
Closes #123

## Değişiklik Türü
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change

## Test
- [ ] Unit testler yazıldı
- [ ] Manuel test yapıldı
\`\`\`

## Faydalı Git Komutları

\`\`\`bash
# Interactive rebase
git rebase -i HEAD~3

# Stash
git stash
git stash pop

# Cherry-pick
git cherry-pick abc123

# Reflog (kayıp commitleri bul)
git reflog
\`\`\`

## Sonuç

İyi bir Git workflow'u, kod kalitesini artırır ve ekip içi işbirliğini kolaylaştırır.
    `,
    category: 'DevOps',
    tags: ['Git', 'Version Control', 'DevOps', 'Team Work'],
    author: 'Resul Demir',
    publishedAt: '2024-11-05',
    readingTime: 7,
    heroImage: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1200&h=600&fit=crop',
    views: 760,
    isNew: false,
    seo: {
      metaDescription: 'Git workflow stratejileri, Git Flow, commit conventions ve ekip çalışması için best practices.',
      keywords: ['Git', 'Git Flow', 'version control', 'ekip çalışması'],
      canonicalUrl: '/post/git-workflow-stratejileri'
    }
  }
]

export const categories = [
  { name: 'React', count: 1, color: 'bg-blue-500' },
  { name: 'JavaScript', count: 1, color: 'bg-yellow-500' },
  { name: 'CSS', count: 1, color: 'bg-pink-500' },
  { name: 'Backend', count: 1, color: 'bg-green-500' },
  { name: 'Machine Learning', count: 1, color: 'bg-purple-500' },
  { name: 'DevOps', count: 1, color: 'bg-orange-500' }
]

export const authorInfo = {
  name: 'Resul Demir',
  title: 'Full Stack Developer',
  bio: 'Web teknolojileri ve yazılım geliştirme üzerine tutkulu bir geliştirici. React, ASP.NET Core ve Machine Learning alanlarında deneyimli.',
  avatar: '/resul.png',
  social: {
    github: 'https://github.com/resuldemir123',
    linkedin: 'https://www.linkedin.com/in/resul-demir-3841912a8/',
    email: 'resuldemir.dev@gmail.com'
  }
}

