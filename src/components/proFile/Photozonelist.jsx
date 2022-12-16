import * as styled from './photozonelistStyle';

const PhotoZone = () => {
  return (
    <styled.Container>
      <styled.Photo />
      <styled.Region>성수</styled.Region>
    </styled.Container>
  );
};

const PhotoZoneList = () => {
  return (
    <styled.List>
      <PhotoZone />
      <PhotoZone />
      <PhotoZone />
      <PhotoZone />
      <PhotoZone />
    </styled.List>
  );
};

export default PhotoZoneList;
