import React from "react";
import {
  Col,
  Button,
  Container,
  Label,
  FormGroup,
  Form,
  Input,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { order } from "../redux/actions/FetchData.js";
import { useHistory } from "react-router-dom";

import * as Yup from "yup";
const Formm = () => {
  const FormValidation = Yup.object().shape({
    customer_name: Yup.string().trim().required("name is a required field"),
    customer_email: Yup.string().email().required("email is a required field"),
    customer_phone: Yup.string()
      .required("mobile is a required field")
      .max(10, "only 10 digits valid"),
    customer_address_1: Yup.string().required("address1 is a required field"),

    customer_address_2: Yup.string().required("address2 is a required field"),
    customer_address_area: Yup.string().required("area is a required field"),
    customer_address_zip: Yup.string()
      .required("zip_code is a required field")
      .max(6, "6 digit only"),
  });
  const { register, handleSubmit, errors, control } = useForm({
    validationSchema: FormValidation,
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { items } = useSelector((state) => ({
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Col className="labell">
            <Label>User Name :</Label>
          </Col>
          <Col>
            <FormGroup>
              <Controller
                placeholder="Enter name"
                as={Input}
                ref={register}
                control={control}
                name="customer_name"
                defaultValue=""
              />

              {errors.customer_name && (
                <p className="text-danger">* {errors.customer_name.message}</p>
              )}
            </FormGroup>
          </Col>

          <Col className="labell">
            <Label className="labeling">Email :</Label>
          </Col>
          <Col>
            <FormGroup>
              <Controller
                placeholder="Enter email"
                as={Input}
                ref={register}
                control={control}
                name="customer_email"
                defaultValue=""
              />
              {errors.customer_email && (
                <p className="text-danger">* {errors.customer_email.message}</p>
              )}
            </FormGroup>
          </Col>

          <Col className="labell">
            <Label className="labeling">Mobile No. :</Label>
          </Col>
          <Col>
            <FormGroup>
              <Controller
                placeholder="Enter mobile no."
                as={Input}
                ref={register}
                control={control}
                name="customer_phone"
                defaultValue=""
              />
              {errors.customer_phone && (
                <p className="text-danger">* {errors.customer_phone.message}</p>
              )}
            </FormGroup>
          </Col>

          <Col className="labell">
            <Label className="labeling">Address 1 :</Label>
          </Col>
          <Col>
            <FormGroup>
              <Controller
                placeholder="Enter address 1"
                as={Input}
                ref={register}
                control={control}
                name="customer_address_1"
                defaultValue=""
              />
              {errors.customer_address_1 && (
                <p className="text-danger">
                  * {errors.customer_address_1.message}
                </p>
              )}
            </FormGroup>
          </Col>

          <Col className="labell">
            <Label className="labeling">Address 2 :</Label>
          </Col>
          <Col>
            <FormGroup>
              <Controller
                placeholder="Enter address 2"
                as={Input}
                ref={register}
                control={control}
                name="customer_address_2"
                defaultValue=""
              />
              {errors.customer_address_2 && (
                <p className="text-danger">
                  * {errors.customer_address_2.message}
                </p>
              )}
            </FormGroup>
          </Col>

          <Col className="labell">
            <Label className="labeling">Area :</Label>
          </Col>
          <Col>
            <FormGroup>
              <Controller
                placeholder="Enter area"
                as={Input}
                ref={register}
                control={control}
                name="customer_address_area"
                defaultValue=""
              />
              {errors.customer_address_area && (
                <p className="text-danger">
                  * {errors.customer_address_area.message}
                </p>
              )}
            </FormGroup>
          </Col>

          <Col className="labell">
            <Label className="labeling">zip Code :</Label>
          </Col>
          <Col>
            <FormGroup>
              <Controller
                placeholder="Enter zip"
                as={Input}
                ref={register}
                control={control}
                name="customer_address_zip"
                defaultValue=""
              />
              {errors.customer_address_zip && (
                <p className="text-danger">
                  * {errors.customer_address_zip.message}
                </p>
              )}
            </FormGroup>
          </Col>

          <Button color="danger" type="submit" className="placeorderbutton">
            Place Order
          </Button>
        </Form>
      </Col>
    </Container>
  );
};
export default Formm;
