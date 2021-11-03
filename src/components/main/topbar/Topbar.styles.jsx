import styled from 'styled-components'

export const Topbar = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    min-height: 75px;
    max-height: 75px;
    position: fixed;
    width: 100%;
    background-color: #d8c1c1;
`

export const TopbarContentContainer = styled.div`
    flex: 3;
    border: 1px solid red;
    height: 75px;
    //padding-right: ${p => p.isSidebar ? '160px' : p.viewSidebar ? '75px' : '0px;'};
    display: flex;
`

export const TopbarLeftContainer = styled.div`
    flex: 3;
    border: 1px solid blue;
    position: relative;
`

export const TopbarRightContainer = styled.div`
    flex: 1;
    border: 1px solid green;
    position: fixed;
    height: 75px;
    top: 0;
    right: 0;
    text-align: right;
    width: ${p => p.isSidebar ? '260px' : p.viewSidebar ? '130px' : '0px;'};
    transition: .1s ease-in all;
    //margin-right: ${p => p.isSidebar ? '160px' : p.viewSidebar ? '75px' : '0px;'};
`
export const SideButton = styled.button`
    border: none;
    background-color: gray;
    padding: 10px;
    margin-right: 10px;
`
