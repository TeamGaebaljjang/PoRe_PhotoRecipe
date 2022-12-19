import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { FormStyle, InvalidSpan } from '../formStyle';
import { ProfileContDiv, ProfileImgWrap, AddPickBtn } from './setProfileStyle';
import StyledButton from '../../../components/button/BtnForm';

const SetProfileForm = () => {
  const [profileImg, setProfileImg] = useState('');
  const location = useLocation();
  const { email } = location.state;

  console.log(email);

  const profileUpload = () => {
    console.log('click됨');
    setProfileImg();
  };

  return (
    <ProfileContDiv>
      <FormStyle>
        <h2>프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <ProfileImgWrap>
          <img src={profileImg || null} alt="" />
          <AddPickBtn onClick={profileUpload} />
        </ProfileImgWrap>
        <label htmlFor="userName">사용자 이름</label>
        <input
          id="userName"
          type="text"
          required
          placeholder="2~10자 이내여야 합니다."
        />
        {/* 유효성 검사 해야함 ex)@heesu.u */}
        <label htmlFor="userId">계정 ID</label>
        <input
          id="userId"
          type="text"
          required
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
        <InvalidSpan>
          * 영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.
        </InvalidSpan>
        {/* <InvalidSpan>* 이미 사용중인 ID입니다.</InvalidSpan> */}
        <label htmlFor="userDesc">소개</label>
        <input
          id="userDesc"
          type="text"
          required
          placeholder="자신에 대해 간단하게 소개해주세요!"
        />
        <StyledButton type="submit">PORE 시작하기</StyledButton>
      </FormStyle>
    </ProfileContDiv>
  );
};

export default SetProfileForm;
