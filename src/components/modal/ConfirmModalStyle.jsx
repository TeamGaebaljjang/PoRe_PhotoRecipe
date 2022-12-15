import styled from 'styled-components';

const ConfirmModal = styled.article`
  position: relative;
  top: calc(100vh / 2);
  max-width: 250px;
  margin: 0 auto;
  text-align: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 10px var(--deep-gray);

  h3 {
    font-size: 16px;
    padding: 22px 20px;
    border-bottom: 0.5px solid var(--gray);
  }
`;

const Btnwrap = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;

  button {
    flex-grow: 1;
    padding: 14px 0;
    font-size: 14px;
  }

  button + button {
    border-left: 0.5px solid var(--gray);
  }

  .caution-option {
    color: var(--light-red);
  }
`;

export { ConfirmModal, Btnwrap };
