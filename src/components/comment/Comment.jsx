/* eslint-disable no-nested-ternary */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimeCalc from './TimeCalc';
import iconMore from '../../assets/icons/icon-more-vertical-gray.svg';
import {
  UserComment,
  ProfileImg,
  UserName,
  AddTime,
  CommentCont,
  CommentMoreBtn,
} from './commentStyle';
import { BackDropWhite } from '../../pages/Profile/profileStyle';
import DeleteUnder from '../modal/UnderModal/CommentDeleteModal';
import ReportUnder from '../modal/UnderModal/CommentReportModal';

const Comment = ({ commentList, setComment, getComments, postDetailId }) => {
  // console.log(commentList);
  const navigate = useNavigate();
  const userInfo = commentList.author.accountname;
  const [modal, setModal] = useState(false);
  const [account, setAccount] = useState('');
  const accountName = localStorage.getItem('accountname');

  const nowDate = TimeCalc(new Date(commentList.createdAt));

  const modalHandler = () => {
    setAccount(commentList.author.accountname);
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };

  const userCheck = () => {
    if (accountName === userInfo) {
      navigate('/profile', {
        state: {
          accountname: `${userInfo}`,
        },
      });
    } else {
      navigate('/otherProfile', {
        state: {
          accountname: `${userInfo}`,
        },
      });
    }
  };

  return (
    <>
      <UserComment>
        <ProfileImg src={commentList.author.image} alt="" onClick={userCheck} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <UserName onClick={userCheck}>
            {commentList.author.username}
            <AddTime>{nowDate}</AddTime>
          </UserName>
          <CommentCont>{commentList.content}</CommentCont>
        </div>
        <CommentMoreBtn src={iconMore} alt="" onClick={modalHandler} />
      </UserComment>
      {!modal ? (
        accountName === account ? (
          <>
            <BackDropWhite
              style={{ zIndex: '10' }}
              onClick={() => {
                setModal(!modal);
              }}
            />
            <DeleteUnder
              commentList={commentList}
              setComment={setComment}
              getComments={getComments}
              postDetailId={postDetailId}
            />
          </>
        ) : null
      ) : accountName !== account ? (
        <>
          <BackDropWhite
            style={{ zIndex: '10' }}
            onClick={() => {
              setModal(!modal);
            }}
          />
          <ReportUnder
            closeModal={closeModal}
            commentList={commentList}
            postDetailId={postDetailId}
            setComment={setComment}
          />
        </>
      ) : null}
    </>
  );
};

export default Comment;
