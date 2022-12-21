import { useNavigate } from 'react-router-dom';
import {
  BtnWrapper,
  HeaderContainer,
  MoreBtn,
  Title,
  BackBtn,
} from './headerStyle';

const HeaderTest = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderContainer style={{ zIndex: '5' }}>
      <BackBtn onClick={handleBack} />
      <Title>상대닉네임</Title>
      <BtnWrapper>
        <MoreBtn />
      </BtnWrapper>
    </HeaderContainer>
  );
};

export default HeaderTest;
