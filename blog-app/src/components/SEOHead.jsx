import { useEffect } from 'react'

export default function SEOHead({ 
  title, 
  description, 
  keywords = [], 
  canonicalUrl,
  ogImage,
  ogType = 'article',
  author = 'Resul Demir',
  publishedTime,
  modifiedTime,
  category,
  tags = [],
  schemaType = 'BlogPosting'
}) {
  const siteName = 'Resul Demir Blog'
  const siteUrl = 'https://resuldemir.dev'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl
  const fullOgImage = ogImage || `${siteUrl}/og-image.jpg`

  useEffect(() => {
    // Update document title
    document.title = fullTitle

    // Update meta tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords.join(', '))
    updateMetaTag('author', author)
    updateMetaTag('robots', 'index, follow')

    // Open Graph tags
    updateMetaTag('og:title', fullTitle, 'property')
    updateMetaTag('og:description', description, 'property')
    updateMetaTag('og:image', fullOgImage, 'property')
    updateMetaTag('og:url', fullCanonicalUrl, 'property')
    updateMetaTag('og:type', ogType, 'property')
    updateMetaTag('og:site_name', siteName, 'property')

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name')
    updateMetaTag('twitter:title', fullTitle, 'name')
    updateMetaTag('twitter:description', description, 'name')
    updateMetaTag('twitter:image', fullOgImage, 'name')

    // Article specific tags
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, 'property')
    }
    if (modifiedTime) {
      updateMetaTag('article:modified_time', modifiedTime, 'property')
    }
    if (author) {
      updateMetaTag('article:author', author, 'property')
    }
    if (category) {
      updateMetaTag('article:section', category, 'property')
    }
    tags.forEach((tag, index) => {
      updateMetaTag(`article:tag:${index}`, tag, 'property')
    })

    // Canonical URL
    updateCanonicalUrl(fullCanonicalUrl)

    // Schema.org structured data
    updateSchemaMarkup({
      schemaType,
      title,
      description,
      url: fullCanonicalUrl,
      image: fullOgImage,
      author,
      publishedTime,
      modifiedTime,
      category,
      tags
    })

    return () => {
      // Cleanup schema markup on unmount
      const existingSchema = document.querySelector('script[type="application/ld+json"]')
      if (existingSchema) {
        existingSchema.remove()
      }
    }
  }, [title, description, keywords, canonicalUrl, ogImage, author, publishedTime, modifiedTime, category, tags])

  return null
}

function updateMetaTag(name, content, attribute = 'name') {
  if (!content) return

  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  
  element.setAttribute('content', content)
}

function updateCanonicalUrl(url) {
  let link = document.querySelector('link[rel="canonical"]')
  
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  
  link.setAttribute('href', url)
}

function updateSchemaMarkup({ schemaType, title, description, url, image, author, publishedTime, modifiedTime, category, tags }) {
  // Remove existing schema
  const existingSchema = document.querySelector('script[type="application/ld+json"]')
  if (existingSchema) {
    existingSchema.remove()
  }

  let schema

  if (schemaType === 'BlogPosting') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: description,
      url: url,
      image: image,
      author: {
        '@type': 'Person',
        name: author,
        url: 'https://resuldemir.dev/about'
      },
      publisher: {
        '@type': 'Person',
        name: 'Resul Demir',
        logo: {
          '@type': 'ImageObject',
          url: 'https://resuldemir.dev/logo.png'
        }
      },
      datePublished: publishedTime,
      dateModified: modifiedTime || publishedTime,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url
      },
      articleSection: category,
      keywords: tags.join(', ')
    }
  } else if (schemaType === 'Person') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Resul Demir',
      url: 'https://resuldemir.dev',
      image: image,
      jobTitle: 'Full Stack Developer',
      email: 'resuldemir.dev@gmail.com',
      sameAs: [
        'https://github.com/resuldemir123',
        'https://www.linkedin.com/in/resul-demir-3841912a8/'
      ]
    }
  } else if (schemaType === 'WebSite') {
    schema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Resul Demir Blog',
      url: 'https://resuldemir.dev',
      description: description,
      author: {
        '@type': 'Person',
        name: 'Resul Demir'
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://resuldemir.dev/search?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    }
  }

  if (schema) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(schema)
    document.head.appendChild(script)
  }
}

