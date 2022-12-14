/* eslint-disable jsx-a11y/anchor-is-valid */
// import { BrowserRouter, Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import logo from '../../assets/icons/logo-pore.svg';
import FormStyle from './FormStyle';

const LoginDiv = styled.div`
  background-color: var(--black);

  img {
    width: 90px;
    margin: 0 auto;
    padding: 56px 0;
  }
`;

const LoginContDiv = styled.div`
  background-color: white;
  min-height: 614px;
  padding: 60px 20px;
  border-radius: 20px 20px 0 0;

  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
  }

  a {
    margin-top: 22px;
    font-size: 12px;
    text-align: center;
    color: var(--super-gray);
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

const Login = () => {
  return (
    <LoginDiv>
      <img src={logo} alt="logo" />
      <LoginContDiv>
        <h2>로그인</h2>
        <FormStyle>
          <label htmlFor="email">이메일</label>
          <input id="email" type="email" required />

          <label htmlFor="password">비밀번호</label>
          <input id="password" type="password" required />

          <InvalidSpan>* 이메일 또는 비밀번호가 일치하지 않습니다.</InvalidSpan>
          <StyledButton type="submit">로그인</StyledButton>
          <a href="#">이메일로 회원가입</a>
          {/* <BrowserRouter>
            <Link to="/">이메일로 회원가입</Link>
          </BrowserRouter> */}
        </FormStyle>
      </LoginContDiv>
    </LoginDiv>
  );
};

export default Login;
