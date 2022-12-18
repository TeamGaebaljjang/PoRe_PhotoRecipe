import { FormStyle, InvalidSpan } from './FormStyle';
import StyledButton from '../../components/button/BtnForm';
import { LoginContDiv, SignupLink } from './loginStyle';

const LoginForm = () => {
  return (
    <LoginContDiv>
      <h2>로그인</h2>
      <FormStyle>
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" required />

        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" required />

        <InvalidSpan>* 이메일 또는 비밀번호가 일치하지 않습니다.</InvalidSpan>
        <StyledButton type="submit">로그인</StyledButton>
        <SignupLink to="/">이메일로 회원가입</SignupLink>
      </FormStyle>
    </LoginContDiv>
  );
};

export default LoginForm;
