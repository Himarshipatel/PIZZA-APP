import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, subtract, removeItemFromCart } from "../redux/actions/Action.js";
import { Col, Row, Container, Button } from "reactstrap";
import Total from "./Total.js";
import Form from "./Form.js";

const CartList = () => {
  const { cart } = useSelector((state) => ({
    cart: state.products.cart,
  }));

  const dispatch = useDispatch();
  const addItem = (e, id) => {
    dispatch(add(id));
  };
  const subtractItem = (e, id) => {
    dispatch(subtract(id));
  };

  const removeItem = (e, id, amount) => {
    dispatch(removeItemFromCart(id, amount));
  };

  return (
    <Container fluid={true}>
      <Col className="orderdesc">
        <h1>Your Order</h1>
      </Col>
      {cart == 0 ? (
        <div className="cartempty">Cart Empty</div>
      ) : (
        <Col className="yourorder">
          {cart.map((i, j) => (
            <ul key={j}>
              <Row className="ordersrow">
                <Col className="displaydesc" sm="6">
                  <div>
                    <img
                      src={i.image}
                      alt="loading..."
                      width="180px"
                      height="180px"
                    />
                  </div>
                </Col>
                <Col className="diapaydetail" sm="6">
                  <h3>{i.name}</h3>

                  <p>Ingredient :{i.description}</p>
                  <p>Quantity : {i.quantity}</p>
                  <p>Price : ${i.price}</p>
                </Col>
              </Row>
            </ul>
          ))}
        </Col>
      )}
      <Col>
        <Total />
      </Col>
      <Col className="formdetail">
        <Form />
      </Col>
    </Container>
  );
};
export default CartList;
