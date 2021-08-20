import SecurityImage from "../../assets/img/light/Charco Security.png";
import "./userPreference.css";
import useDarkMode from "../../hooks/useDarkMode";

export default function EmailAuthComponent() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="root-email dark:bg-black flex justify-center">
      <div className="main-email flex flex-col align-center justify-around">
        <p className="greeting-email text-center dark:text-white">
          Hey [Name], Lets create your account
        </p>
        <label htmlFor="toggleB" className="flex items-center cursor-pointer">
          {/*<button onClick={() => setTheme(colorTheme)}>*/}
          <div className="relative">
            <input type="checkbox" id="toggleB" className="sr-only" />
            <div className="block bg-gray-600 w-8 h-14 rounded-full" />
            <div
              onClick={() => setTheme(colorTheme)}
              className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
            />
          </div>
          {/*</button>*/}
        </label>
      </div>
      <div>
        <img className="hiImg-email" src={SecurityImage} alt="img" />
      </div>
    </div>
  );
}
