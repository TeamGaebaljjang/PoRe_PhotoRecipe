import HeaderB from '../../../components/header/HeaderB';
import PostUserInfo from '../../../components/card/PostUserInfo';
import { PostCard, PostImg } from '../../../components/card/postStyle';
import postImg from '../../../assets/img/main-thumbnail.jpeg';

const PhotoZoneCard = () => {
  return (
    <>
      <HeaderB />
      <PostCard>
        <PostUserInfo />
        <PostImg src={postImg} alt="" />
      </PostCard>
    </>
  );
};

export default PhotoZoneCard;
