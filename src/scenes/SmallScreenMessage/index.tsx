import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Shaman } from '../../assets/shaman1.svg';


const Container = styled.div`
display: flex;
position: absolute;
background-color: #33bbff;
bottom: 0;
top: 0;
left: 0;
right: 0;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px;

@media only screen and (min-width: 100px) {
  display: none;
}
`;

const TotemPowerGridTitle = styled.div`
font-size: 30px;
color: white;
margin-bottom: 20px;
display: flex;
align-items: center;
flex-direction: row;
`;

type TitleProps = { delay: number }

const TitleIntroSpan = styled.div<TitleProps>`
`;

const Message = styled.div`
font-size: 12px;
margin-bottom: 40px;
`;
const SmallScreenMessage = () => (
<Container>
  <TotemPowerGridTitle>
    <TitleIntroSpan delay={0} style={{ marginRight: '20px'}}>TOTEM </TitleIntroSpan> 
    <TitleIntroSpan delay={0.05} style={{ marginRight: '20px'}}>POWER </TitleIntroSpan> 
    <TitleIntroSpan delay={0.1}>GRID</TitleIntroSpan>
  </TotemPowerGridTitle>
<Message>This game must be played in a bigger window.</Message>
<Shaman style={{ width: '100px', height: '100px'}}/>
</Container>
);

export default SmallScreenMessage;