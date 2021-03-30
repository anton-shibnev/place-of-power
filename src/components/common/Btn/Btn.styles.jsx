import styled from 'styled-components/macro';
import { rem, padding, hoverFocus, font } from '../../../styles/mixins';
import { BtnReset } from '../../../styles/helpers';

export const Btn = styled(BtnReset)`
  color: ${(props) => props.theme.WHITE};
  ${font({
    'font-size': '12px',
    'line-height': '14px',
    'font-weight': '500',
  })};

  display: inline-flex;

  text-align: center;

  color: #11a0f8;

  text-decoration: none;
  border: 1px solid;
  border-color: ${({ ghost }) => (ghost ? '#fff' : '#11a0f8')};
  border-radius: ${rem('2px')};

  ${padding('8px 14px')};
  position: relative;

  ${hoverFocus``};
`;
