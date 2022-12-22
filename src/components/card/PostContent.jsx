import { PostCont } from './postStyle';

const PostContent = ({ posts }) => {
  return <PostCont>{posts.content}</PostCont>;
};

export default PostContent;
