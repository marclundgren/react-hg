import styled from "styled-components";

const Hg = styled.div`
  height: 100vh;
  display: grid;

  grid-template-areas:
    "header header header"
    "navigation main aside"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;

  // Responsive
  @media (max-width: 768px) {
    grid-template-areas:
      "header"
      "navigation"
      "main"
      "aside"
      "footer";

    grid-template-columns: 1fr;
    grid-template-rows:
      auto /* Header */
      minmax(75px, auto) /* Nav */
      1fr /* Main */
      minmax(75px, auto) /* Aside */
      auto; /* Footer */
  }
`;

export const Header = styled.header`
  grid-area: header;
`;
export const Navigation = styled.nav`
  grid-area: navigation;
`;
export const Main = styled.main`
  grid-area: main;
`;
export const Footer = styled.footer`
  grid-area: footer;
`;
export const Aside = styled.aside`
  grid-area: aside;
`;

export default Hg;
