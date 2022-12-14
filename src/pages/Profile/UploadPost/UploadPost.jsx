import { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import addPic from '../../../assets/icons/icon-photo-upload-white.svg';
import BtnUpload from '../../../components/button/BtnUpload';

const Wrap = styled.div`
  margin: 0 20px;
`;
const Input = styled.textarea`
  width: 100%;
  max-height: 400px;
  resize: none;
  border: none;

  &::placeholder {
    color: var(--light-gray);
  }
  &:focus {
    outline: none;
  }
`;
const PreviewImg = styled.img`
  width: 100%;
  max-height: 230px;
  margin: 18px 0;
  border-radius: 10px;
`;

const SubmitImg = styled.label`
  width: 36px;
  height: 36px;
  background-color: var(--black);
  border-radius: 50%;
  background-image: url(${addPic});
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

const UploadPost = () => {
  const [imgFile, setImgFile] = useState;
  const imgRef = useRef();
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = '1px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);

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
    <Wrap>
      <form action="submit">
        <div>
          <Input
            placeholder="게시글 입력하기..."
            ref={textRef}
            onInput={handleResizeHeight}
          />
          <PreviewImg src={imgFile || null} alt="" />
        </div>
        <BtnUpload type="submit">업로드</BtnUpload>
        <input
          id="photo"
          type="file"
          style={{ display: 'none' }}
          onChange={saveImgFile}
          ref={imgRef}
        />
        <SubmitImg htmlFor="photo" />
      </form>
    </Wrap>
  );
};

export default UploadPost;
