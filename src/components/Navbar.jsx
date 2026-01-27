import React, { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logoSvg from '../assets/yiyuan.svg'
import { useTheme } from '../context/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

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
      className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo 區域 */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity" aria-label="邑沅有限公司 首頁">
              <img
                src={logoSvg}
                alt="邑沅有限公司標誌"
                className="h-10 w-auto dark:brightness-0 dark:invert"
                width="40"
                height="40"
              />
              <span className={`text-xl font-bold tracking-wider transition-colors duration-300 ${scrolled ? 'text-forest-green dark:text-mint-green' : 'text-gray-800 dark:text-white'
                }`}>
                邑沅有限公司
              </span>
            </a>
          </div>

          {/* 桌面版選單 */}
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors relative group ${scrolled ? 'text-gray-600 dark:text-gray-300 hover:text-forest-green dark:hover:text-mint-green' : 'text-gray-700 dark:text-white hover:text-forest-green dark:hover:text-mint-green'
                    }`}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-green dark:bg-mint-green transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all hover:bg-gray-100 dark:hover:bg-gray-800 ${scrolled ? 'text-forest-green dark:text-mint-green' : 'text-forest-green dark:text-white'
                }`}
              aria-label={theme === 'dark' ? "切換至淺色模式" : "切換至深色模式"}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a
              href="#contact"
              className="bg-forest-green text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              聯絡我們
            </a>
          </div>


          {/* 手機版選單按鈕 - 已修正 Accessibility 問題 */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${scrolled ? 'text-forest-green dark:text-mint-green' : 'text-gray-800 dark:text-white'
                }`}
              aria-label={theme === 'dark' ? "切換至淺色模式" : "切換至深色模式"}
              aria-pressed={theme === 'dark'}
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-forest-green dark:text-mint-green' : 'text-gray-800 dark:text-white'
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
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-2 shadow-inner">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-forest-green dark:hover:text-mint-green hover:bg-mint-green/10 dark:hover:bg-white/5 rounded-xl transition-all"
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
                  聯絡我們
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav >
  )
}

export default Navbar