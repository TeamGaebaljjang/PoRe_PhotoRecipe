import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavUlStyle, NavItemStyle } from './navBarStyle';
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

const NavItems = () => {
  const [navIcon, setNavIcon] = useState(1);

  return (
    <NavUlStyle>
      <Link to="/home" onClick={() => setNavIcon(1)}>
        <img src={navIcon === 1 ? iconHomeActive : iconHome} alt="" />
        <NavItemStyle
          style={navIcon === 1 ? { color: 'black' } : { color: 'var(--gray)' }}
        >
          홈
        </NavItemStyle>
      </Link>
      <Link to="/feed" onClick={() => setNavIcon(2)}>
        <img src={navIcon === 2 ? iconFeedActive : iconFeed} alt="" />
        <NavItemStyle
          style={navIcon === 2 ? { color: 'black' } : { color: 'var(--gray)' }}
        >
          피드
        </NavItemStyle>
      </Link>
      <Link to="/map" onClick={() => setNavIcon(3)}>
        <img src={navIcon === 3 ? iconMapActive : iconMap} alt="" />
        <NavItemStyle
          style={navIcon === 3 ? { color: 'black' } : { color: 'var(--gray)' }}
        >
          지도
        </NavItemStyle>
      </Link>
      <Link to="/chat" onClick={() => setNavIcon(4)}>
        <img src={navIcon === 4 ? iconMessageActive : iconMessage} alt="" />
        <NavItemStyle
          style={navIcon === 4 ? { color: 'black' } : { color: 'var(--gray)' }}
        >
          채팅
        </NavItemStyle>
      </Link>
      <Link to="/profile" onClick={() => setNavIcon(5)}>
        <img src={navIcon === 5 ? iconUserActive : iconUser} alt="" />
        <NavItemStyle
          style={navIcon === 5 ? { color: 'black' } : { color: 'var(--gray)' }}
        >
          프로필
        </NavItemStyle>
      </Link>
    </NavUlStyle>
  );
};

export default NavItems;
