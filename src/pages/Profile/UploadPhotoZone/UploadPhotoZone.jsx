import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnUpload from '../../../components/button/BtnUpload';
import { Input, Form, TextInput } from '../../../components/input/Input';
import HeaderB from '../../../components/header/HeaderB';
import {
  PreviewImg,
  SubmitImg,
  Button,
  PhotoWrap,
} from './uploadPhotoZoneStyle';
import { api, urlApi } from '../../../axiosInstance';
import { BASE_URL } from '../../../axiosInstance/constants';

const UploadPhotoZone = () => {
  const [imgFile, setImgFile] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [desc, setDesc] = useState('');
  const imgRef = useRef();
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = '1px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);
  const navigate = useNavigate();

  const uploadPhoto = async () => {
    try {
      const body = {
        product: {
          itemName: address,
          price: Number(date),
          link: desc,
          itemImage: imgFile,
        },
      };
      const res = await api.post(`/product`, JSON.stringify(body));
      if (res) {
        navigate(`/profile`);
      }
    } catch (error) {
      console.log(error.res);
    }
  };

  const imgApi = async () => {
    try {
      const file = imgRef.current.files[0];
      const formData = new FormData();
      formData.append('image', file);
      const res = await urlApi.post(`/image/uploadfile`, formData);
      const fileName = res.data.filename;
      setImgFile(`${BASE_URL}/${fileName}`);
    } catch (error) {
      console.log(error.res);
    }
  };
  return (
    <>
      <HeaderB />
      <Form action="submit">
        <label htmlFor="photo">포토존 등록</label>
        <PhotoWrap>
          {imgFile ? null : <SubmitImg htmlFor="photo" />}
          <PreviewImg src={imgFile || null} alt="" />
          {imgFile ? (
            <Button
              onClick={() => {
                setImgFile('');
              }}
            />
          ) : null}
          <Input
            id="photo"
            type="file"
            style={{ display: 'none' }}
            onChange={() => {
              imgApi();
            }}
            ref={imgRef}
          />
        </PhotoWrap>
        <label htmlFor="address">포토존 주소</label>
        <Input
          id="address"
          type="text"
          required
          onChange={(e) => setAddress(e.target.value)}
          placeholder="정확한 주소지를 입력해주세요."
        />
        <label htmlFor="date">촬영 날짜</label>
        <Input
          id="date"
          type="number"
          required
          onChange={(e) => setDate(e.target.value)}
          placeholder="숫자만 입력 가능합니다. 예)20221212"
        />
        <label htmlFor="cont">설명</label>
        <TextInput
          id="cont"
          type="text"
          required
          onChange={(e) => setDesc(e.target.value)}
          placeholder="포토존에 대한 상세한 설명을 입력해주세요."
          ref={textRef}
          onInput={handleResizeHeight}
          rows="1"
        />
        <BtnUpload type="button" onClick={uploadPhoto}>
          저장
        </BtnUpload>
      </Form>
    </>
  );
};

export default UploadPhotoZone;
