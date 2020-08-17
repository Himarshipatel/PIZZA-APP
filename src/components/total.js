import React from "react";
import { useSelector } from "react-redux";

const Total = () => {
  const total = useSelector((state) => state.products.total);

  return <div className="total">Total : ${total}</div>;
};
export default Total;
