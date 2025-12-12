import { createContext, useContext, useState, useCallback, useEffect } from 'react'

const CacheContext = createContext()

// Cache süresi: 5 dakika
const CACHE_DURATION = 5 * 60 * 1000

export function CacheProvider({ children }) {
  const [cache, setCache] = useState(() => {
    // localStorage'dan cache'i yükle
    const savedCache = localStorage.getItem('blogCache')
    if (savedCache) {
      try {
        const parsed = JSON.parse(savedCache)
        // Süresi geçmiş cache'leri temizle
        const now = Date.now()
        const validCache = {}
        Object.keys(parsed).forEach(key => {
          if (parsed[key].expiry > now) {
            validCache[key] = parsed[key]
          }
        })
        return validCache
      } catch {
        return {}
      }
    }
    return {}
  })

  // Cache'i localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('blogCache', JSON.stringify(cache))
  }, [cache])

  // Cache'e veri ekle
  const setToCache = useCallback((key, data) => {
    setCache(prev => ({
      ...prev,
      [key]: {
        data,
        expiry: Date.now() + CACHE_DURATION,
        timestamp: Date.now()
      }
    }))
  }, [])

  // Cache'den veri al
  const getFromCache = useCallback((key) => {
    const item = cache[key]
    if (!item) return null
    
    // Süre kontrolü
    if (Date.now() > item.expiry) {
      // Süresi geçmiş, cache'den sil
      setCache(prev => {
        const newCache = { ...prev }
        delete newCache[key]
        return newCache
      })
      return null
    }
    
    return item.data
  }, [cache])

  // Cache'i temizle
  const clearCache = useCallback(() => {
    setCache({})
    localStorage.removeItem('blogCache')
  }, [])

  // Belirli bir key'i cache'den sil
  const removeFromCache = useCallback((key) => {
    setCache(prev => {
      const newCache = { ...prev }
      delete newCache[key]
      return newCache
    })
  }, [])

  // Popüler sayfaları önceden cache'le
  const prefetchPopularPages = useCallback((pages) => {
    pages.forEach(page => {
      if (!cache[page.key]) {
        setToCache(page.key, page.data)
      }
    })
  }, [cache, setToCache])

  return (
    <CacheContext.Provider value={{
      cache,
      setToCache,
      getFromCache,
      clearCache,
      removeFromCache,
      prefetchPopularPages
    }}>
      {children}
    </CacheContext.Provider>
  )
}

export function useCache() {
  const context = useContext(CacheContext)
  if (!context) {
    throw new Error('useCache must be used within a CacheProvider')
  }
  return context
}

