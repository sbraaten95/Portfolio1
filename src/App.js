import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.css";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Scott Braaten",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Eagle Eye",
        subtitle: "Quick learner, precise creator.",
        text: "See projects below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Let's Talk"
      }
    };
  }

  render() {
    return (
      <Router>
        {/* p-0 is padding 0 */}
        {/* fluid = true is 100% width for all devices. only use false when fixed size */}
        <Container className="p-0 space-background" fluid={true}>
          {/* bg is the background color (for instance, danger is red)
              see more at: https://getbootstrap.com/docs/4.0/utilities/colors/
              
              expand is the breakpoint below which the Navbar will collapse, 
              turning from navbar items into the sandwich menu option.
                 - Possible values are: true, sm, md, lg, and xl 
                 - You set it to true if you always want it to be expanded. */}
          <Navbar className="border-bottom" bg="white" expand="lg">
            <Navbar.Brand>Scott Braaten</Navbar.Brand>
            <Navbar.Toggle
              // border-0 gets rid of the border around the collapsed navbar
              className="border-0"
              aria-controls="navbar-toggle"
            />
            <Navbar.Collapse id="navbar-toggle">
              {/*ml-auto is margin left auto, shifts navbar components to the left*/}
              <Nav className="ml-auto">
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

          <Route
            path="/"
            //exact specifies the exact pathname
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subtitle={this.state.home.subtitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
