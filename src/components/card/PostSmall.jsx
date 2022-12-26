import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Post = styled.img`
  display: inline;
  width: 170px;
  height: 190px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  margin: 5px;
  margin-top: 0px;
  object-fit: cover;

  :nth-child(2n-1) {
    margin-left: 20px;
  }
`;

const PostSmall = ({ posts }) => {
  const navigate = useNavigate();

  const postDetailId = () => {
    navigate('/feed/feeddetail', {
      state: {
        id: `${posts.id}`,
      },
    });
  };
  return <Post src={posts.image} onClick={() => postDetailId()} />;
};

export default PostSmall;
