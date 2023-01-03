import styled from 'styled-components';

const ConfirmModal = styled.article`
  position: fixed;
  top: calc(50vh - 110px);
  left: calc(50vw - 110px);
  width: 220px;
  text-align: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.shadow};
  z-index: 20;
  h3 {
    font-size: 16px;
    padding: 22px 20px;
    border-bottom: 0.5px solid ${(props) => props.theme.line};
  }
  span {
    display: block;
    margin-top: 10px;
    font-size: 14px;
  }
  @media all and (min-width: 720px) {
    & {
      left: calc((100vw - 126px) / 2);
    }
  }
`;

const Btnwrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  button {
    width: 50%;
    color: ${(props) => props.theme.color};
    flex-grow: 1;
    padding: 14px 0;
    font-size: 14px;
  }

  button + button {
    border-left: 0.5px solid ${(props) => props.theme.line};
  }

  .caution-option {
    color: var(--light-red);
  }
`;

export { ConfirmModal, Btnwrap };
