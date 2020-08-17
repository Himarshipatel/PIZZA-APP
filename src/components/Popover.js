import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, subtract, removeItemFromCart } from "../redux/actions/Action.js";
import { Row, Col, Button } from "reactstrap";
import Image from "react-bootstrap/Image";
import Total from "./Total.js";
const Popoverr = () => {
  const { cart } = useSelector((state) => ({
    cart: state.products.cart,
  }));
  console.log(cart);
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
      {cart == 0 ? (
        <div className="cartempty">Cart Empty</div>
      ) : (
        <div>
          {cart.map((i, j) => (
            <>
              <div key={i.id}>
                <Image
                  src={i.image}
                  alt="loading..."
                  width="200px"
                  height="200px"
                  className="Image"
                  roundedCircle
                />

                <h3>{i.name}</h3>
                {/* <p>Ingredient :</p> */}
                {/* <Col className="popdesc">{i.description}</Col> */}
                <p>Price : ${i.price}</p>

                <Row>
                  <Col sm="5">
                    <button onClick={(e) => subtractItem(e, i.id)}>-</button>
                    <button>{i.quantity}</button>
                    <button onClick={(e) => addItem(e, i.id)}>+</button>
                  </Col>

                  <Col sm="4">
                    <Button
                      color="danger"
                      onClick={(e) => removeItem(e, i.id, i.price * i.quantity)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>

                <hr />
              </div>
            </>
          ))}
        </div>
      )}

      <Total />
      <hr />
    </>
  );
};
export default Popoverr;
