import styled from 'styled-components';

export const Div = styled.div`
  width: 340px;
  height: 190px;
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

export const Desc = styled.p`
  width: 90%;
  word-wrap: break-word;
`;

export const Date = styled.p`
  position: absolute;
  right: 10px;
  bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: white;
`;
