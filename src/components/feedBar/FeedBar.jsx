import styled from 'styled-components';
// import { useState } from 'react';
import AlbumOn from '../../assets/icons/icon-post-album-on.svg';
// import AlbumOff from '../../assets/icons/icon-post-album-off.svg';
// import ListOn from '../../assets/icons/icon-post-list-on.svg';
import ListOff from '../../assets/icons/icon-post-list-off.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 0px 24px;

  div {
    display: flex;
  }
  button {
    width: 26px;
    height: 26px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
  }
`;

const WhoseFeed = styled.p`
  margin-left: 38px;
  font-size: 22px;
  font-weight: 500;
`;

// const [btn, setBtn] = useState(true);

const FeedBar = () => {
  return (
    <Container>
      <WhoseFeed>내 피드</WhoseFeed>
      <div>
        <button
          //   onClick={() => {
          //     setBtn(!btn);
          //   }}
          style={{ marginRight: '12px' }}
          type="button"
        >
          <img src={AlbumOn} alt="앨범형으로 보기 아이콘" />
        </button>
        <button
          //   onClick={() => {
          //     setBtn(!btn);
          //   }}
          style={{ marginRight: '32px' }}
          type="button"
        >
          <img src={ListOff} alt="리스트형으로 보기 아이콘" />
        </button>
      </div>
    </Container>
  );
};

export default FeedBar;
