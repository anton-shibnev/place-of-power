import { mq } from './mq';
import { rem } from './rem';

const _wider = (val) => `
  margin-left: ${val !== 'none' ? `-${rem(val)}` : '0'};
  margin-right: ${val !== 'none' ? `-${rem(val)}` : '0'};
  width: ${val !== 'none' ? `calc(100% + (${rem(val)} * 2))` : 'auto'};
`;

export const wider = (thing) => mq(_wider, thing);

const _widerPadding = (val) => `
  padding-left: ${val !== 'none' ? `-${rem(val)}` : '0'};
  padding-right: ${val !== 'none' ? `-${rem(val)}` : '0'};
  ${_wider(val)};
`;

export const widerPadding = (thing) => mq(_widerPadding, thing);
