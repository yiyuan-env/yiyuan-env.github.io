import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoSvg from '../assets/yiyuan.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // 監聽滾動事件，改變導覽列背景
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: '關於邑沅', href: '#about' },
    { name: '服務項目', href: '#services' },
    { name: '執行實績', href: '#projects' },
    { name: '合作夥伴', href: '#partners' },
  ]

  return (
    <nav 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo 區域 */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src={logoSvg} 
              alt="邑沅有限公司標誌" 
              className="h-10 w-auto"
              width="40"
              height="40"
            />
            <span className={`text-xl font-bold tracking-wider ${
              scrolled ? 'text-forest-green' : 'text-gray-800'
            }`}>
              邑沅有限公司
            </span>
          </div>

          {/* 桌面版選單 */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative group ${
                    scrolled ? 'text-gray-600 hover:text-forest-green' : 'text-gray-700 hover:text-forest-green'
                  }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-green transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-forest-green text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                立即諮詢
              </a>
            </div>
          </div>

          {/* 手機版選單按鈕 - 已修正 Accessibility 問題 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-forest-green' : 'text-gray-800'
              }`}
              // 這是解決報告中「按鈕沒有可存取名稱」的關鍵
              aria-label={isOpen ? "關閉導覽選單" : "開啟導覽選單"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* 手機版下拉選單 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-600 hover:text-forest-green hover:bg-mint-green/10 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-forest-green text-white px-6 py-4 rounded-xl font-bold shadow-lg"
                >
                  立即諮詢
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar