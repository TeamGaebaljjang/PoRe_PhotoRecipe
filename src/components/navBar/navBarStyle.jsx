import styled from 'styled-components';
import logo from '../../assets/icons/logo.png';

export const NavWrap = styled.nav`
  position: fixed;
  width: 390px;
  bottom: 0;
  z-index: 30;
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      top: 0;
      left: 0;
      width: fit-content;
    }
  }
`;

export const NavUlStyle = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 12px 0 8px 0;
  background-color: white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 7px 0 var(--gray);
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 30px;
      height: 100vh;
      padding: 0 15px;
      border-radius: initial;
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
      top: 25px;
      left: 22px;
      width: 80px;
      height: 80px;
      background: url(${logo}) no-repeat center / cover;
    }
    & > a + a:before {
      content: '';
      display: block;
      position: relative;
      top: -15px;
      width: 90px;
      height: 1px;
      background-color: var(--gray);
    }
  }
`;

export const NavItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--gray);
  @media all and (min-width: 720px) and (max-width: 940px) {
    & {
      flex-direction: row;
      justify-content: flex-start;
      font-size: 16px;
      gap: 10px;
      padding: 10px;
    }
  }
`;
