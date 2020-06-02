import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { useHistory } from 'react-router-dom';
import type { Solution as SolutionType } from '../../../../logic/getSolutionFromState';


type ActivateModalProps = { isOpen: boolean; close: () => void; isSolved: boolean }

const modalStyle = { content: { 
  backgroundColor: '#06053d', 
justifyContent: 'center',
alignItems: 'center',
display: 'flex',
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const LinkDiv = styled.div`
cursor: pointer;

&:hover {
  transform: scale(1.2);
}
`;

type MessageProps = { title: string; description: string; linkText: string; linkPath: string }

const Message = ({ title, description, linkText, linkPath }: MessageProps) => {
  const history = useHistory();
  return (
  <div style={{ display: 'flex', flexDirection: 'column'}}>
    <div style={{ fontSize: '40px' }}>
      {title}
    </div>
    <div style={{ fontSize: '20px' }}>
      {description}
    </div>
    <LinkDiv style={{ fontSize: '20px' }} onClick={() => history.push(linkPath)}>
      {linkText}
    </LinkDiv>
  </div>
);};

const StoryModal = ({ isOpen, close, isSolved }: ActivateModalProps) => (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    {isSolved ? <Message title="Success!" description="The power is on! The villages thank you profusely for your brave work."
    linkText="Back to Fa'Owei-ah" linkPath="/faoweiah" /> :
    <Message title="Oh no! The village blew up." description="Luckily, the Goddess of Time has agreed to rewind the universe to the moment right before you pushed the button."
    linkText="Back to the power grid" linkPath="/game" />
  }
  </Modal>
);

export default StoryModal;
