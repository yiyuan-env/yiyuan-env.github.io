import React from 'react'
import { motion } from 'framer-motion'
import geepArcpLogo from '../assets/partner_logos/geep-aprc-logo.webp'
import geepLogo from '../assets/partner_logos/geep-logo.webp'
import matzuLogo from '../assets/partner_logos/matzu-logo.webp'
import moenvLogo from '../assets/partner_logos/moenv.webp'
import naaeeLogo from '../assets/partner_logos/naaee-logo.webp'

export default function PartnersSection() {
  const partners = [
    { 
      id: 1, 
      name: 'GEEP亞太中心',
      logo: geepArcpLogo,
      description: '全球環境教育夥伴亞太中心',
      w: 180, h: 80 
    },
    { 
      id: 2, 
      name: 'GEEP',
      logo: geepLogo,
      description: '全球環境教育夥伴組織',
      w: 120, h: 80
    },
    { 
      id: 3, 
      name: '連江縣政府',
      logo: matzuLogo,
      description: '馬祖地方政府',
      w: 100, h: 100
    },
    { 
      id: 4, 
      name: '環境部',
      logo: moenvLogo,
      description: '行政院環境部',
      w: 200, h: 60
    },
    { 
      id: 5, 
      name: 'NAAEE',
      logo: naaeeLogo,
      description: '北美環境教育協會',
      w: 150, h: 60
    },
  ]

  return (
    <section id="partners" className="py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6">
            合作夥伴
          </h2>
          <div className="w-16 h-1 bg-forest-green mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            與政府機構、國際組織與企業夥伴攜手合作
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-stretch"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-center h-40 hover:shadow-xl transition-all duration-500 group relative">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} 標誌`}
                  // 💡 保持顯式尺寸以解決 PageSpeed 的 CLS 問題
                  width={partner.w}
                  height={partner.h}
                  loading="lazy" 
                  decoding="async"
                  // 💡 移除 grayscale，保持原色
                  className="max-w-[80%] max-h-[70%] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-forest-green transition-colors">
                  {partner.name}
                </h3>
                <p className="mt-2 text-xs text-gray-500 leading-relaxed px-2">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-br from-mint-green/30 to-white border border-mint-green/20 rounded-3xl p-8 md:p-16 text-center shadow-inner"
        >
          <p className="text-lg md:text-xl text-forest-green font-medium leading-loose max-w-3xl mx-auto">
            「多年來與政府機關及民間單位協同合作，讓我們在環境教育領域累積了豐富的經驗與可信的成績。我們致力於為臺灣的永續發展做出貢獻。」
          </p>
        </motion.div>
      </div>
    </section>
  )
}