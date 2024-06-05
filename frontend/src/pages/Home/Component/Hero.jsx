import React from "react";
import background from "../../../assets/background.jfif";
const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex text-center justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="font-urbanist">
        <p className="text-5xl font-bold text-white">
          Discover New Place and Create <br />Unforgatteble Memories
        </p>
      </div>
    </div>
  );
};

export default Hero;
