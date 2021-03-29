import { BREAKPOINTS } from '../config/theme';
import { rem } from '.';

const _mqInner = (...args) => {
  const [func, thing, styleKey] = args;
  let str = ``;

  const checkKey = (key, val) => {
    return key ? func(key, val) : func(val);
  };

  if (typeof thing === 'object') {
    for (const key in thing) {
      let styleValue = thing[key];
      let breakPointsValue = BREAKPOINTS[key];
      let firstKey = Object.keys(BREAKPOINTS)[0];

      if (!key) continue;

      if (key === firstKey) {
        str += checkKey(styleKey, styleValue);
      } else {
        str += `@media only screen and (min-width: ${breakPointsValue}) {
          ${checkKey(styleKey, styleValue)};
        };`;
      }
    }
  } else {
    str += checkKey(styleKey, thing);
  }

  return str;
};

export const mq = (...args) => {
  const [styleKey, thingArg] = args;

  const styleInit = (...args) => {
    const [styleKey, styleValue] = args;

    return `${styleKey}: ${rem(styleValue)};`;
  };

  return typeof styleKey === 'function'
    ? _mqInner(styleKey, thingArg)
    : _mqInner(styleInit, thingArg, styleKey);
};
