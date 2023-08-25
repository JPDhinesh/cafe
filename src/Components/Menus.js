import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function
    () {
    return (
        <div id='menuContainer'>
            <div className='menuContainerInfo'>
                <h2>MENU</h2>
                <Navbar className='mt-4'>
                    <Nav className='menuContainerList'>
                        <Nav.Link className='menuList' as={Link} to='/'>BREAKFAST</Nav.Link>
                        <Nav.Link className='menuList' as={Link} to='/lunch'>LUNCH</Nav.Link>
                        <Nav.Link className='menuList' as={Link} to='/dinner'>DINNER</Nav.Link>
                        <Nav.Link className='menuList' as={Link} to='/snacks'>SNACKS</Nav.Link>
                        <Nav.Link className='menuList' as={Link} to='/desserts'>DESSERTS</Nav.Link>
                    </Nav>
                </Navbar>

            </div>
        </div >
    )
}
