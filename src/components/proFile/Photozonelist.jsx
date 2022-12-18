import { Container, Photo, Region, List } from './photoZoneListStyle';

const PhotoZone = () => {
  return (
    <Container>
      <Photo />
      <Region>성수</Region>
    </Container>
  );
};

const PhotoZoneList = () => {
  return (
    <List>
      <PhotoZone />
      <PhotoZone />
      <PhotoZone />
      <PhotoZone />
      <PhotoZone />
    </List>
  );
};

export default PhotoZoneList;
