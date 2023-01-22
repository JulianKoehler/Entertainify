import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";

const SharedContent = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedContent;
