import { Fab, Button } from '@mui/material'
import { Menu } from '@mui/icons-material';
import * as s from './Topbar.styles'
import UseViewSizePhone from '../../../hooks/UseViewSizePhone';
import UseIsSidebar from '../../../hooks/UseIsSidebar';

const Topbar = (props) => {

    const [isSidebar, setSidebar] = UseIsSidebar(props.isSidebar);
    const [viewSidebar, setViewsidebar] = UseViewSizePhone(props.viewSidebar);

    return (
        <s.Topbar
            isSidebar={isSidebar}
            viewSidebar={viewSidebar}
        >
            {!viewSidebar ?
                <Fab color="white" aria-label="add">
                    <Menu />
                </Fab>
                : <></>
            }
            <s.TopbarContentContainer
                isSidebar={isSidebar}
                viewSidebar={viewSidebar}
            >
                <s.TopbarLeftContainer>
                    bbbb
                </s.TopbarLeftContainer>
                <s.TopbarRightContainer
                    isSidebar={isSidebar}
                    viewSidebar={viewSidebar}
                >
                    sssssssssssssssss
                </s.TopbarRightContainer>
            </s.TopbarContentContainer>

        </s.Topbar>
    )
}

export default Topbar
