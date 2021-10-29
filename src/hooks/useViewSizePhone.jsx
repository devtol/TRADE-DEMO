import { useState, useEffect } from 'react';

export default (init) => {
    const [viewSidebar, setViewsidebar] = useState(init);

    const handler = useEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWidth < 450) {
                setViewsidebar(false)
            } else if (window.innerWidth >= 450) {
                setViewsidebar(true)
            }
        }
        window.addEventListener('resize', updateWindowWidth);
    }, [viewSidebar])

    return [viewSidebar, handler]
}
