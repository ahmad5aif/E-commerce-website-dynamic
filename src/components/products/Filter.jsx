import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../../hooks/filterSlice";
import { inOrder } from "../../hooks/sortSlice";

const filterOptions = [
  { name: "Apple", url: "Apple" },
  { name: "Google", url: "Google" },
  { name: "Samsung", url: "Samsung" },
  { name: "Moto", url: "Motorola" },
  { name: "Xiaomi", url: "Xiaomi" },
];

const Filter = () => {
  const [openSort, setOpenSort] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.checked) {
      dispatch(addFilter(e.target.value));
    } else {
      dispatch(removeFilter(e.target.value));
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mt-3 md:mb-2 px-1 lg:px-24 sm:px-8 md:px-20 md:w-full ">
        <div className="flex transition-all py-1 rounded-md bg-white ring-opacity-5 focus:outline-none">
          <form className="grid grid-cols-5 ">
            {filterOptions.map((item, i) => (
              <div
                className="flex items-center hover:text-gray-900 text-gray-700 p-2 rounded-md"
                key={i}
              >
                <input
                  onChange={handleChange}
                  id={i}
                  value={item.url}
                  type="checkbox"
                  className="h-3 w-3 sm:h-4 sm:w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <label
                  htmlFor={item.name}
                  className="sm:ml-2 ml-1 text-xs sm:text-sm text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </label>
              </div>
            ))}
          </form>
        </div>

        {/* sort section */}
        <div className="relative">
          <button
            onClick={() => setOpenSort(!openSort)}
            type="button"
            className="transition-all group inline-flex text-start text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900"
            id="menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            Sort
            <svg
              className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {openSort === true && (
            <div
              onMouseLeave={() => setOpenSort(!openSort)}
              className="absolute top-8 md:right-1 -right-20 transition-all z-10 w-40 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="" role="none">
                <button
                  onClick={() => {
                    dispatch(inOrder("orderAsc"));
                    setOpenSort(!openSort);
                  }}
                  className="text-gray-500 rounded-md block px-4 py-2 text-xs sm:text-sm m-1 hover:bg-gray-100 hover:text-gray-900 "
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  Price: Low to High
                </button>
                <button
                  onClick={() => {
                    dispatch(inOrder("orderDesc"));
                    setOpenSort(!openSort);
                  }}
                  className="text-gray-500 block px-4 py-2 text-xs sm:text-sm m-1 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-4"
                >
                  Price: High to Low
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Filter;
