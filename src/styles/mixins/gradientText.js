import { css } from 'styled-components';

export const gradientText = (gradient) =>  {
  return css`
    background-image: ${gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  `
}
