import { useNavigate } from 'react-router-dom';
import {
  BtnWrapper,
  HeaderContainer,
  MoreBtn,
  SearchBtn,
  Title,
  BackBtn,
  UploadPostBtn,
  SearchInp,
} from './headerStyle';

const HeaderTest = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <HeaderContainer>
      <BackBtn onClick={handleBack} />
      <Title>테스트</Title>
      <SearchInp type="text" placeholder="계정 검색" />
      <BtnWrapper>
        <SearchBtn />
        <MoreBtn />
        <UploadPostBtn />
      </BtnWrapper>
    </HeaderContainer>
  );
};

export default HeaderTest;
