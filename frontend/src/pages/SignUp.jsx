// // import { useState } from "react";
// // import Loader from "../Loader/Loader";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// const SignUp = () => {
//   // const [loading, setLoading] = useState(false);
  
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#FEFAE0]">
//       <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-[#DDA15E] mb-6">
//           Create an Account
//         </h2>
//         <form className="space-y-4">
//           <div>
//             <label className="block text-[#283618] font-medium">Username</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
//               placeholder="Enter your username"
//             />
//           </div>
//           <div>
//             <label className="block text-[#283618] font-medium">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div>
//             <label className="block text-[#283618] font-medium">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
//               placeholder="Enter your password"
//             />
//           </div>
//           <div>
//             <label className="block text-[#283618] font-medium">Home Address</label>
//             <input
//               type="text"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DDA15E]"
//               placeholder="Enter your home address"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#DDA15E] text-white py-2 rounded-lg hover:bg-[#BC6C25] transition-all duration-300"
//           >
//             SignUp
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

const SignUp = () => {
  const [Values, setValues] = useState({username:"", email:"", password:"", address:""});
  const navigate = useNavigate();
  const change = (e) => {
    const {name, value} = e.target;
    setValues({...Values, [name]: value});
  };
  const submit = async () => {
    try {
      if(Values.username === "" || Values.email === "" || Values.password === "" || Values.address === "") {
        alert("All fields are required")
      }
      else {
        const response = await axios.post("http://localhost:1000/api/v1/sign-up",Values)
        alert(response.data.message);
        navigate("/Login");
      }
    } catch (error) {
      alert("Login error:", error.response.data.message); 
    }
  }
  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: "#FEFAE0" }}>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8">
        <h1
          className="text-3xl font-bold mb-8 text-center"
          style={{ color: "#DDA15E" }}
        >
          Create Account
        </h1>

        <div className="space-y-6">
          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium"
              style={{ color: "#283618" }}
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              required
              value={Values.username}
              onChange={change}
              className="mt-1 block w-full rounded-md border-2 shadow-sm p-2 focus:outline-none focus:ring-2"
              style={{
                borderColor: "#606C38",
                backgroundColor: "#FEFAE0",
                focusBorderColor: "#DDA15E",
              }}
            />
            <p className="text-xs mt-1" style={{ color: "#BC6C25" }}>
              (Must be at least 4 characters)
            </p>
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium"
              style={{ color: "#283618" }}
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={Values.email}
              onChange={change}
              className="mt-1 block w-full rounded-md border-2 shadow-sm p-2 focus:outline-none focus:ring-2"
              style={{
                borderColor: "#606C38",
                backgroundColor: "#FEFAE0",
                focusBorderColor: "#DDA15E",
              }}
            />
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium"
              style={{ color: "#283618" }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={Values.password}
              onChange={change}
              // autoComplete="current-password"
              className="mt-1 block w-full rounded-md border-2 shadow-sm p-2 focus:outline-none focus:ring-2"
              style={{
                borderColor: "#606C38",
                backgroundColor: "#FEFAE0",
                focusBorderColor: "#DDA15E",
              }}
            />
            <p className="text-xs mt-1" style={{ color: "#BC6C25" }}>
              (Must be at least 6 characters)
            </p>
          </div>

          <div>
            <label
              htmlFor=""
              className="block text-sm font-medium"
              style={{ color: "#283618" }}
            >
              Home Address
            </label>
            <textarea
              type="text"
              name="address"
              required
              value={Values.address}
              onChange={change}
              className="mt-1 block w-full rounded-md border-2 shadow-sm p-2 focus:outline-none focus:ring-2"
              style={{
                borderColor: "#606C38",
                backgroundColor: "#FEFAE0",
                focusBorderColor: "#DDA15E",
              }}
            />
          </div>

          <button
            // type="submit"
            className="w-full py-2 px-4 rounded-md font-medium text-white hover:opacity-90 transition-opacity duration-200"
            style={{ backgroundColor: "#DDA15E" }}
            onClick={submit}
          >
            Create Account
          </button>
        </div>

        <p className="mt-6 text-center text-sm" style={{ color: "#283618" }}>
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium hover:underline"
            style={{ color: "#BC6C25" }}
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;