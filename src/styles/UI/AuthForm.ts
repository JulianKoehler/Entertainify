import styled from "styled-components";

const AuthPageWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  & img {
    max-width: 3.2rem;
  }

  & form {
    background-color: var(--semi-dark-blue);
    width: 40rem;
    padding: 3.2rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    & input {
      padding: 0 1rem 1.8rem 1rem;
      background-color: transparent;
      border: none;
      border-bottom: 1px solid var(--greyish-blue);
      color: var(--white);

      &:focus {
        outline: none;
      }

      &.invalid {
        border-bottom: 1px solid var(--red);
      }
    }

    & h1 {
      margin-bottom: 2rem;
    }

    & button {
      margin-top: 2rem;
    }

    & p {
      text-align: center;
      margin-top: 0.4rem;

      & a {
        color: var(--red);
      }
    }

    & .invalid-email {
      position: absolute;
      top: 18.5rem;
      right: 4rem;
      color: var(--red);
      margin-top: 0;
    }

    & .invalid-password {
      position: absolute;
      top: 24.5rem;
      right: 4rem;
      color: var(--red);
      margin-top: 0;
    }
  }
`;

export default AuthPageWrapper;
