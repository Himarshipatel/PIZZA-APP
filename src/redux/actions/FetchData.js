import axios from "axios";

import { toast } from "react-toastify";
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataError,
  signinUserSuccess,
  SigninError,
  orderSuccess,
  orderError,
} from "./Action";

export function fetchProducts() {
  const tokenn = localStorage.getItem("auth");
  const token = {
    headers: { Authorization: `Bearer ${tokenn}` },
  };
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((response) => {
        console.log(response);

        dispatch(fetchDataSuccess(response.data.data.products));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
}

export function signinUser({ name, email, setModal }) {
  let token;

  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/api/login", { name, email })
      .then((response) => {
        dispatch(
          signinUserSuccess(
            response.data.data.user.name,
            response.data.data.user.email
          )
        );

        localStorage.setItem(
          "auth",
          (token = response.data.data.user.api_token)
        );

        setModal(false);
        toast.success("Login Successfull", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })

      .catch((error) => {
        dispatch(SigninError(error));
        setModal(true);
        toast.error("Login Failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
}

export function order({
  customer_name,
  customer_email,
  customer_phone,
  customer_address_1,
  customer_address_2,
  customer_address_area,
  customer_address_zip,
  items,
  history,
}) {
  const tokenn = localStorage.getItem("auth");
  const token = {
    headers: { Authorization: `Bearer ${tokenn}` },
  };
  return (dispatch) => {
    axios
      .post(
        "http://127.0.0.1:8000/api/orders",
        {
          customer_name,
          customer_email,
          customer_phone,
          customer_address_1,
          customer_address_2,
          customer_address_area,
          customer_address_zip,
          items,
        },
        token
      )

      .then((response) => {
        dispatch(orderSuccess(response));

        history.push("/success");
        dispatch(fetchProducts());
        dispatch(myOrder());
      })
      .catch((error) => {
        dispatch(orderError(error));
        toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
}
export function myOrder() {
  const tokenn = localStorage.getItem("auth");
  const token = {
    headers: { Authorization: `Bearer ${tokenn}` },
  };

  return (dispatch) => {
    axios
      .get("http://127.0.0.1:8000/api/orders", token)
      .then((response) => {
        console.log(response);
        dispatch({ type: "myorderSuccess", order: response.data.data.orders });
      })
      .catch(() => {
        toast.error("order not fetch", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
}
