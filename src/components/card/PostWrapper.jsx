import Post from './Post';

const PostWrapper = ({ posts }) => {
  console.log(posts);
  return (
    <>
      {posts.map((v) => (
        <Post key={v.id} posts={v} />
      ))}
    </>
  );
};

export default PostWrapper;
