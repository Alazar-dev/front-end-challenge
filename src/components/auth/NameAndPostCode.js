import SecurityImage from "../../assets/img/light/Charco Security.png";
import "./nameAuth.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function AuthComponent() {
  const routerHistory = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => routerHistory.push("/emailAuth");

  return (
    <div className="root-name flex align-center mt-24 justify-center">
      <div className="main-name flex flex-col align-center justify-around">
        <p className="greeting-name text-center">
          We need a couple of details to get you setup
        </p>
        <div>
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
        </div>
      </div>
      <div>
        <img className="hiImg-name" src={SecurityImage} alt="img" />
      </div>
    </div>
  );
}
