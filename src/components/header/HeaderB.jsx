import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderContainer, BackBtn } from './headerStyle';

const HeaderB = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleBack = () => {
    if (location.pathname === '/signup') {
      navigate('/login');
    }
    if (location.pathname === '/signup/setprofile') {
      navigate('/signup');
    }
  };
  return (
    <HeaderContainer>
      <BackBtn onClick={handleBack} />
    </HeaderContainer>
  );
};

export default HeaderB;
