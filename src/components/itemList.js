import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addToCart, add, subtract } from "../redux/actions/Action.js";
import { fetchProducts } from "../redux/actions/FetchData";
import { Redirect } from "react-router-dom";
import { Card, Row, Col, Container, Button } from "reactstrap";
import Image from "react-bootstrap/Image";
import Banner from "./Banner.js";
const ItemList = (props) => {
  const { item } = useSelector((state) => ({
    item: state.products.item,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const addToCartItem = (e, id) => {
    dispatch(addToCart(id));
  };

  const addItem = (e, id) => {
    dispatch(add(id));
  };

  const subtractItem = (e, id) => {
    dispatch(subtract(id));
  };
  const auth = localStorage.getItem("auth");

  return (
    <>
      <Banner />
      {auth ? (
        <div className="itemslist">
          <div>
            <h3 className="natural">natural Ingredient</h3>
          </div>
          <div>
            <h1 className="menuuu">Menu</h1>
          </div>
          <Container fluid={true}>
            <Row className="carddrow">
              {item.map((i) => (
                <Card key={i.id} className="cardd">
                  <Col className="Imagecol">
                    <Image
                      src={i.image}
                      alt="loading..."
                      width="200px"
                      height="200px"
                      className="Image"
                      roundedCircle
                    />
                  </Col>

                  <b classname="pizzaname">
                    <p className="pizzanamecolor">{i.name}</p>
                  </b>

                  <Col className="description">
                    <b className="ingribold">Ingredient :</b>{" "}
                    <p className="ingricolor">{i.description}</p>
                  </Col>

                  <p className="price">Price : ${i.price}</p>
                  {!i.quantity ? (
                    <Button
                      color="danger"
                      onClick={(e) => addToCartItem(e, i.id)}
                    >
                      Add to cart
                    </Button>
                  ) : (
                    <Row>
                      <Col sm="4">
                        <Button
                          onClick={(e) => subtractItem(e, i.id)}
                          className="butnum"
                          color="success"
                        >
                          -
                        </Button>
                      </Col>
                      <Col sm="4">
                        <Button className="butnum" color="success">
                          {i.quantity}
                        </Button>
                      </Col>
                      <Col sm="4">
                        <Button
                          className="butnum"
                          color="success"
                          onClick={(e) => addItem(e, i.id)}
                        >
                          +
                        </Button>
                      </Col>
                    </Row>
                  )}
                </Card>
              ))}
            </Row>
          </Container>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};
export default ItemList;
