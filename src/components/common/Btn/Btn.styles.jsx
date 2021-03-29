import styled from 'styled-components/macro';
import { padding, transition, hoverFocus, font, rem } from '../../style/modal';
import { BtnReset } from '../../style/helpers';

export const Btn = styled(BtnReset)`
  color: ${(props) => props.theme.WHITE};
  ${font({
    'font-size': { mob: '14px', xs: '16px' },
    'line-height': { mob: '16px', xs: '19px' },
    'font-weight': 'bold',
  })};

  display: inline-flex;

  text-decoration: none;
  background-color: ${(props) => props.theme.SECONDARY_DARKER};
  text-transform: uppercase;

  position: relative;
`;

export const BtnBody = styled.span`
  ${padding({ mob: '16px 20px 14px', xs: '16px 17px' })};

  ${transition('transform')};
  background-color: ${(props) => props.theme.SECONDARY};
  transform: translateY(${rem('-2px')});
  width: 100%;

  ${hoverFocus``};
`;
