import { useState, useEffect } from 'react';

export default (init) => {
    const [isSidebar, setSidebar] = useState(init)

    const handler = useEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWidth >= 485 && window.innerWidth < 1280) {
                setSidebar(false)
            } else if (window.innerWidth >= 1280) {
                setSidebar(true)
            }
        }
        window.addEventListener('resize', updateWindowWidth);

        return () => window.removeEventListener('resize', updateWindowWidth)
    }, [isSidebar])

    return [isSidebar, handler]
}
