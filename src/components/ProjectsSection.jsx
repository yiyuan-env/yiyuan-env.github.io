import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
      title: '臺美環境教育合作與交流暨亞太中心營運專案工作計畫（113-114年）',
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-mint-green">
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
            相關執行實績
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            多年來與政府與機構攜手，為環保與教育做出貢獻
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`relative ${(showAllProjects || index < 3) ? 'block' : 'hidden'}`}
            >
              <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-forest-green hover:shadow-lg transition-all duration-300">
                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="inline-block px-4 py-2 bg-forest-green text-white rounded-full text-sm font-semibold">
                        {project.year}
                      </span>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === '進行中'
                          ? 'bg-blue-100 text-ocean-blue'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-forest-green">
                      {project.title}
                    </h3>
                  </div>
                  <CheckCircle className="text-forest-green flex-shrink-0" size={28} />
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Details */}
                <div className="flex flex-wrap gap-2">
                  {project.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-mint-green text-forest-green rounded-full text-sm font-medium"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-700 mb-6 text-lg">
            想了解我們過去的案例與成果？
          </p>
          <button 
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="px-8 py-4 bg-forest-green text-white rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-lg"
          >
            {showAllProjects ? '收起案例集' : '查看完整案例集'}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
