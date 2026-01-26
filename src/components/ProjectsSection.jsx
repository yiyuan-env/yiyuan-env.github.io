import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

export default function ProjectsSection() {
  const [showAllProjects, setShowAllProjects] = useState(false)

  const projects = [
    {
      id: 1,
      year: '114年',
      title: '連江縣一般廢棄物轉運處理委託案',
      description: '負責連江縣一般廢棄物轉運與處理業務，提升廢棄物管理效能',
      status: '已完成',
      details: ['廢棄物管理', '轉運服務', '環保衛生'],
    },
    {
      id: 2,
      year: '114年',
      title: '菸蒂不落地方案委辦案',
      description: '推動菸蒂不落地環保宣導方案，強化環境意識與衛生習慣',
      status: '已完成',
      details: ['環保宣導', '衛生推廣', '社區教育'],
    },
    {
      id: 3,
      year: '114年',
      title: '連江縣毒化及病媒防治業務委辦案',
      description: '執行連江縣毒化物及病媒防治相關業務，確保居民健康安全',
      status: '已完成',
      details: ['毒化防治', '病媒防治', '公共衛生'],
    },
    {
      id: 4,
      year: '114年',
      title: '連江縣促進源頭減量暨強化分類回收委辦案',
      description: '推動垃圾源頭減量及分類回收計畫，實現循環經濟目標',
      status: '已完成',
      details: ['源頭減量', '資源回收', '循環經濟'],
    },
    {
      id: 5,
      year: '114年',
      title: '連江縣環境教育專案計畫',
      description: '深入連江縣推展環境教育，涵蓋社區教育、學校合作與在地文化永續發展',
      status: '已完成',
      details: ['環境教育', '社區推廣', '永續發展'],
    },
    {
      id: 6,
      year: '113年',
      title: '臺美環境教育合作與交流暨亞太中心營運專案工作計畫',
      description: '與美國合作進行環境教育交流與合作，營運亞太環境教育中心',
      status: '已完成',
      details: ['國際合作', '環境教育', '中心營運'],
    },
    {
      id: 7,
      year: '113年',
      title: '連江縣促進源頭減量暨強化分類回收委辦案',
      description: '持續推動垃圾源頭減量及分類回收計畫，建立永續社區',
      status: '已完成',
      details: ['源頭減量', '資源回收', '永續社區'],
    },
    {
      id: 8,
      year: '113年',
      title: '連江縣環境教育專案計畫',
      description: '執行連江縣環境教育各項計畫與推廣活動',
      status: '已完成',
      details: ['環境教育', '推廣活動', '社區服務'],
    },
  ]

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Determine which projects to display
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-mint-green/30 dark:bg-gray-800/30 scroll-mt-20 transition-colors duration-300"
      aria-labelledby="projects-title"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 id="projects-title" className="text-4xl md:text-5xl font-bold text-forest-green dark:text-mint-green mb-6">
            相關執行實績
          </h2>
          <div className="w-24 h-1.5 bg-forest-green dark:bg-mint-green mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            多年來與政府與機構攜手，深耕環保與環境教育領域
          </p>
        </motion.div>

        {/* Timeline List */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <AnimatePresence mode='popLayout'>
            {displayedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.98 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-sm hover:shadow-xl p-6 md:p-10 border border-gray-100 dark:border-gray-700 transition-all duration-500 relative overflow-hidden">
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-forest-green dark:bg-mint-green opacity-80" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex px-4 py-1.5 bg-forest-green dark:bg-mint-green text-white dark:text-forest-green rounded-full text-sm font-bold tracking-wide">
                          {project.year}
                        </span>

                        {/* ✅ 已整合的 Accessibility 優化狀態標籤 */}
                        <span
                          className="inline-flex px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-bold uppercase tracking-wider"
                          role="status"
                        >
                          執行狀態：{project.status}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-forest-green dark:group-hover:text-mint-green transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 bg-mint-green/40 dark:bg-mint-green/10 text-forest-green dark:text-mint-green rounded-lg text-sm font-semibold"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <CheckCircle className="text-forest-green/20 dark:text-mint-green/20 group-hover:text-forest-green dark:group-hover:text-mint-green transition-colors duration-500" size={48} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action & Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            aria-expanded={showAllProjects}
            className="px-10 py-4 bg-forest-green dark:bg-mint-green text-white dark:text-forest-green rounded-full hover:shadow-2xl hover:bg-forest-green/90 dark:hover:bg-mint-green/90 hover:-translate-y-1 transition-all duration-300 font-bold text-lg inline-flex items-center gap-3"
          >
            {showAllProjects ? '收起案例集' : '查看完整案例集'}
            <motion.span
              animate={{ rotate: showAllProjects ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            >
              ↓
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}