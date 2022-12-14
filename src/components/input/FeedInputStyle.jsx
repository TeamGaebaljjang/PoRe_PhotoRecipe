import styled from 'styled-components';

export const TopBar = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid var(--light-gray);
`;

export const BackBtn = styled.img`
  margin: 0 16px;
`;

export const SearchInp = styled.input`
  width: 310px;
  height: 32px;
  background-color: var(--light-gray);
  border-radius: 32px;
  text-indent: 16px;

  &::placeholder {
    color: var(--deep-gray);
    text-indent: 16px;
  }
`;
