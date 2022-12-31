import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Post from '../../../components/card/Post';
import { CardWrap } from './postCardStyle';
import HeaderB from '../../../components/header/HeaderB';
import CommentWrapper from '../../../components/comment/CommentWrapper';
import { Wrap } from '../../../components/card/postStyle';

const PostCard = () => {
  const location = useLocation();
  const postDetailId = { ...location.state };
  const [posts, setPosts] = useState('');

  // console.log('getPostDetail 데이터 : ', posts);

  const getPostDetail = async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const authToken = localStorage.getItem('token');

    try {
      const res = await axios.get(`${URL}/post/${postDetailId.id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      setPosts(res?.data.post);
      // console.log('getPostDetail 응답 : ', res);
      // console.log(postDetailId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getPostDetail, []);

  return (
    <Wrap className="no-Navbar">
      <HeaderB />
      <CardWrap>
        {posts && <Post posts={posts} />}
        <CommentWrapper posts={posts} postDetailId={postDetailId} />
      </CardWrap>
    </Wrap>
  );
};

export default PostCard;
