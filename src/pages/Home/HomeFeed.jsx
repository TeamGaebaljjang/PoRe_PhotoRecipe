import axios from 'axios';
import { useEffect, useState } from 'react';
import { SpotTab, SpotBtn, FeedList, Feed, FeedImg } from './homeStyle';

const HomeFeed = () => {
  const [feedPost, setFeedPost] = useState([]);
  const [btnActive, setBtnActive] = useState('');
  const [place, setPlace] = useState([]);
  // const place = ['서울', '경기', '강원', '제주', '부산'];

  // API 서버
  const URL = 'https://mandarin.api.weniv.co.kr';

  // 썸네일 리스트 API
  const getFeed = async () => {
    try {
      // const accountname = localStorage.getItem('accountname');
      const token = localStorage.getItem('token');
      const response = await axios.get(`${URL}/product/?limit=20`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      if (response) {
        console.log(response.data);
        setPlace(response.data.product);
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

  return (
    <>
      <SpotTab>
        {place.map((item) => (
          <SpotBtn
            key={item.id}
            value={item.itemName}
            className={item.itemName === btnActive ? 'active' : ''}
            onClick={handleActive}
          >
            {item.itemName}
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
