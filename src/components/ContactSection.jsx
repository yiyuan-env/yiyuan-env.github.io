import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Calendar, Send, CheckCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const ContactSection = ({ onOpenPolicy }) => {
    const { t } = useTranslation();
    const [formStatus, setFormStatus] = useState('idle') // idle, submitting, success, error

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFormStatus('submitting')

        const formData = new FormData(e.target)
        let data = Object.fromEntries(formData.entries())

        // Add dynamic subject for localized notification emails
        if (data.主旨) {
            data._subject = `邑沅官網訊息：${data.主旨}`
        }

        // DEBUG: Log the data so you can see it on localhost console
        console.log('Form submission captured:', data)

        try {
            const response = await fetch('https://formspree.io/f/xkobodrr', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })

            if (response.ok) {
                setFormStatus('success')
            } else {
                throw new Error('Submission failed')
            }
        } catch (error) {
            console.error('Form error:', error)
            setFormStatus('error')
        }
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }

    return (
        <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-mint-green/10 dark:bg-mint-green/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-forest-green/10 dark:bg-forest-green/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={itemVariants}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-forest-green dark:text-mint-green mb-4">{t('contact.title')}</h2>
                    <div className="w-20 h-1.5 bg-forest-green dark:bg-mint-green mx-auto rounded-full mb-6" />
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
                        {t('contact.subtitle')}
                    </p>
                </motion.div>

                <motion.div
                    className="grid lg:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Left Column: Contact Form */}
                    <motion.div variants={itemVariants} className="h-full">
                        <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                            <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">{t('contact.form.title')}</h3>

                            {formStatus === 'success' ? (
                                <div className="py-12 text-center">
                                    <div className="w-20 h-20 bg-mint-green/20 text-forest-green dark:text-mint-green rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle size={40} />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2">{t('contact.form.successTitle')}</h4>
                                    <p className="text-gray-600 dark:text-gray-400 mb-8">{t('contact.form.successDesc')}</p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="text-forest-green dark:text-mint-green font-bold hover:underline"
                                    >
                                        {t('contact.form.sendAnother')}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex-grow flex flex-col justify-between">
                                    {/* Formspree Localization and Metadata */}
                                    <input type="hidden" name="_language" value="zh-TW" />

                                    <div className="space-y-5">
                                        <div className="grid md:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.nameLabel')}</label>
                                                <input
                                                    type="text"
                                                    name="姓名"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-forest-green dark:focus:ring-mint-green focus:border-transparent transition-all dark:text-white"
                                                    placeholder={t('contact.form.namePlaceholder')}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.emailLabel')}</label>
                                                <input
                                                    type="email"
                                                    name="電子郵件"
                                                    required
                                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-forest-green dark:focus:ring-mint-green focus:border-transparent transition-all dark:text-white"
                                                    placeholder={t('contact.form.emailPlaceholder')}
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.subjectLabel')}</label>
                                            <input
                                                type="text"
                                                name="主旨"
                                                required
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-forest-green dark:focus:ring-mint-green focus:border-transparent transition-all dark:text-white"
                                                placeholder={t('contact.form.subjectPlaceholder')}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">{t('contact.form.messageLabel')}</label>
                                            <textarea
                                                name="訊息內容"
                                                required
                                                rows="6"
                                                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-forest-green dark:focus:ring-mint-green focus:border-transparent transition-all dark:text-white resize-none"
                                                placeholder={t('contact.form.messagePlaceholder')}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <button
                                            type="submit"
                                            disabled={formStatus === 'submitting'}
                                            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg active:scale-[0.98] ${formStatus === 'submitting'
                                                ? 'bg-gray-300 cursor-not-allowed'
                                                : 'bg-forest-green text-white hover:bg-opacity-90 hover:shadow-xl'
                                                }`}
                                        >
                                            {formStatus === 'submitting' ? (
                                                t('contact.form.submitting')
                                            ) : (
                                                <>
                                                    <Send size={18} />
                                                    {t('contact.form.submit')}
                                                </>
                                            )}
                                        </button>

                                        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                                            {t('contact.form.policyConsent')}
                                            <button
                                                type="button"
                                                onClick={() => onOpenPolicy('privacy')}
                                                className="text-forest-green dark:text-mint-green hover:underline focus:outline-none ml-1"
                                            >
                                                {t('contact.form.privacyPolicy')}
                                            </button>
                                            {t('contact.form.period')}
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Right Column: Contact Info */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <div className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center gap-3">
                                <span className="w-10 h-10 bg-forest-green dark:bg-mint-green rounded-xl flex items-center justify-center text-white dark:text-forest-green">
                                    <Phone size={20} />
                                </span>
                                {t('contact.info.title')}
                            </h3>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mt-1">
                                        <Mail size={20} className="text-forest-green dark:text-mint-green" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('contact.info.emailLabel')}</p>
                                        <a href="mailto:yixue8924@gmail.com" className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-forest-green dark:hover:text-mint-green transition-colors">
                                            yixue8924@gmail.com
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mt-1">
                                        <Phone size={20} className="text-forest-green dark:text-mint-green" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('contact.info.phoneLabel')}</p>
                                        <a href="tel:0223880028" className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-forest-green dark:hover:text-mint-green transition-colors">
                                            02-2388-0028
                                        </a>
                                    </div>
                                </li>

                                <li className="flex items-start gap-4">
                                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 mt-1">
                                        <MapPin size={20} className="text-forest-green dark:text-mint-green" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t('contact.info.addressLabel')}</p>
                                        <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                            {t('contact.info.addressContent')}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Google Map Integration */}
                        <div className="bg-white dark:bg-gray-800 p-2 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden h-64 md:h-80">
                            <iframe
                                title="邑沅有限公司位置"
                                src="https://maps.google.com/maps?q=%E8%87%BA%E5%8C%97%E5%B8%82%E5%A4%A7%E5%90%8C%E5%8D%80%E9%95%B7%E5%AE%89%E8%A5%BF%E8%B7%AF303%E8%99%9F10%E6%A8%93%E4%B9%8B1&hl=zh-TW&z=16&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                className="rounded-2xl"
                            >
                                您的瀏覽器不支援 iframe，請點擊此處查看 <a href="https://maps.google.com/maps?q=%E8%87%BA%E5%8C%97%E5%B8%82%E5%A4%A7%E5%90%8C%E5%8D%80%E9%95%B7%E5%AE%89%E8%A5%BF%E8%B7%AF303%E8%99%9F10%E6%A8%93%E4%B9%8B1" target="_blank" rel="noopener noreferrer">地圖位置</a>。
                            </iframe>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection
