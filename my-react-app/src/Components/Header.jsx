import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import React, { useEffect, useRef } from 'react';

function Header ({setHeaderHeight}){
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();

    window.addEventListener('resize', updateHeaderHeight);

    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [setHeaderHeight]);

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
        <Navbar id="header" ref={headerRef} fixed="top" data-bs-theme="dark">
                <div>
            <Navbar.Brand href="#home">CATHERINE PULMAN</Navbar.Brand></div>
            <div>
            <Nav className="me-auto">
              <Nav.Link href="#aboutMe_div" onClick={(e) => handleNavClick(e, 'aboutMe_div')}>About Me</Nav.Link>
              <Nav.Link href="#skills_ed_div" onClick={(e) => handleNavClick(e, 'skills_ed_div')}>Skills & Education</Nav.Link>
              <Nav.Link href="#projects_div" onClick={(e) => handleNavClick(e, 'projects_div')}>Projects</Nav.Link>
              <Nav.Link href="#contactMe_div" onClick={(e) => handleNavClick(e, 'contactMe_div')}>Contact Me</Nav.Link>
            </Nav>
           </div>
        </Navbar>
    
    )
}
export default Header