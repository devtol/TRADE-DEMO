import styled from 'styled-components'

export const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 160px;
    position: fixed;
    background-color: grey;
    height: 100vh;
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
    color: rgba(40, 50, 230);
    &:hover{
        cursor: pointer;
        color: rgba(255, 255, 255);
        transition: .1s ease-in all;
    }
`

export const Icon = styled.div`

`

export const Text = styled.div`
    margin-left: 10px;
`