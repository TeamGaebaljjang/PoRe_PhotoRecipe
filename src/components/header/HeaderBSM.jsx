import { useState } from 'react';
import { HeaderContainer, BackBtn, SearchInp } from './headerStyle';

const HeaderBSM = () => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e.target.value);
    console.log('it works!');
  };
  return (
    <HeaderContainer>
      <BackBtn />
      <SearchInp
        type="text"
        placeholder="지역 검색"
        value={text}
        onChange={onChange}
      />
    </HeaderContainer>
  );
};

export default HeaderBSM;
