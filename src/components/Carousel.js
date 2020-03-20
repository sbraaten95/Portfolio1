import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "./Card.js";

import edit from "../assets/images/edit.png";
import red from "../assets/images/red.jpg";
import screen from "../assets/images/screen.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Alchemy",
          subtitle: "Concoct your cognitive optimization.",
          imgSrc: edit,
          websiteLink: "dsal",
          codeLink: "",
          selected: false
        },
        {
          id: 1,
          title: "Associate",
          subtitle: "See how random things relate.",
          imgSrc: red,
          websiteLink: "afs",
          codeLink: "",
          selected: false
        },
        {
          id: 2,
          title: "Fleet",
          subtitle: "Sedan, SUV and Limo service.",
          imgSrc: screen,
          websiteLink: "asdf",
          codeLink: "https://github.com/sbraaten95/Fleet",
          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) item.selected = false;
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
