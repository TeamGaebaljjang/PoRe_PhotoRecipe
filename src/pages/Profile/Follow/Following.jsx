import User from '../../../components/user/User';
import { BtnFollow, Li } from './followStyle';

const Following = () => {
  return (
    <>
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
