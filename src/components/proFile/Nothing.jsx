import * as styled from './nothingStyle';
import Icon from '../../assets/icons/icon-nothing.svg';

const Nothing = () => {
  return (
    <styled.Container>
      <styled.Icon>
        <img src={Icon} alt="등록된 게시물이 없음을 표시하는 아이콘" />
        <p>등록된 게시물이 없어요.</p>
      </styled.Icon>
    </styled.Container>
  );
};

export default Nothing;
