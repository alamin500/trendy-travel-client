import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("http://localhost:5000/addServices", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
          className="p-2 m-2 w-25"
        />
        <br />
        <input
          type="email"
          {...register("email", { require: true })}
          placeholder="Email"
          className="p-2 m-2 w-25"
        />
        <br />
        <input
          {...register("description")}
          placeholder="description"
          className="p-2 m-2 w-25"
        />
        <input type="submit" className="p-2 m-2 w-25" />
      </form>
    </div>
  );
};

export default Register;
