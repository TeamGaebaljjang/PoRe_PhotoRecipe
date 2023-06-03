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
import { api } from '../../axiosInstance';

const Userfoll = ({ item }) => {
  const [isfollow, setIsFollow] = useState(item.isfollow);
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
      const res = await api.post(`/profile/${item.accountname}/follow`, []);
      setIsFollow(res.data.profile.isfollow);
    } catch (error) {
      console.log(error.res);
    }
  };

  // 언팔로우
  const UnFollow = async () => {
    try {
      const res = await api.delete(`/profile/${item.accountname}/unfollow`);
      setIsFollow(res.data.profile.isfollow);
    } catch (error) {
      console.log(error.res);
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
