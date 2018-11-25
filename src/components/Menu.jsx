import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import styled from 'react-emotion';
import routes from '../routes';

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

const Menu = () => {
    return (
        <MenuContainer>
            {routes
                .filter(route => route.toMenu)
                .map(({ path, title }) => {
                    return (
                        <MenuLink
                            key={path}
                            to={path}>
                            {title}
                        </MenuLink>
                    )
                })}
        </MenuContainer>
    )
};

export default withRouter(Menu);