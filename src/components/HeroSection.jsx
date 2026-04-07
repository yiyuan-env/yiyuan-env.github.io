import React, { useState } from 'react'
import { Waves, Copy, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const emailAddress = "yixue8924@gmail.com";
  const emailSubject = encodeURIComponent("諮詢意願");
  const emailBody = encodeURIComponent("您好，我想了解更多關於貴公司的服務內容...");
  const mailtoUrl = `mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-mint-green to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center overflow-x-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="animate-fade-in-left opacity-0">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-green dark:text-mint-green mb-6 leading-tight animate-fade-in-up opacity-0"
              dangerouslySetInnerHTML={{ __html: t('hero.title') }}
            />

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-lg animate-fade-in-up-delay-1 opacity-0">
              {t('hero.subtitle')}
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3 opacity-0">
                <a
                  href={mailtoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 bg-forest-green border-forest-green text-white rounded-full hover:bg-white hover:text-forest-green dark:hover:bg-gray-800 dark:hover:text-mint-green hover:scale-105 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
                >
                  {t('hero.contactNow')}
                </a>
                <a
                  href="#about"
                  className="px-8 py-4 border-2 border-forest-green text-forest-green dark:text-mint-green dark:border-mint-green rounded-full hover:bg-forest-green hover:text-white dark:hover:bg-mint-green dark:hover:text-gray-900 hover:scale-105 transition-all duration-300 font-medium text-lg inline-flex items-center justify-center"
                >
                  {t('hero.learnMore')}
                </a>
              </div>

              {/* Copy Email Logic - The "Plan B" */}
              <div className="flex items-center gap-2 text-sm text-forest-green/70 dark:text-mint-green/70 ml-2 animate-fade-in-up-delay-3 opacity-0">
                <span>{t('hero.copyEmail')}{emailAddress}</span>
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-forest-green/10 dark:hover:bg-mint-green/10 rounded-full transition-colors relative"
                  title={t('hero.copyTitle')}
                  aria-label={t('hero.copyAria')}
                >
                  {copied ? (
                    <Check size={16} className="text-green-600 animate-fade-in-up" />
                  ) : (
                     <Copy size={16} className="animate-fade-in-up" />
                  )}
                </button>
                {copied && <span className="text-xs font-bold text-green-600 animate-pulse">{t('hero.copied')}</span>}
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative h-96 md:h-full flex items-center justify-center animate-scale-in opacity-0">
            {/* SVG Illustration remains exactly as before */}
            <div className="relative w-full h-full">
              <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <circle cx="200" cy="200" r="150" fill="#F0F9F1" opacity="0.3" />
                <circle cx="200" cy="200" r="100" fill="#F0F9F1" opacity="0.5" />
                <path d="M 50 250 Q 100 200, 150 250 T 250 250 T 350 250" stroke="#0077B6" strokeWidth="3" fill="none" opacity="0.6" />
                <path d="M 50 280 Q 100 230, 150 280 T 250 280 T 350 280" stroke="#2D5A27" strokeWidth="2" fill="none" opacity="0.4" />
                <ellipse cx="120" cy="120" rx="20" ry="35" fill="#2D5A27" opacity="0.7" transform="rotate(-45 120 120)" />
                <ellipse cx="300" cy="140" rx="15" ry="25" fill="#0077B6" opacity="0.6" transform="rotate(30 300 140)" />
                <ellipse cx="250" cy="100" rx="18" ry="30" fill="#2D5A27" opacity="0.5" transform="rotate(-20 250 100)" />
                <circle cx="80" cy="180" r="3" fill="#2D5A27" opacity="0.4" />
                <circle cx="320" cy="220" r="3" fill="#0077B6" opacity="0.4" />
                <circle cx="150" cy="150" r="2" fill="#2D5A27" opacity="0.3" />
              </svg>

              <div className="absolute top-10 right-10 animate-bounce">
                <Waves size={48} className="text-ocean-blue opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}