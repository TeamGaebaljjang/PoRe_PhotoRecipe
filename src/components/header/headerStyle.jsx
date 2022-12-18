import styled from 'styled-components';
import searchIcon from '../../assets/icons/icon-search.svg';
import moreIcon from '../../assets/icons/icon-more-vertical.svg';
import backIcon from '../../assets/icons/icon-arrow-left.svg';
import editIcon from '../../assets/icons/icon-edit-post.svg';

export const HeaderContainer = styled.article`
  height: 48px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid var(--light-gray);
  background-color: white;
`;
export const HeaderProfileContainer = styled.article`
  height: 48px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  right: 0;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600px;
  margin-left: 20px;
`;

export const SearchBtn = styled.button`
  width: 48px;
  height: 48px;
  background: no-repeat center;
  background-image: url(${searchIcon});
`;

export const MoreBtn = styled.button`
  width: 48px;
  height: 48px;
  background: no-repeat center;
  background-image: url(${moreIcon});
`;

export const BackBtn = styled.button`
  width: 48px;
  height: 48px;
  background: no-repeat center;
  background-image: url(${backIcon});
  margin-right: -15px;
`;

export const EditProfileBtn = styled.button`
  width: 48px;
  height: 48px;
  background: no-repeat center;
  background-image: url(${editIcon});
`;

export const SearchInp = styled.input`
  width: 310px;
  height: 32px;
  margin-left: 20px;
  background-color: var(--light-gray);
  border-radius: 32px;
  text-indent: 16px;

  &::placeholder {
    color: var(--deep-gray);
    text-indent: 16px;
  }
`;
