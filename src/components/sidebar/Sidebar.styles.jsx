import styled from 'styled-components'

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 75px;
    position: fixed;
    background-color: gray;
    height: 100vh;
    width: ${p => p.isSidebar ? '160px' : '75px'};
    transition: .1s ease-in all;
    left: ${p => p.viewSidebar ? '0px' : '-100px'};
`

export const HeaderContainer = styled.div`
    flex: 1;
    min-height: 75px;
    max-height: 75px;
    background-color: #eee;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SidemenuContainer = styled.div`
    flex: 11;
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const MenuitemContainer = styled.div`
    padding: 10px;
    margin-left: 10px;
`

export const MenuItem = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 5px;
    color: ${p => p.isItemSelected ? 'rgba(255, 255, 255)' : 'rgba(40, 50, 230)'};
    font-size: 24px;

    transition: .1s ease-in all;
    &:hover{
        cursor: pointer;
        color: rgba(255, 255, 255);
        transition: .1s ease-in all;
    }
`

export const Icon = styled.div`
    margin-top: 5px;
    display: flex;
    align-items: center;
`

export const Text = styled.div`
    display: flex;    
    margin-left: 10px;
    ${p => p.isSidebar ? 'visibility: visible' : 'visibility: hidden'}
    //visibility: ${p => p.isSidebar ? 'visible' : 'hidden'};
`