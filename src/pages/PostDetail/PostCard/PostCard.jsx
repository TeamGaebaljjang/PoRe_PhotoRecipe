import axios from 'axios';
import { useCallback, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Post from '../../../components/card/Post';
import { CardWrap, Form, ProfileImg, Input, BtnSubmit } from './postCardStyle';
import HeaderBM from '../../../components/header/HeaderBM';
import CommentWrapper from '../../../components/comment/CommentWrapper';

const PostCard = () => {
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = '1px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  const [posts, setPosts] = useState('');
  const location = useLocation();
  const postDetailId = { ...location.state };
  console.log('getPostDetail 데이터 : ', posts);

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
      console.log('getPostDetail 응답 : ', res);
      console.log(postDetailId);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getPostDetail, []);

  return (
    <>
      <HeaderBM />
      <CardWrap>
        {posts && <Post posts={posts} />}
        <CommentWrapper posts={posts} postDetailId={postDetailId} />
        <Form>
          <ProfileImg />
          <Input
            placeholder="댓글 입력하기..."
            ref={textRef}
            onInput={handleResizeHeight}
            rows="1"
          />
          <BtnSubmit type="submit">게시</BtnSubmit>
        </Form>
      </CardWrap>
    </>
  );
};

export default PostCard;
