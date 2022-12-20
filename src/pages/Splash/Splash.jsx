import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Wrap, Logo } from './splashStyle';
import logo from '../../assets/icons/logo-camera.svg';
import logoPore from '../../assets/icons/logo-pore.svg';

const Splash = () => {
  const [animation, setAnimation] = useState(false);
  const navigate = useNavigate();
  const URL = 'https://mandarin.api.weniv.co.kr';

  useEffect(() => {
    (async function tokenCheck() {
      try {
        const authToken = localStorage.getItem('token');
        const res = await axios.get(`${URL}/user/checktoken`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            'Content-type': 'application/json',
          },
        });
        if (res.data.isValid) {
          setTimeout(() => {
            navigate('/home');
          }, 3100);
        } else if (!res.data.isValid) {
          setTimeout(() => {
            navigate('/login');
          }, 3100);
        }
      } catch (error) {
        setTimeout(() => {
          navigate('/login');
        }, 3100);
      }
    })();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (animation ? setAnimation(false) : setAnimation(true));
    }, 1500);
  }, []);

  return (
    <Wrap>
      <Logo>
        <img src={animation ? logoPore : logo} alt="logo" />
      </Logo>
    </Wrap>
  );
};

export default Splash;
