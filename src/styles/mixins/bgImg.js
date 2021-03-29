import { css } from 'styled-components';
import { BREAKPOINTS } from '../config/theme';

export const bgImg = (thing) => {
  let str = ``;
  const init = (path) => `
    background-image: url(${require(`../../static/images/${path}`).default});
  `;

  if (typeof thing === 'object') {
    for (const key in thing) {
      let styleValue = thing[key];
      let breakPointsValue = BREAKPOINTS[key];
      let firstKey = Object.keys(BREAKPOINTS)[0];

      if (!key) continue;

      if (key === firstKey) {
        str += init(styleValue);
      } else {
        str += `@media only screen and (min-width: ${breakPointsValue}) {
          ${init(styleValue)};
        }`;
      }
    }
  } else {
    str += init(thing);
  }

  return css`${str}`
}
