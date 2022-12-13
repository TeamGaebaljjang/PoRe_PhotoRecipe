import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { NavUlStyle, NavItemStyle } from './NavBarStyle';
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
  const [hover, setHover] = useState(false);

  const handleHoverOn = (e) => {
    console.log(e.currentTarget);
    setHover(true);
  };

  const handleHoverOff = () => {
    setHover(false);
  };

  return (
    <NavUlStyle>
      <NavLink to="">
        <NavItemStyle onMouseOver={handleHoverOn} onMouseOut={handleHoverOff}>
          <img src={hover ? iconHomeActive : iconHome} alt="" />홈
        </NavItemStyle>
      </NavLink>
      <NavLink to="">
        <NavItemStyle>
          <img src={hover ? iconFeedActive : iconFeed} alt="" />
          피드
        </NavItemStyle>
      </NavLink>
      <NavLink to="">
        <NavItemStyle onMouseOver={handleHoverOn} onMouseOut={handleHoverOff}>
          <img src={hover ? iconMapActive : iconMap} alt="" />
          지도
        </NavItemStyle>
      </NavLink>
      <NavLink to="">
        <NavItemStyle onMouseOver={handleHoverOn} onMouseOut={handleHoverOff}>
          <img src={hover ? iconMessageActive : iconMessage} alt="" />
          채팅
        </NavItemStyle>
      </NavLink>
      <NavLink to="">
        <NavItemStyle onMouseOver={handleHoverOn} onMouseOut={handleHoverOff}>
          <img src={hover ? iconUserActive : iconUser} alt="" />
          프로필
        </NavItemStyle>
      </NavLink>
    </NavUlStyle>
  );
};

export default NavItems;