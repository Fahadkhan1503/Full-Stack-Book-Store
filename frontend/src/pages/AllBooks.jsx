// import { useEffect, useState } from "react";
// import axios from "axios";
// import BookCard from "../components/BookCard/BookCard";
// import Loader from "../components/Loader/Loader";

// const AllBooks = () => {
//   const [Data, setData] = useState();
//   useEffect(() => {
//     const fetch = async () => {
//       const response = await axios.get(
//         "http://localhost:1000/api/v1/get-all-books"
//       );
//       setData(response.data.data);
//     };
//     fetch();
//   }, []);
//   return (
//     <div className=" bg-bg1 h-auto px-12 py-8 ">
//       <h4 className="text-3xl text-primary">All Books</h4>
//       {!Data && (
//         <div className="w-full h-screen flex items-center justify-center"><Loader />{" "}</div>
//       )}
//       <div className=" my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
//         {Data &&
//           Data.map((items, i) => (
//             <div key={i}>
//               <BookCard data={items} />{" "}
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default AllBooks;


import { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard/BookCard";
import Loader from "../components/Loader/Loader";

const AllBooks = () => {
  const [Data, setData] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1000/api/v1/get-all-books"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  // Filter books based on selected language
  const filteredBooks =
    selectedLanguage === "all"
      ? Data
      : Data.filter((book) => book.language === selectedLanguage);

  return (
    <div className="bg-bg1 h-auto px-12 py-8">
    <h4 className="text-3xl font-semibold text-accentDark mb-2">All Books</h4>
      <div className="flex justify-between items-center">
        {/* Language Filter Dropdown */}
        <select
          className="mt-2 border border-primaryDark px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-zinc-950 text-semibold"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="all">All Languages</option>
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
        </select>
      </div>

      {!Data.length ? (
        <div className="w-full h-screen flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {filteredBooks.map((items, i) => (
            <div key={i}>
              <BookCard data={items} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
