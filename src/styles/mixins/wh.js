import { mq } from '.';
import { rem } from './rem';

const _wh = (...args) => {
  let [width, height] = args;

  if (Array.isArray(width)) {
    const [w, h] = width;

    return `
      width: ${rem(w)};
      height: ${rem(h)};
    `;
  } else {
    height = height || width;

    return `
      width: ${rem(width)};
      height: ${rem(height)};
    `;
  }
};

export const wh = (thing) => mq(_wh, thing);
export const maxWidth = (thing) => mq('max-width', thing);

// export const whNth = (arr) => {
// }
