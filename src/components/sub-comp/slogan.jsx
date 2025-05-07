import React from "react";
import handshake from "../../assets/support.png";

const Slogan = ({
  text = "Support Communities for a Better Future",
  image = handshake,
  imageAlt = "handshake_img",
  textColor = "text-[#FFC107]",
  fontFamily = "font-[Caveat]",
  fontWeight = "font-bold",
  fontSize = "text-[1.5rem]",
}) => {
  return (
    <div className="flex items-center mb-2">
      <img src={image} alt={imageAlt} className="w-auto h-8 mr-2" />
      <p className={`${textColor} ${fontFamily} ${fontWeight} ${fontSize}`}>
        {text}
      </p>
    </div>
  );
};

export default Slogan;
