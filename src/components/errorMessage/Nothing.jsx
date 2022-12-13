import styled from 'styled-components';
import Icon from '../../assets/icons/icon-nothing.svg';

const Container = styled.div`
  margin: 40px auto 0px;
  width: 350px;
  border-top: 1px var(--light-gray) solid;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 220px auto 190px;
  }
  img {
    width: 140px;
    height: 140px;
  }
  p {
    font-size: 14px;
    color: var(--super-gray);
  }
`;

const Nothing = () => {
  return (
    <Container>
      <div>
        <img src={Icon} alt="등록된 게시글이 없음" />
        <p>등록된 게시물이 없어요.</p>
      </div>
    </Container>
  );
};

export default Nothing;
