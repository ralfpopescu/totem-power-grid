import React from 'react';
import styled from 'styled-components';
import Modal from '../../../../shared/Modal';

const ContentContainer = styled.div`
align-items: center;
display: flex;
flex-direction: column;
`;

const Title = styled.div`
font-size: 40px;
padding: 20px;
`;

const DescriptionItem = styled.div`
margin-bottom: 12px;
`;

type ModalProps = { isOpen: boolean; close: () => void }


const StoryModal = ({ isOpen, close }: ModalProps) => (
  <Modal isOpen={isOpen} close={close} height={300}>
    <ContentContainer>
    <Title>Contact</Title>
      <DescriptionItem>INSTAGRAM: @popeska</DescriptionItem>
      </ContentContainer>
  </Modal>
);

export default StoryModal;
