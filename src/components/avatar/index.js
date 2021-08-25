import { Link } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useHistory } from "react-router-dom";
import "./avatar.css";
import MessageNotificationLight from "../../assets/img/light/Charco Message Notification.png";
import MessageNotificationDark from "../../assets/img/dark/Charco Message Notification.png";
import Ballet from "../../assets/img/light/avatars/Open Doodles Ballet.png";
import Chilling from "../../assets/img/light/avatars/Open Doodles Chilling.png";
import Coffee from "../../assets/img/light/avatars/Open Doodles Coffee.png";
import Dancing from "../../assets/img/light/avatars/Open Doodles Dancing.png";
import Doggie from "../../assets/img/light/avatars/Open Doodles Doggie.png";
import Float from "../../assets/img/light/avatars/Open Doodles Float.png";
import Groovy from "../../assets/img/light/avatars/Open Doodles Groovy.png";
import Cream from "../../assets/img/light/avatars/Open Doodles Ice Cream.png";
import Jumping from "../../assets/img/light/avatars/Open Doodles Jumping.png";
import LayingDown from "../../assets/img/light/avatars/Open Doodles Laying Down.png";
import Messy from "../../assets/img/light/avatars/Open Doodles Messy.png";
import Reading from "../../assets/img/light/avatars/Open Doodles Reading.png";
import BalletDark from "../../assets/img/dark/avatars/Open Doodles Ballet.png";
import ChillingDark from "../../assets/img/dark/avatars/Open Doodles Chilling.png";
import CoffeeDark from "../../assets/img/dark/avatars/Open Doodles Coffee.png";
import DancingDark from "../../assets/img/dark/avatars/Open Doodles Dancing.png";
import DoggieDark from "../../assets/img/dark/avatars/Open Doodles Doggie.png";
import FloatDark from "../../assets/img/dark/avatars/Open Doodles Float.png";
import GroovyDark from "../../assets/img/dark/avatars/Open Doodles Groovy.png";
import CreamDark from "../../assets/img/dark/avatars/Open Doodles Ice Cream.png";
import JumpingDark from "../../assets/img/dark/avatars/Open Doodles Jumping.png";
import LayingDownDark from "../../assets/img/dark/avatars/Open Doodles Laying Down.png";
import MessyDark from "../../assets/img/dark/avatars/Open Doodles Messy.png";
import ReadingDark from "../../assets/img/dark/avatars/Open Doodles Reading.png";

export default function EmailAuthComponent() {
  const routerHistory = useHistory();
  const [avatar, setAvatar] = useState(null);
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <div>
      <div className="root-avatar dark:bg-black flex justify-center">
        <div className="main-avatar flex flex-col align-center ">
          <p className="greeting-avatar text-center dark:text-white">
            Finally, let's customise your experience.
          </p>
          <h4 className="text-center dark:text-white py-5 md:py-10 text-4xl">
            Choose an avatar ...
          </h4>
          <div className="flex md:-space-x-1 md:overflow-hidden md:ml-20 ml-56 font-bold">
            <img
              className="inline-block h-16 w-16 rounded-full ring-4 ring-white"
              src={avatar}
              alt=""
            />
            <div className="flex md:justify-center md:mb-12 mt-24 md:mt-0">
              <button
                onClick={() => setOpen(true)}
                className="btn-avatar md:ml-12 text-center w-16 shadow-2xl md:mt-2"
              >
                <p className="text-4xl font-bold">Pick one</p>
              </button>
            </div>
          </div>
          <div className="flex justify-between mt-32">
            <div className="flex justify-end">
              <button
                onClick={() => routerHistory.push("/userpreference")}
                className="shadow-xl rounded-xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 dark:bg-white rounded-full ml-24 md:ml-0 mb-28"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            </div>
            {avatar ? (
              <Link
                to="/success"
                className="shadow-xl h-11 dark:bg-white mr-28 md:mr-0 px-6 md:px-6 rounded-3xl"
              >
                <p className="font-bold text-4xl">Done</p>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          {localStorage.getItem("theme") === "dark" ? (
            <img
              className="hiImg-avatar"
              src={MessageNotificationLight}
              alt="img"
            />
          ) : (
            <img
              className="hiImg-avatar"
              src={MessageNotificationDark}
              alt="img"
            />
          )}
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          auto-reopen="true"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white dark:bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4 content-center">
                  <div className="grid grid-cols-2 md:grid-cols-4">
                    {localStorage.getItem("theme") === "dark"
                      ? [
                          Ballet,
                          Chilling,
                          Coffee,
                          Dancing,
                          Doggie,
                          Float,
                          Groovy,
                          Cream,
                          Jumping,
                          LayingDown,
                          Messy,
                          Reading,
                        ].map((image) => (
                          <>
                            <button
                              onClick={() => {
                                setAvatar(image);
                                setOpen(false);
                              }}
                            >
                              <img
                                className="w-28 p-2ss"
                                src={image}
                                alt="new"
                              />
                            </button>
                          </>
                        ))
                      : [
                          BalletDark,
                          ChillingDark,
                          CoffeeDark,
                          DancingDark,
                          DoggieDark,
                          FloatDark,
                          GroovyDark,
                          CreamDark,
                          JumpingDark,
                          LayingDownDark,
                          MessyDark,
                          ReadingDark,
                        ].map((image) => (
                          <>
                            <button
                              onClick={() => {
                                setAvatar(image);
                                setOpen(false);
                              }}
                            >
                              <img
                                className="w-28 p-2ss"
                                src={image}
                                alt="new"
                              />
                            </button>
                          </>
                        ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
