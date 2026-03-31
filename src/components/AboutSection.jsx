import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Target, Leaf } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function AboutSection() {
  const { t } = useTranslation();
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
      title: t('about.values.0.title'),
      description: t('about.values.0.description'),
      color: 'text-forest-green',
    },
    {
      icon: Leaf,
      title: t('about.values.1.title'),
      description: t('about.values.1.description'),
      color: 'text-ocean-blue',
    },
    {
      icon: Users,
      title: t('about.values.2.title'),
      description: t('about.values.2.description'),
      color: 'text-amber-600',
    },
    {
      icon: Award,
      title: t('about.values.3.title'),
      description: t('about.values.3.description'),
      color: 'text-purple-600',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-mint-green dark:bg-gray-800/50 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-forest-green dark:text-mint-green mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 mb-16 border border-transparent dark:border-gray-700"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {t('about.desc1')}
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {t('about.desc2')}
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
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 flex flex-col border border-transparent dark:border-gray-700"
              >
                {/* Icon Container - 手機版居中 */}
                <div className="flex justify-center md:justify-start mb-4">
                  <div className={value.color}>
                    <IconComponent size={40} />
                  </div>
                </div>

                {/* Title - 手機版居中 */}
                <h3 className="text-xl font-bold text-forest-green dark:text-mint-green mb-3 text-center md:text-left">
                  {value.title}
                </h3>

                {/* Description - 始終靠左 */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-left">
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
            { label: t('about.stats.0.label'), value: '500+', color: 'text-forest-green' },
            { label: t('about.stats.1.label'), value: '10,000+', color: 'text-ocean-blue' },
            { label: t('about.stats.2.label'), value: '15+', color: 'text-amber-600' }
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border border-transparent dark:border-gray-700"
              role="group"
              aria-label={`${stat.label}: ${stat.value}`}
            >
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <p className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}