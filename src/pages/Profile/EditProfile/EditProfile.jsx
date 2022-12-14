import { useState } from 'react';
import styled from 'styled-components';
import BtnAddPic from '../../../components/button/BtnAddPic';
import OnlyBackBtnHeader from '../../../components/header/OnlyBackBtnHeader';
import FormStyle from './FormStyle';

const EditProfileContDiv = styled.div`
  background-color: white;
  min-height: 614px;
  padding: 0 20px;

  h2 {
    font-size: 24px;
    text-align: center;
  }

  .profile-img-wrap {
    position: relative;
    width: 116px;
    height: 116px;
    border-radius: 50%;
    margin: 40px auto;
    background-color: var(--light-gray);
  }

  .profile-img-wrap img {
    width: 100%;
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
`;

const AddPickBtn = styled(BtnAddPic)`
  position: absolute;
  top: 80px;
  left: 88px;
`;

const InvalidSpan = styled.span`
  display: block;
  color: var(--light-red);
  font-size: 12px;
  padding-top: 6px;
`;

const EditProfile = () => {
  const [profileImg, setProfileImg] = useState('');

  const profileUpload = () => {
    console.log('click됨');
    setProfileImg();
  };

  return (
    <>
      <OnlyBackBtnHeader />
      <EditProfileContDiv>
        <h2>프로필 수정</h2>
        <div className="profile-img-wrap">
          <img src={profileImg || null} alt="" />
          <AddPickBtn onClick={profileUpload} />
        </div>
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
    </>
  );
};

export default EditProfile;
