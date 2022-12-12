import React from 'react'
import {AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    Column2,
    TextWrapper,
    Topline,
    Heading,
    Subtitle,
    ImgWrap,
    Img
} from '../../styles/elementStyles'
import StackList from './components/StackLists'

const SkillsSection = ({lightBg, id, imgStart, topLine, headline, description}) => {
  return (
        <AboutContainer lightBg={lightBg} id={id}>
            <AboutWrapper>
                <AboutRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <Topline>{topLine}</Topline>
                            <Heading lightBg={lightBg} >{headline}</Heading>
                            <Subtitle lightBg={lightBg}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <StackList/>
                        </TextWrapper>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
  )
}

export default SkillsSection