import styled from 'styled-components';
import profile from '../../assets/icons/basic-profile-round.svg';

export const User = styled.div`
  display: flex;
  margin: 20px;
`;

export const UserProfile = styled.img`
  background-color: var(--gray);
  border-radius: 50%;
  margin-right: 12px;
`;

export const UserInfo = styled.div`
  margin-top: 3px;
`;

export const UserName = styled.p`
  font-size: 14px;
`;

export const UserId = styled.p`
  font-size: 12px;
  color: var(--super-gray);
`;

const SearchUser = () => {
  return (
    <User>
      <UserProfile src={profile} alt="" />
      <UserInfo>
        <UserName>포토레시피</UserName>
        <UserId>@ PoRe_PhotoRecipe</UserId>
      </UserInfo>
    </User>
  );
};

export default SearchUser;
