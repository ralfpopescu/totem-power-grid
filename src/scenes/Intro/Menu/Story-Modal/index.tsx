import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

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
top: '0',
left: '0',
right: '0',
bottom: '0',
display: 'flex',
border: 'none',
backgroundColor: 'rgb(0, 0, 0, 0)',
flexDirection: 'column' as any,
alignItems: 'center',
justifyContent: 'center',
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const ModalContainer = styled.div`
padding: 40px;
background-color: #33bbff;
height: 500px;
display: flex;
flex-direction: column;
border-radius: 40px;
border: none;
`;

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

const CoverDiv = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const StoryModal = ({ isOpen, close }: StoryModalProps) => (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    <CoverDiv onClick={close}>
      <ModalContainer onClick={e => e.stopPropagation()}>
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
          <CloseButton onClick={close}>Close</CloseButton>
        </ModalContainer>
      </CoverDiv>
  </Modal>
);

export default StoryModal;
