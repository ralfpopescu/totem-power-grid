import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import Mobile from '../Mobile';
import { ReactComponent as Close } from '../../assets/close.svg';

type ModalProps = { isOpen: boolean; close: () => void; height?: number; width?: number; children: any; 
  buttonText?: string; buttonOnClick?: () => void; }

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
align-items: center;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  width: ${props => props.theme.media.mobile/2}px;
  max-width: ${props => props.theme.media.mobile/2}px;
}
`;

const CloseButton = styled.button`
padding: 12px;
width: 200px;
border-radius: 12px;
font-family: 'Chelsea Market';
border: none;
background-color: white;
color: ${props => props.theme.ocean.primary}
`;

const MobileCloseButton = styled.div`
width: 20px;
height: 20px;
cursor: pointer;
fill: white;
`;

const MobileButtonContainer = styled.div`
display: none;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
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

const Modal = ({ isOpen, close, height, width, children, buttonText, buttonOnClick }: ModalProps) => (
  <ReactModal isOpen={isOpen} onRequestClose={close} style={modalStyle}>
    <CoverDiv onClick={close}>
      <ModalContainer onClick={e => e.stopPropagation()} height={height} width={width}>
        <MobileButtonContainer>
          <MobileCloseButton onClick={close}>
            <Close />
          </MobileCloseButton>
        </MobileButtonContainer>
        <div style={{ flexGrow: 1, display: 'flex' }}>
          {children}
        </div>
        <Mobile.Hide>
          <CloseButton onClick={buttonOnClick || close}>{buttonText || 'Close'}</CloseButton>
        </Mobile.Hide>
      </ModalContainer>
    </CoverDiv>
  </ReactModal>
);

export default Modal;
