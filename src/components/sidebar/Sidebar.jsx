import * as s from './Sidebar.styles'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Home from '../../pages/Home';
import UseViewSizePhone from '../../hooks/UseViewSizePhone';
import UseIsSidebar from '../../hooks/UseIsSidebar';

const Sidebar = (props) => {
  const {
    menuItems = [],
  } = props

  //state
  const [selectedMenuItem, setSelectedMenuItem] = useState("")

  const handleMenuItemClick = (name) => {
    setSelectedMenuItem(name);
  }
  //윈도우 사이즈에 따라 사이드바 숨김
  const [viewSidebar, setViewsidebar] = UseViewSizePhone(
    window.innerWidth < 485 ? false
      : true
  );

  //윈도우 사이즈에 따라 사이드바 조절
  const [isSidebar, setSidebar] = UseIsSidebar(
    window.innerWidth >= 1280 ? true
      : false
  )

  const menuItemComponent = menuItems.map((item, index) => {
    //메뉴 클릭시 텍스트 컬러 유지
    const isItemSelected = selectedMenuItem === item.name;
    return (
      <s.MenuitemContainer key={item.id}>
        <Link to={item.to} style={{ textDecoration: "none" }}>
          <s.MenuItem
            onClick={() => handleMenuItemClick(item.name)}
            isItemSelected={isItemSelected}
          >
            <s.Icon>{item.icon}</s.Icon>
            <s.Text isSidebar={isSidebar}>{item.name}</s.Text>
          </s.MenuItem>
        </Link>
      </s.MenuitemContainer>
    )
  })

  return (
    <s.SidebarContainer
      isSidebar={isSidebar}
      viewSidebar={viewSidebar}
    >
      <s.HeaderContainer>
        <Link to="/home">
          {"home"}
        </Link>
      </s.HeaderContainer>
      <s.SidemenuContainer>
        {menuItemComponent}
      </s.SidemenuContainer>
    </s.SidebarContainer>
  )
}

export default Sidebar
