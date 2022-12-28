import { useState } from 'react';
import { Container, WhoseFeed, UserIdTitle } from './feedbarStyle';

import AlbumOn from '../../assets/icons/icon-post-album-on.svg';
import AlbumOff from '../../assets/icons/icon-post-album-off.svg';
import ListOn from '../../assets/icons/icon-post-list-on.svg';
import ListOff from '../../assets/icons/icon-post-list-off.svg';

const FeedBar = ({ viewHandler, accountname }) => {
  const [click, setClick] = useState(true);
  const IconHandle = () => {
    setClick(!click);
  };

  return (
    <Container>
      <WhoseFeed>
        <UserIdTitle>@ {accountname}</UserIdTitle>
      </WhoseFeed>
      <div>
        <button
          type="button"
          onClick={() => {
            IconHandle();
            viewHandler();
          }}
        >
          <img src={click ? AlbumOff : AlbumOn} alt="앨범형으로 보기 아이콘" />
        </button>
        <button
          type="button"
          onClick={() => {
            IconHandle();
            viewHandler();
          }}
        >
          <img src={click ? ListOn : ListOff} alt="리스트형으로 보기 아이콘" />
        </button>
      </div>
    </Container>
  );
};

export default FeedBar;
