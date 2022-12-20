import axios from 'axios';
import { useState, useEffect } from 'react';
import { Carousel, Title, Search, ThumbnailWrap, Thumbnail } from './homeStyle';
import search from '../../assets/icons/icon-search-white.svg';

const HomeCarousel = () => {
  const [thumbnail, setThumbnail] = useState([]);

  // API 서버
  const URL = 'https://mandarin.api.weniv.co.kr';

  // 썸네일 리스트 API
  const getThumbnail = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        `${URL}/product/PoRe_PhotoRecipe/?limit=1&skip=1`,
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

  return (
    <Carousel>
      {thumbnail.map((item) => (
        <Title key={item.id}>{item.itemName}</Title>
      ))}
      <Search type="button" to="/feed/search">
        <img src={search} alt="검색" />
      </Search>
      <ThumbnailWrap>
        {thumbnail.map((item) => (
          <Thumbnail key={item.id} src={item.itemImage} alt="" />
        ))}
      </ThumbnailWrap>
    </Carousel>
  );
};

export default HomeCarousel;
