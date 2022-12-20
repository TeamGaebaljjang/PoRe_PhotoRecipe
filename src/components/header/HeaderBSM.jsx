import { HeaderContainer, BackBtn, SearchInp } from './headerStyle';

const HeaderBSM = ({ text, onChange, onKeyPress }) => {
  return (
    <HeaderContainer>
      <BackBtn />
      <SearchInp
        type="text"
        placeholder="지역 검색"
        value={text}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </HeaderContainer>
  );
};

export default HeaderBSM;
