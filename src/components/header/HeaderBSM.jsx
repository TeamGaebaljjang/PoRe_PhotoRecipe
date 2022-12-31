import { HeaderContainer, SearchInp } from './headerStyle';

const HeaderBSM = ({ text, onChange }) => {
  return (
    <HeaderContainer style={{ justifyContent: 'center' }}>
      <SearchInp
        type="text"
        className="map-searchBar"
        placeholder="지역을 검색해보세요!"
        value={text}
        onChange={onChange}
      />
    </HeaderContainer>
  );
};

export default HeaderBSM;
