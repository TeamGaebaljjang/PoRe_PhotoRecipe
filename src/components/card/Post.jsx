import { useNavigate } from 'react-router-dom';
import { PostCard, PostImg, PostDate, ImgWrap } from './postStyle';
import PostUserInfo from './PostUserInfo';
import PostIcon from './PostIcon';
import PostContent from './PostContent';

const Post = ({ posts }) => {
  const navigate = useNavigate();
  const postDetailId = () => {
    navigate('/feed/feeddetail', {
      state: {
        id: `${posts.id}`,
      },
    });
  };
  const imgList = posts.image.split(',');

  return (
    <PostCard>
      <PostUserInfo posts={posts} />
      <ImgWrap>
        {imgList.map((v) => (
          <PostImg
            style={posts.image ? { display: 'block' } : { display: 'none' }}
            src={v}
            alt=""
            onClick={() => postDetailId()}
          />
        ))}
      </ImgWrap>
      <PostContent posts={posts} postDetailId={postDetailId} />
      <PostIcon posts={posts} />
      <PostDate>
        {posts.createdAt.substring(0, 4)}년&nbsp;
        {posts.createdAt.substring(5, 7)}월&nbsp;
        {posts.createdAt.substring(8, 10)}일
      </PostDate>
    </PostCard>
  );
};

export default Post;
