import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function NameAndPostCodeForm() {
  const routerHistory = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => routerHistory.push("/emailAuth");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="auth-form-name flex flex-col justify-center items-center"
    >
      <input
        className="input outline-none"
        type="text"
        placeholder="Name"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="text-red-500">Name field is required</span>
      )}
      <input
        className="input outline-none"
        type="text"
        placeholder="Post Code"
        {...register("postCode", { required: true })}
      />
      {errors.postCode && (
        <span className="text-red-500">Post Code field is required</span>
      )}
      <div className="flex justify-center mt-28">
        <button className="btn-name shadow-2xl">
          <p className="btnText-name">Next</p>
        </button>
      </div>
    </form>
  );
}
