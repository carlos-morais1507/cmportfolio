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

const AboutSection = ({lightBg, id, imgStart, topLine, headline, description, img, alt}) => {
  return (
    <>
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
                        <ImgWrap>                           
                                <Img src={img} alt={alt}/>                           
                        </ImgWrap>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    </>
  )
}

export default AboutSection