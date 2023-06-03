import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BtnUpload from '../../../components/button/BtnUpload';
import HeaderB from '../../../components/header/HeaderB';
import {
  Input,
  PreviewImg,
  SubmitImg,
  SubmitImgWrap,
  Wrap,
  PhotoWrap,
  Button,
} from './uploadPostStyle';
import { api, urlApi } from '../../../axiosInstance';
import { BASE_URL } from '../../../axiosInstance/constants';

const UploadPost = () => {
  const [imgFile, setImgFile] = useState('');
  const [cont, setCont] = useState('');
  const imgRef = useRef();
  const textRef = useRef();
  const navigate = useNavigate();

  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = '1px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

  const uploadPost = async () => {
    try {
      const body = {
        post: {
          content: cont,
          image: imgFile,
        },
      };
      const res = await api.post(`/post`, JSON.stringify(body));
      if (res) {
        navigate(`/profile`);
      }
    } catch (error) {
      console.log(error.res);
    }
  };
  const imgShow = imgFile.split(',').filter((value) => value !== '');

  const imgApi = async () => {
    try {
      const file = imgRef.current.files[0];
      const formData = new FormData();
      formData.append('image', file);
      const res = await urlApi.post(`/image/uploadfile`, formData);
      const fileName = res.data.filename;
      if (imgShow.length < 3) {
        imgShow.push(`${BASE_URL}/${fileName}`);
        setImgFile(imgShow.join(','));
      } else {
        // eslint-disable-next-line no-alert
        alert('이미지는 3장까지만 업로드 가능합니다.');
      }
    } catch (error) {
      console.log(error.res);
    }
  };

  return (
    <>
      <HeaderB />
      <Wrap>
        <form action="submit">
          <div>
            <Input
              placeholder="게시글 입력하기..."
              ref={textRef}
              onInput={handleResizeHeight}
              onChange={(e) => setCont(e.target.value)}
            />
            <SubmitImgWrap>
              {imgShow.map((img, i) => (
                <PhotoWrap>
                  <PreviewImg
                    key={crypto.randomUUID()}
                    src={img || null}
                    alt=""
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      imgShow.splice(i, 1);
                      setImgFile(imgShow.join(','));
                    }}
                  />
                </PhotoWrap>
              ))}
            </SubmitImgWrap>
          </div>
          <BtnUpload type="button" onClick={uploadPost}>
            업로드
          </BtnUpload>
          <input
            id="photo"
            type="file"
            style={{ display: 'none' }}
            onChange={() => {
              imgApi();
            }}
            ref={imgRef}
          />
          <SubmitImg htmlFor="photo" />
        </form>
      </Wrap>
    </>
  );
};

export default UploadPost;
