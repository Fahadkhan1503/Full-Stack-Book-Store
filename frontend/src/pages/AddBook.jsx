import { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async () => {
    try {
      if (
        Data.url === "" ||
        Data.title === "" ||
        Data.author === "" ||
        Data.price === "" ||
        Data.desc === "" ||
        Data.language === ""
      ) {
        alert("All fields are required");
      } else {
        const response = await axios.post(
          "http://localhost:1000/api/v1/add-book",
          Data,
          { headers }
        );
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          desc: "",
          language: "",
        });
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className=" h-[100%] p-0 md:p-4">
      <h1 className=" text-3xl md:text-5xl font-semibold text-button mb-8">
        ADD BOOK
      </h1>
      <div className=" p-4 bg-bg1 rounded ">
        <div>
          <label htmlFor="" className="text-zinc-900 font-semibold">
            Image
          </label>
          <input
            type="text"
            className=" w-full mt-2 bg-zinc-900 text-red-100 p-2 outline-none"
            placeholder="url of image"
            name="url"
            required
            value={Data.url}
            onChange={change}
          />
          <div className="mt-4">
            <label htmlFor="" className="text-zinc-900 font-semibold">
              Title of Book
            </label>
            <input
              type="text"
              className=" w-full mt-2 bg-zinc-900 text-red-100 p-2 outline-none"
              placeholder="Title of book"
              name="title"
              required
              value={Data.title}
              onChange={change}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="" className="text-zinc-900 font-semibold">
              Author of Book
            </label>
            <input
              type="text"
              className=" w-full mt-2 bg-zinc-900 text-red-100 p-2 outline-none"
              placeholder="Author of Book"
              name="author"
              required
              value={Data.author}
              onChange={change}
            />
          </div>
          <div className="mt-4 flex gap-4">
            <div className=" w-3/6">
              <label htmlFor="" className="text-zinc-900 font-semibold">
                language
              </label>
              <input
                type="text"
                className=" w-full mt-2 bg-zinc-900 text-red-100 p-2 outline-none"
                placeholder="language of Book"
                name="language"
                required
                value={Data.language}
                onChange={change}
              />
            </div>
            <div className=" w-3/6">
              <label htmlFor="" className="text-zinc-900 font-semibold">
                Price
              </label>
              <input
                type="text"
                className=" w-full mt-2 bg-zinc-900 text-red-100 p-2 outline-none"
                placeholder="Price of Book"
                name="price"
                required
                value={Data.price}
                onChange={change}
              />
            </div>
          </div>
          <div className=" mt-4">
            <label htmlFor="" className="text-zinc-900 font-semibold">
              Description of Book
            </label>
            <input
              type="text"
              className=" w-full mt-2 bg-zinc-900 text-red-100 p-2 outline-none"
              placeholder="Description of Book"
              name="desc"
              required
              value={Data.desc}
              onChange={change}
            />
          </div>

          <button className=" mt-4 px-3 bg-amber-400 font-semibold py-2 rounded hover:bg-amber-200 transition-shadow"
          onClick={submit}>Add Book</button>
        
      </div>
    </div>
    </div>
  );
};

export default AddBook;
