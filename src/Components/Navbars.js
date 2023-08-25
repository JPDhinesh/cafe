import React from 'react'
import './Style.css'
import { Navbar, Nav } from 'react-bootstrap'
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbars() {
    return (
        <div>
            <div className='navbarContainer'>
                <Navbar>
                    <Nav>
                        <Nav.Link className='navList'>HOME</Nav.Link>
                        <AnchorLink href='#menuContainer' id='navbarList'><Nav.Link className='navList'>MENU</Nav.Link></AnchorLink>
                        <AnchorLink href='#aboutInfo' id='navbarList'><Nav.Link className='navList'>ABOUT US</Nav.Link></AnchorLink>
                    </Nav>
                </Navbar>
            </div>
            <div className='gifContainer'>
                <h1>Container Cafe</h1>
            </div>
        </div>
    )
}
