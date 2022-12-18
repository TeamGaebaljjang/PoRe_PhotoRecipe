import profilePic from '../../assets/img/profile.png';
import iconMore from '../../assets/icons/icon-more-vertical-gray.svg';
import {
  UserComment,
  ProfileImg,
  UserName,
  AddTime,
  CommentCont,
  CommentMoreBtn,
} from './commentStyle';

const Comment = () => {
  return (
    <UserComment>
      <ProfileImg src={profilePic} alt="" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <UserName>
          김도영크흡
          <AddTime>10분 전</AddTime>
        </UserName>
        <CommentCont>
          우리조짱우리조짱우리조짱우리조짱우리조짱우리조짱우리조짱우리조짱우리조짱우리조짱우리조짱우리조짱
        </CommentCont>
      </div>
      <CommentMoreBtn src={iconMore} alt="" />
    </UserComment>
  );
};

export default Comment;
