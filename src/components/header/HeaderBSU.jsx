import { useNavigate } from 'react-router-dom';
import { HeaderContainer, BackBtn, SearchInp } from './headerStyle';

const HeaderBSU = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      <BackBtn onClick={handleBack} />
      <form action="submit">
        <SearchInp type="text" placeholder="계정 검색" />
      </form>
    </HeaderContainer>
  );
};

export default HeaderBSU;
