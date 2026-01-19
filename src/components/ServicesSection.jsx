import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden scroll-mt-20">
      {/* Background Decorative Elements - Pure CSS for maximum performance */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-mint-green opacity-10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-50 opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-6 tracking-tight">
            核心服務項目
          </h2>
          <div className="w-20 h-1.5 bg-forest-green mx-auto mb-6 rounded-full" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            提供全方位的環境教育與永續發展解決方案
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => {
            const IconComponent = service.icon
            const isExpanded = expandedService === service.id
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="group h-full"
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-forest-green/30 p-8 h-full flex flex-col">
                  
                  {/* Icon Container */}
                  <div className="flex justify-center md:justify-start">
                    <div className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
                      <IconComponent size={32} className={service.color} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center md:text-left group-hover:text-forest-green transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <div className="text-left flex-grow">
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details List with AnimatePresence for smooth efficiency */}
                    <div className="space-y-3">
                      {service.details.map((detail, idx) => (
                        <AnimatePresence key={idx}>
                          {(isExpanded || idx < 3) && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex items-start text-sm text-gray-700"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-forest-green/40 mt-1.5 mr-3 flex-shrink-0" />
                              <span className="leading-tight">{detail}</span>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      ))}
                    </div>
                  </div>

                  {/* Action Button - Optimized for Accessibility */}
                  <div className="flex justify-start mt-8 pt-6 border-t border-gray-50">
                    <button 
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      aria-expanded={isExpanded}
                      aria-label={`${isExpanded ? '收起' : '了解更多'} ${service.title} 的細節`}
                      className="text-forest-green hover:text-ocean-blue font-bold text-sm flex items-center group transition-colors"
                    >
                      {isExpanded ? '收起詳情' : '了解更多'}
                      <motion.span 
                        className="ml-2"
                        animate={{ x: isExpanded ? 0 : [0, 5, 0] }}
                        transition={{ repeat: isExpanded ? 0 : Infinity, duration: 1.5 }}
                      >
                        {isExpanded ? '↑' : '→'}
                      </motion.span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}