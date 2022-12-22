import axios from 'axios';
import { useEffect, useState } from 'react';
import { SpotTab, SpotBtn, FeedList, Feed, FeedImg } from './homeStyle';

const HomeFeed = () => {
  const [feedPost, setFeedPost] = useState([]);
  const [btnActive, setBtnActive] = useState('');

  // API 서버
  const URL = 'https://mandarin.api.weniv.co.kr';

  // 썸네일 리스트 API
  const getFeed = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${URL}/product/?limit=20`, {
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

  const handleActive = (e) => {
    setBtnActive(() => {
      return e.target.value;
    });
  };

  const placeFilter = [
    ...new Set(feedPost && feedPost.map((item) => item.itemName)),
  ];

  return (
    <>
      <SpotTab>
        {placeFilter.map((item) => (
          <SpotBtn
            key={item.id}
            value={item}
            className={item === btnActive ? 'active' : ''}
            onClick={handleActive}
          >
            {item}
          </SpotBtn>
        ))}
      </SpotTab>
      <FeedList>
        {feedPost.map((item) => (
          <Feed>
            <FeedImg key={item.id} src={item.itemImage} alt="" />
          </Feed>
        ))}
      </FeedList>
    </>
  );
};

export default HomeFeed;
