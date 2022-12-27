import { useState } from 'react';
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
import { BackDropWhite } from '../../pages/Profile/profileStyle';
import DeleteEditUnder from '../modal/UnderModal/CommentDeleteModal';

const Comment = ({ commentList, setComment, getComments, postDetailId }) => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <>
      <UserComment>
        <ProfileImg src={commentList.author.image} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <UserName>
            {commentList.author.accountname}
            <AddTime>{commentList.createdAt}</AddTime>
          </UserName>
          <CommentCont>{commentList.content}</CommentCont>
        </div>
        <CommentMoreBtn src={iconMore} alt="" onClick={modalHandler} />
      </UserComment>
      {modal ? (
        <BackDropWhite
          style={{ zIndex: '10' }}
          onClick={() => {
            setModal(!modal);
          }}
        />
      ) : null}
      {modal ? (
        <DeleteEditUnder
          modalHandler={modalHandler}
          commentList={commentList}
          setComment={setComment}
          getComments={getComments}
          postDetailId={postDetailId}
        />
      ) : null}
    </>
  );
};

export default Comment;
