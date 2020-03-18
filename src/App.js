import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    return <Router></Router>;
  }
}

export default App;
