import styled, { css } from 'styled-components';
import OnlyBackBtnHeader from '../../../components/header/OnlyBackBtnHeader';
import FormStyle from '../FormStyle';

const SignUpContDiv = styled.div`
  background-color: white;
  min-height: 614px;
  padding: 0 20px;

  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const StyledButton = styled.button`
  margin-top: 30px;
  padding: 14px 30px;
  color: white;
  font-size: 14px;
  border-radius: 50px;
  background-color: var(--deep-gray);

  &:active {
    background-color: var(--black);
  }
  /* ${(props) =>
    props.active &&
    css`
      background-color: var(--black);
    `} */
`;

const InvalidSpan = styled.span`
  display: block;
  color: var(--light-red);
  font-size: 12px;
  padding-top: 6px;
`;

const SignUp = () => {
  return (
    <>
      <OnlyBackBtnHeader />
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
    </>
  );
};

export default SignUp;
