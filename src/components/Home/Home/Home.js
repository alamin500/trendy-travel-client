import React from "react";

import AddServices from "../../AddServices/AddServices";
import Header from "../../Header/Header";
import Services from "../../Services/Services";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import MoreTours from "../MoreTours/MoreTours";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <MoreTours></MoreTours>
      <Footer></Footer>
    </div>
  );
};

export default Home;
