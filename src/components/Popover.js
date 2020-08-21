import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, subtract, removeItemFromCart } from "../redux/actions/Action.js";
import { Row, Col, Button } from "reactstrap";
import Image from "react-bootstrap/Image";

const Popoverr = () => {
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
    <>
      <div>
        {cart.map((i, j) => (
          <>
            <div key={i.id}>
              <Row>
                <Col>
                  <Image
                    src={i.image}
                    alt="loading..."
                    width="70px"
                    height="70px"
                    className="popuppizza"
                    roundedCircle
                  />
                </Col>
                <Col>{i.name}</Col>

                <Col>
                  <b>${i.price}</b>
                </Col>
              </Row>
              <Row className="removepopup">
                <Col className="quantitynum">
                  <button onClick={(e) => subtractItem(e, i.id)}>-</button>
                  <button>{i.quantity}</button>
                  <button onClick={(e) => addItem(e, i.id)}>+</button>
                </Col>

                <Col className="removebut">
                  <Button
                    color="danger"
                    onClick={(e) => removeItem(e, i.id, i.price * i.quantity)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Popoverr;
