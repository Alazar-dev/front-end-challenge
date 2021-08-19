import React from "react";
import HiImage from "../../assets/img/light/Charco Hi.png";
import "./welcome.css";

export default function Index() {
  return (
    <div className="root flex justify-center">
      <div className="main flex flex-col align-center justify-around">
        <p className="greeting text-center">
          Hi there. <br /> Ready to do your best over work?
        </p>
        <div className="flex justify-center">
          <button className="btn">
            <p className="btnText">Let's Go!</p>
          </button>
        </div>
      </div>
      <div>
        <img className="hiImg" src={HiImage} alt="img" />
      </div>
    </div>
  );
}
