import { useCallback, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BtnUpload from '../../../components/button/BtnUpload';
import { Input, Form, TextInput } from '../../../components/input/Input';
import HeaderB from '../../../components/header/HeaderB';
import { PreviewImg, SubmitImg } from './uploadPhotoZoneStyle';

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
  const URL = 'https://mandarin.api.weniv.co.kr';

  // 패치
  const uploadPhoto = () => {
    const authToken = localStorage.getItem('token');
    const body = {
      product: {
        itemName: address,
        price: Number(date),
        link: desc,
        itemImage: imgFile,
      },
    };
    fetch(`${URL}/product`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-type': 'application/json',
      },
    }).then(
      // (res) => console.log(res.json())
      navigate(`/profile`),
    );
  };

  // 엑시오스 왜 안되는거지,,
  // const uploadPhoto = async () => {
  //   try {
  //     const authToken = localStorage.getItem('token');
  //     const res = await axios.post(`${URL}/product`, {
  //       body: {
  //         product: {
  //           itemName: address,
  //           price: Number(date),
  //           link: desc,
  //           itemImage: imgFile,
  //         },
  //       },
  //       headers: {
  //         Authorization: `Bearer ${authToken}`,
  //         'Content-type': 'application/json',
  //       },
  //     });
  //     console.log(res);
  //     navigate(`/profile`);
  //   } catch (error) {
  //     const authToken = localStorage.getItem('token');
  //     console.log(authToken);
  //     console.log('에러입니다');
  //   }
  // };

  const imgApi = async () => {
    try {
      const file = imgRef.current.files[0];
      const formData = new FormData();
      formData.append('image', file);
      const res = await axios.post(`${URL}/image/uploadfile`, formData);
      const fileName = res.data.filename;
      setImgFile(`${URL}/${fileName}`);
    } catch (error) {
      console.log('에러입니다');
    }
  };
  return (
    <>
      <HeaderB />
      <Form action="submit">
        <label htmlFor="photo">포토존 등록</label>
        <SubmitImg htmlFor="photo" />
        <PreviewImg src={imgFile || null} alt="" />
        <Input
          id="photo"
          type="file"
          style={{ display: 'none' }}
          onChange={() => {
            imgApi();
          }}
          ref={imgRef}
        />
        <label htmlFor="address">포토존 주소</label>
        <Input
          id="address"
          type="text"
          required
          onChange={(e) => setAddress(e.target.value)}
          placeholder="정확한 주소지를 입력해주세요."
        />
        <label htmlFor="day">촬영 날짜</label>
        <Input
          id="day"
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
