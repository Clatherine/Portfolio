import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import SkillsAndEducation from './Components/SkillsAndEducation'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'


function App() {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <div id="whole_page">
    <Header setHeaderHeight={setHeaderHeight}/>
    <section id="mainBody" style={{ marginTop: headerHeight }}>
    <div id="aboutMe_div" class="mainDiv"><AboutMe/></div>
    <div id="skills_ed_div" class="mainDiv"> <SkillsAndEducation/></div>
    <div id="projects_div" class="mainDiv"> <Projects/></div>
    <div id="contactMe_div" class="mainDiv"><ContactMe/></div>
    </section>
    <Footer/>
</div>
  )
}

export default App
