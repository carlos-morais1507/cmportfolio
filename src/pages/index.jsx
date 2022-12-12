import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import { aboutData, contactData, skillsData, workData } from '../store/Data';
import SkillsSection from '../components/SkillsSection';
import WorkSection from '../components/WorkSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection />
        <AboutSection {...aboutData}/>
        <SkillsSection {...skillsData}/>
        <WorkSection {...workData} />
        <ContactSection {...contactData} />
        <Footer />
    </>
  )
}

export default Home