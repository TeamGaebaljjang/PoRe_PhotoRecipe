import { useState } from 'react';
import { Icon, IconImg, IconCount } from './postStyle';
import heartOn from '../../assets/icons/icon-heart-on.svg';
import heartOff from '../../assets/icons/icon-heart-off.svg';
import chat from '../../assets/icons/icon-chat.svg';

const PostIcon = ({ posts }) => {
  const [like, setLike] = useState(false);

  const handleHeart = () => {
    if (like ? setLike(false) : setLike(true));
  };
  return (
    <Icon>
      <IconImg
        src={like ? heartOn : heartOff}
        alt="좋아요"
        onClick={handleHeart}
      />
      <IconCount>{posts.heartCount}</IconCount>

      <IconImg src={chat} alt="" />
      <IconCount>{posts.commentCount}</IconCount>
    </Icon>
  );
};

export default PostIcon;
