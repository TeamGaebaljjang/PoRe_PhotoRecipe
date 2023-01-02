import searchIcon from '../assets/icons/icon-search.svg';
import moreIcon from '../assets/icons/icon-more-vertical.svg';
import backIcon from '../assets/icons/icon-arrow-left.svg';
import editIcon from '../assets/icons/icon-edit-post.svg';
import searchIconDark from '../assets/icons/icon-search-white.svg';
import moreIconDark from '../assets/icons/icon-more-vertical-white.svg';
import backIconDark from '../assets/icons/icon-arrow-left-dark.svg';
import editIconDark from '../assets/icons/icon-edit-post-white.svg';
import PhotoUpload from '../assets/icons/icon-photo-upload-black.svg';
import PhotoUploadDark from '../assets/icons/icon-photo-upload-white.svg';

export const darkMode = {
  color: '#ffffff',
  bgColor: 'var(--black)',
  active: 'var(--light-red)',
  chat: 'var(--super-gray)',
  shadow: '0 0 10px black',
  barShadow: '0 4px 7px -4px black',
  chatShadow: '1px 2px 5px -2px black',
  font: '#E8E8E8',
  realBlack: 'black',
  scroll: 'var(--super-gray)',
  button: 'var(--super-gray)',
  searchIcon: `url(${searchIconDark})`,
  moreIcon: `url(${moreIconDark})`,
  backIcon: `url(${backIconDark})`,
  editIcon: `url(${editIconDark})`,
  PhotoUpload: `url(${PhotoUploadDark})`,
  PhotoUploadHover: `url(${PhotoUpload})`,
  line: 'var(--super-gray)',
};

export const lightMode = {
  color: 'var(--black)',
  bgColor: '#ffffff',
  active: 'var(--black)',
  chat: 'var(--light-gray)',
  shadow: '0 0 10px var(--gray)',
  barShadow: '0 4px 7px -4px var(--light-gray)',
  chatShadow: '1px 2px 5px -2px var(--deep-gray)',
  font: 'var(--super-gray)',
  realBlack: 'var(--gray)',
  scroll: 'var(--gray)',
  button: 'var(--gray)',
  searchIcon: `url(${searchIcon})`,
  moreIcon: `url(${moreIcon})`,
  backIcon: `url(${backIcon})`,
  editIcon: `url(${editIcon})`,
  PhotoUpload: `url(${PhotoUpload})`,
  PhotoUploadHover: `url(${PhotoUploadDark})`,
  line: 'var(--gray)',
};

// :root {
//     --black: #1C1C1C;
//     --light-red: #FF5757;
//     --deep-red: #FF1818;
//     --light-gray: #E8E8E8;
//     --gray: #CDCDCD;
//     --deep-gray: #B4B4B4;
//     --super-gray: #767676;
//     --success-green: #50c927;
// }

// ${(props) => props.theme.bgColor};
