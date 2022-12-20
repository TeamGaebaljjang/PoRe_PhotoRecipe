import styled from 'styled-components';

export const Form = styled.form`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  label {
    font-size: 12px;
  }
  input + label {
    margin-top: 16px;
  }
`;
export const TextInput = styled.textarea`
  resize: none;
  border: none;
  font-size: 14px;
  height: 24px;
  margin-bottom: 15px;
  border-bottom: 1px solid var(--gray);
  outline: none;

  ::placeholder {
    color: var(--light-gray);
  }
`;

export const Input = styled.input`
  font-size: 14px;
  height: 32px;
  border-bottom: 1px solid var(--gray);

  ::placeholder {
    color: var(--light-gray);
  }
`;
