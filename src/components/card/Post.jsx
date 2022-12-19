// import postImg from '../../assets/img/main-thumbnail.jpeg';
import { PostCard, PostImg } from './postStyle';
import PostUserInfo from './PostUserInfo';
import PostIcon from './PostIcon';
import PostContent from './PostContent';

const Post = ({ posts }) => {
  return (
    <PostCard>
      <PostUserInfo posts={posts} />
      <PostImg src={posts.image} alt="" />
      <PostIcon posts={posts} />
      <PostContent posts={posts} />
    </PostCard>
  );
};

export default Post;
