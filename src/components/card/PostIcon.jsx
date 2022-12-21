import { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon, IconImg, IconCount } from './postStyle';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import chat from '../../assets/icons/icon-chat.svg';

const PostIcon = ({ posts }) => {
  const [like, setLike] = useState(false);
  // const [heartCount, setHeartCount] = useState('');

  const handleHeart = () => {
    if (like ? setLike(false) : setLike(true));
  };

  const handleSetLike = async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const authToken = localStorage.getItem('token');
    const postId = posts?.id;

    try {
      const res = await axios.post(`${URL}/post/${postId}/heart`, [], {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      console.log('좋아요 res : ', res);
      console.log('좋아요 data : ', res.data);
      console.log('postId : ', postId);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => handleSetLike, []);
  useEffect(() => {
    // setHeartCount(posts?.heartCount);
    setLike(posts?.hearted);
  }, []);

  return (
    <Icon>
      <IconCount onClick={handleHeart}>
        <IconImg src={like ? heartOn : heartOff} alt="좋아요" />
        {posts.heartCount}
      </IconCount>

      <IconCount>
        <IconImg src={chat} alt="" />
        {posts.commentCount}
      </IconCount>
    </Icon>
  );
};

export default PostIcon;
