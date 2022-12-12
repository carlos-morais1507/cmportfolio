import React from 'react';
import { SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SidebarLink } from '../../styles/elementStyles'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle} >// About</SidebarLink>
                <SidebarLink to="skills" onClick={toggle} >// Skills</SidebarLink>
                <SidebarLink to="work" onClick={toggle} >// Work</SidebarLink>
                <SidebarLink to="contact" onClick={toggle} >// Contact</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar