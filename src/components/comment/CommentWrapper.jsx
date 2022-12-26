import axios from 'axios';
import { useState, useEffect } from 'react';
import Comment from './Comment';
import { Comments } from '../../pages/PostDetail/PostCard/postCardStyle';
import CommentForm from './CommentForm';

const CommentWrapper = ({ posts, postDetailId }) => {
  // console.log('posts : ', posts);
  const [commentList, setCommentList] = useState([]);

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

  return (
    <>
      <Comments>
        {commentList.map((item) => {
          // console.log('commentList : ', item);
          return commentList ? (
            <Comment key={item.id} posts={posts} commentList={item} />
          ) : null;
        })}
      </Comments>
      <CommentForm postDetailId={postDetailId} getComments={getComments} />
    </>
  );
};

export default CommentWrapper;
