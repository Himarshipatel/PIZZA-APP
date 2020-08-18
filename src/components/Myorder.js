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

      <Col>
        <Table responsive className="tabell">
          <thead className="tablehead">
            <tr>
              <th>Date</th>
              <th>Time</th>

              <th>Pizza total</th>

              <th>Charge</th>

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

                  <td>{item.delivery_charge}</td>

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
      </Col>
    </Container>
  );
};
export default Myorder;
