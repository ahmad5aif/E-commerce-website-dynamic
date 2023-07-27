import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../hooks/itemCountSlice";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => {
    return state.itemCount;
  });

  return (
    <>
      <div className="flex justify-center items-center w-full gap-1 mt-4">
        <button
          onClick={() => dispatch(decrement())}
          className=" flex w-28 items-center justify-center rounded-md border border-transparent bg-red-500 p-1 text-base font-bold text-white hover:bg-red-600 
                    focus:outline-none focus:ring-1 focus:ring-red-400"
        >
          &#45;
        </button>
        <p className=" flex w-full items-center justify-center rounded-md border border-transparent bg-white p-1 text-base font-medium text-gray-800 ring-1 ring-red-300">
          {count}
        </p>
        <button
          onClick={() => dispatch(increment())}
          className=" flex w-28 items-center justify-center rounded-md border border-transparent bg-red-500 p-1 text-base font-bold text-white hover:bg-red-600 
                    focus:outline-none focus:ring-1 focus:ring-red-400"
        >
          &#43;
        </button>
      </div>
    </>
  );
};

export default Counter;
