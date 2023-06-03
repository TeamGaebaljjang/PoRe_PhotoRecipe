import { useCallback, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BtnUpload from '../../../components/button/BtnUpload';
import { Input, Form, TextInput } from '../../../components/input/Input';
import HeaderB from '../../../components/header/HeaderB';
import {
  PreviewImg,
  SubmitImg,
  PhotoWrap,
  Button,
} from '../../Profile/UploadPhotoZone/uploadPhotoZoneStyle';
import defaultImg from '../../../assets/icons/basic-post-default.svg';
import { api, urlApi } from '../../../axiosInstance';
import { BASE_URL } from '../../../axiosInstance/constants';

const UploadPhotoZone = () => {
  const location = useLocation();
  const getProps = { ...location.state };
  const navigate = useNavigate();
  const { props } = getProps.props;
  const [imgFile, setImgFile] = useState(props.itemImage);
  const [address, setAddress] = useState(props.itemName);
  const [date, setDate] = useState(props.price);
  const [desc, setDesc] = useState(props.link);
  const imgRef = useRef();
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = '1px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

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
      const res = await api.put(`/product/${props.id}`, JSON.stringify(body));
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

  const onErrorImg = (e) => {
    // eslint-disable-next-line no-param-reassign
    e.target.src = defaultImg;
  };

  return (
    <>
      <HeaderB />
      <Form action="submit">
        <label htmlFor="photo">포토존 수정</label>
        <PhotoWrap>
          {imgFile ? null : <SubmitImg htmlFor="photo" />}
          <PreviewImg src={imgFile || null} alt="" onError={onErrorImg} />
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
          defaultValue={props.itemName}
        />
        <label htmlFor="date">촬영 날짜</label>
        <Input
          id="date"
          type="number"
          required
          onChange={(e) => setDate(e.target.value)}
          placeholder="숫자만 입력 가능합니다. 예)20221212"
          defaultValue={props.price}
        />
        <label htmlFor="cont">설명</label>
        <TextInput
          id="cont"
          type="text"
          required
          onChange={(e) => setDesc(e.target.value)}
          placeholder="포토존에 대한 상세한 설명을 입력해주세요."
          defaultValue={props.link}
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
