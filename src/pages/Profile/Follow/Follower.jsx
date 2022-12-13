import User from '../../../components/user/User';
import { BtnFollow, Li } from './followStyle';

const Follower = () => {
  return (
    <>
      <Li>
        <User />
        <BtnFollow type="button">팔로우</BtnFollow>
      </Li>
      <Li>
        <User />
        <BtnFollow type="button">팔로우</BtnFollow>
      </Li>
      <Li>
        <User />
        <BtnFollow type="button" cancel>
          취소
        </BtnFollow>
      </Li>
      <Li>
        <User />
        <BtnFollow type="button">팔로우</BtnFollow>
      </Li>
      <Li>
        <User />
        <BtnFollow type="button" cancel>
          취소
        </BtnFollow>
      </Li>
    </>
  );
};

export default Follower;
