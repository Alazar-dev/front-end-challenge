import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Launch from "../../assets/img/light/Charco Launch.png";
import "./success.css";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
export default function WelcomeComponent() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className="root-success flex justify-center">
        <div className="main-success flex flex-col align-center justify-around">
          <p className="greeting-success text-center">
            Lift Off! You are all set up. <br /> Time for a movie?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 ml-32 md:ml-0 justify-center">
            <Link to="/startover" className="btn-success mr-6">
              <p className="btnText-success">Not now...</p>
            </Link>
            <Link onClick={() => setOpen(true)} className="btn-success">
              <p className="btnText-success pl-4">Watch</p>
            </Link>
          </div>
        </div>
        <div>
          <img className="hiImg-success" src={Launch} alt="img" />
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
          <div className="flex items-end w-100 justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
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

            {/* This element is to trick the browser into centering the modal contents. */}
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
                <div className="bg-white sm:p-6 sm:pb-4 content-center">
                  <ReactPlayer
                    width="100%"
                    url="https://www.youtube.com/watch?v=R5z3s8HimN8&ab_channel=LUMO"
                  />
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
