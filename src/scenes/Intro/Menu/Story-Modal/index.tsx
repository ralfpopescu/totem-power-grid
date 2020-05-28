import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const TotemPowerGridDescription = styled.div`
font-size: 20px;
color: white;
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
place-items: center;
`;

const DescriptionItem = styled.div`
margin-bottom: 12px;
`;

type StoryModalProps = { isOpen: boolean; close: () => void }

const modalStyle = { content: { 
  backgroundColor: '#06053d', 
top: '200px',
left: '200px',
right: '200px',
bottom: '200px'},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const StoryModal = ({ isOpen, close }: StoryModalProps) => (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    <TotemPowerGridDescription>
      <DescriptionItem>You are Toto, the power shaman of your island, Fa'Owei-ah.</DescriptionItem>
      <DescriptionItem>Villagers need fire, electricity, and light to do their daily activities.</DescriptionItem>
      <DescriptionItem>You are assigned parts of the island to bring power to using your totems.</DescriptionItem>
      <DescriptionItem>Make sure not to provide power to areas of the grid without the correct unit to absorb the power: disaster will occur!</DescriptionItem>
      </TotemPowerGridDescription>
  </Modal>
);

export default StoryModal;
