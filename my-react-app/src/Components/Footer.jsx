import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faInstagram, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { Container } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';


function Footer(){

    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        const headerOffset = document.getElementById('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
    
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      };
    
    return(
        <section id="footer">

            <div className="footerDiv">
            <ul id="socials">
                <li> 
                <a href="https://github.com/Clatherine"  target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}  size="2x"/> </a> 
                </li>
                <li>
                    <a href= "https://www.linkedin.com/in/catherine-pulman-081a81236/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin}  size="2x"/></a>
                </li>
             
            </ul>
            </div>
            <div className="footerDiv">
                
            <Nav className="me-auto">
              <Nav.Link href="#aboutMe_div" onClick={(e) => handleNavClick(e, 'aboutMe_div')}>Back to top</Nav.Link>
                </Nav>
                </div>

        </section>
    )
}

export default Footer