import styled from 'styled-components';
import iconTopHover from '../../assets/icons/icon-top-hover.svg';
import iconTopDefault from '../../assets/icons/icon-top-default.svg';

const BtnTop = ({ parent }) => {
  const Button = styled.button`
    position: fixed;
    bottom: 70px;
    left: calc(50% + 140px);
    width: 50px;
    height: 50px;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${iconTopDefault});

    :hover {
      background-image: url(${iconTopHover});
    }
    @media all and (min-width: 720px) and (max-width: 940px) {
      & {
        bottom: 34px;
        left: initial;
        right: 30px;
      }
    }
  `;

  const scrollToTop = () => {
    parent.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      type="button"
      onClick={() => {
        scrollToTop();
      }}
    />
  );
};

export default BtnTop;
