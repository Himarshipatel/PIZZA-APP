import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import {
  Row,
  Col,
  Button,
  Container,
  UncontrolledCarousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const Banner = () => {
  return (
    <Container fluid={true}>
      <Row className="navmenu">
        <Col className="banlabel" sm="6">
          <h1>Cheesy Pizza</h1>

          <Col className="subtitle">
            Incididunt ut labourdolore megna aliqua.urenim
          </Col>
          <Col className="subtitle">
            add minim vemiam,quis nostrud exercitation
          </Col>
          <Button color="danger" className="moredeal">
            More deals
          </Button>
        </Col>
        {/* ------second col------ */}
        <Col className="bansidebar" sm="6">
          <Col className="offer">Special Offer</Col>

          <Col className="pizaa">
            <Carousel interval={1500}>
              <Carousel.Item>
                <Image
                  src="https://images.dominos.co.in/new_cheese_n_corn.jpg"
                  alt=""
                  roundedCircle
                  className="bannerimg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="https://images.dominos.co.in/new_fresh_veggie.jpg"
                  alt=""
                  roundedCircle
                  className="bannerimg"
                />
              </Carousel.Item>
              <Carousel.Item>
                <Image
                  src="https://images.dominos.co.in/updated_paneer_makhani.jpg"
                  alt=""
                  roundedCircle
                  className="bannerimg"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
