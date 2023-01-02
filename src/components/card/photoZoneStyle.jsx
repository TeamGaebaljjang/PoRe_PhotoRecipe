import styled from 'styled-components';
import moreIcon from '../../assets/icons/icon-more-vertical-gray.svg';

export const Div = styled.div`
  width: 340px;
  height: 190px;
  flex-shrink: 0;
  border-radius: 10px;
  background: url(${(props) => props.src}) no-repeat center / cover;
  border: 1px solid ${(props) => props.theme.realBlack};
  position: relative;
  @media all and (min-width: 720px) {
    & {
      width: 80%;
      height: 100%;
    }
  }
`;

export const Cont = styled.div`
  position: absolute;
  padding: 0 50px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: black;
  opacity: 70%;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 2px var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  @media all and (min-width: 720px) {
    & {
      font-size: 22px;
    }
  }
`;

export const Desc = styled.p`
  width: 90%;
  word-wrap: break-word;
`;

export const Date = styled.p`
  position: absolute;
  right: 10px;
  bottom: 5px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  text-shadow: 1px 1px 2px var(--black);
  @media all and (min-width: 720px) {
    & {
      font-size: 16px;
      right: 15px;
      bottom: 10px;
    }
  }
`;

export const MoreBtn = styled.button`
  position: absolute;
  top: 6px;
  right: 2px;
  width: 20px;
  height: 20px;
  background: no-repeat center/cover;
  background-image: url(${moreIcon});
  @media all and (min-width: 720px) {
    & {
      top: 15px;
      right: 8px;
      width: 32px;
      height: 32px;
    }
  }
`;
