import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import SecurityImage from "../../assets/img/light/Charco Security.png";
import "./emailAuth.css";

export default function EmailAuthComponent() {
  const routerHistory = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => routerHistory.push("/userpreference");

  return (
    <div className="root-email flex justify-center">
      <div className="main-email flex flex-col align-center justify-around">
        <p className="greeting-email text-center">
          Hey [Name], Lets create your account
        </p>
        <div>
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
            {errors.email && (
              <span className="text-red-500">Email is required!</span>
            )}
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
        </div>
      </div>
      <div>
        <img className="hiImg-email" src={SecurityImage} alt="img" />
      </div>
    </div>
  );
}
