import React from "react";

const ServiceCard = ({ service }) => {
  const { title, img, price, description } = service;
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
      </div>
    </div>
  );
};

export default ServiceCard;
