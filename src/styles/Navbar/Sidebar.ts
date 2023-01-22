import styled from "styled-components";

const Sidebar = styled.aside`
  background-color: transparent;
  padding: 2rem;
  display: inline-block;
  height: 100vh;
  max-height: 96rem;

  & .content {
    width: 9.6rem;
    height: 100%;
    background-color: var(--semi-dark-blue);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    padding: 3.5rem 3rem;
    gap: 5.5rem;

    & nav {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;
    }
  }
`;

export default Sidebar;
