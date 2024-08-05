import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

const NotFound = () => {
  return (
    <>
    <div
      className='pt-2 flex justify-center items-center'
      style={{ height: "80vh" }}
    >
      <div className='text-center'>
        <h1 className='font-extrabold text-9xl'>404</h1>
        <h2 className='font-extrabold text-3xl'>Page Not Found</h2>
      </div>
    </div>
    </>
  );
};

export default NotFound;
