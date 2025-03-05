// /* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import axios from "axios";
// const BookCard = ({ data , favourite}) => {

//   const headers = {
//     id: localStorage.getItem("id"),
//     authorization: `Bearer ${localStorage.getItem("token")}`,
//     bookid: data._id,
//   };

//     const handleRemoveBook = async () => {
//       const response = await axios.put(
//         "http://localhost:1000/api/v1/remove-book-from-favourite",
//         {},
//         { headers }
//       );
//       alert(response.data.message);
//     }


//   return (
//     <div className="bg-neutral-300 rounded p-2 flex flex-col">
//       <Link to={`/view-book-details/${data._id}`}>
//         <div className=" ">
//           <div className=" bg-zinc-700 rounded flex items-center justify-center">
//             <img src={data.url} alt="/" className="h-[38vh]" />
//           </div>
//           <h2 className="mt-4 text-xl text-primaryMedium font-bold">
//             {data.title}
//           </h2>
//           <p className="mt-4 text-primaryMedium font-semibold ">by {data.author}</p>
//           <p className="mt-4 text-xl text-primaryMedium font-semibold  ">
//             Rs. {data.price}
//           </p>
//         </div>
//       </Link>
//       {favourite && (
//         <button
//           className=" bg-button px-4 py-2 rounded text-amber-50 mt-4 "
//           onClick={handleRemoveBook}
//         >
//           Remove From favourite
//         </button>
//       )}
//     </div>
//   );
// };

// export default BookCard;


/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ data, favourite }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: data._id,
  };

  const handleRemoveBook = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/remove-book-from-favourite",
      {},
      { headers }
    );
    alert(response.data.message);
  };

  return (
    <div className="bg-[#EFE7DA] backdrop-blur-lg rounded-lg p-6 flex flex-col shadow-xl border border-[#D8C3A5] text-[#4A3F35]">
      <Link to={`/view-book-details/${data._id}`}>
        <div>
          <div className="bg-zinc-700 rounded flex items-center justify-center overflow-hidden shadow-md">
            <img
              src={data.url}
              alt="Book Cover"
              className="h-[38vh] object-cover"
            />
          </div>
          <h2 className="mt-4 text-2xl font-bold text-[#403D39]">
            {data.title}
          </h2>
          <p className="mt-2 text-lg font-medium text-[#6B705C]">
            by {data.author}
          </p>
          <p className="mt-2 text-xl font-semibold text-[#403D39]">
            Rs. {data.price}
          </p>
        </div>
      </Link>
      {favourite && (
        <button
          className="bg-[#B5838D] px-4 py-2 rounded text-white mt-4 hover:bg-[#6D597A] transition font-semibold shadow-md"
          onClick={handleRemoveBook}
        >
          Remove From Favourite
        </button>
      )}
    </div>
  );
};

export default BookCard;
