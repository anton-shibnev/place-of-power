import { css } from 'styled-components';
import { wh } from './wh';

export const fixedSpread = () => css`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  ${wh('100%')};
`;
