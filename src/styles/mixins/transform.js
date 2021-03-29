import { mq } from './mq';
import { rem } from './rem';

const _transformTranslateX = (n) => `
  transform: translateX(${rem(n)});
`;

export const transformTranslateX = (thing) => mq(_transformTranslateX, thing);

const _transformTranslateY = (n) => `
  transform: translateY(${rem(n)});
`;

export const transformTranslateY = (thing) => mq(_transformTranslateY, thing);
