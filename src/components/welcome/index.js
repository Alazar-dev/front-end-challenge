import { Link } from "react-router-dom";
import HiImage from "../../assets/img/light/Charco Hi.png";
import "./welcome.css";

export default function WelcomeComponent() {
  return (
    <div className="root flex justify-center">
      <div className="main flex flex-col align-center justify-around">
        <p className="greeting text-center">
          Hi there. <br /> Ready to do your best over work?
        </p>
        <div className="flex justify-center">
          <Link to="/auth" className="btn">
            <p className="btnText">Let's Go!</p>
          </Link>
        </div>
      </div>
      <div>
        <img className="hiImg" src={HiImage} alt="img" />
      </div>
    </div>
  );
}
