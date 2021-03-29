import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import { wh } from '../../styles/mixins';

export const Logo = styled(NavLink)`
  ${wh({ mob: '50px' })};
`;

export const LogoIcon = styled.img`
  ${wh('100%')};
`;
