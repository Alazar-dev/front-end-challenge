import { useHistory } from "react-router-dom";
import HiImage from "../../assets/img/light/Charco High Five.png";
import "./startOver.css";

export default function WelcomeComponent() {
  const routerHistory = useHistory();

  function startOver() {
    localStorage.clear();
    routerHistory.push("/");
  }
  return (
    <div className="root-restart flex justify-center">
      <div className="main-restart flex flex-col align-center justify-around">
        <p className="greeting-restart text-center">
          Well done.
          <br /> You're awesome
        </p>
        <div className="flex justify-center">
          <button onClick={startOver} className="btn-restart">
            <p className="btnText-restart text-center">Start Over</p>
          </button>
        </div>
      </div>
      <div>
        <img className="hiImg-restart" src={HiImage} alt="img" />
      </div>
    </div>
  );
}
