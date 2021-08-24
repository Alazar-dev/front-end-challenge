import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function EmailAndPasswordForm() {
  const routerHistory = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => routerHistory.push("/userpreference");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="auth-form-email flex flex-col justify-center items-center"
    >
      <input
        className="input outline-none"
        type="email"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <span className="text-red-500">Email is required!</span>}
      <input
        className="input outline-none"
        type="password"
        placeholder="Password"
        {...register("password", { required: true, minLength: 6 })}
      />
      {errors.password && (
        <span className="text-red-500">
          Password must be at least 6 characters !
        </span>
      )}
      <div className="flex justify-center mt-28">
        <button className="btn-email shadow-2xl">
          <p className="btnText-email">Create</p>
        </button>
      </div>
    </form>
  );
}
