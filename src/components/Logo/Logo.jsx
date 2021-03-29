import * as S from './Logo.styles';

export const Logo = ({ to }) => {
  return (
    <S.Logo to={to}>
      <S.LogoIcon
        alt='logo'
        src={require('../../static/icons/logo.svg').default}
      />
    </S.Logo>
  );
};
