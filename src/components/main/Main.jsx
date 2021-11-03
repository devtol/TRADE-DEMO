import Topbar from './topbar/Topbar'
import * as s from './Main.styles'
import Body from './body/Body'
import UseViewSizePhone from '../../hooks/UseViewSizePhone';
import UseIsSidebar from '../../hooks/UseIsSidebar';

const main = () => {

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

    return (
        <s.Main
            isSidebar={isSidebar}
            viewSidebar={viewSidebar}
        >
            <Topbar
                isSidebar={isSidebar}
                viewSidebar={viewSidebar}
            />
            <Body
            />
        </s.Main>
    )
}

export default main
