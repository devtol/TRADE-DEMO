import * as s from './Sidebar.styles'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';

const Sidebar = (props) => {
    const {
        menuItems = [],
    } = props

    const menuItemComponent = menuItems.map((item, index) => {
        return (
            <s.MenuitemContainer key={item.id}>
                {item.name}
            </s.MenuitemContainer>
        )
    })

    return (
        <s.SidebarContainer>
            <s.HeaderContainer>
                <Link to="/home">
                    <Home />
                </Link>
            </s.HeaderContainer>
            <s.SidemenuContainer>
                {menuItemComponent}
            </s.SidemenuContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
