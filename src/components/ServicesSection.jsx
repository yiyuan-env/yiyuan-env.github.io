import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Zap, Briefcase, Video } from 'lucide-react'

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState(null)
  const services = [
    {
      id: 1,
      title: '環境教育',
      description: '為社區、學校與企業提供專業的環境教育課程與教材開發',
      details: ['社區方案', '學校課程', '教學教材', '課程設計', '師資培訓', '教育評估'],
      icon: Leaf,
      color: 'text-forest-green',
      bgColor: 'bg-green-100',
    },
    {
      id: 2,
      title: '綠色生活及零碳夥伴',
      description: '協助企業與社區實現碳減排目標，推廣永續生活方式',
      details: ['碳減排', '永續生活', '企業諮詢', '環保認證', '減碳培訓', '永續報告'],
      icon: Zap,
      color: 'text-ocean-blue',
      bgColor: 'bg-blue-100',
    },
    {
      id: 3,
      title: '活動相關服務',
      description: '組織與執行各類環保與教育活動，營造互動式學習體驗',
      details: ['工作坊', '環保活動', '體驗營', '社區推廣', '志工培訓', '活動評估'],
      icon: Briefcase,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      id: 4,
      title: '影音多媒體影片製作',
      description: '製作高質感的環保相關紀錄片與宣傳影片',
      details: ['紀錄片', '宣傳影片', '多媒體製作', '影片編輯', '後期製作', '字幕服務'],
      icon: Video,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            核心服務項目
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            提供全方位的環境教育與永續發展解決方案
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-forest-green">
                  {/* Icon Container */}
                  <div className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={32} className={service.color} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-forest-green mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {service.details.map((detail, idx) => (
                      (expandedService === service.id || idx < 3) && (
                        <div key={idx} className="flex items-start text-sm text-gray-700">
                          {detail}
                        </div>
                      )
                    ))}
                  </div>

                  {/* CTA Link */}
                  <button 
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="mt-6 text-forest-green hover:text-ocean-blue font-semibold text-sm flex items-center group"
                  >
                    {expandedService === service.id ? '收起' : '了解更多'}
                    <span className={`ml-2 transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`}>→</span>
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
