import styled from 'styled-components';
import search from '../../assets/icons/icon-search.svg';

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

export const Search = styled.button`
  position: absolute;
  top: 12px;
  right: 20px;
`;

const FeedHeader = () => {
  return (
    <TopBar>
      <Title>포레 피드</Title>
      <Search type="button">
        <img src={search} alt="검색" />
      </Search>
    </TopBar>
  );
};

export default FeedHeader;
