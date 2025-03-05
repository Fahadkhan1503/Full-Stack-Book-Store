import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="h-[75vh] flex flex-col md:flex-row items-center justify-center">
      <div className="w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
        <h1 className=" text-4xl lg:text-6xl font-bold text-accentDark text-center lg:text-left ">
          Read Your Next Book Now!
        </h1>
        <p className="mt-4 text-xl text-accentLight font-semibold text-center lg:text-left ">
          Discover a world of stories at your fingertips. Explore, read, and
          indulge in books that inspire you!
        </p>
        <div className=" mt-8">
          <Link to={"/all-books"} className=" text-accentDark text-xl  lg:text-2xl font-bold border border-primaryDark px-10 py-2 hover:bg-primaryMedium hover:text-white rounded-full">
            Discover Books
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center ">
        <img src="./hero.png" alt="hero image" className="pointer-events-none" />
      </div>
    </div>
  );
};

export default Hero;
