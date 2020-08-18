import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../redux/actions/FetchData.js";

import { Col, Row, Container, Button } from "reactstrap";
import Moment from "react-moment";
import { useHistory } from "react-router-dom";
import { Table } from "reactstrap";
import { myOrder } from "../redux/actions/FetchData";

const Myorder = () => {
  const { order } = useSelector((state) => ({
    order: state.products.order,
  }));
  console.log(order);
  const total = useSelector((state) => state.products.total);

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
        <Col>
          <Table responsive className="tabell">
            <thead className="tablehead">
              <tr>
                <th>Date</th>
                <th>Time</th>

                <th>Pizza total</th>
                <th>Subtotal</th>
                <th>Charge</th>
                <th>Tax</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order
                .slice(0)
                .reverse()
                .map((item, index) => (
                  <tr key={index}>
                    <td>
                      <Moment format="Do MMM YYYY">{item.created_at}</Moment>
                    </td>
                    <td>
                      <Moment format="HH:mm:ss">{item.created_at}</Moment>
                    </td>

                    <td>
                      {item.items.map((item, index) => (
                        <li key={index} className="pizzasubtotallist">
                          {item.total}
                        </li>
                      ))}
                    </td>
                    <td>{item.subtotal}</td>
                    <td>{item.delivery_charge}</td>
                    <td>{item.tax}</td>
                    <td className="totalcharge">
                      $
                      {
                        (item.subtotal =
                          item.subtotal + item.tax + item.delivery_charge)
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          {/* <Col className="myorderlist">
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
        </Col> */}
        </Col>
      </Row>
    </Container>
  );
};
export default Myorder;
