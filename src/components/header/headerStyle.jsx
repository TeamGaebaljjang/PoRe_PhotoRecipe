import styled from 'styled-components';

export const HeaderContainer = styled.article`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: ${(props) => props.theme.barShadow};
  background-color: ${(props) => props.theme.bgColor};
  @media all and (min-width: 720px) {
    & {
      height: 60px;
    }
  }
`;

export const HeaderFeedContainer = styled.article`
  height: 48px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: ${(props) => props.theme.barShadow};
  background-color: ${(props) => props.theme.bgColor};
  @media all and (min-width: 720px) {
    & {
      height: 60px;
    }
  }
`;

export const HeaderProfileContainer = styled.article`
  height: 48px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.bgColor};
  @media all and (min-width: 720px) {
    & {
      height: 60px;
      margin-top: 10px;
    }
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  height: 100%;
  @media all and (min-width: 720px) {
    & {
      margin-right: 10px;
    }
  }
  @media all and (min-width: 941px) {
    & {
      margin-right: 50px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600px;
  margin-left: 20px;
  flex-grow: 1;
  font-weight: 700;
  color: ${(props) => props.theme.color};

  @media all and (min-width: 720px) {
    & {
      font-size: 20px;
      margin-left: initial;
      text-align: center;
    }
  }
`;

export const SearchBtn = styled.button`
  width: 48px;
  height: 48px;
  background: no-repeat center;
  background-image: ${(props) => props.theme.searchIcon};
  @media all and (min-width: 720px) {
    & {
      width: 60px;
      height: 60px;
    }
  }
`;

export const MoreBtn = styled.button`
  width: 48px;
  height: 48px;
  background: no-repeat center;
  background-image: ${(props) => props.theme.moreIcon};
  @media all and (min-width: 720px) {
    & {
      width: 60px;
      height: 60px;
    }
  }
`;

export const BackBtn = styled.button`
  width: 48px;
  height: 48px;
  background: no-repeat center;
  background-image: ${(props) => props.theme.backIcon};
  margin-right: -15px;
  @media all and (min-width: 720px) {
    & {
      width: 60px;
      height: 60px;
      margin-left: 20px;
    }
  }
`;

export const UploadPostBtn = styled.button`
  width: 48px;
  height: 48px;
  background: no-repeat center;
  background-image: ${(props) => props.theme.editIcon};
  @media all and (min-width: 720px) {
    & {
      width: 60px;
      height: 60px;
    }
  }
`;

export const SearchInp = styled.input`
  width: 80px;
  height: 32px;
  margin: 0 20px;
  text-indent: 16px;
  background-color: ${(props) => props.theme.chat};
  border-radius: 32px;
  transition: 0.6s;
  &::placeholder {
    color: ${(props) => props.theme.font};

    text-indent: 16px;
  }
  &:hover {
    width: 310px;
  }
  &:focus {
    width: 310px;
    border: 1.5px solid var(--gray);
  }
  &.map-searchBar {
    width: 144px;
    transition: 0.8s;
  }
  &.map-searchBar:hover {
    width: 350px;
    @media all and (min-width: 720px) {
      & {
        width: calc(100% - 120px);
      }
    }
  }
  &.map-searchBar:focus {
    width: 350px;
    @media all and (min-width: 720px) {
      & {
        width: calc(100% - 120px);
      }
    }
  }
`;
