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
  margin: 5rem auto;
`;
