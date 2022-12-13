import styled from 'styled-components';

export const NavWrap = styled.nav`
  position: fixed;
  width: 390px;
  bottom: 0;
`;

export const NavUlStyle = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 12px 0 8px 0;
  background-color: white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 7px 0 var(--gray);
`;

export const NavItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 10px;
  color: var(--gray);

  &:hover {
    color: var(--black);
    font-weight: 600;
  }
`;