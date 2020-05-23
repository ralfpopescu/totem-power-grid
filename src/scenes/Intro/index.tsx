import React from 'react';
import styled from 'styled-components'
import { ReactComponent as Shaman} from '../../top-level-assets/shaman1.svg'
import LevelSelect from './Level-Select'

const AppContainer = styled.div`
position: absolute;
background-color: #294363;
top: 0;
bottom: 0;
right: 0;
left: 0;
overflow: scroll;
display: grid;
grid-template-columns: 1fr 2fr;
grid-template-columns: 1fr 2fr;
`

const TotemPowerGridTitle = styled.div`
font-size: 50px;
color: white;
margin-bottom: 20px;
`

const TotemPowerGridDescription = styled.div`
font-size: 30px;
color: white;
display: flex;
flex-direction: column;
`

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
`



const Intro = () => {
  return (
    <AppContainer>
      <SideBar>
        <TotemPowerGridTitle>TOTEM POWER GRID</TotemPowerGridTitle>
        <TotemPowerGridDescription>
          <div>You are the power shaman of your village.</div>
          <div>Villagers need fire, electricity, and light to do their daily activities.</div>
          <div>You are assigned parts of the village to bring power to using your totems.</div>
          <div>Make sure not to provide power to areas of the grid without the correct unit to absorb the power: disaster will occur!</div>
        </TotemPowerGridDescription>
        <Shaman />
      </SideBar>
      <LevelSelect />
    </AppContainer>
  );
}

export default Intro

