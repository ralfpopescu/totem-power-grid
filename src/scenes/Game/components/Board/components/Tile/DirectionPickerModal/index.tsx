import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import { connect } from "react-redux";
import Arrow from '../icons/arrow';
import type { Direction, TotemType } from '../../../../../../../redux/reducers';
import { addTotem } from "../../../../../../../redux/actions";
import type { AddTotem } from "../../../../../../../redux/actions";

type ModalProps = { isOpen: boolean; close: () => void; addTotem: AddTotem; totemType: TotemType; index: number; boardScale: number }

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

type ModalContainerProps = { height?: number; width?: number }

const ModalContainer = styled.div<ModalContainerProps>`
padding: 40px;
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
border-radius: 40px;
border: none;
justify-content: center;
align-items: center;
`;

const TileContainer = styled.div`
font-size: 8px;
display: inline-grid;
grid-template-columns: 1fr 5fr 1fr;
grid-template-rows: 1fr 5fr 1fr;

@keyframes tile-entry {
  0% {
    opacity: 0;
    {transform: scale(1.5);}
  }
  100% {
    opacity: 1;
    {transform: scale(1);}
  }
`;

const RightZone = styled.div`
  display: flex;
  grid-column-start: 3;
  grid-row-start: 2;
  align-self: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
cursor: pointer;


  &:hover {
    fill: lightgrey;
  }
`;

const LeftZone = styled.div`
  display: flex;
  grid-column-start: 1;
  grid-row-start: 2;
  align-self: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
cursor: pointer;


  &:hover {
    fill: lightgrey;
  }
`;

const TopZone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column-start: 2;
  grid-row-start: 1;
  align-self: center;
  width: 100%;
  height: 100%;
cursor: pointer;


  &:hover {
    fill: lightgrey;
  }
`;

const BottomZone = styled.div`
  display: flex;
  grid-column-start: 2;
  grid-row-start: 3;
  align-self: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
cursor: pointer;


  &:hover {
    fill: lightgrey;
  }
`;

const MessageContainer = styled.div`
font-size: 20px;
margin-top: 80px;
`;

const arrowStyle = (boardScale: number) => ({ width: `${boardScale}px`, height: `${boardScale}px`, fill: 'white', zIndex: 1 });

const Modal = ({ isOpen, close, addTotem, totemType, index, boardScale }: ModalProps) => (
  <ReactModal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
      <ModalContainer onClick={e => e.stopPropagation()}>
      <TileContainer >
    <RightZone>
    <Arrow style={{ ...arrowStyle(boardScale), transform: 'rotate(180deg)'}} 
      onClick={() => {
        addTotem({ totemType, index, startingDirection: 'EAST' as Direction });
        close();
        } }/>
    </RightZone >
    <LeftZone>
    <Arrow style={{ ...arrowStyle(boardScale) }} 
    onClick={() => {
      addTotem({ totemType, index, startingDirection: 'WEST' as Direction });
      close();
      } }/>
      </LeftZone>
    <TopZone>
    <Arrow style={{ ...arrowStyle(boardScale), transform: 'rotate(90deg)' }}
    onClick={() => {
      addTotem({ totemType, index, startingDirection: 'NORTH' as Direction });
      close();
      } }/>
    </TopZone>
    <BottomZone>
    <Arrow style={{ ...arrowStyle(boardScale), transform: 'rotate(270deg)' }}
   onClick={() => {
    addTotem({ totemType, index, startingDirection: 'SOUTH' as Direction });
    close();
    } }/>
    </BottomZone>
  </TileContainer>
  <MessageContainer>
    Pick a direction for your totem.
  </MessageContainer>
      </ModalContainer>
  </ReactModal>
);

export default connect(
  null,
  { addTotem },
)(Modal);
