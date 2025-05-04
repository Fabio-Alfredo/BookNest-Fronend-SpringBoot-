import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React from "react";
export const CircularList = () => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap py-4 ">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="inline-block w-60 mx-2 bg-white rounded shadow"
        >
          <img
            src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
            alt="book"
            className="w-full h-40 object-cover rounded-t"
          />
          <div className="p-2 text-black">Subheader</div>
        </div>
      ))}
    </div>
  );
};

export default CircularList;
