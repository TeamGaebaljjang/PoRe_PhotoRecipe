import styled from 'styled-components';

export const Img = styled.div`
  width: 90px;
  height: 90px;
  margin-top: 8px;
  margin-left: 38px;
  background: var(--gray) url(${(props) => props.src}) no-repeat center/ 90px
    90px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 24px;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  margin-left: 38px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Follow = styled.div`
  margin-top: -6px;
`;

export const Follower = styled.button`
  padding-right: 6px;
  border-right: 2px solid var(--light-gray);
  font-size: 14px;
`;

export const Following = styled.button`
  padding-left: 6px;
  font-size: 14px;
`;

// 버튼 컴포넌트를 파일로 따로 빼기?!
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

  p {
    font-size: 14px;
    font-weight: 500;
  }
`;
