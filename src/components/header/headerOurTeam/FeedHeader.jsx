import styled from 'styled-components';
// import { useNavigate } from 'react-router-dom';
import searchIcon from '../../assets/icons/icon-search.svg';
// import Search from '../../pages/Search/Search';

export const TopBar = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid var(--light-gray);
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600px;
  margin-left: 20px;
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 20px;
`;

const FeedHeader = () => {
  // const navigate = useNavigate();
  // const navagateToPurchase = () => {
  //   navigate('/search');
  // };

  return (
    <TopBar>
      <Title>포레 피드</Title>
      <SearchBtn type="button">
        <img src={searchIcon} alt="검색" />
      </SearchBtn>
    </TopBar>
  );
};

export default FeedHeader;
