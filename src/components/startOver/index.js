import { Link } from "react-router-dom";
import HiImage from "../../assets/img/light/Charco Hi.png";
import "./startOver.css";

export default function WelcomeComponent() {
  return (
    <div className="root-restart flex justify-center">
      <div className="main-restart flex flex-col align-center justify-around">
        <p className="greeting-restart text-center">
          Well done.
          <br /> You're awesome
        </p>
        <div className="flex justify-center">
          <Link to="/" className="btn-restart">
            <p className="btnText-restart text-center">Start Over</p>
          </Link>
        </div>
      </div>
      <div>
        <img className="hiImg-restart" src={HiImage} alt="img" />
      </div>
    </div>
  );
}
