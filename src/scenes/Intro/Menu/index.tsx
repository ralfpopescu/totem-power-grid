import React, { useState } from 'react';
import styled from 'styled-components'
import { ReactComponent as Tribal} from './assets/tribal.svg'
import { ReactComponent as Compass} from './assets/compass.svg'
import { ReactComponent as Message} from './assets/message.svg'
import StoryModal from './Story-Modal'

const IconContainer = styled.div`
fill: white;
display: flex;
place-items: center;
height: 50px;
width: 50px;
cursor: pointer;

&:hover {
  opacity: 0.7;
}
`

const IconRow = styled.div`
display: flex;
flex-direction: row;
height: 80px;
place-items: center;
`

const iconStyle = { width: '50px', height: '50px' }

const Menu = () => {
  const [storyModalOpen, setStoryModalOpen] = useState<boolean>(false)
  const [rulesModalOpen, setRulesModalOpen] = useState<boolean>(false)
  const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false)

  return (
  <IconRow>
    <IconContainer style={{ marginRight: '20px' }}>
      <Compass style={iconStyle} />
    </IconContainer>
    <IconContainer style={{ marginRight: '20px' }} onClick={() => setStoryModalOpen(true)}>
      <Tribal style={iconStyle} />
    </IconContainer>
    <IconContainer>
      <Message style={iconStyle} />
    </IconContainer>
    <StoryModal isOpen={storyModalOpen} close={() => setStoryModalOpen(false)}/>
  </IconRow>
)}

export default Menu