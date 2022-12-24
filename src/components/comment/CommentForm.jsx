import axios from 'axios';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Form,
  ProfileImg,
  Input,
  BtnSubmit,
} from '../../pages/PostDetail/PostCard/postCardStyle';

const CommentForm = ({ postDetailId }) => {
  // console.log(postDetailId);
  const navigate = useNavigate();
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = '1px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  const [comment, setComment] = useState('');

  const postComment = async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const authToken = localStorage.getItem('token');
    console.log(comment);

    try {
      const res = await axios.post(
        `${URL}/post/${postDetailId?.id}/comments`,
        { comment: { content: `${comment}` } },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        },
      );
      navigate(`/feed/feeddetail`);
      // setComment(res.data.comment.content);
      console.log('postComments 응답 : ', res);
      // console.log('comment 데이터 : ', res.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    console.log(postDetailId);
    postComment();
    setComment('');
  };

  return (
    <Form>
      <ProfileImg />
      <Input
        placeholder="댓글 입력하기..."
        ref={textRef}
        onInput={handleResizeHeight}
        onChange={(e) => setComment(e.target.value)}
        rows="1"
      />
      <BtnSubmit
        type="button"
        onClick={() => {
          handleSubmit();
        }}
      >
        게시
      </BtnSubmit>
    </Form>
  );
};

export default CommentForm;
