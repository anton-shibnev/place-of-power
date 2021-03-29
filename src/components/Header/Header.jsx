import * as S from './Header.styles';
import { useState } from 'react';

export const Header = ({ navList }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const id = Header.name;

  return (
    <S.Header forwardedAs='header' id={id}>
      <S.HeaderLogo to='/' />
      <S.HeaderNav list={navList} onClick={handleClick} click={click} />
      <S.HeaderBurger onClick={handleClick} click={click} />
    </S.Header>
  );
};
