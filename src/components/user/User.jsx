import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BtnFollow } from '../../pages/Profile/Follow/followStyle';
import {
  UserWrap,
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
    <UserWrap>
      <User
        onClick={() => handleProfile()}
        style={{
          position: 'relative',
          margin: '0 10px',
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
        }}
      >
        <UserProfile src={item.image} alt="" style={{}} />
        <UserInfo>
          <UserName>{item.username}</UserName>
          <UserId
            style={{
              width: '150px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {`@${item.accountname}`}
          </UserId>
        </UserInfo>
      </User>
      {isfollow ? (
        <BtnFollow cancel onClick={UnFollow}>
          취소
        </BtnFollow>
      ) : (
        <BtnFollow onClick={Follow}>팔로우</BtnFollow>
      )}
    </UserWrap>
  );
};

export default Userfoll;
