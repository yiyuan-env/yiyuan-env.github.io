import React, { Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'
import { useTranslation } from 'react-i18next'

// Policy Content Definition Moved Inside App
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

// Sleek Skeleton Loader for improved UX (Page Layout Stability)
const SectionLoader = () => (
  <div className="w-full flex items-center justify-center p-12 lg:p-24 bg-gray-50 dark:bg-gray-800">
    <div className="w-full max-w-4xl space-y-4 animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3 mx-auto"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto mt-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
        <div className="h-48 bg-gray-200 dark:bg-gray-700 rounded-2xl"></div>
      </div>
    </div>
  </div>
)

function App() {
  const { t } = useTranslation()
  const [activePolicy, setActivePolicy] = React.useState(null)
  const siteUrl = "https://yiyuan-env.github.io/"

  const POLICIES = {
    privacy: { title: t("app.policies.privacy.title"), content: t("app.policies.privacy.content") },
    terms: { title: t("app.policies.terms.title"), content: t("app.policies.terms.content") },
    disclaimer: { title: t("app.policies.disclaimer.title"), content: t("app.policies.disclaimer.content") }
  }

  const showPolicy = (key) => setActivePolicy(POLICIES[key])

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden relative transition-colors duration-300">
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[200] focus:top-4 focus:left-4 bg-white text-forest-green px-6 py-2 rounded-full font-bold shadow-2xl border-2 border-forest-green transition-all">
            {t("app.jumpToMain")}
          </a>
          {/* --- SEO & Meta Tags --- */}
          <Helmet>
            <title>{t("app.meta.title")}</title>
            <meta name="description" content={t("app.meta.description")} />
            <meta name="keywords" content={t("app.meta.keywords")} />
            <meta name="author" content={t("app.meta.title")} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={t("app.meta.ogTitle")} />
            <meta property="og:description" content={t("app.meta.ogDescription")} />
            <meta property="og:image" content={`${siteUrl}/og-image.png`} />

            <link rel="canonical" href={siteUrl} />

            <script type="application/ld+json">
              {`
              {
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": "${siteUrl}#organization",
                    "name": "${t("app.meta.title")}",
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
                  },
                  {
                    "@type": "Service",
                    "name": "${t("app.meta.service1Name")}",
                    "provider": { "@id": "${siteUrl}#organization" },
                    "areaServed": "TW",
                    "description": "${t("app.meta.service1Desc")}"
                  },
                  {
                    "@type": "Service",
                    "name": "${t("app.meta.service2Name")}",
                    "provider": { "@id": "${siteUrl}#organization" },
                    "areaServed": "TW",
                    "description": "${t("app.meta.service2Desc")}"
                  }
                ]
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
              <ContactSection onOpenPolicy={showPolicy} />
            </Suspense>
          </main>

          <Suspense fallback={null}>
            <Footer onOpenPolicy={showPolicy} />
            <BackToTop />
            <CookieConsent />
          </Suspense>

          {/* --- Global Policy Modal --- */}
          <AnimatePresence>
            {activePolicy && (
              <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  onClick={() => setActivePolicy(null)}
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="policy-title"
                >
                  <div className="p-6 border-b border-gray-100 dark:border-gray-700 flex justify-between items-center bg-[#F0F9F1] dark:bg-gray-900">
                    <h3 id="policy-title" className="text-xl font-bold text-forest-green dark:text-mint-green">{activePolicy.title}</h3>
                    <button
                      onClick={() => setActivePolicy(null)}
                      className="p-2 hover:bg-white/50 dark:hover:bg-gray-700 rounded-full transition-colors"
                      aria-label={t("app.closePreview")}
                    >
                      <X size={24} className="text-gray-400 dark:text-gray-300" />
                    </button>
                  </div>
                  <div className="p-8 overflow-y-auto leading-relaxed text-gray-600 dark:text-gray-300">
                    {activePolicy.content.split('\n').map((line, i) => <p key={i} className="mb-4">{line}</p>)}
                  </div>
                  <div className="p-4 border-t border-gray-100 dark:border-gray-700 text-center">
                    <button onClick={() => setActivePolicy(null)} className="bg-forest-green dark:bg-mint-green text-white dark:text-forest-green px-10 py-2.5 rounded-full hover:shadow-lg transition-all font-medium">{t("app.understood")}</button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </ThemeProvider>
    </HelmetProvider >
  )
}

export default App
