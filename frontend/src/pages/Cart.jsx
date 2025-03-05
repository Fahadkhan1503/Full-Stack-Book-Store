// import { useEffect, useState } from "react"
// import Loader from "../components/Loader/Loader";
// import { MdOutlineDeleteOutline } from "react-icons/md";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const navigate = useNavigate();
//   const [Cart, setCart] = useState();
//   const [Total, setTotal] = useState(0);
//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//   };
//   useEffect(() => {
//     const fetch = async () => {
//       const res = await axios.get("http://localhost:1000/api/v1/get-user-cart", {headers});
//       setCart(res.data.data);
//     }
//     fetch();
//   }, [Cart]);

//   const deleteItem = async (bookid) => {
//     const response = await axios.put(`http://localhost:1000/api/v1/remove-from-cart/${bookid}`, {}, {headers});
//     alert(response.data.message);
//   }

//   useEffect(() => {
//     if(Cart && Cart.length > 0) {
//       let total = 0;
//       Cart.map((items) => {
//         total += items.price;
//       });
//       setTotal(total);
//       total = 0;
//     }
//   }, [Cart]);

//   const PlaceOrder = async () => {

//     try {
//       // console.log("Placing Order with:", Cart);
//       const response = await axios.post(`http://localhost:1000/api/v1/place-order`,
//         {order: Cart},
//         { headers }
//       );
//       // console.log("Sending Order Data:", Cart);

//       alert(response.data.message);
//       navigate("/profile/orderHistory");
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <div className="bg-zinc-900 px-12 h-screen py-8">
//     {!Cart && <div className="w-full h-[100%] flex items-center justify-center"><Loader />{" "}</div>}
//     {Cart && Cart.length === 0 && (
//       <div className="h-screen">
//         <div className="h-[100%] flex items-center justify-center flex-col">
//           <h1 className="text-5xl lg:text-6xl font-semibold text-zinc-400">Empty Cart</h1>
//           <img src="/empty-cart.png" alt="cart empty" className="lg:h-[50vh]" />
//         </div>
//       </div>
//     )}
//     {Cart && Cart.length > 0 && (
//       <>
//       <h1 className="text-5xl font-semibold text-zinc-500 mb-8">Your Cart</h1>
//       {Cart.map((items, i) => (
//         <div key={i}
//         className="2-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center">
//           <img src={items.url} alt="/" className="h-[20vh] md:h-[10vh] object-cover" />
//           <div className="w-full md:w-auto">
//             <h1 className="text-2xl text-zinc-100 font-semibold text-start mt-2 md:mt-0">{items.title}</h1>
//             <p className="text-normal text-zinc-300 mt-2 hidden lg:block">{items.desc.slice(0, 100)}...</p>
//             <p className="text-normal text-zinc-300 mt-2 lg:hidden md:block">{items.desc.slice(0, 65)}...</p>
//             <p className="text-normal text-zinc-300 mt-2 md:hidden block">{items.desc.slice(0, 100)}...</p>
//           </div>
//           <div className="flex mt-4 w-full md:w-auto items-center justify-between">
//             <h2 className="text-zinc-100 text-3xl font-semibold flex">Rs. {items.price}</h2>
//             <button className="bg-red-100 text-red-700 border border-red-700 rounded p-2 ms-12"
//             onClick={() => deleteItem(items._id)}><MdOutlineDeleteOutline /></button>
//           </div>
//         </div>
//       ))}
//       </>
//     )}
//     {Cart && Cart.length > 0 && (
//       <div className="mt-4 w-full flex items-center justify-end">
//         <div className="p-4 bg-zinc-800 rounded">
//           <h1 className="text-3xl text-zinc-200 font-semibold">Total Amount</h1>
//           <div className="mt-3 flex items-center justify-between text-xl text-zinc-200">
//             <h2>{Cart.length} Books</h2><h2> {Total}</h2>
//           </div>
//           <div className="w-[100%] mt-3">
//             <button onClick={PlaceOrder}
//             className="bg-zinc-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-200">
//               Place Your Order
//             </button>
//           </div>
//         </div>
//       </div>
//     )}
//     </div>
//   )
// }

// export default Cart

import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [Cart, setCart] = useState();
  const [Total, setTotal] = useState(0);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchCart = async () => {
      const res = await axios.get(
        "http://localhost:1000/api/v1/get-user-cart",
        { headers }
      );
      setCart(res.data.data);
    };
    fetchCart();
  }, []);

  useEffect(() => {
    if (Cart && Cart.length > 0) {
      let total = Cart.reduce((acc, item) => acc + item.price, 0);
      setTotal(total);
    }
  }, [Cart]);

  const deleteItem = async (bookid) => {
    const response = await axios.put(
      `http://localhost:1000/api/v1/remove-from-cart/${bookid}`,
      {},
      { headers }
    );
    alert(response.data.message);
    setCart(Cart.filter((item) => item._id !== bookid));
  };

  const PlaceOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:1000/api/v1/place-order",
        { order: Cart },
        { headers }
      );
      alert(response.data.message);
      navigate("/profile/orderHistory");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-zinc-900 px-4 sm:px-8 md:px-12 h-screen py-8">
      {!Cart && (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      )}
      {Cart && Cart.length === 0 && (
        <div className="h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-zinc-400">
            Empty Cart
          </h1>
          <img
            src="/empty-cart.png"
            alt="cart empty"
            className="w-3/4 sm:w-1/2 lg:w-1/3"
          />
        </div>
      )}
      {Cart && Cart.length > 0 && (
        <>
          <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-500 mb-6 sm:mb-8">
            Your Cart
          </h1>
          {Cart.map((items, i) => (
            <div
              key={i}
              className="w-full my-4 rounded flex flex-col md:flex-row p-4 bg-zinc-800 justify-between items-center"
            >
              <img
                src={items.url}
                alt="/"
                className="h-32 sm:h-40 md:h-24 lg:h-28 object-cover"
              />
              <div className="w-full md:w-auto text-center md:text-left">
                <h1 className="text-xl sm:text-2xl text-zinc-100 font-semibold mt-2 md:mt-0">
                  {items.title}
                </h1>
                <p className="text-sm sm:text-base text-zinc-300 mt-2 hidden lg:block">
                  {items.desc.slice(0, 100)}...
                </p>
                {/* <p className="text-sm sm:text-base text-zinc-300 mt-2 lg:hidden md:block">
                  {items.desc.slice(0, 65)}...
                </p> */}
                <p className="text-sm sm:text-base text-zinc-300 mt-2 md:hidden block">
                  {items.desc.slice(0, 80)}...
                </p>
              </div>
              <div className="flex flex-col md:flex-row mt-4 md:mt-0 w-full md:w-auto items-center justify-between gap-4">
                <h2 className="text-zinc-100 text-2xl sm:text-3xl font-semibold">
                  Rs. {items.price}
                </h2>
                <button
                  className="bg-red-100 text-red-700 border border-red-700 rounded p-2"
                  onClick={() => deleteItem(items._id)}
                >
                  <MdOutlineDeleteOutline className="text-lg sm:text-xl" />
                </button>
              </div>
            </div>
          ))}
        </>
      )}
      {Cart && Cart.length > 0 && (
        <div className="mt-4 w-full flex items-center justify-center md:justify-end">
          <div className="p-4 bg-zinc-800 rounded w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
            <h1 className="text-xl sm:text-2xl text-zinc-200 font-semibold">
              Total Amount
            </h1>
            <div className="mt-3 flex items-center justify-between text-lg sm:text-xl text-zinc-200">
              <h2>{Cart.length} Books</h2>
              <h2>Rs. {Total}</h2>
            </div>
            <div className="w-full mt-3">
              <button
                onClick={PlaceOrder}
                className="bg-zinc-100 rounded px-4 py-2 flex justify-center w-full font-semibold hover:bg-zinc-200"
              >
                Place Your Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
