import { Nav, NavItem, NavLink, NavSection } from "../components/Nav";

export const AppNav = () => {
  return (
    <Nav>
      <NavSection>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/flights">Flights</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/new-flights">New Flight</NavLink>
        </NavItem>
      </NavSection>
    </Nav>
  );
};
