import { mq } from './mq';

export { mq } from './mq';
export { circle } from './circle';
export { font } from './font';
export { hoverFocus } from './hoverFocus';
// export { marginX, marginTop, marginBottom, marginLeft, marginRight } from './margin';
export {
  padding,
  paddingY,
  paddingX,
  paddingTop,
  paddingBottom,
} from './padding';
export { rem } from './rem';
export { rgba } from './rgba';
export { transition } from './transition';
export { wh, maxWidth } from './wh';
export { absCenter } from './absCenter';
export { flexCenter } from './flexCenter';
export { wider } from './wider';
export { gradientText } from './gradientText';
export { gridRow } from './gridRow';

// common
export const display = (thing) => mq('display', thing);

export const gridTemplateAreas = (thing) => mq('grid-template-areas', thing);
export const justifyContent = (thing) => mq('justify-content', thing);
export const alignItems = (thing) => mq('align-items ', thing);
export const justifyItems = (thing) => mq('justify-items', thing);
export const gridGap = (thing) => mq('grid-gap', thing);
export const justifySelf = (thing) => mq('justify-self', thing);
export const gridAutoFlow = (thing) => mq('grid-auto-flow', thing);
export const gridTemplateColumns = (thing) =>
  mq('grid-template-columns', thing);

export const textAlign = (thing) => mq('text-align', thing);

export const top = (thing) => mq('top', thing);
export const bottom = (thing) => mq('bottom', thing);
export const left = (thing) => mq('left', thing);
export const right = (thing) => mq('right', thing);

export const width = (thing) => mq('width', thing);
export const height = (thing) => mq('height', thing);

export const whiteSpace = (thing) => mq('white-space', thing);

export const transform = (thing) => mq('transform', thing);
