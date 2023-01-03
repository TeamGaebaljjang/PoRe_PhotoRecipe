import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FormStyle, InvalidSpan } from '../formStyle';
import SignUpContDiv from './signUpStyle';
import StyledButton from '../../../components/button/BtnForm';

const SignUpForm = () => {
  const navigate = useNavigate();
  // 이메일, 비밀번호
  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');

  // 오류 메시지 상태
  const [emailMsg, setEmailMsg] = useState('');
  const [passwordMsg, setPasswordMsg] = useState('');

  // 유효성 검사
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  // 이메일 정규표현식
  const emailRegex =
    /^(([^<>()\\[\].,;:\s@"]+(\.[^<>()\\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  // 이메일 유효성 검사
  const validEmail = async () => {
    const URL = 'https://mandarin.api.weniv.co.kr';
    try {
      const response = await axios.post(`${URL}/user/emailvalid`, {
        user: {
          email: `${email}`,
        },
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (response && emailRegex.test(email)) {
        if (response.data.message === '이미 가입된 이메일 주소 입니다.') {
          setEmailMsg(response.data.message);
          setIsValidEmail(false);
        } else {
          setEmailMsg(response.data.message);
          setIsValidEmail(true);
        }
      } else {
        setEmailMsg('이메일 형식이 잘못되었습니다.');
        setIsValidEmail(false);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  // 비밀번호 유효성 검사
  const validPassword = () => {
    if (!(password.length >= 6)) {
      setPasswordMsg('6자리 이상 입력해주세요.');
      setIsValidPassword(false);
    } else {
      setPasswordMsg('안전한 비밀번호입니다.');
      setIsValidPassword(true);
    }
  };

  useEffect(() => {
    validEmail();
    validPassword();
  }, [email, password]);

  // email, password의 value 값 체크
  const checkInput = (e) => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      SetPassword(e.target.value);
    }
  };

  const handleNextStep = () => {
    if (isValidEmail && isValidPassword) {
      navigate('/signup/setprofile', {
        state: {
          email: `${email}`,
          password: `${password}`,
        },
      });
    }
  };

  return (
    <SignUpContDiv>
      <h2>이메일로 회원가입</h2>
      <FormStyle>
        <label htmlFor="email">이메일</label>
        <input id="email" type="email" onChange={checkInput} required />
        {email.length > 0 && (
          <InvalidSpan className={`${isValidEmail ? 'success' : 'error'}`}>
            {emailMsg}
          </InvalidSpan>
        )}

        <label htmlFor="password">비밀번호</label>
        <input id="password" type="password" onChange={checkInput} required />
        {password.length > 0 && (
          <InvalidSpan className={`${isValidPassword ? 'success' : 'error'}`}>
            {passwordMsg}
          </InvalidSpan>
        )}

        <StyledButton
          type="submit"
          disabled={!(isValidEmail && isValidPassword)}
          onClick={handleNextStep}
        >
          회원가입
        </StyledButton>
      </FormStyle>
    </SignUpContDiv>
  );
};

export default SignUpForm;
