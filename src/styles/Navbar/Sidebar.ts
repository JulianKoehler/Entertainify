import styled from "styled-components";

const Sidebar = styled.aside`
  background-color: transparent;
  padding: 2rem;
  display: inline-block;
  height: 100vh;
  max-height: 96rem;

  @media (max-width: 900px) {
    height: 7.2rem;
    width: 100%;
  }

  & .content {
    width: 9.6rem;
    height: 100%;
    background-color: var(--semi-dark-blue);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    padding: 3.5rem 3rem;
    gap: 5.5rem;

    @media (max-width: 900px) {
      flex-direction: row;
      align-items: center;
      width: 100%;
      padding: 2.1rem 1.6rem 1.9rem 2.4rem;
      height: auto;
      justify-content: space-between;
      gap: 0;
    }

    & img {
      width: 3.8rem;
      height: 3.8rem;

      @media (max-width: 900px) {
        width: 3.2rem;
        height: 3.2rem;
      }
    }

    & nav {
      display: flex;
      flex-direction: column;
      gap: 3.5rem;

      @media (max-width: 900px) {
        flex-direction: row;
      }

      & li {
        list-style: none;

        &:hover {
          color: var(--red);
        }
      }
    }
  }

  & .navLink:hover > .navLink__cell {
    fill: var(--red);
  }
`;

export default Sidebar;
