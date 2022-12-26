import axios from 'axios';
import { useCallback, useRef, useState } from 'react';
import {
  Form,
  ProfileImg,
  Input,
  BtnSubmit,
} from '../../pages/PostDetail/PostCard/postCardStyle';

const CommentForm = ({ postDetailId, getComments }) => {
  const [comment, setComment] = useState('');
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = '1px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  const postComment = async () => {
    console.log(comment);
    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const authToken = localStorage.getItem('token');
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
      setComment(res.data.comment.content);
      // console.log('postComments 응답 : ', res);
      getComments();
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    // console.log(postDetailId);
    postComment();
  };

  const handleInputText = (e) => {
    const inputText = e.target.value;
    setComment(inputText);
  };

  return (
    <Form>
      <ProfileImg />
      <Input
        placeholder="댓글 입력하기..."
        ref={textRef}
        onInput={handleResizeHeight}
        onChange={handleInputText}
        value={comment}
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
