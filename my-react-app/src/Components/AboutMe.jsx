import { Nav } from "react-bootstrap"
import pdf from '../../public/CatherinePulmanCV.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFile } from "@fortawesome/free-solid-svg-icons"


function AboutMe (){

    
    return(
      <section id="aboutMe_whole" >
        <h2> ABOUT ME</h2>
        <section id="aboutMe_section" >
            <div id="aboutMeText">
            <p> Hi, I'm Catherine, a recent graduate of the Northcoders intensive 3 month software development bootcamp! I have been busy working on my portfolio of development projects and am excited to share them with you here.
               <br></br> <br></br>
            I'm looking to secure my first role in software development and am open to Front-end, Back-end and full-stack development positions. Likewise, if you are looking for a new website, please get in touch!</p><p> Many thanks for looking!</p>
          
               {/* <a id="cv" href={pdf} target = "_blank" rel="noopener noreferrer"><p>Download CV </p>
               <FontAwesomeIcon icon={faFile} size="4x"/></a> */}
            </div>
            {/* <div>Add pic here</div> */}
          
        </section>
        </section >
    )
}


export default AboutMe;