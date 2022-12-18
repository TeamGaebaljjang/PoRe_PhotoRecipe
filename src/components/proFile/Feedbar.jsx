import { useState } from 'react';
import { Container, WhoseFeed } from './feedBarStyle';

import AlbumOn from '../../assets/icons/icon-post-album-on.svg';
import AlbumOff from '../../assets/icons/icon-post-album-off.svg';
import ListOn from '../../assets/icons/icon-post-list-on.svg';
import ListOff from '../../assets/icons/icon-post-list-off.svg';

const FeedBar = () => {
  const [click, setClick] = useState(true);
  const IconHandle = () => {
    setClick(!click);
  };

  return (
    <Container>
      <WhoseFeed>내 피드</WhoseFeed>
      <div>
        <button type="button" onClick={IconHandle}>
          <img src={click ? AlbumOn : AlbumOff} alt="앨범형으로 보기 아이콘" />
        </button>
        <button type="button" onClick={IconHandle}>
          <img src={click ? ListOff : ListOn} alt="리스트형으로 보기 아이콘" />
        </button>
      </div>
    </Container>
  );
};

export default FeedBar;
