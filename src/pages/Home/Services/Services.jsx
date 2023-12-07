import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services/")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div className="text-center mt-4">
      <h3 className="text-2xl font-bold text-orange-600">Our Services</h3>
      <h3 className="text-4xl text-orange-600">Our Services Area</h3>
      <p className="w-1/2 mx-auto">
        The majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <div>serives: {services.length}</div>
      <div className="grid lg:grid-cols-3 grid-cols-1">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
