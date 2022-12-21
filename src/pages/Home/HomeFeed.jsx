import axios from 'axios';
import { useEffect, useState } from 'react';
import { FeedList, Feed, FeedImg } from './homeStyle';

const HomeFeed = () => {
  const [feedPost, setFeedPost] = useState([]);

  // API 서버
  const URL = 'https://mandarin.api.weniv.co.kr';

  // 썸네일 리스트 API
  const getFeed = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${URL}/product/PoRe_PhotoRecipe`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      if (response) {
        console.log(response.data);
        setFeedPost(response.data.product);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <FeedList>
      {feedPost.map((item) => (
        <Feed>
          <FeedImg key={item.id} src={item.itemImage} alt="" />
        </Feed>
      ))}
    </FeedList>
  );
};

export default HomeFeed;
