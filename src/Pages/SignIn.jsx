/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { VITE_LOGIN_URL } from "../configurations/constants";
import { useState } from "react";
import toast from "react-hot-toast";
const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(VITE_LOGIN_URL, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res.success) {
        setLoading(false);
        toast.success(res.message);
      } else {
        setLoading(false);
        toast.error(res.message);
      }
    } catch (err) {
      setLoading(false);
      toast.error("Internal server error");
    }
  };
  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <div className=" flex flex-col w-1/3 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Chat Wave</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) =>
                  setData({ ...data, [e.target.name]: e.target.value })
                }
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                onClick={handleLogin}
                className="w-full px-8 py-3 flex justify-center items-center font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                {loading ? (
                  <div className="w-9 h-9 border-4 border-dashed rounded-full animate-spin dark:border-white"></div>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <Link
                to={"/signup"}
                className="hover:underline dark:text-violet-600"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
