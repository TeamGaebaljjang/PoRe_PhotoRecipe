import User from '../../../components/user/User';
import { BtnFollow, Li, Wrap } from './followStyle';
import HeaderFollower from '../../../components/header/HeaderFollower';

const Follower = () => {
  return (
    <>
      <HeaderFollower />
      <Wrap>
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
          <BtnFollow type="button">팔로우</BtnFollow>
        </Li>
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
        <Li>
          <User />
          <BtnFollow type="button" cancel>
            취소
          </BtnFollow>
        </Li>
        <Li>
          <User />
          <BtnFollow type="button" cancel>
            취소
          </BtnFollow>
        </Li>
        <Li>
          <User />
          <BtnFollow type="button" cancel>
            취소
          </BtnFollow>
        </Li>
        <Li>
          <User />
          <BtnFollow type="button" cancel>
            취소
          </BtnFollow>
        </Li>
      </Wrap>
    </>
  );
};

export default Follower;
