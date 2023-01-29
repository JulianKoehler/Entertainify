import styled from "styled-components";

const RecommendedSection = styled.section`
  width: 100%;

  & h1 {
    margin: 3rem 0;

    @media (max-width: 450px) {
      margin: 0;
    }
  }
`;

export default RecommendedSection;
