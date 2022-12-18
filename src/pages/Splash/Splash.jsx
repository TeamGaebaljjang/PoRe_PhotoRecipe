import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrap, Logo } from './splashStyle';
import logo from '../../assets/icons/logo-camera.svg';
import logoPore from '../../assets/icons/logo-pore.svg';

const Splash = () => {
  const [animation, setAnimation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (animation ? setAnimation(false) : setAnimation(true));
    }, 1500);
  }, []);

  setTimeout(() => {
    navigate('/login');
  }, 3500);

  return (
    <Wrap>
      <Logo>
        <img src={animation ? logoPore : logo} alt="logo" />
      </Logo>
    </Wrap>
  );
};

export default Splash;
