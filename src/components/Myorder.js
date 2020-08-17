import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../redux/actions/FetchData.js";

import { Col, Row, Container, Button } from "reactstrap";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";

import { myOrder } from "../redux/actions/FetchData";

const Myorder = () => {
  const { order } = useSelector((state) => ({
    order: state.products.order,
  }));
  console.log(order);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(myOrder());
  }, [dispatch]);

  return (
    <Container fluid={true}>
      <Col className="orderdesc">
        <h1> My Order</h1>
      </Col>
      <Row>
        <Col className="myorderlist">
          {order
            .slice(0)
            .reverse()
            .map((i, j) => (
              <li key={j} className="listing">
                <Moment format="Do MMM YYYY">{i.created_at}</Moment>
                <Moment format="HH:mm:ss">{i.created_at}</Moment>
                order number:{i.order_number}
                Status:{i.status}
                Total : {i.subtotal}
                Tax:{i.tax}
                Delivery Charge: {i.delivery_charge}
                Total Charge :
                {(i.subtotal = i.subtotal + i.tax + i.delivery_charge)}
                <hr />
              </li>
            ))}
        </Col>
      </Row>
    </Container>
  );
};
export default Myorder;
