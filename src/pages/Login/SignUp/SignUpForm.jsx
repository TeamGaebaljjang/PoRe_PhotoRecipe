import { FormStyle, InvalidSpan } from '../formStyle';
import SignUpContDiv from './signUpStyle';
import StyledButton from '../../../components/button/BtnForm';

const SignUpForm = () => {
  return (
    <SignUpContDiv>
      <h2>이메일로 회원가입</h2>
      <FormStyle>
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" required />
        <InvalidSpan>* 이미 가입된 이메일 주소입니다.</InvalidSpan>

        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" required />

        <InvalidSpan>* 비밀번호는 6자 이상이어야 합니다.</InvalidSpan>

        <StyledButton type="submit">로그인</StyledButton>
      </FormStyle>
    </SignUpContDiv>
  );
};

export default SignUpForm;
