import styled from 'styled-components';
import PhotoZone from '../card/Photozone';

import Test from '../../assets/img/main-thumbnail.jpeg';

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 390px;
  height: calc(100vh - (100vh / 2.6));
  background-color: white;
  padding-bottom: 80px;
  border-radius: 20px 20px 0px 0px;
  box-shadow: 0 0 10px var(--deep-gray);
  overflow: hidden;

  .scroll {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    height: calc(100% - 60px);
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .region {
    width: 390px;
    height: 50px;
    margin-bottom: 10px;
    border-bottom: 1px var(--light-gray) solid;
  }
  .region p {
    padding: 15px 30px;
  }
`;

const PhotoZoneModal = () => {
  return (
    <Container>
      <div className="region">
        <p>my broken mental,,,</p>
      </div>

      <div className="scroll">
        <PhotoZone src={Test} />
        <PhotoZone />
        <PhotoZone />
        <PhotoZone />
      </div>
    </Container>
  );
};

export default PhotoZoneModal;
