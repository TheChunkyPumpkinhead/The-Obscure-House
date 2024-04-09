import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: purple;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

function SideBar() {
  return <StyledSidebar>SideBar</StyledSidebar>;
}

export default SideBar;
