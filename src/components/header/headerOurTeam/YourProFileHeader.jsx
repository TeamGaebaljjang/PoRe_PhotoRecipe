import styled from 'styled-components';
import Back from '../../assets/icons/icon-arrow-left.svg';
import More from '../../assets/icons/icon-more-vertical-gray.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-bottom: 1px var(--light-gray) solid;
`;

const Btn = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
`;

const YourProFileHeader = () => {
  return (
    <Container>
      <Btn type="button" src={Back} alt="back" style={{ marginLeft: '16px' }} />
      <Btn
        type="button"
        src={More}
        alt="more"
        style={{ marginRight: '12px' }}
      />
    </Container>
  );
};

export default YourProFileHeader;
