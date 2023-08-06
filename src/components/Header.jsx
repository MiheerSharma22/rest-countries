import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/Slices/DarkModeSlice";
import { setInputValue } from "../redux/Slices/FilterSlice";

import moon from "../assets/moon-icon.svg";
import sun from "../assets/sun-icon.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dark = useSelector((state) => state.mode.dark);
  const dispatch = useDispatch();

  const navigateToHome = () => {
    dispatch(setInputValue(""));
    navigate("/");
  };

  return (
    <header
      className={`h-[5rem] w-full shadow-md shadow-black ${
        dark ? "bg-darkElements" : "bg-white "
      }`}
    >
      <div className="w-[90%] h-full flex justify-between items-center mx-auto">
        <h1
          className="w-fit text-2xl font-bold cursor-pointer"
          onClick={navigateToHome}
        >
          Where in the world?
        </h1>

        <button onClick={() => dispatch(toggleDarkMode())}>
          {dark ? (
            <span className="text-lg font-semibold flex gap-2 justify-center items-center">
              <img src={sun} className="w-[1.2rem] h-[1.2rem]" alt="sun" />
              <p className="light-mode ">Light Mode</p>
            </span>
          ) : (
            <span className="text-lg font-semibold flex gap-2 justify-center items-center">
              {" "}
              <img src={moon} className="w-[1.2rem] h-[1.2rem]" alt="moon" />
              <p className="dark-mode ">Dark Mode</p>
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
