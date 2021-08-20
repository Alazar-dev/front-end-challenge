import { Link } from "react-router-dom";
import SecurityImage from "../../assets/img/light/Charco Security.png";
import "./nameAuth.css";

export default function AuthComponent() {
  return (
    <div className="root-name flex justify-center">
      <div className="main-name flex flex-col align-center justify-around">
        <p className="greeting-name text-center">
          We need a couple of details to get you setup
        </p>
        <div>
          <form className="auth-form-name flex flex-col justify-center items-center">
            <input
              className="input outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="input outline-none"
              type="text"
              placeholder="Post Code"
            />
          </form>
        </div>
        <div className="flex justify-center mb-12">
          <Link to="/emailAuth" className="btn-name shadow-2xl">
            <p className="btnText-name">Next</p>
          </Link>
        </div>
      </div>
      <div>
        <img className="hiImg-name" src={SecurityImage} alt="img" />
      </div>
    </div>
  );
}
