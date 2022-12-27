import { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon, IconImg, IconCount } from './postStyle';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import chat from '../../assets/icons/icon-chat.svg';

const PostIcon = ({ posts, postDetailId }) => {
  const [like, setLike] = useState('');
  const [heartCount, setHeartCount] = useState(posts.heartCount);

  const handleLike = async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const authToken = localStorage.getItem('token');
    const postId = posts?.id;

    try {
      if (!like) {
        const res = await axios.post(`${URL}/post/${postId}/heart`, [], {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        });
        // console.log('좋아요 res : ', res);
        // console.log('좋아요 data : ', res.data);
        setHeartCount(res.data.post.heartCount);
        setLike(true);
      } else {
        const res = await axios.delete(`${URL}/post/${postId}/unheart`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        });
        // console.log('좋아요취소 res : ', res);
        // console.log('좋아요취소 data : ', res.data);
        setHeartCount(res.data.post.heartCount);
        setLike(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setHeartCount(heartCount);
    setLike(posts?.hearted);
  }, []);

  return (
    <Icon>
      <IconCount onClick={handleLike}>
        <IconImg src={like ? heartOn : heartOff} alt="좋아요" />
        {heartCount}
      </IconCount>

      <IconCount onClick={() => postDetailId()}>
        <IconImg src={chat} alt="" />
        {posts.commentCount}
      </IconCount>
    </Icon>
  );
};

export default PostIcon;
