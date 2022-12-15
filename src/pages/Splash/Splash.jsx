import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from '../../assets/icons/logo-camera.svg';
import logoPore from '../../assets/icons/logo-pore.svg';

const Light = keyframes`
    0%{
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--black);
`;

const Logo = styled.figure`
  position: relative;
  animation: ${FadeIn} 2s 1.4s 1;

  &::after {
    position: absolute;
    content: '';
    top: 24px;
    left: 92px;
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 3px;
    animation: ${Light} 0.1s 5 forwards;
    box-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 8px #fff, 0 0 10px #fff,
      0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff,
      0 0 70px #fff, 0 0 80px #fff, 0 0 90px #fff, 0 0 100px #fff;
  }
`;

const Splash = () => {
  const [animation, setAnimation] = useState(false);

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
