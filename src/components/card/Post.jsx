import { useState } from 'react';
import profile from '../../assets/icons/basic-profile-round.svg';
import more from '../../assets/icons/icon-more-vertical-gray.svg';
import postImg from '../../assets/img/main-thumbnail.jpeg';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import chat from '../../assets/icons/icon-chat.svg';
import * as styled from './PostStyle';

const Post = () => {
  const [like, setLike] = useState(false);

  const handleHeart = () => {
    if (like ? setLike(false) : setLike(true));
  };

  return (
    <styled.PostCard>
      <styled.User>
        <styled.UserProfile src={profile} alt="" />
        <styled.UserInfo>
          <styled.UserName>포토레시피</styled.UserName>
          <styled.UserId>@ PoRe_PhotoRecipe</styled.UserId>
        </styled.UserInfo>
        <styled.More src={more} alt="" />
      </styled.User>

      <div>
        <styled.PostImg src={postImg} alt="" />

        <styled.Icon>
          <styled.IconImg
            src={like ? heartOn : heartOff}
            alt="좋아요"
            onClick={handleHeart}
          />
          <styled.IconCount>0</styled.IconCount>

          <styled.IconImg src={chat} alt="" />
          <styled.IconCount>0</styled.IconCount>
        </styled.Icon>

        <styled.PostCont>
          포토레시피가 추천하는 기억에 남을 크리스마스를 위한 근사한 포토 스팟을
          알려드립니다🎄 이 곳만은 꼭! 가서 멋진 사진을 찍고 공유해주세요🎅
        </styled.PostCont>
        <styled.PostDate>2022년 12월 13일</styled.PostDate>
      </div>
    </styled.PostCard>
  );
};

export default Post;
