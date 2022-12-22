import { useNavigate } from 'react-router-dom';
import { HeaderContainer, BackBtn, SearchInp } from './headerStyle';

const HeaderBSM = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderContainer>
      <BackBtn onClick={handleBack} />
      <SearchInp type="text" placeholder="지역 검색" />
    </HeaderContainer>
  );
};

export default HeaderBSM;
