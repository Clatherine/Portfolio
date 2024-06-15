import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import SkillsAndEducation from './Components/SkillsAndEducation'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Header/>
    <AboutMe/>
    <SkillsAndEducation/>
    <Projects/>
    <ContactMe/>
    <Footer/>
    </>
  )
}

export default App
