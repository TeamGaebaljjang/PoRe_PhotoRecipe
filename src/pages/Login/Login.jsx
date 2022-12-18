import logo from '../../assets/icons/logo-pore.svg';
import LoginForm from './LoginForm';
import { LoginDiv } from './loginStyle';

const Login = () => {
  return (
    <LoginDiv>
      <img src={logo} alt="logo" />
      <LoginForm />
    </LoginDiv>
  );
};

export default Login;
