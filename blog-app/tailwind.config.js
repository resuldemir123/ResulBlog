/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Ana Zemin (Canvas) - Gray-50
        canvas: '#F9FAFB',
        'canvas-dark': '#0F172A',
        
        // Primary Accent - Emerald-500 (CTA, vurgu)
        primary: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
        },
        
        // Secondary Accent - Blue-500 (Linkler, navigasyon)
        secondary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        
        // Metin Renkleri - Gray-800 (Yüksek kontrast)
        text: {
          primary: '#1F2937',   // Gray-800 - Ana metin
          secondary: '#4B5563', // Gray-600 - İkincil metin
          muted: '#9CA3AF',     // Gray-400 - Soluk metin
        },
        
        // Dark mode metin renkleri
        'text-dark': {
          primary: '#F9FAFB',   // Gray-50
          secondary: '#D1D5DB', // Gray-300
          muted: '#9CA3AF',     // Gray-400
        },
        
        // Kart Zemin - White
        card: '#FFFFFF',
      },
      
      fontFamily: {
        // Ana font - DM Sans (modern, okunabilir)
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        // Başlık fontu - Playfair Display (zarif)
        display: ['Playfair Display', 'serif'],
        // Kod fontu - JetBrains Mono (net)
        mono: ['JetBrains Mono', 'monospace'],
        // Disleksi dostu font - Lexend (alternatif olarak OpenDyslexic)
        dyslexic: ['OpenDyslexic', 'Lexend', 'sans-serif'],
      },
      
      // Adaptive Typography - Mobil: 16-18px, Masaüstü: 18-20px
      fontSize: {
        'body-mobile': ['16px', { lineHeight: '1.6' }],
        'body-desktop': ['18px', { lineHeight: '1.7' }],
        'heading-1': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      
      // Gölgeler - Kart ve hover efektleri
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card-dark': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)',
        'card-hover-dark': '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
      },
      
      // Animasyonlar - Yumuşak geçişler
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      
      // Spacing - F-Pattern/Z-Pattern düzeni için
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      
      // Border radius - Modern görünüm
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      // Geçişler - Smooth transitions
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      
      // Ring - Focus states için
      ringWidth: {
        '3': '3px',
      },
      
      ringOffsetWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
