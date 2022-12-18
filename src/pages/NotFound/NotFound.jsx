import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import error from '../../assets/icons/logo-error.svg';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--black);
  color: white;
`;

const ErrorMsg = styled.p`
  margin: 50px 0 20px;
`;

const HomeBtn = styled.button`
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: 50px;
  color: white;
`;

const NotFound = () => {
  const navigate = useNavigate();
  const buttonHandler = () => {
    navigate(`/home`);
  };
  return (
    <Wrap>
      <img src={error} alt="404error" />
      <ErrorMsg>요청하신 페이지를 찾을 수 없어요 :(</ErrorMsg>
      <HomeBtn type="button" onClick={buttonHandler}>
        홈으로
      </HomeBtn>
    </Wrap>
  );
};

export default NotFound;
