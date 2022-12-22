import { PostCont } from './postStyle';

const PostContent = ({ posts, postDetailId }) => {
  return <PostCont onClick={postDetailId}>{posts.content}</PostCont>;
};

export default PostContent;
