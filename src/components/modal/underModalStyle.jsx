import styled from 'styled-components';

export const UnderModalWrap = styled.ul`
  position: fixed;
  bottom: 0;
  margin-bottom: 60px;
  padding: 0 25px;
  width: 390px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 7px 0 var(--gray);
`;
export const UnderModalCloseBtn = styled.button`
  width: 340px;
  height: 20px;
  border-radius: 10px 10px 0 0;
  &::after {
    display: flex;
    content: '';
    border-radius: 5px;
    margin: 0 auto;
    background-color: var(--gray);
    width: 50px;
    height: 4px;
  }
`;
export const UnderModalCont = styled.li`
  font-size: 14px;
  line-height: 55px;
  color: black;
`;
