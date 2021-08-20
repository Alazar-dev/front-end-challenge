import { Link } from "react-router-dom";
import SecurityImage from "../../assets/img/light/Charco Security.png";
import "./emailAuth.css";

export default function EmailAuthComponent() {
  return (
    <div className="root-email flex justify-center">
      <div className="main-email flex flex-col align-center justify-around">
        <p className="greeting-email text-center">
          Hey [Name], Lets create your account
        </p>
        <div>
          <form className="auth-form-email flex flex-col justify-center items-center">
            <input
              className="input outline-none"
              type="text"
              placeholder="Email"
            />
            <input
              className="input outline-none"
              type="text"
              placeholder="Password"
            />
          </form>
        </div>
        <div className="flex justify-center mb-12">
          <Link to="/userpreference" className="btn-email shadow-2xl">
            <p className="btnText-email">Create</p>
          </Link>
        </div>
      </div>
      <div>
        <img className="hiImg-email" src={SecurityImage} alt="img" />
      </div>
    </div>
  );
}
