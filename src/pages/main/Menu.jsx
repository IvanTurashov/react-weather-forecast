import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "react-emotion";
import Menu from '../../components/Menu.jsx';

const CardItem = styled('div')`
    box-sizing: border-box;
    width: 240px;
    height: 288px;
    justify-content: space-around;
    align-items: center;
    margin: 0 1rem;
    padding: 1rem;
    background-color: aquamarine;
    user-select: none;
    
    & > img {
        height: 130px;
        object-fit: contain;
    }
`;

const LinkItem = styled(NavLink)` 
    transition: all 0.2s;

    &, &:active {
        color: #000;
        text-decoration: none;
    }    
    
    &:active {
        transform: scale(0.975) translateY(5px);
    }
`;

const MainMenu = () => {
    return (
        <div>
            <Menu linkComponent={({ path, title }) => (
                <LinkItem to={path}>
                    <CardItem>
                        <span>{title}</span>
                    </CardItem>
                </LinkItem>
            )}/>
        </div>
    )
};

export default MainMenu;