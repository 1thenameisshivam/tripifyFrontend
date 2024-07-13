import { Link } from "react-router-dom";
import { useState } from "react";
import { VITE_REGISTER_URL } from "../configurations/constants";
import toast from "react-hot-toast";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: null,
  });
  const [loading, setLoading] = useState(false);
  const registerUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("profilePicture", user.profilePicture);

    try {
      const response = await fetch(VITE_REGISTER_URL, {
        method: "POST",
        credentials: "include",
        body: formData,
      });
      const data = await response.json();
      if (data.sucess) {
        toast.success(data.message);
        setLoading(false);
        setUser({
          name: "",
          email: "",
          password: "",
          profilePicture: null,
        }); // Clearing the form
      } else {
        toast.error(data.message);
        setLoading(false);
      }
    } catch (err) {
      toast.error("Internal server error");
      setLoading(false);
    }
  };
  return (
    <section className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col w-1/3 p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Chat Wave</h1>
          <p className="text-sm dark:text-gray-600">
            Sign up to create your account
          </p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                id="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
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
                value={user.password}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Upload your profile picture
            </label>
            <input
              type="file"
              name="profilePicture"
              onChange={(e) =>
                setUser({ ...user, [e.target.name]: e.target.files[0] })
              }
              id="profilePicture"
              placeholder="Upload your profile picture"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                onClick={registerUser}
                className="w-full px-8 py-3 flex items-center justify-center font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
              >
                {loading ? (
                  <div className="w-9 h-9 border-4 border-dashed rounded-full animate-spin dark:border-white"></div>
                ) : (
                  "Sign up"
                )}
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Already have an account ?
              <Link
                to={"/signin"}
                className="hover:underline dark:text-violet-600"
              >
                Sign In
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
