import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-20">
      <div className="px-20">
        <div>
          <h2 className=" text-7xl font-bold">
            Find, book, rent a car—quick and super easy!
          </h2>
          <p className="text-2xl font-light mt-4">
            Streamline your car rental experience with our effortless booking
            process.
          </p>
        </div>

        <div>
          <button className="bg-blue-500 px-6 py-2 text-white rounded-full mt-10">
            Explore Cars
          </button>
        </div>

        <div className="relative mt-6">
          <div className="relative w-full h-screen">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />

            <div className="-z-10 absolute -top-[6%] left-[10%] w-full h-screen">
              <Image
                src="/hero-bg.png"
                alt="hero-bg"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
