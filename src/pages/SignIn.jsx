import React, { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LoginSvg } from "../assets/svg/svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { firebaseAuth } from "../firebase/service.js";
import { isLogin } from "../hooks/loginSlice";
import { userData } from "../hooks/userSlice";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const login = useSelector((state) => {
    return state.login;
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoding] = useState(false);

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoding(true);
    try {
      await signInWithEmailAndPassword(
        firebaseAuth,
        user.email,
        user.password
      ).then((data) => {
        console.log(data.user);
        dispatch(userData(data.user.displayName));
        dispatch(userData(data.user.email));
        dispatch(userData(data.user.uid));
      });

      dispatch(isLogin(true));
      setLoding(false);
    } catch (error) {
      setLoding(false);
      alert(JSON.parse(JSON.stringify(error)).code);
    }
  };

  login === true && navigate("/");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="static flex sm:flex-row flex-col-reverse min-h-[90vh]   justify-center items-center sm:mx-32">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm w-72">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-start sm:my-4 my-2 sm:mt-2">
            Sign in to your
            <p className="text-4xl font-bold tracking-tight text-red-500 sm:text-6xl text-start sm:mt-4 mt-1">
              Account
            </p>
          </h1>
          <form className="space-y-2" onSubmit={handleSignin}>
            <div>
              <label
                htmlFor="email"
                className="block text-md font-semibold leading-6 text-gray-900"
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
                  className="text-sm block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm bg-gray-200 hover:bg-white hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-indigo-400 sm:text-md sm:leading-6 transition-colors delay-75"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-md font-semibold leading-6 text-gray-900"
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
                  className="text-sm block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm bg-gray-200 hover:bg-white hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring-indigo-400 sm:text-md sm:leading-6 transition-colors delay-75"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-500 mt-3 px-3 py-1.5 text-md font-semibold leading-6 text-white tracking-wide shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition-colors delay-75"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="cursor-pointer font-semibold leading-6 text-red-500 hover:text-red-600"
            >
              Create your account now
            </Link>
          </p>
        </div>
        <div className="hidden sm:block sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginSvg />
        </div>
      </div>
      {loading === true && <Loading />}
    </>
  );
}

export default SignIn;
