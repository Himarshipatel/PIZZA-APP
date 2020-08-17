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
import { useForm } from "react-hook-form";
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
  Input,
  Label,
  FormGroup,
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
import Form from "./Form.js";

import Image from "react-bootstrap/Image";

const Navbarr = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  console.log(toggle);
  // var auth = localStorage.getItem("auth");
  const loginSchema = Yup.object().shape({
    name: Yup.string().trim().required("Invalid name"),
    email: Yup.string().email().required("Invalid email"),
  });
  const dispatch = useDispatch();

  const { register, handleSubmit, errors } = useForm({
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
        {/*------new banner---------*/}
        <Container fluid={true}>
          <Row className="navmenu">
            <Col className="banlabel" sm="6">
              <h1>Cheesy Pizza</h1>

              <Col className="subtitle">
                Incididunt ut labourdolore megna aliqua.urenim
              </Col>
              <Col className="subtitle">
                add minim vemiam,quis nostrud exercitation
              </Col>
              <Button color="danger" className="moredeal">
                More deals
              </Button>
            </Col>
            {/* ------second col------ */}
            <Col className="bansidebar" sm="6">
              {/* <Col className="cart">
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
              </Col> */}

              <Col className="offer">Special Offer</Col>

              <Col className="pizaa">
                <Carousel interval={1500}>
                  <Carousel.Item>
                    <Image
                      src="https://images.dominos.co.in/new_cheese_n_corn.jpg"
                      alt=""
                      roundedCircle
                      className="bannerimg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.dominos.co.in/new_fresh_veggie.jpg"
                      alt=""
                      roundedCircle
                      className="bannerimg"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="https://images.dominos.co.in/updated_paneer_makhani.jpg"
                      alt=""
                      roundedCircle
                      className="bannerimg"
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Col>
          </Row>
        </Container>
        {/*------new banner---------*/}
        <Approuter />

        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Login</ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Col>
                <Label>User Name :</Label>
              </Col>
              <Col>
                <input
                  name="name"
                  ref={register}
                  placeholder="Enter user name"
                  className="username"
                />
                {errors.name && (
                  <small className="text-danger">*{errors.name.message}</small>
                )}{" "}
              </Col>
              <Col>
                <Label>Email :</Label>
              </Col>
              <Col>
                <input
                  name="Enter email"
                  ref={register}
                  placeholder="Enter Email"
                  className="username"
                />

                {errors.email && (
                  <small className="text-danger">*{errors.email.message}</small>
                )}
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
