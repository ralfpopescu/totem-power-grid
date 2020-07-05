import styled from 'styled-components';

const Hide = styled.div`
display: flex;
@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  display: none;
}
`;

const Show = styled.div`
display: none;
@media only screen and (max-width: ${props => props.theme.media.mobile}px) {
  display: flex;
}`;

const Mobile = { Hide, Show };

export default Mobile;