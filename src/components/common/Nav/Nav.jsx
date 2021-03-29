import * as S from './Nav.styles';

export const Nav = ({ className, onClick, autoFlow, list }) => (
  <S.Nav className={className}>
    {list.map((item, index) => (
      <S.Item
        key={index}
        className={index || 'active'}
        exact={item.exact}
        to={item.path}
        onClick={onClick}
      >
        {item.label}
      </S.Item>
    ))}
  </S.Nav>
);
