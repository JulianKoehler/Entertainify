import { Form } from "react-router-dom";
import styled from "styled-components";

type MenuProps = {
  toggleMenuHandler: VoidFunction;
};

const Menu = ({ toggleMenuHandler }: MenuProps) => {
  return (
    <MenuContainer onMouseOut={toggleMenuHandler}>
      <Form
        action="/logout"
        method="post">
        <LogoutButton>Logout</LogoutButton>
      </Form>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  position: absolute;
  top: -3.5rem;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 900px) {
    top: -0.5rem;
    left: -4.5rem;
  }
`;

const LogoutButton = styled.button`
  background-color: var(--dark-blue);
  color: white;
  border: none;
  padding: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    color: var(--semi-dark-blue);
    background-color: var(--white);
  }
`;
