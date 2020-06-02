import React from 'react';
import Modal from 'react-modal';
import { connect } from "react-redux";
import type { Solution as SolutionType } from '../../../../logic/getSolutionFromState';
import Solution from './Solution';
import type { State } from '../../../../redux/reducers';

type BluePrintModalProps = { isOpen: boolean; close: () => void; solution: SolutionType }

const modalStyle = { content: { 
  backgroundColor: '#06053d', 
justifyContent: 'center',
alignItems: 'center',
display: 'flex',
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }};

const BluePrintModal = ({ isOpen, close, solution }: BluePrintModalProps) => (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    <Solution solution={solution}/>
  </Modal>
);

const mapStateToProps = (state: State) => ({ 
  solution: state.level.solution, 
});


export default connect(
  mapStateToProps,
)(BluePrintModal);

