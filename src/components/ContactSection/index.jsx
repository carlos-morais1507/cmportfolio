import React, { useEffect, useState } from 'react'

import {AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    Column2,
    TextWrapper,
    Topline,
    Heading,
    Subtitle,
    ContWrapper,
    ContLink,
} from '../../styles/elementStyles'

const ContactSection = ({lightBg, id, imgStart, topLine, headline, description, img, alt}) => {
    const [contact, setContacts] = useState([]);

    async function fetchContacts() {
        const response = await fetch('stack.json');
        setContacts(await response.json());
    }

    useEffect(() => {
        fetchContacts();
    })
  
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
                        <ContWrapper>
                            {contact.map(cont => {
                                if(cont.type===3) {
                                    return(
                                        <ContLink key={cont.id} href={cont.desc} target='blank'><img src={`${cont.name}.svg`} alt={cont.name}/></ContLink>
                                    )

                                }
                            })}
                        </ContWrapper>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    </>
  )
}



export default ContactSection