import { Container, Icon } from './nothingStyle';
import icon from '../../assets/icons/icon-nothing.svg';

const Nothing = () => {
  return (
    <Container>
      <Icon>
        <img src={icon} alt="등록된 게시물이 없음을 표시하는 아이콘" />
        <p>등록된 게시물이 없어요.</p>
      </Icon>
    </Container>
  );
};

export default Nothing;
