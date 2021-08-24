import { Link } from "react-router-dom";
import HiImage from "../../assets/img/light/Charco Hi.png";
import "./welcome.css";

export default function WelcomeComponent() {
  return (
    <div className="root-welcome flex justify-center">
      <div className="main-welcome flex flex-col justify-around">
        <p className="greeting-welcome text-center">
          Hi there. <br /> Ready to do your best over work?
        </p>
        <div className="flex justify-center">
          <Link to="/auth" className="btn-welcome">
            <p className="btnText-welcome">Let's Go!</p>
          </Link>
        </div>
      </div>
      <div>
        <img className="hiImg-welcome" src={HiImage} alt="img" />
      </div>
    </div>
  );
}
