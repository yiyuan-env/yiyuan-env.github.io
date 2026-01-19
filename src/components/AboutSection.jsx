import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Target, Leaf } from 'lucide-react'

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const values = [
    {
      icon: Target,
      title: '使命',
      description: '推廣環境教育，提升社會永續意識，創造環境與社會的共贏',
      color: 'text-forest-green',
    },
    {
      icon: Leaf,
      title: '願景',
      description: '成為環境教育與永續發展的引領者，推動綠色低碳社會',
      color: 'text-ocean-blue',
    },
    {
      icon: Users,
      title: '團隊',
      description: '擁有專業的環境教育、永續發展與項目管理的多領域專家團隊',
      color: 'text-amber-600',
    },
    {
      icon: Award,
      title: '承諾',
      description: '提供高質量的服務，用專業和熱情推動環境永續發展',
      color: 'text-purple-600',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-mint-green scroll-mt-20">
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
            關於邑沅
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            專業的環境教育與永續發展顧問服務提供者
          </p>
        </motion.div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-16"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            邑沅有限公司致力於環境教育與永續發展服務，為企業、學校與社區提供全方位的環境教育課程、綠色轉型諮詢與永續發展方案。我們相信教育與知識的力量，能夠推動社會走向更永續的未來。
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            透過創新的教學方法、專業的顧問團隊與實踐導向的活動設計，我們幫助客戶建立環保意識、實現碳減排目標，並創造正面的社會與環境影響。
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Icon Container - 手機版居中 */}
                <div className="flex justify-center md:justify-start mb-4">
                  <div className={value.color}>
                    <IconComponent size={40} />
                  </div>
                </div>

                {/* Title - 手機版居中 */}
                <h3 className="text-xl font-bold text-forest-green mb-3 text-center md:text-left">
                  {value.title}
                </h3>

                {/* Description - 始終靠左 */}
                <p className="text-gray-600 leading-relaxed text-left">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            { label: '服務過的機構與學校', value: '500+', color: 'text-forest-green' },
            { label: '受益的學生與社區成員', value: '10,000+', color: 'text-ocean-blue' },
            { label: '年環境教育經驗', value: '15+', color: 'text-amber-600' }
          ].map((stat, i) => (
            <div 
              key={i} 
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300"
              role="group" 
              aria-label={`${stat.label}: ${stat.value}`}
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}