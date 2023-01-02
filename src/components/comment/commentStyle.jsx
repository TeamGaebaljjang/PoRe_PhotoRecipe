import styled from 'styled-components';

export const UserComment = styled.li`
  margin: 0 20px;
  padding: 10px 0px;
  position: relative;
  border-bottom: 0.5px solid ${(props) => props.theme.realBlack};
  display: flex;
  gap: 10px;
  @media (min-width: 720px) {
    width: 720px;
    margin: 0 auto;
  }
`;
export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  outline: 1px solid ${(props) => props.theme.realBlack};
  cursor: pointer;
`;
export const UserName = styled.strong`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const AddTime = styled.p`
  font-size: 10px;
  color: var(--gray);
  margin-left: 5px;
`;

export const CommentCont = styled.p`
  width: 280px;
  font-size: 12px;
  color: var(--super-gray);
  white-space: auto;
  word-break: break-all;
  @media (min-width: 720px) {
    width: 100%;
    padding-right: 10px;
  }
`;

export const CommentMoreBtn = styled.img`
  position: absolute;
  right: 0;
  top: 10px;
  cursor: pointer;
`;
