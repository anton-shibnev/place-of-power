import * as S from './Hero.styles';

export const Hero = ({ content }) => {
  const id = Hero.name;

  return (
    <S.Hero id={id}>
      <h1>{content.title}</h1>
      <p>{content.desc}</p>
    </S.Hero>
  );
};
