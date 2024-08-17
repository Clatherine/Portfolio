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
            <p> Hi, I'm Catherine, a recent graduate of the Northcoders intensive 3-month JavaScript software development course. I started dabbling with coding through learning Arduino programming for an animatronics project, and immediately caught the bug. This, combined with being drawn to the more technical aspects of my previous job in education technology, led me to take the plunge and sign up for the JavaScript course with Northcoders earlier this year. 
            <br></br> <br></br>Now I have graduated, I'm excited to embark on a new career in software development. I am open to front-end, back-end and full-stack development positions. If you are looking for a new website for your business, or a website refresh, please get in touch.
            <br></br> <br></br>
In the meantime, please take a look at the projects I have been working on below and feel free to send any questions or suggestions for improvements my way. Many thanks for looking!</p>
          
            </div>
          
        </section>
        </section >
    )
}


export default AboutMe;