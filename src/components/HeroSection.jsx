import React from 'react'
import { motion } from 'framer-motion'
import { Waves } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-mint-green to-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-green mb-6 leading-tight"
            >
              專業環境教育<br />與顧問服務
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-700 mb-8 leading-relaxed max-w-lg"
            >
              我們深耕於政府合作、教育、企業與社區，提供多元化的永續發展與環保解決方案。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <a 
                href="mailto:yixue8924@gmail.com?subject=諮詢意願&body=您好，我想了解更多關於貴公司的服務內容..."
                className="px-8 py-4 border-2 bg-forest-green border-forest-green text-white rounded-full hover:bg-white hover:text-forest-green hover:scale-105 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
              >
                立即聯絡
              </a>
              <a 
                href="#about"
                className="px-8 py-4 border-2 border-forest-green text-forest-green rounded-full hover:bg-forest-green hover:text-white hover:scale-105 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
              >
                了解更多
              </a>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-full flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              {/* Abstract Wave Illustration */}
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Background circles */}
                <circle cx="200" cy="200" r="150" fill="#F0F9F1" opacity="0.3" />
                <circle cx="200" cy="200" r="100" fill="#F0F9F1" opacity="0.5" />

                {/* Wave patterns */}
                <path
                  d="M 50 250 Q 100 200, 150 250 T 250 250 T 350 250"
                  stroke="#0077B6"
                  strokeWidth="3"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M 50 280 Q 100 230, 150 280 T 250 280 T 350 280"
                  stroke="#2D5A27"
                  strokeWidth="2"
                  fill="none"
                  opacity="0.4"
                />

                {/* Leaf shapes */}
                <ellipse cx="120" cy="120" rx="20" ry="35" fill="#2D5A27" opacity="0.7" transform="rotate(-45 120 120)" />
                <ellipse cx="300" cy="140" rx="15" ry="25" fill="#0077B6" opacity="0.6" transform="rotate(30 300 140)" />
                <ellipse cx="250" cy="100" rx="18" ry="30" fill="#2D5A27" opacity="0.5" transform="rotate(-20 250 100)" />

                {/* Decorative dots */}
                <circle cx="80" cy="180" r="3" fill="#2D5A27" opacity="0.4" />
                <circle cx="320" cy="220" r="3" fill="#0077B6" opacity="0.4" />
                <circle cx="150" cy="150" r="2" fill="#2D5A27" opacity="0.3" />
              </svg>

              {/* Floating animation elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
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
