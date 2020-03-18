import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Scott Braaten",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Resume", path: "/resume" }
      ],
      home: {
        title: "",
        subtitle: "",
        text: "See projects below"
      },
      about: {
        title: "About Me"
      },
      content: {
        title: "Let's Talk"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom">
            <Navbar.Brand>Scott Braaten</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" className="" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav>
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }
}

export default App;
