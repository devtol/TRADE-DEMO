import * as s from './Sidebar.styles'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import { StorefrontOutlined } from '@mui/icons-material';

const Sidebar = (props) => {
    const {
        menuItems = [],
    } = props

    const menuItemComponent = menuItems.map((item, index) => {
        return (
            <s.MenuitemContainer key={item.id}>
                <Link to={item.to} style={{ textDecoration: "none" }}>
                    <s.MenuItem>
                        <s.Icon>{item.icon}</s.Icon>
                        <s.Text>{item.name}</s.Text>
                    </s.MenuItem>
                </Link>
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
