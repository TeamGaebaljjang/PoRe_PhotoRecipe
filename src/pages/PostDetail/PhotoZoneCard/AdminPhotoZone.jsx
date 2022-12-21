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

const PhotoZoneCard = () => {
  const location = useLocation();
  const { image, username, accountname, itemImage, itemName, link, updatedAt } =
    { ...location.state };

  // 캐러셀 클릭시 상세페이지 이동
  // const getDetailPage = async ({ item }) => {
  //   console.log(item.itemName);
  //   try {
  //     const token = localStorage.getItem('token');
  //     const response = await axios.get(`${URL}/product/detail/${item.id}`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         'Content-type': 'application/json',
  //       },
  //     });

  //     if (response) {
  //       console.log(response.data);
  //       navigate('/photodetail');
  //     } else {
  //       console.log(response.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error.response);
  //   }
  // };

  // useEffect(() => {
  //   getDetailPage();
  // }, []);

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
        <PostImg src={itemImage} alt="상세이미지" />
        <PostTitle>{itemName}</PostTitle>
        <PostCont>{link}</PostCont>
        <PostDate>{updatedAt}</PostDate>
      </PostCard>
    </>
  );
};

export default PhotoZoneCard;
