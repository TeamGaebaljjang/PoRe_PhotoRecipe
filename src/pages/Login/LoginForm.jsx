import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormStyle, InvalidSpan } from './formStyle';
import StyledButton from '../../components/button/BtnForm';
import { LoginContDiv, SignupLink } from './loginStyle';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const URL = 'https://mandarin.api.weniv.co.kr';
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post(`${URL}/user/login`, {
        user: { email: `${email}`, password: `${password}` },
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.data.message) {
        setErrorMsg(res.data.message);
      } else {
        localStorage.setItem('accountname', res.data.user.accountname);
        localStorage.setItem('token', res.data.user.token);
        navigate('/home');
      }
    } catch (error) {
      setErrorMsg(error.response.data);
    }
  };

  return (
    <LoginContDiv>
      <h2>로그인</h2>
      <FormStyle>
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <InvalidSpan>{errorMsg}</InvalidSpan>
        <StyledButton type="submit" onClick={login}>
          로그인
        </StyledButton>
        <SignupLink to="/">이메일로 회원가입</SignupLink>
      </FormStyle>
    </LoginContDiv>
  );
};

export default LoginForm;
