import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { TbBellRinging } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import "../../../styles/searchButton.css";

const TopNavbar = () => {
  const location = useLocation();
  let pageTitle;
  switch (location.pathname) {
    case "/books":
      pageTitle = "All books";
      break;
    case `/books/${
      location.pathname.split("/")[location.pathname.split("/").length - 1]
    }`:
      pageTitle = "Book Details";
      break;
    case "/users":
      pageTitle = "Users";
      break;
    case "/products":
      pageTitle = "Products";
      break;
    case "/purchase-history":
      pageTitle = "Orders";
      break;
    default:
      pageTitle = "Dashboard";
  }
  const [searchTerm, setSearchTerm] = useState("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleInputBlur = () => {
    setSearchTerm("");
  };
  const handleClearInput = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex justify-around items-center gap-8 mt-[42px] mb-6 ">
      <div className="flex-1 flex justify-between items-center w-full">
        <div>
          <h1 className="font-extrabold text-[#04081D] text-[30px]">
            {pageTitle}
          </h1>
          <div className=" max-w-xs text-xs mt-2 text-[#7B8092]">
            <ul className="flex gap-x-2 font-semibold">
              <li className="font-semibold">Dashboard</li>
              <li>/</li>
              <li>{pageTitle}</li>
            </ul>
          </div>
        </div>
        <form className="search rounded-full" onSubmit={handleFormSubmit}>
          <div className="rounded-full bg-[#F3F3F3] w-[78px] h-[78px] flex justify-center items-center shadow-[23px_4px_73px_rgba(83,130,140,0.25)]">
            <button className="rounded-full bg-[#F3F3F3] w-[55px] h-[55px] flex justify-center items-center shadow-[23px_4px_73px_rgba(0,0,0,0.25)]">
              <FiSearch className="text-2xl" />
            </button>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Search dashboard"
              className="search__input font-medium text-lg"
              value={searchTerm}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
            <button
              className="text-black search__cross"
              onClick={handleClearInput}
            >
              <RxCross2 className="text-2xl text-black font-bold" />
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-between items-center gap-8 ">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="rounded-full bg-[#F3F3F3] w-[78px] h-[78px] flex justify-center items-center shadow-[23px_4px_73px_rgba(83,130,140,0.25)] cursor-pointer"
          >
            <div className="relative rounded-full bg-[#F3F3F3] w-[55px] h-[55px] flex justify-center items-center shadow-[23px_4px_73px_rgba(0,0,0,0.25)]">
              <span className="w-[9px] h-[9px] rounded-full bg-[#CD6183] absolute top-0.5 right-2"></span>
              <TbBellRinging className="text-2xl" />
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
