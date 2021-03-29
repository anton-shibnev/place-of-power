import styled from 'styled-components/macro';
import { marginX } from '../../styles/mixins/margin';
import { maxWidth, paddingX } from '../../styles/mixins';
import {
  CONTAINER_PADDINGS,
  CONTAINER_MAX_WIDTH,
} from '../../styles/config/theme';

const containerMaxWidth = `
  ${parseInt(CONTAINER_MAX_WIDTH) + parseInt(CONTAINER_PADDINGS.mob) * 2}px
`;

export const Container = styled.div`
  ${marginX('auto')};
  ${paddingX(CONTAINER_PADDINGS)};
  width: 100%;
  ${maxWidth(containerMaxWidth)};
`;
