import React from "react";
import { Link } from "react-router-dom";
import { PageNotFoundSvg } from "../assets/svg/svg";

const PageNotFound = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[90vh] px-6 md:px-20 sm:px-24">
        <PageNotFoundSvg />
      </div>
    </>
  );
};

export default PageNotFound;
