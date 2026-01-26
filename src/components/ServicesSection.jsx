import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Leaf, Zap, Briefcase, Video, ChevronDown } from 'lucide-react'

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    { id: 1, title: '環境教育', description: '為社區、學校與企業提供專業的環境教育課程與教材開發', details: ['社區方案', '學校課程', '教學教材', '課程設計', '師資培訓', '教育評估'], icon: Leaf, color: 'text-forest-green', bgColor: 'bg-green-100' },
    { id: 2, title: '綠色生活及減碳夥伴', description: '協助企業與社區實現碳減排目標，推廣永續生活方式', details: ['碳減排', '永續生活', '企業諮詢', '環保認證', '減碳培訓', '永續報告'], icon: Zap, color: 'text-ocean-blue', bgColor: 'bg-blue-100' },
    { id: 3, title: '活動相關服務', description: '組織與執行各類環保與教育活動，營造互動式學習體驗', details: ['工作坊', '環境教育活動', '社區推廣', '志工培訓', '活動評估'], icon: Briefcase, color: 'text-amber-600', bgColor: 'bg-amber-100' },
    { id: 4, title: '影音多媒體影片製作', description: '製作高質感的環保相關紀錄片與宣傳影片', details: ['紀錄片', '宣傳影片', '多媒體製作', '影片編輯', '後期製作', '字幕服務'], icon: Video, color: 'text-purple-600', bgColor: 'bg-purple-100' },
  ]

  return (
    <section id="services" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden scroll-mt-20 transition-colors duration-300">
      {/* Background Decorative Elements */}
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
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-forest-green dark:text-mint-green mb-6 tracking-tight">
            核心服務項目
          </h2>
          <div className="w-20 h-1.5 bg-forest-green dark:bg-mint-green mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            提供全方位的環境教育與永續發展解決方案
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start">
          {services.map((service) => {
            const IconComponent = service.icon
            const isExpanded = expandedService === service.id

            return (
              <motion.div
                key={service.id}
                layout
                animate={{
                  scale: isExpanded ? 1.02 : 1,
                  zIndex: isExpanded ? 10 : 1
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 28
                }}
                className="relative w-full"
              >
                <div className={`
                  bg-white dark:bg-gray-800 rounded-3xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 border
                  ${isExpanded ? 'shadow-2xl border-forest-green/20 dark:border-mint-green/20' : 'shadow-sm border-gray-100 dark:border-gray-700 hover:shadow-md'}
                `}>

                  {/* Icon Container */}
                  <div className="flex justify-center md:justify-start mb-6">
                    <div className={`${service.bgColor} w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center`}>
                      <IconComponent className={`${service.color} w-6 h-6 md:w-7 md:h-7`} />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 break-words leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Details List with Balanced Spacing */}
                  <div className="flex-grow flex flex-col gap-3">
                    {/* Static Items (First 3) */}
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-forest-green/40 dark:bg-mint-green/40 mt-1.5 mr-3 flex-shrink-0" />
                        <span className="leading-tight break-words">{detail}</span>
                      </div>
                    ))}

                    {/* Fluid Animation for Extra Items */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden flex flex-col gap-3"
                        >
                          {service.details.slice(3).map((detail, idx) => (
                            <div key={idx} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-forest-green/40 dark:bg-mint-green/40 mt-1.5 mr-3 flex-shrink-0" />
                              <span className="leading-tight break-words">{detail}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Footer Button with Large Touch Target */}
                  <div className="mt-8 pt-6 border-t border-gray-50 dark:border-gray-700">
                    <button
                      onClick={() => setExpandedService(isExpanded ? null : service.id)}
                      className="text-forest-green dark:text-mint-green hover:text-ocean-blue dark:hover:text-ocean-blue font-bold text-sm flex items-center w-full justify-between py-2 -my-2 transition-colors"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? '收起詳情' : '了解更多'}</span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
                      </motion.div>
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}