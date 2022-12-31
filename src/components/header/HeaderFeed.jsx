import { useNavigate } from 'react-router-dom';
import {
  BtnWrapper,
  HeaderFeedContainer,
  SearchBtn,
  Title,
} from './headerStyle';

const HeaderFeed = () => {
  const navigate = useNavigate();

  return (
    <HeaderFeedContainer>
      <Title>포레 피드</Title>
      <BtnWrapper>
        <SearchBtn onClick={() => navigate('/feed/search')} />
      </BtnWrapper>
    </HeaderFeedContainer>
  );
};

export default HeaderFeed;
