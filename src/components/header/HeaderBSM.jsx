import { HeaderContainer, SearchInp } from './headerStyle';

const HeaderBSM = ({ text, onChange, onKeyPress }) => {
  return (
    <HeaderContainer>
      <SearchInp
        type="text"
        placeholder="지역 검색"
        value={text}
        onChange={onChange}
        onKeyPress={onKeyPress}
        style={{ width: '350px' }}
      />
    </HeaderContainer>
  );
};

export default HeaderBSM;
