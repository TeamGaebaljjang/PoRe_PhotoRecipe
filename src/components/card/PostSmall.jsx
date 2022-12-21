import styled from 'styled-components';

const Post = styled.img`
  display: inline;
  width: 175px;
  height: 190px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  margin-left: 13px;
  margin-bottom: 10px;
  object-fit: cover;
`;

const PostSmall = ({ posts }) => {
  return <Post src={posts.image} />;
};

export default PostSmall;
