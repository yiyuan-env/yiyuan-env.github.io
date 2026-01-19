import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Info, X } from 'lucide-react'
import logoSvg from '../assets/yiyuan.svg'

// Policy Content Definition
const POLICIES = {
  privacy: {
    title: "隱私政策",
    content: `邑沅有限公司（以下簡稱「本公司」）非常重視您的隱私權。
1. 資料收集：當您聯繫我們時，我們可能收集您的姓名、電話及電子郵件。
2. 使用目的：資訊僅用於提供顧問服務、回覆詢問及內部統計分析。
3. 資料保護：我們採用安全技術防止未經授權的存取。依據個人資料保護法，我們承諾維護您的資料安全。
4. 第三方分享：除非法律要求，我們絕不會將您的資料提供給第三方。
5. 您的權利：您可以隨時聯繫我們查詢或要求刪除您的個人資料。`
  },
  terms: {
    title: "服務條款",
    content: `當您瀏覽本網站時，即表示您同意以下條款：
1. 服務範圍：本公司提供環境教育課程、永續顧問及多媒體製作。
2. 智慧財產權：本站所有文字、圖像、影片均受著作權法保護，未經書面授權禁止商業使用。
3. 使用者義務：不得利用本站從事非法活動或散布破壞性程式。
4. 服務變更：本公司保留隨時修改服務內容或調整費用之權利。
5. 法律管轄：本條款之解釋與適用均依中華民國法律辦理。`
  },
  disclaimer: {
    title: "免責聲明",
    content: `1. 資訊準確性：本站提供之趨勢與法規資訊僅供一般參考，本公司不對因依賴此類資訊產生的損害負責。
2. 外部連結：本站包含之第三方連結，其內容由該經營者負責，本公司不保證其安全性。
3. 服務穩定性：我們不保證網站服務永不中斷，對於因網路故障或不可抗力因素造成的資料遺失，不負賠償責任。
4. 諮詢結果：顧問服務成效因各單位情況而異，本公司不對特定減碳或認證結果作最終擔保。`
  }
}

export default function Footer() {
  const [showAlert, setShowAlert] = useState(false)
  const [activePolicy, setActivePolicy] = useState(null)
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
    <footer className="bg-forest-green text-white relative">
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
              <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <img src={logoSvg} alt="邑沅有限公司" className="w-12 h-12 rounded-lg" style={{ filter: 'brightness(0) invert(1)' }} />
                <span className="text-xl font-bold">邑沅有限公司</span>
              </a>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              專業的環境教育與永續發展顧問服務提供者，致力於建立更美好的未來。
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">快速連結</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors hover:underline">服務項目</a></li>
              <li><a href="#about" className="hover:text-white transition-colors hover:underline">關於邑沅</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors hover:underline">執行實績</a></li>
              <li><a href="#partners" className="hover:text-white transition-colors hover:underline">合作夥伴</a></li>
            </ul>
          </motion.div>

          {/* Contact Info - Updated with Actionable Links */}
          <motion.div variants={itemVariants}>
            <h3 id="contact" className="text-lg font-bold mb-6 scroll-mt-20">聯絡我們</h3>
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
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=臺北市大同區長安西路303號10樓之1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors leading-relaxed"
                >
                  10341 臺北市大同區長安西路303號10樓之1
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">追蹤我們</h3>
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
                  className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
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
          <p>© {currentYear} 邑沅有限公司．版權所有。</p>
          <div className="flex gap-6">
            <button onClick={() => setActivePolicy(POLICIES.privacy)} className="hover:text-white transition-colors">隱私政策</button>
            <button onClick={() => setActivePolicy(POLICIES.terms)} className="hover:text-white transition-colors">服務條款</button>
            <button onClick={() => setActivePolicy(POLICIES.disclaimer)} className="hover:text-white transition-colors">免責聲明</button>
          </div>
        </motion.div>

        {/* Footer Disclaimer */}
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 pt-8 border-t border-white border-opacity-10">
          <p className="text-gray-400 text-xs leading-relaxed">
            本網站所有內容的著作權等智慧財產權，均為邑沅有限公司所有。本網站內容僅供參考，若有任何疑問，請直接與我們聯絡。
          </p>
        </motion.div>
      </div>

      {/* --- Policy Modal --- */}
      <AnimatePresence>
        {activePolicy && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setActivePolicy(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white text-gray-800 w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-3xl shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-[#F0F9F1]">
                <h3 className="text-xl font-bold text-forest-green">{activePolicy.title}</h3>
                <button onClick={() => setActivePolicy(null)} className="p-2 hover:bg-white/50 rounded-full transition-colors"><X size={24} className="text-gray-400" /></button>
              </div>
              <div className="p-8 overflow-y-auto leading-relaxed text-gray-600">
                {activePolicy.content.split('\n').map((line, i) => <p key={i} className="mb-4">{line}</p>)}
              </div>
              <div className="p-4 border-t border-gray-100 text-center">
                <button onClick={() => setActivePolicy(null)} className="bg-forest-green text-white px-10 py-2.5 rounded-full hover:shadow-lg transition-all font-medium">我已瞭解</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

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