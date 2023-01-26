import React, { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children?: ReactNode;
  trending?: boolean;
}

const Card = ({ children, trending = false }: CardProps) => {
  return <Style trending={trending}>{children}</Style>;
};

export default Card;

const Style = styled.div<{ trending: boolean }>`
  border-radius: 0.8rem;
  position: relative;

  & img:not(.category-icon) {
    width: ${({ trending }) => (trending ? "47rem" : "28rem")};
    height: ${({ trending }) => (trending ? "23rem" : "17.4rem")};
    border-radius: 0.8rem;
  }
`;
