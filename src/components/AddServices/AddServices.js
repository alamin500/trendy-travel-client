import React from "react";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useFirebase();
  const onSubmit = (data) => {
    // data.email = user?.email;
    fetch("http://localhost:5000/addServices", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };
  return (
    <div>
      <h1>This is AddServices</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
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
