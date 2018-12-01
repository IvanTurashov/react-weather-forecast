import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "react-emotion";
import Menu from './Menu.jsx';

const MenuContainer = styled('nav')`
  display: flex;
  border-bottom: 1px solid black;
`;

const MenuLink = styled(NavLink)`
  padding: 0.8rem 1rem;
  margin: 0.5rem;
  color: black;
  
  &.active {
    color: brown;
  }
  
  &:hover,
  &:active {
    color: aqua;
  }
`;

const Nav = () => {
    return (
        <MenuContainer>
            <Menu linkComponent={({ path, title }) => (
                <MenuLink
                    key={path}
                    to={path}>
                    {title}
                </MenuLink>
            )} />
        </MenuContainer>
    )
};

export default Nav;