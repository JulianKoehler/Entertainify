import styled from "styled-components";
import bookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import bookmarkEmptyHover from "../../assets/icon-bookmark-empty-hover.svg";
import bookmarkFull from "../../assets/icon-bookmark-full.svg";
import bookmarkFullHover from "../../assets/icon-bookmark-full-hover.svg";
import { useState } from "react";

type BookmarkProps = {
  bookmarked: boolean;
  sendPatchRequest: (isBookmarked: boolean) => void;
};

const Bookmark = ({ bookmarked, sendPatchRequest }: BookmarkProps) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(bookmarked);
  return (
    <BookmarkIcon
      bookmarked={isBookmarked}
      onClick={() => {
        setIsBookmarked(prevState => !prevState);
        sendPatchRequest(isBookmarked);
      }}
    />
  );
};

export default Bookmark;

const BookmarkIcon = styled.div<{ bookmarked: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  margin: 2rem;
  width: 3.2rem;
  height: 3.2rem;
  background-image: url(${({ bookmarked }) => (bookmarked ? bookmarkFull : bookmarkEmpty)});
  background-repeat: no-repeat;
  background-color: var(--dark-blue-low-opacity);
  background-position: center;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: background 0.4s, transform 0.2s;

  &:hover {
    background-color: var(--white);
    background-image: url(${({ bookmarked }) => (bookmarked ? bookmarkFullHover : bookmarkEmptyHover)});
  }

  &:active {
    transform: scale(0.9);
  }
`;
