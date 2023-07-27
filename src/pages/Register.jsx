import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { RegisterSvg } from "../assets/svg/svg.jsx";
import { useNavigate, Link } from "react-router-dom";
import Loading from "../components/Loading.jsx";
import { useDispatch, useSelector } from "react-redux";
import { isLogin } from "../hooks/loginSlice.js";
import { firebaseAuth } from "../firebase/service.js";
import { userData } from "../hooks/userSlice.js";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoding] = useState(false);
  const dispatch = useDispatch();
  const login = useSelector((state) => {
    return state.login;
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!user.email) {
      alert("Enter a valid Email address.");
    } else if (user.password.length < 8) {
      alert("Password must be of 8 character");
    } else {
      setLoding(true);
      try {
        await createUserWithEmailAndPassword(
          firebaseAuth,
          user.email,
          user.password,
          user.name
        );

        const userDetailslogin = await signInWithEmailAndPassword(
          firebaseAuth,
          user.email,
          user.password
        );
        updateProfile(userDetailslogin.user, {
          displayName: user.name,
        });

        dispatch(userData(user.name));
        dispatch(userData(userDetailslogin.user.email));
        dispatch(userData(userDetailslogin.user.uid));

        dispatch(isLogin(true));
        setLoding(false);
      } catch (error) {
        setLoding(false);
        console.log(error);
        alert("oops! 400:" + " " + JSON.parse(JSON.stringify(error)).code);
      }
    }
  };

  if (login === true) {
    navigate("/");
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="static flex flex-row  min-h-[90vh]  justify-center items-center md:mx-20 sm:mx-24 mx-6">
        <div className="hidden sm:block sm:mx-auto sm:w-full sm:max-w-sm ">
          <RegisterSvg />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm w-72 ">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-start sm:my-4 my-2">
            Create your
            <p className="text-4xl font-bold tracking-tight text-red-500 sm:text-6xl text-start sm:mt-4 mt-1">
              Account
            </p>
          </h1>

          <form className="space-y-2" onSubmit={handleSignUp}>
            <div>
              <label className="block text-md font-semibold leading-6 text-gray-900">
                Full name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  id="name"
                  name="name"
                  type="name"
                  required
                  placeholder="Saif Ahmad"
                  className="text-sm block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm bg-gray-200 hover:bg-white hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-indigo-400 sm:text-md sm:leading-6 transition-colors delay-75"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="example@exampl.com"
                  className="text-sm block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm bg-gray-200 hover:bg-white hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-indigo-400 sm:text-md sm:leading-6 transition-colors delay-75"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Must be atleast of 8 characters"
                  className="text-sm block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm bg-gray-200 hover:bg-white hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-indigo-400 sm:text-md sm:leading-6 transition-colors delay-75 "
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-500 mt-8 px-3 py-1.5 text-sm font-semibold tracking-wide leading-6 text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors delay-75"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already registered?{" "}
            <Link
              to="/signin"
              className="cursor-pointer font-semibold leading-6 text-red-600 hover:text-red-500"
            >
              Sign in now
            </Link>
          </p>
        </div>
      </div>
      {loading === true && <Loading />}
    </>
  );
}

export default Register;
