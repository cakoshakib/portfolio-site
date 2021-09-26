import React from 'react';
import Landing from './components/Landing'
import './App.css'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

import { Navbar, Nav, Button, Form } from 'react-bootstrap'


const App = () => {
  return (
    <Router>
      <div className="container">
      <Navbar collapseOnSelect expand="lg" variant="dark" id="navbar">
        <Navbar.Brand href="#">Shakib Rahman</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              <Link to="/">home</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/">placeholder</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

        <Switch>
          <Route path="/">
            <div className="d-flex flex-column min-vh-90 justify-content-center align-items-center">
              <Landing />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
