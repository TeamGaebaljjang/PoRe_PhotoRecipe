import styled from 'styled-components';
import Search from '../../assets/icons/icon-search.svg';
import More from '../../assets/icons/icon-more-vertical.svg';
import Edit from '../../assets/icons/icon-edit-post.svg';

const NavBar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 58px;
  //background-color: orange;
`;

const Icon = styled.button`
  width: 24px;
  height: 24px;
  margin-right: 24px;
  //margin-bottom: 12px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
`;

const NavBarMy = () => {
  return (
    <NavBar>
      <Icon type="button" src={Search} alt="search" />
      <Icon type="button" src={Edit} alt="edit" />
      <Icon type="button" src={More} alt="more" />
    </NavBar>
  );
};

export default NavBarMy;
