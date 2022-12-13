import { useState } from 'react';
import thumbnail from '../../assets/img/main-thumbnail.jpeg';
import search from '../../assets/icons/icon-search-white.svg';
import * as styled from './HomeStyle';

const Home = () => {
  const place = ['서울', '경기', '강원', '제주', '부산'];
  const [btnActive, setBtnActive] = useState('');

  const handleActive = (e) => {
    setBtnActive(() => {
      return e.target.value;
    });
  };

  return (
    <styled.Wrap>
      <styled.Carousel>
        <styled.Title>
          기억에 남을 크리스마스를 위한 근사한 포토 스팟 10
        </styled.Title>
        <styled.Thumbnail src={thumbnail} alt="메인이미지1" />
        <styled.Search type="button">
          <img src={search} alt="검색" />
        </styled.Search>
      </styled.Carousel>
      <styled.SpotList>
        {place.map((spotName) => {
          return (
            <styled.Spot
              value={spotName}
              className={spotName === btnActive ? 'active' : ''}
              onClick={handleActive}
            >
              {spotName}
            </styled.Spot>
          );
        })}
      </styled.SpotList>
      <styled.FeedList>
        <styled.Feed> </styled.Feed>
        <styled.Feed> </styled.Feed>
        <styled.Feed> </styled.Feed>
        <styled.Feed> </styled.Feed>
        <styled.Feed> </styled.Feed>
        <styled.Feed> </styled.Feed>
        <styled.Feed> </styled.Feed>
        <styled.Feed> </styled.Feed>
      </styled.FeedList>
    </styled.Wrap>
  );
};

export default Home;
