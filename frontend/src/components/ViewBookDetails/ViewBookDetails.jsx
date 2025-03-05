import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ViewBookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:1000/api/v1/get-book-by-id/${id}`
      );
      console.log(response);
      setData(response.data.data);
    };
    fetch();
  }, []);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  }

  const handleFavourite = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/add-book-to-favourite",
      {},
      { headers }
    );
    alert(response.data.message);
  };

  const handleCart = async () => {
    const response = await axios.put(
      "http://localhost:1000/api/v1/add-to-cart",
      {},
      { headers }
    );
    alert(response.data.message);
  }
  const deleteBook = async () => {
    const response = await axios.delete(
      `http://localhost:1000/api/v1/delete-book`,
      { headers }
    );
    alert(response.data.message);
    navigate("/all-books")
  }
  
  return (
    <>
      {Data && (
        <div className="px-4 md:px-12 py-8 bg-bg1 flex flex-col lg:flex-row gap-8 item-start">
          <div className="w-full lg:w-3/6 ">
            <div className="flex flex-col lg:flex-row justify-around bg-zinc-800 p-12 rounded ">
              <img
                src={Data.url}
                alt="/"
                className="h-[50vh] md:h-[60vh] lg:h-[70vh] rounded "
              />
              {isLoggedIn === true && role === "user" && (
                <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0 ">
                  <button
                    className=" text-amber-50 rounded-lg lg:rounded-full text-3xl p-3 bg-red-800 flex items-center justify-center "
                    onClick={handleFavourite}
                  >
                    <MdFavorite />
                    <span className="ms-4 block lg:hidden"> Favorites </span>
                  </button>
                  <button
                    className=" text-amber-50 rounded-lg  mt-8 md:mt-0 lg:rounded-full text-3xl p-3 lg:mt-8 bg-blue-900 flex items-center justify-center "
                    onClick={handleCart}
                  >
                    <FaShoppingCart />
                    <span className="ms-4 block lg:hidden"> Add to cart </span>
                  </button>
                </div>
              )}
              {isLoggedIn === true && role === "admin" && (
                <div className="flex flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0 ">
                  <Link
                    to={`/updateBook/${id}`}
                    className=" bg-amber-50 rounded-lg lg:rounded-full text-3xl p-3 text-red-800 flex items-center justify-center "
                  >
                    <FaEdit />
                    <span className="ms-4 block lg:hidden"> Edit Book </span>
                  </Link>
                  <button
                    className=" text-red-500 rounded-lg md:mt-0 lg:rounded-full text-3xl p-3 mt-0 lg:mt-8 bg-white flex items-center justify-center cursor-pointer "
                    onClick={deleteBook}
                  >
                    <MdDeleteOutline />
                    <span className="ms-4 block lg:hidden"> Delete Book </span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="p-4 w-full lg:w-3/6">
            <h1 className="text-4xl text-accentDark font-semibold">
              {Data.title}
            </h1>
            <p className="text-accentLight font-semibold mt-1">By {Data.author}</p>
            <p className="text-primaryDark mt-4 text">{Data.desc}</p>
            <p className="flex mt-4 items-center justify-start text-primaryDark">
              <GrLanguage className=" me-3" /> {Data.language}
            </p>
            <p className="mt-4 text-accentLight text-3xl font-semibold">
              Price: Rs {Data.price}{" "}
            </p>
          </div>
        </div>
      )}
      {!Data && (
        <div className="h-screen bg-zinc-900 flex items-center justify-center">
          <Loader />{" "}
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
