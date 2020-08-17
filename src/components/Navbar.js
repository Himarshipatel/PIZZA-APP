import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  PopoverHeader,
  UncontrolledPopover,
  PopoverBody,
} from "reactstrap";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signinUser } from "../redux/actions/FetchData.js";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import Approuter from "./Approuter.js";
import Total from "./Total.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Popoverr from "./Popover.js";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  ModalFooter,
  Label,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Redirect } from "react-router-dom";

import Image from "react-bootstrap/Image";

const Navbarr = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(toggle);
  // var auth = localStorage.getItem("auth");
  const loginSchema = Yup.object().shape({
    name: Yup.string().trim().required(),
    email: Yup.string().email().required(),
  });
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, control } = useForm({
    validationSchema: loginSchema,
  });
  const [isOpen, setIsOpen] = useState(false);

  const navtoggle = () => setIsOpen(!isOpen);
  const onSubmit = ({ name, email }) => {
    dispatch(signinUser({ name, email, setModal }));
  };
  return (
    <>
      <BrowserRouter>
        {/* --new navbar-- */}

        <Navbar light expand="md" className="navcolor">
          <NavbarBrand href="/">
            <img
              src="https://image.freepik.com/free-vector/pizza-logo-vector_25327-119.jpg"
              alt=""
              height="90px"
              width="90px"
              className="logo"
            />
          </NavbarBrand>
          <NavbarToggler onClick={navtoggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/" className="menu">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="menu">
                  Menu
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="menu">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/" className="menu">
                  Gallary
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/order" className="menu">
                  Myorder
                </Link>
              </NavItem>
            </Nav>

            <NavbarText className="adminname text-white">
              <Button color="success" onClick={toggle} className="loginbutton">
                Login
              </Button>

              <Button id="PopoverLegacy" type="button" className="cartbut">
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  color="white"
                  className="carticon"
                />
              </Button>
              <UncontrolledPopover
                trigger="legacy"
                placement="bottom"
                target="PopoverLegacy"
              >
                <PopoverHeader>Added Item</PopoverHeader>
                <PopoverBody className="popoverr">
                  <Popoverr />
                </PopoverBody>
                <Col className="popup">
                  <Total />
                  <Col className="chekorder">
                    <Link to="/cart">
                      <Button color="danger" className="vieworderbut">
                        Veiw Order
                      </Button>
                    </Link>
                  </Col>
                </Col>
              </UncontrolledPopover>
            </NavbarText>
          </Collapse>
        </Navbar>

        {/* --new navbar-- */}

        <Approuter />

        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Login</ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Col>
                <Label>User Name :</Label>
              </Col>
              <Col>
                <FormGroup>
                  <Controller
                    placeholder="Enter Name"
                    as={Input}
                    ref={register}
                    control={control}
                    name="name"
                    defaultValue=""
                  />
                  {errors.name && (
                    <p className="text-danger">* {errors.name.message}</p>
                  )}
                </FormGroup>
                {/* <input
                  name="name"
                  ref={register}
                  placeholder="Enter user name"
                  className="username"
                />
                {errors.name && (
                  <small className="text-danger">*{errors.name.message}</small>
                )}{" "} */}
              </Col>
              <Col>
                <Label>Email :</Label>
              </Col>
              <Col>
                <FormGroup>
                  <Controller
                    placeholder="Enter Name"
                    as={Input}
                    ref={register}
                    control={control}
                    name="email"
                    defaultValue=""
                  />
                  {errors.email && (
                    <p className="text-danger">* {errors.email.message}</p>
                  )}
                </FormGroup>
                {/* <input
                  name="email"
                  ref={register}
                  placeholder="Enter Email"
                  className="username"
                />

                {errors.email && (
                  <small className="text-danger">*{errors.email.message}</small>
                )} */}
              </Col>
              <Col className="space">
                <Button className="loginbut" color="success">
                  Login
                </Button>
              </Col>
            </form>
          </ModalBody>
        </Modal>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </>
  );
};

export default Navbarr;
