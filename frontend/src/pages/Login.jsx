
import { useState } from "react";
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
  

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      if (Values.username === "" || Values.password === "") {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "https://full-stack-book-store-seven.vercel.app/api/v1/sign-in",
          Values
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
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FEFAE0]">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-[#DDA15E] mb-6">
          Login to Your Account
        </h2>
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
