import styled, { css } from 'styled-components';
import addPic from '../../assets/icons/icon-photo-upload-white.svg';

const setSize = (size) => {
  switch (size) {
    case 'lg':
      return css`
        width: 50px;
        height: 50px;
        background-size: 30px;
      `;
    default:
      return css`
        width: 36px;
        height: 36px;
      `;
  }
};

const BtnAddPic = styled.button`
  background-color: black;
  border-radius: 50%;
  background-image: url(${addPic});
  background-repeat: no-repeat;
  background-position: center;

  ${({ size }) => setSize(size)}
`;

export default BtnAddPic;
