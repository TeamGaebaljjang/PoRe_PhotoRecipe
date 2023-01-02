import styled from 'styled-components';

const BtnUpload = styled.button`
  width: 90px;
  height: 32px;
  border-radius: 32px;
  color: white;
  background-color: ${(props) => props.theme.button};
  position: absolute;
  top: 8px;
  right: 16px;
  &:hover {
    background-color: black;
  }
  @media all and (min-width: 720px) {
    & {
      width: 94px;
      height: 36px;
      top: 12px;
    }
  }
`;

export default BtnUpload;
