import React from 'react';

export const Main = ({ children }) => {
  const id = Main.name;

  return <main id={id}>{children}</main>;
};
