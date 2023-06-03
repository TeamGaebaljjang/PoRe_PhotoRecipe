import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormStyle, InvalidSpan } from './formStyle';
import StyledButton from '../../components/button/BtnForm';
import { LoginContDiv, SignupLink } from './loginStyle';
import { headerApi } from '../../axiosInstance';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await headerApi.post(`/user/login`, {
        user: { email: `${email}`, password: `${password}` },
      });

      if (res.data.message) {
        setErrorMsg(res.data.message);
      } else {
        localStorage.setItem('accountname', res.data.user.accountname);
        localStorage.setItem('token', res.data.user.token);
        localStorage.setItem('myprofileImg', res.data.user.image);
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
          placeholder="이메일을 입력해주세요."
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          required
          placeholder="비밀번호를 입력해주세요. (6자 이상)"
          onChange={(e) => setPassword(e.target.value)}
        />

        <InvalidSpan style={{ color: 'red' }}>{errorMsg}</InvalidSpan>
        <StyledButton
          type="submit"
          onClick={login}
          disabled={!(email && password)}
        >
          로그인
        </StyledButton>
        <SignupLink to="/signup">이메일로 회원가입</SignupLink>
      </FormStyle>
    </LoginContDiv>
  );
};

export default LoginForm;
