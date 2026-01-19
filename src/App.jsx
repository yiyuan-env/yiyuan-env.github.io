import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

// Component Imports
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import PartnersSection from './components/PartnersSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CookieConsent from './components/CookieConsent'

function App() {
  // Update this to your official domain when you have it
  const siteUrl = "https://yiyuan-env.com.tw" 

  return (
    <HelmetProvider>
      <div className="w-full bg-white overflow-x-hidden relative">
        {/* --- SEO & Meta Tags --- */}
        <Helmet>
          {/* 1. Basic Meta Tags */}
          <title>邑沅有限公司 | 專業環境教育與永續發展顧問</title>
          <meta name="description" content="邑沅有限公司致力於環境教育與永續發展，提供ESG顧問諮詢、環教課程開發、環教設施場所申辦及多媒體製作服務。與您共同建立綠色永續未來。" />
          <meta name="keywords" content="邑沅, 邑沅有限公司, 環境教育, 永續發展, ESG顧問, 台北環境教育, 永續經營, 環教場域申辦" />
          <meta name="author" content="邑沅有限公司" />

          {/* 2. Open Graph (For Social Media Previews: Line, FB) */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:title" content="邑沅有限公司 - 專業環境教育與永續發展顧問" />
          <meta property="og:description" content="深耕環境教育，提供客製化永續顧問服務。點擊了解更多邑沅的成功案例。" />
          <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />

          {/* 3. Canonical Link */}
          <link rel="canonical" href={siteUrl} />

          {/* 4. Structured Data (JSON-LD) for Google Knowledge Graph */}
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
        
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProjectsSection />
          <PartnersSection />
        </main>

        <Footer />

        {/* --- Global Interactive Components --- */}
        <BackToTop />
        <CookieConsent />
      </div>
    </HelmetProvider>
  )
}

export default App