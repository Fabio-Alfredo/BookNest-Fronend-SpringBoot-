import React from "react";

const FeaturedBooksSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center py-4">
        <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="w-40 sm:w-56 md:w-60 mx-2 my-2 bg-white rounded shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                alt="book"
                className="w-full h-30 sm:h-40 object-cover rounded-t"
              />
              <div className="p-2 text-black">Subheader</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedBooksSection;
