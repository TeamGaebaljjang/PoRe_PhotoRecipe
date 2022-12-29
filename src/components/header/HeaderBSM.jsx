import { HeaderContainer, SearchInp } from './headerStyle';

const HeaderBSM = ({ text, onChange }) => {
  return (
    <HeaderContainer>
      <SearchInp
        type="text"
        placeholder="지역 검색"
        value={text}
        onChange={onChange}
        style={{ width: '350px' }}
      />
    </HeaderContainer>
  );
};

export default HeaderBSM;
