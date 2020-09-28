import React from 'react'
import MobileNav from '../ItemComponents/MobileNav'

import { useViewport } from '../Hooks/useViewport';
import DesktopNav from '../ItemComponents/DesktopNav';

function Header() {
    const { width } = useViewport();
    const breakpoint = 628;

    return (
        <div>
            {/*
             Use width to render the desktop or mobile navigation menu.
            */} 
            {width < breakpoint ? <MobileNav /> : <DesktopNav />}
        </div>
    )
}

export default Header
