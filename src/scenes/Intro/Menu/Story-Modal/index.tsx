import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Route, useHistory } from "react-router-dom";

const ContentContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`;

const TotemPowerGridDescription = styled.div`
font-size: 20px;
color: white;
display: flex;
flex-direction: column;
padding: 32px;

`;

const Title = styled.div`
font-size: 40px;
padding: 20px;
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

const modalStyle = { content: { 
  backgroundColor: '#33bbff', 
top: '100px',
left: '100px',
right: '100px',
bottom: '100px',
display: 'flex',
borderRadius: '40px',
border: 'none',
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const StoryModal = ({ isOpen, close }: StoryModalProps) => (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    <ContentContainer>
    <Title>Welcome to the Islands of Fa'Owei-ah!</Title>
    <TotemPowerGridDescription>
      <DescriptionItem>You are <Emphasis>Toto,</Emphasis> the power shaman of your island<Emphasis>, Fa'Owei-ah.</Emphasis></DescriptionItem>
      <DescriptionItem>A massive tropical storm came through and completely knocked out the island's power grids!</DescriptionItem>
      <DescriptionItem>Villagers need <span style={{ color: 'red'}}>fire</span>, <span style={{ color: 'yellow'}}>electricity</span>, and <span style={{ color: 'lightblue'}}>light</span> to do their daily activities.</DescriptionItem>
      <DescriptionItem>You are assigned parts of the island to restore power to using your powerful elemental totems.</DescriptionItem>
      <DescriptionItem>Make sure not to provide power to areas of the grid without the correct unit to absorb the power: disaster will occur!</DescriptionItem>
      </TotemPowerGridDescription>
      </ContentContainer>
  </Modal>
);

export default StoryModal;
