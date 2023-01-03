import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Wrap = styled.ul`
  margin: 15px 0 0 15px;
  @media all and (min-width: 726px) {
    & {
      margin: 15px 5% 0;
    }
  }
`;
const PostWrap = styled.li`
  float: left;
`;

const Post = styled.img`
  display: inline-block;
  width: 170px;
  height: 190px;
  border: 1px solid ${(props) => props.theme.realBlack};
  border-radius: 10px;
  margin: 0 5px 5px;
  object-fit: cover;
`;

const PostSmall = ({ posts }) => {
  const navigate = useNavigate();
  const imgList = posts.image.split(',');

  const postDetailId = () => {
    navigate('/feed/feeddetail', {
      state: {
        id: `${posts.id}`,
      },
    });
  };
  return (
    <Wrap>
      <PostWrap>
        <Post src={imgList[0]} onClick={() => postDetailId()} />
      </PostWrap>
    </Wrap>
  );
};

export default PostSmall;
