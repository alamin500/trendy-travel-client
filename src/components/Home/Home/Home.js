import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Services from "../../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import MoreTours from "../MoreTours/MoreTours";

const Home = () => {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);
  return (
    <>
      {spinner ? (
        <div className="mt-5 pt-5">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div>
          <Banner></Banner>
          <Services home={true}></Services>
          <MoreTours></MoreTours>
          <AboutUs></AboutUs>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Home;
