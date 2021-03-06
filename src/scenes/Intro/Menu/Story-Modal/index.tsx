import React from 'react';
import styled from 'styled-components';
import Modal from '../../../../shared/Modal';
import { ReactComponent as Shaman } from '../../../../assets/shaman1.svg';
import Mobile from '../../../../shared/Mobile';


const ContentContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
overflow: scroll;
`;

const TotemPowerGridDescription = styled.div`
font-size: 20px;
color: white;
display: flex;
flex-direction: column;
padding: 32px;
overflow: scroll;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  font-size: 16px;
}
`;

const Title = styled.div`
font-size: 40px;
padding: 20px;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  font-size: 24px;
}
`;

const DescriptionItem = styled.div`
margin-bottom: 12px;
`;

type StoryModalProps = { isOpen: boolean; close: () => void }

const Emphasis = styled.span`
font-weight: bold;
transform: scale(1.2);
white-space:pre;
`;

const ShamanContainer = styled.div`
animation: shaman-entry 0.5s ease-in-out;
width: 50px;
height: 50px;
display: flex;

`;


const StoryModal = ({ isOpen, close }: StoryModalProps) => (
  <Modal isOpen={isOpen} close={close} >
    <ContentContainer>
    <Title>Welcome to the Islands of Fa'Owei-ah!</Title>

    <Mobile.Show>
    <ShamanContainer>
        <Shaman style={{ height: '50px', width: '50px'}}/>
      </ShamanContainer>
      </Mobile.Show>
    <TotemPowerGridDescription>
      <DescriptionItem>You are <Emphasis>Toto,</Emphasis> the power shaman of your homeland<Emphasis>, Fa'Owei-ah.</Emphasis></DescriptionItem>
      <DescriptionItem>A massive tropical storm came through and completely knocked out the island's power grids!</DescriptionItem>
      <DescriptionItem>Villagers need <span style={{ color: 'red'}}>fire</span>, <span style={{ color: 'yellow'}}>electricity</span>, and <span style={{ color: 'lightblue'}}>light</span> to do their daily activities.</DescriptionItem>
      <DescriptionItem>You are assigned parts of the island to restore power to using your powerful elemental totems.</DescriptionItem>
      <DescriptionItem>Make sure not to provide power to areas of the grid without the correct unit to absorb the power: disaster will occur!</DescriptionItem>
      </TotemPowerGridDescription>
      </ContentContainer>
  </Modal>
);

export default StoryModal;
