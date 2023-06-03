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
  PhotoWrap,
  Button,
} from '../../Profile/UploadPost/uploadPostStyle';
import { api, urlApi } from '../../../axiosInstance';
import { BASE_URL } from '../../../axiosInstance/constants';

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

  // 게시글 수정 API
  const uploadPost = async () => {
    try {
      const body = {
        post: {
          content: cont,
          image: imgFile,
        },
      };
      const res = await api.put(`/post/${posts.id}`, JSON.stringify(body));
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
              ref={textRef}
              onInput={handleResizeHeight}
              onChange={(e) => setCont(e.target.value)}
              placeholder="게시글 입력하기..."
              defaultValue={posts.content}
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
