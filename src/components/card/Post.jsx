import { useNavigate } from 'react-router-dom';
import { PostCard, PostImg, PostDate, ImgWrap } from './postStyle';
import PostUserInfo from './PostUserInfo';
import PostIcon from './PostIcon';
import PostContent from './PostContent';
import defaultImg from '../../assets/icons/basic-post-default.svg';

const Post = ({ posts }) => {
  const navigate = useNavigate();
  const postDetailId = () => {
    navigate('/feed/feeddetail', {
      state: {
        id: `${posts.id}`,
      },
    });
  };

  const imgList = posts.image?.split(',').filter((value) => value !== '');

  const onErrorImg = (e) => {
    // eslint-disable-next-line no-param-reassign
    e.target.src = defaultImg;
  };

  return (
    <PostCard>
      <PostUserInfo posts={posts} />
      <ImgWrap className={posts.image?.includes(',') ? 'scroll' : 'no-scroll'}>
        {imgList?.map((v) => (
          <PostImg
            key={crypto.randomUUID()}
            style={posts.image ? { display: 'block' } : { display: 'none' }}
            src={v}
            alt=""
            onClick={() => postDetailId()}
            onError={onErrorImg}
          />
        ))}
      </ImgWrap>
      <PostContent posts={posts} postDetailId={postDetailId} />
      <PostIcon posts={posts} postDetailId={postDetailId} />
      <PostDate>
        {posts.createdAt.substring(0, 4)}년&nbsp;
        {posts.createdAt.substring(5, 7)}월&nbsp;
        {posts.createdAt.substring(8, 10)}일
      </PostDate>
    </PostCard>
  );
};

export default Post;
