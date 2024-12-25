import { useLocation } from "react-router-dom";

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
    case "/add-book":
      pageTitle = "Add Book";
      break;
    default:
      pageTitle = "Dashboard";
  }

  return (
    <div className="flex justify-around items-center gap-8 my-4 ">
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
      </div>
    </div>
  );
};

export default TopNavbar;
