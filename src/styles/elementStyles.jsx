import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll"
import {FaTimes} from 'react-icons/fa'
import Spline from '@splinetool/react-spline'


/* const violet = {
  violet1: '#fdfcfe',
  violet2: '#fbfaff',
  violet3: '#f5f2ff',
  violet4: '#ede9fe',
  violet5: '#e4defc',
  violet6: '#d7cff9',
  violet7: '#c4b8f3',
  violet8: '#aa99ec',
  violet9: '#6e56cf',
  violet10: '#644fc1',
  violet11: '#5746af',
  violet12: '#20134b',
} 
const violetDark = {
  violet1: '#17151f',
  violet2: '#1c172b',
  violet3: '#251e40',
  violet4: '#2c2250',
  violet5: '#32275f',
  violet6: '#392c72',
  violet7: '#443592',
  violet8: '#5842c3',
  violet9: '#6e56cf',
  violet10: '#7c66dc',
  violet11: '#9e8cfc',
  violet12: '#f1eefe',
}

*/

// NAVBAR SECTION #ff1111

export const Nav = styled.nav`
    background: hsl(255, 30.3%, 12.9%);
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #f1eefe;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        color: #9e8cfc;
        transition: 0.2s ease-in-out;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        padding: 20px;
        transform: translate(-100, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #f1eefe;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #f1eefe;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #9e8cfc;
        transition: 0.2s ease-in-out
    }

    &.active {
        border-bottom: 3px solid #6e56cf;
    }
`

// SIDEBAR SECTION #ff1111

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #1c172b;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: #f1eefe;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: #f1eefe;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #f1eefe;
    cursor: pointer;

    &:hover {
        color: #9e8cfc;
        transition: 0.2s ease-in-out;
    }
`

// HERO SECTION #ff1111

export const HeroContainer = styled.div`
    background: #1c172b;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 2;
    margin-top: 50px
`

export const MediaBg = styled(Spline)`
    top: 100;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 768px){
        margin-top: 130px;
    }
`

export const HeroText = styled.div`
    position: absolute;
    top: 150px;
    text-align: center;
    z-index: 0;
`

export const HeroTitle = styled.h1`
    color: #f1eefe;
    font-size: 5rem;
    font-weight: bold;
`

export const HeroSub = styled.h1`
    color: #f1eefe;
    font-size: 2.5rem;
`

// ABOUT SECTION #ff1111

export const AboutContainer = styled.div`
    color: #20134b;
    background: ${({ lightBg }) => (lightBg ? '#fbfaff' : '#1c172b')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: calc(100vh - 80px);
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 100%;
    }
`

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Topline = styled.p`
    color: #8168ff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightBg }) => (lightBg ? '#9e8cfc' : '#5746af')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ lightBg }) => (lightBg ? '#20134b' : '#f1eefe')}; 
    text-align: justify;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

`

// STACKLIST SECTION #ff1111

export const ListContainer = styled.div`
    background-color: #6e56cf;
    height: 50vh;
    border-radius: 25px;

`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    height: 100%;

    @media screen and (max-width: 768px){
        padding: 0;
    }
`

export const FrontendList = styled.div`
    height: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 1rem;
    margin-bottom: 1rem;
    
    @media screen and (max-width: 768px){
        padding: 30px;
    }

    @media screen and (max-width: 380px) {
        grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
    }
`

export const ListButtons = styled.div`
    height: 15%;
    display: inline-flex;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    width: fit-content;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px){
        width: 100%;
        padding: 0;
        margin: 0;
        border-radius: 0 0 25px 25px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const IndexLabel = styled.label`
    padding: 10px 15px;
    font-size: 15px;
    background: #392c72;
    color: #f1eefe;
    cursor: pointer;
    transition: background 0.1s;

    &:not(:last-of-type) {
        border-right: 2px solid #251e40;
    }

    @media screen and (max-width: 768px){
        font-size: 25px;
        height: 100%;
        width: 100%;
    }

    @media screen and (max-width: 380px) {
        font-size: 15px;
    }
`

export const IndexBtn = styled.input`
    display: none;

    &:checked + ${IndexLabel} {
        background: #251e40;
    }
`

export const StackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StackTooltip = styled.h3`
    text-align: center;
    opacity: 0;
    color: #f1eefe;
    padding: 5px 10px;
    pointer-events: none;  
`

export const LangImg = styled.img`

    &:hover + ${StackTooltip} {
        opacity: 1;
        transition: all 0.1s ease-in-out;
    }
`

// WORK SECTION #ff1111

// REPO LIST SECTION #ff1111
export const RepoContent = styled.div`
    scroll-behavior: smooth;
    overflow: hidden;
`

export const RepoListSt = styled.ul`
    scroll-behavior: smooth;
    list-style: none;
    height: 500px;
    overflow: hidden;
    overflow-y: scroll;
    
`

export const RepoListLi = styled.li`
    margin-bottom: 30px;
`

export const RepoLiDesc = styled.p`
    margin-bottom: 10px;
    max-width: 90%;
    text-align: justify;
`

export const RepoLiBtn = styled.a`
    text-decoration: none;
    background-color: #6e56cf;
    color: #f1eefe;
    padding: 5px 10px;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
`

// CONTACT SECTION #ff1111

export const ContLink = styled.a`
    transition: all 0.1s ease-in-out;
`

export const ContWrapper = styled.div`
    height: 80%;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 5rem;
    margin-bottom: 1rem;

    &:hover > ${ContLink} {
        opacity: 0.4;
    }

    &:hover > ${ContLink}:hover {
        opacity: 1;
    }
`

// FOOTER SECTION #ff1111

export const FooterContent = styled.div`
    background: #6e56cf;
`
export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;
`

export const FooterTitle = styled.h3`
    margin-bottom: 20px;
`

export const FooterLink = styled.a`
    margin: 0 10px;
    text-decoration: none;
    color: #f1eefe;
    cursor: pointer;

    transition: all 0.2s ease-in-out;
`

export const FooterLinkGp = styled.div`
    &:hover > ${FooterLink} {
        opacity: 0.4;
    }

    &:hover > ${FooterLink}:hover {
        opacity: 1;
    }
`