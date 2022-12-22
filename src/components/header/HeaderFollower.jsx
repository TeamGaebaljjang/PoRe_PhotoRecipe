import { useNavigate } from 'react-router-dom';
import { HeaderContainer, Title, BackBtn } from './headerStyle';

const HeaderFollower = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderContainer>
      <BackBtn onClick={handleBack} />
      <Title>팔로워</Title>
    </HeaderContainer>
  );
};

export default HeaderFollower;
