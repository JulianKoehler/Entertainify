import styled from "styled-components";

const ErrorPage = styled.main`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: center;

  & section {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  & a button {
    margin-inline: auto;
  }
`;

export default ErrorPage;
