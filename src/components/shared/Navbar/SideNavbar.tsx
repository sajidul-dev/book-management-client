import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import { BiSolidReport } from "react-icons/bi";
import { FaBook, FaShoppingCart } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

export const SideNavbar = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="side-bar bg-[#474BAE] h-[calc(100%-16px)] my-2 rounded-lg text-white shadow-lg w-52 lg:w-52 xl:w-52 ml-2 flex justify-center content-between">
      <div className="h-full relative container mx-auto py-3 flex flex-col">
        <div className="flex justify-center items-center mt-8">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "" : ""
            }
          >
            <img src={logo} alt="" />
          </NavLink>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Menu Items */}
        <div className={` w-full flex-grow flex justify-center`}>
          <ul className="w-full flex flex-col justify-center gap-6 mx-2">
            <li>
              <NavLink
                to="/books"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <BiSolidReport style={{ fontSize: "18px" }} />
                <p>Books</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-book"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : " px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <FaBook style={{ fontSize: "18px" }} />
                Add Book
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <AiFillProduct style={{ fontSize: "18px" }} />
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/purchase-history"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "px-4 py-2 bg-[#2A2C7B] rounded-lg flex justify-start gap-3 items-center"
                    : "px-4 py-2 flex justify-start gap-3 items-center"
                }
              >
                <FaShoppingCart style={{ fontSize: "18px" }} />
                Orders
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

SideNavbar.displayName = "SideNavbar";
