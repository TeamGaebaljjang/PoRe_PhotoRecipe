import { useNavigate } from 'react-router-dom';
import { BtnWrapper, HeaderContainer, SearchBtn, Title } from './headerStyle';

const HeaderFeed = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Title>포레 피드</Title>
      <BtnWrapper>
        <SearchBtn onClick={() => navigate('/feed/search')} />
      </BtnWrapper>
    </HeaderContainer>
  );
};

export default HeaderFeed;
