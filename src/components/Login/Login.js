import React, { useState } from "react";
import useFirebase from "../../hooks/useFirebase";
import { Link, useLocation, useHistory } from "react-router-dom";
import { getAuth } from "@firebase/auth";
import { useEffect } from "react";

const Login = () => {
  const { googleSignIn } = useFirebase();

  const auth = getAuth();

  const location = useLocation();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const history = useHistory();
  const redirect_uri = location.state?.from || `/bookTour/${services._id}`;
  const handleGoogleLogin = () => {
    googleSignIn().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <button className="btn w-100 btn-success" onClick={handleGoogleLogin}>
        Google Sign In
      </button>
    </div>
  );
};

export default Login;
