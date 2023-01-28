import styled from "styled-components";

interface PlayButtonProps {
  yOffset: string;
}

const PlayButton = ({ yOffset }: PlayButtonProps) => {
  return (
    <Container
      yOffset={yOffset}
      className="play-button">
      <svg
        width="30"
        height="30"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
          fill="#FFF"
        />
      </svg>
      Play
    </Container>
  );
};

export default PlayButton;

const Container = styled.div<{ yOffset: string }>`
  position: absolute;
  top: ${({ yOffset }) => yOffset};
  left: 50%;
  padding: 1rem;
  border-radius: 2.85rem;
  background-color: rgba(255, 255, 255, 0.25);
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 2rem;
  cursor: pointer;
  transition: transform 0.25s;
  opacity: 0;

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
    background-color: rgba(68, 68, 68, 0.75);
    opacity: 1;
  }

  &:active {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;
