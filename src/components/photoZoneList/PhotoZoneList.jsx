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
  div {
    width: 80px;
    height: 80px;
    background-color: var(--gray);
    border-radius: 50%;
  }
`;

const OnePhotoZone = () => {
  return (
    <PhotoZone>
      <div />
      <p>성수</p>
    </PhotoZone>
  );
};

const List = styled.div`
  display: flex;
  margin-top: 52px;
  margin-left: 20px;
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
      <OnePhotoZone />
      <OnePhotoZone />
      <OnePhotoZone />
      <OnePhotoZone />
      <OnePhotoZone />
    </List>
  );
};

export default PhotoZoneList;
