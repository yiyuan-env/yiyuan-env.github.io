import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import logoImg from '../assets/yiyuan.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: '服務項目', href: '#services' },
    { label: '關於邑沅', href: '#about' },
    { label: '執行實績', href: '#projects' },
    { label: '合作夥伴', href: '#partners' },
  ]

  return (
    <nav className="fixed w-full bg-white shadow-md z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src={logoImg} alt="邑沅有限公司" className="w-10 h-10 rounded-lg object-cover" />
              <span className="text-xl font-bold text-forest-green hidden sm:inline">
                邑沅有限公司
              </span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-forest-green hover:text-ocean-blue transition-colors font-medium text-sm border-b-2 border-transparent hover:border-ocean-blue"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <button className="px-6 py-2 bg-forest-green text-white rounded-full hover:bg-forest-green/80 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-xl hover:scale-110">
              聯絡我們
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-forest-green"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-mint-green border-t border-forest-green border-opacity-20"
          >
            <div className="px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-forest-green hover:text-ocean-blue transition-colors font-medium border-l-4 border-transparent hover:border-ocean-blue hover:pl-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button className="w-full px-6 py-2 bg-forest-green text-white rounded-full hover:bg-forest-green/80 transition-all font-medium hover:scale-105">
                聯絡我們
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
