import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Waves, Book, Video, ChevronDown, Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import PartnersSection from './components/PartnersSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <div className="w-full bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <PartnersSection />
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
