import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="overflow-hidden sm:px-24 md:px-20 px-6 mt-3 md:mt-0 h-screen flex items-center justify">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center mx-auto w-full sm:static gap-4">
        <div className="sm:max-w-md md:w-auto w-full">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-start ">
            Premium Phones
            <p className="text-4xl font-bold tracking-tight text-red-500 sm:text-6xl text-start mt-2">
              Your way
            </p>
          </h1>
          <p className="mt-4 text-base font-bold text-gray-900">
            "Premium phones chahiye kam daamo me?
          </p>
          <p className="mt-1 text-base font-bold text-gray-900">
            Dila dunga !"
          </p>

          <Link
            to="/shop"
            className="inline-block w-full sm:w-1/2 rounded-md border border-transparent bg-red-500 px-8 py-3 mt-5 text-center font-medium text-white hover:drop-shadow-xl transition ease-in-out hover:scale-105 hover:bg-red-600"
          >
            Shop Now
          </Link>
        </div>

        <div className="md:w-[70%] w-full">
          <div className="sm:w-auto flex items-center justify-center gap-6">
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="md:h-36 md:w-36 sm:h-28 sm:w-28 lg:h-48 lg:w-48 h-24 w-24 overflow-hidden rounded-lg  lg:opacity-100">
                <img
                  src="../img/iphone-compare-iphone-14.jpg"
                  alt=""
                  className="h-full w-full object-contain object-center"
                />
              </div>
              <div className="md:h-36 md:w-36 sm:h-28 sm:w-28 lg:h-48 lg:w-48 h-24 w-24 overflow-hidden rounded-lg">
                <img
                  src="../img/pixel2.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center scale-110"
                />
              </div>
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="md:h-36 md:w-36 sm:h-28 sm:w-28 lg:h-48 lg:w-48 h-24 w-24 overflow-hidden rounded-lg">
                <img
                  src="../img/11+.jpg"
                  alt=""
                  className="h-full w-full object-contain object-left rotate-12 scale-110"
                />
              </div>
              <div className="md:h-36 md:w-36 sm:h-28 sm:w-28 lg:h-48 lg:w-48 h-24 w-24 overflow-hidden rounded-lg">
                <img
                  src="../img/fold.jpg"
                  alt=""
                  className="h-full w-full object-contain object-center scale-110"
                />
              </div>
              <div className="md:h-36 md:w-36 sm:h-28 sm:w-28 lg:h-48 lg:w-48 h-24 w-24 overflow-hidden rounded-lg">
                <img
                  src="../img/sm1.jpg"
                  alt=""
                  className="h-full w-full object-contain object-center "
                />
              </div>
            </div>
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="md:h-36 md:w-36 sm:h-28 sm:w-28 lg:h-48 lg:w-48 h-24 w-24 overflow-hidden rounded-lg">
                <img
                  src="../img/iphone-14-pro.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center scale-150"
                />
              </div>
              <div className="md:h-36 md:w-36 sm:h-28 sm:w-28 lg:h-48 lg:w-48 h-24 w-24 overflow-hidden rounded-lg">
                <img
                  src="../img/pixel.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
