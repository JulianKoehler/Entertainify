import React from "react";
import styled from "styled-components";
import AuthForm from "../components/Authentication/AuthForm";
import Logo from "../components/UI/Logo";

const AuthPage = () => {
  return (
    <AuthPageWrapper>
      <Logo />
      <AuthForm />
    </AuthPageWrapper>
  );
};

export default AuthPage;

const AuthPageWrapper = styled.div`
  margin: 10rem auto;
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
  }
`;
