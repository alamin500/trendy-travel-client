import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container ">
      <div className="row g-5">
        <h1 className="service-h1 p-3 pt-5" style={{ textAlign: "center" }}>
          OUR PACKAGES
        </h1>
        {services?.map((service, index) => (
          <Service key={service.name} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
