import React from 'react';
import styled from 'styled-components'
import Modal from 'react-modal'
import type { Solution as SolutionType } from '../../../../logic/getSolutionFromState';
import Solution from './Solution'
import exampleSolution from './Solution/example-solution-2.json';


type BluePrintModalProps = { isOpen: boolean, close: () => void }

const modalStyle = { content: { 
  backgroundColor: '#06053d', 
justifyContent: 'center',
alignItems: 'center',
display: 'flex',
},
overlay: { backgroundColor: 'rgb(6, 5, 61, 0.5)' }}

const StoryModal = ({ isOpen, close }: BluePrintModalProps) => (
  <Modal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    <Solution solution={exampleSolution as SolutionType}/>
  </Modal>
)

export default StoryModal
