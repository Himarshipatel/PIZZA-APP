import React from "react";
import { Col, Button, Container } from "reactstrap";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../actions/fetchData.js";
import { useHistory } from "react-router-dom";

import { Link, BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import * as Yup from "yup";
const Form = () => {
  const FormValidation = Yup.object().shape({
    customer_name: Yup.string().trim().required("invalid name"),
    customer_email: Yup.string()
      .email("email is invalid")
      .required("invalid email"),
    customer_phone: Yup.string()
      .required("invalid number")
      .max(10, "only 10 digits valid"),
    customer_address_1: Yup.string().required("Address required"),

    customer_address_2: Yup.string().required("Address required"),
    customer_address_area: Yup.string().required("Area required"),
    customer_address_zip: Yup.string()
      .required("Zip required")
      .max(6, "6 digit only"),
  });
  const { register, handleSubmit, errors } = useForm({
    validationSchema: FormValidation,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { cart, items } = useSelector((state) => ({
    cart: state.products.cart,
    items: state.products.cart,
  }));

  const onSubmit = ({
    customer_name,
    customer_email,
    customer_phone,
    customer_address_1,
    customer_address_2,
    customer_address_area,
    customer_address_zip,
  }) => {
    dispatch(
      order({
        customer_name,
        customer_email,
        customer_phone,
        customer_address_1,
        customer_address_2,
        customer_address_area,
        customer_address_zip,
        items,
        history,
      })
    );
  };

  return (
    <Container fluid={true}>
      <Col className="form">
        <div className="yourdetails">Your Details</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space">
            <input
              name="customer_name"
              ref={register}
              placeholder="Enter name"
              className="flield"
            />
          </div>
          <div className="validate">
            {errors.customer_name && (
              <small className="text-danger">
                *{errors.customer_name.message}
              </small>
            )}
          </div>
          <div className="space">
            <input
              name="customer_email"
              ref={register}
              placeholder="Enter email"
              className="flield"
            />
            <div className="validate">
              {errors.customer_email && (
                <small className="text-danger">
                  *{errors.customer_email.message}
                </small>
              )}
            </div>
          </div>
          <div className="space">
            <input
              name="customer_phone"
              ref={register}
              placeholder="Enter mobile no."
              className="flield"
            />
            <div className="validate">
              {errors.customer_phone && (
                <small className="text-danger">
                  *{errors.customer_phone.message}
                </small>
              )}
            </div>
          </div>
          <div className="space">
            <input
              name="customer_address_1"
              ref={register}
              placeholder="Enter address1"
              className="flield"
            />
            <div className="validate">
              {errors.customer_address_1 && (
                <small className="text-danger">
                  *{errors.customer_address_1.message}
                </small>
              )}
            </div>
          </div>
          <div className="space">
            <input
              name="customer_address_2"
              ref={register}
              placeholder="Enter address2"
              className="flield"
            />
            <div className="validate">
              {errors.customer_address_2 && (
                <small className="text-danger">
                  *{errors.customer_address_2.message}
                </small>
              )}
            </div>
          </div>
          <div className="space">
            <input
              name="customer_address_area"
              ref={register}
              placeholder="Enter area"
              className="flield"
            />
            <div className="validate">
              {errors.customer_address_area && (
                <small className="text-danger">
                  *{errors.customer_address_area.message}
                </small>
              )}
            </div>
          </div>
          <div className="space">
            <input
              name="customer_address_zip"
              ref={register}
              placeholder="Enter zip"
              className="flield"
            />
            <div className="validate">
              {errors.customer_address_zip && (
                <small className="text-danger">
                  *{errors.customer_address_zip.message}
                </small>
              )}
            </div>
          </div>
          <div className="space">
            <Button color="danger" type="submit" className="placeorderbutton">
              Place Order
            </Button>
          </div>
        </form>
      </Col>
    </Container>
  );
};
export default Form;
