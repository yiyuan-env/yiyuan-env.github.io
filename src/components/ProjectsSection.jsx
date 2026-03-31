import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function ProjectsSection() {
  const { t } = useTranslation();
  const [showAllProjects, setShowAllProjects] = useState(false)

  const projects = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    year: i < 5 ? '114' : '113', // Removed specific character for easier i18n
    title: t(`projects.items.${i}.title`),
    description: t(`projects.items.${i}.description`),
    status: t(`projects.completed`),
    details: t(`projects.items.${i}.details`, { returnObjects: true }) || [],
  }))

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
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1.5 bg-forest-green dark:bg-mint-green mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
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
                <div className="bg-white dark:bg-gray-800 group-hover:dark:bg-white rounded-3xl shadow-sm hover:shadow-xl p-6 md:p-10 border border-gray-100 dark:border-gray-700 group-hover:dark:border-gray-100 transition-all duration-500 relative overflow-hidden">
                  {/* Subtle Background Accent */}
                  <div className="absolute top-0 left-0 w-2 h-full bg-forest-green dark:bg-mint-green group-hover:dark:bg-forest-green opacity-80" />

                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex px-4 py-1.5 bg-forest-green dark:bg-mint-green group-hover:dark:bg-forest-green text-white dark:text-forest-green group-hover:dark:text-white rounded-full text-sm font-bold tracking-wide">
                          {project.year}
                        </span>

                        <span
                          className="inline-flex px-3 py-1 bg-gray-100 dark:bg-gray-700 group-hover:dark:bg-gray-100 text-gray-600 dark:text-gray-300 group-hover:dark:text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider"
                          role="status"
                        >
                          {t('projects.statusLabel')}{project.status}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-forest-green dark:group-hover:text-forest-green transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 group-hover:dark:text-gray-600 mb-8 leading-relaxed text-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.details.map((detail, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-1.5 bg-mint-green/40 dark:bg-mint-green/10 group-hover:dark:bg-mint-green/40 text-forest-green dark:text-mint-green group-hover:dark:text-forest-green rounded-lg text-sm font-semibold"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <CheckCircle className="text-forest-green/20 dark:text-mint-green/20 group-hover:text-forest-green dark:group-hover:text-forest-green transition-colors duration-500" size={48} strokeWidth={1.5} />
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
            {showAllProjects ? t('projects.buttons.collapse') : t('projects.buttons.viewAll')}
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