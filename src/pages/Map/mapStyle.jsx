import styled from 'styled-components';

export const Wrap = styled.div`
  height: calc(100vh - 60px);
  overflow: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 720px) {
    & {
      margin-left: 126px;
      height: 100vh;
    }
  }
  @media all and (min-width: 941px) {
    & {
      margin-left: 240px;
    }
  }
`;

export const MapCont = styled.div`
  position: relative;
  width: 390px;
  height: calc(100vh - 108px);
  overflow: hidden;
  @media all and (min-width: 720px) {
    & {
      width: 100vw;
      height: 100vh;
    }
  }
`;

export const ModalWrap = styled.article`
  width: 390px;
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 24px;
  padding-right: 24px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 720px) {
    & {
      width: 100vw;
      bottom: 80px;
    }
  }
`;

export const MapCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  border-radius: 15px;
  margin-left: 24px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.25);
`;

export const SpotName = styled.p`
  margin: 10px 20px;
`;

export const SpotImg = styled.img`
  width: 300px;
  height: 150px;
  object-fit: cover;
`;

export const SpotTxt = styled.p`
  font-size: 14px;
  margin: 20px;
  text-align: center;

  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;
