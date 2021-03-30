import React from 'react';
import * as S from './Btn.styles';

export const Btn = ({
  target,
  children,
  as = 'button',
  className,
  href,
  onClick,
  ghost,
}) => {
  return (
    <S.Btn
      target={target}
      as={as}
      className={className}
      href={href}
      onClick={onClick}
      ghost={ghost}
    >
      {children}
    </S.Btn>
  );
};
