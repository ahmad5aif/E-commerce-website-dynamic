import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../hooks/loginSlice";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../firebase/service";

const Profile_nav = ({ user, setOpenProfile }) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => {
    return state.login;
  });

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await signOut(firebaseAuth);
      dispatch(isLogin(false));
    } catch (error) {
      console.log(error);
    }
  };

  login === false && navigate("/");

  return (
    <>
      <div
        className="absolute right-4 top-full z-10 mt-3 w-screen max-w-xs overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition ease-in-out delay-150"
        onMouseLeave={() => setOpenProfile(false)}
      >
        <div className="p-4">
          <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <svg
                className="h-6 w-6 text-gray-500 group-hover:text-red-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
            <div className="flex-auto">
              <p className="block font-semibold text-gray-900" id={user[2]}>
                {user[0]}
                <span className="absolute inset-0"></span>
              </p>
              <p className="mt-1 text-gray-600">{user[1]}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          <a
            href="#"
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
            <svg
              className="h-5 w-5 flex-none text-gray-800 hover:text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              classNameName="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
            View orders
          </a>
          <button
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
            onClick={handleLogout}
          >
            <svg
              className="h-5 w-5 flex-none text-gray-800 hover:text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              classNameName="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            Log out
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile_nav;
