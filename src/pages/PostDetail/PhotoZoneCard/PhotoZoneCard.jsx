import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import HeaderB from '../../../components/header/HeaderB';
import {
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
  const { image, username, accountname, itemImage, itemName, link, createdAt } =
    { ...location.state };

  return (
    <>
      <HeaderB />
      <PostCard>
        <User>
          <UserProfile src={image} alt="" />
          <UserInfo>
            <UserName>{username}</UserName>
            <UserId>@ {accountname}</UserId>
          </UserInfo>
        </User>
        <PostImg className="admin-post-img" src={itemImage} alt="상세이미지" />
        <PostTitle>{itemName}</PostTitle>
        <PostCont>{link}</PostCont>
        <PostDate>
          {createdAt.substring(0, 4)}년&nbsp;
          {createdAt.substring(5, 7)}월&nbsp;
          {createdAt.substring(8, 10)}일
        </PostDate>
      </PostCard>
      <NavBar />
    </>
  );
};

export default PhotoZoneCard;
