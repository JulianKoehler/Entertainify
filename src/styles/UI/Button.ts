import styled from "styled-components";

const Button = styled.button`
  background-color: var(--red);
  color: var(--white);
  padding: 1.5rem;
  border: none;
  border-radius: 0.6rem;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 1.9rem;
  cursor: pointer;
  transition: all 0.25s;

  &:active {
    color: var(--semi-dark-blue);
    background-color: var(--white);
  }
`;

export default Button;