import axios from 'axios';
import { useCallback, useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Post from '../../../components/card/Post';
import Comment from '../../../components/comment/Comment';
import {
  CardWrap,
  CommentWrap,
  Form,
  ProfileImg,
  Input,
  BtnSubmit,
} from './postCardStyle';
import HeaderBM from '../../../components/header/HeaderBM';

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

  const [commentList, setCommentList] = useState([]);
  const comment = true;

  const getComments = async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const authToken = localStorage.getItem('token');

    try {
      const res = await axios.get(`${URL}/post/${postDetailId.id}/comments`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      setCommentList(res.data.comments);
      // console.log('comment 응답 : ', res);
      console.log('comment 데이터 : ', res.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getComments, []);

  return (
    <>
      <HeaderBM />
      <CardWrap>
        {posts && <Post posts={posts} />}
        <CommentWrap>
          {commentList.map((item) =>
            comment ? <Comment posts={posts} commentList={item} /> : null,
          )}
        </CommentWrap>
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
