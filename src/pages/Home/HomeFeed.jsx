import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SpotTab, SpotBtn, FeedList, Feed, FeedImg } from './homeStyle';

const HomeFeed = () => {
  const [feedPost, setFeedPost] = useState([]);
  const [btnActive, setBtnActive] = useState('');
  const [name, setName] = useState('');
  const [btnOn, setBtnOn] = useState(true);
  const navigate = useNavigate();

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

  // 포토존 이미지 클릭시 상세 페이지로 이동
  const handleDetailPost = ({ item }) => {
    console.log(item);
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

  // 지역명 중복 체크
  const placeFilter = [
    ...new Set(feedPost && feedPost.map((item) => item.itemName)),
  ];

  // 지역 버튼 클릭시 해당 게시글 렌더링
  const handlePlace = (e, { item }) => {
    console.log(item);
    setBtnActive(() => {
      return e.target.value;
    });
  };

  return (
    <>
      <SpotTab>
        {placeFilter.map((item) => (
          <SpotBtn
            key={crypto.randomUUID()}
            value={item}
            className={item === btnActive ? 'active' : ''}
            onClick={(e) => {
              setName(item);
              handlePlace(e, { item });
              setBtnOn(false);
            }}
          >
            {item}
          </SpotBtn>
        ))}
      </SpotTab>

      <FeedList>
        {btnOn
          ? feedPost.map((item) => (
              <Feed key={crypto.randomUUID()}>
                <FeedImg
                  key={item.id}
                  src={item.itemImage}
                  alt=""
                  onClick={() => handleDetailPost({ item })}
                />
              </Feed>
            ))
          : feedPost
              .filter((item) => item.itemName === name)
              .map((item) => (
                <Feed key={crypto.randomUUID()}>
                  <FeedImg
                    src={item.itemImage}
                    alt=""
                    onClick={() => handleDetailPost({ item })}
                  />
                </Feed>
              ))}
      </FeedList>
    </>
  );
};

export default HomeFeed;
