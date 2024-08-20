import { useState , useEffect, useRef, useLayoutEffect} from 'react'
import './App.css'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'
import SkillsAndEducation from './Components/SkillsAndEducation'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'

function App() {
  const [headerHeight, setHeaderHeight] = useState('150px');
  const [isToggleOpen, setIsToggleOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const headerRef = useRef(null);

  useEffect(() => {
    console.log(headerHeight, 'headerHeight')
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  useLayoutEffect(() => {

    if(windowWidth<1000){
      setHeaderHeight(80)
    }
    if(windowWidth>=1000){
setHeaderHeight(130)
    }
    // if (headerRef.current) {
    //   setHeaderHeight(headerRef.current.offsetHeight);
    // }
    // console.log(headerHeight, 'headerHeight')
  }, [ windowWidth, isToggleOpen]);

  useEffect(() => {
    const handleHeaderHeight = () => {
      if(isToggleOpen){
        setHeaderHeight(280)
      }
      else{
        setHeaderHeight(90)
      }
    };

    handleHeaderHeight();
  }, [isToggleOpen]);
  return (
    <div id="whole_page">
    <Header setHeaderHeight={setHeaderHeight} setIsToggleOpen={setIsToggleOpen} isToggleOpen={isToggleOpen} windowWidth={windowWidth} setWindowWidth={setWindowWidth} ref={headerRef}/>
    <section id="mainBody" style={{ marginTop: headerHeight }}>
    <div id="aboutMe_div"  className="mainDiv"><AboutMe/></div>
    <div id="skills_ed_div" className="mainDiv"> <SkillsAndEducation/></div>
    <div id="projects_div" className="mainDiv"> <Projects/></div>
    <div id="contactMe_div" className="mainDiv"><ContactMe/></div>
    </section>
    <Footer/>
</div>
  )
}

export default App
