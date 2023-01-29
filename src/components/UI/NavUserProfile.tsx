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

  @media (max-width: 900px) {
    margin: 0;
    min-height: 0;
  }
`;

const UserProfilePicture = styled.div`
  margin-top: auto;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid var(--white);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    margin: 0;
    width: 3.4rem;
    height: 3.4rem;
  }

  & img {
    height: 100%;
  }
`;
