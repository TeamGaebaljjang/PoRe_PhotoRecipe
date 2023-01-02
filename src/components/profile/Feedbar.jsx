/* eslint-disable no-nested-ternary */
import { useContext, useState } from 'react';
import { Container, WhoseFeed, UserIdTitle, BtnWrap } from './feedbarStyle';
import { ThemeContext } from '../../store/ThemeProvider';

import AlbumOn from '../../assets/icons/icon-post-album-on.svg';
import AlbumOff from '../../assets/icons/icon-post-album-off.svg';
import AlbumOnDark from '../../assets/icons/icon-post-album-on-dark.svg';

import ListOn from '../../assets/icons/icon-post-list-on.svg';
import ListOff from '../../assets/icons/icon-post-list-off.svg';
import ListOnDark from '../../assets/icons/icon-post-list-on-dark.svg';

const FeedBar = ({ viewHandler, accountname }) => {
  const [click, setClick] = useState(true);
  const IconHandle = () => {
    setClick(!click);
  };
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <Container>
      <WhoseFeed>
        @ <UserIdTitle>{accountname}</UserIdTitle>
      </WhoseFeed>
      <BtnWrap>
        <button
          type="button"
          onClick={() => {
            IconHandle();
            viewHandler();
          }}
        >
          <img
            src={click ? AlbumOff : isDarkMode ? AlbumOnDark : AlbumOn}
            alt="앨범형으로 보기 아이콘"
          />
        </button>
        <button
          type="button"
          onClick={() => {
            IconHandle();
            viewHandler();
          }}
        >
          <img
            src={click ? (isDarkMode ? ListOnDark : ListOn) : ListOff}
            alt="리스트형으로 보기 아이콘"
          />
        </button>
      </BtnWrap>
    </Container>
  );
};

export default FeedBar;
