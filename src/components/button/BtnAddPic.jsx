import styled, { css } from 'styled-components';
import addPic from '../../assets/icons/icon-photo-upload-white.svg';

const setAttr = (attr) => {
  switch (attr) {
    case 'lg':
      return css`
        width: 50px;
        height: 50px;
        background-size: 30px;
      `;
    case 'gray':
      return css`
        width: 36px;
        height: 36px;
        background-color: var(--deep-gray);
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

  ${({ attr }) => setAttr(attr)}
`;

export default BtnAddPic;
