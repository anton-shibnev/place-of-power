import { mq } from './';
import { rem } from './rem';

const _marginY = (...args) => {
  const top = args[0];
  const bottom = args[1] || top;

  return `
    margin-top: ${rem(top)};
    margin-bottom: ${rem(bottom)};
  `
}

export const marginY = (thing) => mq(_marginY, thing);

const _marginX = (...args) => {
  const left = args[0] || 'auto';
  const right = args[1] || left;

  return `
    margin-left: ${rem(left)};
    margin-right: ${rem(right)};
  `
}

export const marginX = (thing) => mq(_marginX, thing);

export const margin = (thing) => mq('margin', thing);
export const marginTop = (thing) => mq('margin-top', thing);
export const marginBottom = (thing) => mq('margin-bottom', thing);
export const marginLeft = (thing) => mq('margin-left', thing);
export const marginRight = (thing) => mq('margin-right', thing);
