import { useInView } from 'react-intersection-observer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { SpotTab, SpotBtn, FeedList, Feed, FeedImg } from './homeStyle';
import defaultImg from '../../assets/icons/basic-post-default.svg';

const HomeFeed = () => {
  const [btnActive, setBtnActive] = useState('');
  const [name, setName] = useState('');
  const [btnOn, setBtnOn] = useState(false);
  const navigate = useNavigate();
  const [feedPost, setFeedPost] = useState([]);
  const [numFeed, setNumFeed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();
  const [done, setDone] = useState(false);
  const URL = 'https://mandarin.api.weniv.co.kr';

  const getFeed = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      // const accountRegex = /^[0-9a-zA-Z]([_\\.]?[0-9a-zA-Z])*_pore/gim;
      const res = await axios.get(`${URL}/product/?limit=10&skip=${numFeed}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      if (res) {
        setFeedPost(feedPost.concat(res.data.product));
        setLoading(false);
        if (res.data.product.length < 10) {
          setDone(true);
        }
      }
      // console.log(res.data.product);
      // console.log(feedPost);
    } catch (error) {
      console.log(error.res);
    }
  }, [numFeed]);

  useEffect(() => {
    if (!done) {
      getFeed();
    }
  }, [getFeed]);

  useEffect(() => {
    if (inView && !loading) {
      setNumFeed((current) => current + 10);
    }
  }, [inView, loading]);

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

  const onErrorImg = (e) => {
    // eslint-disable-next-line no-param-reassign
    e.target.src = defaultImg;
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
              setBtnOn(true);
            }}
          >
            {item}
          </SpotBtn>
        ))}
      </SpotTab>

      <FeedList>
        {btnOn
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
          : feedPost.map((item, i) =>
              feedPost.length - 1 === i ? (
                <div ref={ref} />
              ) : (
                <Feed key={crypto.randomUUID()}>
                  <FeedImg
                    key={item.id}
                    src={item.itemImage}
                    alt=""
                    onClick={() => handleDetailPost({ item })}
                    onError={onErrorImg}
                  />
                </Feed>
              ),
            )}
      </FeedList>
    </>
  );
};

export default HomeFeed;
