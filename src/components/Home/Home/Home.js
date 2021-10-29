import React from "react";

import AddServices from "../../AddServices/AddServices";
import Header from "../../Header/Header";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>

      <Services></Services>
      <Banner></Banner>
    </div>
  );
};

export default Home;
