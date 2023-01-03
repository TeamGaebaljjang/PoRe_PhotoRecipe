import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SpotTab, SpotBtn, FeedList, Feed, FeedImg } from './homeStyle';
import defaultImg from '../../assets/icons/basic-post-default.svg';

const HomeFeed = () => {
  const navigate = useNavigate();
  const [btnActive, setBtnActive] = useState('');
  const [name, setName] = useState('');
  const [btnOn, setBtnOn] = useState(false);
  const [btnAll, setBtnAll] = useState(true);
  const [feedPost, setFeedPost] = useState([]);
  const URL = 'https://mandarin.api.weniv.co.kr';

  useEffect(() => {
    const getFeed = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(
          `${URL}/product/PoRe_Home/?limit=infinite`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-type': 'application/json',
            },
          },
        );
        if (res) {
          setFeedPost(feedPost.concat(res.data.product));
        }
      } catch (error) {
        console.log(error.res);
      }
    };
    getFeed();
  }, []);

  // 포토존 이미지 클릭시 상세 페이지로 이동
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

  // 지역명 중복 체크
  const placeFilter = [
    ...new Set(feedPost && feedPost.map((item) => item.itemName)),
  ];

  // 지역 버튼 클릭시 해당 게시글 렌더링
  const handlePlace = (e) => {
    setBtnActive(() => {
      return e.target.value;
    });
  };

  const onErrorImg = (e) => {
    // eslint-disable-next-line no-param-reassign
    e.target.src = defaultImg;
  };

  return (
    <>
      <SpotTab>
        <SpotBtn
          className={btnAll ? 'active' : ''}
          onClick={() => {
            setBtnAll(true);
            setBtnActive('');
          }}
        >
          전체
        </SpotBtn>
        {placeFilter.map((item) => (
          <SpotBtn
            key={crypto.randomUUID()}
            value={item}
            className={item === btnActive ? 'active' : ''}
            onClick={(e) => {
              setName(item);
              setBtnAll(false);
              handlePlace(e);
              setBtnOn(true);
            }}
          >
            {item}
          </SpotBtn>
        ))}
      </SpotTab>

      <FeedList>
        {btnOn && !btnAll
          ? feedPost
              .filter((item) => item.itemName === name)
              .map((item) => (
                <Feed key={crypto.randomUUID()}>
                  <FeedImg
                    src={item.itemImage}
                    alt=""
                    onClick={() => handleDetailPost({ item })}
                    onError={onErrorImg}
                  />
                </Feed>
              ))
          : feedPost.map((item) => (
              <Feed key={crypto.randomUUID()}>
                <FeedImg
                  key={item.id}
                  src={item.itemImage}
                  alt=""
                  onClick={() => handleDetailPost({ item })}
                  onError={onErrorImg}
                />
              </Feed>
            ))}
      </FeedList>
    </>
  );
};

export default HomeFeed;
