import Post from './Post';
import PostSmall from './PostSmall';

const PostWrapper = ({ posts, view }) => {
  return (
    <div>
      {posts &&
        posts.map((v) =>
          view ? (
            <PostSmall key={v.id} posts={v} />
          ) : (
            <Post key={v.id} posts={v} />
          ),
        )}
    </div>
  );
};

export default PostWrapper;
