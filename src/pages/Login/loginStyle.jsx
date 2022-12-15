import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginDiv = styled.div`
  background-color: var(--black);

  img {
    width: 90px;
    margin: 0 auto;
    padding: 56px 0;
  }
`;

const LoginContDiv = styled.div`
  background-color: white;
  min-height: 614px;
  padding: 60px 20px;
  border-radius: 20px 20px 0 0;

  h2 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 40px;
  }
`;

const SignupLink = styled(Link)`
  margin-top: 22px;
  font-size: 12px;
  text-align: center;
  color: var(--super-gray);
`;

export { LoginDiv, LoginContDiv, SignupLink };
