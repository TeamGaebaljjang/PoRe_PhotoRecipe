import { useRef, useState } from 'react';
import BtnUpload from '../../../components/button/BtnUpload';
import { Input, Form } from '../../../components/input/Input';
import HeaderB from '../../../components/header/HeaderB';
import { PreviewImg, SubmitImg } from './uploadPhotoZoneStyle';

const UploadPhotoZone = () => {
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <>
      <HeaderB />
      <Form action="submit">
        <label htmlFor="photo">포토존등록</label>
        <SubmitImg htmlFor="photo" />
        <PreviewImg src={imgFile || null} alt="" />
        <Input
          id="photo"
          type="file"
          style={{ display: 'none' }}
          onChange={saveImgFile}
          ref={imgRef}
        />
        <label htmlFor="address">포토존 주소</label>
        <Input
          id="address"
          type="text"
          required
          placeholder="정확한 주소지를 입력해주세요."
        />
        <label htmlFor="day">촬영 날짜</label>
        <Input
          id="day"
          type="number"
          required
          placeholder="숫자만 입력 가능합니다. 예)20221212"
        />
        <label htmlFor="cont">설명</label>
        <Input
          id="cont"
          type="text"
          required
          placeholder="포토존에 대한 상세한 설명을 입력해주세요."
        />
        <BtnUpload>저장</BtnUpload>
      </Form>
    </>
  );
};

export default UploadPhotoZone;
