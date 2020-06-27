import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import type { Solution as SolutionType } from '../../../../logic/getSolutionFromState';


type ActivateModalProps = { isOpen: boolean; close: () => void; isSolved: boolean }

const modalStyle = { content: { 
justifyContent: 'center',
alignItems: 'center',
display: 'flex',
top: '200px',
bottom: '200px',
right: '200px',
left: '200px',
backgroundColor: '#33bbff', 
borderRadius: '40px',
border: 'none',
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const CloseButton = styled.button`
margin-top: 50px;
outline: none;
font-family: 'Chelsea Market';
padding: 16px;
width: 400px;
border: none;
color: ${props => props.theme.ocean.primary};
border-radius: 12px;
cursor: pointer;

&:hover {
  transform: scale(1.05);
}
`;

const ContentContainer = styled.div`
width: 1000px;
display: flex;
flex-direction: column;
`;


type MessageProps = { title: string; description: string; linkText: string; onClick: () => void }

const Message = ({ title, description, linkText, onClick }: MessageProps) => (
  <ContentContainer>
    <div style={{ fontSize: '40px' }}>
      {title}
    </div>
    <div style={{ fontSize: '20px', marginTop: '40px' }}>
      {description}
    </div>
    <CloseButton style={{ fontSize: '20px' }} onClick={onClick}>
      {linkText}
    </CloseButton>
  </ContentContainer>
);

const StoryModal = ({ isOpen, close, isSolved }: ActivateModalProps) => {
  const history = useHistory();
  return (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    {isSolved ? <Message title="Success!" description="The power is on! The villages thank you profusely for not blowing them up."
    linkText="Back to Fa'Owei-ah" onClick={() => history.push('/faoweiah')} /> :
    <Message title="Oh no! The village blew up." description="Luckily, the Time Shaman has agreed to rewind the universe to the moment right before you pushed the button, but just this once!! (He says that every time.)"
    linkText="Back to the power grid" onClick={close} />
  }
  </Modal>
);};

export default StoryModal;
