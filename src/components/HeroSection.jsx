import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Waves, Copy, Check } from 'lucide-react'

export default function HeroSection() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "yixue8924@gmail.com";
  const emailSubject = encodeURIComponent("諮詢意願");
  const emailBody = encodeURIComponent("您好，我想了解更多關於貴公司的服務內容...");
  const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-mint-green to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center overflow-x-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0.01, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              initial={{ opacity: 0.01, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-green dark:text-mint-green mb-6 leading-tight"
            >
              專業環境教育<br />與顧問服務
            </motion.h1>

            <motion.p
              initial={{ opacity: 0.01, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-lg"
            >
              我們深耕於政府合作、教育、企業與社區，提供多元化的永續發展與環保解決方案。
            </motion.p>

            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0.01, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href={mailtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 bg-forest-green border-forest-green text-white rounded-full hover:bg-white hover:text-forest-green dark:hover:bg-gray-800 dark:hover:text-mint-green hover:scale-105 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
                >
                  立即聯絡
                </a>
                <a
                  href="#about"
                  className="px-8 py-4 border-2 border-forest-green text-forest-green dark:text-mint-green dark:border-mint-green rounded-full hover:bg-forest-green hover:text-white dark:hover:bg-mint-green dark:hover:text-gray-900 hover:scale-105 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
                >
                  了解更多
                </a>
              </motion.div>

              {/* Copy Email Logic - The "Plan B" */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-sm text-forest-green/70 dark:text-mint-green/70 ml-2"
              >
                <span>或直接複製信箱: {emailAddress}</span>
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-forest-green/10 dark:hover:bg-mint-green/10 rounded-full transition-colors relative"
                  title="複製信箱"
                  aria-label="複製電子郵件信箱"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Check size={16} className="text-green-600" />
                      </motion.div>
                    ) : (
                      <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                        <Copy size={16} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                {copied && <span className="text-xs font-bold text-green-600 animate-pulse">已複製!</span>}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0.01, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            {/* SVG Illustration remains exactly as before */}
            <div className="relative w-full h-full">
              <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <circle cx="200" cy="200" r="150" fill="#F0F9F1" opacity="0.3" />
                <circle cx="200" cy="200" r="100" fill="#F0F9F1" opacity="0.5" />
                <path d="M 50 250 Q 100 200, 150 250 T 250 250 T 350 250" stroke="#0077B6" strokeWidth="3" fill="none" opacity="0.6" />
                <path d="M 50 280 Q 100 230, 150 280 T 250 280 T 350 280" stroke="#2D5A27" strokeWidth="2" fill="none" opacity="0.4" />
                <ellipse cx="120" cy="120" rx="20" ry="35" fill="#2D5A27" opacity="0.7" transform="rotate(-45 120 120)" />
                <ellipse cx="300" cy="140" rx="15" ry="25" fill="#0077B6" opacity="0.6" transform="rotate(30 300 140)" />
                <ellipse cx="250" cy="100" rx="18" ry="30" fill="#2D5A27" opacity="0.5" transform="rotate(-20 250 100)" />
                <circle cx="80" cy="180" r="3" fill="#2D5A27" opacity="0.4" />
                <circle cx="320" cy="220" r="3" fill="#0077B6" opacity="0.4" />
                <circle cx="150" cy="150" r="2" fill="#2D5A27" opacity="0.3" />
              </svg>

              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10"
              >
                <Waves size={48} className="text-ocean-blue opacity-70" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}