import { Thumbnail } from './homeStyle';

const HomeThumbnail = ({ props }) => {
  return (
    <>
      {props.map((thumbnail) => (
        <Thumbnail key={thumbnail.id} src={thumbnail.itemImage} alt="" />
      ))}
    </>
  );
};

export default HomeThumbnail;
