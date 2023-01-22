import styled from "styled-components";
import userPicture from "../../assets/image-avatar.png";

function NavUserProfile() {
  return (
    <UserProfilePicture>
      <img
        src={userPicture}
        alt="user-picture"
      />
    </UserProfilePicture>
  );
}

const UserProfilePicture = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid var(--white);
  margin-top: auto;
  cursor: pointer;

  & img {
    max-width: 100%;
  }
`;

export default NavUserProfile;
