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
} from '../../styles/elementStyles'
import RepoList from './components/RepoList'

const WorkSection = ({lightBg, id, imgStart, topLine, headline, description, img, alt}) => {
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
                        <RepoList />
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    </>
  )
}

export default WorkSection