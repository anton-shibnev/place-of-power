import styled from 'styled-components/macro';
import {
  absCenter,
  fixedSpread,
  flexCenter,
  font,
  gridGap,
  gridRow,
  hoverFocus,
  padding,
  rem,
  transition,
  wh,
} from '../../styles/mixins';
import { BtnReset } from '../../styles/helpers';

export const Modal = styled.div`
  ${fixedSpread};
  background-color: rgba(61, 70, 77, 0.7);
  ${flexCenter};
  ${transition('opacity')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
`;

export const Box = styled.div`
  background-color: ${({ theme }) => theme.WHITE};
  ${transition('transform', 'opacity')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? rem('-10px') : '0')});
  transition-delay: 0.2s;

  border-radius: ${rem('2px')};
`;

export const Header = styled.header`
  ${padding('30px 20px')};
  background-color: rgba(218, 227, 234, 0.3);

  display: flex;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h5`
  ${font({
    'font-size': '14px',
    'line-height': '16px',
    'font-weight': '500',
  })};
  color: #3d464d;
  text-transform: uppercase;
`;

export const Close = styled(BtnReset)`
  ${wh('16px')};
  ${transition('transform')};
  position: relative;

  &::after {
    content: '';
    ${absCenter()};
    ${wh('200%')};
  }

  ${hoverFocus`
    transform: rotate(90deg);
  `};
`;

export const CloseIcon = styled.img`
  ${wh('100%')};
`;

export const Body = styled.main`
  display: grid;
  ${gridGap('10px 20px')};
  grid-template-areas: 'icon title' 'icon desc';

  ${padding('20px')};
`;

export const Icon = styled.img`
  font-size: ${rem('22px')};
  color: #90a4ae;
  grid-area: icon;
  ${wh('32px')};
`;

export const Title = styled.h3`
  grid-area: title;

  ${font({
    'font-size': '14px',
    'line-height': '16px',
  })};

  color: #2f363c;
`;

export const Desc = styled.p`
  grid-area: desc;

  ${font({
    'font-size': '14px',
    'line-height': '16px',
  })};
  color: #7e939e;
`;

export const Footer = styled.footer`
  ${gridRow('2px')};
  justify-content: right;
  ${padding('20px')};
  border-top: ${rem('1px')} solid #dae3ea;
`;

export const Btn = styled.button``;
