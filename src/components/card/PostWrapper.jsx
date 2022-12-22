import Post from './Post';
import PostSmall from './PostSmall';

const PostWrapper = ({ posts, view }) => {
  return (
    <>
      {posts.map((v) =>
        view ? (
          <PostSmall key={v.id} posts={v} />
        ) : (
          <Post key={v.id} posts={v} />
        ),
      )}
    </>
  );
};

export default PostWrapper;
