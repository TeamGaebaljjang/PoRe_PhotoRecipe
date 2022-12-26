import { Thumbnail } from './homeStyle';

const HomeThumbnail = ({ props }) => {
  return (
    <>
      {props.map((thumbnail) => (
        <Thumbnail key={crypto.randomUUID()} src={thumbnail.itemImage} alt="" />
      ))}
    </>
  );
};

export default HomeThumbnail;
