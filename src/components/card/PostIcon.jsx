import { useState, useEffect } from 'react';
import axios from 'axios';
import { Icon, IconImg, IconCount } from './postStyle';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import chat from '../../assets/icons/icon-chat.svg';

const PostIcon = ({ posts }) => {
  const [like, setLike] = useState(false);
  const [likeData, setLikeData] = useState('');
  const [postId, setPostId] = useState('');

  const handleHeart = () => {
    if (like ? setLike(false) : setLike(true));
  };

  const URL = 'https://mandarin.api.weniv.co.kr';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTZjYjUyMTdhZTY2NjU4MWMzMzQ0MyIsImV4cCI6MTY3NjYxODE4MiwiaWF0IjoxNjcxNDM0MTgyfQ.dnnDfwwnekAWwoNEhCQiog5t8TaQ3msfRBRcNbdX3c8';

  const handleLike = async () => {
    try {
      const res = await axios.post(`${URL}/post/${postId}/heart`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });
      setLikeData(res.data);
      setPostId(res.data.post);
      console.log('like', res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => handleLike, []);

  return (
    <Icon>
      <IconCount likeData={likeData}>
        <IconImg
          src={like ? heartOn : heartOff}
          alt="좋아요"
          onClick={handleHeart}
        />
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
