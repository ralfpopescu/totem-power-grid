import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  display: flex;
  flex-direction: column;
}
`;

const Text = styled.div`
display: flex;
flex-direction: column;
flex-grow: 1;
padding: 36px;

@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  display: flex;
  flex-direction: column;
}
`;

const Page = { Container, Text };

export default Page;