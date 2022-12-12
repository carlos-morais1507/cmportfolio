import React from 'react'
import { FaBars } from 'react-icons/fa'
import { 
    Nav,
    NavbarContainer,NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from '../../styles/elementStyles'
import {animateScroll as scroll} from 'react-scroll';

function Navbar({ toggle }) {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>Carlos Morais</NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"                        
                        smooth={true} duration={500} 
                        spy={true}
                        exact='true'
                        offset={-80}
                        >// About</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="skills"                        
                        smooth={true} duration={500} 
                        spy={true}
                        exact='true'
                        offset={-79}
                        >// Skills</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="work"                        
                        smooth={true} duration={500} 
                        spy={true}
                        exact='true'
                        offset={-79}
                        >// Work</NavLinks>
                    </NavItem>
                    <NavItem>
                    <NavLinks to="contact"                        
                        smooth={true} duration={500} 
                        spy={true}
                        exact='true'
                        offset={-79}
                        >// Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>        
        </Nav>
    </>
  )
}

export default Navbar