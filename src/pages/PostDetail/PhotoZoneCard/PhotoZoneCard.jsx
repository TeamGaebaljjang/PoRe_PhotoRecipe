import { useLocation, useNavigate } from 'react-router-dom';
import HeaderB from '../../../components/header/HeaderB';
import {
  Wrap,
  PostCard,
  PostImg,
  User,
  UserProfile,
  UserInfo,
  UserName,
  UserId,
  PostTitle,
  PostCont,
  PostDate,
} from '../../../components/card/postStyle';
import NavBar from '../../../components/navBar/NavBar';

const PhotoZoneCard = () => {
  const location = useLocation();
  const userInfo = { ...location.state };
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate('/otherProfile', {
      state: {
        accountname: `${userInfo.accountname}`,
      },
    });
  };

  return (
    <Wrap>
      <HeaderB />
      <PostCard>
        <User onClick={() => handleProfile()}>
          <UserProfile src={userInfo.image} alt="" />
          <UserInfo>
            <UserName>{userInfo.username}</UserName>
            <UserId>@ {userInfo.accountname}</UserId>
          </UserInfo>
        </User>
        <PostImg
          className="detail-post-img"
          src={userInfo.itemImage}
          alt="상세이미지"
        />
        <PostTitle>{userInfo.itemName}</PostTitle>
        <PostCont>{userInfo.link}</PostCont>
        <PostDate>
          {userInfo.createdAt.substring(0, 4)}년&nbsp;
          {userInfo.createdAt.substring(5, 7)}월&nbsp;
          {userInfo.createdAt.substring(8, 10)}일
        </PostDate>
      </PostCard>
      <NavBar />
    </Wrap>
  );
};

export default PhotoZoneCard;
