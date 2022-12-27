import axios from 'axios';
import { useState, useCallback, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BtnUpload from '../../../components/button/BtnUpload';
import HeaderB from '../../../components/header/HeaderB';
import {
  Input,
  PreviewImg,
  SubmitImg,
  SubmitImgWrap,
  Wrap,
} from '../../Profile/UploadPost/uploadPostStyle';

const EditPostCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const getPosts = { ...location.state };
  const { posts } = getPosts.posts;

  const [imgFile, setImgFile] = useState(posts.image);
  const [cont, setCont] = useState(posts.content);
  const imgRef = useRef();
  const textRef = useRef();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = '1px';
    textRef.current.style.height = `${textRef.current.scrollHeight}px`;
  }, []);
  const URL = 'https://mandarin.api.weniv.co.kr';

  // 게시글 수정 API
  const uploadPost = async () => {
    try {
      const authToken = localStorage.getItem('token');
      const body = {
        post: {
          content: cont,
          image: imgFile,
        },
      };
      const res = await axios.put(
        `${URL}/post/${posts.id}`,
        JSON.stringify(body),
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        },
      );
      console.log(res);
      navigate(`/profile`);
    } catch (error) {
      console.log('에러입니다');
    }
  };

  const imgShow = imgFile.split(',').filter((value) => value !== '');
  console.log(imgShow);
  const imgApi = async () => {
    try {
      const file = imgRef.current.files[0];
      const formData = new FormData();
      formData.append('image', file);
      const res = await axios.post(`${URL}/image/uploadfile`, formData);
      const fileName = res.data.filename;
      if (imgShow.length < 4) {
        setImgFile(`${imgFile},${URL}/${fileName}`);
        console.log(imgFile);
      } else {
        console.log('no - sir');
      }
    } catch (error) {
      console.log('에러입니다');
    }
  };

  return (
    <>
      <HeaderB />
      <Wrap>
        <form action="submit">
          <div>
            <Input
              ref={textRef}
              onInput={handleResizeHeight}
              onChange={(e) => setCont(e.target.value)}
              placeholder="게시글 입력하기..."
              defaultValue={posts.content}
            />
            <SubmitImgWrap>
              {imgShow.map((img) => (
                <PreviewImg
                  key={crypto.randomUUID()}
                  src={img || null}
                  alt=""
                />
              ))}
            </SubmitImgWrap>
          </div>
          <BtnUpload type="button" onClick={uploadPost}>
            저장
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

export default EditPostCard;
