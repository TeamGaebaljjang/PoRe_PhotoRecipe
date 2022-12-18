import { useCallback, useRef, useState } from 'react';
import BtnUpload from '../../../components/button/BtnUpload';
import HeaderB from '../../../components/header/HeaderB';
import { Input, PreviewImg, SubmitImg, Wrap } from './uploadPostStyle';

const UploadPost = () => {
  const [imgFile, setImgFile] = useState('');
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
    <>
      <HeaderB />
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
    </>
  );
};

export default UploadPost;
