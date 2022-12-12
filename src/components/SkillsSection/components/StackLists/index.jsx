import React, { useEffect, useState } from 'react'
import { ListContainer,
ListWrapper,
FrontendList,
ListButtons,
IndexBtn,
IndexLabel,
StackTooltip,
StackWrapper,
LangImg,
 } from '../../../../styles/elementStyles'


const StackList = () => {
  const [stacks, setStacks] = useState([]);

  async function fetchStacks() {
    const response = await fetch('stack.json');
    setStacks(await response.json());
  }

  useEffect(() => {
    fetchStacks();
  })

  return (
    <>
        <ListContainer>
            <ListWrapper>
                <FrontendList>
                    {stacks.map(lang => {
                        if(myRadio1.checked) {
                          if(lang.type === 0) {
                              return(
                                <StackWrapper  key={lang.id} >                                
                                <LangImg id={lang.name} src={`${lang.name}.svg`} alt={lang.desc}/>
                                <StackTooltip >{lang.desc}</StackTooltip>
                                </StackWrapper>
                                )                                                   
                          } else {
                            return(null)
                          }
                        }
                        if(myRadio2.checked) {
                          if(lang.type === 1) {
                            return(
                              <StackWrapper>
                              <LangImg id={lang.name} key={lang.name} src={`${lang.name}.svg`} alt={lang.desc}/>
                              <StackTooltip>{lang.desc}</StackTooltip>
                              </StackWrapper>
                            )
                          } else {
                            return(null)
                          }
                        }
                        if(myRadio3.checked) {
                          if(lang.type === 2) {
                            return(
                              <StackWrapper>
                              <LangImg id={lang.name} key={lang.name} src={`${lang.name}.svg`} alt={lang.desc}/>
                              <StackTooltip>{lang.desc}</StackTooltip>
                              </StackWrapper>
                            )
                          } else {
                            return(null)
                          }
                        }
                        else{
                          if(lang.type === 0) {
                            return(
                              <StackWrapper>                                
                              <LangImg id={lang.name} key={lang.name} src={`${lang.name}.svg`} alt={lang.desc}/>
                              <StackTooltip>{lang.desc}</StackTooltip>
                              </StackWrapper>
                            )
                          } else {
                            return(null)
                          }
                        }
                    })}
                </FrontendList>
                <ListButtons>
                    <IndexBtn type="radio" value="1" name="myRadio" id="myRadio1" />
                    <IndexLabel htmlFor='myRadio1' >Front-end</IndexLabel>
                    <IndexBtn type="radio" value="2" name="myRadio" id="myRadio2" />
                    <IndexLabel htmlFor='myRadio2' >Back-end</IndexLabel>
                    <IndexBtn type="radio" value="3" name="myRadio" id="myRadio3" />
                    <IndexLabel htmlFor='myRadio3' >Databases</IndexLabel>
                </ListButtons>
            </ListWrapper>
        </ListContainer>
    </>
  )
}

export default StackList