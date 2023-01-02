import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// const PostSmallWrap = styled.div`
//   display: flex;
//   /* grid-template-columns: repeat(2, 1fr); */
//   border: 1px solid var(--gray);
// `;

const Post = styled.img`
  /* display: inline-block;
  width: 170px;
  height: 190px;
  border: 1px solid var(--gray);
  border-radius: 10px;
  margin: 0 5px 5px;
  object-fit: cover; */
  display: inline-block;
  width: 170px;
  height: 190px;
  border: 1px solid ${(props) => props.theme.postBorder};
  border-radius: 10px;
  margin: 0 5px 5px;
  object-fit: cover;
  /* :nth-child(2n-1) {
    margin-left: 20px;
  } */
  @media all and (min-width: 720px) {
    & {
      /* margin-top: 20px; */
      /* width: 100%; */
    }
    :nth-child(2n-1) {
      /* margin-left: 50px; */
    }
  }
  @media all and (min-width: 941px) {
    & {
      /* min-height: 250px; */
    }
  }
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
  return <Post src={imgList[0]} onClick={() => postDetailId()} />;
};

export default PostSmall;
