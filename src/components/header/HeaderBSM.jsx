import { HeaderContainer, SearchInp } from './headerStyle';

const HeaderBSM = ({ text, onChange, onKeyPress }) => {
  return (
    <HeaderContainer style={{ justifyContent: 'center' }}>
      <SearchInp
        type="text"
        className="map-searchBar"
        placeholder="지역을 검색해보세요!"
        value={text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </HeaderContainer>
  );
};

export default HeaderBSM;
