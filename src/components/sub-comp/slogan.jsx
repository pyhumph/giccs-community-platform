import React from "react";
import handshake from "../../assets/support.png";

const Slogan = () => {
  return (
    <div className="flex items-center mb-2">
      <img src={handshake} alt="handshake_img" className="w-auto h-8 mr-2" />
      <p className="text-[#FFC107] font-[Caveat] font-bold text-[1.5rem]">
        Support Communities for a Better Future
      </p>
    </div>
  );
};

export default Slogan;
