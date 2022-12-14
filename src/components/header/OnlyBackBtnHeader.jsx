import styled from 'styled-components';
import Back from '../../assets/icons/icon-arrow-left.svg';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-bottom: 1px var(--light-gray) solid;
  margin-bottom: 28px;
`;

const Btn = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
`;

const OnlyBackBtnHeader = () => {
  return (
    <Container>
      <Btn type="button" src={Back} alt="back" style={{ marginLeft: '16px' }} />
    </Container>
  );
};

export default OnlyBackBtnHeader;
