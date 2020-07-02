import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';

type ModalProps = { isOpen: boolean; close: () => void; height?: number; width?: number; children: any }


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
background-color: #33bbff;
height: ${props => props.height || 600}px;
width: ${props => props.width ? `${props.width}px` : 'auto'};
display: flex;
flex-direction: column;
border-radius: 40px;
border: none;
`;

const CloseButton = styled.button`
outline: none;
font-family: 'Chelsea Market';
padding: 16px;
width: 200px;
border: none;
color: ${props => props.theme.ocean.primary};
border-radius: 12px;
cursor: pointer;
align-self: center;
margin-bottom: 32px;
justify-self: bottom;

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

const Modal = ({ isOpen, close, height, width, children }: ModalProps) => (
  <ReactModal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    <CoverDiv onClick={close}>
      <ModalContainer onClick={e => e.stopPropagation()} height={height} width={width}>
        <div style={{ flexGrow: 1, display: 'flex' }}>
          {children}
        </div>
        <CloseButton onClick={close}>Close</CloseButton>
      </ModalContainer>
    </CoverDiv>
  </ReactModal>
);

export default Modal;
