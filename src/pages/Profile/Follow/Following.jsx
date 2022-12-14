import User from '../../../components/user/User';
import { BtnFollow, Li } from './followStyle';
import HeaderFollowing from '../../../components/header/HeaderFollowing';

const Following = () => {
  return (
    <>
      <HeaderFollowing />
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
      <Li>
        <User />
        <BtnFollow type="button" cancel>
          취소
        </BtnFollow>
      </Li>
    </>
  );
};

export default Following;
