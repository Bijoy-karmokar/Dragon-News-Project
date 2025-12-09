import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUS = () => {
  return (
    <div>
      <h3 className="text-xl font-medium mt-5">Find Us On</h3>
      <div className="join join-vertical w-full">
        <button className="btn join-item"><FaFacebook></FaFacebook> Facebook</button>
        <button className="btn join-item"><FaTwitter></FaTwitter> Twitter</button>
        <button className="btn join-item"><FaInstagram></FaInstagram> Instagram</button>
      </div>
    </div>
  );
};

export default FindUS;
