import styled from 'styled-components';
import BtnAddPic from '../../../components/button/BtnAddPic';

const UPZWrap = styled.form`
  display: flex;
  flex-direction: column;
`;

const UploadPhotoZone = () => {
  return (
    <UPZWrap action="submit">
      <label htmlFor="photo">포토존 등록</label>
      <BtnAddPic attr="gray" />
      <input id="photo" type="image" src="" alt="" required />

      <label htmlFor="address">포토존 주소</label>
      <input id="adrress" type="text" required />

      <label htmlFor="day">촬영 날짜</label>
      <input id="day" type="number" required />

      <label htmlFor="cont">설명</label>
      <input id="cont" type="text" required />

      <input type="submit" />
    </UPZWrap>
  );
};

export default UploadPhotoZone;
