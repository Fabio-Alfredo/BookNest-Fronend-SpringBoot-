import React from "react";
import books from "../../assets/books.png";

const BannerSection = () => {
  return (
    <>
      <div className="w-full relative h-44 md:h-2/5 flex justify-center items-center">
        <img
          src={books}
          alt="Books"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative w-fitt z-20 flex flex-col justify-center items-center text-black px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Welcome to the Book Store
          </h2>
          <p className="text-lg text-center mb-4">
            Discover a world of knowledge and adventure
          </p>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
