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
display: flex;
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

type TitleProps = { delay: number }

const TitleIntroSpan = styled.div<TitleProps>`
animation: title-intro 0.5s ease-in-out;
animation-delay: ${props => props.delay}s;
animation-fill-mode: forwards;
opacity: 0;

@keyframes title-intro {
  0% {
    opacity: 0;
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const ShamanContainer = styled.div`
animation: shaman-entry 0.5s ease-in-out;
width: 200px;

@keyframes shaman-entry {
  0% {
    opacity: 0;
    {transform: scale(0.1);}
  }
  75% {
    opacity: 1;
    {transform: scale(1.2);}
  }
  100% {
    opacity: 1;
    {transform: scale(1);}
  }
`;

const Intro = () => (
    <AppContainer>
      <SideBar>
        <TotemPowerGridTitle>
          <TitleIntroSpan delay={0} style={{ marginRight: '20px'}}>TOTEM </TitleIntroSpan> 
          <TitleIntroSpan delay={0.2} style={{ marginRight: '20px'}}>POWER </TitleIntroSpan> 
          <TitleIntroSpan delay={0.4}>GRID</TitleIntroSpan>
        </TotemPowerGridTitle>
        <Menu />
        <ShamanContainer>
          <Shaman style={{ width: '200px', height: '200px'}} />
        </ShamanContainer>
      </SideBar>
      <LevelSelectContainer>
        <LevelSelect />
      </LevelSelectContainer>
    </AppContainer>
  );

export default Intro;

