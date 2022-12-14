import styled from 'styled-components';
import logo from '../../assets/icons/logo.png';

export const NavWrap = styled.nav`
  position: fixed;
  width: 390px;
  bottom: 0;
  z-index: 30;
  @media all and (min-width: 720px) {
    & {
      top: 0;
      left: 0;
      width: fit-content;
    }
  }
  @media all and (min-width: 941px) {
    & {
      top: 0;
      left: 0;
      width: 240px;
    }
  }
`;
export const Logo = styled.button`
  display: none;
  width: 80px;
  height: 80px;
  margin: 0 auto;
  background: url(${logo}) no-repeat center / cover;

  @media all and (min-width: 720px) {
    & {
      display: block;
      margin-bottom: 100px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      width: 120px;
      height: 120px;
    }
  }
`;

export const NavUlStyle = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 12px 0 8px 0;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px 10px 0 0;
  box-shadow: ${(props) => props.theme.shadow};
  @media all and (min-width: 720px) {
    & {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 30px;
      height: 100vh;
      padding: 0 15px;
      border-radius: initial;
      padding-bottom: 140px;
    }

    & > a + a:before {
      content: '';
      display: block;
      position: relative;
      top: -15px;
      width: 90px;
      height: 1px;
      background-color: ${(props) => props.theme.realBlack};
    }
  }
  @media all and (min-width: 941px) {
    & {
      gap: 25px;
    }
    & > a + a:before {
      top: -15px;
      width: 210px;
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

  @media all and (min-width: 720px) {
    & {
      flex-direction: row;
      justify-content: flex-start;
      font-size: 16px;
      gap: 10px;
      padding: 10px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      font-size: 18px;
      gap: 10px;
      padding: 10px;
    }
  }
`;
