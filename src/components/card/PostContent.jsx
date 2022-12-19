import { PostCont, PostDate } from './postStyle';

const PostContent = ({ posts }) => {
  return (
    <>
      <PostCont>{posts.content}</PostCont>
      <PostDate>{posts.createdAt}</PostDate>
    </>
  );
};

export default PostContent;
