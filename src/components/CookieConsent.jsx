import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X, Settings, Check } from 'lucide-react'
import { initGA } from '../utils/analytics'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  // Consent State
  const [consent, setConsent] = useState({
    necessary: true, // Always true
    analytics: false,
  })

  useEffect(() => {
    const savedConsent = localStorage.getItem('yiyuan-cookie-consent')
    if (savedConsent) {
      const parsed = JSON.parse(savedConsent)
      setConsent(parsed)
      if (parsed.analytics) initGA()
    } else {
      setTimeout(() => setIsVisible(true), 2000)
    }
  }, [])

  const saveConsent = (preferences) => {
    localStorage.setItem('yiyuan-cookie-consent', JSON.stringify(preferences))
    setConsent(preferences)

    if (preferences.analytics) {
      initGA()
    }

    setIsVisible(false)
    setShowPreferences(false)
  }

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true })
  }

  const handleSavePreferences = () => {
    saveConsent(consent)
  }

  return (
    <AnimatePresence>
      {isVisible && !showPreferences && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[150] p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-mint-green/30 p-3 rounded-full text-forest-green flex-shrink-0">
                <Cookie size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">我們重視您的隱私</h4>
                <p className="text-sm text-gray-600 leading-relaxed max-w-xl">
                  本網站使用 Cookie 以提升您的瀏覽體驗並分析流量。繼續使用本網站即表示您同意我們使用 Cookie。您可以隨時在隱私權設定中調整您的偏好設定。
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-6 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-medium hover:border-forest-green hover:text-forest-green transition-colors"
              >
                自訂選項
              </button>
              <button
                onClick={handleAcceptAll}
                className="bg-forest-green text-white px-8 py-2.5 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-forest-green/20"
              >
                接受所有
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[160] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowPreferences(false)}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }}
            className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 border-b border-gray-100 bg-mint-green/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Settings className="text-forest-green" size={24} />
                <h3 className="text-xl font-bold text-gray-800">Cookie 偏好設定</h3>
              </div>
              <button onClick={() => setShowPreferences(false)}><X className="text-gray-400 hover:text-gray-600" /></button>
            </div>

            <div className="p-6 space-y-6">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-gray-800">必要性 Cookie</h4>
                  <p className="text-sm text-gray-500 mt-1">維持網站運作所需，無法關閉。</p>
                </div>
                <Check className="text-forest-green shrink-0" />
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-gray-800">分析性 Cookie</h4>
                  <p className="text-sm text-gray-500 mt-1">幫助我們了解網站流量與效能 (Google Analytics)。</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={consent.analytics}
                    onChange={(e) => setConsent(prev => ({ ...prev, analytics: e.target.checked }))}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-forest-green"></div>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-6 py-2.5 text-gray-500 hover:text-gray-700 font-medium"
              >
                取消
              </button>
              <button
                onClick={handleSavePreferences}
                className="bg-forest-green text-white px-8 py-2.5 rounded-xl font-bold hover:bg-opacity-90 transition-all"
              >
                儲存設定
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}