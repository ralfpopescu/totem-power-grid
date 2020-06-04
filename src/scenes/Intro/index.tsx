import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import LevelSelect from './Level-Select';
import { ReactComponent as Shaman} from '../../assets/shaman1.svg';

const AppContainer = styled.div`
position: absolute;
background-color: ${props => props.theme.ocean.primary};
top: 0;
bottom: 0;
right: 0;
left: 0;
overflow: scroll;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-columns: 1fr 1fr;
justify-content: center;
`;

const TotemPowerGridTitle = styled.div`
font-size: 60px;
color: white;
margin-bottom: 20px;
`;


const SideBar = styled.div`
grid-column-start: 1;
grid-row-start: 1;
height: 100%;
display: flex;
flex-direction: column;
padding: 10px;
justify-self: center;
align-self: center;
align-items: center;
justify-content: center;
`;

const LevelSelectContainer = styled.div`
grid-column-start: 2;
grid-row-start: 1;
`;

const Intro = () => (
    <AppContainer>
      <SideBar>
        <TotemPowerGridTitle>TOTEM POWER GRID</TotemPowerGridTitle>
        <Menu />
      <Shaman style={{ width: '200px', height: '200px'}} />
      </SideBar>
      <LevelSelectContainer>
        <LevelSelect />
      </LevelSelectContainer>
    </AppContainer>
  );

export default Intro;

