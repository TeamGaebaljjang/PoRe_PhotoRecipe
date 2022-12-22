import { useState } from 'react';
import { FormStyle, InvalidSpan } from './FormStyle';
import StyledButton from '../../../components/button/BtnForm';
import {
  EditProfileContDiv,
  ProfileImgWrap,
  AddPickBtn,
} from './editProfileStyle';

const EditProfileForm = () => {
  const [profileImg, setProfileImg] = useState('');

  const profileUpload = () => {
    console.log('click됨');
    setProfileImg();
  };

  return (
    <EditProfileContDiv>
      <h2>프로필 수정</h2>
      <ProfileImgWrap>
        <img src={profileImg || null} alt="" />
        <AddPickBtn onClick={profileUpload} />
      </ProfileImgWrap>
      <FormStyle>
        <label htmlFor="userName">사용자 이름</label>
        <input
          id="userName"
          type="text"
          required
          placeholder="2~10자 이내여야 합니다."
        />
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
        <StyledButton type="submit">저장</StyledButton>
      </FormStyle>
    </EditProfileContDiv>
  );
};

export default EditProfileForm;
