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
import defaultProfileImg from '../../../assets/icons/basic-profile-round.svg';
import defaultImg from '../../../assets/icons/basic-post-default.svg';

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

  const onErrorProfileImg = (e) => {
    // eslint-disable-next-line no-param-reassign
    e.target.src = defaultProfileImg;
  };

  const onErrorImg = (e) => {
    // eslint-disable-next-line no-param-reassign
    e.target.src = defaultImg;
  };

  return (
    <Wrap>
      <HeaderB />
      <PostCard>
        <User onClick={() => handleProfile()}>
          <UserProfile
            src={userInfo.image}
            alt=""
            onError={onErrorProfileImg}
          />
          <UserInfo>
            <UserName>{userInfo.username}</UserName>
            <UserId>@ {userInfo.accountname}</UserId>
          </UserInfo>
        </User>
        <PostImg
          className="detail-post-img"
          src={userInfo.itemImage}
          alt="상세이미지"
          onError={onErrorImg}
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
