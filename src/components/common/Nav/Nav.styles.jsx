import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { transition, hoverFocus } from '../../../styles/mixins';

export const Nav = styled.nav`
  position: relative;
`;

export const Item = styled(NavLink)`
  color: ${({ theme }) => theme.DARK};
  text-decoration: none;
  ${transition('color')};

  cursor: pointer;

  ${hoverFocus`
    color: ${({ theme }) => theme.SECONDARY};
  `}

  &.active {
    color: ${({ theme }) => theme.SECONDARY};
  }
`;
