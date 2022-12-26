import { useNavigate } from 'react-router-dom';
import { HeaderContainer, BackBtn, SearchInp } from './headerStyle';

const HeaderBSU = ({ checkInp }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <HeaderContainer>
      <BackBtn onClick={handleBack} />
      <form action="submit">
        <SearchInp
          type="text"
          placeholder="계정 검색"
          onChange={checkInp}
          onKeyDown={(e) => handleKey(e)}
        />
      </form>
    </HeaderContainer>
  );
};

export default HeaderBSU;
