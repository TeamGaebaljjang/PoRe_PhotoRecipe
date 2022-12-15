import postImg from '../../assets/img/main-thumbnail.jpeg';
import { PostCard, PostImg } from './PostStyle';
import PostUserInfo from './PostUserInfo';
import PostIcon from './PostIcon';
import PostContent from './PostContent';

const Post = () => {
  return (
    <PostCard>
      <PostUserInfo />
      <PostImg src={postImg} alt="" />
      <PostIcon />
      <PostContent />
    </PostCard>
  );
};

export default Post;
