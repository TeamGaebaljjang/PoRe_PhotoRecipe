import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnFollow } from '../../pages/Profile/Follow/followStyle';
import {
  User,
  UserProfile,
  UserInfo,
  UserName,
  UserId,
} from '../../pages/Search/searchStyle';

const Userfoll = ({ item }) => {
  const [isfollow, setIsFollow] = useState(item.isfollow);
  const URL = 'https://mandarin.api.weniv.co.kr';
  const authToken = localStorage.getItem('token');
  const navigate = useNavigate();

  // 유저 프로필 이동
  const handleProfile = () => {
    navigate('/otherProfile', {
      state: {
        accountname: `${item.accountname}`,
      },
    });
  };

  // 팔로우
  const Follow = async () => {
    try {
      const res = await axios.post(
        `${URL}/profile/${item.accountname}/follow`,
        [],
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res.data.profile);
      setIsFollow(res.data.profile.isfollow);
    } catch (error) {
      console.log(error);
    }
  };

  // 언팔로우
  const UnFollow = async () => {
    try {
      const res = await axios.delete(
        `${URL}/profile/${item.accountname}/unfollow`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res.data.profile);
      setIsFollow(res.data.profile.isfollow);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <User
      onClick={() => handleProfile()}
      style={{
        position: 'relative',
        height: '70px',
        borderBottom: '0.5px solid var(--light-gray)',
        margin: '0 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <UserProfile src={item.image} alt="" />
      <UserInfo>
        <UserName>{item.username}</UserName>
        <UserId
          style={{
            width: '250px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {`@${item.accountname}`}
        </UserId>
      </UserInfo>
      {isfollow ? (
        <BtnFollow cancel onClick={UnFollow}>
          취소
        </BtnFollow>
      ) : (
        <BtnFollow onClick={Follow}>팔로우</BtnFollow>
      )}
    </User>
  );
};

export default Userfoll;
