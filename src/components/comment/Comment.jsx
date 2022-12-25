// import axios from 'axios';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import profilePic from '../../assets/img/profile.png';
import iconMore from '../../assets/icons/icon-more-vertical-gray.svg';
import {
  UserComment,
  ProfileImg,
  UserName,
  AddTime,
  CommentCont,
  CommentMoreBtn,
} from './commentStyle';

const Comment = ({ commentList }) => {
  return (
    <UserComment>
      <ProfileImg src={commentList.author.image} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <UserName>
          {commentList.author.accountname}
          <AddTime>{commentList.createdAt}</AddTime>
        </UserName>
        <CommentCont>{commentList.content}</CommentCont>
      </div>
      <CommentMoreBtn src={iconMore} alt="" />
    </UserComment>
  );
};

export default Comment;
