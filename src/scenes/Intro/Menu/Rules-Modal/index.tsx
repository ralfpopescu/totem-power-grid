import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Route, useHistory } from 'react-router-dom';
import Objective from './Objective';
import Totems from './Totems';
import Interactions from './Interactions';


type ModalProps = { isOpen: boolean; close: () => void }

const modalStyle = { content: { 
  backgroundColor: '#06053d', 
top: '200px',
left: '200px',
right: '200px',
bottom: '200px',
display: 'flex',
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const ModalContainer = styled.div`
display: grid;
grid-template-rows: 80px 1fr;
height: 100%;
width: 100%;
`;

const TabsContainer = styled.div`
grid-row-start: 1;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
flex-grow: 1;
`;

const Tab = styled.div`
font-size: 30px;
cursor: pointer;

&:hover {
  opacity: 0.7;
}
`;

const RulesModal = ({ isOpen, close }: ModalProps) => {
  const history = useHistory();
  return (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    <ModalContainer>
      <TabsContainer>
        <Tab style={{ marginRight: '30px'}} onClick={() => history.push('/faoweiah/rules/objective')}>
          Objective
        </Tab>
        <Tab style={{ marginRight: '30px'}} onClick={() => history.push('/faoweiah/rules/totems')}>
          Totems
        </Tab>
        <Tab onClick={() => history.push('/faoweiah/rules/interactions')}>
          Interactions
        </Tab>
        </TabsContainer>
      <Route path="/faoweiah/rules/objective">
        <Objective />
      </Route>
      <Route path="/faoweiah/rules/totems">
        <Totems />
      </Route>
      <Route path="/faoweiah/rules/interactions">
        <Interactions />
      </Route>
    </ModalContainer>
  </Modal>
);};

export default RulesModal;
