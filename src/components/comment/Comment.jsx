/* eslint-disable no-nested-ternary */
import { useState } from 'react';
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
  const [modal, setModal] = useState(false);
  const [account, setAccount] = useState('');
  const accountName = localStorage.getItem('accountname');
  const modalHandler = () => {
    setAccount(commentList.author.accountname);
    setModal(!modal);
  };

  return (
    <>
      <UserComment>
        <ProfileImg src={commentList.author.image} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <UserName>
            {commentList.author.username}
            <AddTime>{commentList.createdAt}</AddTime>
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
