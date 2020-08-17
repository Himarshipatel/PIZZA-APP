import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { Col, Row, Container } from "reactstrap";

const Vieworder = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col className="ordersuccess">
          congratulation Your Order Placed Successfully
        </Col>
      </Row>
      <Row>
        <Link to="/order">
          <Button color="danger" className="myorder">
            My Order
          </Button>
        </Link>
      </Row>
    </Container>
  );
};
export default Vieworder;
