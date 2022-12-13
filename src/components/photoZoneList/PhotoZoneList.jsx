import styled from 'styled-components';

const PhotoZone = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 106px;

  p {
    margin-top: 7px;
    font-size: 16px;
    font-weight: 500;
  }
`;

const Photo = styled.div`
  width: 80px;
  height: 80px;
  background-color: var(--gray);
  border-radius: 50%;
`;

const OnePhotoZone = () => {
  return (
    <PhotoZone>
      <Photo />
      <p>성수</p>
    </PhotoZone>
  );
};

const List = styled.div`
  display: flex;
  margin: 52px 20px 0px;
  gap: 20px;
  height: 128px;
  overflow: auto;
  border-bottom: 1px var(--gray) solid;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const PhotoZoneList = () => {
  return (
    <List>
      <OnePhotoZone style={{ display: 'inline' }} />
      <OnePhotoZone />
      <OnePhotoZone />
      <OnePhotoZone />
      <OnePhotoZone />
    </List>
  );
};

export default PhotoZoneList;
