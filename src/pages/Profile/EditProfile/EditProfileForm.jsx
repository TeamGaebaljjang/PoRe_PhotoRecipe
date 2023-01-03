import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FormStyle, InvalidSpan } from '../../Login/formStyle';
import StyledButton from '../../../components/button/BtnForm';
import { EditProfileContDiv } from './editProfileStyle';
import {
  ProfileImgWrap,
  ProfileImg,
  ProfileImgLabel,
  Wrapper,
} from '../../Login/SetProfile/setProfileStyle';

const EditProfileForm = () => {
  //
  const URL = 'https://mandarin.api.weniv.co.kr';
  const authToken = localStorage.getItem('token');
  const [username, setUsername] = useState('');
  const [accountname, setAccountname] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');
  const fileInput = useRef(null);
  const [userNameMsg, setUserNameMsg] = useState('');
  const [isValidUserName, setIsValidUserName] = useState(false);
  const navigate = useNavigate();

  // 프로필 정보 불러오기
  const getProfile = async () => {
    try {
      const res = await axios.get(`${URL}/user/myinfo`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setUsername(res.data.user.username);
      setAccountname(res.data.user.accountname);
      setIntro(res.data.user.intro);
      setImage(res.data.user.image);
    } catch (error) {
      console.log(error.res);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  // 한 개의 이미지(프로필)
  const profileChange = async () => {
    try {
      const file = fileInput.current.files[0];
      const formData = new FormData();

      formData.append('image', file);

      const res = await axios.post(`${URL}/image/uploadfile`, formData);
      const fileName = res.data.filename;

      setImage(`${URL}/${fileName}`);
    } catch (error) {
      console.log(error.res);
    }
  };

  // 사용자 이름 유효성 검사
  const validUserName = () => {
    if (username.length >= 10) {
      setUserNameMsg('10자리 이내로 입력해주세요.');
      setIsValidUserName(false);
    } else if (username.length <= 1) {
      setUserNameMsg('2자리 이상 입력해주세요.');
      setIsValidUserName(false);
    } else {
      setUserNameMsg('유효한 사용자 이름입니다.');
      setIsValidUserName(true);
    }
  };
  useEffect(() => {
    validUserName();
  }, [username]);

  // 프로필 수정
  const body = {
    user: {
      username: `${username}`,
      accountname: `${accountname}`,
      intro: `${intro}`,
      image: `${image}`,
    },
  };
  const editProfile = async () => {
    try {
      const res = await axios.put(`${URL}/user`, JSON.stringify(body), {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-type': 'application/json',
        },
      });
      if (res) {
        navigate('/profile');
      }
    } catch (error) {
      console.log(error.res);
    }
  };

  return (
    <EditProfileContDiv>
      <h2>프로필 수정</h2>
      <Wrapper>
        <ProfileImgWrap>
          <ProfileImg src={image} alt="프로필 이미지" />
        </ProfileImgWrap>
        <ProfileImgLabel htmlFor="profileImg" />
      </Wrapper>
      <input
        id="profileImg"
        type="file"
        style={{ display: 'none' }}
        accept="image/jpg,image/png,image/jpeg"
        name="profile_img"
        onChange={profileChange}
        ref={fileInput}
      />
      <FormStyle>
        <label htmlFor="userName">사용자 이름</label>
        <input
          id="userName"
          type="text"
          required
          placeholder="2~10자 이내여야 합니다."
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        {username.length > 0 && (
          <InvalidSpan className={`${isValidUserName ? 'success' : 'error'}`}>
            {userNameMsg}
          </InvalidSpan>
        )}
        <label htmlFor="userId">계정 ID</label>
        <input
          id="userId"
          type="text"
          required
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          value={accountname}
        />
        <label htmlFor="userDesc">소개</label>
        <input
          id="userDesc"
          type="text"
          required
          placeholder="자신에 대해 간단하게 소개해주세요!"
          value={intro}
          onChange={(e) => {
            setIntro(e.target.value);
          }}
        />
        <StyledButton
          type="submit"
          disabled={!isValidUserName}
          onClick={editProfile}
        >
          저장
        </StyledButton>
      </FormStyle>
    </EditProfileContDiv>
  );
};

export default EditProfileForm;
