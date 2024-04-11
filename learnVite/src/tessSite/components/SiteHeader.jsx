import React from "react";
import { CNavbar, CNavbarBrand, CNavItem, CNavLink } from '@coreui/react'
import { CContainer } from '@coreui/react'
import { CImage } from '@coreui/react'
import { CDropdown, CDropdownItem, CDropdownDivider, CDropdownMenu, CDropdownToggle } from '@coreui/react'

import horizontalLogo from '../images/NFHHorizontalLogoPurple.png'
import { Link } from "react-router-dom"
import { FaAngleDown } from "react-icons/fa6";

const navLinkStyle = {
    fontSize: '1.3em',
    color: '#7E3C64'
}



export default function SiteHeader() {
    // const [droppedDown, setDroppedDown] = React.useState(false)

    // function toggleDropdown() {
    //     setDroppedDown(prevState => !prevState)
    // }
    
    return (
        // <nav className="header">
        //     <div className="header-menu">
        //         <div className="title-links-box left-links">
        //             <Link 
        //                 to="."  
        //                 onMouseOver={toggleDropdown}
        //                 onMouseOut={toggleDropdown}>
        //             MAIN MENU <FaAngleDown className="carrot" /></Link>
        //             <Link to="start-here">START HERE</Link>
        //             <Link to="blog">BLOG</Link>
        //         </div>

        //         {/* <div className="logo"></div> */}
        //         <Link to=".">Nourishing Functional Health</Link >

        //         <div className="title-links-box right-links">
        //             <Link to="." >RESOURCES <FaAngleDown className="carrot"/></Link>
        //             <Link to="." >NATURAL LIVING <FaAngleDown className="carrot"/></Link>
        //             <Link to="." >SHOP <FaAngleDown className="carrot"/></Link>
        //         </div>
        //     </div>
        //     {droppedDown ? (
        //         <div className="menu-dropdown">
        //             <div className="dropdown-content">
        //                 <Link to=".">MAIN MENU </Link>
        //                 <Link to="start-here">START HERE</Link>
        //                 <Link to="blog">BLOG</Link>
        //             </div>
        //         </div>
        //     ) : ""}
            
        // </nav>
        <>
            <CNavbar expand="lg" placement="sticky-top" colorScheme="light" style={{backgroundColor: '#ffffff', boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.15)', padding: '40px', height: '130px'}}>
                <CContainer fluid >
                    <CDropdown variant="nav-item" className="nav-link" style={navLinkStyle} offset={[0,10]}>
                        <CDropdownToggle trigger={["hover", "click"]}>Main Menu</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="/tessa-site">Home</CDropdownItem>
                            <CDropdownItem href="/tessa-site/about-tessa">About Tessa</CDropdownItem>
                            <CDropdownItem href="#">Success Stories</CDropdownItem>
                            <CDropdownDivider />
                            <CDropdownItem href="#">Contact Me</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    <CNavItem className="nav-link">
                        <CNavLink href="/tessa-site/start-here" style={navLinkStyle}>START HERE</CNavLink>
                    </CNavItem>
                    <CNavItem className="nav-link">
                        <CNavLink href="/tessa-site/blog" style={navLinkStyle}>Blog</CNavLink>
                    </CNavItem>

                    <CNavbarBrand href="/tessa-site" >
                        <CImage src={horizontalLogo} alt=""  height="100" />
                    </CNavbarBrand>

                    <CDropdown variant="nav-item" className="nav-link" style={navLinkStyle} offset={[0,10]}>
                        <CDropdownToggle trigger={['hover', 'click']}>Resources</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="#">Community</CDropdownItem>
                            <CDropdownItem href="#">Resources</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    <CDropdown variant="nav-item" className="nav-link" style={navLinkStyle} offset={[0,10]}>
                        <CDropdownToggle trigger={['hover', 'click']}>Natural Living</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="#">Natural Living</CDropdownItem>
                            <CDropdownItem href="#">GreenWashing</CDropdownItem>
                            <CDropdownItem href="#">Healthy Air</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                    <CDropdown variant="nav-item" className="nav-link" style={navLinkStyle} offset={[0,10]}>
                        <CDropdownToggle trigger={['hover', 'click']}>Shop</CDropdownToggle>
                        <CDropdownMenu>
                            <CDropdownItem href="https://www.amazon.com/shop/nourishingfunctionalhealth">Amazon</CDropdownItem>
                            <CDropdownDivider />
                            <CDropdownItem href="https://www.lifewave.com/nfh/enrollment/packs">Cellular Healing</CDropdownItem>
                            <CDropdownItem href="https://www.amare.com/et/5gpjgk/182693">Gut Healing - Adults</CDropdownItem>
                            <CDropdownItem href="https://www.amare.com/et/iewdxe/182693">Gut Healing - Kids</CDropdownItem>
                            <CDropdownDivider />
                            <CDropdownItem href="https://crunchi.com/?als=tessabowers">Make-up/Skin Care</CDropdownItem>
                            <CDropdownItem href="https://tessabowers.norwex.biz/">Healthy Home</CDropdownItem>
                        </CDropdownMenu>
                    </CDropdown>
                </CContainer>
            </CNavbar>
        </>
    )
}

// onMouseOver={() => setShopIsVis(true)} onMouseLeave={() => setShopIsVis(false)}