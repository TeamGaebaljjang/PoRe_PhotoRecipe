import axios from 'axios';
import { useState, useEffect } from 'react';
import Comment from './Comment';
import { Comments } from '../../pages/PostDetail/PostCard/postCardStyle';
import CommentForm from './CommentForm';

const CommentWrapper = ({ posts, postDetailId }) => {
  const [commentList, setCommentList] = useState([]);

  const getComments = async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    const authToken = localStorage.getItem('token');

    try {
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
      console.log('comment 응답 : ', res);
      console.log('comment 데이터 : ', res.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getComments, []);

  return (
    <>
      <Comments>
        {commentList.map((item) =>
          commentList ? (
            <Comment key={item.id} posts={posts} commentList={item} />
          ) : null,
        )}
      </Comments>
      <CommentForm postDetailId={postDetailId} />
    </>
  );
};

export default CommentWrapper;
