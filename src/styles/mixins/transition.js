import { css } from 'styled-components';
import { TRANSITION } from '../config/theme';

export const transition = (...args) => {
  return css`transition : ${args
    .map((item) => `${item} ${TRANSITION}`)
    .join(', ')}`;
};
