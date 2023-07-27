import React, { useState } from "react";
import Profile_nav from "./Profile_nav";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../../hooks/loginSlice";
import SearchPanel from "./SearchPanel";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../firebase/service";

function Navbar({ handleScroll }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => {
    return state.user;
  });

  const login = useSelector((state) => {
    return state.login;
  });

  const navigate = useNavigate();

  const [openProfile, setOpenProfile] = useState(false);
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const handleLogout = async (e) => {
    e.preventDefault();
    setOpenMobileNav(false);
    document.querySelector("body").style.overflow = "auto";
    try {
      await signOut(firebaseAuth);
      dispatch(isLogin(false));
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenSearchPanel = () => {
    document.querySelector("body").style.overflow = "hidden";
    setIsOpenPanel(true);
  };

  return (
    <>
      <nav className="sm:px-0 md:px-20 lg:px-24 md:shadow-sm shadow-md sticky top-0 z-20 bg-white backdrop-blur-sm bg-opacity-90">
        {/* Navbar for large media(>768) */}
        <div className="flex h-16 flex-1 items-center justify-between md:items-stretch md:px-0 px-6">
          {/*Mobile menu button */}
          <div className="items-center block md:hidden">
            <button
              onClick={() => {
                setOpenMobileNav(true);
                document.querySelector("body").style.overflow = "hidden";
              }}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-900  active:bg-gray-100 "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="block w-6 h-6"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-shrink-0 items-center">
            <Link
              to="/"
              className="text-lg font-sans font-semibold text-gray-900 cursor-pointer"
            >
              PhoneBazaar.com
            </Link>
          </div>

          <div className="flex md:w-full flex-row items-center justify-end gap-1 md:gap-5 ">
            <Link
              to="/"
              className="text-gray-900 hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:drop-shadow-xl transition ease-in-out hover:-translate-z-1 hover:scale-105 hidden lg:block"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-900 hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:drop-shadow-xl transition ease-in-out hover:-translate-z-1 hover:scale-105 hidden md:block"
            >
              Shop
            </Link>
            <button
              onClick={handleScroll}
              className="text-gray-900 hover:bg-red-500 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:drop-shadow-xl transition ease-in-out hover:-translate-z-1 hover:scale-105 hidden md:block"
            >
              About
            </button>
            <button
              onClick={handleOpenSearchPanel}
              className="rounded-full p-1 text-gray-900 md:hover:bg-red-500 md:hover:text-white md:hover:drop-shadow-xl transition ease-in-out md:hover:-translate-z-1 md:hover:scale-105 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
            {isOpenPanel && <SearchPanel setIsOpenPanel={setIsOpenPanel} />}
            <Link
              to={"/cart/" + user[2]}
              className="rounded-full p-1 text-gray-900 hover:bg-red-500 hover:text-white hover:drop-shadow-xl transition ease-in-out hover:-translate-z-1 hover:scale-105 hidden md:block"
            >
              <span className="sr-only">Go to cart</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Link>

            {login === true ? (
              <div className="relative hidden md:block">
                <button
                  type="button"
                  className="rounded-full p-1 text-gray-900 hover:bg-red-500 hover:text-white hover:drop-shadow-xl transition ease-in-out hover:-translate-z-1 hover:scale-105 "
                  onClick={() => setOpenProfile(!openProfile)}
                >
                  <span className="sr-only">Profile</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </button>
                {openProfile === true && (
                  <Profile_nav user={user} setOpenProfile={setOpenProfile} />
                )}
              </div>
            ) : (
              <Link
                to="/signin"
                className="text-white bg-red-500 rounded-md px-3 py-2 text-sm font-medium hover:drop-shadow-xl transition ease-in-out hover:scale-105 hidden md:block"
                aria-current="page"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state */}
        {openMobileNav && (
          <div
            className="fixed inset-0 w-full h-screen bg-red-50 bg-opacity-80  backdrop-blur-sm z-10 px-4 pb-4 transition-transform"
            id="mobile-menu"
          >
            <div className=" h-16 flex items-center justify-start rounded-2xl bg-transparent ">
              {/* close button */}
              <button
                onClick={() => {
                  setOpenMobileNav(false);
                  document.querySelector("body").style.overflow = "auto";
                }}
                className="active:bg-gray-100 rounded-lg p-1"
              >
                <svg
                  className="h-8 w-8 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* profile section */}
            <div className="py-2 h-1/4 flex items-center justify-center flex-col rounded-2xl bg-white shadow-lg transition ease-in-out delay-150 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth=".5"
                stroke="currentColor"
                className="w-24 h-24 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              {login ? (
                <div className="flex-1 ">
                  <p
                    className="block font-bold text-gray-900 text-center"
                    id={user[2]}
                  >
                    {user[0]}
                  </p>
                  <p className="mt-1 text-gray-600">{user[1]}</p>
                </div>
              ) : (
                <div className="w-full grid grid-cols-2 divide-x divide-gray-900/5">
                  <button
                    onClick={() => {
                      navigate("/signin");
                      setOpenMobileNav(false);
                      document.querySelector("body").style.overflow = "auto";
                    }}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold rounded-sm leading-6 text-red-500 hover:bg-gray-100"
                  >
                    Sign in
                  </button>
                  <button
                    onClick={() => {
                      navigate("/register");
                      setOpenMobileNav(false);
                      document.querySelector("body").style.overflow = "auto";
                    }}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-md font-semibold rounded-sm leading-6 text-red-500 hover:bg-gray-100"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>

            {/* navlinks from here */}
            <div className="p-3 mt-2 rounded-2xl bg-white shadow-lg">
              <button
                onClick={() => {
                  navigate("/");
                  setOpenMobileNav(false);
                  document.querySelector("body").style.overflow = "auto";
                }}
                className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-100 w-full"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-500 group-hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <p className="block font-semibold text-gray-900">Home</p>
              </button>
              <button
                onClick={() => {
                  navigate("/shop");
                  setOpenMobileNav(false);
                  document.querySelector("body").style.overflow = "auto";
                }}
                className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-100 w-full"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-500 group-hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
                <p className="block font-semibold text-gray-900">Shop</p>
              </button>
              <button
                onClick={() => {
                  navigate("/cart/" + user[2]);

                  document.querySelector("body").style.overflow = "auto";
                  setOpenMobileNav(false);
                }}
                className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-100 w-full"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-500 group-hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </div>
                <p className="block font-semibold text-gray-900">Cart</p>
              </button>
              <button
                onClick={() => {
                  handleScroll();
                  setOpenMobileNav(false);
                  document.querySelector("body").style.overflow = "auto";
                }}
                className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-100 w-full"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-gray-500 group-hover:text-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                </div>
                <p className="block font-semibold text-gray-900">About</p>
              </button>
              {login && (
                <button
                  onClick={handleLogout}
                  className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm leading-6 hover:bg-gray-100 w-full"
                >
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-100 group-hover:bg-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-6 w-6 text-gray-500 group-hover:text-red-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="block font-semibold text-gray-900">Logout</p>
                </button>
              )}
            </div>
            <div className="p-3 mt-2 mb-4 h-28 rounded-2xl bg-white shadow-lg"></div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
