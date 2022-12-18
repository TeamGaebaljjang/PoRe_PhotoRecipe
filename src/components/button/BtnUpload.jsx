import styled from 'styled-components';

const BtnUpload = styled.button`
  width: 90px;
  height: 32px;
  border-radius: 32px;
  color: white;
  background-color: var(--gray);
  position: absolute;
  top: 8px;
  right: 16px;

  &:hover {
    background-color: black;
  }
`;

export default BtnUpload;
