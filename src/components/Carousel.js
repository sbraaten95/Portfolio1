import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Card from "./Card.js";

import django from "../assets/images/django.png";
import mean from "../assets/images/mean1.png";
import rails from "../assets/images/rails.png";
import ajax from "../assets/images/ajax1.jpg";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "FitnessApp with Django",
          subtitle: "Utilizes the Nutritionix API for food data.",
          imgSrc: django,
          websiteLink: "",
          codeLink: "https://github.com/Sunk1st/FitnessApp",
          selected: false
        },
        {
          id: 1,
          title: "liveLive with MEAN",
          subtitle: "Have YouTube video watching parties over the internet.",
          imgSrc: mean,
          websiteLink: "",
          codeLink: "https://github.com/sbraaten95/liveLive",
          selected: false
        },
        {
          id: 2,
          title: "Blog with RoR",
          subtitle: "A sample blog app.",
          imgSrc: rails,
          websiteLink: "",
          codeLink:
            "https://github.com/sbraaten95/coding_dojo_ruby_on_rails_web_development/tree/master/rails/blog",
          selected: false
        },
        {
          id: 3,
          title: "Rails Ajax Pagination",
          subtitle: "Tweaking the pagination gem with ajax.",
          imgSrc: ajax,
          websiteLink: "",
          codeLink: "https://github.com/sbraaten95/RailsAjaxPagination",
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
