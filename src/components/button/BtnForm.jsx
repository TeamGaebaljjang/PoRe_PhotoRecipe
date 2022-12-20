import styled from 'styled-components';

const StyledButton = styled.button`
  margin-top: 30px;
  padding: 14px 30px;
  color: white;
  font-size: 14px;
  border-radius: 50px;
  background-color: var(--deep-gray);

  &:enabled {
    background-color: var(--black);
  }
`;

export default StyledButton;
