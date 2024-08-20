import { Navbar, Nav } from "react-bootstrap";
import React, {useRef, useEffect, useState, forwardRef } from "react";

const Header = React.forwardRef(({ setHeaderHeight, setIsToggleOpen, isToggleOpen, windowWidth, setWindowWidth }, ref) => {
 

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    const headerOffset = ref.current.offsetHeight
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

   
      window.scrollTo({
        top: offsetPosition,
      });

};

const handleToggle =() =>{
  setIsToggleOpen(!isToggleOpen)
}

  return (
    <section>
      {windowWidth > 1000 && (
        <Navbar id="header" ref={ref} fixed="top" data-bs-theme="dark">
          <div>
            <Navbar.Brand href="#home">CATHERINE PULMAN</Navbar.Brand>
          </div>
          <div>
            <Nav className="me-auto">
              <Nav.Link
                href="#aboutMe_div"
                onClick={(e) => handleNavClick(e, "aboutMe_div")}
              >
                About Me
              </Nav.Link>
              <Nav.Link
                href="#skills_ed_div"
                onClick={(e) => handleNavClick(e, "skills_ed_div")}
              >
                Skills & Education
              </Nav.Link>
              <Nav.Link
                href="#projects_div"
                onClick={(e) => handleNavClick(e, "projects_div")}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#contactMe_div"
                onClick={(e) => handleNavClick(e, "contactMe_div")}
              >
                Contact Me
              </Nav.Link>
            </Nav>
          </div>
        </Navbar>
      )}
      {windowWidth <= 1000 && (
        <Navbar id="header" ref={ref} fixed="top" data-bs-theme="dark" expand='lg'  
        onToggle={handleToggle} expanded={isToggleOpen}
        >
          <div id="myName">
            <Navbar.Brand href="#home"><p>CATHERINE PULMAN</p></Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="toggle-custom"
            />
          </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  href="#aboutMe_div"
                  onClick={(e) => handleNavClick(e, "aboutMe_div")}
                >
                  About Me
                </Nav.Link>
                <Nav.Link
                  href="#skills_ed_div"
                  onClick={(e) => handleNavClick(e, "skills_ed_div")}
                >
                  Skills & Education
                </Nav.Link>

                <Nav.Link
                  href="#projects_div"
                  onClick={(e) => handleNavClick(e, "projects_div")}
                >
                  Projects
                </Nav.Link>
                <Nav.Link
                  href="#contactMe_div"
                  onClick={(e) => handleNavClick(e, "contactMe_div")}
                >
                  Contact Me
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
         
        </Navbar>
      )}
    </section>

  );
})
export default Header;
