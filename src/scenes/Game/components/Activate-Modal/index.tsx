import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import type { Solution as SolutionType } from '../../../../logic/getSolutionFromState';
import Modal from '../../../../shared/Modal';


type ActivateModalProps = { isOpen: boolean; close: () => void; isSolved: boolean }

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

const MessageTitle = styled.div`
font-size: 40px;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
font-size: 32px;
}`;

const MessageDescription = styled.div`
font-size: 20px;
margin-top: 40px;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
font-size: 20px;
}`;


type MessageProps = { title: string; description: string; linkText: string; onClick: () => void }

const Message = ({ title, description }: MessageProps) => (
  <ContentContainer>
    <MessageTitle>
      {title}
    </MessageTitle>
    <MessageDescription>
      {description}
    </MessageDescription>
  </ContentContainer>
);

const StoryModal = ({ isOpen, close, isSolved }: ActivateModalProps) => {
  const history = useHistory();
  return (
  <Modal isOpen={isOpen} close={close} buttonOnClick={isSolved ? () => history.push('/faoweiah') : undefined } buttonText={isSolved ? 'Back to Fa\'Owei-ah' : undefined}>
    {isSolved ? <Message title="Success!" description="The power is on! The villages thank you profusely for not blowing them up."
    linkText="Back to Fa'Owei-ah" onClick={() => history.push('/faoweiah')} /> :
    <Message title="Oh no! The village blew up." description="Luckily, the Time Shaman has agreed to rewind the universe to the moment right before you pushed the button, but just this once!! (He says that every time.)"
    linkText="Back to the power grid" onClick={close} />
  }
  </Modal>
);};

export default StoryModal;
