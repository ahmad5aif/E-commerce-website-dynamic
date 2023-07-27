import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <>
      <div className="flex h-screen flex-col overflow-y-auto bg-white pointer-events-auto md:w-full px-6 md:px-20 sm:px-24 mt-6">
        <div className="flex-1 overflow-y-auto px-6 sm:px-6">
          <h2 className="text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl ">
            Cart
          </h2>
          <div className="md:flex flex-auto w-full items-center justify-around">
            <div className="text-center text-4xl mt-40 ">
              <p>Your bag is currently empty</p>
              <Link
                to="/shop"
                className="font-medium text-red-500 hover:text-red-400 ml-2 text-sm"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
            <div className="sm:ml-24 ml-32 md:mt-24 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth=".5"
                stroke="currentColor"
                class="md:w-60 md:h-60 h-20 w-20 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
