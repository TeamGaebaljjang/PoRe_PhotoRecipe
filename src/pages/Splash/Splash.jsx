import styled, { keyframes } from 'styled-components';
import logo from '../../assets/icons/logo-camera.svg';
import lgooPore from '../../assets/icons/logo-pore.svg';

const Light = keyframes`
    50% {
        opacity: 0;
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

  &::after {
    position: absolute;
    content: '';
    top: 24px;
    left: 92px;
    width: 12px;
    height: 12px;
    background-color: white;
    border-radius: 3px;
    animation: ${Light} 2s infinite;
    box-shadow: 0 0 1px #fff, 0 0 5px #fff, 0 0 8px #fff, 0 0 10px #fff,
      0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff,
      0 0 70px #fff, 0 0 80px #fff, 0 0 90px #fff, 0 0 100px #fff;
  }
`;

const Splash = () => {
  return (
    <Wrap>
      <Logo className="fig-logo">
        <img src={logo} alt="logo" className="img-camera" />
        <img src={lgooPore} alt="" className="img-pore" />
      </Logo>
    </Wrap>
  );
};

export default Splash;
