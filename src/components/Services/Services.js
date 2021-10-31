import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";

const Services = (props) => {
  const { home = false } = props;
  const [services, setServices] = useState([]);
  console.log(services);
  useEffect(() => {
    fetch("https://secure-anchorage-89979.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container ">
      <div className="row g-5">
        <h1 className="service-h1 pt-5" style={{ textAlign: "center" }}>
          OUR PACKAGES
        </h1>
        {services.map((service, i) =>
          home ? (
            i < 6 && <Service key={service.id} service={service}></Service>
          ) : (
            <Service key={service.id} service={service}></Service>
          )
        )}
      </div>
    </div>
  );
};

export default Services;
