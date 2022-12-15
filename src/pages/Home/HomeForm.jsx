import { useState } from 'react';
import thumbnail from '../../assets/img/main-thumbnail.jpeg';
import search from '../../assets/icons/icon-search-white.svg';
import {
  Wrap,
  Carousel,
  Title,
  Thumbnail,
  Search,
  SpotList,
  SpotBtn,
  FeedList,
  Feed,
} from './homeStyle';
import NavBar from '../../components/navBar/NavBar';

const HomeForm = () => {
  const place = ['서울', '경기', '강원', '제주', '부산'];
  const [btnActive, setBtnActive] = useState('');

  const handleActive = (e) => {
    setBtnActive(() => {
      return e.target.value;
    });
  };

  return (
    <Wrap>
      <Carousel>
        <Title>기억에 남을 크리스마스를 위한 근사한 포토 스팟 10</Title>
        <Thumbnail src={thumbnail} alt="메인이미지1" />
        <Search type="button">
          <img src={search} alt="검색" />
        </Search>
      </Carousel>
      <SpotList>
        {place.map((spotName) => {
          return (
            <SpotBtn
              value={spotName}
              className={spotName === btnActive ? 'active' : ''}
              onClick={handleActive}
            >
              {spotName}
            </SpotBtn>
          );
        })}
      </SpotList>
      <FeedList>
        <Feed> </Feed>
        <Feed> </Feed>
        <Feed> </Feed>
        <Feed> </Feed>
        <Feed> </Feed>
        <Feed> </Feed>
        <Feed> </Feed>
        <Feed> </Feed>
      </FeedList>
      <NavBar />
    </Wrap>
  );
};

export default HomeForm;
