import React from 'react'
import { motion } from 'framer-motion'
import geepArcpLogo from '../assets/partner_logos/geep-aprc-logo.png'
import geepLogo from '../assets/partner_logos/geep-logo.png'
import matzuLogo from '../assets/partner_logos/matzu-logo.png'
import moenvLogo from '../assets/partner_logos/moenv.png'
import naaeeLogo from '../assets/partner_logos/naaee-logo.png'

export default function PartnersSection() {
  const partners = [
    { 
      id: 1, 
      name: 'GEEP亞太中心',
      logo: geepArcpLogo,
      description: '全球環境教育夥伴亞太中心'
    },
    { 
      id: 2, 
      name: 'GEEP',
      logo: geepLogo,
      description: '全球環境教育夥伴組織'
    },
    { 
      id: 3, 
      name: '連江縣政府',
      logo: matzuLogo,
      description: '馬祖地方政府'
    },
    { 
      id: 4, 
      name: '環境部',
      logo: moenvLogo,
      description: '行政院環境部'
    },
    { 
      id: 5, 
      name: 'NAAEE',
      logo: naaeeLogo,
      description: '北美環境教育協會'
    },
  ]

  return (
    <section id="partners" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-4">
            合作夥伴
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            與政府機構、國際組織與企業夥伴攜手合作
          </p>
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-full bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center min-h-40 hover:shadow-2xl transition-all duration-300 group">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-full max-h-32 object-contain"
                />
              </div>
              <h3 className="mt-4 text-sm font-bold text-forest-green text-center">
                {partner.name}
              </h3>
              <p className="mt-2 text-xs text-gray-600 text-center">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-mint-green rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-lg text-forest-green leading-relaxed max-w-2xl mx-auto">
            多年來與政府機構與民間組織的合作，讓我們在環境教育領域累積了豐富的經驗與可信的成績。我們致力於為台灣的永續發展做出貢獻。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
