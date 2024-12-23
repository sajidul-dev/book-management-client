import { FaBookOpen, FaFire } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdPlayLesson } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
      }}
      className="bg-white w-full h-16 px-3 py-1 flex items-center"
    >
      <div className="flex justify-between items-center w-full">
        {/* left side */}
        <div className="flex items-center gap-x-6">
          <button className="flex flex-col">
            <p className="text-2xl font-sans font-bold text-purple-700">
              Juupu
            </p>
            <p className="text-xs  font-serif pl-2 text-purple-400">
              Learn yourself
            </p>
          </button>
          <NavLink
            to="/lessons"
            className="flex items-center gap-x-1  text-lg bg-purple-100 text-purple-600 px-2 py-1 rounded-md"
          >
            <FaBookOpen />
            <p>Lesson</p>
          </NavLink>
          <button className="flex items-center gap-x-1 text-gray-600 text-lg">
            <MdPlayLesson />
            <p>Tutorial</p>
          </button>
        </div>
        {/* right side */}
        <div className="flex items-center gap-x-6">
          <button
            style={{
              boxShadow:
                "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
            }}
            className="bg-purple-200 text-purple-700 px-3 py-1 rounded-md flex items-center gap-x-2"
          >
            <FaFire className="text-red-500" />
            <p>Start for trial</p>
          </button>
          <button className="relative">
            <IoIosNotifications className="text-3xl" />
            <p className="absolute -top-3 -right-3 w-5 h-5 rounded-full flex justify-center items-center bg-purple-200 text-purple-700 text-xs">
              3
            </p>
          </button>
          <img
            className="w-10 h-10 rounded-full"
            src="/images/profileIcon.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
