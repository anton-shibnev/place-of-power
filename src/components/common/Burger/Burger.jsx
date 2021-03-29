import * as S from './Burger.styles';

export const Burger = ({ className, onClick, click }) => {
  return (
    <S.Burger className={className} onClick={onClick} click={click}>
      <S.BurgerInner click={click}>
        {[...Array(3)].map((_, index) => (
          <S.BurgerLine click={click} key={index} />
        ))}
      </S.BurgerInner>
    </S.Burger>
  );
};
