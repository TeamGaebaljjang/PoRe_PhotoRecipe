import styled from 'styled-components';

export const Img = styled.div`
  width: 90px;
  height: 90px;
  margin-top: 20px;
  margin-left: 38px;
  background: var(--gray) url(${(props) => props.src}) no-repeat center/ cover;
  box-shadow: 1px 1px 4px var(--light-gray);
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      width: 120px;
      height: 120px;
      margin-left: 48px;
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
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      margin-left: 48px;
    }
  }
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  @media all and (min-width: 720px) and (max-width: 940px) {
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
  padding-right: 6px;
  border-right: 2px solid var(--light-gray);
  font-size: 14px;
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      font-size: 16px;
      padding-right: 10px;
    }
  }
`;

export const Following = styled.button`
  padding-left: 6px;
  font-size: 14px;
  @media all and (min-width: 720px) and (max-width: 940px) {
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
  border: 1px var(--black) solid;
  border-radius: 80px;
  p {
    font-size: 14px;
    font-weight: 500;
  }
  :hover {
    background-color: var(--black);
    color: white;
  }
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      width: fit-content;
      height: fit-content;
      padding: 10px 15px;
      margin-right: 30px;
    }
    & p {
      font-size: 16px;
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
  border: 1px var(--black) solid;
  border-radius: 80px;
  background-color: black;
  color: white;
  p {
    font-size: 14px;
    font-weight: 500;
  }
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      width: fit-content;
      height: fit-content;
      padding: 10px 15px;
      margin-right: 30px;
    }
    & p {
      font-size: 16px;
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
  border: 1px var(--black) solid;
  border-radius: 80px;

  p {
    font-size: 14px;
    font-weight: 500;
  }
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      width: fit-content;
      height: fit-content;
      padding: 10px 15px;
      margin-right: 30px;
    }
    & p {
      font-size: 16px;
    }
  }
`;
