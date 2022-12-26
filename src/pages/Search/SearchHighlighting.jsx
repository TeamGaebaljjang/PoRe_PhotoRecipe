import { Highlighting } from './searchStyle';

const SearchHighlighting = ({ user, keyword, type }) => {
  return user.includes(keyword) ? (
    <span type={type}>
      {user.split(keyword)[0]}
      <Highlighting>{keyword}</Highlighting>
      {user.split(keyword)[1]}
    </span>
  ) : (
    <span>{user}</span>
  );
};

export default SearchHighlighting;
