import axios from 'axios';
import { useState, useEffect } from 'react';
import Comment from './Comment';
import { Comments } from '../../pages/PostDetail/PostCard/postCardStyle';
import CommentForm from './CommentForm';

const CommentWrapper = ({ postDetailId }) => {
  const [commentList, setCommentList] = useState([]);
  const [comment, setComment] = useState('');

  const getComments = async () => {
    try {
      const URL = 'https://mandarin.api.weniv.co.kr';
      const authToken = localStorage.getItem('token');
      const res = await axios.get(
        `${URL}/post/${postDetailId.id}/comments?limit=30`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        },
      );
      setCommentList(res.data.comments);
    } catch (error) {
      console.log(error.res);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  const postComment = async () => {
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
      getComments();
      setComment('');
    } catch (error) {
      console.log(error.res);
    }
  };

  return (
    <>
      <Comments>
        {commentList.map((item) => {
          return commentList ? (
            <Comment
              key={item.id}
              commentList={item}
              setComment={setComment}
              getComments={getComments}
              postDetailId={postDetailId}
            />
          ) : null;
        })}
      </Comments>
      <CommentForm
        postComment={postComment}
        comment={comment}
        setComment={setComment}
      />
    </>
  );
};

export default CommentWrapper;
