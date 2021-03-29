import styled from 'styled-components/macro';
import { Container, Outer } from '..';
import { paddingY } from '../../styles/mixins';

export const Footer = styled(Outer)`
  ${paddingY({ mob: '50px' })};

  ${Container} {
    display: flex;
  } ;
`;
