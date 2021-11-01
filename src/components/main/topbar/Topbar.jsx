import { Fab, Button } from '@mui/material'
import { Menu } from '@mui/icons-material';
import * as s from './Topbar.styles'
import UseViewSizePhone from '../../../hooks/UseViewSizePhone';

const Topbar = () => {

    //윈도우 사이즈에 따라 사이드바 숨김
    const [viewSidebar, setViewsidebar] = UseViewSizePhone(
        window.innerWidth < 485 ? false
            : true
    );

    return (
        <s.Topbar>
            {!viewSidebar ?
                <Fab color="white" aria-label="add">
                    <Menu />
                </Fab>
                : <></>
            }
            <s.TopbarContentContainer>
                content
            </s.TopbarContentContainer>
            <s.TopbarSideContainer>
                side
            </s.TopbarSideContainer>
        </s.Topbar>
    )
}

export default Topbar
