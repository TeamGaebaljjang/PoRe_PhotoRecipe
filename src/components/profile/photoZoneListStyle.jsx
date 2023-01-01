import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media all and (min-width: 720px) {
    & {
      margin-left: 26px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      margin-left: 80px;
    }
  }
`;

export const Photo = styled.div`
  width: 80px;
  height: 80px;
  background: var(--gray) url(${(props) => props.src}) no-repeat center / cover;
  border-radius: 50%;
  outline: 1px solid var(--light-gray);
  @media all and (min-width: 720px) {
    & {
      width: 110px;
      height: 110px;
      /* margin-left: 26px; */
    }
  }
`;

export const Region = styled.p`
  margin-top: 6px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
`;

export const List = styled.div`
  display: flex;
  margin: 35px 0px 20px 20px;
  flex-shrink: 0;
  gap: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media all and (min-width: 720px) {
    & {
      margin: 35px 0px 30px 20px;
    }
  }
`;
