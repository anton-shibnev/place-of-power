import styled from 'styled-components/macro';
import { Container, Outer, Burger } from '../';
import { display, font, gridRow, paddingY, wh } from '../../styles/mixins';
import { Nav } from '../';
import { Logo } from '../Logo/Logo';

export const Header = styled(Outer)`
  ${paddingY({ mob: '30px' })};

  ${Container} {
    display: flex;
    align-items: center;
  } ;
`;

export const HeaderNav = styled(Nav)`
  ${gridRow({ mob: '10px' })};
  margin-left: auto;
  ${display({ mob: 'none', xs: 'grid' })};

  ${font({
    'font-size': { mob: '26px' },
    'line-height': { mob: '1.2' },
    'font-weight': { mob: 'bold' },
  })}
`;

export const HeaderBurger = styled(Burger)`
  ${display({ mob: 'grid', xs: 'none' })};
  margin-left: auto;
`;

export const HeaderLogo = styled(Logo)`
  ${wh({ mob: '50px' })};
`;
