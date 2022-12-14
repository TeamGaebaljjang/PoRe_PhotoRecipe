import back from '../../assets/icons/icon-arrow-left.svg';
import { TopBar, BackBtn, SearchInp } from './FeedInputStyle';

const FeedInput = () => {
  return (
    <TopBar>
      <BackBtn src={back} alt="뒤로가기" />
      <SearchInp type="text" placeholder="계정 검색" />
    </TopBar>
  );
};

export default FeedInput;
