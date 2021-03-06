import MessageNotificationLight from "../../assets/img/light/Charco Message Notification.png";
import MessageNotificationDark from "../../assets/img/dark/Charco Message Notification.png";
import "./userPreference.css";
import useDarkMode from "../../hooks/useDarkMode";
import { useHistory } from "react-router-dom";

export default function EmailAuthComponent() {
  const [colorTheme, setTheme] = useDarkMode();

  const routerHistory = useHistory();

  return (
    <div className="root-preference dark:bg-black flex justify-center">
      <div
        className={
          localStorage.getItem("theme") === "dark"
            ? "main-preference-light flex-col align-center justify-around"
            : "main-preference-dark flex-col align-center justify-around"
        }
      >
        <p className="greeting-preference text-center dark:text-white">
          Finally, let's
          <br /> customize your experience.
        </p>
        <label
          htmlFor="toggleB"
          className="flex ml-60 md:ml-0 mb-60 md:ml-0 items-center cursor-pointer"
        >
          <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block bg-gray-600 w-8 h-14 rounded-full" />
            <div
              onClick={() => setTheme(colorTheme)}
              className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
            />
          </div>
        </label>
        <div className="flex justify-end">
          <button
            onClick={() => routerHistory.push("/avatar")}
            className="shadow-xl rounded-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 bg-white md:mr-2 mr-24 mb-20 md:mb-0 rounded-full"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        {localStorage.getItem("theme") === "dark" ? (
          <img
            className="hiImg-preference"
            src={MessageNotificationLight}
            alt="img"
          />
        ) : (
          <img
            className="hiImg-preference"
            src={MessageNotificationDark}
            alt="img"
          />
        )}
      </div>
    </div>
  );
}
