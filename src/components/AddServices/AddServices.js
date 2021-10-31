import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useFirebase();
  const { setdate } = useState();
  const onSubmit = (data) => {
    alert("Added Successfully");
    data.email = user?.email;
    fetch("http://localhost:5000/addServices", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => setdate(result));
  };
  return (
    <div>
      <h1 className="m-3">Add New Package</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder="Name"
          className="p-2 m-2 w-25"
        />
        <br />
        <input
          {...register("description")}
          placeholder="Description"
          className="p-2 m-2 w-25"
        />
        <br />
        <input
          type="price"
          {...register("price")}
          placeholder="Price"
          className="p-2 m-2 w-25"
        />
        <br />
        <input
          {...register("img")}
          placeholder="Image"
          className="p-2 m-2 w-25"
        />
        <br />
        <input type="submit" className="p-2 m-2 w-25" />
      </form>
    </div>
  );
};

export default AddServices;
