import SecurityImage from "../../assets/img/light/Charco Security.png";
import "./avatar.css";
import { Link } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
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

export default function EmailAuthComponent() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <div>
      <div className="root-avatar dark:bg-black flex justify-center">
        <div className="main-avatar flex flex-col align-center ">
          <p className="greeting-avatar text-center dark:text-white">
            Finally, let's customise your experience.
          </p>
          <h4 className="text-center py-10 text-4xl">Choose an avatar ...</h4>
          <div className="flex -space-x-1 overflow-hidden ml-20 font-bold">
            <img
              className="inline-block h-16 w-16 rounded-full ring-2 ring-white"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="flex justify-center mb-12">
              <Link
                onClick={() => setOpen(true)}
                className="btn-name ml-12 text-center w-16 shadow-2xl mt-2"
              >
                <p className=" text-4xl">Pick one</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-between mt-32">
            <h1>Hello</h1>
            <Link to="/success" className="shadow-xl">
              <p className="font-bold text-4xl">Done</p>
            </Link>
          </div>
        </div>
        <div>
          <img className="hiImg-avatar" src={SecurityImage} alt="img" />
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
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 content-center">
                  <div className="grid grid-cols-4">
                    {[
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
                        <img className="w-28 p-2ss" src={image} alt="new" />
                      </>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
