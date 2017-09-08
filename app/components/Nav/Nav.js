import React from 'react'
import {NavLink} from 'react-router-dom'

//import css
import './Nav.scss'

//import dependency component
import {Header, Toggle, Brand, Collapse} from 'react-bootstrap/lib/NavbarHeader'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const NavRes = () => {
    return (
        // <Navbar inverse collapseOnSelect>
        //     <Navbar.Header>
        //     <Navbar.Brand>
        //         <LinkContainer to='/'>
        //             <NavItem>HOME</NavItem>
        //         </LinkContainer>
        //     </Navbar.Brand>
        //     <Navbar.Toggle />
        //     </Navbar.Header>
        //     <Navbar.Collapse>
        //     {/* <Nav> */}
        //         <NavLink to='/'>
        //             HOME PAGE
        //         </NavLink>
        //         {/* <NavItem eventKey={2} href="#">Link</NavItem> */}
        //         {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        //         <MenuItem eventKey={3.1}>Action</MenuItem>
        //         <MenuItem eventKey={3.2}>Another action</MenuItem>
        //         <MenuItem eventKey={3.3}>Something else here</MenuItem>
        //         <MenuItem divider />
        //         <MenuItem eventKey={3.3}>Separated link</MenuItem>
        //         </NavDropdown> */}
        //     {/* </Nav> */}
        //     <Nav>
        //         <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        //             <MenuItem><NavLink to='/' activeClassName='active'>
        //             HOME PAGE
        //         </NavLink></MenuItem>
        //             <MenuItem eventKey={3.3}>Something else here</MenuItem>
        //             <MenuItem divider />
        //             <MenuItem eventKey={3.3}>Separated link</MenuItem>
        //         </NavDropdown>
        //     </Nav>
            

        //     {/* <Nav pullRight>
        //         <NavItem eventKey={1} href="#">Link Right</NavItem>
        //         <NavItem eventKey={2} href="#">Link Right</NavItem>
        //     </Nav> */}
        //     </Navbar.Collapse>
        // </Navbar>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to='/'>
                HOME
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/'>
                <NavItem>HOME</NavItem>
            </LinkContainer>
            <LinkContainer to='/todo'>
                <NavItem>TODO</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title="APP" id="basic-nav-dropdown">
                <LinkContainer to='/todo'>
                    <MenuItem>Todo App</MenuItem>
                </LinkContainer>
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavRes