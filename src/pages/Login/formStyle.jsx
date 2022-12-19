import styled from 'styled-components';

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 12px;
  }

  input {
    font-size: 14px;
    height: 32px;
    border-bottom: 1px solid var(--gray);
    :focus {
      border-bottom: 1px solid var(--black);
    }
  }

  input::placeholder {
    font-size: 14px;
    color: var(--light-gray);
  }

  input + label {
    margin-top: 16px;
  }

  /* invalidSpan 추가시 스타일 */
  span + label {
    margin-top: 16px;
  }
`;

const InvalidSpan = styled.span`
  display: block;
  /* color: var(--light-red); */
  font-size: 12px;
  padding-top: 6px;
  &.success {
    color: var(--success-green);
  }
  &.error {
    color: var(--light-red);
  }
`;

export { FormStyle, InvalidSpan };
