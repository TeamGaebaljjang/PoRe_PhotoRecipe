import profilePic from '../../assets/img/profile.png';
import { UserCont, UserLi, UserName } from './userStyle';

const User = () => {
  return (
    <UserLi>
      <img src={profilePic} alt="" />
      <div>
        <UserName>닉네임</UserName>
        <UserCont>필요한 내용</UserCont>
      </div>
    </UserLi>
  );
};

export default User;
