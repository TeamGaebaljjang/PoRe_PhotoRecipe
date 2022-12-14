import styled from 'styled-components';

export const Img = styled.div`
  width: 90px;
  height: 90px;
  margin-top: 20px;
  margin-left: 38px;
  background: var(--gray) url(${(props) => props.src}) no-repeat center/ cover;
  box-shadow: 1px 1px 4px var(--light-gray);
  @media all and (min-width: 720px) {
    & {
      width: 120px;
      height: 120px;
      margin-left: 48px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      margin-left: 100px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 24px;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  margin-left: 38px;
  @media all and (min-width: 720px) {
    & {
      margin-left: 50px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      margin-left: 100px;
    }
  }
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  @media all and (min-width: 720px) {
    & {
      font-size: 26px;
      margin-bottom: 12px;
    }
  }
`;

export const Follow = styled.div`
  margin-top: -6px;
`;

export const Follower = styled.button`
  padding-right: 8px;
  border-right: 2px solid ${(props) => props.theme.button};
  font-size: 14px;
  color: ${(props) => props.theme.color};

  @media all and (min-width: 720px) {
    & {
      font-size: 16px;
      padding-right: 10px;
    }
  }
`;

export const Following = styled.button`
  padding-left: 8px;
  font-size: 14px;
  color: ${(props) => props.theme.color};

  @media all and (min-width: 720px) {
    & {
      font-size: 16px;
      padding-left: 10px;
    }
  }
`;

export const AddPhotoZone = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 120px;
  height: 40px;
  margin-right: 20px;
  border: 1px ${(props) => props.theme.color} solid;
  border-radius: 80px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.PhotoUpload} no-repeat 14px;
  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 40px;
    padding-left: 28px;
  }
  :hover {
    background: ${(props) => props.theme.PhotoUploadHover} no-repeat 14px;
    color: ${(props) => props.theme.bgColor};
    background-color: ${(props) => props.theme.color};
  }
  @media all and (min-width: 720px) {
    & {
      width: fit-content;
      height: fit-content;
      padding: 10px 15px;
      margin-right: 32px;
    }
    & p {
      font-size: 18px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      width: fit-content;
      height: fit-content;
      padding: 10px 15px;
      margin-right: 80px;
    }
    & p {
      font-size: 20px;
    }
  }
`;

export const GoFollow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100px;
  height: 40px;
  margin-right: 20px;
  border-radius: 80px;
  background-color: ${(props) => props.theme.color};
  border: 1.5px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.bgColor};
  p {
    font-size: 14px;
    font-weight: 500;
  }
  @media all and (min-width: 720px) {
    & {
      width: fit-content;
      height: fit-content;
      padding: 10px 15px;
      margin-right: 32px;
    }
    & p {
      font-size: 18px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      width: fit-content;
      height: fit-content;
      padding: 10px 15px;
      margin-right: 80px;
    }
    & p {
      font-size: 20px;
    }
  }
`;

export const GoUnFollow = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100px;
  height: 40px;
  margin-right: 20px;
  background-color: ${(props) => props.theme.bgColor};
  border: 1.5px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  border-radius: 80px;
  p {
    font-size: 14px;
    font-weight: 500;
  }
  @media all and (min-width: 720px) {
    & {
      width: fit-content;
      height: fit-content;
      padding: 10px 15px;
      margin-right: 32px;
    }
    & p {
      font-size: 18px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      width: fit-content;
      height: fit-content;
      padding: 10px 15px;
      margin-right: 80px;
    }
    & p {
      font-size: 20px;
    }
  }
`;
