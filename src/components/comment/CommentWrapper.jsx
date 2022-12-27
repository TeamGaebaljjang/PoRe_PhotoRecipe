import axios from 'axios';
import { useState, useEffect } from 'react';
import Comment from './Comment';
import { Comments } from '../../pages/PostDetail/PostCard/postCardStyle';
import CommentForm from './CommentForm';

const CommentWrapper = ({ postDetailId }) => {
  // console.log('posts : ', posts);
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
      // console.log('comment 응답 : ', res);
      // console.log('comment 데이터 : ', res.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getComments, []);

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
      // console.log('postComments 응답 : ', res);
      getComments();
      setComment('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Comments>
        {commentList.map((item) => {
          // console.log('commentList : ', item);
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
