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
    flex: 2;
    border: 1px solid red;
`

export const TopbarSideContainer = styled.div`
    flex: 1;
    border: 1px solid blue;
`
export const SideButton = styled.button`
    border: none;
    background-color: gray;
    padding: 10px;
    margin-right: 10px;
`
