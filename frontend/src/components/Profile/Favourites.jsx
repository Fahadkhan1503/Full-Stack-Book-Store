import { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../BookCard/BookCard";
const Favourites = () => {
  const [FavouriteBooks, setFavouriteBooks] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://full-stack-book-store-seven.vercel.app/api/v1/get-favourite-books",
        { headers }
      );
      setFavouriteBooks(response.data.data);
    };
    fetch();
  }, [FavouriteBooks]);

  return (
    <>
      {FavouriteBooks && FavouriteBooks.length === 0 && (
        <div className=" text-5xl font-semibold h-[100%] text-zinc-800 flex items-center justify-center flex-col w-full bg-neutral-400 rounded-md ">
          No Favourite Books
          <img src="./star.png" alt="star" className="h-[20vh] my-8" />
        </div>
      )}
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-3">
        {FavouriteBooks &&
          FavouriteBooks.map((items, i) => (
            <div key={i}>
              <BookCard data={items} favourite={true} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Favourites;
