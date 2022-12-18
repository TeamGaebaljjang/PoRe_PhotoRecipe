import { Carousel, Title, Search, Thumbnail } from './homeStyle';
import thumbnail from '../../assets/img/main-thumbnail.jpeg';
import search from '../../assets/icons/icon-search-white.svg';

const HomeCarousel = () => {
  return (
    <Carousel>
      <Title>기억에 남을 크리스마스를 위한 근사한 포토 스팟 10</Title>
      <Search type="button">
        <img src={search} alt="검색" />
      </Search>
      <Thumbnail src={thumbnail} alt="메인이미지1" />
    </Carousel>
  );
};

export default HomeCarousel;
