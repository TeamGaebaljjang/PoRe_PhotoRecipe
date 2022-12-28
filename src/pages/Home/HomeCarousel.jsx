import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  Carousel,
  Title,
  Search,
  ThumbnailWrap,
  Thumbnail,
  IconWrap,
  PageIcon,
} from './homeStyle';
import HomeCarouselPagination from './HomeCarouselPagination';
import UseInterval from './UseInterval';
import search from '../../assets/icons/icon-search-white.svg';

const HomeCarousel = () => {
  const TOTAL_SLIDES = 4;
  const [slideIndex, setSlideIndex] = useState(0);
  const [thumbnail, setThumbnail] = useState([]);
  const navigate = useNavigate();

  // API 서버
  const URL = 'https://mandarin.api.weniv.co.kr';

  // 썸네일 리스트 API
  useEffect(() => {
    const getThumbnail = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${URL}/product/PoRe_PhotoRecipe/?limit=5`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
          },
        );

        if (response) {
          setThumbnail(response.data.product);
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error.response);
      }
    };
    getThumbnail();
  }, []);

  // 캐러셀 이미지 상세 페이지 이동
  const handleDetailPost = ({ item }) => {
    navigate('/photodetail', {
      state: {
        image: `${item.author.image}`,
        username: `${item.author.username}`,
        accountname: `${item.author.accountname}`,
        itemImage: `${item.itemImage}`,
        itemName: `${item.itemName}`,
        link: `${item.link}`,
        createdAt: `${item.createdAt}`,
      },
    });
  };

  // 캐러셀 자동 슬라이드
  UseInterval(() => {
    if (slideIndex === 4) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }, 3500);

  // 버튼 클릭시 슬라이드 이동
  const nextSlide = () => {
    if (slideIndex !== TOTAL_SLIDES) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  const movePage = (index) => {
    setSlideIndex(index);
  };

  return (
    <Carousel>
      {thumbnail.map((item, index) => (
        <ThumbnailWrap
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          className={slideIndex === index ? 'active' : null}
          style={
            slideIndex === 5
              ? { transform: 'translateX(0px)' }
              : { transform: `translateX(-${slideIndex}00%)` }
          }
        >
          <Title>{item.itemName}</Title>
          <Thumbnail
            src={item.itemImage}
            alt=""
            onClick={() => handleDetailPost({ item })}
          />
        </ThumbnailWrap>
      ))}

      {slideIndex !== 0 && (
        <HomeCarouselPagination moveSlide={prevSlide} direction="prev" />
      )}
      {slideIndex !== TOTAL_SLIDES && (
        <HomeCarouselPagination moveSlide={nextSlide} direction="next" />
      )}

      <Search type="button" to="/feed/search">
        <img src={search} alt="검색" />
      </Search>

      <IconWrap>
        {Array.from({ length: 5 }).map((item, index) => (
          <PageIcon
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            onClick={() => movePage(index)}
            className={slideIndex === index ? 'icon active' : 'icon'}
          />
        ))}
      </IconWrap>
    </Carousel>
  );
};

export default HomeCarousel;
