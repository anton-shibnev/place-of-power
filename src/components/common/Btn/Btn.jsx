import React from 'react';
import * as S from './Btn.styles';

export const Btn = ({ target, children, as = 'button', className, href }) => {
  return (
    <S.Btn target={target} as={as} className={className} href={href}>
      <S.BtnBody>{children}</S.BtnBody>
    </S.Btn>
  );
};
