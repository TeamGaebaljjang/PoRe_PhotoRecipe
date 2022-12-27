import { useCallback, useRef } from 'react';
import {
  Form,
  ProfileImg,
  Input,
  BtnSubmit,
} from '../../pages/PostDetail/PostCard/postCardStyle';
import imageProfile from '../../assets/img/profile.png';

const CommentForm = ({ postComment, comment, setComment }) => {
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = '1px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  const handleSubmit = () => {
    postComment();
  };

  const handleInputText = (e) => {
    const inputText = e.target.value;
    setComment(inputText);
  };

  return (
    <Form>
      <ProfileImg>
        <img src={imageProfile} alt="" />
      </ProfileImg>
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
        disabled={!comment}
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
