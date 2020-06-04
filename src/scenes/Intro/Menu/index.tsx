import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, useHistory } from "react-router-dom";
import { ReactComponent as Papyrus} from './assets/papyrus.svg';
import { ReactComponent as Compass} from './assets/compass.svg';
import { ReactComponent as Message} from './assets/message.svg';
import StoryModal from './Story-Modal';
import RulesModal from './Rules-Modal';

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
`;

const MenuItemName = styled.div`
font-size: 20px;
height: 30px;
`;

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
`;

const IconRow = styled.div`
display: flex;
flex-direction: row;
height: 80px;
place-items: center;
`;

const iconStyle = { width: '50px', height: '50px' };

const Menu = () => {
  const [menuItemName, setMenuItemName] = useState<string>('');
  const [storyModalOpen, setStoryModalOpen] = useState<boolean>(false);
  const [rulesModalOpen, setRulesModalOpen] = useState<boolean>(false);
  const [infoModalOpen, setInfoModalOpen] = useState<boolean>(false);
  const history = useHistory();

  return (
    <MenuContainer>
      <IconRow>
        <IconContainer style={{ marginRight: '20px' }} 
        onMouseEnter={() => setMenuItemName('Directions')} onMouseLeave={() => setMenuItemName('')}>
          <Compass style={iconStyle} onClick={() => history.push('/faoweiah/rules')}/>
        </IconContainer>
        <IconContainer style={{ marginRight: '20px' }} onClick={() => setStoryModalOpen(true)} 
        onMouseEnter={() => setMenuItemName('Story')} onMouseLeave={() => setMenuItemName('')}>
          <Papyrus style={iconStyle} />
        </IconContainer>
        <IconContainer onMouseEnter={() => setMenuItemName('Contact')} onMouseLeave={() => setMenuItemName('')}>
          <Message style={iconStyle} />
        </IconContainer>
        <StoryModal isOpen={storyModalOpen} close={() => setStoryModalOpen(false)}/>
        <Route path="/faoweiah/rules">
          <RulesModal isOpen close={() => history.push('/faoweiah')}/>
        </Route>
      </IconRow>
      <MenuItemName>{menuItemName}</MenuItemName>
    </MenuContainer>
);};

export default Menu;