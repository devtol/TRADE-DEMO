import styled from 'styled-components'
import Topbar from './topbar/Topbar'
import * as s from './Main.styles'
import Body from './body/Body'

const main = () => {

    return (
        <s.Main>
            <Topbar />
            <Body />
        </s.Main>
    )
}

export default main
