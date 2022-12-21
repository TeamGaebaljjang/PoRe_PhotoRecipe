import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FormStyle, InvalidSpan } from '../formStyle';
import {
  ProfileContDiv,
  ProfileImgWrap,
  ProfileImg,
  ProfileImgLabel,
} from './setProfileStyle';
import StyledButton from '../../../components/button/BtnForm';
import profileBasicImg from '../../../assets/icons/basic-profile-round.svg';

const SetProfileForm = () => {
  // 이메일, 비밀번호 가져오기
  const location = useLocation();
  const navigate = useNavigate();
  const { email, password } = { ...location.state };
  console.log(`이메일: ${email}`);
  console.log(`비번: ${password}`);

  // API 서버
  const URL = 'https://mandarin.api.weniv.co.kr';

  // 사용자 이미지, 사용자 이름, 계정ID
  const [profileImg, setProfileImg] = useState(profileBasicImg);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userIntro, setUserIntro] = useState('');
  const fileInput = useRef(null);

  // 오류 메시지 상태
  const [userNameMsg, setUserNameMsg] = useState('');
  const [userIdMsg, setUserIdMsg] = useState('');

  // 유효성 검사
  const [isValidUserName, setIsValidUserName] = useState(false);
  const [isValidUserId, setIsValidUserId] = useState(false);

  // 회원가입 API
  const handleSingUp = async () => {
    try {
      const response = await axios.post(`${URL}/user`, {
        user: {
          username: `${userName}`,
          email: `${email}`,
          password: `${password}`,
          accountname: `${userId}`,
          intro: `${userIntro}`,
          image: `${profileImg}`,
        },
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (response) {
        navigate('/home');
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  // 사용자 이름 유효성 검사
  const validUserName = () => {
    if (userName.length >= 10) {
      setUserNameMsg('10자리 이내로 입력해주세요.');
      setIsValidUserName(false);
    } else if (userName.length <= 1) {
      setUserNameMsg('2자리 이상 입력해주세요.');
      setIsValidUserName(false);
    } else {
      setUserNameMsg('유효한 사용자 이름입니다.');
      setIsValidUserName(true);
    }
  };

  // 계정ID 정규식표현
  const userIdRegex = /^[a-zA-Z0-9_.]{2,10}$/;

  // 계정ID 유효성 검사
  const validUserId = async () => {
    try {
      const response = await axios.post(`${URL}/user/accountnamevalid`, {
        user: {
          accountname: `${userId}`,
        },
        headers: {
          'Content-type': 'application/json',
        },
      });

      if (response && userIdRegex.test(userId)) {
        if (response.data.message === '이미 가입된 계정ID 입니다.') {
          setUserIdMsg(response.data.message);
          setIsValidUserId(false);
        } else {
          setUserIdMsg(response.data.message);
          setIsValidUserId(true);
        }
      } else {
        setUserIdMsg('계정ID 형식이 잘못되었습니다.');
        setIsValidUserId(false);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    validUserName();
    validUserId();
  }, [userName, userId]);

  const checkInput = (e) => {
    if (e.target.id === 'userName') {
      setUserName(e.target.value);
    } else if (e.target.id === 'userId') {
      setUserId(e.target.value);
    } else if (e.target.id === 'userIntro') {
      setUserIntro(e.target.value);
    }
  };

  // 이미지 API
  const profileChange = async () => {
    try {
      const file = fileInput.current.files[0];
      const formData = new FormData();

      formData.append('image', file);

      const res = await axios.post(`${URL}/image/uploadfile`, formData);
      const fileName = res.data.filename;

      setProfileImg(`${URL}/${fileName}`);
    } catch (error) {
      console.log('에러입니다');
    }
  };

  return (
    <ProfileContDiv>
      <FormStyle>
        <h2>프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <ProfileImgWrap>
          <ProfileImg src={profileImg} alt="프로필 이미지" />
        </ProfileImgWrap>
        <ProfileImgLabel htmlFor="profileImg" />
        <input
          id="profileImg"
          type="file"
          style={{ display: 'none' }}
          accept="image/jpg,image/png,image/jpeg"
          name="profile_img"
          onChange={profileChange}
          ref={fileInput}
        />
        <label htmlFor="userName">사용자 이름</label>
        <input
          id="userName"
          type="text"
          placeholder="2~10자 이내여야 합니다."
          onChange={checkInput}
          required
        />
        {userName.length > 0 && (
          <InvalidSpan className={`${isValidUserName ? 'success' : 'error'}`}>
            {userNameMsg}
          </InvalidSpan>
        )}

        {/* 유효성 검사 해야함 ex)@heesu.u */}
        <label htmlFor="userId">계정 ID</label>
        <input
          id="userId"
          type="text"
          placeholder="10자 이내의 영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          onChange={checkInput}
          required
        />
        {userId.length > 0 && (
          <InvalidSpan className={`${isValidUserId ? 'success' : 'error'}`}>
            {userIdMsg}
          </InvalidSpan>
        )}

        <label htmlFor="userIntro">소개</label>
        <input
          id="userIntro"
          type="text"
          placeholder="자신에 대해 간단하게 소개해주세요!"
          onChange={checkInput}
        />
        <StyledButton
          type="submit"
          disabled={!(isValidUserName && isValidUserId)}
          onClick={handleSingUp}
        >
          PORE 시작하기
        </StyledButton>
      </FormStyle>
    </ProfileContDiv>
  );
};

export default SetProfileForm;
