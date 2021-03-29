import { rem, mq } from '.';

const _paddingY = (...args) => {
  const top = args[0];
  const bottom = args[1] || top;

  return `
    padding-top: ${rem(top)};
    padding-bottom: ${rem(bottom)};
  `;
};

export const paddingY = (thing) => mq(_paddingY, thing);

const _paddingX = (...args) => {
  const left = args[0];
  const right = args[1] || left;

  return `
    padding-left: ${rem(left)};
    padding-right: ${rem(right)};
  `;
};

export const paddingX = (thing) => mq(_paddingX, thing);

export const padding = (thing) => mq('padding', thing);
export const paddingTop = (thing) => mq('padding-top', thing);
export const paddingBottom = (thing) => mq('padding-bottom', thing);
