import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Info, X } from 'lucide-react'
import logoSvg from '../assets/yiyuan.svg'

export default function Footer({ onOpenPolicy }) {
  const [showAlert, setShowAlert] = useState(false)
  const currentYear = new Date().getFullYear()

  // Handle Social Clicks
  const handleSocialClick = (e) => {
    e.preventDefault()
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 2500)
  }

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  return (
    <footer className="bg-forest-green dark:bg-gray-900 text-white relative transition-colors duration-300 border-t border-transparent dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-6">
              <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <img
                  src={logoSvg}
                  alt="邑沅有限公司官方標誌"
                  fetchpriority="high"   // NEW: Directs browser to download this first
                  loading="eager"        // NEW: Prevents lazy loading for the top image
                  decoding="async"
                  width="48"
                  height="48"
                  className="w-12 h-12 rounded-lg"
                  style={{ filter: 'brightness(0) invert(1)' }} />
                <span className="text-xl font-bold">邑沅有限公司</span>
              </a>
            </div>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed text-sm">
              專業的環境教育與永續發展顧問服務提供者，致力於建立更美好的未來。
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">快速連結</h3>
            <ul className="space-y-3 text-gray-300 dark:text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white dark:hover:text-mint-green transition-colors hover:underline">關於邑沅</a></li>
              <li><a href="#services" className="hover:text-white dark:hover:text-mint-green transition-colors hover:underline">服務項目</a></li>
              <li><a href="#projects" className="hover:text-white dark:hover:text-mint-green transition-colors hover:underline">執行實績</a></li>
              <li><a href="#partners" className="hover:text-white dark:hover:text-mint-green transition-colors hover:underline">合作夥伴</a></li>
            </ul>
          </motion.div>

          {/* Contact & Social Combined */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">歡迎聯繫</h3>
            <p className="text-gray-300 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              如有任何疑問或合作需求，歡迎點選導覽列的「聯絡我們」或直接透過下方社群平台與我們互動。
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Facebook size={20} />, label: 'Facebook' },
                { icon: <Linkedin size={20} />, label: 'Linkedin' },
                { icon: <Twitter size={20} />, label: 'Twitter' }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={handleSocialClick}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white bg-opacity-10 dark:bg-opacity-5 mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-300 text-sm"
        >
          <p>© {currentYear} 邑沅有限公司．版權所有。</p>
          <p className="text-gray-400 text-xs leading-relaxed">
            本網站所有內容的著作權等智慧財產權，均為邑沅有限公司所有。本網站內容僅供參考，若有任何疑問，請直接與我們聯絡。
          </p>
          <div className="flex gap-6">
            <button onClick={() => onOpenPolicy('privacy')} className="hover:text-white transition-colors">隱私政策</button>
            <button onClick={() => onOpenPolicy('terms')} className="hover:text-white transition-colors">服務條款</button>
            <button onClick={() => onOpenPolicy('disclaimer')} className="hover:text-white transition-colors">免責聲明</button>
          </div>
        </motion.div>
      </div>


      {/* --- Social Toast Alert --- */}
      <AnimatePresence>
        {showAlert && (
          <motion.div initial={{ opacity: 0, y: 50, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: 20, x: '-50%' }} className="fixed bottom-10 left-1/2 z-[100] min-w-[280px]">
            <div className="bg-white text-forest-green px-6 py-4 rounded-2xl shadow-2xl border-l-4 border-forest-green flex items-center gap-4">
              <div className="bg-[#F0F9F1] p-2 rounded-full"><Info size={20} className="text-forest-green" /></div>
              <div><p className="font-bold text-sm">敬請期待！</p><p className="text-xs text-gray-600">社群專頁正在積極籌備中。</p></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}