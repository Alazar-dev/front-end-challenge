import SecurityImage from "../../assets/img/light/Charco Security.png";
import "./nameAuth.css";
import NameAndPostCodeForm from "../forms/NameAndPostCode";
export default function AuthComponent() {
  return (
    <div className="root-name flex align-center mt-24 justify-center">
      <div className="main-name flex flex-col align-center justify-around">
        <p className="greeting-name text-center">
          We need a couple of details to get you setup
        </p>
        <NameAndPostCodeForm />
      </div>
      <div>
        <img className="hiImg-name" src={SecurityImage} alt="img" />
      </div>
    </div>
  );
}
