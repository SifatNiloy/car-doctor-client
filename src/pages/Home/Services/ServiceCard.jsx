import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price, description } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-6">
      <figure>
        <img src={img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-red-500 text-start text-lg font-bold">
          price: ${price}
        </p>
        <Link to={`/checkout/${_id}`}>
          <button className="btn btn-primary"></button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
