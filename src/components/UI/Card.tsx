import { ReactNode } from "react";
import styled from "styled-components";

type CardProps = {
  children: ReactNode;
  trending?: boolean;
};

const Card = ({ children, trending = false }: CardProps) => {
  return <Wrapper trending={trending}>{children}</Wrapper>;
};

export default Card;

const Wrapper = styled.div<{ trending: boolean }>`
  border-radius: 0.8rem;
  position: relative;

  & img:not(.category-icon) {
    width: ${({ trending }) => (trending ? "47rem" : "28rem")};
    height: ${({ trending }) => (trending ? "23rem" : "17.4rem")};
    border-radius: 0.8rem;
    transition: opacity 0.25s;

    @media (max-width: 900px) {
      width: ${({ trending }) => (trending ? "47rem" : "22rem")};
      height: ${({ trending }) => (trending ? "23rem" : "14rem")};
    }

    @media (max-width: 450px) {
      width: ${({ trending }) => (trending ? "24rem" : "16.4rem")};
      height: ${({ trending }) => (trending ? "14rem" : "11rem")};
    }

    @media (max-width: 380px) {
      width: ${({ trending }) => (trending ? "24rem" : "100%")};
      height: ${({ trending }) => (trending ? "14rem" : "auto")};
    }

    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }

    &:hover + .play-button {
      opacity: 1;
    }
  }
`;
