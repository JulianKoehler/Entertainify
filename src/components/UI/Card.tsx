import { ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
  children?: ReactNode;
  trending?: boolean;
}

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
  }

  &:hover > img {
    opacity: 0.5;
    cursor: pointer;
  }

  &:hover > .play-button {
    opacity: 1;
  }
`;
