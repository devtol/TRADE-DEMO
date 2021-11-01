import styled from 'styled-components'

export const Main = styled.div`
    flex: 11;
    display: flex;
    flex-direction: column;
    margin-left: 160px;
    
   // margin-left: ${p => p.isSidebar ? '160px' : p.viewSidebar ? '75px' : '0px;'};
    transition: .1s ease-in all;
    width: 100vh;
`