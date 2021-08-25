import React from "react";
import { useStateMachine } from "little-state-machine";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import updateAction from "../../actions";

export default function NameAndPostCodeForm() {
  const routerHistory = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    routerHistory.push("/emailAuth");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="auth-form-name flex flex-col justify-center items-center"
    >
      <input
        className="input outline-none"
        type="text"
        placeholder="Name"
        defaultValue={state.username}
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="text-red-500">Name field is required</span>
      )}
      <input
        className="input outline-none"
        type="text"
        placeholder="Post Code"
        defaultValue={state.postCode}
        {...register("postCode", { required: true })}
      />
      {errors.postCode && (
        <span className="text-red-500">Post Code field is required</span>
      )}
      <div className="flex bg-white rounded-full w-44  justify-center md:mt-28 mt-44">
        <button className="btn-name shadow-2xl">
          <p className="btnText-name ml-4 md:ml-0">Next</p>
        </button>
      </div>
    </form>
  );
}
