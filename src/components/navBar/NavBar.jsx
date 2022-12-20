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

const NavBar = () => {
  const location = useLocation();
  const target = location.pathname;

  return (
    <NavWrap>
      <NavUlStyle>
        <Link to="/home">
          <img src={target === '/home' ? iconHomeActive : iconHome} alt="" />
          <NavItemStyle
            style={
              target === '/home' ? { color: 'black' } : { color: 'var(--gray)' }
            }
          >
            홈
          </NavItemStyle>
        </Link>
        <Link to="/feed">
          <img
            src={
              target === '/feed' || target === '/feed/search'
                ? iconFeedActive
                : iconFeed
            }
            alt=""
          />
          <NavItemStyle
            style={
              target === '/feed' || target === '/feed/search'
                ? { color: 'black' }
                : { color: 'var(--gray)' }
            }
          >
            피드
          </NavItemStyle>
        </Link>
        <Link to="/map">
          <img src={target === '/map' ? iconMapActive : iconMap} alt="" />
          <NavItemStyle
            style={
              target === '/map' ? { color: 'black' } : { color: 'var(--gray)' }
            }
          >
            지도
          </NavItemStyle>
        </Link>
        <Link to="/chat">
          <img
            src={target === '/chat' ? iconMessageActive : iconMessage}
            alt=""
          />
          <NavItemStyle
            style={
              target === '/chat' ? { color: 'black' } : { color: 'var(--gray)' }
            }
          >
            채팅
          </NavItemStyle>
        </Link>
        <Link to="/profile">
          <img src={target === '/profile' ? iconUserActive : iconUser} alt="" />
          <NavItemStyle
            style={
              target === '/profile'
                ? { color: 'black' }
                : { color: 'var(--gray)' }
            }
          >
            프로필
          </NavItemStyle>
        </Link>
      </NavUlStyle>
    </NavWrap>
  );
};

export default NavBar;
