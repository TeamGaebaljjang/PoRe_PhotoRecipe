import { PostCard, PostImg, PostDate } from './postStyle';
import PostUserInfo from './PostUserInfo';
import PostIcon from './PostIcon';
import PostContent from './PostContent';

const Post = ({ posts }) => {
  return (
    <PostCard>
      <PostUserInfo posts={posts} />
      <PostImg
        style={posts.image ? { display: 'block' } : { display: 'none' }}
        src={posts.image}
        alt=""
      />
      <PostContent posts={posts} />
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
