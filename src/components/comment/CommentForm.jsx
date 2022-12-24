import { useCallback, useRef } from 'react';
import {
  Form,
  ProfileImg,
  Input,
  BtnSubmit,
} from '../../pages/PostDetail/PostCard/postCardStyle';

const CommentForm = () => {
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = '1px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  return (
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
  );
};

export default CommentForm;
