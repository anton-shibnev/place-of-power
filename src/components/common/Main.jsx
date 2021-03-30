import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../../styles/mixins';

const SMain = styled.main`
  ${flexCenter};
  min-height: 100vh;
`;

export const Main = ({ children }) => {
  const id = Main.name;

  return <SMain id={id}>{children}</SMain>;
};
