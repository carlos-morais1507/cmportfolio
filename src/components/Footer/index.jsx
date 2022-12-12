import React from 'react'
import { FooterContent,
    FooterWrapper,
    FooterTitle,
    FooterLinkGp,
    FooterLink,
} from '../../styles/elementStyles'

const Footer = () => {
  return (
    <FooterContent>
        <FooterWrapper>
            <FooterTitle>Made with 💜 by Carlos Morais</FooterTitle>
            <FooterLinkGp>
                <FooterLink href='https://github.com/carlos-morais1507' target='blank'>Github</FooterLink>
                <FooterLink href='https://www.linkedin.com/in/cmorais1507/' target='blank'>LinkedIn</FooterLink>
                <FooterLink href='https://wa.me/5521978928869' target='blank'>WhatsApp</FooterLink>
                <FooterLink href='https://t.me/Carlos2812' target='blank'>Telegram</FooterLink>
                <FooterLink href='mailto:c.morais1507@gmail.com' target='blank'>Email</FooterLink>
            </FooterLinkGp>
        </FooterWrapper>
    </FooterContent>
        
  )
}

export default Footer