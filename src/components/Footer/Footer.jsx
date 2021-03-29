import * as S from './Footer.styles';

export const Footer = ({ content }) => {
  const id = Footer.name;

  return (
    <S.Footer forwardedAs='footer' id={id}>
      <h2>{content.title}</h2>
    </S.Footer>
  );
};
