import styled from 'styled-components/macro';
import { BtnReset } from '../../../styles/helpers';
import {
  transition,
  wh,
  gridGap,
  flexCenter,
  hoverFocus,
} from '../../../styles/mixins';

export const BurgerInner = styled.span`
  display: grid;
  ${gridGap('6px')};

  ${wh('25px')};

  transform: translateX(${({ click }) => (click ? '-5px' : '0')});
  ${transition('transform')};
`;

export const BurgerLine = styled.span`
  border-radius: 999px;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.DARK};
  display: block;
  ${transition('opacity', 'transform')};

  &:nth-child(1) {
    transform: ${({ click }) =>
      click ? 'rotate(45deg) translate(50%, 100%)' : 'rotate(0)'};
  }

  &:nth-child(2) {
    transform: translateX(${({ click }) => (click ? '-50%' : '0')});
    opacity: ${({ click }) => (click ? '0' : '1')};
  }

  &:nth-child(3) {
    transform: ${({ click }) =>
      click ? 'rotate(-45deg) translate(50%, -100%)' : 'rotate(0)'};
  }
`;

export const Burger = styled(BtnReset)`
  ${flexCenter};

  ${wh('43px')};

  position: relative;

  ${hoverFocus``};
`;
