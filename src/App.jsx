import React, { Suspense, lazy } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'


// --- 1. Eager Loading (Critical for First Meaningful Paint) ---
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

// --- 2. Lazy Loading (Loaded only as needed to improve PageSpeed) ---
const AboutSection = lazy(() => import('./components/AboutSection'))
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const PartnersSection = lazy(() => import('./components/PartnersSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))
const Footer = lazy(() => import('./components/Footer'))
const BackToTop = lazy(() => import('./components/BackToTop'))
const CookieConsent = lazy(() => import('./components/CookieConsent'))

// Loading placeholder for layout stability
const SectionLoader = () => <div className="h-20 bg-transparent" />

function App() {
  const siteUrl = "https://yiyuan-env.github.io/"

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden relative transition-colors duration-300">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:top-4 focus:left-4 bg-white text-forest-green px-6 py-2 rounded-full font-bold shadow-2xl border-2 border-forest-green transition-all">
            跳轉到主要內容
          </a>
          {/* --- SEO & Meta Tags --- */}
          <Helmet>
            <title>邑沅有限公司</title>
            <meta name="description" content="邑沅有限公司致力於環境教育與永續發展，提供ESG顧問諮詢、環教課程開發、環教設施場所申辦及多媒體製作服務。與您共同建立綠色永續未來。" />
            <meta name="keywords" content="邑沅, 邑沅有限公司, 環境教育, 永續發展, ESG顧問, 台北環境教育, 永續經營, 環教場域申辦" />
            <meta name="author" content="邑沅有限公司" />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content="邑沅有限公司 - 專業環境教育與永續發展顧問" />
            <meta property="og:description" content="深耕環境教育，提供客製化永續顧問服務。點擊了解更多邑沅的成功案例。" />
            <meta property="og:image" content={`${siteUrl}/og-image.png`} />

            <link rel="canonical" href={siteUrl} />

            <script type="application/ld+json">
              {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "邑沅有限公司",
                "url": "${siteUrl}",
                "logo": "${siteUrl}/yiyuan.svg",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+886-2-2388-0028",
                  "contactType": "customer service",
                  "areaServed": "TW",
                  "availableLanguage": "Chinese"
                },
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "長安西路303號10樓之1",
                  "addressLocality": "台北市大同區",
                  "postalCode": "10341",
                  "addressCountry": "TW"
                }
              }
            `}
            </script>
          </Helmet>

          {/* --- Layout Sections --- */}
          <Navbar />

          <main id="main-content">
            {/* Hero section is rendered immediately to satisfy LCP */}
            <HeroSection />

            {/* Wrap non-critical sections in Suspense to split the JS bundle */}
            <Suspense fallback={<SectionLoader />}>
              <AboutSection />
              <ServicesSection />
              <ProjectsSection />
              <PartnersSection />
              <ContactSection />
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer />
            <BackToTop />
            <CookieConsent />
          </Suspense>
        </div>
      </ThemeProvider>
    </HelmetProvider >
  )
}

export default App
