
import { useState } from "react";
// import Loader from "../components/Loader/Loader";
import axios from "axios";
import {authActions} from '../store/auth';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [Values, setValues] = useState({username:"", password:""});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const change = (e) => {
    const {name, value} = e.target;
    setValues({...Values, [name]: value});
  };
  // const submit = async () => {
  //   try {
  //     if(Values.username === "" || Values.password === "") {
  //       alert("All fields are required")
  //     }
  //     else {
  //       const response = await axios.post("http://localhost:1000/api/v1/sign-in",Values)
  //       console.log(response.data);
  //       //navigate("/Login");
  //     }
  //   } catch (error) {
  //     alert(error.response.data.message);
  //   }
  // }

//   When you click the Login button, it submits the form.
// By default, form submission causes the browser to refresh the page.

// 👉 e.preventDefault() stops this default behavior, preventing the page from reloading.

// Why Does This Fix Your Errors?
// Without e.preventDefault():

// The page refreshes before the submit function completes.
// This cancels the API request or disrupts it.
// Errors don't show because the page reloads before they can be displayed.
// With e.preventDefault():
// ✔ The API request completes properly.
// ✔ Errors display in alerts instead of disappearing.
// ✔ The page stays the same, making it feel smoother.


  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      if (Values.username === "" || Values.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/sign-in",
          Values,
          // { headers: { "Content-Type": "application/json" } } // Ensure correct headers
        );
        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        navigate("/profile"); // Redirect if needed
      }
    } catch (error) {
      // e.preventDefault();
      alert(error.response?.data?.message || "Login error");

      // Debugging: Log the error in console
  
      // if (error.response) {
      //   alert(error.response.data.message || "Invalid credentials"); // Show correct error
      // } else if (error.request) {
      //   alert("No response from server. Check your connection.");
      // } else {
      //   alert("Something went wrong. Please try again.");
      // }
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFAE0]">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-[#DDA15E] mb-6">
          Login to Your Account
        </h2>
        {/* {(
          <div className="flex items-center justify-center my-4">
            <Loader />
          </div>
        )} */}
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              name="username"
              value={Values.username}
              onChange={change}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={Values.password}
              onChange={change}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
              required
            />
          </div>
          <button
            onClick={submit}
            className="w-full bg-[#DDA15E] text-white font-semibold py-2 rounded-lg hover:bg-[#BC6C25] transition-all"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Dont have an account? <a href="/sign-up" className="text-[#DDA15E] hover:text-[#BC6C25]">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
