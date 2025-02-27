// /* eslint-disable react/jsx-key */
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Loader from "../components/Loader/Loader";
// import { FaUserLarge } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// const AllOrders = () => {
//   const [AllOrders, setAllOrders] = useState();
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };
//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         "http://localhost:1000/api/v1/get-all-orders",
//         { headers }
//       );
//       setAllOrders(response.data.data);
//     };
//     fetch();
//   }, []);
//   return (
//     <>
//       {!AllOrders && (
//         <div className="h-[100%] flex items-center justify-center">
//           <Loader />
//         </div>
//       )}

//       {AllOrders && AllOrders.length > 0 && (
//         <div className="h-[100%] p-0 md:p-4 text-zinc-100">
//           <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
//             All Orders
//           </h1>
//           <div className="mt-4 bg-zinc-700 w-full rounded py-2 px-4 flex gap-2">
//             <div className="w-[3%]">
//               <h1 className="text-center">Sr.</h1>
//             </div>
//             <div className="w-[40%] md:w[22%]">
//               <h1 className="">Books</h1>
//             </div>
//             <div className="w-0 md:w-[45%] hidden md:block">
//               <h1 className="">Description</h1>
//             </div>
//             <div className="w-[17%] md:w-[9%]">
//               <h1 className="">Price</h1>
//             </div>
//             <div className="w-[30%] md:w-[16%]">
//               <h1 className="">Status</h1>
//             </div>
//             <div className="w-[10%] md:w-[5%]">
//               <h1 className="">
//                 <FaUserLarge />
//               </h1>
//             </div>
//           </div>
//           {AllOrders.map((items, i) => (
//             <div className="bg-zinc-400 w-full rounded py-2 px-4 flex gap-2 hover:bg-zinc-950 hover:cursor-pointer transition-all duration-300">
//               <div className="w-[3%]">
//                 <h1 className="text-center">{i + 1}</h1>
//               </div>
//               <div className="w-[40%] md:w-[22%]">
//               <Link to={`/view-book-details/${items.book._}`}
//                     className="hover:text-blue-300"
//                 >
//                 {items.book.title}
//                 </Link>
//             </div>
//             <div className=" w-0 md:w-[45%] hidden md:block">
//               <h1 className="">{items.book.desc.slice(0, 50)}...</h1>
//             </div>
//             <div className="w-[17%] md:w-[9%]">
//                 <h1 className="">Rs. {items.book.price}</h1>
//             </div>
//             <div className="w-[30%] md:w-[16%]">
//               <h1 className="font-semibold">
//                 <button className="hover:scale-105 transition-all duration-300">
//                   {items.status === "Order placed" ? (
//                     <div className="text-yellow-500">{items.status}</div>
//                   ) : items.status === "Canceled" ? (
//                     <div className="text-red-500">{items.status}</div>
//                   ) : (
//                     <div className="text-green-500">{items.status}</div>
//                   )
//                   }
//                 </button>
//                 <div className="flex">
                  
//                 </div>
//               </h1>     
//             </div>

//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default AllOrders;



const AllOrders = () => {
  return (
    <div>AllOrders</div>
  )
}

export default AllOrders