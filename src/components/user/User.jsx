// import profilePic from '../../assets/img/profile.png';
import { BtnFollow } from '../../pages/Profile/Follow/followStyle';
import { UserCont, UserLi, UserName } from './userStyle';

const User = ({ item }) => {
  return (
    <UserLi>
      <img src={item.image} alt="" style={{ width: '35px' }} />
      <div>
        <UserName>{item.username}</UserName>
        <UserCont>{item.accountname}</UserCont>
      </div>
      <BtnFollow cancel>취소</BtnFollow>{' '}
    </UserLi>
  );
};

export default User;
