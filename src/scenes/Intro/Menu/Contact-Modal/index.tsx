import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Route, useHistory } from "react-router-dom";

const ContentContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`;

const Title = styled.div`
font-size: 40px;
padding: 20px;
`;

const DescriptionItem = styled.div`
margin-bottom: 12px;
`;

type ModalProps = { isOpen: boolean; close: () => void }

const modalStyle = { content: { 
  backgroundColor: '#33bbff', 
top: '280px',
bottom: '280px',
left: '500px',
right: '500px',
display: 'flex',
borderRadius: '40px',
border: 'none',
flexDirection: 'column' as any,
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const CloseButton = styled.button`
margin-top: 50px;
outline: none;
font-family: 'Chelsea Market';
padding: 16px;
width: 200px;
border: none;
color: ${props => props.theme.ocean.primary};
border-radius: 12px;
cursor: pointer;
place-self: center;
margin-bottom: 32px;

&:hover {
  transform: scale(1.05);
}
`;

const StoryModal = ({ isOpen, close }: ModalProps) => (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    <ContentContainer>
    <Title>Contact</Title>
      <DescriptionItem>INSTAGRAM: @popeska</DescriptionItem>
      </ContentContainer>
      <CloseButton onClick={close}>Close</CloseButton>
  </Modal>
);

export default StoryModal;
