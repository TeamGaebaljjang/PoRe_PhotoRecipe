import { useCallback, useRef } from 'react';
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

  return (
    <>
      <HeaderBM />
      <CardWrap>
        <Post />
        <CommentWrap>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
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
