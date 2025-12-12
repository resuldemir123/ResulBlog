import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Contact from './pages/Contact'
import Category from './pages/Category'
import Projects from './pages/Projects'
import { useCache } from './context/CacheContext'
import { blogPosts } from './data/posts'

function App() {
  const { prefetchPopularPages } = useCache()

  // Popüler sayfaları önceden cache'le
  useEffect(() => {
    const popularPosts = blogPosts
      .sort((a, b) => b.views - a.views)
      .slice(0, 5)
      .map(post => ({
        key: `post-${post.slug}`,
        data: post
      }))

    prefetchPopularPages([
      { key: 'home-posts', data: blogPosts.slice(0, 10) },
      ...popularPosts
    ])
  }, [prefetchPopularPages])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<BlogPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </Layout>
  )
}

export default App
