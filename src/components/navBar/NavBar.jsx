/* eslint-disable no-nested-ternary */
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavWrap, NavUlStyle, NavItemStyle } from './navBarStyle';
import iconHome from '../../assets/icons/icon-home.svg';
import iconHomeActive from '../../assets/icons/icon-home-active.svg';
import iconFeed from '../../assets/icons/icon-feed.svg';
import iconFeedActive from '../../assets/icons/icon-feed-active.svg';
import iconMap from '../../assets/icons/icon-map.svg';
import iconMapActive from '../../assets/icons/icon-map-active.svg';
import iconMessage from '../../assets/icons/icon-message.svg';
import iconMessageActive from '../../assets/icons/icon-message-active.svg';
import iconUser from '../../assets/icons/icon-user.svg';
import iconUserActive from '../../assets/icons/icon-user-active.svg';

import iconHomeActiveDark from '../../assets/icons/icon-home-dark.svg';
import iconFeedActiveDark from '../../assets/icons/icon-feed-dark.svg';
import iconMapActiveDark from '../../assets/icons/icon-map-dark.svg';
import iconMessageActiveDark from '../../assets/icons/icon-message-dark.svg';
import iconUserActiveDark from '../../assets/icons/icon-user-dark.svg';
import { ThemeContext } from '../../store/ThemeProvider';
import { ModeBtnLarge } from '../button/BtnNight';
import btnDarkLarge from '../../assets/icons/icon-btn-dark-big.svg';
import btnLightLarge from '../../assets/icons/icon-btn-light-big.svg';

const NavBar = () => {
  const location = useLocation();
  const target = location.pathname;
  const { isDarkMode, toggleMode } = useContext(ThemeContext);
  console.log(isDarkMode);

  return (
    <NavWrap>
      <NavUlStyle>
        <Link to="/home">
          <NavItemStyle
            style={
              target === '/home' || target === '/photodetail'
                ? isDarkMode
                  ? { color: '#FF5757' }
                  : { color: 'black' }
                : { color: 'var(--gray)' }
            }
          >
            <img
              src={
                target === '/home' || target === '/photodetail'
                  ? isDarkMode
                    ? iconHomeActiveDark
                    : iconHomeActive
                  : iconHome
              }
              alt=""
            />
            홈
          </NavItemStyle>
        </Link>
        <Link to="/feed">
          <NavItemStyle
            style={
              target === '/feed' ||
              target === '/feed/search' ||
              target === '/otherProfile'
                ? isDarkMode
                  ? { color: '#FF5757' }
                  : { color: 'black' }
                : { color: 'var(--gray)' }
            }
          >
            <img
              src={
                target === '/feed' ||
                target === '/feed/search' ||
                target === '/otherProfile'
                  ? isDarkMode
                    ? iconFeedActiveDark
                    : iconFeedActive
                  : iconFeed
              }
              alt=""
            />
            피드
          </NavItemStyle>
        </Link>
        <Link to="/map">
          <NavItemStyle
            style={
              target === '/map'
                ? isDarkMode
                  ? { color: '#FF5757' }
                  : { color: 'black' }
                : { color: 'var(--gray)' }
            }
          >
            <img
              src={
                target === '/map'
                  ? isDarkMode
                    ? iconMapActiveDark
                    : iconMapActive
                  : iconMap
              }
              alt=""
            />
            지도
          </NavItemStyle>
        </Link>
        <Link to="/chat">
          <NavItemStyle
            style={
              target === '/chat'
                ? isDarkMode
                  ? { color: '#FF5757' }
                  : { color: 'black' }
                : { color: 'var(--gray)' }
            }
          >
            <img
              src={
                target === '/chat'
                  ? isDarkMode
                    ? iconMessageActiveDark
                    : iconMessageActive
                  : iconMessage
              }
              alt=""
            />
            채팅
          </NavItemStyle>
        </Link>
        <Link to="/profile">
          <NavItemStyle
            style={
              target === '/profile'
                ? isDarkMode
                  ? { color: '#FF5757' }
                  : { color: 'black' }
                : { color: 'var(--gray)' }
            }
          >
            <img
              src={
                target === '/profile'
                  ? isDarkMode
                    ? iconUserActiveDark
                    : iconUserActive
                  : iconUser
              }
              alt=""
            />
            프로필
          </NavItemStyle>
        </Link>
      </NavUlStyle>
      <ModeBtnLarge
        type="button"
        onClick={() => {
          toggleMode();
        }}
        style={
          isDarkMode
            ? { backgroundImage: `url(${btnDarkLarge})` }
            : { backgroundImage: `url(${btnLightLarge})` }
        }
      />
    </NavWrap>
  );
};

export default NavBar;
