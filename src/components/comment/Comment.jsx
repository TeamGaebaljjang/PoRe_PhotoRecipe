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
// import { BackDrop } from '../../pages/Profile/profileStyle';
// import UnderModal4 from '../modal/UnderModal/underModal4';

const Comment = ({ commentList }) => {
  // const [modal, setModal] = useState(false);

  // const modalHandler = () => {
  //   setModal(!modal);
  // };

  // const handleComment = () => {

  // }
  // const deleteComment = async () => {
  //   try {
  //     const URL = 'https://mandarin.api.weniv.co.kr';
  //     const authToken = localStorage.getItem('token');
  //     const res = await axios.delete(
  //       `${URL}/post/${postDetailId?.id}/comments`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${authToken}`,
  //           'Content-type': 'application/json',
  //         },
  //       },
  //     );
  //     setComment(res.data.comment.content);
  //     // console.log('postComments 응답 : ', res);
  //     getComments();
  //     setComment('');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
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
      {/* {modal ? (
        <BackDrop
          onClick={() => {
            setModal(!modal);
          }}
        />
      ) : null}
      {modal ? <UnderModal4 modalHandler={modalHandler} /> : null} */}
    </UserComment>
  );
};

export default Comment;
