import { useState , useEffect} from 'react'
import './App.css'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import SkillsAndEducation from './Components/SkillsAndEducation'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isToggleOpen, setIsToggleOpen] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      const header = document.getElementById('header');
      if(isToggleOpen){
        setHeaderHeight(280)
      }
      else{
        setHeaderHeight(90)
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isToggleOpen]);
  return (
    <div id="whole_page">
    <Header setHeaderHeight={setHeaderHeight} setIsToggleOpen={setIsToggleOpen} isToggleOpen={isToggleOpen}/>


    <section id="mainBody" style={{ marginTop: headerHeight }}>
    <div id="aboutMe_div" className="mainDiv"><AboutMe/></div>
    <div id="skills_ed_div" className="mainDiv"> <SkillsAndEducation/></div>
    <div id="projects_div" className="mainDiv"> <Projects/></div>
    <div id="contactMe_div" className="mainDiv"><ContactMe/></div>
    </section>
    <Footer/>
</div>
  )
}

export default App
