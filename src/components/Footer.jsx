import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react'
import logoSvg from '../assets/yiyuan.svg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <footer className="bg-forest-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-2 mb-6">
              <img src={logoSvg} alt="邑沅有限公司" className="w-12 h-12 rounded-lg" style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="text-xl font-bold">邑沅有限公司</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              專業的環境教育與永續發展顧問服務提供者，致力於建立更美好的未來。
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">快速連結</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors hover:underline">
                  服務項目
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors hover:underline">
                  關於邑沅
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors hover:underline">
                  執行實績
                </a>
              </li>
              <li>
                <a href="#partners" className="hover:text-white transition-colors hover:underline">
                  合作夥伴
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">聯絡我們</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="flex-shrink-0 mt-1" />
                <a href="tel:0223880028" className="hover:text-white transition-colors">
                  02-2388-0028
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="flex-shrink-0 mt-1" />
                <a href="mailto:yixue8924@gmail.com" className="hover:text-white transition-colors">
                  yixue8924@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-1" />
                <span>
                  10341 臺北市大同區長安西路303號10樓之1
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">追蹤我們</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-white bg-opacity-10 mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-300 text-sm"
        >
          <p>
            © {currentYear} 邑沅有限公司. 版權所有。
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              隱私政策
            </a>
            <a href="#" className="hover:text-white transition-colors">
              服務條款
            </a>
            <a href="#" className="hover:text-white transition-colors">
              免責聲明
            </a>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-white border-opacity-10"
        >
          <p className="text-gray-400 text-xs leading-relaxed">
            本網站所有內容的著作權等智慧財產權，均為邑沅有限公司所有。本網站內容僅供參考，若有任何疑問，請直接與我們聯絡。未經邑沅有限公司的書面許可，不得將本網站之內容進行任何形式的複製、轉載或改編。
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
