import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 344px);
  margin: 30px 20px 0;
`;

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;

  p {
    font-size: 14px;
    color: var(--super-gray);
  }
`;
