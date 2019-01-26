import React from "react";
import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';
import Menu from '../../components/Menu.jsx';
import StyleConst from '../../style/constants';

const MenuContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: ${StyleConst.xs}) {
        flex-direction: column;
    }
`;

const CardItem = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 240px;
    height: 280px;
    box-sizing: border-box;
    margin: 1rem;
    padding: 1rem;
    background-color: #f0f8ff;
    box-shadow: 0 .8rem 3rem 0 rgba(0, 0, 0, 0.15);
    user-select: none;
    font-weight: 600;
    font-size: 24px;
    letter-spacing: 4px;
    color: #4d91bb;
    text-transform: uppercase;
    
    & > img {
        height: 180px;
        object-fit: contain;
    }
    
    @media (max-width: ${StyleConst.xs}) {
        width: 200px;
        height: 80px;
      
        & > img {
          display: none;
        }
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
        <MenuContainer>
            <Menu linkComponent={({ path, title, img }) => (
                <LinkItem
                    key={path}
                    to={path}>
                    <CardItem>
                        <img src={img} alt={title} />
                        <span>{title}</span>
                    </CardItem>
                </LinkItem>
            )} />
        </MenuContainer>
    )
};

export default MainMenu;