import { css } from 'styled-components';
import { gridGap } from '.';

export const gridRow = (thing) => {
  return css`
    display: grid;
    grid-auto-flow: column;
    ${gridGap(thing)};
  `;
};
