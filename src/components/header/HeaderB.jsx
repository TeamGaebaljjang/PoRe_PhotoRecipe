import { useNavigate } from 'react-router-dom';
import { HeaderContainer, BackBtn } from './headerStyle';

const HeaderB = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderContainer>
      <BackBtn onClick={handleBack} />
    </HeaderContainer>
  );
};

export default HeaderB;
