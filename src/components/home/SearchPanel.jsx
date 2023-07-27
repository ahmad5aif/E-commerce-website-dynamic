import React from "react";
import Search from "./Search";

const SearchPanel = ({ setIsOpenPanel }) => {
  return (
    <>
      <div className="h-screen w-full p-12 sm:p-6 md:pt-36 lg:pt-10 fixed top-0 left-0 flex flex-col z-50 backdrop-blur-md bg-slate-200 bg-opacity-90">
        <div className="max-w-xl w-full mx-auto flex justify-end">
          <button
            className="flex  justify-end mb-6 "
            onClick={() => {
              setIsOpenPanel(false);
              document.querySelector("body").style.overflow = "auto";
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 rounded-md hover:bg-red-500 hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <Search setIsOpenPanel={setIsOpenPanel} />
      </div>
    </>
  );
};

export default SearchPanel;
