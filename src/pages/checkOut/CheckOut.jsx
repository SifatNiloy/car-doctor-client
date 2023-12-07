import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id } = service;
  return (
    <div>
      <h2>Book Service: {title} </h2>
    </div>
  );
};

export default CheckOut;
