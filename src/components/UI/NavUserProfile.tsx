import { useState } from "react";
import styled from "styled-components";
import userPicture from "../../assets/image-avatar.png";
import Menu from "../Navbar/Menu";

function NavUserProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenuHandler() {
    setIsMenuOpen(prevState => !prevState);
  }

  return (
    <MenuWrapper>
      {isMenuOpen && <Menu toggleMenuHandler={toggleMenuHandler} />}

      <UserProfilePicture>
        <img
          onMouseOver={toggleMenuHandler}
          src={userPicture}
          alt="user-picture"
        />
      </UserProfilePicture>
    </MenuWrapper>
  );
}

export default NavUserProfile;

const MenuWrapper = styled.div`
  display: flex;
  margin-top: auto;
  position: relative;
  min-height: 6rem;
  transition: all 0.25s;
`;

const UserProfilePicture = styled.div`
  margin-top: auto;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid var(--white);
  cursor: pointer;

  & img {
    max-width: 100%;
  }
`;
