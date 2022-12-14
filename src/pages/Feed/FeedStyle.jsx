import styled from 'styled-components';

export const Wrap = styled.div`
  height: 100vh;
  overflow: auto;
`;

export const TopBar = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid var(--light-gray);
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600px;
  margin-left: 20px;
`;

export const Search = styled.button`
  position: absolute;
  top: 12px;
  right: 20px;
`;
