import Post from './Post';

const PostWrapper = ({ posts }) => {
  return (
    <>
      {posts.map((v) => (
        <Post key={v.id} posts={v} />
      ))}
    </>
  );
};

export default PostWrapper;
