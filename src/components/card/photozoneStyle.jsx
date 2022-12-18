import styled from 'styled-components';

export const Div = styled.div`
  flex-shrink: 0;
  border-radius: 10px;
  background: url(${(props) => props.src}) no-repeat center / cover;
  border: 1px var(--gray) solid;
  position: relative;
`;

export const Cont = styled.div`
  position: absolute;
  padding: 0 50px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: black;
  opacity: 70%;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Date = styled.p`
  font-size: 14px;
  font-weight: 500;
  padding: 150px 10px 10px 265px;
  color: white;
`;
