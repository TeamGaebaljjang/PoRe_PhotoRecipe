/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import styled from 'styled-components';
import BtnAddPic from '../../../components/button/BtnAddPic';

const LoginContDiv = styled.div`
  background-color: white;
  min-height: 614px;
  padding: 60px 20px;
  border-radius: 20px 20px 0 0;

  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 12px;
  }

  p {
    font-size: 14px;
    color: var(--super-gray);
    text-align: center;
  }

  .profile-img-wrap {
    position: relative;
    width: 116px;
    height: 116px;
    border-radius: 50%;
    margin: 26px auto;
    background-color: var(--light-gray);
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 12px;
  }

  input {
    font-size: 14px;
    height: 32px;
    border-bottom: 1px solid var(--gray);
  }

  input::placeholder {
    font-size: 14px;
    color: var(--light-gray);
  }

  input + label {
    margin-top: 16px;
  }

  a {
    margin-top: 22px;
    font-size: 12px;
    text-align: center;
    color: var(--super-gray);
  }

  /* invalidSpan 추가시 스타일 */
  span + label {
    margin-top: 16px;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
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

const SetProfile = () => {
  const [profileImg, setProfileImg] = useState('');

  const profileUpload = () => {
    console.log('click됨');
    setProfileImg();
  };

  return (
    <article>
      <LoginContDiv>
        <h2>프로필 설정</h2>
        <p>나중에 언제든지 변경할 수 있습니다.</p>
        <div className="profile-img-wrap">
          <ProfileImg src={profileImg || null} alt="" />
          <AddPickBtn onClick={profileUpload} />
        </div>
        <form>
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
          <StyledButton type="submit">PORE 시작하기</StyledButton>
        </form>
      </LoginContDiv>
    </article>
  );
};

export default SetProfile;
