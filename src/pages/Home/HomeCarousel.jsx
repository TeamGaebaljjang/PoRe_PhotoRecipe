import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {
  Carousel,
  Title,
  Search,
  ThumbnailWrap,
  Thumbnail,
  MoveBtn,
} from './homeStyle';
import search from '../../assets/icons/icon-search-white.svg';

const HomeCarousel = () => {
  const TOTAL_SLIDES = 4;
  const slideRef = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [thumbnail, setThumbnail] = useState([]);
  const navigate = useNavigate();

  // API 서버
  const URL = 'https://mandarin.api.weniv.co.kr';

  // 썸네일 리스트 API
  const getThumbnail = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `${URL}/product/PoRe_PhotoRecipe/?limit=4`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
        },
      );

      if (response) {
        console.log(response.data);
        setThumbnail(response.data.product);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getThumbnail();
  }, []);

  // 캐러셀
  const handleLeft = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleRight = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
      console.log(currentSlide);
    }
  };

  useEffect(() => {
    console.log(slideRef.current);
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

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

  const test = () => {
    console.log('마우스올림');
  };

  return (
    <Carousel ref={slideRef}>
      {thumbnail.map((item) => (
        <ThumbnailWrap key={item.id}>
          <Title>{item.itemName}</Title>
          <Thumbnail
            src={item.itemImage}
            alt="thumbnail"
            onMouseOver={() => test()}
            onClick={() => handleDetailPost({ item })}
          />
        </ThumbnailWrap>
      ))}
      <MoveBtn className="left" type="button" onClick={() => handleLeft()} />
      <MoveBtn className="right" type="button" onClick={() => handleRight()} />
      <Search type="button" to="/feed/search">
        <img src={search} alt="검색" />
      </Search>
    </Carousel>
  );
};

export default HomeCarousel;
