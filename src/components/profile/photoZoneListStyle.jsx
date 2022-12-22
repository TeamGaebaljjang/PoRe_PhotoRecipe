import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80px;
`;

export const Photo = styled.div`
  width: 80px;
  height: 80px;
  background: var(--gray) url(${(props) => props.src}) no-repeat center / cover;
  border-radius: 50%;
`;

export const Region = styled.p`
  margin-top: 6px;
  font-size: 16px;
  font-weight: 500;
`;

export const List = styled.div`
  display: flex;
  margin: 35px 0px 20px 20px;
  gap: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
