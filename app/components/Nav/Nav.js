import React from 'react'
import {NavLink} from 'react-router-dom'

//import css
import './Nav.scss'

//import dependency component
import {Header, Toggle, Brand, Collapse} from 'react-bootstrap/lib/NavbarHeader'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

const NavRes = props => {
    const pathname = window. location. pathname.indexOf('/app/')
    return (
      <Navbar inverse collapseOnSelect bsClass='navbar' style={{ borderRadius: 0 }}>
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
            <IndexLinkContainer to='/' activeHref='active'>
                <NavItem>REACT REDUX</NavItem>
            </IndexLinkContainer>
            <IndexLinkContainer to='/about' activeHref='active'>
                <NavItem>ABOUT</NavItem>
            </IndexLinkContainer>
            <NavDropdown eventKey={3} title="APP" id="basic-nav-dropdown" className={pathname!==-1 ? 'active':''} activeHref='active'>
                <LinkContainer to='/app/todo' exact>
                    <MenuItem eventKey={3.1}>Todo App</MenuItem>
                </LinkContainer>
                <LinkContainer to='/app/userapi' exact>
                    <MenuItem eventKey={3.1}>User Api App</MenuItem>
                </LinkContainer>
                <LinkContainer to='/app/githubapi'>
                    <MenuItem>Github App</MenuItem>
                </LinkContainer>
                <LinkContainer to='/app/userbapi' exact>
                    <MenuItem>User App</MenuItem>
                </LinkContainer>
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