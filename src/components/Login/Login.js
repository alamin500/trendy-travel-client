import React, { useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import { useParams } from "react-router";
import { useLocation, useHistory } from "react-router-dom";
import { getAuth } from "@firebase/auth";
import { useEffect } from "react";

const Login = () => {
  const { googleSignIn } = useFirebase();
  const { tourId } = useParams();
  const auth = getAuth();
  const location = useLocation();
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://secure-anchorage-89979.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const value = services.filter((service) => service._id === tourId)[0];
  const history = useHistory();
  const redirect_uri = location.state?.from || `/bookTour/${value?._id}`;
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div className=" m-5 p-2">
      <h4>Login</h4>
      <button className="btn w-25 btn-danger" onClick={handleGoogleLogin}>
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
