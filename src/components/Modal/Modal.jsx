import * as S from './Modal.styles';
import InfoSvg from '../../static/icons/info.svg';
import CloseSvg from '../../static/icons/close.svg';
import { Btn } from '../';

export const Modal = ({ content, show, onClose }) => {
  return (
    <S.Modal show={show} onClick={onClose}>
      <S.Box show={show} onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.HeaderTitle>{content.headerTitle}</S.HeaderTitle>
          <S.Close onClick={onClose}>
            <S.CloseIcon src={CloseSvg} />
          </S.Close>
        </S.Header>
        <S.Body>
          <S.Icon src={InfoSvg} />
          <S.Title>{content.title}</S.Title>
          <S.Desc>{content.desc}</S.Desc>
        </S.Body>
        <S.Footer>
          <Btn ghost>{content.btnNo.label}</Btn>
          <Btn>{content.btnYes.label}</Btn>
        </S.Footer>
      </S.Box>
    </S.Modal>
  );
};
