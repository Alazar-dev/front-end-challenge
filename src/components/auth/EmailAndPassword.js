import { useStateMachine } from "little-state-machine";
import updateAction from "../../actions";
import EmailAndPasswordForm from "../forms/EmailAndPassword";

import SecurityImage from "../../assets/img/light/Charco Security.png";
import "./emailAuth.css";

export default function EmailAuthComponent() {
  const { state } = useStateMachine(updateAction);
  console.log(state.name);
  return (
    <div className="root-email flex justify-center">
      <div className="main-email flex flex-col align-center justify-around">
        <p className="greeting-email text-center">
          Hey {state.name}, Lets create your account
        </p>
        <EmailAndPasswordForm />
      </div>
      <div>
        <img className="hiImg-email" src={SecurityImage} alt="img" />
      </div>
    </div>
  );
}
