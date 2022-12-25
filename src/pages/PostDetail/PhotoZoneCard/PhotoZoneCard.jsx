import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
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
  const props = { ...location.state };

  return (
    <Wrap>
      <HeaderB />
      <PostCard>
        <User>
          <UserProfile src={props.image} alt="" />
          <UserInfo>
            <UserName>{props.username}</UserName>
            <UserId>@ {props.accountname}</UserId>
          </UserInfo>
        </User>
        <PostImg
          className="detail-post-img"
          src={props.itemImage}
          alt="상세이미지"
        />
        <PostTitle>{props.itemName}</PostTitle>
        <PostCont>{props.link}</PostCont>
        <PostDate>
          {props.createdAt.substring(0, 4)}년&nbsp;
          {props.createdAt.substring(5, 7)}월&nbsp;
          {props.createdAt.substring(8, 10)}일
        </PostDate>
      </PostCard>
      <NavBar />
    </Wrap>
  );
};

export default PhotoZoneCard;
