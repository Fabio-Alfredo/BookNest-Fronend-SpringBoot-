import React from "react";

const ContactUsPanel = () => {
  return (
    <>
      <div className="flex flex-col px-4 pt-5 max-w-md mx-auto text-center">
        <div className="w-full">
          <h2 className="text-lg sm:text-2xl font-bold">Let’s Talk</h2>
          <p className="text-sm sm:text-xl text-gray-600 mb-2 sm:pb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            quaerat quisquam placeat blanditiis iusto hic!
          </p>
        </div>

        <div className="flex flex-col items-center justify-center pb-5">
          <h3 className=" text-lg sm:text-2xl font-semibold mb-2">Email Us</h3>
          <p className="text-sm sm:text-xl">fabioalfredo@gmail.com</p>
        </div>
      </div>
    </>
  );
};

export default ContactUsPanel;
