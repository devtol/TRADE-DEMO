import React from 'react'
import { useState, useEffect } from 'react';

export default () => {
  const [viewSidebar, setViewsidebar] = useState(true);

  useEffect(() => {
    const updateWindowWidth = () => {
      if (window.innerWidth < 450) {
        setViewsidebar(false)
      } else if (window.innerWidth >= 450) {
        setViewsidebar(true)
      }
    }
    window.addEventListener('resize', updateWindowWidth);
  }, [viewSidebar])

  return [viewSidebar]
}
