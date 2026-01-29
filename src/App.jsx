import React, { Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { ThemeProvider } from './context/ThemeContext'

// Policy Content Definition
const POLICIES = {
  privacy: {
    title: "隱私政策",
    content: `邑沅有限公司（以下簡稱「本公司」）非常重視您的隱私權。
1. 資料收集：當您聯繫我們時，我們可能收集您的姓名、電話及電子郵件。
2. 使用目的：資訊僅用於提供顧問服務、回覆詢問及內部統計分析。
3. 資料保護：我們採用安全技術防止未經授權的存取。依據個人資料保護法，我們承諾維護您的資料安全。
4. 第三方分享：除非法律要求，我們絕不會將您的資料提供給第三方。
5. 您的權利：您可以隨時聯繫我們查詢或要求刪除您的個人資料。`
  },
  terms: {
    title: "服務條款",
    content: `當您瀏覽本網站時，即表示您同意以下條款：
1. 服務範圍：本公司提供環境教育課程、永續顧問及多媒體製作。
2. 智慧財產權：本站所有文字、圖像、影片均受著作權法保護，未經書面授權禁止商業使用。
3. 使用者義務：不得利用本站從事非法活動或散布破壞性程式。
4. 服務變更：本公司保留隨時修改服務內容或調整費用之權利。
5. 法律管轄：本條款之解釋與適用均依中華民國法律辦理。`
  },
  disclaimer: {
    title: "免責聲明",
    content: `1. 資訊準確性：本站提供之趨勢與法規資訊僅供一般參考，本公司不對因依賴此類資訊產生的損害負責。
2. 外部連結：本站包含之第三方連結，其內容由該經營者負責，本公司不保證其安全性。
3. 服務穩定性：我們不保證網站服務永不中斷，對於因網路故障或不可抗力因素造成的資料遺失，不負賠償責任。
4. 諮詢結果：顧問服務成效因各單位情況而異，本公司不對特定減碳或認證結果作最終擔保。`
  }
}


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
  const [activePolicy, setActivePolicy] = React.useState(null)
  const siteUrl = "https://yiyuan-env.github.io/"

  const showPolicy = (key) => setActivePolicy(POLICIES[key])

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
                      aria-label="關閉預覽"
                    >
                      <X size={24} className="text-gray-400 dark:text-gray-300" />
                    </button>
                  </div>
                  <div className="p-8 overflow-y-auto leading-relaxed text-gray-600 dark:text-gray-300">
                    {activePolicy.content.split('\n').map((line, i) => <p key={i} className="mb-4">{line}</p>)}
                  </div>
                  <div className="p-4 border-t border-gray-100 dark:border-gray-700 text-center">
                    <button onClick={() => setActivePolicy(null)} className="bg-forest-green dark:bg-mint-green text-white dark:text-forest-green px-10 py-2.5 rounded-full hover:shadow-lg transition-all font-medium">我已瞭解</button>
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
