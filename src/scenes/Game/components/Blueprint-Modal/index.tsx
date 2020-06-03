import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { connect } from "react-redux";
import type { Solution as SolutionType } from '../../../../logic/getSolutionFromState';
import Solution from './Solution';
import type { State } from '../../../../redux/reducers';

type BluePrintModalProps = { isOpen: boolean; close: () => void; solution: SolutionType }

const modalStyle = { content: { 
  backgroundColor: 'transparent', 
justifyContent: 'center',
border: 'none',
alignItems: 'center',
display: 'flex',
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const ContentContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

const BluePrintModal = ({ isOpen, close, solution }: BluePrintModalProps) => (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    <ContentContainer onClick={close}>
      <Solution solution={solution}/>
    </ContentContainer>
  </Modal>
);

const mapStateToProps = (state: State) => ({ 
  solution: state.level.solution, 
});


export default connect(
  mapStateToProps,
)(BluePrintModal);

