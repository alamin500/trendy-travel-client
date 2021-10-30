import React from "react";

import AddServices from "../../AddServices/AddServices";
import Header from "../../Header/Header";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import MoreTours from "../MoreTours/MoreTours";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <MoreTours></MoreTours>
    </div>
  );
};

export default Home;
